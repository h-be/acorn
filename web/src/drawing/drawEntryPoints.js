import { fontFamily } from './dimensions'
import drawRoundCornerRectangle from './drawRoundCornerRectangle'
import { getBoundingRec } from './layoutFormula'

export default function drawEntryPoints(
  ctx,
  activeEntryPoints,
  outcomes,
  connectionsAsArray,
  coordinates
) {
  // recursively calls itself
  // so that it constructs the full sub-tree for each root Outcome
  function getOutcome(outcomeAddress) {
    return {
      ...outcomes[outcomeAddress],
      children: connectionsAsArray
        // find the connections indicating the children of this outcome
        .filter(connection => connection.parent_address === outcomeAddress)
        // actually nest the children Outcomes, recurse
        .map(connection => getOutcome(connection.child_address))
    }
  }

  // start with the entry point Outcomes, and recurse down to their children
  activeEntryPoints.forEach(entryPoint => {
    const outcome = getOutcome(entryPoint.outcome_address)
    // for each outcomeTree
    // calculate its bounding rectangle
    // by checking the coordinates recursively for it and all its children
    const boundingRec = getBoundingRec(outcome, coordinates)
    if (!boundingRec) {
      return
    }
    const [top, right, bottom, left] = boundingRec

    ctx.save()
    ctx.setLineDash([5, 3]) /*dashes are 5px and spaces are 3px*/
    const width = right - left
    const height = bottom - top
    drawRoundCornerRectangle({
      context: ctx,
      xPosition: left,
      yPosition: top,
      width: width,
      height: height,
      radius: 15,
      color: entryPoint.color,
      stroke: true,
      strokeWidth: 2,
      boxShadow: false
    })
    ctx.fillStyle = entryPoint.color
    ctx.font = '25px ' + 'PlusJakartaSans-bold'
    // distance of entry point title from dotted rectangle
    let content = outcome.content.length < 40 ? outcome.content : outcome.content.slice(0, 40) + '...'
    ctx.fillText(content, left, top - 20)
    ctx.restore()
  })
}
