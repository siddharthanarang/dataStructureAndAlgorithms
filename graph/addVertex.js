// It is a undirected Graph
class Graph {
  constructor(){
    this.adjacencyList = {};
  }
  
  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = [];
    }
    return this;
  }
}

let letters = new Graph();

console.log(`Add vertex in Graph `, letters.addVertex('A'));
console.log(`Add vertex in Graph `, letters.addVertex('B'));

console.log(`Graph is `, letters);