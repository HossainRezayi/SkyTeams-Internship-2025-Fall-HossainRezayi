/*
20. Check Balanced Parentheses  
Input: "{[()]}" → Output: Balanced 
*/

function balancedParentheses(str) {
  let i = 0;
  let strLength = str.length;
  let round = "()";
  let square = "[]";
  let curly = "{}";
  let result = false;

  while (i < str.length) {
    switch (str[i]) {
      case "(":
        result = str[i] + str[strLength - ++i] === round;
        break;
      case "[":
        result = str[i] + str[strLength - ++i] === square;
        break;
      case "{":
        result = str[i] + str[strLength - ++i] === curly;
        break;
      default:
        return result;
    }
  }
  return result;
}

module.exports = balancedParentheses;
