// Implementing Hash Table Keys And Values using HashMap Class

class HashMap{
  constructor(size=53){
    this.keyMap = new Array(size);
  }
  
  _hash(key){
    
    let WEIRD_PRIME = 31;
    let total =0, value;
    for(let i=0; i<Math.min(key.length, 100); i++){
      let value = key[i].charCodeAt(0);
      total = (total * WEIRD_PRIME + value)%this.keyMap.length;
    }
    return total;
  }
  
  set(key, value){
    let hashValue = this._hash(key);
    if(!this.keyMap[hashValue]){
      this.keyMap[hashValue] = [];
    }
    for(let i=0; i<this.keyMap[hashValue].length; i++){
      if(this.keyMap[hashValue][i][0] === key){
        this.keyMap[hashValue][i][1] = value;
        return this;
      }
    }
    this.keyMap[hashValue].push([key, value]);
    return this;
  }
  
  get(key){
    let hashValue = this._hash(key);
    if(!this.keyMap[hashValue]){
      return;
    }
    for(let i=0; i< this.keyMap[hashValue].length; i++){
      if(this.keyMap[hashValue][i][0] === key){
        return this.keyMap[hashValue][i][1];
      }
    }
    return;
  }
  
  keys(){
    let dummyArray = [];
    for(let i=0; i<this.keyMap.length; i++){
      if(!this.keyMap[i]){
        continue;
      }
      for(let j=0; j<this.keyMap[i].length; j++){
        dummyArray.push(this.keyMap[i][j][0]);
      }
    }
    return dummyArray;
  }
  
  values(){
    let dummyArray = [];
    for(let i=0; i<this.keyMap.length; i++){
      if(!this.keyMap[i]){
        continue;
      }
      for(let j=0; j<this.keyMap[i].length; j++){
        if(dummyArray.indexOf(this.keyMap[i][j][1]) === -1){
          dummyArray.push(this.keyMap[i][j][1]);
        }
      }
    }
    return dummyArray;
  }
}

let map = new HashMap();

console.log('Set value in the hash map ', map.set('a',1));
console.log('Set value in the hash map ', map.set('b',2));
console.log('Set value in the hash map ', map.set('c',3));
console.log('Set value in the hash map ', map.set('d',4));
console.log('Set value in the hash map ', map.set('d',5));
console.log('Set value in the hash map ', map.set('pink','Value of pink'));
console.log('Set value in the hash map ', map.set('cyan','Value of cyan'));

console.log('Get value in the hash map ', map.get('cyan'));
console.log('Get value in the hash map ', map.get('pink'));
console.log('Get value in the hash map ', map.get('a'));
console.log('Get value in the hash map ', map.get('e'));
console.log('Get value in the hash map ', map.get('k'));

console.log('Keys of hash map is ', map.keys());
console.log('Keys of hash map is ', map.values());

