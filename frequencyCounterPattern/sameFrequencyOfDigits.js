let digit1 = 34;
let digit2 = 14;

const sameFrequency = (digit1, digit2) => {

  if(digit1 === 0 && digit2 === 0 ){
    return true;
  }
  let hash = {};
  while(digit1){
    const modulus = digit1%10;
    digit1 = parseInt(digit1/10);
    if(!hash[modulus]){
      hash[modulus] = {
        count1 : 0,
        count2 : 0

      };
    }
    hash[modulus]['count1'] +=  1;
  }

  while(digit2){
    const modulus = digit2%10;
    digit2 = parseInt(digit2/10);
    if(!hash[modulus]){
      return false;
    }
    hash[modulus]['count2'] +=  1;
  }

  for(var key in hash){
    if(hash[key]['count1'] != hash[key]['count2']){
      return false;
    }
  }
  return true;
};

console.log('digit1 is ',digit1);
console.log('digit2 is ',digit2);
console.log('Is digit1 same as digit 2 ', sameFrequency(digit1, digit2));