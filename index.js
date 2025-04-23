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
let playerPronouns;
let playerOrigin;
let playerJob;
let PlayerFarm;

//Saving the character creation form

document.getElementById("characterCreation").addEventListener('submit', (event) => {
    event.preventDefault();
    form = document.getElementById("characterCreation") ;
    let formData =  new FormData(form);
    playerName = formData.get("playerName");
    playerOrigin = formData.get("playerOrigin");
    playerJob = formData.get("playerJob");
    PlayerFarm = formData.get("playerFarm");
    console.log(playerJob);
    document.getElementById("playerNameDisplay").textContent = playerName;

    //print player bio

    document.getElementById("playerBio").innerHTML = `Your name is ${playerName}. You go by playerPronouns pronouns.`
})


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


//Date

let season = ["Spring", "Summer", "Fall", "Winter"]
let time = new Date(0, 0, 0, 6, 0);
let timeDisplay = new Intl.DateTimeFormat(undefined, {hour: "numeric", minute: "numeric"}).format(time)
document.getElementById("timeDate").innerText = `money | ${timeDisplay} | date | weather | ☀️`;

//Seeds

let arugula = {
    description: "Arugula is a short, fast-growing, leafy green with a tangy flavor. It's that spiky bitter stuff you find in mixed salads.",
    season: ["spring", "summer", "fall"],
    growingTime: 7,
    seedingTime: 17,
    yield: 1,
    seedYield: 3,
    buy: 8,
    sell: 13,
    bulk: 10
};

let potato = {
    description: "Potatoes are a hardy, versatile root vegetable. They're easy to grow and easy to cook.",
    season: ["spring", "summer", "fall"],
    growingTime: 10,
    seedingTime: 20,
    yield: 5,
    seedYield: 7,
    buy: 5,
    sell: 10,
    bulk: 7
}

let sugarCane = {
    description: "Sugar cane is a bamboo-like grass grown in tropical conditions. It can be squeezed for a sweet, refreshing juice, or refined into sugar.",
    season: ["summer"],
    growingTime: 20,
    seedingTime: 30,
    yield: 3,
    seedYield: 7,
    buy: 9,
    sell: 10,
    bulk: 7
}

