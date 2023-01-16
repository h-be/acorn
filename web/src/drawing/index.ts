/*
  This file is the entry point for how to render the redux state visually
  onto the screen, using the HTML5 canvas APIs.
  It will iterate through each part of the state that needs rendering
  and use well defined functions for rendering those specific parts
  to the canvas.
*/
import drawOutcomeCard from './drawOutcome'
import drawConnection, {
  calculateConnectionCoordsByOutcomeCoords,
} from './drawConnection'
import drawOverlay from './drawOverlay'
import drawSelectBox from './drawSelectBox'
import drawEntryPoints from './drawEntryPoints'
import {
  RELATION_AS_CHILD,
} from '../redux/ephemeral/outcome-connector/actions'
import {
  getOutcomeHeight,
  getOutcomeWidth,
} from './dimensions'
import {
  ComputedOutcome,
  ComputedSimpleAchievementStatus,
  ProjectMeta,
  RelationInput,
  Tag,
} from '../types'
import { ActionHashB64, WithActionHash } from '../types/shared'
import { ProjectConnectionsState } from '../redux/persistent/projects/connections/reducer'
import { ProjectEntryPointsState } from '../redux/persistent/projects/entry-points/reducer'
import { ProjectOutcomeMembersState } from '../redux/persistent/projects/outcome-members/reducer'
import { getPlaceholderOutcome } from './drawOutcome/placeholderOutcome'
import { CoordinatesState, DimensionsState } from '../redux/ephemeral/layout/state-type'

function setupCanvas(canvas) {
  // Get the device pixel ratio, falling back to 1.
  const dpr = window.devicePixelRatio || 1
  // Get the size of the canvas in CSS pixels.
  console.log(canvas.parentElement)
  const rect = canvas.getBoundingClientRect()
  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  // TODO: fix this issue

  // const rect = { width: canvas.parentElement.clientWidth, height: canvas.parentElement.clientHeight } // canvas.getBoundingClientRect()
  // console.log('dpr', dpr)
  // console.log('rect', rect.width, rect.height)
  // canvas.width = 1000
  // canvas.height = 1000
  const ctx = canvas.getContext('2d')
  return ctx
}

export type renderProps = {
  projectTags: WithActionHash<Tag>[]
  screenWidth: number
  screenHeight: number
  zoomLevel: number
  translate: {
    x: number
    y: number
  }
  activeEntryPoints: ActionHashB64[]
  projectMeta: WithActionHash<ProjectMeta>
  entryPoints: ProjectEntryPointsState
  outcomeMembers: ProjectOutcomeMembersState
  connections: ProjectConnectionsState
  outcomeConnectorFromAddress: ActionHashB64
  outcomeConnectorToAddress: ActionHashB64
  outcomeConnectorRelation: RelationInput
  outcomeFormIsOpen: boolean
  outcomeFormFromActionHash: ActionHashB64
  outcomeFormContent: string
  outcomeFormRelation: RelationInput
  outcomeFormLeftConnectionX: number
  outcomeFormTopConnectionY: number
  hoveredConnectionActionHash: ActionHashB64
  selectedConnections: ActionHashB64[]
  selectedOutcomes: ActionHashB64[]
  mouseLiveCoordinate: {
    x: number
    y: number
  }
  shiftKeyDown: boolean
  startedSelection: boolean
  startedSelectionCoordinate: {
    x: number
    y: number
  }
  coordinates: CoordinatesState
  dimensions: DimensionsState
  computedOutcomesKeyed: {
    [outcomeActionHash: ActionHashB64]: ComputedOutcome
  }
  computedOutcomesAsTree: ComputedOutcome[]
}

