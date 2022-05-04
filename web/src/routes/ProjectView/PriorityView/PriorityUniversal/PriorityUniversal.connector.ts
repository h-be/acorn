import { connect } from 'react-redux'
import _ from 'lodash'

import { openExpandedView } from '../../../../redux/ephemeral/expanded-view/actions'
import { updateProjectMeta } from '../../../../redux/persistent/projects/project-meta/actions'
import { animatePanAndZoom } from '../../../../redux/ephemeral/viewport/actions'
import ProjectsZomeApi from '../../../../api/projectsApi'
import { getAppWs } from '../../../../hcWebsockets'
import { cellIdFromString } from '../../../../utils'
import PriorityUniversal from './PriorityUniversal.component'

function mapStateToProps(state) {
  const projectId = state.ui.activeProject
  const agents = state.agents
  const outcomes = state.projects.outcomes[projectId] || {}
  const outcomeMembers = state.projects.outcomeMembers[projectId] || {}
  const projectMeta = state.projects.projectMeta[projectId]

  // add members on to outcome state objects
  const allOutcomesArray = Object.values(outcomes).map((outcome) => {
    const extensions = {}
    extensions.members = Object.values(outcomeMembers)
      .filter(
        (outcomeMember) =>
          outcomeMember.outcomeHeaderHash === outcome.headerHash
      )
      .map((outcomeMember) => agents[outcomeMember.memberAgentPubKey])
      .filter((outcomeMember) => outcomeMember) // filter out undefined results
    return {
      ...outcome,
      ...extensions,
    }
  })
  const allOutcomes = _.keyBy(allOutcomesArray, 'headerHash')

  return {
    projectId,
    projectMeta,
    outcomes: allOutcomes,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openExpandedView: (headerHash) => dispatch(openExpandedView(headerHash)),
    goToOutcome: (headerHash) => {
      return dispatch(animatePanAndZoom(headerHash))
    },
    updateProjectMeta: async (projectMeta, headerHash, cellIdString) => {
      const appWebsocket = await getAppWs()
      const projectsZomeApi = new ProjectsZomeApi(appWebsocket)
      const cellId = cellIdFromString(cellIdString)
      const updatedProjectMeta = await projectsZomeApi.projectMeta.update(
        cellId,
        {
          entry: projectMeta,
          headerHash,
        }
      )
      return dispatch(updateProjectMeta(cellIdString, updatedProjectMeta))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PriorityUniversal)
