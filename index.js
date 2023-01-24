
////// Records / top score section///////////////////////////////



getHomeButton(); //// had to move this to the top, it wasn't rendering. something to keep in mind for functions

function getCallRecords() {
  fetch("http://localhost:3000/records")
    .then((response) => response.json())
    .then((data) => sortRecords(data));
}
getCallRecords();

function sortRecords(records) {
  /// sorts the record. Idt we need top 5. The div will reset to the top but all players will be listed, lower scores hidden
  const topFive = records.sort((a, b) => b.score - a.score);
  topFive.forEach((player) => {
    const playerStatContainer = document.createElement("div");
    playerStatContainer.className = "top-five-player";

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
    playerBo.textContent = `Life: ${player.bo}`;

    //build player div ".top-five-player" & push to DOM "#top-five-display"
    playerStatContainer.append(playerName, playerScore, playerProg, playerBo);
    const topPlayerDisplay = document.querySelector("#top-player-display");
    topPlayerDisplay.scrollTop = 0; //resets scroll to top, on refresh only unfortunately.
    const topContainer = document.createElement("div");
    topContainer.className = "top-container";
    topContainer.append(playerAvatar, playerStatContainer);
    topPlayerDisplay.append(topContainer);

    // const classNames = document.querySelector("#class-name-under-avatar")
    // console.log(classNames.textContent)
    // // const classOptions = document.querySelectorAll(".class-image-container");     //querySelectorAll(".class-image-container");
    // // console.log(classOptions)
    // records.forEach(opt =>
    //   opt.addEventListener("click", (e) => {
    //     const clickedClass = e.target;
    //     console.log(clickedClass);
    })
    }

  // dogs.forEach(dogs => {
  //   let li = document.createElement('li');
  //   li.textContent = dogs.content;
  //   ul.appendChild(li);

////////////////////////selecting class section ///////////////////////

function getCallClass() {
    fetch("http://localhost:3000/classes")
    .then((response) => response.json())
    .then((data) => renderClassOption(data));
}
getCallClass();

function renderClassOption(classes) {
    classes.forEach((classObj) => {
    const classContainer = document.createElement("div");
    classContainer.className = "class-container";

    const classIcon = document.createElement("img");
    classIcon.src = classObj.image;
    classIcon.className = "class-op";
    const classImageContainer = document.createElement("div");
    classImageContainer.className = "class-image-container";
    classImageContainer.append(classIcon);

    const className = document.createElement("li");
    className.textContent = `Class: ${classObj.name}`;

    const classProg = document.createElement("li");
    classProg.textContent = `Programming Skillz: ${classObj.prog}`;

    const classBo = document.createElement("li");
    classBo.textContent = `Life: ${classObj.bo}`;

    classContainer.append(classImageContainer, className, classProg, classBo);
    const classSetupDiv = document.querySelector("#class-options");

    classSetupDiv.append(classContainer);
    });
}

/////// helper functions to show one setup section and hide others (avatar/name + class)

const classButtonFromAvatarView = document.querySelector(
    "#chose-class-from-avatar-view"
);

classButtonFromAvatarView.addEventListener("click", () => {
    renderClassView();
    renderChosenClass();
    
    const playerName = document.querySelector("#player-name-under-avatar") 
   
    const nameButton = document.querySelector("#name-button")
    playerName.textContent = nameButton.value
})

// const nameButtonFromAvatarView = document.querySelector("#chose-name-from-avatar-view")
// nameButtonFromAvatarView.addEventListener("submit", () => {
//   console.log("clicked")
// })

// const homeButtonFromAvatarView = document.querySelector(
//     "#chose-home-from-avatar-view"
// );
// homeButtonFromAvatarView.addEventListener("click", () => {
//     const homeButtonsDiv = document.querySelector("#main-game-view");
//     homeButtonsDiv.style = "display: block;";
//     const avatarSetupDiv = document.querySelector("#avatar-setup");
//     avatarSetupDiv.style.display = "none";
// });

const tutorialButtonFromAvatarView = document.querySelector("#chose-tutorial-from-avatar-view");

tutorialButtonFromAvatarView.addEventListener("click",  () => {

    const tutorialContent = document.querySelector("#tutorial-content");
    tutorialContent.style = "display: block;";
    const avatarSetupDiv = document.querySelector("#avatar-setup");
    avatarSetupDiv.style.display = "none";
    const gameContent = document.querySelector("#game-setup")
    gameContent.style.display = "none";
});

