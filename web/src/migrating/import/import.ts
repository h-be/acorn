import { createOutcome } from '../../redux/persistent/projects/outcomes/actions'
import { createConnection } from '../../redux/persistent/projects/connections/actions'
import { createOutcomeComment } from '../../redux/persistent/projects/outcome-comments/actions'
import { createOutcomeMember } from '../../redux/persistent/projects/outcome-members/actions'
import { createEntryPoint } from '../../redux/persistent/projects/entry-points/actions'
import ProjectsZomeApi from '../../api/projectsApi'
import ProfilesZomeApi from '../../api/profilesApi'
import { getAppWs } from '../../hcWebsockets'
import { cellIdFromString } from '../../utils'
import { createTag } from '../../redux/persistent/projects/tags/actions'
import {
  Connection,
  EntryPoint,
  LayeringAlgorithm,
  Outcome,
  OutcomeComment,
  OutcomeMember,
  ProjectMeta,
  Tag,
} from '../../types'
import { WireRecord } from '../../api/hdkCrud'
import {
  Action,
  ActionHashB64,
  AgentPubKeyB64,
  CellIdString,
  WithActionHash,
} from '../../types/shared'
import { RootState } from '../../redux/reducer'
import { AllProjectsDataExport, ProjectExportDataV1 } from '../export'
import { createWhoami } from '../../redux/persistent/profiles/who-am-i/actions'
import { setMember } from '../../redux/persistent/projects/members/actions'
import { simpleCreateProjectMeta } from '../../redux/persistent/projects/project-meta/actions'
import { installProjectApp } from '../../projects/installProjectApp'
import { joinProjectCellId } from '../../redux/persistent/cells/actions'
import { AppWebsocket, CellId } from '@holochain/client'
import { createProfilesZomeApi, createProjectsZomeApi } from './zomeApiCreators'
import {
  cloneConnection,
  cloneData,
  cloneDataSet,
  cloneOutcome,
  cloneTag,
} from './cloneFunctions'
import { createActionHashMapAndImportProjectData } from './createActionHashMapAndImportProjectData'
import { installProjectAppAndImport } from './installProjectAppAndImport'

export async function internalImportProjectsData(
  // dependent functions
  _getAppWs: typeof getAppWs,
  _createProfilesZomeApi: typeof createProfilesZomeApi,
  _createProjectsZomeApi: typeof createProjectsZomeApi,
  _installProjectAppAndImport: typeof installProjectAppAndImport,
  _installProjectApp: typeof installProjectApp,
  store: any,
  // main input data and callbacks
  migrationData: string,
  onStep: (completed: number, toComplete: number) => void
) {
  const migrationDataParsed: AllProjectsDataExport = JSON.parse(migrationData)

  const initialState: RootState = store.getState()
  const myAgentPubKey = initialState.agentAddress

  const profilesCellIdString = initialState.cells.profiles
  const appWebsocket = await _getAppWs()
  const profilesZomeApi = _createProfilesZomeApi(appWebsocket)
  const projectsZomeApi = _createProjectsZomeApi(appWebsocket)
  const profilesCellId = cellIdFromString(profilesCellIdString)

  // prepare a list of only the NON-migrated projects to migrate
  const projectsToMigrate = migrationDataParsed.projects.filter((project) => {
    return !project.projectMeta.isMigrated
  })

  const migratedProjectsToJoin = migrationDataParsed.projects.filter(
    (project) => {
      return project.projectMeta.isMigrated
    }
  )

  // count the number of steps this is going to take
  const totalSteps =
    1 + // the create personal profile step
    projectsToMigrate.length + // the number of projects to import
    migratedProjectsToJoin.length // the number of projects to join
  let stepsSoFar = 0

  // import active user's own profile
  const importedProfile = await profilesZomeApi.profile.createWhoami(
    profilesCellId,
    migrationDataParsed.myProfile
  )
  store.dispatch(createWhoami(profilesCellIdString, importedProfile))
  stepsSoFar++
  onStep(stepsSoFar, totalSteps)

  // import each individual project, notifying of progress after each
  // one completes
  for await (let projectData of projectsToMigrate) {
    const passphrase = projectData.projectMeta.passphrase
    await _installProjectAppAndImport(
      myAgentPubKey,
      projectData,
      passphrase,
      store.dispatch,
      projectsZomeApi
    )
    stepsSoFar++
    onStep(stepsSoFar, totalSteps)
  }

  // join each project that has already been migrated by a peer
  for await (let projectData of migratedProjectsToJoin) {
    const passphrase = projectData.projectMeta.passphrase
    const [cellIdString, _, __] = await _installProjectApp(passphrase)
    store.dispatch(joinProjectCellId(cellIdString))
    stepsSoFar++
    onStep(stepsSoFar, totalSteps)
  }
}

export default async function importProjectsData(
  store: any,
  migrationData: string,
  onStep: (completed: number, toComplete: number) => void
) {
  await internalImportProjectsData(
    getAppWs,
    createProfilesZomeApi,
    createProjectsZomeApi,
    installProjectAppAndImport,
    installProjectApp,
    store,
    migrationData,
    onStep
  )
}
