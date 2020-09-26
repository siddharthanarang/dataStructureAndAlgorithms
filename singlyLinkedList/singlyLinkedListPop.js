class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head =null;
    this.tail =null;
    this.length = 0;
  }
  
  push(val){
    let newNode = new Node(val);
    this.length++;
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  pop(){
    if(this.head === null) return; // Zero element in Singly Linked List
    
    if(this.head.next === null){ // 1 element in Singly Linked List
      const returnValue = this.head.val;
      this.length--;
      this.head =null;
      this.tail =null;
      return returnValue;
    }
    
    let currentNode = this.head;
    let previousNode =  currentNode;
    while(currentNode.next){
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
    this.tail = previousNode;
    this.length--;
    return currentNode.val;
  }
}

let list = new SinglyLinkedList();

console.log(`Performing pop operation `, list.pop());

console.log(`Push element into the list`,list.push(5));
console.log(`Push element into the list`,list.push(6));
console.log(`Push element into the list`,list.push(7));


console.log(`Performing pop operation `, list.pop());

console.log(`List is `,console.log(list));
