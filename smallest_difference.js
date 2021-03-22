arr1 = [-1, 5, 10, 20, 28, 3];
arr2 = [26, 134, 135, 15, 17];

function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
    let idx = 0;// for 1st array
    let idy = 0;// for 2nd array
    let small = Infinity;
    let smallestPair = [];
    while (idx < arrayOne.length && idy < arrayTwo.length) {
        let firstNum = arrayOne[idx];
        let secondNum = arrayTwo[idy];
        if (firstNum < secondNum) {
            currDiff = arrayTwo[idy] - arrayOne[idx];
            idx++;
        } else if (firstNum > secondNum) {
            currDiff = arrayOne[idx] - arrayTwo[idy];
            idy++
        } else {
            return [arrayOne[idx], arrayTwo[idy]];
        }
        if(small > currDiff){
            small = currDiff;
            smallestPair = [firstNum, secondNum];
        }
    }
    return smallestPair;
}

console.log(smallestDifference(arr1, arr2));
