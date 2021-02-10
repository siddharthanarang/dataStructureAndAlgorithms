let numbers = [1,2,3];

// const combination = (numbers, result = []) => {
//  
//   if(!numbers || !numbers.length){
//     console.log(`Result is `,result);
//     return;
//   }
//  
//   let currentNumbers = numbers.shift();
//  
//   //No is not included
//   combination(JSON.parse(JSON.stringify(numbers)), JSON.parse(JSON.stringify(result)));
//
//   //No is included
//   result.push(currentNumbers);
//   combination(JSON.parse(JSON.stringify(numbers)), JSON.parse(JSON.stringify(result)));
//  
// };

let combination = (numbers, currentIndex = 0,currentPosition =0, data = []) => {
  if(currentPosition >= numbers.length){
    console.log(`Data is `,data.slice(0,currentIndex));
    return;
  }
  
  data[currentIndex] = numbers[currentPosition];
  combination(numbers, currentIndex+1, currentPosition+1, data);
  combination(numbers, currentIndex, currentPosition+1, data);
  
  
};

console.log(`All Possible Combination are `,combination(numbers));