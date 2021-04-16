let a = [1, 2,3, 4, 5];

// console.log(a.slice(0,1));
// console.log(a);

let b = [{name: "a"},{name: "b"},{name: "c"}];
c = b.slice(0,1);
console.log(b);
console.log(c);
b[0].name = "e";
console.log(b);
console.log(c);