const avatarButtonFromClassView = document.querySelector(
    "#go-back-to-avatar-from-class-view"
);
avatarButtonFromClassView.addEventListener("click", () => {
    renderAvatarView();
});

// const avatarName = document.querySelector("#chosen-avatar-container > input")
// avatarName.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("clicked");
// })

function renderClassView() {
    const classSetupDiv = document.querySelector("#class-setup");
    classSetupDiv.style.display = "block";
    const avatarSetupDiv = document.querySelector("#avatar-setup");
    avatarSetupDiv.style.display = "none";
}

function renderAvatarView() {
  const avatarSetupDiv = document.querySelector("#avatar-setup");
  avatarSetupDiv.style.display = "block";
  const classSetupDiv = document.querySelector("#class-setup");
  classSetupDiv.style.display = "none";
  const homeDiv = document.querySelector("#home");
  homeDiv.style.display = "none";
}

////////////////////////home page section////////////////////////
function getHomeButton() {
  const playButton = document.createElement("button");
  playButton.textContent = "Start New Game";
  playButton.className = "play-button";
  playButton.id = "play-button";

  const tutorialButton = document.createElement("button");
  tutorialButton.textContent = "How to Play";
  tutorialButton.className = "tutorial-button";
  tutorialButton.id = "tutorial-button"; 

  const homeDiv = document.querySelector("#main-game-view");
  homeDiv.append(tutorialButton, playButton);

  playButton.addEventListener("click", () => {
    const launchGame = document.querySelector("#gameplay");
    launchGame.style = "display: block;";
    const setupGame = document.querySelector("#game-setup");
    setupGame.style = "display: block;";
    const homeButtonsDiv = document.querySelector("#main-game-view");
    homeButtonsDiv.style = "display: none;";
    const homeDiv = document.querySelector("#home");
    homeDiv.style.display = "none";
    // const launchButton = document.querySelector("#launch-game-play-button");
    // launchButton.style = "display: none;";
    const gamePhases = document.querySelector("#game-phases-container");
    gamePhases.style = "display: none;";
    const afterGame = document.querySelector("#launch-game")
    afterGame.style = "display: none;";
  });

  tutorialButton.addEventListener("click", () => {
    const tutorialContent = document.querySelector("#tutorial-content");
    tutorialContent.style = "display: block;";
    const homeButtonsDiv = document.querySelector("#main-game-view");
    homeButtonsDiv.style = "display: none;";
  });
}

/////////////// TUTORIAL ////////////////

///step by step tutorial goes in this array
const tutorialStory = [
  "Welcome to the Tutorial!",
  "Step 1",
  "Step 2 ",
  "You're Ready!",
];

const launchAfterTutorial = document.querySelector(
  "#start-button-after-tutorial"
);
launchAfterTutorial.addEventListener("click", () => {
  const gameSetupDiv = document.querySelector("#game-setup");
  gameSetupDiv.style = "display: block;";
  const tutorialContent = document.querySelector("#tutorial-content");
  tutorialContent.style = "display: none;";
  renderAvatarView();
});

////////////////navigating through tutorial ////////////////
const next = document.querySelector("#nextTutorial");
let index = -1;
next.addEventListener("click", () => {
  index = (index + 1) % tutorialStory.length;

  const steps = document.createElement("li");
  steps.textContent = tutorialStory[index];
  document.querySelector("#tutorial-story").append(steps);

  /// swaps continue button with launch game button after story ends////
  if (index === tutorialStory.length - 1) {
    next.style = "display: none;";
    launchAfterTutorial.style = "display: block;";
  }
});

///////////////navigating through game setup///////////////

