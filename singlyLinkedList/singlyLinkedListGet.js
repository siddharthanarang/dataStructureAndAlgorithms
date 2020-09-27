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

  get(index){
    let counter = 0;
    let currentNode = this.head;
    while(counter < index && currentNode){
      currentNode = currentNode.next;
      counter++;
    }
    if(counter < index){
      return;
    }
    return currentNode;
  }
}

let list = new SinglyLinkedList();

console.log(`Get element from Singly Linked List `,list.get(0));
console.log(`Get element from Singly Linked List `,list.get(1));

console.log(`Push element in Singly Linked List`,list.push(5));

console.log(`Get element from Singly Linked List `,list.get(0));
console.log(`Get element from Singly Linked List `,list.get(1));
console.log(`Get element from Singly Linked List `,list.get(2));

console.log(`Push element in Singly Linked List`,list.push(6));
console.log(`Push element in Singly Linked List`,list.push(7));


console.log(`Get element from Singly Linked List `,list.get(0));
console.log(`Get element from Singly Linked List `,list.get(1));
console.log(`Get element from Singly Linked List `,list.get(2));
console.log(`Get element from Singly Linked List `,list.get(3));
console.log(`Get element from Singly Linked List `,list.get(4));
console.log(`Get element from Singly Linked List `,list.get(5));
