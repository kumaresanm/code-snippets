// Reverse each word in the sentence
// eg: Welcome to this Javascript Guide!
// result: emocleW ot siht tpircsavaJ !ediuG

var str = "Welcome to this Javascript Guide!";
console.log(str.split("").reverse().join("").split(" ").reverse().join(" "));
