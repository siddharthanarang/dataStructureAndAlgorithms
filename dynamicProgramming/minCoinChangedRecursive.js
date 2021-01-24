const coins = [2,3,5];
const change = 7;

const minCoinChange = (coins, change) => {
  
  let min = Infinity;
  
  let helperFunction = (coins, change, currentCoins) =>{
    
    if(change === 0){
      min = Math.min(min, currentCoins);
      return 1; 
    }
    if(change < 0 || !coins.length){
      return -1;
    }
    
    helperFunction(coins, change-coins[0], currentCoins + 1);
    helperFunction(JSON.parse(JSON.stringify(coins.slice(1))), change, currentCoins);
    
  };
  helperFunction(coins, change, 0);
  return min;
  
};

console.log(`Minimum no of coins required `, minCoinChange(coins, change));