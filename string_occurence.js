// program to check the occurrence of a character

function countString(str, letter) {
  // creating regex
  const re = new RegExp(letter, "g");
  console.log(re);
  // matching the pattern
  const count = str.match(re).length;

  return count;
}

// take input from the user
const string1 = "Enter a string: ";
const letterToCheck = "t";

//passing parameters and calling the function
const result = countString(string1, letterToCheck);

// displaying the result
console.log(result);
console.log(string1);
console.log(string1.replace(letterToCheck, ""));
console.log(
  (string1.length - string1.replace(new RegExp(letterToCheck, "g"), "").length) /
    letterToCheck.length
);
