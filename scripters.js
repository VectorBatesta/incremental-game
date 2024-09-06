

function incrementar() {
    console.log(gameVariables)
    gameVariables.clicksFodido++;
    document.getElementsByTagName("button")[0].textContent = gameVariables.clicksFodido + " vez fodido";
    //console.log(valor + " bananas")
}


const newElement = document.createElement("button");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element#svg_and_mathml

newElement.textContent = "Texto bisgolento!";
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
newElement.onclick = incrementar;

document.getElementsByTagName("body")[0].appendChild(newElement);



//const newElement = document.createElement("");