const ava1 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-01.png";
const ava2 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-02.png";
const ava3 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-03.png";
const ava4 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-04.png";
const ava5 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-05.png";
const ava6 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-06.png";
const ava7 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-07.png";
const ava8 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-08.png";
function avatarSetup() {
  const avatarDiv = document.querySelector("#avatar-setup");
  avatarDiv.style = "display: block;";

  const div1 = document.createElement("div");
  div1.className = "avatar-div";
  const avatar1 = document.createElement("img");
  avatar1.setAttribute("src", ava1);
  avatar1.setAttribute("id", "avatar1");
  avatar1.setAttribute("class", "avatar-op");
  div1.append(avatar1);

  const div2 = document.createElement("div");
  div2.className = "avatar-div";
  const avatar2 = document.createElement("img");
  avatar2.setAttribute("src", ava2);
  avatar2.setAttribute("id", "avatar2");
  avatar2.setAttribute("class", "avatar-op");
  div2.append(avatar2);

  const div3 = document.createElement("div");
  div3.className = "avatar-div";
  const avatar3 = document.createElement("img");
  avatar3.setAttribute("src", ava3);
  avatar3.setAttribute("id", "avatar3");
  avatar3.setAttribute("class", "avatar-op");
  div3.append(avatar3);

  const div4 = document.createElement("div");
  div4.className = "avatar-div";
  const avatar4 = document.createElement("img");
  avatar4.setAttribute("src", ava4);
  avatar4.setAttribute("id", "avatar4");
  avatar4.setAttribute("class", "avatar-op");
  div4.append(avatar4);

  const div5 = document.createElement("div");
  div5.className = "avatar-div";
  const avatar5 = document.createElement("img");
  avatar5.setAttribute("src", ava5);
  avatar5.setAttribute("id", "avatar5");
  avatar5.setAttribute("class", "avatar-op");
  div5.append(avatar5);

  const div6 = document.createElement("div");
  div6.className = "avatar-div";
  const avatar6 = document.createElement("img");
  avatar6.setAttribute("src", ava6);
  avatar6.setAttribute("id", "avatar6");
  avatar6.setAttribute("class", "avatar-op");
  div6.append(avatar6);

  const div7 = document.createElement("div");
  div7.className = "avatar-div";
  const avatar7 = document.createElement("img");
  avatar7.setAttribute("src", ava7);
  avatar7.setAttribute("id", "avatar7");
  avatar7.setAttribute("class", "avatar-op");
  div7.append(avatar7);

  const div8 = document.createElement("div");
  div8.className = "avatar-div";
  const avatar8 = document.createElement("img");
  avatar8.setAttribute("src", ava8);
  avatar8.setAttribute("id", "avatar8");
  avatar8.setAttribute("class", "avatar-op");
  div8.append(avatar8);

  const avatarOptions = document.querySelector("#avatar-options");
  avatarOptions.append(div8, div7, div6, div5, div4, div3, div2, div1);
}
avatarSetup();
function renderChosenAvatar() {
  const avatarOptions = document.querySelectorAll(".avatar-div");
  avatarOptions.forEach((opt) =>
    opt.addEventListener("click", (e) => {
      const clickedAvatar = e.target;
      const chosenAvatar = document.querySelector("#chosen-avatar-icon");
      const chosenAvatarSticky = document.querySelector("#chosen-avatar-icon-sticky");
    //   console.log(chosenAvatar);
    //   console.log(clickedAvatar);
      chosenAvatar.src = clickedAvatar.src;
      chosenAvatarSticky.src = clickedAvatar.src;
    })
  );
}

renderChosenAvatar();

function renderChosenClass() {
  const classOptions = document.querySelectorAll(".class-image-container");     //querySelectorAll(".class-image-container");
  // console.log(classOptions)
  classOptions.forEach((opt) =>
    opt.addEventListener("click", (e) => {
      const clickedClass = e.target;
      // console.log(clickedClass);
      const chosenClass = document.querySelector("#chosen-class-icon");
      const chosenClassSticky = document.querySelector("#chosen-class-icon-sticky");
      chosenClass.src = clickedClass.src;
      chosenClassSticky.src = clickedClass.src;
      // document.querySelector("#class-name-under-avatar").textContent = document.querySelector("#class-options > div:nth-child(1) > li:nth-child(2)").textContent
    })
  );
}
renderChosenClass();


  
///////////STATS////////////
let programming = 0;
let life = 100;
let week = 1;
let phase = 1;
let day = 1;

function gameReset() {
  programming = 0;
  life = 100;
  week = 1;
  phase = 1;
  day = 1;
}


// renders the current week and phase, as well as your stats
function currentInfo(){

}



