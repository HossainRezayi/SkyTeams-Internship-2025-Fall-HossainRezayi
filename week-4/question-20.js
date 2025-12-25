/*
20. Check Balanced Parentheses  
Input: "{[()]}" → Output: Balanced 
*/

function balancedParentheses(str) {
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of str) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0) return "Not Balanced";

      const top = stack.pop();
      if (top !== pairs[char]) return "Not Balanced";
    }
  }

  return stack.length === 0 ? "Balanced" : "Not Balanced";
}

module.exports = balancedParentheses;
