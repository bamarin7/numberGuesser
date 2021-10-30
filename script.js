let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  let random = Math.floor(Math.random()*10);
  return random
};

const compareGuesses = (humanGuess, computerGuess, targetNum) => {
  const humanDifference = Math.abs(targetNum - humanGuess);
  const computerDifference = Math.abs(targetNum - computerGuess);
  return humanDifference <= computerDifference
};

const updateScore = winner => {
if (winner === 'human') {
  return humanScore++; 
} else if (winner === 'computer') {
  return computerScore++;
}
console.log(humanScore);
console.log(computerScore);
};

const advanceRound = () => currentRoundNumber++; 