/////Stat checks
function mentalCheck() {
  if (life <= 0)gameOver();
}
function programmingCheck() {
switch(day)
{
case "1:
alert ("Day is 15");
break;
case "30":
alert ("Day is 30");
break;
case "45":
alert ("day 45");
break;
case "60":
alert ("");
break;
case "75":
alert ("");
break;
}
  if (programming >= check) return true;
  return false;
}
///// gameOver should increment the game over counter on the web page and display a game over screen
function gameOver(){
    
}

//////////EVENTS//////////////
// function getLearningEvent(){
//     fetch("http://localhost:3000/gameEvents")
//       .then(data => data.json())
//       .then(function (data){
//         return randomLearningEvent(data.learning);
//       }
// )
// }


// function randomLearningEvent(gameData) {
//     console.log(gameData[Math.round(Math.random() * (gameData.length - 1))]);
// }

// function getRelaxEvent(){
//   fetch("http://localhost:3000/gameEvents")
//     .then(data => data.json())
//     .then(data => (randomEvent(data.relax)));
// }

/////////////testing

/////////////// rendering OPTIONS ////////////////
function getLearningEvent(){
    fetch("http://localhost:3000/gameEvents")
      .then(data => data.json())
      .then(function (data){
        newRandomLearningEvent(data.learning);
      }
)}

function getRelaxEvent(){
    fetch("http://localhost:3000/gameEvents")
      .then(data => data.json())
      .then(function (data){
        newRandomRelaxEvent(data.relax);
      }
)}

function getRandomDayEvent(){
  fetch("http://localhost:3000/gameEvents")
    .then(data => data.json())
    .then(function (data){
      if(Math.round(Math.random==0))
      newRandomLearningEvent(data.learning);
      else
      newRandomRelaxEvent(data.relax);
    }
)}

function newRandomLearningEvent(gameData) {
  const event = (gameData[Math.round(Math.random() * (gameData.length - 1))]);

    const eventDiv = document.querySelector("#week-option-container-1");//// link div - not to keino
    
    const eventIcon = document.querySelector("#week-option-icon");
    eventIcon.src = event.image
    
    const eventTitle = document.querySelector("#week-option-name");
    eventTitle.textContent = event.option

    console.log(event.option);

    eventIcon.addEventListener("dblclick", () => {
      programming += randomValue(event.high, event.low);
      life -= randomValue(event.high, event.low);
      mentalCheck();
      if(day%15==0)
      programmingCheck(day*2-10);
    })
    allPhasesContainer.append(eventDiv);
  }

  function newRandomRelaxEvent(gameData) {
    const event = (gameData[Math.round(Math.random() * (gameData.length - 1))]);

    const eventDiv = document.querySelector("#week-option-container-1");//// link div - not to keino
    
    const eventIcon = document.querySelector("#week-option-icon");
    eventIcon.src = event.option
    
    const eventTitle = document.querySelector("#week-option-name");
    eventTitle.textContent = event.name
      
      eventIcon.addEventListener("dblclick", () => {
        life += randomValue(event.high,event.low);
        if(day%15==0)
      programmingCheck();
      })
      allPhasesContainer.append(eventDiv);
    }
// function newRandomEvent(gameData) {
//   const event = (gameData[Math.round(Math.random() * (gameData.length - 1))]);
//     const eventDiv = document.createElement("div");
//     const eventIcon = document.createElement("img");
//     eventIcon.className = "avatar";
//     eventIcon.src = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-01.png"
//     const eventTitle = document.createElement("h2");
//     eventTitle.textContent = event.option;
//     const allPhasesContainer = document.querySelector("#all-phases-container");
//     eventDiv.append(eventIcon, eventTitle);
//     eventIcon.addEventListener("dblclick", () => {
      
//     })
//     allPhasesContainer.append(eventDiv);
//   }
  
  function renderDayEvents() {
  getRelaxEvent();
  getLearningEvent();
  getRandomDayEvent();
}

renderDayEvents();

  /////////////////////////////relax

// function renderLearningEvent() {
//   const event = getLearningEvent();
//   console.log(event);
//   const eventDiv = document.createElement("div");
//   const eventIcon = document.createElement("img");
//   eventIcon.className = "avatar"
//   eventIcon.src = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-01.png"
//   const eventTitle = document.createElement("h2");
//   eventTitle.textContent = event[0];
//   const allPhasesContainer = document.querySelector("#all-phases-container");
//   eventDiv.append(eventIcon, eventTitle);
//   allPhasesContainer.append(eventDiv);
// }



