let str = "aabbccddeefghi";

function isValid(str) {
  let strMap = {};
  for (const val of str) {
    strMap[val] ? strMap[val]++ : (strMap[val] = 1);
  }
  const strArr = Object.values(strMap).sort();
  const first = strArr[0];
  const second = strArr[1];
  const secondLast = strArr[strArr.length - 2];
  const last = strArr[strArr.length - 1];
  if (first === last) {
    return "YES";
  } else if (first === 1 && second === last) {
    return "YES";
  } else if (
    first === second &&
    second === secondLast &&
    secondLast === last - 1
  ) {
    return "YES";
  }
  return "NO";
}

console.log(isValid(str));
