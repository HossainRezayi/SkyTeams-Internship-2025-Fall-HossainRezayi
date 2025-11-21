// 2. Test a function that reverses a string/list.

function reverseString(str) {
  if (str === "") return "";
  if (typeof str !== "string") return null;

  let reverse = "";
  for (let index = 0; index < str.length; index++) {
    reverse += str[str.length - index - 1];
  }
  return reverse;
}

module.exports = reverseString;
