let coins = [2,3,5];
let change = 11;

const coinChange = (coins, change) => {
  
  let memory = [], coinIncludedWays, coinNotIncludedWays, i, j;
  coins.unshift(0);
  for(i=0; i<coins.length; i++){
    for(j=0; j<=change; j++){
      if(j === 0){
        memory[i] = [];
        memory[i][j] = 1;
      }
      else if(i === 0){
        memory[i][j] = 0;
      }
      else{
        coinNotIncludedWays = memory[i-1][j];
        coinIncludedWays = j-coins[i] < 0 ? 0 : memory[i][j-coins[i]];
        memory[i][j] = coinNotIncludedWays + coinIncludedWays;
      }
    }
  }
  return memory[i-1][j-1];
  
};

console.log(`No of possible ways to form a coin change are `,coinChange(coins, change));