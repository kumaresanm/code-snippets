function hourglassSum(arr) {
  // Write your code here
  let R = arr.length;
  let C = arr[0].length;
  if (R < 3 || C < 3) return -1;

  let maxSumArr = [];
  for (let i = 0; i < R - 2; i++) {
    for (let j = 0; j < C - 2; j++) {
      let sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        (arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]);
        maxSumArr.push(sum);
    }
  }
  return maxSumArr.sort((a,b) => b-a)[0];
}
var arr = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5],
];

console.log(hourglassSum(arr));