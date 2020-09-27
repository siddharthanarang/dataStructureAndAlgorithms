class Node {
  constructor(val){
    this.val = val;
    this.next = null;
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

  set(index, val){
    let currentNode = this.head;
    let counter = 0;
    while(counter < index && currentNode){
      currentNode = currentNode.next;
      counter++;
    }
    if(counter < index || !currentNode){
      return false;
    }
    currentNode.val = val;
    return true;
  }
}

let list = new SinglyLinkedList();

console.log(`Set value in singly Linked List`, list.set(0,99));
console.log(`Set value in singly Linked List`, list.set(1,99));

console.log(`Push value in singly Linked List`, list.push(5));

console.log(`Set value in singly Linked List`, list.set(0,99));
console.log(`Set value in singly Linked List`, list.set(1,99));

console.log(`List is `,list);

console.log(`Push value in singly Linked List`, list.push(6));
console.log(`Push value in singly Linked List`, list.push(7));

console.log(`Set value in singly Linked List`, list.set(0,91));
console.log(`Set value in singly Linked List`, list.set(1,92));
console.log(`Set value in singly Linked List`, list.set(2,93));
console.log(`Set value in singly Linked List`, list.set(3,94));
console.log(`Set value in singly Linked List`, list.set(4,95));

console.log(`List is `,list);
