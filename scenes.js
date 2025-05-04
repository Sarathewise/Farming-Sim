//Scenes

let scene = {
    currentScene: "intro",

    intro: {
        location: "Farmhouse Porch",
        text: `<p>The drive to your new farm is exhausting.</p>
<p>There&rsquo;s miles of open road between you and your new dream spent sleeping off the thrill in the back of a taxi. Your cabby is a good sport, really, riving you all the way out here with your luggage in the back. They said they had something to drop off at town hall anyway, which is a miracle considering how isolated the place is. At least you got a good look at the town on your way in.</p>
<p>After that, there&rsquo;s still a half hour of driving left before you pull up to the farmhouse. It&rsquo;s a beat up old thing, definitely in need of some TLC, but it&rsquo;s <em>yours, </em>and that&rsquo;s worth more than a few hours in the back of a stranger&rsquo;s car, not to mention the train ride that came before that.</p>
<p>This is day one of your new life. What do you do first?</p>`,
        choices: [
            {choice: "Go inside",
                nextScene: "farmhouseInteriorIntro"
            },
            // {choice: "Check out the fields",
            //     nextScene: "fieldsIntro"
            // },
        ],
    },

    farmhouseInteriorIntro: {
        location: "Farmhouse Downstairs",
        text: `<p>The farmhouse is cozy, for a certain definition of the word. There&rsquo;s a small entryway with a <em>welcome </em>mat, a coat rack, and a little side table that looks hand-painted. Some might call it cheesy, but it&rsquo;s clear someone really cared for this place.</p>
<p>There&rsquo;s not much more house beyond the entryway. The living area is sparse. There&rsquo;s just a bookshelf, an old couch, and an end table with a lamp that might&rsquo;ve been fashionable a century ago. The walls are bare, and the rug probably should&rsquo;ve been put out of its misery long before you got here. It&rsquo;s nice of the old owner to leave you some furniture at least.</p>
<p>To the right of the living area is a kitchen-dining situation. Green planks transition into black and white checkered tiles, setting a barely-tangible boundary between the sink, stove, fridge, a few cabinets, and a little breakfast nook that curves around a small round table.</p>
<p>On top of the dining table is a basket with a letter sticking out of it.</p>`,
        choices: [
            {choice: "Read the letter",
                nextScene: "farmhouseLetter"
            },
        ]
    },

    farmhouseLetter: {
        location: "Farmhouse Downstairs",
        text: `<p><em>Dear ${playerInfo.playerName},</em></p>
<p><em>Thank you for purchasing this farm! I know it might just be a business investment to you, but it meant a lot to my parents and to their parents before them. Most of this town is like that&mdash; old folks who built a dream, and their descendants just trying their best to keep it alive. It&rsquo;s no easy task.</em></p>
<p><em>Maybe this is a selfish ask of me, considering I&rsquo;m the one selling it off, but could you please take care of this place? Even though I couldn&rsquo;t stay, I would still hate to see it fall into ruin.</em></p>
<p><em>There&rsquo;s a few things in this basket that should help you get started. I&rsquo;ve also left hints like these around the place to make your job a little easier!</em></p>
<p><em>Best of luck,</em></p>
<p><em>Ezra</em></p>`,
        choices: [
            {choice: "Next",
                nextScene: "farmhouseDefault"
            },
        ]
    },

    reeseFarmhouseIntro: {
        location: "Farmhouse Porch",
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

//Creating buttons from array of choices
function getInputs() {
    let input = ""
    for(let i = 0; i < scene[scene.currentScene].choices.length; i++) {
        input += `
        <button data-nextscene= ${scene[scene.currentScene].choices[i].nextScene} class="choiceButton" id="choice${i}" name="choice${i}">${i + 1}</button>
        <label for="choice${i}">${scene[scene.currentScene].choices[i].choice}</label> </br>
        `
    }
    return input;
}

//Get the value of the button clicked after the choice buttons are created
function getInputValue() {
    let inputs = document.querySelectorAll('.choiceButton')
    inputs.forEach((element, index)=> {
        element.addEventListener("click", () => {
            scene.currentScene= element.getAttribute("data-nextscene")
            renderScene()
        })
    })
}

function renderScene() {
    document.getElementById("location").innerText = scene[scene.currentScene].location
    document.getElementById("textDisplay").innerHTML = scene[scene.currentScene].text
    document.getElementById("choiceDisplay").innerHTML = `${getInputs()}`
    getInputValue()
}

loadLocalSave()
