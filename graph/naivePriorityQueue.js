class PriorityQueue{
  constructor(){
    this.priorityQueue = [];
  }
  
  enQueue(element, priority){
    this.priorityQueue.push({element, priority});
    this.priorityQueue.sort((a,b) =>{
      return a.priority - b.priority;
    });
    return this;
  }
  
  deQueue(){
    return this.priorityQueue.shift();
  }
}

let  letters = new PriorityQueue();

console.log(`Enqueue operation `,letters.enQueue('A','10'));
console.log(`Enqueue operation `,letters.enQueue('B','7'));
console.log(`Enqueue operation `,letters.enQueue('C','5'));

console.log(`Dequeue operation `,letters.deQueue());
console.log(`Dequeue operation `,letters.deQueue());

