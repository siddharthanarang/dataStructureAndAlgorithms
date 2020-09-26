class Node{
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

  push(element){
    let newNode = new Node(element);
    this.length++;
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return list;
  }

  traverse(){
    if(this.head === null) return;
    let currentNode = this.head;
    while(currentNode){
      console.log(`Current element is ${currentNode.val}`);
      currentNode = currentNode.next;
    }
    return;
  }
}

let list = new SinglyLinkedList();


console.log(`Traverse of Singly Linked List is `, list.traverse());
list.push(5);
list.push(6);
list.push(7);
console.log(`Traverse of Singly Linked List is `, list.traverse());