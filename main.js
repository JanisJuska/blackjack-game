

let cardsEl = document.getElementById("cards");
let sumEl = document.getElementById("sum");
let startBtn = document.getElementById("start-btn");
let newCardBtn = document.getElementById("new-card-btn");
let messageEl = document.getElementById("message");
let bankEl = document.getElementById("bank");
let standBtn = document.getElementById("stand-btn");
let playerScreen = document.getElementById("player-screen");
let pcScreen = document.getElementById("pc-screen");
let pcCardsEl = document.getElementById("pc-cards");
let pcSumEl = document.getElementById("pc-sum");

hideButton(newCardBtn);
hideButton(standBtn);
messageEl.style.opacity = 0;



let playerName = localStorage.getItem("blackJackPlayerName");
if (!playerName) {
  playerName = "Guest";
}
let betMultiplier = localStorage.getItem("betsMultiplier");

localStorage.removeItem("blackJackPlayerName");


let firstCard = 0;
let secondCard = 0;
let pcFirstCard = 0;
let pcSecondCard = 0;
let sum = 0;
let pcSum = 0;
let bank = 200;

bankEl.textContent = `${playerName}: $${bank}`;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hideButton(button) {
  button.style.opacity = 0;
  button.disabled = true;
  button.style.cursor = "initial";
}

function showButton(button) {
  button.style.opacity = 1;
  button.disabled = false;
  button.style.cursor = "pointer";
}

startBtn.addEventListener("click", () => {
  playerScreen.classList.add("playing");
  pcScreen.classList.remove("playing");
  pcCardsEl.textContent = `Cards: `;
  pcSumEl.textContent = `Sum: `;

  bank -= 5;
  bankEl.textContent = `${playerName}: $${bank}`;
  messageEl.style.opacity = 0;
  firstCard = getRandomInt(2, 11)
  secondCard = getRandomInt(2, 11)

  sum = firstCard + secondCard

  cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`
  sumEl.textContent = `Sum: ${sum}`;

  showButton(newCardBtn);
  showButton(standBtn);

  displayMessage(sum, bank);

})

newCardBtn.addEventListener("click", () => {
  messageEl.style.opacity = 0;
  let nextNumber = getRandomInt(2, 11)
  cardsEl.textContent += ` ${nextNumber}`
  sum += nextNumber;
  sumEl.textContent = `Sum: ${sum}`;

  displayMessage(sum, bank);
})

standBtn.addEventListener("click", pcPlay);

function pcPlay() {
  playerScreen.classList.remove("playing");
  pcScreen.classList.add("playing");
  hideButton(newCardBtn);
  hideButton(standBtn);

  pcFirstCard = getRandomInt(2, 11);
  pcSecondCard = getRandomInt(2, 11);

  pcSum = pcFirstCard + pcSecondCard;

  pcCardsEl.textContent = `Cards: ${pcFirstCard} ${pcSecondCard}`
  pcSumEl.textContent = `Sum: ${pcSum}`;

  while (pcSum < 18 && pcSum != 21 && pcSum <= sum) {
    let pcNextNumber = getRandomInt(2, 11);
    pcCardsEl.textContent += ` ${pcNextNumber}`;
    pcSum += pcNextNumber;
    pcSumEl.textContent = `Sum: ${pcSum}`;
  }

  displayMessagePC(sum, pcSumEl, bank);

}

function displayMessage(sum) {
  if (sum == 21) {
    messageEl.textContent = "You've got Blackjack!";
    messageEl.style.opacity = 1;
    bank += 30 * betMultiplier;
    bankEl.textContent = `${playerName}: $${bank}`;
    hideButton(newCardBtn);
    hideButton(standBtn);
  } else if (sum > 21) {

    messageEl.textContent = "You have lost the game";
    messageEl.style.opacity = 1;
    bank -= 10 * betMultiplier;
    bankEl.textContent = `${playerName}: $${bank}`;
    hideButton(newCardBtn);
    hideButton(standBtn);
  }

  if (bank < 5) {
    messageEl.textContent = "You are out of funds! See you again.";
    window.location.href = "index.html";
  }
}

function displayMessagePC(sum, pcSumEl) {
  if (sum == pcSum) {
    messageEl.textContent = "It is a tie game!";
    messageEl.style.opacity = 1;
    bank += 15 * betMultiplier;
    bankEl.textContent = `${playerName}: $${bank}`;
  } else if (pcSum > 21) {
    messageEl.textContent = "Computer scored over 21. You won!";
    messageEl.style.opacity = 1;
    bank += 15 * betMultiplier;
    bankEl.textContent = `${playerName}: $${bank}`;
  } else {
    messageEl.textContent = "You have lost the game";
    messageEl.style.opacity = 1;
    bank -= 10 * betMultiplier;
    bankEl.textContent = `${playerName}: $${bank}`;
  }

  console.log(`sum: ${sum}`)
  console.log(`pcSum: ${pcSum}`)
}

