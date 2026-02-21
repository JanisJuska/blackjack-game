
const nameInput = document.getElementById("name-input");

nameInput.focus();


nameInput.addEventListener("keypress", (e) => {
  if (e.code == "Enter") {
    const playerName = nameInput.value.trim();

    if (playerName) {
      localStorage.setItem("blackJackPlayerName", playerName)
    } else {
      localStorage.removeItem("blackJackPlayerName");
    }

    window.location.href = "main.html";
  }
})


