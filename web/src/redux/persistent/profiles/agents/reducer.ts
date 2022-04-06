
import _ from 'lodash'

import { SET_AGENT, FETCH_AGENTS, CREATE_IMPORTED_PROFILE, AgentsAction } from './actions'
import {
  CREATE_WHOAMI,
  UPDATE_WHOAMI,
} from '../who-am-i/actions'
import { AgentPubKeyB64 } from '../../../../types/shared'
import { Profile } from '../../../../types'
import { WireElement } from '../../../../api/hdkCrud'

type State = { 
  [agentPubKey: AgentPubKeyB64]: Profile
}
const defaultState: State = {}

export default function(state: State = defaultState, action: AgentsAction): State {
  const { payload, type } = action
  switch (type) {
    case FETCH_AGENTS:
      const fetchedAgents = payload as Array<Profile>
      return _.keyBy(fetchedAgents, 'address')
    case SET_AGENT:
      const setAgent = payload as WireElement<Profile>
      return {
        ...state,
        [setAgent.entry.address]: setAgent.entry,
      }
    case CREATE_IMPORTED_PROFILE:
    case CREATE_WHOAMI:
    case UPDATE_WHOAMI:
      const agent = payload as WireElement<Profile>
      return {
        ...state,
        [agent.entry.address]: agent.entry,
      }
    default:
      return state
  }
}
