let obj1 = {
    name: "Kumar"
}

let obj2 = {
    name: "sachin",
    getInfo: function(x,y) { // (x,y) =>
        console.log(this);
        console.log(this.name, x, y)
    }
}
resolveObj1 = obj2.getInfo.bind(obj1,2,3);
resolveObj2 = obj2.getInfo.bind(obj2,2,3);
resolveObj1();
resolveObj2();
obj2.getInfo(2,3);

// define a function
const myFunction = () => {
    console.log(this); // window or global object
  };
  
  // call it
  myFunction();

  function myfunction1(){
      console.log(this); // window or global object
  }

//   myfunction1();

  function timer(){
      this.seconds = 0;
    //   setInterval(() => {
    //       setTimeout(() => {
    //           this.seconds++;
    //       }, 1000);
    //   }, 1000);
  }

  let People = function(person, age) {
    this.person = person;
    this.age = age;
    this.info = function() {
//     setInterval(function() {
// console.log(this);
//         setTimeout(() => {
//             // here this!=People
//            console.log(this.person + " is " + this.age + 
//                                               " years old");
//           }, 3000);
//     }, 100);
    }
} 
let person1 = new People('John', 21);

// logs : undefined is undefined years old after 3 seconds
person1.info();