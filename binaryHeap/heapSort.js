// Max Binary Heap
class maxBinaryHeap {
  constructor(){
    this.values = [];
  }

  heapSort(unsortedArray){
    

    const buildMaxHeap = (unsortedArray) => {

      const moveUp = () => {
        let childNodeIndex = this.values.length -1;
        let parentNodeIndex = Math.floor((childNodeIndex-1)/2);


        while(parentNodeIndex >=0 ){
          if(this.values[parentNodeIndex] > this.values[childNodeIndex]){
            break;
          }
          [this.values[parentNodeIndex], this.values[childNodeIndex]] = [this.values[childNodeIndex], this.values[parentNodeIndex]];
          childNodeIndex = parentNodeIndex;
          parentNodeIndex = Math.floor((childNodeIndex-1)/2);
        }
        return;
      };

      for(let i=0; i<unsortedArray.length; i++){
        this.values.push(unsortedArray[i]);
        moveUp();
      }
      return this;
    };
    
    const heapify = (heap, start, end) => {
      let parentNodeIndex = start;
      let childNodeIndex1 = 2 * parentNodeIndex + 1;
      let childNodeIndex2 = 2 * parentNodeIndex + 2;
      
      while(childNodeIndex1 <= end){

        if(childNodeIndex2 <= end && heap[childNodeIndex2] > heap[childNodeIndex1]){
          if(heap[parentNodeIndex] > heap[childNodeIndex2]){
            break;
          }
          [heap[parentNodeIndex], heap[childNodeIndex2]] =[heap[childNodeIndex2], heap[parentNodeIndex]];
          parentNodeIndex = childNodeIndex2;
          childNodeIndex1 = 2 * parentNodeIndex + 1;
          childNodeIndex2 = 2 * parentNodeIndex + 2;
        }
        else {
          if(heap[parentNodeIndex] > heap[childNodeIndex1]){
            break;
          }
          [heap[parentNodeIndex], heap[childNodeIndex1]] =[heap[childNodeIndex1], heap[parentNodeIndex]];
          parentNodeIndex = childNodeIndex1;
          childNodeIndex1 = 2 * parentNodeIndex + 1;
          childNodeIndex2 = 2 * parentNodeIndex + 2;
        }
      }
      
    };
    // 1. Build Heap from the Array
    buildMaxHeap(unsortedArray);

    for(let i=this.values.length-1; i>0; i--){
      // 2. Swap the first and last element
      [this.values[0], this.values[i]] = [this.values[i], this.values[0]];
      // 3. Heapify the heap
      heapify(this.values, 0, i-1);
    }
    return this;
  }

 
}

let heap = new maxBinaryHeap();

console.log(heap.heapSort([3,19,1,14,8,7]));
