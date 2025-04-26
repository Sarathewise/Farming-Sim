//Scenes

let scene = {
    currentScene: "intro",

    intro: {
        location: "Farmhouse",
        text: `<p>The drive to your new farm is exhausting.</p>
<p>There&rsquo;s miles of open road between you and your new dream spent sleeping off the thrill in the back of a taxi. Your cabby is a good sport, really, riving you all the way out here with your luggage in the back. They said they had something to drop off at town hall anyway, which is a miracle considering how isolated the place is. At least you got a good look at the town on your way in.</p>
<p>After that, there&rsquo;s still a half hour of driving left before you pull up to the farmhouse. It&rsquo;s a beat up old thing, definitely in need of some TLC, but it&rsquo;s <em>yours, </em>and that&rsquo;s worth more than a few hours in the back of a stranger&rsquo;s car, not to mention the train ride that came before that.</p>
<p>This is day one of your new life. What do you do first?</p>`,
        choices: [
            {choice: "Go inside"},
            {choice: "Check out the fields"},
        ],
        nextScene: ["farmhouseInteriorIntro", "fieldsIntro"]
    },

    farmhouseInteriorIntro: {
        location: "Farmhouse",
        text: ``,
        choices: [
            {choice: ""},
        ]
    },

    reeseFarmhouseIntro: {
        location: "Farmhouse",
        text: `<p>As you exit the farmhouse, you're startled by the sound of galloping hooves. Someone on a horse trots down the path. They don't look down at all as they ride up right beside you, and you're convinced you&rsquo;ll end up trampled under their steed until they come to a stop.</p>
        <p>&ldquo;Hello?&rdquo; you ask, already taken aback by their attitude. They hold out a hand, signalling for you to wait.</p>
        <p>At least you&rsquo;re able to get a good look at them while they&rsquo;re busy ignoring you. They&rsquo;ve got light brown skin, their hair only a couple shades darker, a straight, jellyfish cut flowing out of their cowboy hat. The rest of them is covered almost entirely in a deep blue denim&mdash; denim jacket, denim jeans&mdash; except for the lovingly crafted chaps, a rich leather masterwork carved with ornamental swirls and obviously well taken care of. Equally ornamented cowboy boots peek out the bottom to hook into their spurs, just in case you were still doubting their profession.</p>
        <p><em>&ldquo;This </em>is the farm that's supposed to be my new competition?&rdquo; the person says, eyes scanning the landscape. &ldquo;It doesn't even have a chicken.&rdquo; Which&mdash; alright, so there's still a lot of work to do, but that's frankly uncalled for.</p>
        <p>Finally, they look down at you. &ldquo;Name's Reese, local cowpoke. If you want a shot at even competing with my ranch, you'll have to come see it first.&rdquo;</p>`,
        choices: [
            {choice: "Tell them off. That was rude!"},
            {choice: "It's too early for this. Go back inside."},
            {choice: "Go check out their ranch, since they're offering..."},
        ]
    },
}

// Scene infrastructure

function getInputs() {
    let input = ""
    for(let i = 0; i < scene[scene.currentScene].choices.length; i++) {
        input += `
        <button class="choiceButton" id="choice${i}" name= "choice${i}">${i + 1}</button>
        <label for="choice${i}">${scene[scene.currentScene].choices[i].choice}</label> </br>
        `
        // let choiceButton = document.getElementById(`choice${i}`)
        // choiceButton.addEventListener("click", () => {
        //     currentScene = scene[scene.currentScene].nextScene
        // })
    }
    return input;
}

function renderScene() {
    document.getElementById("location").innerText = scene[scene.currentScene].location
    document.getElementById("textDisplay").innerHTML = scene[scene.currentScene].text
    document.getElementById("choiceDisplay").innerHTML = `${getInputs()}`
}

console.log(renderScene())
cons