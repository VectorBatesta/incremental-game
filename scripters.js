import { gameVariables } from "./listeners.js"




export function incrementar() {
    gameVariables.clicksFodido++;
    document.getElementsByTagName("button")[0].textContent = gameVariables.clicksFodido + " vez fodido";
}
window.incrementar = incrementar





const newElement = document.createElement("button");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element#svg_and_mathml

newElement.textContent = "Texto bisgolento!";
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
newElement.onclick = incrementar;

document.getElementsByTagName("body")[0].appendChild(newElement);



//const newElement = document.createElement("");



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

const fasterButton = document.createElement("button");
fasterButton.textContent = "faster!!";
fasterButton.onclick = faster;
document.getElementsByTagName("body")[0].appendChild(fasterButton);