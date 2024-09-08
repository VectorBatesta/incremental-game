import { gameVariables } from "./listeners.js"




export function incrementar() {
    gameVariables.clicksFodido++;
    document.getElementsByTagName("button")[0].textContent = gameVariables.clicksFodido + " vez fodido";
}
window.incrementar = incrementar








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

const newline = document.createElement("br");
document.body.appendChild(newline)









///////////////////////////////////////////////////////
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



const newElement = document.createElement("button");
newElement.textContent = "Texto bisgolento!";
newElement.onclick = incrementar;

// document.body.appendChild(newElement);





//div com bagulhos
const dividendo = document.createElement("div");
dividendo.appendChild(newElement)
dividendo.className = 'banana'

document.body.appendChild(dividendo)