// Implement the isBalanced() function to take a string containing only curly {},
//  square [], and round () parentheses. The function should tell us if
//  all the parentheses in the string are balanced. This means that every opening
//  parenthesis will have a closing one. For example, {[]} is balanced, but {[}] is not.

const exp = "{[({})]}"; // {[}()]}
const stack = require("./stack");

function isBalanced(exp) {
  let myStack = new stack();
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === "{" || exp[i] === "(" || exp[i] === "[") {
      myStack.push(exp[i]);
    } else {
      if (myStack.isEmpty()) return false;
      switch (exp[i]) {
        case ")":
          check = myStack.pop();
          if (check == "{" || check == "[") return false;
          break;

        case "}":
          check = myStack.pop();
          if (check == "(" || check == "[") return false;
          break;

        case "]":
          check = myStack.pop();
          if (check == "(" || check == "{") return false;
          break;
      }
    }
  }
  if (myStack.isEmpty() === false) {
    return false;
  }
  console.log(myStack);
  return true;
}

console.log(isBalanced(exp));
