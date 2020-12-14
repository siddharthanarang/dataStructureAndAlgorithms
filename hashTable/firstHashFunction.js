
const hash = (key, arrayLength) => {

  let hash = 0;
  for(let character of key){
    hash += character.charCodeAt(0) - 96;
  }


  return hash%arrayLength;
};

console.log('Hash is ', hash('pink',10));
console.log('Hash is ', hash('orangered',10));
console.log('Hash is ', hash('cyan',10));