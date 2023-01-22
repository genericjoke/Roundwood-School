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

//Areeb blah

gameVis = false;
tutorialVis = true;

function getHomeButton() {
  const playButton = document.createElement("button");
  playButton.textContent = "Start New Game";
  playButton.className = "play-button";

  const tutorialButton = document.createElement("button");
  tutorialButton.textContent = "How to Play";
  tutorialButton.className = "tutorial-button";

  document.querySelector("#tutorial").append(tutorialButton, playButton);

  // playButton.addEventListener("click", startGame)
  tutorialButton.addEventListener("click", () => {
    getTutorial();

    const tutorialContent = document.querySelector("#tutorial-content")
    tutorialContent.style = "display: block;";

  })
}

// function showDiv() {

// }

// playButton.onclick = () => {
//     showWords(word);
// }

const tutorialStory = [
  "Welcome to the Tutorial!",
  "Step 1",
  "Step 2 ",
  "Step 3",
  "Play Now!",
];

let index = -1;
const prev = document.querySelector("#prevTutorial");
const next = document.querySelector("#nextTutorial");

next.addEventListener("click", () => {
    index = (index + 1) % tutorialStory.length
    console.log("test button")
    const steps = document.createElement("li");
    steps.textContent = (tutorialStory[index])
    document.querySelector("#tutorial-content").append(steps);
    // if (index > tutorialStory.length) {
    //     removeAllChildNodes(document.querySelector("#tutorial-content"))
    // while (tutorialStory.length > 0){   
    //     let mc = tutorialStory.shift();
    //     removeChild(mc);
    //     }
    }
)



// function getTutorial() {
//   console.log(next);
//   next.addEventListener("click", () => {
//     index = (index + 1) % tutorialStory.length
//     console.log(index);
//   });

//   prev.addEventListener("click", () => {
//     index = (index + slides.length - 1) % tutorialStory.length;
//     console.log(index);
//   });
//   document.querySelector("#tutorial-content").append(next, prev);
// }

// getTutorial();

// function renderTutorialStory (tutorialStory){
//     tutorialStory.forEach(step => {
//         const tutorialContent = document.querySelector("#tutorial-content")

//         const tutorialStep = document.createElement("li")
//         tutorialStep.textContent = step

//         let clicked = true

//         tutorialContent.addEventListener("click", (e) => {
//             e.preventDefault();
//             clicked = !clicked;
//             if (clicked){
//             tutorialContent.append(tutorialStep)
//             }
//         })
//         console.log(tutorialContent);
//     })
// }

// renderTutorialStory(tutorialStory);

function getTutorial() {
  const tutorial = document.querySelector("#tutorial");
  if (tutorialVis === false) {
    tutorial.style.display = "block";
    tutorialVis = true;
  } else {
    tutorial.style.display = "none";
    tutorialVis = false;
  }
}

// function startGame(){
//     gameVis = true
//         tutorialVis = true
//     }
// }

getHomeButton();
