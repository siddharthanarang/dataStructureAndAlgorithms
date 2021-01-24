const coins = [1,5,6,9];
const change = 10;

const minCoinChange = (coins, change) =>{
  
  let memory = [], i, j;
  coins.unshift(0);
  
  for(i=0;i<coins.length; i++){
    for(j=0; j<=change; j++){
      if(j === 0){
        memory[i] = [];
        memory[i][j] = 0;
      }
      else if(i === 0){
        memory[i][j] = Infinity;
      }
      else{
        if(j < coins[i]){
          memory[i][j] = memory[i-1][j];
        }else{
          memory[i][j] = Math.min(memory[i-1][j], 1+memory[i][j-coins[i]]);
        }
      }
    }
  }
  return memory[i-1][j-1]
};
console.log(`Min Coin Change `,minCoinChange(coins, change));
