

let cardsEl = document.getElementById("cards");
let sumEl = document.getElementById("sum");
let startBtn = document.getElementById("start-btn");
let newCardBtn = document.getElementById("new-card-btn");
let messageEl = document.getElementById("message");
let bankEl = document.getElementById("bank");

newCardBtn.style.opacity = 0;
newCardBtn.disabled = true;
messageEl.style.opacity = 0;


let playerName = localStorage.getItem("blackJackPlayerName");
if (!playerName) {
  playerName = "Guest";
}

localStorage.removeItem("blackJackPlayerName");


let firstCard = 0;
let secondCard = 0;
let sum = 0;
let bank = 200;

bankEl.textContent = `${playerName}: $${bank}`;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



startBtn.addEventListener("click", () => {

  bank -= 5;
  bankEl.textContent = `${playerName}: $${bank}`;
  messageEl.style.opacity = 0;
  firstCard = getRandomInt(2, 11)
  secondCard = getRandomInt(2, 11)

  sum = firstCard + secondCard

  cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`
  sumEl.textContent = `Sum: ${sum}`;

  newCardBtn.style.opacity = 1;
  newCardBtn.disabled = false;

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

function displayMessage(sum, bank) {
  if (sum == 21) {
    messageEl.textContent = "You've got Blackjack!";
    messageEl.style.opacity = 1;
    bank += 20;
    bankEl.textContent = `${playerName}: $${bank}`;
    newCardBtn.disabled = true;
    newCardBtn.style.opacity = 0;
  } else if (sum > 21) {

    messageEl.textContent = "You have lost the game";
    messageEl.style.opacity = 1;
    bank -= 10;
    bankEl.textContent = `${playerName}: $${bank}`;
    newCardBtn.disabled = true;
    newCardBtn.style.opacity = 0;
  }

  if (bank < 5) {
    messageEl.textContent = "You are out of funds! See you again.";
    window.location.href = "./index.html";
  }
}

