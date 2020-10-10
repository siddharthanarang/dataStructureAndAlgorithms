class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    return this;
  }
  
  remove(index){
    if(index < 0 || index >= this.length){
      return;
    }
    let removeElement;
    if(index === 0){
      if(!this.head.next){
        removeElement = this.head;
        this.head = null;
        this.tail = null;
        this.length--;
        return removeElement
      }
      removeElement = this.head;
      removeElement.next.prev = null;
      this.head = this.head.next;
      removeElement.next = null;
      this.length--;
      return removeElement;
    }
    else if(index === this.length - 1){
      removeElement = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      removeElement.prev = null;
      this.length--;
      return removeElement;
    }
    else {
      let currentNode, i;
      if(index < this.length/2){
        currentNode = this.head;
        for(i=0; i<index; i++){
          currentNode = currentNode.next;
        }
      }
      else{
        currentNode = this.tail;
        for(i=this.length-1; i>index; i--){
          currentNode = currentNode.prev;
        }
      }
      removeElement = currentNode;
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
      removeElement.next = null;
      removeElement.prev = null;
      this.length--;
      return removeElement;
    }
  }
}

let list = new DoublyLinkedList();

console.log(`Push element in Doubly Linked List `, list.push(0));
console.log(`Push element in Doubly Linked List `, list.push(1));
console.log(`Push element in Doubly Linked List `, list.push(2));
console.log(`Push element in Doubly Linked List `, list.push(3));
console.log(`Push element in Doubly Linked List `, list.push(4));

console.log(`Remove element from the list `, list.remove(3));
console.log(`List is `,list);

