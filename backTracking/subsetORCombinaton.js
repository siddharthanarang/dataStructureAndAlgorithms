let numbers = [2,3,5];

const combination = (numbers, result = []) => {
  
  if(!numbers || !numbers.length){
    console.log(`Result is `,result);
    return;
  }
  
  let currentNumbers = numbers.shift();
  
  //No is not included
  combination(JSON.parse(JSON.stringify(numbers)), JSON.parse(JSON.stringify(result)));

  //No is included
  result.push(currentNumbers);
  combination(JSON.parse(JSON.stringify(numbers)), JSON.parse(JSON.stringify(result)));
  
};

console.log(`All Possible Combination are `,combination(numbers));