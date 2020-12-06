// Max Binary Heap 

class BinaryHeap{
  constructor(){
    this.values = [];
  }
  
  insertion(insertValue){
    this.values.push(insertValue);
    
    let childNodeIndex = this.values.length -1;
    let parentNodeIndex = Math.floor((childNodeIndex - 1)/2);
    
    while(parentNodeIndex >=0 && this.values[parentNodeIndex] < this.values[childNodeIndex]){
      [this.values[parentNodeIndex], this.values[childNodeIndex]] = [this.values[childNodeIndex], this.values[parentNodeIndex]];
      childNodeIndex = parentNodeIndex;
      parentNodeIndex = Math.floor((childNodeIndex - 1)/2);
    }
    return this;
  }
  
  extractMax(){
    
    if(!this.values.length){
      return null;
    }
    [this.values[0],this.values[this.values.length -1]] =     [this.values[this.values.length -1],this.values[0]];

    let maxElement = this.values.pop();
    if(!this.values.length){
      return maxElement;
    }
    
    let parentNodeIndex = 0;
    let chileNodeIndex1 = 2*parentNodeIndex + 1;
    let chileNodeIndex2 = 2*parentNodeIndex + 2;
    while(chileNodeIndex1 <= this.values.length -1){
      if(chileNodeIndex2 <= this.values.length -1 && this.values[chileNodeIndex2] > this.values[chileNodeIndex1]){
        if(this.values[parentNodeIndex] < this.values[chileNodeIndex2]){
          [this.values[parentNodeIndex], this.values[chileNodeIndex2]] = [this.values[chileNodeIndex2], this.values[parentNodeIndex]]
          parentNodeIndex = chileNodeIndex2;
        }
        else{
          break;
        }
        
      }
      else {
        if(this.values[parentNodeIndex] < this.values[chileNodeIndex1]){
          [this.values[parentNodeIndex], this.values[chileNodeIndex1]] = [this.values[chileNodeIndex1], this.values[parentNodeIndex]];
          parentNodeIndex = chileNodeIndex1;
        }
        else{
          break;
        }
      }
      chileNodeIndex1 = 2*parentNodeIndex + 1;
      chileNodeIndex2 = 2*parentNodeIndex + 2;
    }
    return maxElement;
    
  }
}

let heap = new BinaryHeap();

console.log(`Insert element into Binary Heap `,heap.insertion(41));
console.log(`Insert element into Binary Heap `,heap.insertion(39));
console.log(`Insert element into Binary Heap `,heap.insertion(33));
console.log(`Insert element into Binary Heap `,heap.insertion(18));
console.log(`Insert element into Binary Heap `,heap.insertion(27));
console.log(`Insert element into Binary Heap `,heap.insertion(12));



console.log(`Extract max element into Binary Heap `,heap.extractMax());
console.log(`Extract max element into Binary Heap `,heap.extractMax());
console.log(`Extract max element into Binary Heap `,heap.extractMax());
console.log(`Extract max element into Binary Heap `,heap.extractMax());
console.log(`Extract max element into Binary Heap `,heap.extractMax());
console.log(`Extract max element into Binary Heap `,heap.extractMax());
console.log(`Extract max element into Binary Heap `,heap.extractMax());
console.log(`Binary Heap is`,heap.values);