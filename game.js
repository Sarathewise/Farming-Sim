console.log("Is this thing working?")


//Character Creation
let playerName;
let playerGender;
let playerOrigin;
let playerPrevJob;

document.getElementById("submitButton").onclick = function() {
    playerName = document.getElementById("Name").value
    document.getElementById("playerName").textContent = playerName
}

const newGameButton = document.getElementById("newGameButton")
const characterCreationCloseButton = document.getElementById("characterCreationCloseButton")
const characterCreationScreen = document.getElementById("characterCreationScreen")

newGameButton.addEventListener("click", () => {
    characterCreationScreen.classList.add("show");
});

characterCreationCloseButton.addEventListener("click", () => {
    characterCreationScreen.classList.remove("show");
});