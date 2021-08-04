const arr = [
  {
    id: 1,
    values: [1, 2, 3],
  },
  {
    id: 2,
    values: [4, 5, 6],
  },
  {
    id: 3,
    values: [7, 8, 9],
  },
];
const output = [
  [1, 1], //0 0
  [2, 4], //1 0
  [3, 7], //2 0
  [1, 2],
  [2, 5],
  [3, 8],
];
let resultArr = [];
let subArrLength = 3;

for (let j = 0; j < subArrLength; j++) {
  for (let i = 0; i < arr.length; i++) {
    console.log([arr[i].id, arr[i].values[j]]);
  }
}
