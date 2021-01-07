// Priority Queue
class PriorityQueue{
  constructor(){
    this.priorityQueue = [];
  }
  enQueue(node, distance){
    this.priorityQueue.push({node, distance});

    this.priorityQueue.sort((a,b)=>{
      return a.distance - b.distance;
    });
  }
  deQueue(){
    return this.priorityQueue.shift();
  }
}

// Undirected Weighted Graph
class Graph{
  constructor(){
    this.adjacencyList = {};
  }

  addEdge(vertex1, vertex2, distance){
    if(!this.adjacencyList[vertex1]){
      this.adjacencyList[vertex1] = [];
    }
    if(!this.adjacencyList[vertex2]){
      this.adjacencyList[vertex2] = [];
    }
    let isVertex1Exist = this.adjacencyList[vertex2].filter((vertex) =>{
      return vertex === vertex1;
    });
    if(!isVertex1Exist || !isVertex1Exist.length ){
      this.adjacencyList[vertex2].push({node : vertex1, distance});
    }
    let isVertex2Exist = this.adjacencyList[vertex1].filter((vertex) =>{
      return vertex === vertex2;
    });
    if(!isVertex2Exist || !isVertex2Exist.length ){
      this.adjacencyList[vertex1].push({node : vertex2, distance});
    }
    return this;
  }

  dijkstrasAlgorithm(vertex1, vertex2){

    let shortestDistance = {}, visited = {}, previous = {}, currentVertex, currentDistance, shortestPath = [];
    let queue = new PriorityQueue();
    // Creating initial Setup Objects
    this.createInitialObjects(vertex1, shortestDistance, queue, previous);
    
    
    while(queue.priorityQueue.length){
      // Picking the smallest distance node
      currentVertex = queue.deQueue();

      // Not node has to be non visited
      if(!visited[currentVertex.node]){
        // Finding its Neighbours
        for(let currentEdge of this.adjacencyList[currentVertex.node]){
          // Finding the distance from original to the neighbours
          currentDistance = shortestDistance[currentVertex.node] + currentEdge.distance;
          // If distance is smallest then updating the distance and previous
          if(currentDistance < shortestDistance[currentEdge.node]){
            shortestDistance[currentEdge.node] = currentDistance;
            previous[currentEdge.node] = currentVertex.node;
            queue.enQueue(currentEdge.node, currentDistance);
          }
        }
        visited[currentVertex.node] = true;
        // If reach to the final vertex then Break the loop
        if(currentVertex.node === vertex2){
          let iterator = currentVertex.node;
          while(iterator){
            shortestPath.push(iterator);
            iterator = previous[iterator];
          }
          break;
        }
      }
    }
    
    return {path : shortestPath.reverse(), distance :shortestDistance[vertex2]};

  }

  createInitialObjects(startingNode, shortestDistance, queue, previous){
    for(let key in this.adjacencyList){
      if(startingNode === key){
        shortestDistance[key] = 0;
        queue.enQueue(key, shortestDistance[key]);
      }
      else{
        shortestDistance[key] = Number.MAX_SAFE_INTEGER;
      }
      previous[key] = null;
    }
    return;
  }
}



let letters = new Graph();

console.log(`Add Edge in the Graph `,letters.addEdge('A','B', 4));
console.log(`Add Edge in the Graph `,letters.addEdge('A','C', 2));
console.log(`Add Edge in the Graph `,letters.addEdge('C','D', 2));
console.log(`Add Edge in the Graph `,letters.addEdge('B','E', 3));
console.log(`Add Edge in the Graph `,letters.addEdge('C','F', 4));
console.log(`Add Edge in the Graph `,letters.addEdge('D','E', 3));
console.log(`Add Edge in the Graph `,letters.addEdge('D','F', 1));
console.log(`Add Edge in the Graph `,letters.addEdge('E','F', 1));

console.log(`Letter are `, JSON.stringify(letters));

console.log(`Shortest Distance From One Vertex to Other is `,letters.dijkstrasAlgorithm('A', 'E'));