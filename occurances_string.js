// cqalcualte number of occurance of charcter in string
function occurance(str) {
    return [...str].reduce((acc, val) => {
        acc[val] = acc[val] ? acc[val] + 1 : 1;
        return acc;
    }, {});
}
console.log(occurance("How are you?"));

function occuranceway2(str) {
    let charObj = {};
    [...str].forEach(val => {
        if (charObj[val]) {
            charObj[val] += 1;
        } else {
            charObj[val] = 1;
        }
    });
    return charObj;
}

console.log(occuranceway2("How are you?"));

