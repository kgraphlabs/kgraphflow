import getRelation from '../kgraph/getRelation.js';

function generateEdges(baseNode, sourceNodes, targetNodes) {

  let edges = [];

  for (let sourceNode of sourceNodes) {

    let relation = getRelation(sourceNode.entityId, baseNode.entityId);

    edges.push({
      id: `e${sourceNode.id}-${baseNode.id}`,
      source: sourceNode.id.toString(),
      target: baseNode.id.toString(),
      animated: true,
      description: relation ? (relation.description ? relation.description : 'TBD') : 'TBD',
    });
  }

  for (let targetNode of targetNodes) {

    let relation = getRelation(baseNode.entityId, targetNode.entityId);

    edges.push({
      id: `e${baseNode.id}-${targetNode.id}`,
      source: baseNode.id.toString(),
      target: targetNode.id.toString(),
      animated: true,
      description: relation ? (relation.description ? relation.description : 'TBD') : 'TBD',
    });
  }

  return edges;
}

export default generateEdges;
