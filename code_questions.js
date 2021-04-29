// iife
(function() {
    var a = b = 5;
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
 
 test(); // undefined 2

 // hosisting
 function test() {
    var a;
    function foo() {
       return 2;
    }
 
    // console.log(a); // undefined
    // console.log(foo()); // 2
    
    a = 1;
 }
 
 test();

// context
 var fullname = 'John Doe';
 var obj = {
    fullname: 'Colin Ihrig',
    prop: {
       fullname: 'Aurelio De Rosa',
       getFullname: function() {
          return this.fullname;
       }
    }
 };
 
//  console.log(obj.prop.getFullname()); // Aurelio
 
 var test = obj.prop.getFullname;
 
//  console.log(test.call(obj.prop));  // John


function greet (person) {
    if (person.name === 'amy' ) {
      return 'hey amy'
    } else {
      return 'hey arnold'
    }
  }
//   console.log(greet({ name: 'amy' }));

for (let i = 0; i < 4; i++) {
    // setTimeout(() => console.log(i), 0);
  }

  let dog = {
    name: 'doggo',
    sayName () {
    //   console.log(this.name)
    }
  }
  let sayName = dog.sayName()
// console.log(sayName);

function Dog (name) {
    this.name = name
  }
  Dog.bark = function () {
    console.log(this.name + ' says woof')
  }
  let fido = new Dog('fido')
//   Dog.bark()

  function isBig (thing) {
    if (thing == 0 || thing == 1 || thing == 2) {
      return false
    }
    return true
  }

  isBig(1)    // false
  isBig([2])  // false
  isBig([3])  // true

  // isPrime
  function isPrime(num){
    isPrime = true;
    if(num === 1){
      return "niether prime nor composite"
    }

    for(let i = 2; i < num; i++){
      if(num % i === 0){
        isPrime = false;
        break;
      }
    }
    return isPrime;
  }

  // console.log(isPrime(4));

  // factorial
  function fact(num){
    fact = 1;
    for(i = num; i > 1; i--){
      fact *= i;
    }
    return fact;
  }

  //recursion factorial
  function recFact(num){
    if(num <= 1) return num;
    return num * recFact(num -1);
  }

  // console.log(fact(5));
  // console.log(recFact(5));

  // nth fibonacci number
  function fib(num){
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= num; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
  }

  function recFib(n) {
    if(n <= 2) {
        return 1;
    } else {
        return recFib(n - 1) + recFib(n - 2);
    }
};

  // console.log(fib(6));
  // console.log(recFib(6));

  // check if array is sorted
  function isSorted(arr){
    for(i = 0; i < arr.length; i++) {
      if(arr[i] < arr[i + 1]){
        return true;
      } else {
        return false;
      }
    }
  }

  // console.log(isSorted([-3,1,2,3]));

  // filter function
  function filterFunc(arr, num){
    filterArr = [];
    for(i = 0; i < arr.length; i++){
      if(arr[i] > num) filterArr.push(arr[i]);
    }
    return filterArr;
  }

//  console.log(filterFunc([2,4,5,6,1,4,8,7], 5));

//memoization