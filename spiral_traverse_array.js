const array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

function spiralTraverse(array) {
  // Write your code here.
  finalArr = [];
  for(i = 0; i < array.length; i++){
      for(j = 0; j < array[i].length; j++){
          finalArr.push(array[i][j]);
      }
  }
  console.log(finalArr);
}
spiralTraverse(array);
