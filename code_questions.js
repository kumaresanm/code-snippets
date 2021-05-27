// iife
(function () {
  var a = (b = 5);
})();

//  console.log(a);
//  console.log(b);

// prototype
String.prototype.repeatify = function (num) {
  finalStr = "";
  while (num > 0) {
    num--;
    finalStr += this;
  }
  return finalStr;
};
// console.log("hello".repeatify(3));

// hoisting
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
// undefined
// 2

// hosisting
function test() {
  var a;
  function foo() {
    return 2;
  }

  console.log(a);
  console.log(foo());

  a = 1;
}

test();
// undefined
// 2

// context
var fullname = "John Doe";
var obj = {
  fullname: "Colin Ihrig",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

//  console.log(obj.prop.getFullname());
// Aurelio

var test = obj.prop.getFullname;

//  console.log(test.call(obj.prop));
// John Doe

function greet(person) {
  if (person.name === "amy") {
    return "hey amy";
  } else {
    return "hey arnold";
  }
}
//   console.log(greet({ name: 'amy' }));

for (let i = 0; i < 4; i++) {
  // setTimeout(() => console.log(i), 0);
}

let dog = {
  name: "doggo",
  sayName() {
    //   console.log(this.name)
  },
};
let sayName = dog.sayName();
// console.log(sayName);

function Dog(name) {
  this.name = name;
}
Dog.bark = function () {
  console.log(this.name + " says woof");
};
let fido = new Dog("fido");
//   Dog.bark()

function isBig(thing) {
  if (thing == 0 || thing == 1 || thing == 2) {
    return false;
  }
  return true;
}

isBig(1); // false
isBig([2]); // false
isBig([3]); // true

// isPrime
function isPrime(num) {
  isPrime = true;
  if (num === 1) {
    return "niether prime nor composite";
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

// console.log(isPrime(4));

// factorial
function fact(num) {
  fact = 1;
  for (i = num; i > 1; i--) {
    fact *= i;
  }
  return fact;
}

//recursion factorial
function recFact(num) {
  if (num <= 1) return num;
  return num * recFact(num - 1);
}

// console.log(fact(5));
// console.log(recFact(5));

// nth fibonacci number
function fib(num) {
  var a = 0,
    b = 1,
    f = 1;
  for (var i = 2; i <= num; i++) {
    f = a + b;
    a = b;
    b = f;
  }
  return f;
}

function recFib(n) {
  if (n <= 2) {
    return 1;
  } else {
    return recFib(n - 1) + recFib(n - 2);
  }
}

// console.log(fib(6));
// console.log(recFib(6));

// check if array is sorted
function isSorted(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      return true;
    } else {
      return false;
    }
  }
}

// console.log(isSorted([-3,1,2,3]));

// filter function
function filterFunc(arr, num) {
  filterArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > num) filterArr.push(arr[i]);
  }
  return filterArr;
}

//  console.log(filterFunc([2,4,5,6,1,4,8,7], 5));

// shallow copy
const user = {
  name: "Shoaib",
  info: {
    father: "Ali",
    age: 26,
    email: "shoaib.mehedi@gmail.com",
  },
};

const copy = { ...user };
copy.info.father = "MD";

console.log("original: ", user.info);
 // father: "MD"
console.log("copy:", copy.info);
 // father: "MD"

// output the value will changed in both since it is shallow copy using spread/assign operator.

//javascript hoisting
var name = "shoaib";
var age = 26;

var info = function () {
  console.log(name);
  console.log(age);
  var name = 20;
};

info();

//output
// undefined
// 26

// value assignment
function assign() {
  var numOne = (numTwo = 10);
}

assign();

console.log("numTwo", typeof numTwo === "undefined"); //false
console.log("numOne", typeof numOne === "undefined"); // true

// this operator
var obj = {
  name: "shoaib",
  func: function () {
    var self = this;
    console.log("outer function:  this.name = " + this.name); 
    console.log("outer function:  self.name = " + self.name); 
    (function () {
      console.log("inner function:  this.name = " + this.name);
      console.log("inner function:  self.name = " + self.name);
    })();
  },
};
obj.func();

//shoiab
//shoiab
//undefined
//shoiab

// javascript return
function funcOne() {
  return {
    name: "shoaib",
  };
}

function funcTwo() {
  return;
  {
    name: "shoaib";
  }
}
console.log(funcOne()); // {name: shoiab}
console.log(funcTwo()); // undefined

// number epsilon
console.log(0.1 + 0.2); // 0.3
console.log(0.1 + 0.2 == 0.3); // false

//timeouts and intervals
(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
})();
// 1 4 3 2

// array reverse
var arrayOne = "shoaib".split("");
var arrayTwo = arrayOne.reverse();
var arrayThree = "mehedi".split("");
arrayTwo.push(arrayThree);
console.log(
  "arrayOne length=" + arrayOne.length + " value=" + arrayOne.slice(-1)
);
console.log(
  "arrayTwo length=" + arrayTwo.length + " value=" + arrayTwo.slice(-1)
);

// arr2 = [2,3,4,5]

function list() {  
  console.log(arguments);
  return [].slice.call(arguments);
}
var leadingThirtysevenList = list.bind(null, 37);
var list2 = leadingThirtysevenList();
console.log(list2);

function foo() {
  console.log(i);
  let i = 42;
}
foo(); 
//output is uncaught exception, because let variables cannot be used before initialization
class MegaArray extends Array{
  constructor(contents){
    this.contents = contents;
  }
}
let mArr = new MegaArray(1, 2, 3);
//output is uncaught reference error because super constructor must be used in derieved class before using this keyword

let buffer = new ArrayBuffer(16);
let int32View = new Int32Array(buffer);
for (let i = 0; i < int32View.length; i++) {
  console.log(int32View[i] = i * 2);
}

function foo() {
  'use strict';
  (function () {
    var point = {x: 42, y: 27};
    with (point) {
      console.log('The coordinates are: x: ', x, 'y: ', y);
    }
  })();
}
foo();
// output Uncaught SyntaxError: Strict mode code may not include a with statement

this.greeting = "Hello, Universe!"
let person = {
  greeting: "Hello, World!",
  greetUser: () => {
    console.log(this.greeting);
  }
}
person.greetUser();
// output  Hello, Universe!

let config = {
  data: { "number": 99 },
  getConfig: function() { return this.data; }
};
let getConfig = config.getConfig;
getConfig();
// output undefined
//if bind getConfig.call(config) output {number: 99}

function User() {
  this[Symbol('id')] = 42;
  this.favoriteColors = [ 'red', 'blue' ];
}
User.prototype = {
  home: 'The Movie'
};
let u = new User();
u.username = 'User1';
"User1"
for(val in u){
 console.log(val)
}
// symbol properties are not enumerable
// output favoriteColors
// output username
// output home

// var sampleObj = {
//   firstName: 'John',
//   lastName: 'Doe',
//   address: {
//       street: 'North 1st street',
//       city: 'San Jose',
//       state: 'CA',
//       country: 'USA'
//   },
//   blank: {

//   },
//   hello: function(){

//   }
// }
// for(val in sampleObj){
//   console.log(val);
// }

function rectangle(a,b){
  this.a = a;
  this.b = b;
  this.area = function(){
    return this.a * this.b;
  }
}

rect1 = new rectangle(10,20);
console.log(rect1.area());