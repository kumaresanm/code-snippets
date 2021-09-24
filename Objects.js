// let obj1 = {
//   a: "aaaa",
// };

// let obja = {
//   name: "kumar",
//   address: {
//     city: "mumbai"
//   }
// }
// let obj2 = new Object();
// let obj3 = Object.create({});
// let obj4 = Object.assign({ b: "bbb" }, obj1); // shallow copy
// let obj5 = { ...obj4 }; // shallow copy
// let obj6 = JSON.parse(JSON.stringify(obj5)); // deep copy
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);
// console.log(obj5);
// console.log(obj6);

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// // in objects if the keys are integer's then they are sorted, otherwise the sort order is same as the
// // creation order.

// var exObj = {
//   20: "sdfdsf",
//   1: "qq",
//   name: "ss",
//   41: "ccc",
//   19: "dd",
// };
// console.log(exObj);
// console.log("20" in exObj);
// console.log(20 in exObj);

// //sum object properties
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (prop in salaries) {
//   if (salaries[prop]) {
//     sum += salaries[prop];
//   }
// }
// console.log(sum);

// //Multiply numeric property values by 2
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(menu) {
//   for (key in menu) {
//     if (typeof menu[key] === "number") {
//       menu[key] = menu[key] * 2;
//     }
//   }
//   return menu;
// }
// console.log(multiplyNumeric(menu));

// // length of an  object
// console.log(Object.keys(menu).length);

// const person = {
//   isHuman: false,
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   },
// };

// const me = Object.create(person);
// console.log(me);
// console.log(me.__proto__);
// console.log(person);

let objA = {
  name: "kumar",
  address: {
    city: "mumbai",
  },
};

objB = Object.assign({}, objA);
console.log(objA);
console.log(objB);

objB.address.city = "pune";
objB.name = "roshni";
console.log(objA);
console.log(objB);

const myFirstPromise = new Promise((resolve, reject) => {
  const condition = true;
  // if (condition) {
  setTimeout(function () {
    resolve("Promise is resolved!"); // fulfilled
  }, 300);
  // } else {
  reject("Promise is rejected!");
  // }
});

myFirstPromise.then(
  (data) => {},
  (error) => {
    console.log(error);
  }
);
