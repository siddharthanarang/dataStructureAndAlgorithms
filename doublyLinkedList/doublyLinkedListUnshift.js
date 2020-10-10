class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
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
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode
    }
    return this;
  }

  unshift(val){
    let newNode = new Node(val);
    this.length++;
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    return this;
  }
}

let list = new DoublyLinkedList();

console.log(`Unshift element in Doubly Linked List `, list.unshift(1));
console.log(`Unshift element in Doubly Linked List `, list.unshift(2));
console.log(`Unshift element in Doubly Linked List `, list.unshift(3));