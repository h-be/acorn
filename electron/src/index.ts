import { app, BrowserWindow, ipcMain, shell, autoUpdater, Menu } from 'electron'
import * as contextMenu from 'electron-context-menu'
import * as path from 'path'
import * as fs from 'fs'
import initAgent, {
  ERROR_EVENT,
  StateSignal,
  STATUS_EVENT,
  HOLOCHAIN_LOG_EVENT,
  WASM_LOG_EVENT,
} from '@lightningrodlabs/electron-holochain'

import { devOptions, prodOptions, stateSignalToText } from './holochain'
import {
  ACORN_HAPP_PATH,
  BINARY_PATHS,
  INTEGRITY_VERSION_NUMBER,
  KEYSTORE_VERSION_NUMBER,
  PREV_VER_USER_DATA_MIGRATION_FILE_PATHS,
  USER_DATA_MIGRATION_FILE_PATH,
} from './paths'
import defaultMenu from 'electron-default-menu'
import factoryResetWithWarning from './factory-reset'

// Get default menu template
const menu = defaultMenu(app, shell)
const newMenuItem = {
  label: 'Factory Reset',
  click: factoryResetWithWarning,
}
// Add custom menu
if (Array.isArray(menu[0].submenu)) {
  menu[0].submenu.splice(1, 0, newMenuItem)
}

// Set application menu
Menu.setApplicationMenu(Menu.buildFromTemplate(menu))

// add the right-click "context" menu
contextMenu.default({
  showSaveImageAs: true,
})

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// if (require('electron-squirrel-startup')) {
// eslint-disable-line global-require
// app.quit()
// }
process.on('uncaughtException', (e) => {
  console.error('an unhandled error occurred:', e)
})

const BACKGROUND_COLOR = '#f7f5f3'

const MAIN_FILE = path.join(
  app.getAppPath(),
  '../app.asar.unpacked/web/index.html'
)
const SPLASH_FILE = path.join(
  app.getAppPath(),
  '../app.asar.unpacked/web/splashscreen.html'
)
const LINUX_ICON_FILE = path.join(
  app.getAppPath(),
  '../app.asar.unpacked/web/logo/acorn-app-icon-512px.png'
)

const DEVELOPMENT_UI_URL = `http://localhost:${process.env.WEB_PORT}`

const createMainWindow = (): BrowserWindow => {
  // Create the browser window.
  const options: Electron.BrowserWindowConstructorOptions = {
    height: 1080,
    width: 1920,
    show: false,
    backgroundColor: BACKGROUND_COLOR,
    // use these settings so that the ui
    // can check paths
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  }
  if (process.platform === 'linux') {
    options.icon = LINUX_ICON_FILE
  }
  const mainWindow = new BrowserWindow(options)
  // and load the index.html of the app.
  if (app.isPackaged) {
    mainWindow.loadFile(MAIN_FILE)
  } else {
    // development
    mainWindow.loadURL(DEVELOPMENT_UI_URL)
  }
  // Open <a href='' target='_blank'> with default system browser
  mainWindow.webContents.on('new-window', function (event, url) {
    event.preventDefault()
    shell.openExternal(url)
  })

  // let the browser window know when the individual project export
  // download has completed
  mainWindow.webContents.session.on(
    'will-download',
    (event, item, webContents) => {
      // Set the save path, making Electron not to prompt a save dialog.
      // item.setSavePath('/tmp/save.pdf')
      item.once('done', (event, state) => {
        if (state === 'completed') {
          mainWindow.webContents.send('exportDownloaded')
        }
      })
    }
  )

  // once its ready to show, show
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  autoUpdater.once('update-downloaded', () => {
    mainWindow.webContents.send('updateDownloaded')
    // give the client UI a couple seconds to alert the user
    setTimeout(() => {
      autoUpdater.quitAndInstall()
    }, 4000)
  })

  return mainWindow
}

