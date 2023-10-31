import React, { useState, useContext } from 'react'
import { CSSTransition } from 'react-transition-group'

import Icon from '../../components/Icon/Icon'
import DashboardEmptyState from '../../components/DashboardEmptyState/DashboardEmptyState'

import CreateProjectModal from '../../components/CreateProjectModal/CreateProjectModal'
import ImportProjectModal from '../../components/ImportProjectModal/ImportProjectModal'
import JoinProjectModal from '../../components/JoinProjectModal/JoinProjectModal'
// import new modals here

import {
  DashboardListProject,
  DashboardListProjectLoading,
} from './DashboardListProject'
import PendingProjects from '../../components/PendingProjects/PendingProjects'

import './Dashboard.scss'
import Typography from '../../components/Typography/Typography'
import { ActionHashB64, AgentPubKeyB64, CellIdString } from '../../types/shared'
import { ProjectAggregated, ProjectMeta } from '../../types'
import ModalContexts, { OpenModal } from '../../context/ModalContexts'
import ProjectMigratedModal from '../../components/ProjectMigratedModal/ProjectMigratedModal'
import useProjectStatusInfos from '../../hooks/useProjectStatusInfos'
import { ViewingReleaseNotes } from '../../components/UpdateModal/UpdateModal'

export type DashboardStateProps = {
  agentAddress: AgentPubKeyB64
  projectCellIdStrings: CellIdString[]
  projects: ProjectAggregated[]
}

export type DashboardDispatchProps = {
  updateProjectMeta: (
    projectMeta: ProjectMeta,
    actionHash: ActionHashB64,
    cellIdString: CellIdString
  ) => Promise<void>
  uninstallProject: (appId: string, cellId: CellIdString) => Promise<void>
}

export type DashboardProps = DashboardStateProps & DashboardDispatchProps

