// https://flaviocopes.com/how-to-clone-javascript-object/

// deep copy vs shallow copy
let obj1 = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}

copiedBySpread = {...obj1}; // shallow copy
copiedByObjAssign = Object.assign({},obj1); // shallow copy
copiedDeepCopy = JSON.parse(JSON.stringify(obj1)); // deep copy
copied = obj1;
obj1.firstName = 'Kumar';
copiedDeepCopy.address.street = 'Lake road';
console.log("shallow copy by spread",copiedBySpread);
console.log("shallow copy by assign",copiedByObjAssign);
console.log("deep copy by json.parse", copiedDeepCopy);
console.log("shallow copy by direct assignment", copied);
console.log(obj1);