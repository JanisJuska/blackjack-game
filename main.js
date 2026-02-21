let cardsEl = document.getElementById("cards");
let sumEl = document.getElementById("sum");
let startBtn = document.getElementById("start-btn");
let newCardBtn = document.getElementById("new-card-btn");
let messageEl = document.getElementById("message");
let bankEl = document.getElementById("bank");

newCardBtn.style.opacity = 0;
newCardBtn.disabled = true;
messageEl.style.opacity = 0;

let name = prompt("Enter your name: ")



let firstCard = 0;
let secondCard = 0;
let sum = 0;
let bank = 200;

bankEl.textContent = `${name}: $${bank}`;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

startBtn.addEventListener("click", () => {

  bank -= 5;
  bankEl.textContent = `${name}: $${bank}`;
  messageEl.style.opacity = 0;
  firstCard = getRandomInt(2, 11)
  secondCard = getRandomInt(2, 11)

  sum = firstCard + secondCard

  cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`
  sumEl.textContent = `Sum: ${sum}`;

  newCardBtn.style.opacity = 1;
  newCardBtn.disabled = false;

  if (sum == 21) {
    messageEl.textContent = "You've got Blackjack!";
    messageEl.style.opacity = 1;
    bank += 30;
    bankEl.textContent = `${name}: $${bank}`;
  } else if (sum > 21) {

    messageEl.textContent = "You have lost the game";
    messageEl.style.opacity = 1;
    bank -= 10;
    bankEl.textContent = `${name}: $${bank}`;
  }

})

newCardBtn.addEventListener("click", () => {
  messageEl.style.opacity = 0;
  let nextNumber = getRandomInt(2, 11)
  cardsEl.textContent += ` ${nextNumber}`
  sum += nextNumber;
  sumEl.textContent = `Sum: ${sum}`;

  if (sum == 21) {
    messageEl.textContent = "You've got Blackjack!";
    messageEl.style.opacity = 1;
    bank += 20;
    bankEl.textContent = `${name}: $${bank}`;
  } else if (sum > 21) {

    messageEl.textContent = "You have lost the game";
    messageEl.style.opacity = 1;
    bank -= 10;
    bankEl.textContent = `${name}: $${bank}`;
  }
})


