function depthFirstSearch(rootNode, vertices, edges) {
    let queue = [];
    let visited = [];
    let currentNode;
    let rootIndex = vertices.indexOf(rootNode);

    queue.push(rootNode);
    vertices.splice(rootIndex, 1);

    visited.push(rootNode);
    while (queue != 0) {
        currentNode = queue.pop();
        console.log("CN:" + currentNode)
        let adjacentNodesArray = getAdjacentNodes(currentNode, vertices, edges);
        console.log(adjacentNodesArray)
        adjacentNodesArray.forEach(function(node) {
            visited.push(node);
            queue.push(node);
        })
    }

    return visited;
}

function markDiscovered(node) {
    return node.discovered = true;
}

function getAdjacentNodes(rootNode, vertices, edges) {
    let adjacentNodes = [];

    edges.forEach(function(edge) {
        if (edge[0] === rootNode.name) {

            let adjacentNode = vertices.find(function(vertex) {
                return vertex.name === edge[1];
            });

            if (adjacentNode) {
                let adjacentIndex = vertices.indexOf(adjacentNode);

                vertices.splice(adjacentIndex, 1);
                markDiscovered(adjacentNode);
                adjacentNodes.push(adjacentNode);
            }
        } else if (edge[1] === rootNode.name) {
            let adjacentNode = vertices.find(function(vertex) {
                return vertex.name === edge[0]
            })

            if (adjacentNode) {
                let adjacentIndex = vertices.indexOf(adjacentNode);

                vertices.splice(adjacentIndex, 1);
                markDiscovered(adjacentNode);
                adjacentNodes.push(adjacentNode);
            }
        }
    });

    return adjacentNodes;
}



// 1. Add rootNode to queue
// 2. Mark visited / discovered
// 3. Pop off top of queue, make currentNode
// 4. Find adjacent vertices and add to queue
// 5. Mark adjacent vertices visited

// 6. Pop off top of queue, make currentNode
// 7. Find adjacentNodes and add to queue 
// 8. Mark adjacentNodes visited / discovered 

// 6. Pop off top of queue, make currentNode
// 7. Find adjacentNodes and add to queue 
// 8. Mark adjacentNodes visited / discovered 
