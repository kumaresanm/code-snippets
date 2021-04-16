var person = { fname: "John", lname: "Doe", age: 25 };
var employee = {department: "IT"};
person.__proto__ = employee;

// employee.__proto__ = person; // will give cyclic prototype error

// the for in loop iterates over enumerbale property of object and also 
// over inherited properties
for (x in person) {
    if(person.hasOwnProperty(x))
    console.log(x);
}

// for of only works with iterable objects
// in for of we can break or continue the statements
var employee = [1, 2, 3];
for (emp of employee) {
    console.log(emp);
}

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
    if (digit % 2 === 0) {
        continue;
    }
    console.log(digit);
}

for (let i = 0; i < digits.length; i++) {
    setTimeout(function () {
        console.log(`${"value" + i}`);
    }, 500);
}
