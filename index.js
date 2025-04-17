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

const overlay = document.getElementById("overlay")
const newGameButton = document.getElementById("newGameButton")
const characterCreationCloseButton = document.getElementById("characterCreationCloseButton")
const characterCreationScreen = document.getElementById("characterCreationScreen")

function showOverlay() {
    overlay.classList.add("show");
}

function hideOverlay() {
    overlay.classList.remove("show");
}

newGameButton.addEventListener("click", () => {
    characterCreationScreen.classList.add("show");
    showOverlay()
});

characterCreationCloseButton.addEventListener("click", () => {
    characterCreationScreen.classList.remove("show");
    hideOverlay()
});