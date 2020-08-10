// Write a function called collectStrings which accepts an object and returns an array of all the values in the
// object that have a typeof string


// const obj = {
//   stuff: "foo",
//   data: {
//     val: {
//       thing: {
//         info: "bar",
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: "baz"
//           }
//         }
//       }
//     }
//   }
// }
//
// collectStrings(obj) // ["foo", "bar", "baz"])

const sampleObject = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};

const collectStrings = (sampleObject) => {

  if(Object.keys(sampleObject).length === 0){
    return [];
  }
  let result = [];
  for(const key in sampleObject){
    if(Object.prototype.toString.call(sampleObject[key]) === '[object Object]'){
      result =result.concat(collectStrings(sampleObject[key]));
    }
    else if(typeof sampleObject[key] === 'string'){
      result.push(sampleObject[key]);
    }
  }
  return result;
};

console.log(`collectStrings of ${sampleObject} is `,collectStrings(sampleObject));