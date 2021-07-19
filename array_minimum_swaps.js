const arr = [1, 3, 5, 2, 4, 6, 7];
function minimumSwaps(arr) {
  let temp = [...arr];
  temp.sort((a, b) => a - b);
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== temp[i]) {
      swaps++;
      swap(arr, i, arr.indexOf(temp[i]));
    }
  }
  return swaps;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(minimumSwaps(arr));
