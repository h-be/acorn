import React, { useEffect, useState } from 'react'

import './RunUpdate.scss'

// @ts-ignore
import AcornLogo from '../../images/acorn-logo.svg'
import ProgressIndicator from '../../components/ProgressIndicator/ProgressIndicator'
import Typography from '../../components/Typography/Typography'
import exportProjectsData, {
  AllProjectsDataExport,
} from '../../migrating/export'
import { useStore } from 'react-redux'
import importProjectsData from '../../migrating/import'
import { useHistory } from 'react-router-dom'

const persistExportedData = async (
  allProjectsDataExport: AllProjectsDataExport
) => {
  if (window.require) {
    const { ipcRenderer } = window.require('electron')
    await ipcRenderer.invoke(
      'persistExportData',
      JSON.stringify(allProjectsDataExport, null, 2)
    )
  }
}

const downloadNextVersion = async () => {
  if (window.require) {
    const { ipcRenderer } = window.require('electron')
    ipcRenderer.send('initiateUpdate')
    await new Promise<void>((resolve, reject) => {
      ipcRenderer.once('updateDownloaded', () => {
        console.log('finished downloading update')
        resolve()
      })
    })
  }
}

const markMigrationDone = () => {
  if (window.require) {
    const { ipcRenderer } = window.require('electron')
    ipcRenderer.send('markMigrationDone')
  }
}

export type RunUpdateProps = {
  preRestart?: boolean
  toVersion?: string
  migrationData?: string
}

const RunUpdate: React.FC<RunUpdateProps> = ({
  preRestart,
  toVersion,
  migrationData,
}) => {
  // if not preRestart, then this is postRestart

  const store = useStore()
  const history = useHistory()

  const [title, setTitle] = useState(
    preRestart ? 'Preparing your update' : 'Finishing your update'
  )
  const [status, setStatus] = useState('')
  const [progress, setProgress] = useState(0.01) // percent

  const runExport = async () => {
    setStatus('Exporting your data.')
    const allExportData = await exportProjectsData(
      store,
      toVersion,
      (completed, toComplete) => {
        // percent
        // the + 1 is because there's an additional step after
        setProgress(Math.floor((completed / (toComplete + 1)) * 100))
      }
    )
    await persistExportedData(allExportData)
    setStatus('Now downloading the new version.')
    await downloadNextVersion()
    setStatus(
      'The update has finished downloading. The app will restart shortly.'
    )
  }

  const runImport = async () => {
    setStatus('Importing your data.')
    await importProjectsData(store, migrationData, (completed, toComplete) => {
      // percent
      // avoid 100 % because it does green checkmark
      let newProgress = Math.floor((completed / toComplete) * 100)
      if (newProgress === 100) {
        newProgress = 99.9
      }
      setProgress(newProgress)
    })
    markMigrationDone()
    setTitle('Finished your update')
    setStatus(
      'Your data was imported, you are ready to go! You will be redirected in a moment.'
    )
    setTimeout(() => {
      history.push('/dashboard')
    }, 4000)
  }

  // on component mount, initiate
  useEffect(() => {
    if (preRestart) {
      runExport()
    } else {
      runImport()
    }
  }, [preRestart])

  return (
    <div className="run-update-screen-wrapper">
      <div className="run-update-screen">
        <div className="run-update-circle-with-logo">
          <div className="run-update-circle">
            <ProgressIndicator progress={progress} />
          </div>
          <div className="run-update-rotating-logo">
            <img src={AcornLogo} />
          </div>
        </div>
        <div className="run-update-screen-heading">
          <Typography style={'h3'}>{title}</Typography>
        </div>
        <div className="run-update-screen-subheading">
          <Typography style={'body1'}>{status}</Typography>
        </div>
      </div>
    </div>
  )
}

export default RunUpdate