// Render is responsible for painting all the existing outcomes & connections,
// as well as the yet to be created (pending) ones (For new Outcome / new Connection / edit Connection)
// render the state contained in store onto the canvas
// `store` is a redux store
// `canvas` is a reference to an HTML5 canvas DOM element
function render(
  {
    projectTags,
    screenWidth,
    screenHeight,
    zoomLevel,
    coordinates,
    dimensions: allOutcomeDimensions,
    translate,
    activeEntryPoints,
    computedOutcomesKeyed,
    computedOutcomesAsTree,
    connections,
    outcomeMembers,
    entryPoints,
    projectMeta,
    outcomeConnectorFromAddress,
    outcomeConnectorToAddress,
    outcomeConnectorRelation,
    outcomeFormIsOpen,
    outcomeFormFromActionHash,
    outcomeFormRelation,
    outcomeFormContent,
    outcomeFormLeftConnectionX,
    outcomeFormTopConnectionY,
    hoveredConnectionActionHash,
    selectedConnections,
    selectedOutcomes,
    mouseLiveCoordinate,
    shiftKeyDown,
    startedSelection,
    startedSelectionCoordinate,
  }: renderProps,
  canvas: HTMLCanvasElement
) {
  const currentTime = Date.now()

  // Get the 2 dimensional drawing context of the canvas (there is also 3 dimensional, e.g.)
  const ctx = setupCanvas(canvas)
  // zoomLevel x, skew x, skew y, zoomLevel y, translate x, and translate y
  console.log('before transform', Date.now() - currentTime)
  ctx.setTransform(1, 0, 0, 1, 0, 0) // normalize
  console.log('after set transform', Date.now() - currentTime)
  // clear the entirety of the canvas
  ctx.clearRect(0, 0, screenWidth, screenHeight)
  console.log('after clear rect', Date.now() - currentTime)

  // zoomLevel all drawing operations by the dpr, as well as the zoom, so you
  // don't have to worry about the difference.
  const dpr = window.devicePixelRatio || 1
  ctx.setTransform(
    zoomLevel * dpr,
    0,
    0,
    zoomLevel * dpr,
    translate.x * dpr,
    translate.y * dpr
  )
  console.log('after 2nd set transform', Date.now() - currentTime)

  const outcomes = computedOutcomesKeyed

  // draw things relating to the project, if the project has fully loaded
  if (
    !(outcomes && connections && outcomeMembers && entryPoints && projectMeta)
  )
    return

  const topPriorityOutcomes = projectMeta.topPriorityOutcomes
  // converts the outcomes object to an array
  const outcomesAsArray = Object.keys(outcomes).map(
    (actionHash) => outcomes[actionHash]
  )
  // convert the connections object to an array
  const connectionsAsArray = Object.keys(connections).map(
    (actionHash) => connections[actionHash]
  )
  console.log('set up', Date.now() - currentTime)
  /*
      DRAW CONNECTIONS (EXISTING)
    */
  // render each connection to the canvas, basing it off the rendering coordinates of the parent and child nodes
  connectionsAsArray.forEach(function (connection) {
    // if in the pending re-parenting mode for the child card of an existing connection,
    // temporarily omit/hide the existing connection from view
    // ASSUMPTION: one parent
    const pendingReParent =
      (outcomeConnectorFromAddress === connection.childActionHash &&
        outcomeConnectorRelation === RELATION_AS_CHILD) ||
      (outcomeFormIsOpen &&
        outcomeFormFromActionHash === connection.childActionHash &&
        outcomeFormRelation === RELATION_AS_CHILD)
    if (pendingReParent) return

    const childCoords = coordinates[connection.childActionHash]
    const parentCoords = coordinates[connection.parentActionHash]
    const childOutcome = outcomes[connection.childActionHash]
    const parentOutcome = outcomes[connection.parentActionHash]
    // we can only render this connection
    // if we know the coordinates of the Outcomes it connects
    if (childCoords && parentCoords && parentOutcome && childOutcome) {
      const [
        connection1port,
        connection2port,
      ] = calculateConnectionCoordsByOutcomeCoords(
        childCoords,
        allOutcomeDimensions[connection.childActionHash],
        parentCoords,
        allOutcomeDimensions[connection.parentActionHash],
        RELATION_AS_CHILD
      )
      const isHovered = hoveredConnectionActionHash === connection.actionHash
      const isSelected = selectedConnections.includes(connection.actionHash)
      drawConnection({
        connection1port,
        connection2port,
        ctx,
        isAchieved:
          childOutcome.computedAchievementStatus.simple ===
          ComputedSimpleAchievementStatus.Achieved,
        isHovered,
        isSelected,
        zoomLevel,
      })
    }
  })

  console.log('breakpoint 2', Date.now() - currentTime)
  /*
    SEPARATE SELECTED & UNSELECTED OUTCOMES
  */
  // in order to create layers behind and in front of the editing highlight overlay
  const unselectedOutcomes = outcomesAsArray.filter((outcome) => {
    return selectedOutcomes.indexOf(outcome.actionHash) === -1
  })
  const selectedOutcomesActual = outcomesAsArray.filter((outcome) => {
    return selectedOutcomes.indexOf(outcome.actionHash) > -1
  })

  console.log('breakpoint 3', Date.now() - currentTime)
  /*
      DRAW UNSELECTED OUTCOMES
    */
  // render each unselected outcome to the canvas
  unselectedOutcomes.forEach((outcome) => {
    // use the set of coordinates at the same index
    // in the coordinates array
    const isSelected = false
    // const isHovered = state.ui.hover.hoveredOutcome === outcome.actionHash
    // const isEditing = false
    // let editInfoObjects = Object.values(state.ui.realtimeInfo).filter(
    //   (agentInfo) =>
    //     agentInfo.outcomeBeingEdited !== null &&
    //     agentInfo.outcomeBeingEdited.outcomeActionHash === outcome.actionHash
    // )
    // const isBeingEdited = editInfoObjects.length > 0
    // const isBeingEditedBy =
    //   editInfoObjects.length === 1
    //     ? state.agents[editInfoObjects[0].agentPubKey].handle
    //     : editInfoObjects.length > 1
    //     ? `${editInfoObjects.length} people`
    //     : null
    // a combination of those editing + those with expanded view open
    // const allMembersActiveOnOutcome = Object.values(state.ui.realtimeInfo)
    //   .filter(
    //     (agentInfo) =>
    //       agentInfo.outcomeExpandedView === outcome.actionHash ||
    //       (agentInfo.outcomeBeingEdited !== null &&
    //         agentInfo.outcomeBeingEdited.outcomeActionHash ===
    //           outcome.actionHash)
    //   )
    //   .map(
    //     (realtimeInfoObject) => state.agents[realtimeInfoObject.agentPubKey]
    //   )

    // const membersOfOutcome = Object.keys(outcomeMembers)
    //   .map(actionHash => outcomeMembers[actionHash])
    //   .filter(outcomeMember => outcomeMember.outcomeActionHash === outcome.actionHash)
    //   .map(outcomeMember => state.agents[outcomeMember.memberAgentPubKey])
    const isTopPriorityOutcome = !!topPriorityOutcomes.find(
      (actionHash) => actionHash === outcome.actionHash
    )
    if (coordinates[outcome.actionHash]) {
      drawOutcomeCard({
        useLineLimit: true,
        zoomLevel: zoomLevel,
        outcome: outcome,
        outcomeLeftX: coordinates[outcome.actionHash].x,
        outcomeTopY: coordinates[outcome.actionHash].y,
        isSelected: isSelected,
        ctx: ctx,
        isTopPriority: isTopPriorityOutcome,
        outcomeHeight: allOutcomeDimensions[outcome.actionHash].height,
        outcomeWidth: allOutcomeDimensions[outcome.actionHash].width,
        projectTags,
        // members: membersOfOutcome,
        // isEditing: isEditing, // self
        // editText: '',
        // isHovered: isHovered,
        // isBeingEdited: isBeingEdited, // by other
        // isBeingEditedBy: isBeingEditedBy, // other
        // allMembersActiveOnOutcome: allMembersActiveOnOutcome,
      })
    }
  })

  console.log('breakpoint 4', Date.now() - currentTime)
  /*
      DRAW SELECT BOX
    */
  if (shiftKeyDown && startedSelection && startedSelectionCoordinate.x !== 0) {
    drawSelectBox(
      startedSelectionCoordinate,
      mouseLiveCoordinate,
      canvas.getContext('2d')
    )
  }

  /*
    DRAW ENTRY POINTS
  */
  const activeEntryPointsObjects = activeEntryPoints
    .map((entryPointAddress) => entryPoints[entryPointAddress])
    // drop ones that may be undefined
    .filter((activeEntryPoint) => activeEntryPoint)
  drawEntryPoints(
    ctx,
    activeEntryPointsObjects,
    outcomes,
    connectionsAsArray,
    coordinates,
    allOutcomeDimensions,
    zoomLevel
  )

  console.log('breakpoint 5', Date.now() - currentTime)
  /*
    DRAW EDITING HIGHLIGHT SEMI-TRANSPARENT OVERLAY
  */
  /* if shift key not held down and there are more than 1 Outcomes selected */
  if (selectedOutcomes.length > 1 && !shiftKeyDown) {
    drawOverlay(ctx, 0, 0, screenWidth, screenHeight)
  }

  console.log('breakpoint 6', Date.now() - currentTime)
  /*
    DRAW SELECTED OUTCOMES
  */
  selectedOutcomesActual.forEach((outcome) => {
    // use the set of coordinates at the same index
    // in the coordinates array
    const isSelected = true
    // const isHovered = state.ui.hover.hoveredOutcome === outcome.actionHash
    // const isEditing = false
    // let editInfoObjects = Object.values(state.ui.realtimeInfo).filter(
    //   (agentInfo) =>
    //     agentInfo.outcomeBeingEdited !== null &&
    //     agentInfo.outcomeBeingEdited.outcomeActionHash === outcome.actionHash
    // )
    // const isBeingEdited = editInfoObjects.length > 0
    // const isBeingEditedBy =
    //   editInfoObjects.length === 1
    //     ? state.agents[editInfoObjects[0].agentPubKey].handle
    //     : editInfoObjects.length > 1
    //     ? `${editInfoObjects.length} people`
    //     : null
    // a combination of those editing + those with expanded view open
    // const allMembersActiveOnOutcome = Object.values(state.ui.realtimeInfo)
    //   .filter(
    //     (agentInfo) =>
    //       agentInfo.outcomeExpandedView === outcome.actionHash ||
    //       (agentInfo.outcomeBeingEdited !== null &&
    //         agentInfo.outcomeBeingEdited.outcomeActionHash ===
    //           outcome.actionHash)
    //   )
    //   .map(
    //     (realtimeInfoObject) => state.agents[realtimeInfoObject.agentPubKey]
    //   )
    // const membersOfOutcome = Object.keys(outcomeMembers)
    //   .map((actionHash) => outcomeMembers[actionHash])
    //   .filter(
    //     (outcomeMember) =>
    //       outcomeMember.outcomeActionHash === outcome.actionHash
    //   )
    //   .map((outcomeMember) => state.agents[outcomeMember.memberAgentPubKey])
    const isTopPriorityOutcome = !!topPriorityOutcomes.find(
      (actionHash) => actionHash === outcome.actionHash
    )
    if (coordinates[outcome.actionHash]) {
      drawOutcomeCard({
        useLineLimit: true,
        zoomLevel: zoomLevel,
        outcome: outcome,
        outcomeLeftX: coordinates[outcome.actionHash].x,
        outcomeTopY: coordinates[outcome.actionHash].y,
        isSelected: isSelected,
        ctx: ctx,
        isTopPriority: isTopPriorityOutcome,
        outcomeWidth: allOutcomeDimensions[outcome.actionHash].width,
        outcomeHeight: allOutcomeDimensions[outcome.actionHash].height,
        projectTags,
        // members: membersOfOutcome,
        // isEditing: isEditing,
        // editText: '',
        // isHovered: isHovered,
        // isBeingEdited: isBeingEdited,
        // isBeingEditedBy: isBeingEditedBy,
        // allMembersActiveOnOutcome: allMembersActiveOnOutcome,
      })
    }
  })

  /*
  establish width and height for the card for a 
  new Outcome in the process of being created
  */
  const placeholderOutcomeWithText = getPlaceholderOutcome(outcomeFormContent)
  const newOutcomeWidth = getOutcomeWidth({
    outcome: placeholderOutcomeWithText,
    zoomLevel,
  })
  const newOutcomeHeight = getOutcomeHeight({
    ctx,
    outcome: placeholderOutcomeWithText,
    projectTags,
    width: newOutcomeWidth,
    zoomLevel,
    // we set this because in the case of creating a new outcome
    // it should use the full text at the proper text scaling
    noStatementPlaceholder: true,
    useLineLimit: false,
  })

  console.log('breakpoint 7', Date.now() - currentTime)
  /*
      DRAW PENDING CONNECTION FOR OUTCOME FORM
    */
  // render the connection that is pending to be created to the open outcome form

  if (outcomeFormIsOpen && outcomeFormFromActionHash) {
    const [
      connection1port,
      connection2port,
    ] = calculateConnectionCoordsByOutcomeCoords(
      coordinates[outcomeFormFromActionHash],
      allOutcomeDimensions[outcomeFormFromActionHash],
      {
        x: outcomeFormLeftConnectionX,
        y: outcomeFormTopConnectionY,
      },
      { width: newOutcomeWidth, height: newOutcomeHeight },
      outcomeFormRelation
    )
    drawConnection({
      connection1port,
      connection2port,
      ctx,
      isAchieved: false,
      isSelected: false,
      isHovered: false,
      zoomLevel,
    })
  }

  console.log('breakpoint 8', Date.now() - currentTime)
  /*
      DRAW PENDING CONNECTION FOR "CONNECTION CONNECTOR"
    */
  // render the connection that is pending to be created between existing Outcomes
  // if there's an Outcome this is pending
  // as being "to", then we will be drawing the connection to its correct
  // upper or lower port
  // the opposite of whichever the "from" port is connected to
  if (outcomeConnectorFromAddress) {
    const fromCoords = coordinates[outcomeConnectorFromAddress]
    const [
      childCoords,
      parentCoords,
    ] = calculateConnectionCoordsByOutcomeCoords(
      fromCoords,
      allOutcomeDimensions[outcomeConnectorFromAddress],
      // use the current mouse coordinate position, liveCoordinate, by default
      outcomeConnectorToAddress
        ? coordinates[outcomeConnectorToAddress]
        : mouseLiveCoordinate,
      outcomeConnectorToAddress
        ? allOutcomeDimensions[outcomeConnectorToAddress]
        : { width: 0, height: 0 },
      outcomeConnectorRelation
    )
    // in drawConnection, it draws at exactly the two coordinates given,
    // so we could pass them in either order/position
    drawConnection({
      connection1port: childCoords,
      connection2port: parentCoords,
      ctx,
      isAchieved: false,
      isHovered: false,
      isSelected: false,
      zoomLevel,
    })
  }

  console.log('breakpoint 9', Date.now() - currentTime)
  /*
    DRAW NEW OUTCOME PLACEHOLDER
  */
  // creating a new Outcome
  if (outcomeFormIsOpen) {
    const isHovered = false
    const isSelected = false
    const isEditing = true
    const isTopPriorityOutcome = false
    const placeholderOutcomeWithText = getPlaceholderOutcome(outcomeFormContent)
    drawOutcomeCard({
      // draw the Outcome with empty text
      // since the text is presented in the
      // MapViewOutcomeTitleForm
      skipStatementRender: true,
      useLineLimit: false,
      zoomLevel: zoomLevel,
      outcome: placeholderOutcomeWithText,
      outcomeHeight: newOutcomeHeight,
      outcomeWidth: newOutcomeWidth,
      projectTags,
      outcomeLeftX: outcomeFormLeftConnectionX,
      outcomeTopY: outcomeFormTopConnectionY,
      isSelected: isSelected,
      ctx: ctx,
      isTopPriority: isTopPriorityOutcome,
      // members: [],
      // isEditing: isEditing,
      // editText: state.ui.outcomeForm.content,
      // isHovered: isHovered,
      // isBeingEdited: false,
      // isBeingEditedBy: '',
      // allMembersActiveOnOutcome: [],
    })
  }
  console.log('breakpoint 10', Date.now() - currentTime)
}

export default render
