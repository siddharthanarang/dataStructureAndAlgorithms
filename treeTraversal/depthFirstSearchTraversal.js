class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree{
  constructor(){
    this.root = null;
  }

  insertion(value){
    let newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
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
  
  preOrder(){
    if(!this.root){
      return [];
    }
    let visited = [];
    const traversal = (currentNode) => {
      visited.push(currentNode.val);
      if(currentNode.left) traversal(currentNode.left);
      if(currentNode.right) traversal(currentNode.right);
    };
    traversal(this.root);
    return visited;
  }

  postOrder(){
    if(!this.root){
      return [];
    }
    let visited = [];
    const traversal = (currentNode) => {
      if(currentNode.left) traversal(currentNode.left);
      if(currentNode.right) traversal(currentNode.right);
      visited.push(currentNode.val);
    };
    traversal(this.root);
    return visited;
  }
}

let tree = new Tree();

console.log(`Insert element into the Tree `, tree.insertion(10));
console.log(`Insert element into the Tree `, tree.insertion(6));
console.log(`Insert element into the Tree `, tree.insertion(15));
console.log(`Insert element into the Tree `, tree.insertion(3));
console.log(`Insert element into the Tree `, tree.insertion(8));
console.log(`Insert element into the Tree `, tree.insertion(20));


console.log(`Pre Order Traversal of tree is `, tree.preOrder());
console.log(`Post Order Traversal of tree is `, tree.postOrder());