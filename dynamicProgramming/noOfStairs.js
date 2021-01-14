 // EXAMPLE:
 //  Write a function called stairs which accepts n number of stairs. Imagine that a person is standing at the 
 // bottom of the stairs and wants to reach the top and the person can climb either 1 stair or 2 stairs at a time. \
 // Your function should return the number of ways the person can reach the top by only climbing 1 or 2 stairs at a time.

 // stairs(n) = stairs(n - 1) + stairs(n - 2);


 const stairs = (n)=>{
   let memory = [1,2], res;
   for(let i=3; i<=n; i++){
     res = memory[0] + memory[1];
     memory[0] = memory[1];
     memory[1] = res;
   }
   return memory[1];
 };
 
 console.log(`No of stairs required to climb `, stairs(4));