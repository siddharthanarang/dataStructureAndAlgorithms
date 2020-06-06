
const areThereDuplicates = (...args) => {
  let hash = {};
  for(var key of args){
    if(hash[key]){
      return true;
    }
    hash[key] = 1
  }
  return false;
};

console.log(`Are there any duplicate in  1,2,3,4,5,6,7,1`, areThereDuplicates(1,2,3,4,5,6,7,1));