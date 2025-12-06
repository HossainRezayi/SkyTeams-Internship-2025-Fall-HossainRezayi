/*
18. Implement a Stack (Array-Based) 
Operations: push, pop, peek, isEmpty.
*/
let array = ["first"];

function implementStack(operation, element = "") {
  operation = operation.toLowerCase();
  let result = "";

  switch (operation) {
    case "push":
      array.push(element);
      result = `${element} pushed successfully.`;
      break;
    case "pop":
      result = `last element was deleted successfully`;
      array.pop(array.length - 1);
      break;
    case "peek":
      result = `${array[array.length - 1]}`;
      break;
    case "isempty":
      result = array.length === 0 ? true : false;
  }
  return result;
}

module.exports = implementStack;
