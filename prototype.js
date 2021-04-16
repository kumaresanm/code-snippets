// https://javascript.info/prototype-inheritance
var person = { fname: "John", lname: "Doe", age: 25 };
var x;
var employee = {};
Object.defineProperty(employee, 'department', {
    value: "Software Development",
    enumerable: true,
    writable: true
});
person.__proto__ = employee;

// employee.__proto__ = person; // will give cyclic prototype error
for(var key in person){
    if(person.hasOwnProperty(key))
    console.log(key);
}

// object.keys and Object.values ignore inherited properties.
console.log(Object.keys(employee));
employee.department = "Finance";
console.log(employee);