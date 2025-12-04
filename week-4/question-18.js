/*
18. Implement a Stack (Array-Based) 
Operations: push, pop, peek, isEmpty.
*/

function implementStack(operation, element = "") {
  operation = operation.toLowerCase();
  let array = ["first"];
  let result = "";
  let index = array.length - 1;

  switch (operation) {
    case "push":
      array.push(element);
      result = `${element} pushed successfully.`;
      break;
    case "pop":
      result = `last element was deleted successfully`;
      array.slice(index);
      break;
    case "peek":
      array[index];
      result = `${array[index]}`;
      break;
    case "isempty":
      result = array.length === 0 ? true : false;
  }
  return result;
}

module.exports = implementStack;
