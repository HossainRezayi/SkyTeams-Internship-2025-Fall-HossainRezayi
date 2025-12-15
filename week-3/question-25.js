/*
25. Number Guessing Game 
Description: 
• The program randomly selects a number between 1 and 100. 
• The user must guess the number. 
• The program gives hints like “Too High” or “Too Low”. 
• Continue until the user guesses correctly. 
*/

function guessingNumber(number) {
  let random = Math.floor(Math.random() * 100);
  let result = "";

  for (let i = 0; i < number.length; i++) {
    if (random === number[i]) return "correct";
    if (random > number[i]) result = "to low";
    else if (random < number[i]) result = "to high";
  }

  return result;
}

module.exports = guessingNumber;
