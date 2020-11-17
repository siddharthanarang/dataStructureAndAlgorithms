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
  
  pop(){
    let returnNode = null;
    if(!this.head){
      return null;
    }
    else if(!this.head.next){
      returnNode = this.head;
      this.head = null;
      this.tail = null;
    }
    else{
      let currentNode = this.head;
      while (currentNode.next.next){
        currentNode = currentNode.next;
      }
      returnNode = currentNode.next;
      currentNode.next = null;
      this.tail = currentNode;
    }
    this.length--;
    return returnNode;
  }
  shift(){
    let returnNode = null;
    if(!this.head){
      return returnNode;
    }
    else if(!this.head.next){
      returnNode = this.head;
      this.head = null;
      this.tail = null;
    }
    else{
      returnNode = this.head;
      this.head = this.head.next;
      returnNode.next = null;
    }
    this.length--;
    return returnNode;
  }
  unshift(val){
    let newNode = new Node(val);
    this.length++;
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      newNode.next = this.head;
      this.head = newNode;
    }
    return this;
  }
  get(index){
    if(index < 0 || index >= this.length){
      return null;
    }
    let currentNode = this.head;
    for(let i=0; i<index; i++){
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  set(index, value){
    if(index < 0 || index >= this.length){
      return null;
    }
    let currentNode = this.head;
    for(let i =0; i<index; i++){
      currentNode = currentNode.next;
    }
    currentNode.val = value;
    return currentNode;
    
  }
  insert(index, val){
    
    if(index < 0 || index > this.length){
      return null;
    }
    let newNode = new Node(val), currentNode = null;
    if(index === 0){
      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
      }
      else{
        newNode.next = this.head;
        this.head = newNode;
      }
    }
    else if(index === this.length){
      currentNode = this.head;
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      this.tail = newNode;
    }
    else{
      currentNode = this.head;
      for(let i=0; i < index-1; i++){
        currentNode =currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.length++;
    return newNode;
  }
  
  remove(index){
    if(index <0 || index >= this.length){
      return null;
    }
    let returnNode = null, currentNode = null;
    if(index === 0){
      returnNode = this.head;
      this.head = this.head.next;
      if(!this.head){
        this.tail = null;
      }
      returnNode.next = null;
    }
    else if(index === this.length - 1){
      currentNode = this.head;
      while(currentNode.next.next){
        currentNode = currentNode.next;
      }
      returnNode = currentNode.next;
      currentNode.next = null;
      this.tail = currentNode;
    }
    else {
      currentNode = this.head;
      for(let i=0; i<index-1; i++){
        currentNode = currentNode.next;
      }

      returnNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      returnNode.next = null;
    }
    this.length--;
    return returnNode;
    
  }
  
  reverse(){
    if(!this.head){
      return null;
    }
    else if(!this.head.next){
      return this;
    }
    else{
      let currentNode = this.head, previousNode = null, nextNode;
      this.tail = this.head;
      while(currentNode){
        nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
      }
      this.head = previousNode;
      return this;
    }
  }
}

let list = new SinglyLinkedList();




// console.log(`Pop Element from the list `,list.pop());


// console.log(`Shift Element from the list `,list.shift());

 

// console.log(`Unshift Element from the list `,list.unshift(10));


// console.log(`Get Element from the list `,list.get(1));


// console.log(`Set Element from the list `,list.set(2, 10));


// console.log(`Insert Element from the list `,list.insert(2, 10));


// console.log(`Remove Element from the list `,list.remove(3));

console.log(`Push element in the List `, list.push(1));
console.log(`Push element in the List `, list.push(2));
console.log(`Push element in the List `, list.push(3));
console.log(`Push element in the List `, list.push(4));
console.log(`Reverse Element from the list `,list.reverse());




console.log(`List is `,list);
