let obj1 = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    blank: {

    },
    hello: function(){

    }
}

var newObj = [];
function flattenobj(obj){
    Object.keys(obj).forEach(val => {
        if(typeof obj[val] == 'object'){
            flattenobj(obj[val]);
        } else if(typeof obj[val] !== 'function'){
            newObj[val] = obj[val];
        }
    })
    return Object.values(newObj).join(", ");
}

console.log(flattenobj(obj1));
