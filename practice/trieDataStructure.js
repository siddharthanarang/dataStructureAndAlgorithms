class Node{
  constructor(){
    this.word = null;
  }
}
class Trie {
  constructor(){
    this.root = new Node();
  }
  
  insert(word){
    let currentNode = this.root;
    let currentIndex = 0;
    while(currentIndex < word.length){
      if(!currentNode[word[currentIndex]]){
        currentNode[word[currentIndex]] = new Node();
      }
      currentNode = currentNode[word[currentIndex]];
      currentIndex++;
    }
    currentNode.word = word;
    return this;
  }
  search(word){
    let currentNode = this.root;
    let currentIndex = 0;
    while(currentIndex < word.length){
      if(!currentNode[word[currentIndex]]){
        return false;
      }
      currentNode = currentNode[word[currentIndex]];
      currentIndex++;
    }
    if(word != currentNode['word']){
      return false;
    }
    return true;
  }
}

let trie = new Trie();
console.log('Inserting node in trie ',JSON.stringify(trie.insert('apple')));
console.log('Inserting node in trie ',JSON.stringify(trie.insert('applemn')));
console.log('Inserting node in trie ',JSON.stringify(trie.insert('appleab')));
console.log('Inserting node in trie ',JSON.stringify(trie.insert('bppleab')));

console.log('Searching element in trie ',trie.search('apple'));
console.log('Searching element in trie ',trie.search('applemn'));
console.log('Searching element in trie ',trie.search('appleab'));
console.log('Searching element in trie ',trie.search('bppleab'));
console.log('Searching element in trie ',trie.search('bppleaba'));
console.log('Searching element in trie ',trie.search('bppleabb'));
console.log('Searching element in trie ',trie.search('aaa'));
console.log('Searching element in trie ',trie.search('app'));