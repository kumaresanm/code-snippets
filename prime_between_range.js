// primeDiff = (range) => {
//     let lowerNumber = parseInt(range.split(" ")[0]);
//     let higherNumber = parseInt(range.split(" ")[1]);
//     if (lowerNumber === higherNumber) return 0;
//     if (lowerNumber > higherNumber) return -1;
//     maxDiff = primeBetweenRange(lowerNumber, higherNumber);
//     return maxDiff;
// }

function primeBetweenRange(lowerNumber, higherNumber) {
    let res = [];
    let smallPrime = 0;
    let largePrime = 0;
    if (getLowestPrime(lowerNumber, higherNumber) && getHighestNumber(lowerNumber, higherNumber)) {
        smallPrime = getLowestPrime(lowerNumber, higherNumber);
        largePrime = getHighestNumber(lowerNumber, higherNumber);
        return largePrime - smallPrime;
    }
    return -1;
}

function getLowestPrime(lowerNumber, higherNumber) {
    for (let i = lowerNumber; i <= higherNumber; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            return i;
        }
    }
}

function getHighestNumber(lowerNumber, higherNumber) {
    for (let i = higherNumber; i >= lowerNumber; i--) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            return i;
        }
    }
}
console.log(primeBetweenRange(3,3));
