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

  get(index){
    if(index < 0 || index >= this.length){
      return null;
    }
    let currentNode, i;
    if(index < this.length/2){
      currentNode = this.head;
      for(i=0; i<index; i++){
        currentNode = currentNode.next;
      }
    }
    else{
      currentNode = this.tail;
      for(i=this.length-1; i > index; i--){
        currentNode =currentNode.prev;
      }
    }
    return currentNode;
  }
}

let list = new DoublyLinkedList();

console.log(`Push element into the Doubly Linked List `,list.push(0));
console.log(`Push element into the Doubly Linked List `,list.push(1));
console.log(`Push element into the Doubly Linked List `,list.push(2));
console.log(`Push element into the Doubly Linked List `,list.push(3));
console.log(`Push element into the Doubly Linked List `,list.push(4));
console.log('Get element from Doubly Linked List ', list.get(0));



