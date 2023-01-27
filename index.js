
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

    })
    }

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

const classButtonFromAvatarView = document.querySelector("#chose-class-from-avatar-view");

classButtonFromAvatarView.addEventListener("click", () => {
    renderClassView();
    renderChosenClass();
    
    const playerName = document.querySelector("#player-name-under-avatar") 
   
    const nameButton = document.querySelector("#name-button")
    playerName.textContent = nameButton.value
})


const tutorialButtonFromAvatarView = document.querySelector("#chose-tutorial-from-avatar-view");

tutorialButtonFromAvatarView.addEventListener("click",  () => {

    const tutorialContent = document.querySelector("#tutorial-content");
    tutorialContent.style = "display: block;";
    const avatarSetupDiv = document.querySelector("#avatar-setup");
    avatarSetupDiv.style.display = "none";
    const gameContent = document.querySelector("#game-setup")
    gameContent.style.display = "none";
});

const avatarButtonFromClassView = document.querySelector("#go-back-to-avatar-from-class-view"
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
  // const playButton = document.createElement("button");
  // playButton.textContent = "Start New Game";
  // // const playButton = document.querySelector("#home > div:nth-child(1) > img")
  // playButton.className = "play-button";
  // playButton.id = "play-button";

  // const tutorialButton = document.createElement("button");
  // tutorialButton.textContent = "How to Play";
  // tutorialButton.className = "tutorial-button";
  // tutorialButton.id = "tutorial-button"; 

  const launchFromHome = document.querySelector("#launch-from-home > img");
  const tutorialFromHome = document.querySelector("#tutorial-from-home > img");

  // const homeDiv = document.querySelector("#main-game-view");
  // homeDiv.append(tutorialButton, playButton);

  launchFromHome.addEventListener("click", () => {
    
    const launchGame = document.querySelector("#gameplay");
    launchGame.style = "display: block;";
    const setupGame = document.querySelector("#game-setup");
    setupGame.style = "display: block;";
    const homeButtonsDiv = document.querySelector("#main-game-view");
    homeButtonsDiv.style = "display: none;";
    const homeDiv = document.querySelector("#home");
    homeDiv.style.display = "none";
    launchFromHome.style = "display: none;";
    tutorialFromHome.style = "display: none;";
    document.querySelector("#tutorial-txt").style.display = "none";
    document.querySelector("#first-text").style.display = "none";
    // const launchButton = document.querySelector("#launch-game-play-button");
    // launchButton.style = "display: none;";
    const gamePhases = document.querySelector("#game-phases-container");
    gamePhases.style = "display: none;";
    const afterGame = document.querySelector("#launch-game")
    afterGame.style = "display: block;";
    document.querySelector("#sticky-icons-container").style.display = "inline-block";
  });



function launchGameAfterSetupAndIntroStory () {
  const launchGameBtn = document.querySelector("#launch-game-play-button")
  const stickyIconsContainer = document.querySelector("#sticky-icons-container")

  launchGameBtn.addEventListener("click", () => {
    stickyIconsContainer.style.display = "inline-block";
})
  }

launchGameAfterSetupAndIntroStory();

  tutorialFromHome.addEventListener("click", () => {
    const tutorialContent = document.querySelector("#tutorial-content");
    tutorialContent.style = "display: block;";
    const homeButtonsDiv = document.querySelector("#main-game-view");
    homeButtonsDiv.style = "display: none;";
    launchFromHome.style = "display: none;";
    tutorialFromHome.style = "display: none;";
    // const homePrompt1 = document.querySelectorAll("#tutorial-from-home");
    // homePrompt1.style = "display: none;"
    // document.querySelector("#first-text").style = "display: none;";
    // document.querySelector("#tutorial-txt").textContent.style.display = "none";
    // document.querySelector("#first-text").style.display = "none";
    document.querySelector("#tutorial-from-home").style.display = "none";
    document.querySelector("#launch-from-home").style.display = "none";
  });
}

