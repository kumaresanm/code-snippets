arr1 = [1, 3, 4, 5, 8, 10, 11];
arr2 = [2, 3, 6, 7, 19, 20];

const arr3 = new Set([...arr1, ...arr2].sort((a, b) => a - b));
console.log(arr3);

Array.prototype.union = function (a) {
  var r = this.slice(0);
  a.forEach(function (i) {
    if (r.indexOf(i) < 0) r.push(i);
  });
  return r;
};

Array.prototype.diff = function (a) {
  return this.filter(function (i) {
    return a.indexOf(i) < 0;
  });
};

var s1 = [1, 2, 3, 4];
var s2 = [3, 4, 5, 6];

console.log("s1: " + s1);
console.log("s2: " + s2);
console.log("s1.union(s2): " + arr1.union(arr2));
console.log("s2.union(s1): " + s2.union(s1));
console.log("s1.diff(s2): " + s1.diff(s2));
console.log("s2.diff(s1): " + s2.diff(s1));


