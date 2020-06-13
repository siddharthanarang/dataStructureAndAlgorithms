// Write a function sumRange which will give sum of numbers from 1 to n

const num =10;

const sumRange = (num) => {
  if(num === 1){
    return num;
  }
  return num + sumRange(num -1);
};

console.log(`Sum of numbers from 1 to ${num} `,sumRange(num));