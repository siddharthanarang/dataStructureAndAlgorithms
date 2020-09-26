class Node {
  constructor(val){
    this.val = val;
    this.next = null
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  push(val){
    let newNode = new Node(val);
    this.length++;
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }
  
  unshift(val){
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    if(this.tail === null){
      this.tail = this.head;
    }
    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();

console.log(`Unshift operation of list is `,list.unshift(5));

console.log(`Push element into the list`,list.push(6));
console.log(`Push element into the list`,list.push(7));

console.log(`Unshift operation of list is `,list.unshift(4));
