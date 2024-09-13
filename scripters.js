import { gameVariables } from "./listeners.js"




export function incrementar() {
    gameVariables.recurso++;
    document.getElementById("recurso").textContent = gameVariables.recurso + " pontos";
}
window.incrementar = incrementar

function intervaloIncrementa(){
    incrementar()
    clearInterval(intervaloSetado)
    intervaloSetado = setInterval(intervaloIncrementa, time)
}

var time = 1000
var intervaloSetado = setInterval(intervaloIncrementa, time);

function faster(){
    time--
    console.log(time)
}







let divEsq = document.getElementById("divEsq");
let divDir = document.getElementById("divDir");


//////////////////////////////////////////////
//constructors
//////////////////////////////////////////////
function newInteractable(){
    var newDiv = document.createElement("div");
    newDiv.className = "interactableButton";
    newDiv.addEventListener("click", incrementar)
    newDiv.textContent = "clica pra ganha ponto"

    divEsq.appendChild(newDiv);
}


//temp
newInteractable()























////////////////////////////////////////////////////////////
// const fasterButton = document.createElement("button");
// fasterButton.textContent = "faster!!";
// fasterButton.onclick = faster;
// document.getElementsByTagName("body")[0].appendChild(fasterButton);

// const newline = document.createElement("br");
// document.body.appendChild(newline)

// const canvaTest = document.createElement("canvas");
// canvaTest.id = 'canvaTestID'
// canvaTest.width = 300;
// canvaTest.height = 300;
// canvaTest.style = "border:1px solid grey";
// document.getElementsByTagName("body")[0].appendChild(canvaTest)

// //temp
// canvaTest.height = 200;

// //none = disappear
// canvaTest.style.display = 'a'
///////////////////////////////////////////////////////



