# 🃏 Blackjack Game

A browser-based **Blackjack (21)** game built with **HTML, CSS, and Vanilla JavaScript**. Play against a simple computer opponent, manage your bank, and adjust your bet multiplier for higher risk and reward.

---

## 📌 Features

* Classic Blackjack gameplay vs a computer dealer
* Player name input with **localStorage** persistence
* Adjustable **bet multiplier (1x, 2x, 3x)**
* Bank system with wins/losses tracking
* Simple AI for the computer (draws based on current sums)
* Clean, casino-inspired UI

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)

---

## 🚀 How It Works

1. Enter your name on the start screen (optional)
2. Select a **bet multiplier** (1x–3x)
3. Press **Enter** to begin
4. Click **START GAME** to receive your first two cards
5. Choose:

   * **NEW CARD** to draw another card
   * **STAND** to end your turn and let the computer play
6. The result is calculated and your **bank** is updated

---

## 🎮 Game Rules (Simplified)

* Goal: Get as close to **21** as possible without going over
* Both player and computer start with 2 cards
* Card values are randomly generated between **2 and 11**
* Player can draw additional cards or stand
* Computer draws cards until it reaches a competitive score

---

## 💰 Betting System

* Starting bank: **$200**
* Each round costs a base bet
* Outcomes:

  * Blackjack (21): big reward
  * Win: bank increases
  * Loss: bank decreases
  * Tie: partial reward
* Bet multiplier increases both **risk and reward**

---

## 📂 Project Structure

```
blackjack/
│
├── index.html     # Name input & multiplier selection
├── main.html      # Main game interface
├── styles.css     # Styling
├── index.js       # Setup logic (name + multiplier)
└── main.js        # Game logic
```

---

## ⚙️ Installation & Usage

### Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/JanisJuska/blackjack.git
   ```

2. Open the project folder

3. Open `index.html` in your browser

---

## 💡 Implementation Details

* Uses **Math.random()** for card generation
* Stores player name and bet multiplier in **localStorage**
* Dynamic UI updates via DOM manipulation
* Simple game state handled with variables (sum, bank, etc.)

---

## ⚠️ Limitations

* Card system is simplified (no real deck, suits, or aces logic)
* No split, double down, or advanced Blackjack rules
* Computer logic is basic (not true dealer rules)

---

## 🔮 Possible Improvements

* Implement a real deck with suits and aces
* Add proper dealer rules (hit on 16, stand on 17)
* Add animations and sound effects
* Add persistent bank system
* Improve UI/UX for mobile devices
* Add game history tracking

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 🙌 Acknowledgements

Built as a learning project to practice JavaScript game logic, DOM manipulation, and browser storage.
