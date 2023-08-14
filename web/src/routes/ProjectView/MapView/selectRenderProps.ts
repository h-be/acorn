import { createSelector } from 'reselect'
import { RootState } from '../../../redux/reducer'

const selectRenderProps = createSelector(
  (state: RootState) => state.ui.activeEntryPoints,
  (state: RootState) => state.ui.viewport.scale,
  (state: RootState) => state.ui.outcomeForm.isOpen,
  (state: RootState) => state.ui.layout.coordinates,
  (state: RootState) => state.ui.layout.dimensions,
  (state: RootState) =>
    Object.values(state.projects.tags[state.ui.activeProject] || {}),
  (state: RootState) => state.ui.viewport.translate,
  (state: RootState) => state.ui.screensize.width,
  (state: RootState) => state.ui.screensize.height,
  (state: RootState) => state.projects.projectMeta[state.ui.activeProject],
  (state: RootState) => state.projects.entryPoints[state.ui.activeProject],
  (state: RootState) => state.projects.outcomeMembers[state.ui.activeProject],
  (state: RootState) => state.projects.connections[state.ui.activeProject],
  (state: RootState) => state.ui.outcomeConnector.fromAddress,
  (state: RootState) => state.ui.outcomeConnector.toAddress,
  (state: RootState) => state.ui.outcomeConnector.relation,
  (state: RootState) => state.ui.outcomeForm.fromAddress,
  (state: RootState) => state.ui.outcomeForm.relation,
  (state: RootState) => state.ui.outcomeForm.content,
  (state: RootState) => state.ui.outcomeForm.leftConnectionXPosition,
  (state: RootState) => state.ui.outcomeForm.topConnectionYPosition,
  (state: RootState) => state.ui.hover.hoveredConnection,
  (state: RootState) => state.ui.selection.selectedConnections,
  (state: RootState) => state.ui.selection.selectedOutcomes,
  (state: RootState) => state.ui.mouse.liveCoordinate,
  (state: RootState) => state.ui.keyboard.shiftKeyDown,
  (state: RootState) => state.ui.mouse.mousedown,
  (state: RootState) => state.ui.mouse.coordinate,
  (
    activeEntryPoints,
    zoomLevel,
    outcomeFormIsOpen,
    coordinates,
    dimensions,
    projectTags,
    translate,
    screenWidth,
    screenHeight,
    projectMeta,
    entryPoints,
    outcomeMembers,
    connections,
    outcomeConnectorFromAddress,
    outcomeConnectorToAddress,
    outcomeConnectorRelation,
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
    startedSelectionCoordinate
  ) => {
    return {
      activeEntryPoints,
      zoomLevel,
      screenWidth,
      screenHeight,
      projectTags,
      translate,
      coordinates,
      dimensions,
      projectMeta,
      entryPoints,
      outcomeMembers,
      connections,
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
    }
  }
)

export default selectRenderProps
