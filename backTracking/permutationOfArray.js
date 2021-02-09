const numbers = [2,3,5];

// const permutation = (numbers, result=[]) => {
//
//   if(!numbers || !numbers.length){
//     console.log('Result is ',result);
//     return;
//   }
//   for(let i=0; i<numbers.length; i++){
//     let newResult = JSON.parse(JSON.stringify(result));
//     let newNumbers = numbers.slice(0,i).concat(numbers.slice(i+1));
//     newResult.push(numbers[i]);
//     permutation(newNumbers, newResult)
//   }
//
// };

const swap = (array, index1 , index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const permutation = (numbers, currentPosition=0) => {
  if(currentPosition >= numbers.length){
    console.log(`Numbers are `,numbers);
    return;
  }
  for(let i=currentPosition; i<numbers.length; i++){
    swap(numbers, currentPosition, i);
    permutation(numbers, currentPosition+1);
    swap(numbers, currentPosition, i);
  }

};

console.log(`All Possible Permutation are `,permutation(numbers));