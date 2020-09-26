class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  
  push(insertElement){
    let newNode = new Node(insertElement);
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
}

let list = new SinglyLinkedList();


console.log(`List is `,list.push(5));
console.log(`List is `,list.push(6));
console.log(`List is `,list.push(7));
console.log(`List is `,list.push(8));
console.log(`List is `,list.push(9));