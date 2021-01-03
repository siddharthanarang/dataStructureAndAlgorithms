// It is a undirected graph

class Graph {
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

  depthFirstTraversalRecursive(startingVertex){
    let visited = {};
    let result = [];
    let graphList = this.adjacencyList;
    // Reason of doing this -> once we entered dfs function then context of this will change to the object which
    // invoked dfs no the initial object

    const dfs = (currentNode) => {
      if(!graphList[currentNode]){
        return;
      }
      result.push(currentNode);
      visited[currentNode] = true;
      for(let key of graphList[currentNode]){
        if(!visited[key]){
          dfs(key);
        }
      }

    };
    dfs(startingVertex);
    return result;
  }
}

let letters = new Graph();

console.log(`Insert letters into the graph `,letters.addEdge('A','B'));
console.log(`Insert letters into the graph `,letters.addEdge('A','C'));
console.log(`Insert letters into the graph `,letters.addEdge('B','D'));
console.log(`Insert letters into the graph `,letters.addEdge('C','E'));
console.log(`Insert letters into the graph `,letters.addEdge('D','E'));
console.log(`Insert letters into the graph `,letters.addEdge('D','F'));
console.log(`Insert letters into the graph `,letters.addEdge('E','F'));

console.log(`Depth First Recursive Traversal of Graph `,letters.depthFirstTraversalRecursive('A'));