const Dashboard: React.FC<DashboardProps> = ({
  uninstallProject,
  agentAddress,
  projectCellIdStrings,
  projects,
  
  updateProjectMeta,

}) => {
  // pull in the modal context
  const { modalState, setModalState } = useContext(ModalContexts)

  const [selectedSort, setSelectedSort] = useState('createdAt')
  const [showSortPicker, setShowSortPicker] = useState(false)

  // TODO: these could refactored into ModalState and
  // the modals moved to GlobalModals and this state management
  // deleted
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showJoinModal, setShowJoinModal] = useState(false)
  const [showImportModal, setShowImportModal] = useState(false)
  const [showProjectMigratedModal, setShowProjectMigratedModal] = useState('')
  //

  const setSortBy = (sortBy) => () => {
    setSelectedSort(sortBy)
    setShowSortPicker(false)
  }

  let sortedProjects: ProjectAggregated[]
  if (selectedSort === 'createdAt') {
    // sort most recent first, oldest last
    sortedProjects = projects.sort(
      (a, b) => b.projectMeta.createdAt - a.projectMeta.createdAt
    )
  } else if (selectedSort === 'name') {
    // sort alphabetically ascending
    sortedProjects = projects.sort((a, b) => {
      return a.projectMeta.name.toLowerCase() > b.projectMeta.name.toLowerCase()
        ? 1
        : -1
    })
  }

  const projectMigratedProject = showProjectMigratedModal
    ? sortedProjects.find((project) => {
        return project.cellId === showProjectMigratedModal
      })
    : undefined

  const hasFetchedForAllProjects =
    projectCellIdStrings.length === Object.keys(projectStatusInfos).length

  const joinedProjectsSecrets = Object.values(projectStatusInfos).map(
    (projectInfo) => {
      return projectInfo.passphrase
    }
  )

  return (
    <>
      <div className="dashboard-background">
        <div className="dashboard-left-menu"></div>
        <div className="dashboard-my-projects">
          <div className="my-projects-heading">
            <Typography style="h1">My Projects</Typography>{' '}
          </div>
          {/* dashboard header */}
          <div className="my-projects-header">
            <div className="my-projects-header-buttons">
              <div
                className="my-projects-button create-project-button"
                onClick={() => setShowCreateModal(true)}
              >
                Create a Project
              </div>
              <div
                className="my-projects-button"
                onClick={() => setShowJoinModal(true)}
              >
                Join a Project
              </div>
              <div
                className="my-projects-button"
                onClick={() => setShowImportModal(true)}
              >
                <div>Import a Project</div>
              </div>
            </div>
            <div className="my-projects-sorting">
              <div>Sort by</div>
              <div
                className="my-projects-sorting-selected"
                onClick={() => setShowSortPicker(!showSortPicker)}
              >
                {selectedSort === 'createdAt' && 'Last Created'}
                {selectedSort === 'name' && 'Name'}
                <Icon
                  name="chevron-down.svg"
                  size="very-small"
                  className={`light-grey ${showSortPicker ? 'active' : ''}`}
                />
              </div>
              <CSSTransition
                in={showSortPicker}
                timeout={100}
                unmountOnExit
                classNames="my-projects-sorting-select"
              >
                <ul className="my-projects-sorting-select">
                  <li onClick={setSortBy('createdAt')}>Last Created</li>
                  <li onClick={setSortBy('name')}>Name</li>
                </ul>
              </CSSTransition>
            </div>
          </div>
          <div className="my-projects-content">
            <PendingProjects
              projectStatusInfos={projectStatusInfos}
              setProjectStatusInfos={setProjectStatusInfos}
              uninstallProject={uninstallProject}
            />
            {!hasFetchedForAllProjects &&
              projectCellIdStrings.map((cellId) => (
                <DashboardListProjectLoading key={'dlpl-key' + cellId} />
              ))}
            {hasFetchedForAllProjects &&
              sortedProjects.map((project) => {
                const projectInfo = projectStatusInfos[project.cellId]
                return (
                  <DashboardListProject
                    key={'dlp-key' + project.cellId}
                    project={project}
                    setModalState={setModalState}
                    updateRequiredMoreInfoLink={
                      'https://docs.acorn.software/about-acorn/updating-the-app'
                    }
                    syncingProjectContents={projectInfo?.isGossiping}
                  />
                )
              })}
            {hasFetchedForAllProjects && projects.length === 0 && (
              <DashboardEmptyState
                onJoinClick={() => setShowJoinModal(true)}
                onCreateClick={() => setShowCreateModal(true)}
              />
            )}
          </div>
        </div>
      </div>
      {/* <CreateProjectModal
        onCreateProject={onCreateProject}
        showModal={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
      <JoinProjectModal
        onJoinProject={doJoinProject}
        showModal={showJoinModal}
        onClose={() => setShowJoinModal(false)}
        joinedProjectsSecrets={joinedProjectsSecrets}
      />
      <ImportProjectModal
        onImportProject={onImportProject}
        uninstallProject={uninstallProject}
        showModal={showImportModal}
        onClose={() => setShowImportModal(false)}
      /> */}
      <ProjectMigratedModal
        showModal={showProjectMigratedModal !== ''}
        onClose={() => setShowProjectMigratedModal('')}
        project={projectMigratedProject?.projectMeta}
        cellIdString={showProjectMigratedModal}
        onClickOverride={() => {
          setShowProjectMigratedModal('')
          updateProjectMeta(
            {
              ...projectMigratedProject.projectMeta,
              isMigrated: null,
            },
            projectMigratedProject.projectMeta.actionHash,
            projectMigratedProject.cellId
          )
        }}
        onClickUpdateNow={() => {
          setShowProjectMigratedModal('')
          setModalState({
            id: OpenModal.UpdateApp,
            section: ViewingReleaseNotes.MainMessage,
          })
        }}
      />
    </>
  )
}

export default Dashboard
