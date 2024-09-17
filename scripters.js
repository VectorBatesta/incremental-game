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
//var intervaloSetado = setInterval(intervaloIncrementa, time);

function faster(){
    time--
    console.log(time)
}












//////////////////////////////////////////////
//constructors macros
//////////////////////////////////////////////

/**
 * creates new div for a button on the game
 *
 * @param {string} texto what will be written
 * @param {function} funcao what function it uses when clicking
 */
function newButton(id, texto, funcao){
    var newDiv = document.createElement("div");
    newDiv.id = id;
    newDiv.className = "interactableButton";
    newDiv.addEventListener("click", funcao);
    newDiv.textContent = texto;
    newDiv.style.visibility = "hidden";

    divEsq.appendChild(newDiv);
}






/**
 * loads a screen to each of the tabs
 * 
 * @param {int} tabNumber the number of the tab
 * 
 */
function screen(tabNumber){
    for (var i of document.getElementsByClassName("tab")){
        i.classList.remove("_visible");
    }

    switch(tabNumber){
        case 1: //main
            document.getElementById("tab1").classList.add("_visible");
            break;
        case 2: //
            document.getElementById("tab2").classList.add("_visible");
            break;
    }
}



screen(2)



//temp
newButton(btn_ponto, "clica pra ganha ponto", incrementar)
newButton(btn_fasterino, "MAI RAPIDO", faster)

















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



