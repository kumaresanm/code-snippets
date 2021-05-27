function permutations(str) {
  let res = [];
  if (!str) return "Pls enter str";
  if (str.length < 2) return str;
  for (let i = 0; i < str.length; i++) {
    const currChr = str[i];
    const remainChars = str.slice(0, i) + str.slice(i + 1);
    for (let j = 0; j < remainChars.length; j++) {
      res.push(currChr + permutations(remainChars)[j]);
    }
  }
  return res;
}
console.log(permutations("dssadsad"));
//a