////// testing


// const mentalEvent = randomEvent(learning);




// function renderRelaxEvents(relax) {
//   const index = randomEvent(relax)
//   const chosenEvent = relax[index]
//   const eventDiv = document.createElement("div");
//   const eventIcon = document.createElement("img");
//     eventIcon.src = "https://cdn2.iconfinder.com/data/icons/seo-accessibility-usability-2/256/Coding-512.png";
//   const eventTitle = document.createElement("h2");
//     eventTitle.textContent = relax.option;
//   const allPhasesContainer = document.querySelector("#all-phases-container");
//     eventDiv.append(eventIcon, eventTitle);
//     allPhasesContainer.append(eventDiv);
// }

// renderRelaxEvents();


document.addEventListener('keydown', async(e)=>{
  if (e.code === "Space"){
    await Tone.start();
  const synth = new Tone.Synth().toDestination();
  const now = Tone.now()
  synth.triggerAttackRelease("E4","4n.", now)
  synth.triggerAttackRelease("E4","4n", now+.5)
  synth.triggerAttackRelease("G4","4n.", now+.75)
  synth.triggerAttackRelease("E4","4n", now+1)
  synth.triggerAttackRelease("D4","4n", now+1.25)
  synth.triggerAttackRelease("C4","2n", now+1.5)
  synth.triggerAttackRelease("B3","2n", now+1.75)}
})

////////////////////////////// Launching Game Screen //////////////////////////////

const launchButton = document.querySelector("#launch-game-play-button");
launchButton.addEventListener("click", launchGame);

const choicesHistory = document.querySelector("#game-story")

function launchGame() {
  console.log("Launching");
  const beforeGameViewTitle = document.querySelector("#game-setup > div:nth-child(1)")
  beforeGameViewTitle.style.display = "none";
  const records = document.querySelector("#top-player-display")
  records.style.display = "none";
  const beforeGameViewBanner = document.querySelector("#sticky-icons-container")
  beforeGameViewBanner.style.display = "none";
  const beforeGameViewClass = document.querySelector("#class-setup")
  beforeGameViewClass.style.display = "none";
  document.querySelector("#choice-history-container").style.display = "none";
  document.querySelector("#all-phases-container").style.display = "inline-block";
  // const gameNext = document.querySelector("#next-game")
  gameNext.style.display = "block";
  choicesHistory.style.display = "block";
  const launchButton = document.querySelector("#launch-game-play-button");
  launchButton.style = "display: block;";
  const gamePhases = document.querySelector("#game-phases-container");
  gamePhases.style = "display: block;";
  // const afterGame = document.querySelector("#launch-game")
  // afterGame.style = "display: none;";
}

const backgroundStory = [
  "Welcome to the our Game!",
  "Step 1",
  "Step 2 ",
  "You're Ready!",
];

const gameNext = document.querySelector("#next-game")
const gameStart = document.querySelector("#starting-game")
let indexNew = - 1
gameNext.addEventListener("click", () => {
  console.log("Launching");
  indexNew = (indexNew + 1) % backgroundStory.length;

  const steps = document.createElement("li");
  steps.textContent = backgroundStory[indexNew];
  choicesHistory.append(steps);
  console.log(indexNew);
  console.log(backgroundStory.length - 1);
  if (indexNew === backgroundStory.length - 1) {
    // choicesHistory.style = "display: none;";
    document.querySelector("#choice-history-container").style.display = "block";
    document.querySelector("#all-phases-container").style.display = "block";
    gameNext.style.display = "none"; 
    gameStart.style.display = "block";
  }
})

  /// swaps continue button with launch game button after story ends////

;



// let testp = 0;
// let testl = 100
// for(let x = 1; x<75;x++){
// if(x%2){
// testp += randomValue(1,3);
// testl -= randomValue(3,4);}
// else
// testl += randomValue(2,3);
//       if(x%15==0){
//       console.log(testp + " p")
//       console.log(testl + " l")}
//     }
    

// function randomValue (high, low) {
//   return Math.round((Math.random() * high)+low);
// }
//test
day = 15;
programmingCheck();