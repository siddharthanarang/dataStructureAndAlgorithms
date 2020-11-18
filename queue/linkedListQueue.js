class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  // Push Of Linked List
  enqueue(value){
    let newNode = new Node(value);
    this.length++;
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this.length;
  }
  // Shift
  dequeue(){
    let returnNode = null;
    if(!this.head){
      return returnNode;
    }
    else if(!this.head.next){
      returnNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return returnNode.val;
    }
    else {
      returnNode = this.head;
      this.head = this.head.next;
      this.length--;
      return returnNode.val;
    }
    
  }
}

let queue = new Queue();

console.log(`Enqueue element in the queue `, queue.enqueue(1));
console.log(`Enqueue element in the queue `, queue.enqueue(2));
console.log(`Enqueue element in the queue `, queue.enqueue(3));

console.log(`Dequeue element from the queue `,queue.dequeue());

console.log(`Queue is `,queue);