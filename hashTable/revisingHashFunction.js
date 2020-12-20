
const hash = (key, arrayLength) => {
  
  let PRIME_WEIRD = 31;
  let total = 1, value;
  for(let i=0; i<Math.min(key.length, 100); i++){
    value = key[i].charCodeAt(0) -96;
    total = (total * PRIME_WEIRD + value)%arrayLength;
  }
  
  return total;
  
};

console.log('Hash is ', hash('pink',13));
console.log('Hash is ', hash('orangered',13));
console.log('Hash is ', hash('cyan',13));