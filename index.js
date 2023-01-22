// const currPhaseWeek = "0.1"
// const player = "Choose a new player"

// function renderGame(game){

// }

// function getCallPhases(){
//     fetch("http://localhost:3000/phases")
//     .then(data => console.log(data))
// }

// function getCallChar(){
//     fetch("http://localhost:3000/characters")
//     .then()
// }

getCallRecords();

////// Records / top score section///////////////////////////////

function getCallRecords() {
    fetch("http://localhost:3000/records")
    .then((response) => response.json())
    .then((data) => sortRecords(data));
}

function sortRecords(records) {
  /// sorts the record. Idt we need top 5. The div will reset to the top but all players will be listed, lower scores hidden
    const topFive = records.sort((a, b) => b.score - a.score);
    topFive.forEach((player) => {
    const playerContainer = document.createElement("div");
    playerContainer.className = "top-five-player";

    const playerAvatar = document.createElement("img");
    playerAvatar.src = player.image;
    // console.log(playerAvatar)
    playerAvatar.className = "avatar";

    const playerName = document.createElement("li");
    playerName.textContent = `Player Name: ${player.name}`;

    const playerScore = document.createElement("li");
    playerScore.textContent = `Score: ${player.score}`;

    const playerProg = document.createElement("li");
    playerProg.textContent = `Programming Skillz: ${player.prog}`;

    const playerBo = document.createElement("li");
    playerBo.textContent = `Burnout: ${player.bo}`;

    //build player div ".top-five-player" & push to DOM "#top-five-display"
    playerContainer.append(playerName, playerScore, playerProg, playerBo);
    const topPlayerDisplay = document.querySelector("#top-player-display");
    topPlayerDisplay.scrollTop = 0; //resets scroll to top, on refresh only unfortunately.
    topPlayerDisplay.append(playerAvatar, playerContainer);
    });
}





function getHomeButton() {
    const playButton = document.createElement("button");
    playButton.textContent = "Start New Game";
    playButton.className = "play-button";

    const tutorialButton = document.createElement("button");
    tutorialButton.textContent = "How to Play";
    tutorialButton.className = "tutorial-button";

    document.querySelector("#main-game-view").append(tutorialButton, playButton);

    // playButton.addEventListener("click", () {

    // }

    playButton.addEventListener("click", () => {
        const launchGame = document.querySelector("#gameplay")
        launchGame.style = "display: block;";
        const setupGame = document.querySelector("#game-setup");
        setupGame.style = "display: block;";
        const homeButtonsDiv = document.querySelector("#main-game-view")
        homeButtonsDiv.style = "display: none;";
        
    })

    tutorialButton.addEventListener("click", () => {
    const tutorialContent = document.querySelector("#tutorial-content")
    tutorialContent.style = "display: block;";
    const homeButtonsDiv = document.querySelector("#main-game-view")
    homeButtonsDiv.style = "display: none;";


    })
}
getHomeButton();
// function showDiv() {

// }

// playButton.onclick = () => {
//     showWords(word);
// }



/////////////// TUTORIAL ////////////////

///step by step tutorial goes in this array
const tutorialStory = [
    "Welcome to the Tutorial!",
    "Step 1",
    "Step 2 ",
    "You're Ready!",
];


const launchAfterTutorial = document.querySelector("#start-button-after-tutorial");
launchAfterTutorial.addEventListener("click", () => {
    const gameSetupDiv = document.querySelector("#game-setup");
    gameSetupDiv.style = "display: block;";
    const tutorialContent = document.querySelector("#tutorial-content");
    tutorialContent.style = "display: none;";
})



////////////////navigating through tutorial ////////////////
const next = document.querySelector("#nextTutorial");
let index = -1;
next.addEventListener("click", () => {
    index = (index + 1) % tutorialStory.length
    
    const steps = document.createElement("li");
    steps.textContent = (tutorialStory[index])
    document.querySelector("#tutorial-story").append(steps);
    
    /// swaps continue button with launch game button after story ends////
    if (index === tutorialStory.length-1) {
        next.style = "display: none;";
        launchAfterTutorial.style = "display: block;";
        }
    }
)

///////////////navigating through game setup///////////////


const ava1 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-01.png"
const ava2 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-02.png"
const ava3 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-03.png"
const ava4 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-04.png"
const ava5 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-05.png"
const ava6 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-06.png"
const ava7 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-07.png"
const ava8 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-08.png"
function avatarSetup () {
    const avatarDiv = document.querySelector("#avatar-setup");
    avatarDiv.style = "display: block;";
    
    const div1 = document.createElement("div");
    div1.className = "avatar-div";
    const avatar1 = document.createElement("img");
    avatar1.setAttribute("src", ava1);
    avatar1.setAttribute("id", "avatar1");
    avatar1.setAttribute("class", "avatar-op")
    div1.append(avatar1);

    const div2 = document.createElement("div");
    div2.className = "avatar-div";
    const avatar2 = document.createElement("img");
    avatar2.setAttribute("src", avatar2);
    avatar2.setAttribute("id", "avatar2");
    avatar2.setAttribute("class", "avatar-op")
    div2.append(avatar2);

    const div3 = document.createElement("div");
    div3.className = "avatar-div";
    const avatar3 = document.createElement("img");
    avatar3.setAttribute("src", avatar3);
    avatar3.setAttribute("id", "avatar3");
    avatar3.setAttribute("class", "avatar-op")
    div3.append(avatar3);

    const div4 = document.createElement("div");
    div4.className = "avatar-div";
    const avatar4 = document.createElement("img");
    avatar4.setAttribute("src", avatar4);
    avatar4.setAttribute("id", "avatar4");
    avatar4.setAttribute("class", "avatar-op")
    div4.append(avatar4);

    const div5 = document.createElement("div");
    div5.className = "avatar-div";
    const avatar5 = document.createElement("img");
    avatar5.setAttribute("src", avatar5);
    avatar5.setAttribute("id", "avatar5");
    avatar5.setAttribute("class", "avatar-op")
    div5.append(avatar5);

    const div6 = document.createElement("div");
    div6.className = "avatar-div";
    const avatar6 = document.createElement("img");
    avatar6.setAttribute("src", avatar6);
    avatar6.setAttribute("id", "avatar6");
    avatar6.setAttribute("class", "avatar-op")
    div6.append(avatar6);

    const div7 = document.createElement("div");
    div7.className = "avatar-div"
    const avatar7 = document.createElement("img");
    avatar7.setAttribute("src", ava7);
    avatar7.setAttribute("id", "avatar7");
    avatar7.setAttribute("class", "avatar-op")
    div7.append(avatar7);

    const div8 = document.createElement("div");
    div8.className = "avatar-div";
    const avatar8 = document.createElement("img");
    avatar8.setAttribute("src", ava8);
    avatar8.setAttribute("id", "avatar8");
    avatar8.setAttribute("class", "avatar-op")
    div8.append(avatar8);
    
    const avatarOptions = document.querySelector("#avatar-options");
    avatarOptions.append(div8, div7, div6, div5, div4, div3, div2, div1);
}

avatarSetup ()

function renderChosenAvatar () {
    const avatarOptions = document.querySelectorAll(".avatar-div");
    avatarOptions.forEach(opt => opt.addEventListener("click", (e) => {
        const clickedAvatar = (e.target)
        const chosenAvatar = document.querySelector("#chosen-avatar-icon");
        console.log(clickedAvatar)
        chosenAvatar.src = clickedAvatar.src
    })
)}

renderChosenAvatar ()

avatarSetup()