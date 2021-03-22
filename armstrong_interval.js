// program to find Armstrong number between intervals
function printArmstrongNumbers(low, high) {
    let i = low;
    while (i < high) {
        let noDigits = i.toString().length;
        let temp = i;
        let sum = 0;
        while (temp > 0) {
            reminder = temp % 10;
            sum += reminder ** noDigits;
            temp = parseInt(temp / 10);
        }
        if (sum === i) {
            console.log(i);
        }
        i++;
    }

}
console.log(printArmstrongNumbers(100, 500));