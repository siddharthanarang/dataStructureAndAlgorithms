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
        else{
          if(currentNode.right){
            currentNode = currentNode.right;
            continue;
          }
          currentNode.right = newNode;
          return this;
        }
      }
    }
    
  }
  
  searching(value){
    if(!this.root){
      return false;
    }
    else{
      let currentNode = this.root;
      while(true){
        if(value === currentNode.val){
          return true
        }
        else if(value < currentNode.val){
          if(!currentNode.left){
            return false;
          }
          currentNode = currentNode.left;
        }
        else{
          if(!currentNode.right){
            return false;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

let tree = new BST();

console.log(`Add Element into BST `,tree.insertion(100));
console.log(`Add Element into BST `,tree.insertion(110));
console.log(`Add Element into BST `,tree.insertion(90));
console.log(`Add Element into BST `,tree.insertion(70));
console.log(`Add Element into BST `,tree.insertion(95));
console.log(`Add Element into BST `,tree.insertion(105));
console.log(`Add Element into BST `,tree.insertion(120));

console.log(`Tree is `,tree);

console.log(`Search Element into BST `,tree.searching(121));