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

var fruit = {name: 'apple'};
var fruitbear = {name: 'apple'};

console.log(fruit == fruitbear); // false
console.log(fruit === fruitbear); // false

const obj = {
  a: 1,
  b: 2,
  getA: () => {
    console.log(this.a);
  },
  getB(){
    console.log(this.b);
  }
};

obj.getA(); //undefined
obj.getB(); // 2

const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
  myPromise().then(res => console.log(res));
  console.log('second');
}

async function secondFunction() {
  setTimeout(() => {
    console.log('timeout');
  });
  console.log(await myPromise());
  console.log('second');
}

firstFunction();
secondFunction();
// second
// I have resolved!
// I have resolved!
// second
// timeout


var once = function(callback) {
	return callback();
};

function bootstrapApp() {
  console.log('this should be shown once');
  return 22;
}

var initialize = once(bootstrapApp);
console.log(initialize());