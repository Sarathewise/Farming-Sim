console.log("Is this thing working?")

//Modal Functionality

const overlay = document.getElementById("overlay")
const sidebarButtons = document.getElementsByClassName("sidebarButton")
const closeButtons = document.getElementsByClassName("closeButton")
const modal = document.getElementsByClassName("modal")

function showModal() {
    overlay.classList.add("show");
    Array.from(modal).forEach((element) => element.classList.add("show"));
}

function hideModal() {
    overlay.classList.remove("show");
    Array.from(modal).forEach((element) => element.classList.remove("show"));
}

Array.from(closeButtons).forEach(element => {
    element.addEventListener("click", () => {
        hideModal();
    });
});

//Sidebar Buttons

Array.from(sidebarButtons).forEach(element => {
    element.addEventListener("click", () => {
        showModal();
    });
});

//Character Creation

const characterCreationScreen = document.getElementById("characterCreationScreen")
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
    let playerBio = `Your name is ${playerName}. You go by {playerPronouns} pronouns.`
    document.getElementById("playerBio").textContent = playerBio
}