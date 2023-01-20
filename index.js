renderGame();

const currPhaseWeek = "0.1"
const player = "Choose a new player"

function renderGame(game){
    const div = document.createElement("div");
    div.className = " ";
  
    const h2 = document.createElement("h2");
    h2.textContent = game.name;
  
    const p = document.createElement("p");
    p.textContent = " ";
  
    const button = document.createElement("button");
    button.textContent = " ";
    button.className = " ";
    button.id = game.id;

    const roundwoodimg = document.createElement("img");  ////// Background Image for the game 
    img.className = "roundwoodimg";
    img.src = game.image;
}

function getCallPhases(){
    fetch("http://localhost:3000/phases")
    .then(data => console.log(data))
}

function getCallChar(){
    fetch("http://localhost:3000/characters")
    .then()
}

function getCallRecords(){
    fetch("http://localhost:3000/records")
    .then()
}

function sortRecords(record){
    const sorted = []:
    for(let i = 0, i < records.length; i++) {
        if (record.score[i] > record.score[i + 1]) {
            sorte
        }
    }}

    

    

function mergeSort(list){
    if(list.length<2)
      return list
    let middle = math.floor(list.length/2);
    let left = mergeSort(list.slice(0, mid));
let right = mergeSort(list.slice(mid));
   return merge(left, right)
}
function merge(smolList1, smolList2){
let result = [];
while (smolList1.length > 0 && smolList2.length > 0)
resultList.push(smolList1[0] < smolList2[0]? smolList1.shift() : smolList2.shift());
return result.concat(smolList1.length? smolList1 : smolList2);
}
