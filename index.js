console.log("Is this thing working?")

//Reuseable randomization

function randomize(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

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

//Saving the character creation form

document.getElementById("characterCreation").addEventListener('submit', (event) => {
    event.preventDefault();
    form = document.getElementById("characterCreation") ;
    let formData =  new FormData(form);
    let playerInfo = Object.fromEntries(formData);
    document.getElementById("playerNameDisplay").textContent = playerInfo.playerName;

})

//Confirming Bio

document.getElementById("playerBio").innerHTML = `Your name is ${playerName}. You go by playerPronouns pronouns.`


//Inventory

const inventoryButton = document.getElementById("inventoryButton")
const inventory = document.getElementById("inventory")
const inventoryitems = new Map()
inventoryButton.addEventListener("click", () => {
    showOverlay();
    inventory.classList.add("show");
})

function updateInventory(){

    const parent = document.getElementById("inventoryDisplay")
    parent.innerHTML = ""
    inventoryitems.keys().forEach((item) => {
        if (inventoryitems.get(item) <= 0 ) return
        console.log(item)
        let list = document.createElement("li")
        list.textContent = `${item.name} - ${inventoryitems.get(item)}`
        parent.appendChild(list)
    })

}

function addToInventory(item, count) {
    if (inventoryitems.has(item)) inventoryitems.set(item, inventoryitems.get(item) + count)
    else inventoryitems.set(item, count)
    console.log(item.name, count)
    updateInventory()
}



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


//Sidebar

const days = Array.from({length: 30}, (_, index) => index + 1);

const date = {
    season: ["Spring", "Summer", "Fall", "Winter"],
    day: days
};
let todayDate = `${randomize(date.season)}-${randomize(date.day)}`;

let time = new Date(0, 0, 0, 6, 0);
let timeDisplay = new Intl.DateTimeFormat(undefined, {hour: "numeric", minute: "numeric"}).format(time);

let money = 0;
let moneyDisplay = new Intl.NumberFormat(undefined, {currency: "USD", style: "currency"}).format(money);

const weather = ["Sunny | ☀️", "Rainy | 🌧️"];
let todayWeather = randomize(weather);

document.getElementById("timeDate").innerText = `${moneyDisplay} | ${timeDisplay} | ${todayDate} | ${todayWeather}`;

// Saving and loading data:

// var a  = JSON.stringify(sugarCane)
// console.log(JSON.parse(a))

