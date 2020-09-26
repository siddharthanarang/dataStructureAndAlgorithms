class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
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
      this.tail = newNode;
    }
    return this;
  }
  
  shift(){
    if(!this.head) return;
    let returnNode = this.head;
    this.head = this.head.next;
    this.length--;
    if(!this.head){
      this.tail = null;
    }
    return returnNode;
  }
}

let list = new SinglyLinkedList();
console.log(`Shift operation of Singly Linked List is `,list.shift());


console.log(`Push element into the list`,list.push(5));
console.log(`Push element into the list`,list.push(6));
console.log(`Push element into the list`,list.push(7));


console.log(`Shift operation of Singly Linked List is `,list.shift());

console.log(`List is `,console.log(list));

