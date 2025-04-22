console.log("Is this thing working?")

//Overlay Functionality

const overlay = document.getElementById("overlay")
const closeButtons = document.getElementsByClassName("closeButton")
const modal = document.getElementsByClassName("modal")

function showOverlay() {
    overlay.classList.add("show");
}

function hideOverlay() {
    overlay.classList.remove("show");
}

Array.from(closeButtons).forEach(element => {
    element.addEventListener("click", () => {
        hideOverlay();
        Array.from(modal).forEach((element) => element.classList.remove("show"));
    });
});

//Character Creation

// open menu

const newGameButton = document.getElementById("newGameButton")
const characterCreationMenu = document.getElementById("characterCreationMenu")

newGameButton.addEventListener("click", () => {
    showOverlay();
    characterCreationMenu.classList.add("show");
    settings.classList.remove("show");
})

let playerName;
let playerGender;
let playerOrigin;
let playerPrevJob;

//Saving the character creation form

document.getElementById("characterCreation").addEventListener('submit', (event) => {
    event.preventDefault()
    form = document.getElementById("characterCreation") 
    let formData =  new FormData(form)
    console.log(formData)
    // playerName = formData.playerName
    playerName = formData.get("playerName")
    document.getElementById("playerNameDisplay").textContent = playerName
})

function playerBio(playerName) {
    let playerBio = `Your name is ${playerName.value}. You go by {playerPronouns.value} pronouns.`
    document.getElementById("playerBio").textContent = playerBio
}


//Inventory

const inventoryButton = document.getElementById("inventoryButton")
const inventory = document.getElementById("inventory")

inventoryButton.addEventListener("click", () => {
    showOverlay();
    inventory.classList.add("show");
})

//Calendar

const calendarButton = document.getElementById("calendarButton")
const calendar = document.getElementById("calendar")

calendarButton.addEventListener("click", () => {
    showOverlay();
    calendar.classList.add("show");
})


//Journal

const journalButton = document.getElementById("journalButton")
const journal = document.getElementById("journal")

journalButton.addEventListener("click", () => {
    showOverlay();
    journal.classList.add("show");
})

//Message Board

const messageBoardButton = document.getElementById("messageBoardButton")
const messageBoard = document.getElementById("messageBoard")

messageBoardButton.addEventListener("click", () => {
    showOverlay();
    messageBoard.classList.add("show");
})

//Settings

const settingsButton = document.getElementById("settingsButton")
const settings = document.getElementById("settings")

settingsButton.addEventListener("click", () => {
    showOverlay();
    settings.classList.add("show");
})