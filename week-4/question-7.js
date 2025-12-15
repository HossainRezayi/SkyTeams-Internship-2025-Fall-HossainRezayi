/*
7. Rock, Paper, Scissors Game 
Description: Simulate a game using random computer choices. 
*/
function game(userChoice) {
  const choiceMap = {
    rock: 1,
    paper: 2,
    scissors: 3,
  };

  const userNumber = choiceMap[userChoice.toLowerCase()];
  if (!userNumber) return "Invalid choice! Choose rock, paper, or scissors.";

  const computerNumber = Math.floor(Math.random() * 3) + 1;

  const numberMap = {
    1: "rock",
    2: "paper",
    3: "scissors",
  };
  const computerChoice = numberMap[computerNumber];

  if (userNumber === computerNumber) {
    return `Draw! Both chose ${computerChoice}`;
  }

  if (
    (userNumber === 1 && computerNumber === 3) ||
    (userNumber === 2 && computerNumber === 1) ||
    (userNumber === 3 && computerNumber === 2)
  ) {
    return `You win! ${userChoice} beats ${computerChoice}`;
  }

  return `You lose! ${computerChoice} beats ${userChoice}`;
}

module.exports = game;
