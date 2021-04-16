var arr = [
    {x: "foo", y: 8},
    {x: "bar", y: 3},
    {x: "baz", y: 7},
];
const foo = arr.reduce((a,b) => ({
    ...a,
    [b.x]: [b.y]
}), {});


var numArr = [12,34,55,6,7,7,888];
const sum = numArr.reduce((sum, val) => {
    return sum += val;
}, 0);
// console.log(foo);
// console.log(sum);

const array1 = [{name: "sad"}, {name: "asd"}, {name: "ada"}];

// const array2 = new Array(array1.length).fill({});
// array2.forEach((obj, idx) => {
//     obj.name = array1[idx].name;
//     obj.position = idx;
// });

// const array3 = array1.map((obj, idx) => ({
//     ...obj,
//     position: idx
// }));
// console.log(array2);
// console.log(array3);

array4 = array1.slice();
array4.forEach((obj, idx) => {
    obj.position = idx;
});

console.log(array1);
console.log(array4);

// arr2 = [{name: "sad"}, {name: "asd"}, {name: "ada"}];

// arr3 = arr2.slice();
// arr3.forEach((obj, id) => {
//     obj.position = id;
// });
// console.log(arr2);
// console.log(arr3);

a = [{1:1},{1:1},{1:1}];
b = a.slice();
b.push({1:4});
console.log(a);
console.log(b);