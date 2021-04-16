// get fibonacci sequence of a number
function getFibo(num) {
    if (num < 2) {
        return num;
    }
    return getFibo(num - 1) + getFibo(num - 2);
}
for (var i = 0; i < 8; i++) {
    console.log(getFibo(i));
}