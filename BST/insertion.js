class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(){
    this.root = null;
  }
  
  insertion(value){
    let newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
      return this;
    }
    else{
      let currentNode = this.root;
      while(true){
        if(value < currentNode.val){
          if(currentNode.left){
            currentNode = currentNode.left;
            continue;
          }
          currentNode.left = newNode;
          return this;
        }
        else {
          if(currentNode.right){
            currentNode = currentNode.right;
          }
          currentNode.right = newNode;
          return this;
        }
      }
    }
  }
}

let tree = new BST();

console.log(`Insert element into BST `,tree.insertion(100));
console.log(`Insert element into BST `,tree.insertion(150));
console.log(`Insert element into BST `,tree.insertion(170));
console.log(`Insert element into BST `,tree.insertion(50));
console.log(`Insert element into BST `,tree.insertion(70));