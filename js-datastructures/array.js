function removeEven(arr) {
  // let resultArr = [];
  // for (const val of arr) {
  //   if (val % 2 === 0) {
  //     resultArr.push(val);
  //   }
  // }
  // return resultArr;
  return arr.filter(val => val%2 === 0);
}

const arr1 = new Array(10).fill("*");

console.log(arr1);

console.log(removeEven([1, 2, 3, 4, 5, 10, 6, 3]));
