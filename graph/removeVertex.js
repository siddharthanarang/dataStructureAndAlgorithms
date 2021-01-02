// It is a undirected graph

class Graph{
  constructor(){
    this.adjacencyList = [];
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
  
  removeVertex(vertex){
    if(!this.adjacencyList[vertex]){
      return this;
    }
    for(let key of this.adjacencyList[vertex]){
      if(this.adjacencyList[key].indexOf(vertex) > -1){
        this.adjacencyList[key].splice(this.adjacencyList[key].indexOf(vertex), 1)
      }
    }
    delete this.adjacencyList[vertex];
    return this;
  }
}

let letters = new Graph();

console.log(`Insert Edge in a Graph `,letters.addEdge('A','B'));
console.log(`Insert Edge in a Graph `,letters.addEdge('A','C'));
console.log(`Insert Edge in a Graph `,letters.addEdge('A','D'));
console.log(`Insert Edge in a Graph `,letters.addEdge('B','C'));
console.log(`Insert Edge in a Graph `,letters.addEdge('B','D'));

console.log(`Letter are `,letters);

console.log(`Remove edge in a graph `,letters.removeVertex('A'));
console.log(`Remove edge in a graph `,letters.removeVertex('A'));
console.log(`Remove edge in a graph `,letters.removeVertex('D'));

console.log(`Letter are `,letters);
