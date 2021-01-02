// It is a undirected Graph

class Graph{
  constructor(){
    this.adjacencyList = {};
  }
  
  addEdge(vertex1, vertex2){
    if(!this.adjacencyList[vertex1]){
      this.adjacencyList[vertex1] =[];
    }
    if(!this.adjacencyList[vertex2]){
      this.adjacencyList[vertex2] =[];
    }
    if(this.adjacencyList[vertex1].indexOf(vertex2) === -1){
      this.adjacencyList[vertex1].push(vertex2);
    }
    if(this.adjacencyList[vertex2].indexOf(vertex1) === -1){
      this.adjacencyList[vertex2].push(vertex1);
    }
    return this;
  }
}

let letters = new Graph();

console.log(`Insert a edge in a Graph `, letters.addEdge('A','B'));
console.log(`Insert a edge in a Graph `, letters.addEdge('A','B'));
console.log(`Insert a edge in a Graph `, letters.addEdge('A','C'));

console.log(`Letter are `,letters);