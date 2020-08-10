 // Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object
 // which may contain nested objects.

 const sampleObject = {
   a: 2,
   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
   c: {c: {c: 2}, cc: 'ball', ccc: 5},
   d: 1,
   e: {e: {e: 2}, ee: 'car'}
 };

 const nestedEvenSum = (sampleObject) => {

   const objectKeys = Object.keys(sampleObject);
   if(objectKeys.length === 0){
     return 0;
   }
   const firstKey = objectKeys[0];
   let sum =0;

   if(Object.prototype.toString.call(sampleObject[firstKey]) === '[object Object]'){
     sum = nestedEvenSum(sampleObject[objectKeys[0]]);
   }
   else if(typeof sampleObject[firstKey] === 'number' && sampleObject[firstKey]%2 === 0){
     sum = sampleObject[firstKey];
   }
   delete sampleObject[firstKey];
   return sum + nestedEvenSum(sampleObject);
 };
 console.log(`nestedEvenSum of ${JSON.stringify(sampleObject)} is `,nestedEvenSum(sampleObject));

