// var arr1 = ["car", 30, 10, 50, 40, 50, "bus"];
// var arr2 = [10, 30, 50, 40, 30, "bus", "car"];

// function matchArray(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   return arr1.map((val) => {
//     return arr1.filter((item) => item === val).length === 
//       arr2.filter((item) => item === val).length;
//   });
// }

// console.log(matchArray(arr1, arr2));


let str = "Kapil_Tuptewar_Engineer"

let res = str.split("_");
let result = '';
res.forEach(function(val) {
    let fL = val.charAt(0).toUpperCase();
    let rL = val.slice(1);
    var newVal = fL.concat(rL);
    result += newVal;
});
console.log(result);