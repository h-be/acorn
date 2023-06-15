import * as path from 'path'
import { app } from 'electron'
import {
  ElectronHolochainOptions,
  StateSignal,
  PathOptions,
} from '@lightningrodlabs/electron-holochain'
import { DATASTORE_PATH, KEYSTORE_PATH, PROFILES_HAPP_PATH } from './paths'

// these messages get seen on the splash page
export enum StateSignalText {
  IsFirstRun = 'Welcome to Acorn...',
  IsNotFirstRun = 'Loading...',
  CreatingKeys = 'Creating cryptographic keys...',
  RegisteringDna = 'Registering Profiles DNA to Holochain...',
  InstallingApp = 'Installing DNA bundle to Holochain...',
  EnablingApp = 'Enabling DNA...',
  AddingAppInterface = 'Attaching API network port...',
}

export function stateSignalToText(state: StateSignal): StateSignalText {
  switch (state) {
    case StateSignal.IsFirstRun:
      return StateSignalText.IsFirstRun
    case StateSignal.IsNotFirstRun:
      return StateSignalText.IsNotFirstRun
    case StateSignal.CreatingKeys:
      return StateSignalText.CreatingKeys
    case StateSignal.RegisteringDna:
      return StateSignalText.RegisteringDna
    case StateSignal.InstallingApp:
      return StateSignalText.InstallingApp
    case StateSignal.EnablingApp:
      return StateSignalText.EnablingApp
    case StateSignal.AddingAppInterface:
      return StateSignalText.AddingAppInterface
  }
}

// in production
// must point to unpacked versions, not in an asar archive
// in development
// fall back on defaults in the electron-holochain package
const BINARY_PATHS: PathOptions | undefined = app.isPackaged
  ? {
      holochainRunnerBinaryPath: path.join(
        __dirname,
        `../../app.asar.unpacked/binaries/holochain-runner${
          process.platform === 'win32' ? '.exe' : ''
        }`
      ),
    }
  : undefined

// NEEDS TO MATCH IN THE `web` folder source code
// `MAIN_APP_ID`
const MAIN_APP_ID = 'main-app'

const ACORN_AGENT_NUM = parseInt(process.env.ACORN_AGENT_NUM)
console.log('ACORN_AGENT_NUM', ACORN_AGENT_NUM)

const devOptions: ElectronHolochainOptions = {
  happPath: PROFILES_HAPP_PATH, // preload
  datastorePath: DATASTORE_PATH,
  appId: MAIN_APP_ID,
  appWsPort: 8100 + ACORN_AGENT_NUM,
  adminWsPort: 1100 + ACORN_AGENT_NUM,
  keystorePath: KEYSTORE_PATH,
  passphrase: 'test-passphrase',
  bootstrapUrl: 'https://bootstrap.holo.host',
}
const prodOptions: ElectronHolochainOptions = {
  happPath: PROFILES_HAPP_PATH, // preload
  datastorePath: DATASTORE_PATH,
  appId: MAIN_APP_ID,
  appWsPort: 8889,
  adminWsPort: 1235,
  keystorePath: KEYSTORE_PATH,
  passphrase: 'test-passphrase',
  bootstrapUrl: 'https://bootstrap.holo.host',
}

export { BINARY_PATHS, devOptions, prodOptions }
