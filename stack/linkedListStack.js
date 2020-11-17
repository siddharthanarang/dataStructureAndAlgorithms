class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.head = null;
    this.tail =null;
    this.length = 0;
  }
  // unshift
  push(val){
    let newNode = new Node(val);
    this.length++;
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return this.length;
    
  }
  // shift
  pop(){
    let returnNode = null;
    if(!this.head){
      return null;
    }
    else if(!this.head.next){
      returnNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return returnNode.val;
    }
    else {
      returnNode = this.head;
      this.head = this.head.next;
      this.length--;
      returnNode.next = null;
      return returnNode.val;
    }
  }
}

let stack = new Stack();
console.log(`Push element in stack `,stack.push(1));
console.log(`Push element in stack `,stack.push(2)); 
console.log(`Push element in stack `,stack.push(3));

 console.log(`Pop element in stack `,stack.pop());

console.log(`Stack is `, stack);