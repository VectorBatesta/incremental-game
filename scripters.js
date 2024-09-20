import { gameVariables, saveWipe } from "./listeners.js"




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

let time = 1000
//let intervaloSetado = setInterval(intervaloIncrementa, time);

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
function newButton(IDname, texto, funcao){
    let newDiv = document.createElement("div");
    newDiv.id = IDname;
    newDiv.className = "interactableButton";
    newDiv.addEventListener("click", funcao);
    newDiv.textContent = texto;
    newDiv.style.visibility = "hidden";

    document.getElementById("tab1_divEsq").appendChild(newDiv);
}






/**
 * loads a screen to each of the tabs
 * 
 * @param {int} tabNumber the number of the tab
 * 
 */
function screen(tabNumber){
    for (let i of document.getElementsByClassName("tab")){
        i.classList.remove("_visible");
    }

    let tabName = "tab"
    tabName = tabName + tabNumber

    document.getElementById(tabName).classList.add("_visible");
}









/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////





screen(1)



//temp
newButton("btn_ponto", "clica pra ganha ponto", incrementar)
newButton("btn_fasterino", "MAI RAPIDO", faster)
newButton("btn_saveWipe", "TERMINATE SAVE", saveWipe)

document.getElementById("btn_ponto").style.visibility = "visible"
document.getElementById("btn_fasterino").style.visibility = "visible"
document.getElementById("btn_saveWipe").style.visibility = "visible"








