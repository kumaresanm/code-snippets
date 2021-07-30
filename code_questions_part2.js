var x = 21;
var printMe = function () {
  console.log(x);
  var x = 20;
};

printMe();
// output undefined

var a;
function parent() {
  var a = 6;
  function child() {
    let a = 5;
    console.log(a);
  }
  child();
  console.log(a);
}
parent();
//output
// 5
// 6

var arrayList = ["Star wars", "Disney", "Avengers"];
var anotherArrayList = arrayList;
arrayList.length = 0;
console.log(anotherArrayList);
console.log(arrayList);

// output
// []
// []

var fruit = { name: "apple" };
var fruitbear = { name: "apple" };

console.log(fruit == fruitbear); // false
console.log(fruit === fruitbear); // false

const obj = {
  a: 1,
  b: 2,
  getA: () => {
    console.log(this.a);
  },
  getB() {
    console.log(this.b);
  },
};

obj.getA(); //undefined
obj.getB(); // 2

const myPromise = () => Promise.resolve("I have resolved!");

function firstFunction() {
  myPromise().then((res) => console.log(res));
  console.log("second");
}

async function secondFunction() {
  setTimeout(() => {
    console.log("timeout");
  });
  console.log(await myPromise());
  console.log("second");
}

firstFunction();
secondFunction();
// second
// I have resolved!
// I have resolved!
// second
// timeout

var once = function (callback) {
  return callback();
};

function bootstrapApp() {
  console.log("this should be shown once");
  return 22;
}

var initialize = once(bootstrapApp);
console.log(initialize);

// get all substrings of a string
function getSubStrs(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      arr.push(str.slice(i, j));
    }
  }
  console.log(arr);
}

getSubStrs("aaabba");

//bubble sort
function bubbleSort(arr) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  console.log(arr);
}
bubbleSort([2,-1,4,3,9,5])

