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

  removeNode(value){
    if(!this.root){
      return false;
    }
    let searchedElement = this.searching(value);
    if(!searchedElement){
      return searchedElement;
    }
    let {removeNode, parentNode} = searchedElement;

    // 0 Node Case
    if(!removeNode.left && !removeNode.right){
      // Removal of Root Node
      if(!parentNode){
        this.root = null;
      }
      else if(parentNode.val < removeNode.val){
        parentNode.right = null;
      }
      else{
        parentNode.left = null;
      }
      return removeNode;

    }
    // 2 Node Case
    else if(removeNode.left && removeNode.right){
      let precedorNode = this.findPrecedorNode(removeNode);
      precedorNode.left = removeNode.left;
      precedorNode.right = precedorNode != removeNode.right ? removeNode.right : null;
      
      // Removal of Root Node
      if(!parentNode){
        this.root = precedorNode;
      }
      else if(parentNode.val < removeNode.val){
        parentNode.right = precedorNode;
      }
      else{
        parentNode.left = precedorNode;
      }
      removeNode.left = null;
      removeNode.right =null;
      return removeNode;
    }
    // 1 Node Case
    else {
      // Removal of Root Node
      if(!parentNode){ 
        this.root = removeNode.left || removeNode.right;
      }
      else if(parentNode.val < removeNode.val){
        parentNode.right = removeNode.left || removeNode.right;
      }
      else{
        parentNode.left = removeNode.left || removeNode.right;
      }
      removeNode.left = null;
      removeNode.right =null;
      return removeNode;
    }

  }
  
  findPrecedorNode(currentNode){
    let previousNode = currentNode.right, unlinkNode;
    
    while(previousNode.left){
      unlinkNode = previousNode;
      previousNode = previousNode.left;
    }
    if(unlinkNode){
      unlinkNode.left = null;
    }
    return previousNode;
  }

   searching(value){
    let currentNode = this.root, parentNode;
    while(currentNode){
      if(value === currentNode.val){
        return {removeNode : currentNode, parentNode}
      }
      else if(value < currentNode.val){
        parentNode = currentNode;
        currentNode = currentNode.left;
      }
      else{
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }
    return false
  }
}

let tree = new BST();

console.log(`Insert element into the Tree `,tree.insertion(10));
console.log(`Insert element into the Tree `,tree.insertion(6));
console.log(`Insert element into the Tree `,tree.insertion(18));
console.log(`Insert element into the Tree `,tree.insertion(3));
console.log(`Insert element into the Tree `,tree.insertion(8));
console.log(`Insert element into the Tree `,tree.insertion(15));
console.log(`Insert element into the Tree `,tree.insertion(20));
console.log(`Insert element into the Tree `,tree.insertion(12));
console.log(`Insert element into the Tree `,tree.insertion(16));
console.log(`Insert element into the Tree `,tree.insertion(19));
console.log(`Insert element into the Tree `,tree.insertion(21));

console.log(`Remove element into the Tree `,tree.removeNode(18));

console.log(`Tree is `,JSON.stringify(tree));