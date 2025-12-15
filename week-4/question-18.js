/*
18. Implement a Stack (Array-Based) 
Operations: push, pop, peek, isEmpty.
*/

let array = [];
let count = 0;

function implementStack(operation, element = "") {
  operation = operation.toLowerCase();
  let result = "";

  switch (operation) {
    case "push":
      array[count] = element;
      count++;
      result = `${element} pushed successfully.`;
      break;
    case "pop":
      if (array.length === 0) {
        result = undefined;
        break;
      }
      result = `last element was deleted successfully`;
      count--;
      array.length = count;
      break;
    case "peek":
      result = `${array[count - 1]}`;
      break;
    case "isempty":
      result = array.length === 0 ? true : false;
  }
  return result;
}

module.exports = implementStack;
