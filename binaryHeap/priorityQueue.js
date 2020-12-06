// Using Min Binary Heap
// In this we are not talking about equality in Priority Queue, For Equality we have to take one more variable in node 
// like timestamp, to compare time


class Node{
  constructor(priority, val){
    this.priority = priority;
    this.val = val;
    
  }
}

class PriorityQueue{
  constructor(){
    this.values = [];
  }
  
  enqueue(priority, val){
    
    let newNode = new Node(priority, val);
    if(!this.values.length){
      this.values.push(newNode);
      return this;
    }
    // 1. PUSH THE ELEMENT
    this.values.push(newNode);
    
    // 2. BUBBLE UP THE ELEMENT TO ITS POSITION
    let childNodeIndex = this.values.length -1;
    let parentNodeIndex = Math.floor((childNodeIndex-1)/2);
    let parentPriority, childPriority;
    while (parentNodeIndex >= 0){
      parentPriority = this.values[parentNodeIndex].priority;
      childPriority = this.values[childNodeIndex].priority;
      if(parentPriority < childPriority){
        break;
      }
      [this.values[parentNodeIndex], this.values[childNodeIndex]] = [this.values[childNodeIndex], this.values[parentNodeIndex]];
      childNodeIndex = parentNodeIndex;
      parentNodeIndex = Math.floor((childNodeIndex-1)/2);
    }
    
    return this;
  }
  
  dequeue(){
    if(!this.values.length){
      return null;
    }
    // 1. Pop the root Node and Replace by last Node
    [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
    let removeNode = this.values.pop();
     
    // 2. Heapify/Sink Down the Heap
    let parentNodeIndex = 0;
    let childNodeIndex1 = 2 * parentNodeIndex + 1;
    let childNodeIndex2 = 2 * parentNodeIndex + 2;
    let parentPriority, childPriority1, childPriority2;
    

    while(childNodeIndex1 < this.values.length){
      parentPriority = this.values[parentNodeIndex].priority;
      childPriority1 = this.values[childNodeIndex1].priority;
      childPriority2 =  this.values[childNodeIndex2] && this.values[childNodeIndex2].priority;
      
      if(childNodeIndex2 < this.values.length && childPriority2 < childPriority1){
        if(parentPriority < childPriority2){
          break;
        }
        [this.values[parentNodeIndex], this.values[childNodeIndex2]] = [this.values[childNodeIndex2], this.values[parentNodeIndex]];
        parentNodeIndex = childNodeIndex2;
        childNodeIndex1 = 2 * parentNodeIndex + 1;
        childNodeIndex2 = 2 * parentNodeIndex + 2;
      }
      else {
        if(parentPriority < childPriority1){
          break;
        }
        [this.values[parentNodeIndex], this.values[childNodeIndex1]] = [this.values[childNodeIndex1], this.values[parentNodeIndex]];
        parentNodeIndex = childNodeIndex1;
        childNodeIndex1 = 2 * parentNodeIndex + 1;
        childNodeIndex2 = 2 * parentNodeIndex + 2;
      }
    }
    return removeNode;
  }
}

let queue = new PriorityQueue();

console.log('Insertion into Priority Queue ', queue.enqueue(10, 100));
console.log('Insertion into Priority Queue ', queue.enqueue(6, 60));
console.log('Insertion into Priority Queue ', queue.enqueue(9, 90));
console.log('Insertion into Priority Queue ', queue.enqueue(1, 10));
console.log('Insertion into Priority Queue ', queue.enqueue(4, 40));
console.log('Insertion into Priority Queue ', queue.enqueue(3, 30));

console.log('Removing element from Priority Queue ', queue.dequeue());
console.log('Removing element from Priority Queue ', queue.dequeue());
console.log('Removing element from Priority Queue ', queue.dequeue());
console.log('Removing element from Priority Queue ', queue.dequeue());
console.log('Removing element from Priority Queue ', queue.dequeue());
console.log('Removing element from Priority Queue ', queue.dequeue());
