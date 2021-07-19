// Sort a string according to the frequency of characters
// Input: str = “geeksforgeeks”
// Output: forggkksseeee

// https://www.geeksforgeeks.org/sort-a-string-according-to-the-frequency-of-characters/

const str = "banana";

function countChars(str) {
  let strArr = str.split("");
  let strMap = {};
  strArr.forEach((element) => {
    strMap[element] ? strMap[element]++ : (strMap[element] = 1);
  });
  sortedArr = Object.entries(strMap).sort((a, b) => b[1] - a[1]);

  console.log(sortedArr.map(pair => pair[0].repeat(pair[1])).join(""));
}

countChars(str);
