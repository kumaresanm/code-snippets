function isPrime(num) {
    if (num === 1) {
        return "NO prime no composite";
    }
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        return "Prime";
    }
    return "Not prime";
}

console.log(isPrime(1));