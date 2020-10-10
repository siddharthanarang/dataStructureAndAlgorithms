class Node {
  constructor(val) {
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
      this.tail.prev = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    return this;
  }

  insert(index, val){
    if(index < 0 || index > this.length){
      return false;
    }
    let newNode = new Node(val), currentNode, i;
    if(index === 0){
      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
        this.length++;
        return true;
      }
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
      return true;
    }
    else if(index === this.length){
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
      return true;
    }
    else if(index < this.length/2){
      currentNode = this.head;
      for(i=0; i< index; i++){
        currentNode = currentNode.next;
      }
    }
    else{
      currentNode = this.tail;
      for(i=this.length-1; i>index; i--){
        currentNode = currentNode.prev;
      }
    }
    currentNode.prev.next = newNode;
    newNode.prev = currentNode.prev;
    newNode.next = currentNode;
    currentNode.prev = newNode;
    this.length++;
    return true;
  }
}

let list = new DoublyLinkedList();

console.log(`Insert element into Doubly Linked List `, list.insert(0,0));
console.log(`Insert element into Doubly Linked List `, list.insert(1,1));
console.log(`Insert element into Doubly Linked List `, list.insert(2,2));
console.log(`Insert element into Doubly Linked List `, list.insert(1,3));

console.log(`List is `,list);