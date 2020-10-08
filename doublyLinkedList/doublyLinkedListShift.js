class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.prev = null;
    this.length = 0;
  }
  
  push(val){
    const newNode = new Node(val);
    this.length++;
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    return this;
  }
  
  shift(){
    if(!this.head){
      return;
    }
    let returnNode = this.head;
    if(!this.head.next){
      this.head = null;
      this.tail=null;
    }
    else{
      this.head.next.prev = null;
      this.head = this.head.next;
      returnNode.next = null;
    }
    this.length--;
    return returnNode;
  }
}

let list = new DoublyLinkedList();

console.log(`Push element into the Doubly Linked List `,list.push(1));
console.log(`Push element into the Doubly Linked List `,list.push(2));
console.log(`Push element into the Doubly Linked List `,list.push(3));
console.log(`Push element into the Doubly Linked List `,list.push(4));

console.log(`Shift element from the Doubly Linked List `,list.shift());

console.log(`List is `,list);


