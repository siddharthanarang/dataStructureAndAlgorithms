class Node{
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
    let newNode = new Node(val);
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

  reverse(){
    if(!this.head){
      return;
    }
    if(!this.head.next){
      return this;
    }
    let currentNode = this.head;
    let nextNode, temp, existingHead = this.head, existingTail = this.tail;
    while(currentNode){
      nextNode = currentNode.next;
      temp = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next =  temp;
      currentNode = nextNode;
    }
    this.head = existingTail;
    this.tail = existingHead;
    return this;
  }
}

let list = new DoublyLinkedList();



console.log(`Push element into the Doubly Linked List `,list.push(0));
console.log(`Push element into the Doubly Linked List `,list.push(1));
console.log(`Push element into the Doubly Linked List `,list.push(2));

console.log(`Push element into the Doubly Linked List `,list.push(3));
console.log(`Push element into the Doubly Linked List `,list.push(4));

console.log('Reverse Doubly Linked List ', list.reverse());

