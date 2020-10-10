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

  set(index, val){

    if(index < 0 || index >= this.length){
      return false;
    }

    let currentNode, i;
    if(index < this.length/2){
      currentNode = this.head;
      for(i=0; i<index; i++){
        currentNode = currentNode.next;
      }
    }
    else {
      currentNode = this.tail;
      for(i=this.length-1; i > index; i--){
        currentNode = currentNode.prev;
      }
    }
    currentNode.val = val;
    return true;
  }
}

let list = new DoublyLinkedList();

console.log(`Set element in Doubly Linked List `, list.set(0,1));

console.log(`Push element in Doubly Linked List `, list.push(0));
console.log(`Push element in Doubly Linked List `, list.push(1));
console.log(`Push element in Doubly Linked List `, list.push(2));
console.log(`Push element in Doubly Linked List `, list.push(3));

console.log(`Set element in Doubly Linked List `, list.set(3,200));

console.log(`List is `,list);

