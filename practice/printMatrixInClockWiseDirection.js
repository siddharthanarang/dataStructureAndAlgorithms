// Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.
//
//   For example, given the following matrix:
//
//   [[1,  2,  3,  4,  5],
//     [6,  7,  8,  9,  10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20]]
//
// You should print out the following:

//   1
// 2
// 3
// 4
// 5
// 10
// 15
// 20
// 19
// 18
// 17
// 16
// 11
// 6
// 7
// 8
// 9
// 14
// 13
// 12

let sampleInput = [ [1,  2,  3,  4,  5],
                    [6,  7,  8,  9,  10],
                    [11, 12, 13, 14, 15],
                    [16, 17, 18, 19, 20]];
// Aproach 1
const printMatrixInSpiralOrder = (sampleInput) => {
  let newArray = Array.from({length:sampleInput.length}, x => Array.from({length:sampleInput[0].length}, x=>0));
  console.log('nenewArray is  ',newArray);
  let x=0, y=0, direction =0;
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let currentx=x, currenty=y;
  console.log(sampleInput[x][y]);
  newArray[x][y] = 1;
  for(let i=0; i<sampleInput.length * sampleInput[0].length-1; i++){
    currentx = currentx + dx[direction];
    currenty = currenty + dy[direction];
    if(newArray[currentx] === undefined || newArray[currentx][currenty] === undefined || newArray[currentx][currenty]){
      direction = (direction+1)%4;
      currentx = x + dx[direction];
      currenty = y + dy[direction];
    }
    x= currentx;
    y= currenty;

    console.log(sampleInput[x][y]);
    newArray[x][y] = 1;

  }
};



console.log(`Print Matrix In Spiral Order `,printMatrixInSpiralOrder(sampleInput));