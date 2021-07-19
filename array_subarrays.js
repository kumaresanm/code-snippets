const arr = [1,5,9];
// const subArr = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     subArr.push(arr.slice(i, j + 1));
//   }
// }

// console.log(subArr);

// console.log(
//   subArr.reduce((max, val) => {
//     let sum = val.reduce((a, b) => a + b, 0);
//     return sum % 7 > max ? sum % 7 : max;
//   }, 0)
// );

let prefix = 0;
let maxSum = 0;
let valSet = new Set();
valSet.add(0);
for (let i = 0; i < arr.length; i++) {
  prefix = (prefix + arr[i]) % 5;
  maxSum = Math.max(maxSum, prefix);
  let it = 0;
  for (val in valSet) {
    if (val >= prefix + 1) {
      it = val;
    }
  }
  if (it !== 0) {
    maxSum = Math.max(maxSum, prefix - it + m);
  }
  valSet.add(prefix);
}
// console.log(maxSum);

function computeMax(a, m) {
    var sums = [[-1, 0]];
    var maxSum = 0;
    for (var i=0; i<a.length; i++) {
        sums.push([i, (sums[i][1] + a[i]) % m]);
        maxSum = Math.max(sums[sums.length-1][1], maxSum);
    }
    sums.sort(function(a,b){return a[1]-b[1];});
    console.log(sums);
    for (var i=1; i<sums.length; i++) {
        var origIndex = sums[i][0],
            curSum = sums[i][1];
        var j = i+1;
        while (j<sums.length && (sums[j][0] >= origIndex || sums[j][1] == curSum)) {
            j++;
        }
        if (j<sums.length) {
            maxSum = Math.max(curSum - sums[j][1] + m, maxSum);
        }
    }
    return maxSum;
}

console.log(computeMax(arr, 5));