/////////////// TUTORIAL ////////////////

///step by step tutorial goes in this array
const tutorialStory = [
  "Welcome to the Tutorial!",
  "You have a Programming stat, and a Life stat. If your Life stat hits zero you lose"
  ,"and if you fail a programming project you lose.",
  "To Increase your programming, you must do tasks like study,",
  "and to increase you life, you must relax. As you program more you loe life so be sure to watch it.",
  "To select an event you need to double click it.",
  "Every 15 days, you will do a programming project. Good Luck!!!",
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
  document.querySelector("#id").style.display = "none";
  document.querySelector("#first-text").style.display = "none";
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
const ava9 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-09.png";
const ava10 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-10.png";
const ava11 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-11.png";
const ava12 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-12.png";
const ava13 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-13.png";
const ava14 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-14.png";
const ava15 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-15.png";
const ava16 = "/Player-Avatars/Artboards_Diversity_Avatars_by_Netguru-16.png";

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

  const div9 = document.createElement("div");
  div9.className = "avatar-div";
  const avatar9 = document.createElement("img");
  avatar9.setAttribute("src", ava9);
  avatar9.setAttribute("id", "avatar9");
  avatar9.setAttribute("class", "avatar-op");
  div9.append(avatar9);

  const div10 = document.createElement("div");
  div10.className = "avatar-div";
  const avatar10 = document.createElement("img");
  avatar10.setAttribute("src", ava10);
  avatar10.setAttribute("id", "avatar10");
  avatar10.setAttribute("class", "avatar-op");
  div10.append(avatar10);

  const div11 = document.createElement("div");
  div11.className = "avatar-div";
  const avatar11 = document.createElement("img");
  avatar11.setAttribute("src", ava11);
  avatar11.setAttribute("id", "avatar11");
  avatar11.setAttribute("class", "avatar-op");
  div11.append(avatar11);

  const div12 = document.createElement("div");
  div12.className = "avatar-div";
  const avatar12 = document.createElement("img");
  avatar12.setAttribute("src", ava12);
  avatar12.setAttribute("id", "avatar12");
  avatar12.setAttribute("class", "avatar-op");
  div12.append(avatar12);

  const div13 = document.createElement("div");
  div13.className = "avatar-div";
  const avatar13 = document.createElement("img");
  avatar13.setAttribute("src", ava13);
  avatar13.setAttribute("id", "avatar13");
  avatar13.setAttribute("class", "avatar-op");
  div13.append(avatar13);

  const div14 = document.createElement("div");
  div14.className = "avatar-div";
  const avatar14 = document.createElement("img");
  avatar14.setAttribute("src", ava14);
  avatar14.setAttribute("id", "avatar14");
  avatar14.setAttribute("class", "avatar-op");
  div14.append(avatar14);

  const div15 = document.createElement("div");
  div15.className = "avatar-div";
  const avatar15 = document.createElement("img");
  avatar15.setAttribute("src", ava15);
  avatar15.setAttribute("id", "avatar15");
  avatar15.setAttribute("class", "avatar-op");
  div15.append(avatar15);

  const div16 = document.createElement("div");
  div16.className = "avatar-div";
  const avatar16 = document.createElement("img");
  avatar16.setAttribute("src", ava16);
  avatar16.setAttribute("id", "avatar16");
  avatar16.setAttribute("class", "avatar-op");
  div16.append(avatar16);

  const avatarOptions = document.querySelector("#avatar-options");
  avatarOptions.append(div16,div15,div14,div13,div12,div11, div10, div9, div8, div7, div6, div5, div4, div3, div2, div1);
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
let day = 1;


/////Stat checks
function mentalCheck() {
  if (life <= 0)gameOver();
}
function programmingCheck() {
  let check;
  switch(day)
  {
  case 15:
    check = 20
  // break;
  // case 30:
  //   check = 45
  // break;
  // case 45:
  //   check = 75
    if(programming>=check)
    gameWin()
    else
    gameOver()
  break;
  }
  if (programming >= check)
  return false;
  else
  return true;
}


/////////////// rendering OPTIONS ////////////////
function getLearningEvent1(){
    fetch("http://localhost:3000/gameEvents")
      .then(data => data.json())
      .then(function (data){
        newRandomLearningEvent1(data.learning);
      }
)}

function getLearningEvent2(){
  fetch("http://localhost:3000/gameEvents")
    .then(data => data.json())
    .then(function (data){
      newRandomLearningEvent2(data.learning);
    }
)}

function getRelaxEvent1(){
    fetch("http://localhost:3000/gameEvents")
      .then(data => data.json())
      .then(function (data){
        newRandomRelaxEvent1(data.relax);
      }
)}

function getRelaxEvent2(){
  fetch("http://localhost:3000/gameEvents")
    .then(data => data.json())
    .then(function (data){
      newRandomRelaxEvent2(data.relax);
    }
)}



function randomValue (high, low) {
  return Math.round((Math.random() * (high))+low);
}

function newRandomLearningEvent1(gameData) {
  let event = (gameData[Math.round(Math.random() * (gameData.length - 1))]);

    const eventDiv = document.querySelector("#week-option-container-1");//// link div - not to keino
    
    const eventIcon = document.querySelector("#week-option-icon-1");
    eventIcon.src = event.image
    
    const eventTitle = document.querySelector("#week-option-name-1");
    eventTitle.textContent = event.option


    eventDiv.addEventListener("dblclick", () => {
      day++;
      programming += parseInt(event.high);
      life -= parseInt(event.high) + parseInt(event.low);
      mentalCheck();
      const choiceLogCopy = document.createElement("div");
        choiceLogCopy.className = "log-style"
        
        const imageCopy = document.createElement("img");
        imageCopy.src = event.image;
        imageCopy.className = "event-avatar";
        
        const titleCopy = document.createElement("h3");
        titleCopy.textContent = event.option;
        titleCopy.className = "log-title";

        const message = document.createElement("li");
        message.textContent = event.text;
        message.className = "log-message";
        
        choiceLogCopy.append(imageCopy, titleCopy, message)
        document.querySelector("#choice-div").append(choiceLogCopy);

        event = (gameData[Math.round(Math.random() * (gameData.length - 1))]);
        eventIcon.src = event.image
        eventTitle.textContent = event.option
        console.log(programming + " " + life);
      
        document.querySelector("#burnout-in-stats-container-Burnout").textContent = document.querySelector("#burnout-in-stats-container-Burnout").textContent.replaceAll(/[0-9]/g, ``)
        document.querySelector("#programing-in-stats-container").textContent = document.querySelector("#programing-in-stats-container").textContent.replaceAll(/[0-9]/g, ``)
        document.querySelector("#burnout-in-stats-container-Burnout").textContent += life;
        document.querySelector("#programing-in-stats-container").textContent += programming;
        if(day%15==0 && programmingCheck())
          gameOver();
    })
  }

  function newRandomLearningEvent2(gameData) {
    let event = (gameData[Math.round(Math.random() * (gameData.length - 1))]);
  
      const eventDiv = document.querySelector("#week-option-container-3");//// link div - not to keino
      
      const eventIcon = document.querySelector("#week-option-icon-3");
      eventIcon.src = event.image
      
      const eventTitle = document.querySelector("#week-option-name-3");
      eventTitle.textContent = event.option
  
      eventDiv.addEventListener("dblclick", () => {
        day++
        programming += parseInt(event.high);
        life -= parseInt(event.high) + parseInt(event.low);
        mentalCheck();
        const choiceLogCopy = document.createElement("div");
        choiceLogCopy.className = "log-style"
        const imageCopy = document.createElement("img");
        imageCopy.src = event.image;
        imageCopy.className = "event-avatar"
        const titleCopy = document.createElement("h3");
        
        const message = document.createElement("li");
        message.textContent = event.text;
        message.className = "log-message";

        titleCopy.textContent = event.option;
        choiceLogCopy.append(titleCopy, imageCopy)
        document.querySelector("#choice-div").append(choiceLogCopy);

        event = (gameData[Math.round(Math.random() * (gameData.length - 1))]);
        eventIcon.src = event.image
        eventTitle.textContent = event.option
        console.log(programming+" "+life);
        if(day%15==0 && programmingCheck())
        gameOver();
        document.querySelector("#burnout-in-stats-container-Burnout").textContent = document.querySelector("#burnout-in-stats-container-Burnout").textContent.replaceAll(/[0-9]/g, ``)
        document.querySelector("#programing-in-stats-container").textContent = document.querySelector("#programing-in-stats-container").textContent.replaceAll(/[0-9]/g, ``)
        document.querySelector("#burnout-in-stats-container-Burnout").textContent += life;
        document.querySelector("#programing-in-stats-container").textContent += programming;
        // renderDayEvents();
      })
    }

  function newRandomRelaxEvent1(gameData) {
    let event = (gameData[Math.round(Math.random() * (gameData.length - 1))]);

    const eventDiv = document.querySelector("#week-option-container-2");//// link div - not to keino
    
    const eventIcon = document.querySelector("#week-option-icon-2");
    eventIcon.src = event.image
    
    const eventTitle = document.querySelector("#week-option-name-2");
    eventTitle.textContent = event.option
      
      eventDiv.addEventListener("dblclick", () => {
        day++
        life += parseInt(event.high) + parseInt(event.low);

        const choiceLogCopy = document.createElement("div");
        choiceLogCopy.className = "log-style"
        const imageCopy = document.createElement("img");

        imageCopy.src = event.image;
        imageCopy.className = "event-avatar"
        const titleCopy = document.createElement("h3");

        titleCopy.textContent = event.option;
        choiceLogCopy.append(titleCopy, imageCopy)
        document.querySelector("#choice-div").append(choiceLogCopy);
        
        const message = document.createElement("li");
        message.textContent = event.text;
        message.className = "log-message";

        event = (gameData[Math.round(Math.random() * (gameData.length - 1))]);
        eventIcon.src = event.image
        eventTitle.textContent = event.option
        console.log(programming+" "+life);
        if(day%15==0 && programmingCheck())
        gameOver();
        document.querySelector("#burnout-in-stats-container-Burnout").textContent = document.querySelector("#burnout-in-stats-container-Burnout").textContent.replaceAll(/[0-9]/g, ``)
        document.querySelector("#programing-in-stats-container").textContent = document.querySelector("#programing-in-stats-container").textContent.replaceAll(/[0-9]/g, ``)
        document.querySelector("#burnout-in-stats-container-Burnout").textContent += life;
        document.querySelector("#programing-in-stats-container").textContent += programming;
        // renderDayEvents();
      })
    }

    function newRandomRelaxEvent2(gameData) {
      let event = (gameData[Math.round(Math.random() * (gameData.length - 1))]);
  
      const eventDiv = document.querySelector("#week-option-container-4");//// link div - not to keino
      
      const eventIcon = document.querySelector("#week-option-icon-4");
      eventIcon.src = event.image
      const eventTitle = document.querySelector("#week-option-name-4");
      eventTitle.textContent = event.option

      eventDiv.addEventListener("dblclick", () => {
      day++  
      life += parseInt(event.high) + parseInt(event.low);
      console.log(programming + " " + life);
      const choiceLogCopy = document.createElement("div");
      choiceLogCopy.className = "log-style"
      const imageCopy = document.createElement("img");
      imageCopy.src = event.image;
      imageCopy.className = "event-avatar"
      const titleCopy = document.createElement("h3");
      
      const message = document.createElement("li");
      message.textContent = event.text;
      message.className = "log-message";
      titleCopy.textContent = event.option;
      choiceLogCopy.append(titleCopy, imageCopy)
      document.querySelector("#choice-div").append(choiceLogCopy);
      event = (gameData[Math.round(Math.random() * (gameData.length - 1))]);
        eventIcon.src = event.image
        eventTitle.textContent = event.option

        document.querySelector("#choice-div").append(choiceLogCopy);
          if(day%15==0 && programmingCheck())
        gameOver();
        document.querySelector("#burnout-in-stats-container-Burnout").textContent = document.querySelector("#burnout-in-stats-container-Burnout").textContent.replaceAll(/[0-9]/g, ``)
        document.querySelector("#programing-in-stats-container").textContent = document.querySelector("#programing-in-stats-container").textContent.replaceAll(/[0-9]/g, ``)
        document.querySelector("#burnout-in-stats-container-Burnout").textContent += life;
        document.querySelector("#programing-in-stats-container").textContent += programming;
        // renderDayEvents();
        })
        
      }
 

  function renderDayEvents() {
  getRelaxEvent1();
  getRelaxEvent2();
  getLearningEvent1();
  getLearningEvent2();
}
renderDayEvents();


document.addEventListener('keydown', async(e)=>{
  if (e.code === "Space"){
    await Tone.start();
  const synth = new Tone.Synth().toDestination();
  const now = Tone.now()
  synth.triggerAttackRelease("E4","4n.", now)
  synth.triggerAttackRelease("E4","4n", now+.75)
  synth.triggerAttackRelease("G4","4n.", now+1)
  synth.triggerAttackRelease("E4","4n", now+1.4)
  synth.triggerAttackRelease("D4","4n", now+1.75)
  synth.triggerAttackRelease("C4","2n", now+2)
  synth.triggerAttackRelease("B3","2n", now+3 )}
})

////////////////////////////// Launching Game Screen //////////////////////////////

const launchButton = document.querySelector("#launch-game-play-button");
launchButton.addEventListener("click", launchGame);

const choicesHistory = document.querySelector("#game-story")

function launchGame() {
  console.log("Launching");
  
  const beforeGameViewTitle = document.querySelector("#game-setup > div:nth-child(1)")
  beforeGameViewTitle.style.display = "inline-block";
  
  const records = document.querySelector("#top-player-display")
  records.style.display = "block";
  
  const beforeGameViewBanner = document.querySelector("#sticky-icons-container")
  beforeGameViewBanner.style.display = "inline-block";
  
  const beforeGameViewClass = document.querySelector("#class-setup")
  beforeGameViewClass.style.display = "none";
  document.querySelector("#choice-history-container").style.display = "none";
  document.querySelector("#all-phases-container").style.display = "none";
  // const gameNext = document.querySelector("#next-game")
  gameNext.style.display = "block";
  choicesHistory.style.display = "block";
  
  document.querySelector("#avatar-setup").style.display = "none";
  document.querySelector("#class-setup").style.display = "none";
  document.querySelector("#launch-game-play-button").style.display = "none";



  const launchButton = document.querySelector("#launch-game-play-button");
  launchButton.style = "display: none;";
  
  const gamePhases = document.querySelector("#game-phases-container");
  gamePhases.style = "display: block;";

  const launchStory = document.querySelector("#launch-game");
    launchStory.style = "display: block;";
  // const afterGame = document.querySelector("#launch-game")
  // afterGame.style = "display: none;";
}

const backgroundStory = [
  "Welcome to the our Game!",
  "You just got accepted to Roundwood School",
  "You weren't able to afford it however, so you needed to take a loan out.",
  "Your credit sucks though. You went to the only place you knew to help.",
  "The Mafia. You must finish school or else the mafia will have you sleeping with the fishes!",
  "Lets Go!!",
];

const gameNext = document.querySelector("#next-game")
const gameStart = document.querySelector("#starting-game")

gameStart.addEventListener("click", () => {
  choicesHistory.style = "display: block;";
  document.querySelector("#sticky-icons-container").style.display = "block";
  document.querySelector("#choice-history-container").style.display = "block";
  document.querySelector("#all-phases-container").style.display = "block";
  document.querySelector("#launch-game").style.display = "none";
  gameNext.style.display = "none"; 
  gameStart.style.display = "block";
})

let indexNew = - 1
gameNext.addEventListener("click", () => {
  console.log("Launching");
  indexNew = (indexNew + 1) % backgroundStory.length;

  const launchGameStoryContainer = document.querySelector("#launch-game")


  const steps = document.createElement("li");
  steps.textContent = backgroundStory[indexNew];
  launchGameStoryContainer.append(steps);
  if (indexNew === backgroundStory.length - 1) {
    gameNext.style.display = "none";
    gameStart.style.display = "block";
  }

  
})

  /// swaps continue button with launch game button after story ends////


document.querySelector('#name').addEventListener("submit", (e) => e.preventDefault());//prevents the enter button on the name submission from refreshing the page

//document.querySelector("#programing-in-stats-container")

function gameWin() {
//needs to post a win to db, call the unRender function, and render a game win img
//you are a mafia cat hacking specialist https://img0.etsystatic.com/030/0/6532215/il_570xN.546297722_9dox.jpg
  unRender();
  const mafiaCat = document.createElement("img");
  mafiaCat.src = "https://i.pinimg.com/564x/2c/77/5b/2c775bb7dac682108f0c31ad5c2acd8f.jpg"
  mafiaCat.alt = "You are a Mafia Cat Hacking Specialist";
  mafiaCat.style.textAlign = "center";
  mafiaCat.style.display = "inline-block";
  const winText = document.createElement('p');
  winText.textContent = "You are a Mafia Cat Hacking Specialist"
  const body = document.querySelector("body")
  body.append(mafiaCat, winText);
  body.style.backgroundColor = "black";
  body.style.textAlign = "center";
  body.style.color = "white";
  body.style. fontsize = "200px";
  
  // console.log(document.querySelector("#player-name-under-avatar").textContent);
  // console.log(document.querySelector("#chosen-avatar-icon-sticky").src);
  // console.log(parseInt(programming) + parseInt(life));

  fetch("http://localhost:3000/records", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      name: document.querySelector("#player-name-under-avatar").textContent,
      image: document.querySelector("#chosen-avatar-icon-sticky").src,
      score: parseInt(programming) + parseInt(life),
      prog: programming,
      bo: life,
      classImage:document.querySelector("#chosen-avatar-icon-sticky").src
    })
  })
}


