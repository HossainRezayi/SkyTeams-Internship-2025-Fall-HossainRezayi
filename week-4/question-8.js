/*
8. Menu-Based ATM System 
Description: Handle options for balance, withdraw, deposit, exit. 
Example: "100 withdrawn successfully" 
*/

function atmSystem(option, amount = 0) {
  option = option.toLowerCase();
  let accountBalance = 0;
  switch (option) {
    case "balance":
      result = `Your account balance is ${accountBalance}`;
      break;
    case "withdraw":
      result = `${
        amount > accountBalance
          ? "You do not have enough money."
          : `${amount} withdrawn successfully`
      }`;
      break;
    case "deposite":
      result = `${amount} deposite successfuly`;
      accountBalance += amount;
      break;
    case "exit":
      result = "You Exited successfuly";
  }
  return result;
}

module.exports = atmSystem;
