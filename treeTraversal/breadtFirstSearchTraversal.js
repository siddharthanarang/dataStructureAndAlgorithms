class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree{
  constructor() {
    this.root = null
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

  breadthFirstSearchTraversal(){
    if(!this.root){
      return [];
    }
    let queue = [this.root], visited =[], currentNode;
    while(queue.length){
      
      currentNode = queue.shift();
      visited.push(currentNode.val);
      
      if(currentNode.left){
        queue.push(currentNode.left);
      }
      if(currentNode.right){
        queue.push(currentNode.right);
      }
      
    }
    
    return visited;
  }
}

let tree = new Tree();

console.log(`Insert Element into the tree `, tree.insertion(10));
console.log(`Insert Element into the tree `, tree.insertion(6));
console.log(`Insert Element into the tree `, tree.insertion(15));
console.log(`Insert Element into the tree `, tree.insertion(3));
console.log(`Insert Element into the tree `, tree.insertion(8));
console.log(`Insert Element into the tree `, tree.insertion(20));


console.log(`Breadth First Search Traversal of Tree is `, tree.breadthFirstSearchTraversal());