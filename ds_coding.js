var arr = [
    -5, -4, -2, 12, -40,
     4,  2, 18, 11,   5
  ];

  console.log(arr);
//   var sortedArr = arr.sort((a,b) => Math.abs(a) - Math.abs(b));
//   console.log(sortedArr);

var arr1 = arr.slice(0, 2);
arr1.push(999);
console.log(arr1);
console.log(arr);