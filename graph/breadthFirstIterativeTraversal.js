// This is a Undirected Graph
class Graph{
  constructor(){
    this.adjacencyList = {};
  }

  addEdge(vertex1, vertex2){
    if(!this.adjacencyList[vertex1]){
      this.adjacencyList[vertex1] = [];
    }
    if(!this.adjacencyList[vertex2]){
      this.adjacencyList[vertex2] = [];
    }
    if(this.adjacencyList[vertex1].indexOf(vertex2) === -1){
      this.adjacencyList[vertex1].push(vertex2);
    }
    if(this.adjacencyList[vertex2].indexOf(vertex1) === -1){
      this.adjacencyList[vertex2].push(vertex1);
    }
    return this;
  }
  
  breadthFirstIterativeSolution(startingNode){
    let result = [], visited = {}, queue = [startingNode], currentVertex;
    visited[startingNode] = true;

    while(queue.length){
      currentVertex = queue.shift();
      result.push(currentVertex);
      for(let key of this.adjacencyList[currentVertex]){
        if(!visited[key]){
          queue.push(key);
          visited[key] = true;
        }
      }
    }
    return result;
  }
}
let letters = new Graph();

console.log(`Inserting a letter into a Graph `,letters.addEdge('A','B'));
console.log(`Inserting a letter into a Graph `,letters.addEdge('A','C'));
console.log(`Inserting a letter into a Graph `,letters.addEdge('B','D'));
console.log(`Inserting a letter into a Graph `,letters.addEdge('C','E'));
console.log(`Inserting a letter into a Graph `,letters.addEdge('D','E'));
console.log(`Inserting a letter into a Graph `,letters.addEdge('D','F'));
console.log(`Inserting a letter into a Graph `,letters.addEdge('E','F'));

console.log(`Breadth First Traversal Iterative solution `, letters.breadthFirstIterativeSolution('A'));