function gameOver() {
  //needs to call unRender function and render a game over img
  unRender();
  const loseImg = document.createElement("img");
  loseImg.src = "https://t4.ftcdn.net/jpg/03/34/11/39/360_F_334113986_zAt0T3AjRnJ1TfO9u0u5WWekjiO0Fht5.jpg"
  loseImg.alt="You lose, good day sir! I SAID GOOD DAY!"
  loseImg.style.textAlign = "center";
  loseImg.style.display = "inline-block";
  const loseText = document.createElement('p')
  loseText.textContent = "It's all there! Black and white, clear as crystal! You stole from the mafia! You bumped into Roundwood School, which now has to be washed and sterilized, so you GET... NOTHING! YOU LOSE! GOOD DAY, SIR!"
  const body = document.querySelector("body")
  body.append(loseImg, loseText);
  body.style.backgroundColor = "black";
  body.style.textAlign = "center";
  body.style.color = "white";
  body.style. fontsize = "200px";
}

//const playerName = document.querySelector("#player-name-under-avatar")

function unRender(){
  choicesHistory.style = "display: none;";
  document.querySelector("#sticky-icons-container").style.display = "none";
  document.querySelector("#choice-history-container").style.display = "none";
  document.querySelector("#all-phases-container").style.display = "none";
  document.querySelector("#game-setup").style.display = "none";
  document.querySelector("#top-player-display").style.display = "none";
  gameStart.style.display = "none";
}