const createSplashWindow = (): BrowserWindow => {
  // Create the browser window.
  const splashWindow = new BrowserWindow({
    height: 450,
    width: 800,
    center: true,
    resizable: false,
    frame: false,
    show: false,
    backgroundColor: BACKGROUND_COLOR,
    // use these settings so that the ui
    // can listen for status change events
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  })

  // and load the splashscreen.html of the app.
  if (app.isPackaged) {
    splashWindow.loadFile(SPLASH_FILE)
  } else {
    // development
    splashWindow.loadURL(`${DEVELOPMENT_UI_URL}/splashscreen.html`)
  }
  // once its ready to show, show
  splashWindow.once('ready-to-show', () => {
    splashWindow.show()
  })

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
  return splashWindow
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  const splashWindow = createSplashWindow()
  const opts = app.isPackaged ? prodOptions : devOptions
  const { statusEmitter, shutdown } = await initAgent(app, opts, BINARY_PATHS)
  let mainWindow: BrowserWindow | null = null
  statusEmitter.on(STATUS_EVENT, (state: StateSignal) => {
    switch (state) {
      case StateSignal.IsReady:
        // important that this line comes before the next one
        // otherwise this triggers the 'all-windows-closed'
        // event
        mainWindow = createMainWindow()
        splashWindow.close()
        break
      default:
        splashWindow.webContents.send('status', stateSignalToText(state))
    }
  })
  statusEmitter.on(ERROR_EVENT, (error: Error) => {
    if (!error.message.includes('no project meta exists')) {
      if (mainWindow) {
        mainWindow.webContents.send('holochainError', error.message)
      }
    }
  })
  statusEmitter.on(HOLOCHAIN_LOG_EVENT, (log: string) => {
    if (mainWindow) {
      mainWindow.webContents.send('holochainLog', log)
    }
  })
  statusEmitter.on(WASM_LOG_EVENT, (log: string) => {
    if (mainWindow) {
      mainWindow.webContents.send('wasmLog', log)
    }
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow()
  }
})

ipcMain.handle('getProjectsPath', () => {
  return ACORN_HAPP_PATH
})

ipcMain.handle('getVersion', () => {
  return {
    // append v to match the tag name
    version: `v${app.getVersion()}`,
    platform: process.platform,
    arch: process.arch,
    integrityVersion: INTEGRITY_VERSION_NUMBER,
    keystoreFolderVersion: KEYSTORE_VERSION_NUMBER,
  }
})

ipcMain.on('initiateUpdate', () => {
  console.log('received initiateUpdate')
  if (app.isPackaged) {
    const server = 'https://update.electronjs.org'
    const feed = `${server}/lightningrodlabs/acorn/${process.platform}-${
      process.arch
    }/v${app.getVersion()}`
    console.log(`autoUpdater.setFeedURL({ url: ${feed} })`)
    autoUpdater.setFeedURL({ url: feed })
    // at this point we are not so much 'checking for updates'
    // as we are pretty sure (via the front-end) that there is an update
    // for us to download, and we've been instructed to.
    autoUpdater.checkForUpdates()
    // once the update is downloaded, it will trigger the 'update-downloaded' event, which will be
    // separately listened for, and an event emitted to the client
  } else {
    // we're in development mode, so just send the event to the client
    // as if the update was downloaded
    const windows = BrowserWindow.getAllWindows()
    if (windows.length > 0) {
      windows[0].webContents.send('updateDownloaded')
    }
  }
})

ipcMain.handle('persistExportData', (event, data) => {
  console.log('received persistExportData')
  console.log('migrationFile', USER_DATA_MIGRATION_FILE_PATH)
  try {
    const dataObj = JSON.parse(data)
    const modifiedData = {
      integrityVersion: INTEGRITY_VERSION_NUMBER,
      ...dataObj,
    }
    fs.writeFileSync(
      USER_DATA_MIGRATION_FILE_PATH,
      JSON.stringify(modifiedData, null, 2),
      {
        encoding: 'utf-8',
      }
    )
  } catch (e) {}
})

ipcMain.handle('checkForMigrationData', (event) => {
  console.log('received checkForMigrationData')
  // look for any migration file from an eligible previous version
  // if it exists, we will plan to migrate from that version to this new one
  const existingMigrationPath = PREV_VER_USER_DATA_MIGRATION_FILE_PATHS.find(
    (prevPath) => {
      return fs.existsSync(prevPath)
    }
  )
  // if we found a migration file, read it and send it to the client
  if (existingMigrationPath) {
    const prevVersionMigrationDataString = fs.readFileSync(
      existingMigrationPath,
      { encoding: 'utf-8' }
    )
    return {
      file: existingMigrationPath,
      data: prevVersionMigrationDataString,
    }
  } else {
    return null
  }
})

ipcMain.on('markMigrationDone', () => {
  console.log('received markMigrationDone')
  // delete any migration files, thus completing the migration
  PREV_VER_USER_DATA_MIGRATION_FILE_PATHS.forEach((prevPath) => {
    if (fs.existsSync(prevPath)) {
      fs.unlinkSync(prevPath)
    }
  })
})

ipcMain.on('factoryResetWithWarning', () => {
  factoryResetWithWarning()
})
