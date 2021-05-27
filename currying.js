function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

function multiply(a, b, c) {
  return a * b * c;
}

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

let curried = curry(multiply);

// console.log(curried(1, 2,3,4));
console.log(curried(1)(2, 3));
// console.log(curried(1)(2)(3));
