// Sort a string according to the frequency of characters
// Input: str = “geeksforgeeks”
// Output: forggkksseeee

// https://www.geeksforgeeks.org/sort-a-string-according-to-the-frequency-of-characters/

const str = "banana";

function countChars(str) {
  let strArr = str.split("");
  let strMap = {};
  strMap = [...str].reduce((acc, val) => {
    acc[val] = acc[val] ? acc[val] + 1 : 1;
    return acc;
  }, {});
  // strArr.forEach((element) => {
  //   strMap[element] ? strMap[element]++ : (strMap[element] = 1);
  // });
  sortedArr = Object.entries(strMap).sort((a, b) => b[1] - a[1]);

  console.log(sortedArr.map((pair) => pair[0].repeat(pair[1])).join(""));
}

countChars(str);


var num = 111;
var arr = num.toString().split('')
var cnt = num.toString().length;  // 3
console.log(arr);
let result = 0;
for(var i = cnt-1; i >= 0; i--) {
    let c = i;
    if(arr[c] == 0) {
        result++;
    }
    while(c) {
        result++;
        c = c - 1;
    }
}

console.log(result);