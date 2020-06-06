
const areThereDuplicates = (...args) => {

  args.sort(function (a , b) {
    return a-b;
  });
  for(let i=0; i<args.length-1; i++){
    if(args[i] === args[i+1]){
      return true;
    }
  }
  return false;
};

console.log('Are there duplicates in 1,2,7,8,5,4,9,3,0 ',areThereDuplicates(1,2,7,8,5,4,9,3,0));