// Implementing Hash tabled Set and Get using our own class of Hash table with Separate Chaining collision Technique

class HashMap{
  constructor(size = 13){
    this.keyMap = new Array(size);
  }
  
  _hash(key){
    let WEIRD_PRIME = 31;
    let total =0, value;
    for(let i=0; i<Math.min(key.length, 100);i++){
      value = key[i].charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total;
  }
  
  set(key, value){
    let hashValue = this._hash(key);
    if(!this.keyMap[hashValue]){
      this.keyMap[hashValue] = [];
    }
    this.keyMap[hashValue].push([key, value]);
    return this;
  }
  
  get(key){
    let hashValue = this._hash(key);
    if(!this.keyMap[hashValue]){
      return;
    }
    for(let i=0; i<this.keyMap[hashValue].length; i++){
      if(key === this.keyMap[hashValue][i][0]){
        return this.keyMap[hashValue][i][1];
      }
    }
    return;
  }
}

let map = new HashMap();

console.log('Set value in the hash map ', map.set('a',1));
console.log('Set value in the hash map ', map.set('b',2));
console.log('Set value in the hash map ', map.set('c',3));
console.log('Set value in the hash map ', map.set('d',4));
console.log('Set value in the hash map ', map.set('pink','Value of pink'));
console.log('Set value in the hash map ', map.set('cyan','Value of cyan'));

console.log('Get value in the hash map ', map.get('cyan'));
console.log('Get value in the hash map ', map.get('pink'));
console.log('Get value in the hash map ', map.get('a'));
console.log('Get value in the hash map ', map.get('e'));
console.log('Get value in the hash map ', map.get('k'));