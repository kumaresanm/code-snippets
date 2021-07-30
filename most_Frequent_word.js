const arr = ["geeks", "for", "geeks"];
function mostFrequentWord(arr, n = 3) {
  let maxVal = 0;
  let maxStr = "";
  hashMap = arr.reduce((acc, val) => {
    acc[val] ? acc[val]++ : (acc[val] = 1);
    return acc;
  }, {});
  for (key in hashMap) {
    if (hashMap[key] > maxVal) {
      maxVal = hashMap[key];
      maxStr = key;
    } else if (hashMap[key] === maxVal) {
      maxStr = key;
    }
  }
  return maxStr;
}
console.log(mostFrequentWord(arr));
