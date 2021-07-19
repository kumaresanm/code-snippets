// Memoization is an optimization technique that speeds up applications
//  by storing the results of expensive function calls and returning the
//  cached result when the same inputs occur again.

const { performance } = require("perf_hooks");

// If this doesn’t make much sense to you yet, that’s okay.
// This article provides an in-depth explanation of why memoization
//  is necessary, what it is, how it can be implemented and when it should be used.

function fib(num) {
  t0 = performance.now();
  if (num < 2) return 1;
  return fib(num - 1) + fib(num - 2);
}
// console.log(fib(5));

// console.log("Call to doSomething took " + (performance.now() - t0) + " milliseconds.")

function memoFib(num, cache) {
  t1 = performance.now();
  cache = cache || {};
  if (num < 2) {
    cache[num] = 1;
  }
  if (cache[num]) return cache[num];
  return (cache[num] = memoFib(num - 1, cache) + memoFib(num - 2, cache));
}
// console.log(memoFib(5));

// console.log("Call to doSomething took " + (performance.now() - t1) + " milliseconds.")

function memoizer(fun) {
  let cache = {};
  return function (n) {
    if (cache[n]) return cache[n];
    return (cache[n] = fun(n));
  };
}

add = (a, b) => a + b;

let cache = {};
let hashmp = {};

function mul(a, b) {
  const key = JSON.stringify(arguments);
  if (hashmp[key]) {
    return hashmp[key];
  } else {
    return (hashmp[key] = a * b);
  }
}
// console.log(mul(3, 4));
function memoize(fn) {
  return (...args) => {
    const key = JSON.stringify(...args);
    if (cache[key]) {
      console.log("from cache");
      return cache[key];
    }
    return (cache[key] = fn(...args));
  };
}
console.log(memoize(add)(3, 4));
console.log(memoize(add)(3, 4));
console.log(memoize(add)(3, 4));

