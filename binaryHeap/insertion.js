class MaxBinaryHeap{
  constructor(){
    this.values = [];
  }
  
  insertion(insertValue){
    if(!this.values.length){
      this.values.push(insertValue);
      return this;
    }
    // Inserting the node
    this.values.push(insertValue);
    
    // Bubble up to the top
    let childNodeIndex = this.values.length -1;
    let parentNodeIndex = Math.floor((childNodeIndex -1)/2);
    while(this.values[childNodeIndex] > this.values[parentNodeIndex] && parentNodeIndex >= 0){
      [this.values[childNodeIndex] , this.values[parentNodeIndex]] = [this.values[parentNodeIndex] , this.values[childNodeIndex]];
      childNodeIndex = parentNodeIndex;
      parentNodeIndex = Math.floor((childNodeIndex -1)/2)
    }
    return this;
  }
}

let heap = new MaxBinaryHeap();

console.log(`Insert element into Max Binary Heap `,heap.insertion(5));
console.log(`Insert element into Max Binary Heap `,heap.insertion(100));
console.log(`Insert element into Max Binary Heap `,heap.insertion(75));
console.log(`Insert element into Max Binary Heap `,heap.insertion(60));
console.log(`Insert element into Max Binary Heap `,heap.insertion(10));
console.log(`Insert element into Max Binary Heap `,heap.insertion(80));
console.log(`Insert element into Max Binary Heap `,heap.insertion(125));