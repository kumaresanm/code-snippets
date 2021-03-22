var str = "ab";
function isPalndrome(str) {
    var strRev = str.split("").reverse().join("");
    if (strRev !== str) {
        return false;
    }
    return true;
}
console.log(isPalndrome(str));