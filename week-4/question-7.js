/*
7. Rock, Paper, Scissors Game 
Description: Simulate a game using random computer choices. 
*/

function game() {
  let random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) return "rock";
  else if (random === 2) return "paper";
  else if (random === 3) return "scissors";
}

module.exports = game;
