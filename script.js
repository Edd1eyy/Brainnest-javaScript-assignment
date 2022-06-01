const cpuPlay = function () {
  const cpuSelection = ["rock", "paper", "scissors"];
  const randomSelector = Math.floor(Math.random() * cpuSelection.length);
  return cpuSelection[randomSelector];
};

let playerScore = 0;
let cpuScore = 0;

const gameRound = function () {
  let gameResult;
  const cpuHand = cpuPlay();
  const playerHand = prompt(
    "Rock, Paper, Scissors, SHOOT!"
  ).toLocaleLowerCase();
  if (cpuHand === "rock" && playerHand === "rock")
    gameResult = `it's a tie!, ${cpuHand} vs ${playerHand}`;
  if (cpuHand === "rock" && playerHand === "paper") {
    gameResult = `player point! 🙋‍♂️, ${playerHand} beats ${cpuHand} `;
    playerScore++;
  }
  if (cpuHand === "rock" && playerHand === "scissors") {
    gameResult = `computer point! 🤖, ${cpuHand} beats ${playerHand}`;
    cpuScore++;
  }
  /////////////////////////////////////////////////////////
  if (cpuHand === "paper" && playerHand === "rock") {
    gameResult = `computer point! 🤖!, ${cpuHand} beats ${playerHand}`;
    cpuScore++;
  }
  if (cpuHand === "paper" && playerHand === "paper")
    gameResult = `it's a tie!, ${cpuHand} vs ${playerHand}`;
  if (cpuHand === "paper" && playerHand === "scissors") {
    gameResult = `player point! 🙋‍♂️, ${playerHand} beats ${cpuHand}`;
    playerScore++;
  }
  /////////////////////////////////////////////////////////
  if (cpuHand === "scissors" && playerHand === "rock") {
    gameResult = `player point! 🙋‍♂️, ${playerHand} beats ${cpuHand}`;
    playerScore++;
  }
  if (cpuHand === "scissors" && playerHand === "paper") {
    gameResult = `computer point! 🤖, ${cpuHand} beats ${playerHand}`;
    cpuScore++;
  }
  if (cpuHand === "scissors" && playerHand === "scissors")
    gameResult = `it's a tie!, ${cpuHand} vs ${playerHand}`;
  ///////////////////////////////////////////////////////////
  return gameResult;
};
const game = function () {
  for (let i = 0; i < 5; i++) {
    console.log(gameRound());
  }
  if (playerScore > cpuScore) console.log(`🎉Player Wins!🎉`);
  if (playerScore < cpuScore) console.log(`🎉computer Wins!🎉`);
  if (playerScore === cpuScore) {
    console.log(`⚠it's a Tie!⚠`);
    console.log(`😬Tie Breaker !😬`);
    console.log(gameRound());
    if (playerScore > cpuScore) console.log(`🎉Player Wins!🎉`);
    if (playerScore < cpuScore) console.log(`🎉computer Wins!🎉`);
  }
  const restart = prompt("play again ? (yes/no)").toLocaleLowerCase();
  if (restart === "yes") {
    playerScore = 0;
    cpuScore = 0;
    game();
  }
  if (restart === "no") return;
};

setTimeout(() => game(), 5000);
