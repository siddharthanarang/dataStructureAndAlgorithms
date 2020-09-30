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

  remove(index) {
    let removed;
    if (index < 0) return;
    if (!this.head) return;
    if (index === 0) {
      removed = this.head;
      this.head = this.head.next;
      this.length--;
      if (this.head === null) this.tail = this.head;
      return removed;
    }
    let counter = 0;
    const findIndex = index - 1;
    let currentNode = this.head;
    while(counter < findIndex && currentNode){
      currentNode = currentNode.next;
      counter++;
    }
    if(counter < findIndex || !currentNode || !currentNode.next){
      return;
    }
    removed = currentNode.next;
    currentNode.next = currentNode.next.next;
    this.length--;
    if(!currentNode.next){
      this.tail = currentNode;
    }
    return removed;
  }
}

let list = new SinglyLinkedList();

console.log(`Remove node from the Singly Linked List `, list.remove(-1));
console.log(`Remove node from the Singly Linked List `, list.remove(0));
console.log(`Remove node from the Singly Linked List `, list.remove(1));

console.log(`Push element into the Singly Linked List`, list.push(1));
console.log(`Push element into the Singly Linked List`, list.push(2));
console.log(`Push element into the Singly Linked List`, list.push(3));
console.log(`Remove node from the Singly Linked List `, list.remove(2));
console.log(`List is `,JSON.stringify(list));

