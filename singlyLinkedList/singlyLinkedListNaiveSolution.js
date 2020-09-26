class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

let first = new Node(5);
first.next = new Node(6);
first.next.next = new Node(7);
first.next.next.next = new Node(8);
first.next.next.next.next = new Node(9);

console.log(`first.val is `,first.val);
console.log(`first is `,first);
console.log(`first.next is `,first.next);

console.log(`first.next.val is `,first.next.val);
console.log(`first.next.next.val is `,first.next.next.val);
console.log(`first.next.next.next.val is `,first.next.next.next.val);
console.log(`first.next.next.next.next.val is `,first.next.next.next.next.val);
