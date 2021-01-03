// It is a undirected Graph

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
  
  depthFistIterativeSolution(startingVertex){
    let result = [];
    let visited = {};
    let graphList = this.adjacencyList;
    let stack = [startingVertex], currentNode;
    visited[startingVertex] = true;
    while(stack.length){
      currentNode = stack.pop();
      result.push(currentNode);
      for(let key of graphList[currentNode]){
        if(!visited[key] ){
          visited[key] = true;
          stack.push(key);
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

console.log(`Depth First Traversal Iterative solution `, letters.depthFistIterativeSolution('A'));