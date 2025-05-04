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

function closeModal() {
    overlay.classList.remove("show");
    Array.from(modal).forEach((element) => element.classList.remove("show"));
}

Array.from(closeButtons).forEach(element => {
    element.addEventListener("click", () => {
        closeModal();
        
    });
});




//Inventory

const inventoryButton = document.getElementById("inventoryButton")
const inventory = document.getElementById("inventory")
let inventoryItems = new Map()
inventoryButton.addEventListener("click", () => {
    showOverlay();
    inventory.classList.add("show");
})

function updateInventory() {

    const parent = document.getElementById("inventoryDisplay")
    parent.innerHTML = ""
    inventoryItems.keys().forEach((item) => {
        if (inventoryItems.get(item) <= 0) return
        // console.log(item)
        let list = document.createElement("li")
        list.textContent = `${item.name} - ${inventoryItems.get(item)}`
        parent.appendChild(list)
    })

}

function addToInventory(item, count) {
    if (inventoryItems.has(item)) inventoryItems.set(item, inventoryItems.get(item) + count)
    else inventoryItems.set(item, count)
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

const days = Array.from({ length: 30 }, (_, index) => index + 1);

const date = {
    season: ["Spring", "Summer", "Fall", "Winter"],
    day: days
};
let todayDate

let currentTime = new Date(0, 0, 0, 6, 0);
let timeDisplay = new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "numeric" }).format(currentTime);

let money = 0;
let moneyDisplay

const weather = ["Sunny | ☀️", "Rainy | 🌧️"];
let todayWeather = randomize(weather);

function setTimeDate() {
    moneyDisplay = new Intl.NumberFormat(undefined, { currency: "USD", style: "currency" }).format(money);
    document.getElementById("timeDate").innerText = `${moneyDisplay} | ${timeDisplay} | ${todayDate} | ${todayWeather}`;
}



//Character Creation

// open menu

const newGameButton = document.getElementById("newGameButton")
const characterCreationMenu = document.getElementById("characterCreationMenu")

newGameButton.addEventListener("click", () => {
    showOverlay();
    characterCreationMenu.classList.add("show");
    settings.classList.remove("show");
})

//Pulling from the character creation form

let playerInfo = {  }

function newPlayerInfo() {
    event.preventDefault();
    form = document.getElementById("characterCreation");
    let formData = new FormData(form);
    playerInfo = Object.fromEntries(formData);
}

//Confirming Bio

document.getElementById("characterCreation").addEventListener('submit', (event) => {
    newPlayerInfo();
    document.getElementById("playerBio").innerHTML = `Your name is ${playerInfo.playerName}. You go by playerPronouns pronouns.`;
})

//Saving new game

newGame = document.getElementById("newGame").addEventListener("click", () => {
    closeModal();
    newPlayerInfo();
    document.getElementById("playerNameDisplay").textContent = playerInfo.playerName;
    
    //Init
    scene.currentScene = "intro"
    currentTime = new Date(0, 0, 0, 6, 0);
    money = 1500;
    todayDate = `${date.season[0]}-${date.day[0]}`;
    setTimeDate()
    renderScene();

    //Save
    localStorage.setItem("save", createSave())
})


//Save game

const saveGameButton = document.getElementById("saveGameButton")

function createSave() {
    let save = {
        playerInfo: playerInfo,
        todayDate: todayDate,
        currentTime: currentTime,
        money: money,
        todayWeather: todayWeather,
        inventoryItems: inventoryItems,
        currentScene: scene.currentScene
    }
    return JSON.stringify(save)
}

saveGameButton.addEventListener("click", () => {
    localStorage.setItem("save", createSave())
})

const exportFileButton = document.getElementById("exportFileButton")

exportFileButton.addEventListener("click", () => {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(createSave());
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "save.json");
    document.body.appendChild(dlAnchorElem)
    dlAnchorElem.click();
    dlAnchorElem.remove();
})

//Loading game from local storage

const loadGameButton = document.getElementById("loadGameButton")

function loadLocalSave() {
    if (localStorage.getItem("save") !== null) {
        localSave = JSON.parse(localStorage.getItem("save"));
        playerInfo = localSave.playerInfo;
        todayDate = localSave.todayDate;
        time = localSave.time;
        money = localSave.money;
        todayWeather = localSave.todayWeather;
        inventoryItems = localSave.inventoryItems;
        scene.currentScene = localSave.currentScene;
        document.getElementById("playerNameDisplay").textContent = playerInfo.playerName;
        setTimeDate()
        renderScene()
        closeModal()
    }
    else (alert("No local save found."))
}

loadGameButton.addEventListener("click", () => {
    loadLocalSave()
})

