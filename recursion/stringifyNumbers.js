//
// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
//

// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66
//     }
//   }
// }
//
// stringifyNumbers(obj)
//
//
// {
//   num: "1",
//     test: [],
//   data: {
//   val: "4",
//     info: {
//     isRight: true,
//       random: "66"
//   }
// }
// }

const sampleObject = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

const stringifyNumber = (sampleObject) => {

  const objectKeys = Object.keys(sampleObject);
  if(objectKeys.length === 0){
    return {};
  }
  let result = {};
  for(const key in sampleObject){
    if(Object.prototype.toString.call(sampleObject[key]) === '[object Object]'){
      result[key] = stringifyNumber(sampleObject[key]);
    }
    else if(typeof sampleObject[key] === 'number'){
      result[key]=sampleObject[key].toString();
    }
    else {
      result[key]=sampleObject[key];
    }
  }

  return result;
};

console.log(`stringifyNumber of ${JSON.stringify(sampleObject)} is `,stringifyNumber(sampleObject));

