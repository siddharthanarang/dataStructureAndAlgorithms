class WeightedGraph{
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = [];
    }
    return this;
  }
  
  addEdge(vertex1, vertex2, weight){
    if(!this.adjacencyList[vertex1]){
      this.adjacencyList[vertex1] = [];
    }
    if(!this.adjacencyList[vertex2]){
      this.adjacencyList[vertex2] = [];
    }
    let isVertex2Exist = this.adjacencyList[vertex1].filter(vertex=>{
      return vertex.node === vertex2;
    });
    let isVertex1Exist = this.adjacencyList[vertex2].filter(vertex=>{
      return vertex.node === vertex1;
    });
    if(!isVertex1Exist.length){
      this.adjacencyList[vertex2].push({node : vertex1, weight});
    }
    if(!isVertex2Exist.length){
      this.adjacencyList[vertex1].push({node : vertex2, weight});
    }
    return this;
  }
}

let letters = new WeightedGraph();

console.log(`Add Vertex Graph `,JSON.stringify(letters.addVertex('A')));
console.log(`Add Vertex Graph `,JSON.stringify(letters.addVertex('B')));

console.log(`Add Edge in Weighted Graph `,JSON.stringify(letters.addEdge('A','B',20)));
console.log(`Add Edge in Weighted Graph `,JSON.stringify(letters.addEdge('A','C',30)));
console.log(`Add Edge in Weighted Graph `,JSON.stringify(letters.addEdge('A','B',40)));