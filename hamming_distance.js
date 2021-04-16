// The hamming distance between two strings of equal 
// length is the number of positions at which these
// strings vary. In more technical terms, 
// it is a measure of the minimum number of changes 
// required to turn one string into another.

function checkHamming(str1, str2) {
    let count = 0;
    str1arr = str1.split("").sort();
    str2arr = str2.split("").sort();
    for (i = 0; i < str1arr.length; i++) {

        if (str1arr[i] !== str2arr[i]) {
            count++;
        }
    }
    return count;
}
console.log(checkHamming("rover", "river"));