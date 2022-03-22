import { createCrudActionCreators } from '../../crudRedux'

const [[
  CREATE_OUTCOME_MEMBER,
  FETCH_OUTCOME_MEMBERS,
  UPDATE_OUTCOME_MEMBER,
  DELETE_OUTCOME_MEMBER
],[
  createOutcomeMember,
  fetchOutcomeMembers,
  updateOutcomeMember,
  deleteOutcomeMember
]] = createCrudActionCreators('OUTCOME_MEMBER')

export {
  CREATE_OUTCOME_MEMBER,
  FETCH_OUTCOME_MEMBERS,
  UPDATE_OUTCOME_MEMBER,
  DELETE_OUTCOME_MEMBER,
  createOutcomeMember,
  fetchOutcomeMembers,
  updateOutcomeMember,
  deleteOutcomeMember
}