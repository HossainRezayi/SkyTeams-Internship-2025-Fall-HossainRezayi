// 2. Test a function that reverses a string/list.

function reverseString(str) {
  if (str === "" || typeof str !== "string") return null;

  let reversed = "";
  for (let index = 0; index < str.length; index++) {
    reverse += str[str.length - index - 1];
  }
  return reversed;
}

module.exports = reverseString;
