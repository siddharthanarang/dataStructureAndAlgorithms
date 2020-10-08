class Node {
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
    
  }
  
  push(val){
    const newNode = new Node(val);
    this.length++;
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    return this;
  }
  
  pop(){
    let returnNode;
    if(!this.head){
      return;
    }
    this.length--;
    if(!this.head.next){
      returnNode = this.head;
      this.head = null;
      this.tail = null;
      return returnNode;
    }
    returnNode = this.tail;
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
    returnNode.prev = null;
    return returnNode;
  }
}

let list = new DoublyLinkedList();

console.log(`Push element into the Doubly Linked List `,list.push(1));
console.log(`Push element into the Doubly Linked List `,list.push(2));
console.log(`Push element into the Doubly Linked List `,list.push(3));
console.log(`Push element into the Doubly Linked List `,list.push(4));

console.log(`Pop element from the Doubly Linked List `, list.pop());

console.log(`List is `,list);
