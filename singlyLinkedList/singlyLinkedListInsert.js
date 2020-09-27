class Node{
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
    if(!this.head ){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }
  
  insert(index, val){
    if(index < 0){
      return false;
    }
    let newNode = new Node(val);
    if(index === 0 && !this.head){
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return true;
    }
    if(index === 0){
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return true;
    }
    const findIndex = index -1;
    let counter = 0;
    let currentNode = this.head;
    
    while(counter < findIndex && currentNode){
      currentNode = currentNode.next;
      counter++;
    }
    
    if(counter < findIndex || !currentNode){
      return false;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    if(!newNode.next){
      this.tail = newNode;
    }
    return true;
  }
}

let list = new SinglyLinkedList();

console.log(`Insert node in the Singly Linked List `, list.insert(-1,99));
console.log(`Insert node in the Singly Linked List `, list.insert(1,99));

console.log(`List is `,list);

console.log(`Insert node in the Singly Linked List `, list.insert(0,55));
console.log(`List is `,list);


console.log(`Insert node in the Singly Linked List `, list.insert(0,54));
console.log(`List is `,list);


console.log(`Push element in the Singly Linked List `, list.push(5));
console.log(`Push element in the Singly Linked List `, list.push(6));

console.log(`Insert node in the Singly Linked List `, list.insert(0,1));
console.log(`List is `,list);


console.log(`Insert node in the Singly Linked List `, list.insert(5,7));
console.log(`Insert node in the Singly Linked List `, list.insert(2,99));

console.log(`List is `,JSON.stringify(list));

