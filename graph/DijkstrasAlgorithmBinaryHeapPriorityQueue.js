// Implementing Disjkstra's Algorithm using Binary Heap

class PriorityQueue{
  constructor(){
    this.values = [];
  }
  enqueue(node, priority){
    
    let priorityQueue = this.values;
    // Logic for bubble up the node
    const bubbleUp = (childNodeIndex) => {
      
      let parentNodeIndex = Math.floor((childNodeIndex - 1)/2);
      while(parentNodeIndex >= 0){
        if(priorityQueue[parentNodeIndex].priority > priorityQueue[childNodeIndex].priority){
          this.swap(priorityQueue, parentNodeIndex, childNodeIndex);
        }
        childNodeIndex = parentNodeIndex;
        parentNodeIndex = Math.floor((childNodeIndex - 1)/2);
      }
      return;
    };

    // Adding Node in the Queue
    priorityQueue.push({node, priority});
    // Bubble Up the Node
    bubbleUp(priorityQueue.length-1);
    return this;
  }
  
  dequeue(){
    if(!this.values.length){
      return;
    }
    let priorityQueue = this.values;
    
    // Sink Down logic
    const sinkDown = (parentNodeIndex) => {
      let childNodeIndex1 = 2*parentNodeIndex + 1;
      let childNodeIndex2 = 2*parentNodeIndex + 2;
      let childNodePriority1, childNodePriority2, parentNodePriority;
      while(childNodeIndex1 < priorityQueue.length){
        childNodePriority1 = priorityQueue[childNodeIndex1].priority;
        childNodePriority2 = priorityQueue[childNodeIndex2] && priorityQueue[childNodeIndex2].priority;
        parentNodePriority = priorityQueue[parentNodeIndex].priority;
        
        if(childNodeIndex2 < priorityQueue.length && childNodePriority2<childNodePriority1){
          if(parentNodePriority > childNodePriority2){
            this.swap(priorityQueue, parentNodeIndex, childNodeIndex2);
            parentNodeIndex = childNodeIndex2;
          }
          else{
            break;
          }
          
        }
        else{
          if(parentNodePriority > childNodePriority1){
            this.swap(priorityQueue, parentNodeIndex, childNodeIndex1);
            parentNodeIndex = childNodeIndex1;
          }
          else{
            break;
          }
        }
        childNodeIndex1 = 2*parentNodeIndex + 1;
        childNodeIndex2 = 2*parentNodeIndex + 2;
      }
    };
    
    // Swapping 1st and last Node
    this.swap(priorityQueue, 0, priorityQueue.length-1);
    let returnNode = priorityQueue.pop();
    // Sink Down the First Node to its right Position
    sinkDown(0);
    return returnNode;
  }
  
  swap(array, index1, index2){
    return [array[index1], array[index2]] = [array[index2], array[index1]];
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addEdge(vertex1, vertex2, distance) {
    if (!this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = [];
    }
    if (!this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = [];
    }

    let ifVertex2Exist = this.adjacencyList[vertex1].filter((vertex) => {
      return vertex.node === vertex2;
    });
    if (!ifVertex2Exist || !ifVertex2Exist.length) {
      this.adjacencyList[vertex1].push({node: vertex2, distance});
    }

    let ifVertex1Exist = this.adjacencyList[vertex2].filter((vertex) => {
      return vertex.node === vertex1;
    });
    if (!ifVertex1Exist || !ifVertex1Exist.length) {
      this.adjacencyList[vertex2].push({node: vertex1, distance});
    }
    return this;
  }
  
  dijkstrasAlgorithm(start, end){
    let shortestDistance = {}, previous = {}, visited = {}, queue = new PriorityQueue(), currentVertex, currentDistance, 
      path = [];
    
    // Initializing the variables
    this.initializeTheVariables(shortestDistance, previous, queue, start);
    
    while(queue.values.length){
      currentVertex = queue.dequeue();
      
      if(!visited[currentVertex.node]){
        for(let neighbour of this.adjacencyList[currentVertex.node]){
          currentDistance = shortestDistance[currentVertex.node] + neighbour.distance;
          if(currentDistance < shortestDistance[neighbour.node]){
            shortestDistance[neighbour.node] = currentDistance;
            previous[neighbour.node] = currentVertex.node;
            queue.enqueue(neighbour.node, currentDistance);
          }
        }
      }
      visited[currentVertex.node] = true;
      if(currentVertex.node === end){
        let nextNode = currentVertex.node;
        while(nextNode){
          path.push(nextNode);
          nextNode = previous[nextNode];
        }
        return {path : path.reverse(), distance : shortestDistance[end]}
        
      }
    }
    
  }
  initializeTheVariables(shortestDistance, previous, queue, start){
    for(let key in this.adjacencyList){
      previous[key] = null;
      if(key === start){
        shortestDistance[key] = 0;
        queue.enqueue(start, 0)
      }
      else{
        shortestDistance[key] = Infinity;
      }
    }
    
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