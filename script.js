let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = (number) => {
number = Math.floor(Math.random() * 10);
return number;
}

const getAbsoluteDistance = (n1, n2) => {
return Math.abs(n1 - n2);
}

const compareGuesses = (humanGuess, computerGuess, target) => {
  if (humanGuess < 0 || humanGuess >= 10) {
    alert ('Please enter a valid number between 0-9') 
  }   
  const humanDifference = getAbsoluteDistance(target, humanGuess);
  const computerDifference = getAbsoluteDistance(target, computerGuess);

if (humanDifference <= computerDifference) {
  return true
} else {
  return false;
}
}

const updateScore = (winner) => {
  if (winner === 'human') {
    return humanScore ++
  } else if (winner === 'computer') {
    return computerScore ++
  } else {
    return
  }
}

const advanceRound = () => currentRoundNumber ++