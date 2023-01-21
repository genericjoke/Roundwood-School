

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




getCallRecords()

////// Records / top score section///////////////////////////////

function getCallRecords(){
    fetch("http://localhost:3000/records")
    .then(response => response.json())
    .then(data => sortRecords(data))
}

function sortRecords(records) {
    /// sorts the record. Idt we need top 5. The div will reset to the top but all players will be listed, lower scores hidden
    const topFive = records.sort((a, b) => b.score - a.score);
    console.log(topFive)
        topFive.forEach((player) => {
        
            const playerContainer = document.createElement("div")
            playerContainer.className = "top-five-player"
            
            const playerAvatar = document.createElement("img")
            playerAvatar.src = player.image
            console.log(playerAvatar)
            playerAvatar.className = "avatar"    
            
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
            const topPlayerDisplay = document.querySelector("#top-player-display")
            topPlayerDisplay.scrollTop = 0; //resets scroll to top, on refresh only unfortunately.
            topPlayerDisplay.append(playerAvatar, playerContainer)
    })
}

//Areeb blah







