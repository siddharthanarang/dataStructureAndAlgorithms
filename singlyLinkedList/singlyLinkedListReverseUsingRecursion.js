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
  reverse(){
    if(!this.head){
      return;
    }
    this.tail = this.head;
    reverseRecursion(this,this.head);
    this.tail.next = null;
    
    function reverseRecursion(list,currentNode){
      if(!currentNode.next){
        list.head = currentNode;
        return;
      }
      let nextNode = currentNode.next;
      reverseRecursion(list,nextNode);
      nextNode.next = currentNode;
      return;
    }
    return this;
  }
}

let list = new SinglyLinkedList();

console.log(`Push element in Singly Linked List`,list.push(1));
console.log(`Push element in Singly Linked List`,list.push(2));
console.log(`Push element in Singly Linked List`,list.push(3));
console.log(`Push element in Singly Linked List`,list.push(4));
console.log(`Push element in Singly Linked List`,list.push(5));
console.log(`Push element in Singly Linked List`,list.push(6));


console.log(`Reversed Singly Linked List`,list.reverse());


console.log('list is ',JSON.stringify(list));