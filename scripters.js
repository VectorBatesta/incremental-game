import { gameVariables, saveWipe } from "./listeners.js"




export function incrementar() {
    gameVariables.resources.test++;
    updateResources()
}

// function intervaloIncrementa(){
//     incrementar()
//     clearInterval(intervaloSetado)
//     intervaloSetado = setInterval(intervaloIncrementa, time)
// }

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

    document.getElementById("tab1_divEsq").appendChild(newDiv);
}





/**
 * creates an effect element
 * 
 * 
 */
function newStatusEffect(effectId, imageName, title, buffs){
    let statusLists = document.getElementsByClassName("statusList");

    for (let statusList of statusLists){
        //creating variables and structure
        let effect = document.createElement("div");
        effect.id = effectId;
        effect.className = "status";

        //img
        let effect_image = document.createElement("img");
        effect_image.src = imageName
        effect_image.width = "60";
        effect_image.height = "60";

        //description title
        let effect_descr = document.createElement("div");
        let effect_descr_title = document.createElement("span");
        effect_descr_title.textContent = title

        //description's buff list
        let effect_descr_buffs = document.createElement("ul");
        for(let i = 0; i < buffs.length; i++){
            let newLi = document.createElement("li");
            newLi.id = "buff" + i;
            newLi.textContent = buffs[i];

            effect_descr_buffs.appendChild(newLi);
        }


        //
        //
        ////////////
        effect_descr.appendChild(effect_descr_title);
        effect_descr.appendChild(effect_descr_buffs);

        effect.appendChild(effect_image);
        effect.appendChild(effect_descr);

        statusList.appendChild(effect);
        ////////////
        //
        //
    }
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

    let tabName = "tab";
    tabName = tabName + tabNumber;

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

document.getElementById("btn_ponto").classList.add("_visible")
// document.getElementById("btn_fasterino").classList.add("_visible")
document.getElementById("btn_saveWipe").classList.add("_visible")



newStatusEffect("test", "imgs/broken_bone.png", "title test", ["bufftest", "bufftest2"])



