window.addEventListener("DOMContentLoaded", (e) => game_onLoad(e));
window.addEventListener("beforeunload", (e) => game_onClose(e));




let wipedSave = {
    status: {

    },
    modifiers: {
        focusHindrance: 100 //less = focus more efficient
    },
    resources: {
        essence: [0, 10]
    },
    wipingSave: true
}

//this will get the things above even if it's the first time starting up the game
let gameVariables = wipedSave;

/**
 * wipes save.
 * 
 * @param {object} gameVariables the game's variables
 */
function saveWipe(){
    gameVariables = wipedSave;

    console.log(gameVariables.wipingSave);

    location.reload(true);
}






function game_onLoad(e) {
    let getSave = JSON.parse(localStorage.getItem("saveStorage"));

    if (getSave){ //loads save if there is one
        gameVariables = getSave;
    }
    else{ //if new save:
    }




    
    let loreList = document.getElementById("loreList");
    let welcomeLore = document.createElement("li");
    welcomeLore.classList.add("lore");

    if (gameVariables.wipingSave){
        welcomeLore.classList.add("newLore");
        welcomeLore.textContent = "You wake up in the middle of nowhere.";

        gameVariables.wipingSave = false;
    }
    else{
        welcomeLore.textContent = "You wake up where you left off.";
    }
    loreList.appendChild(welcomeLore);
}

function game_onClose(e){
    localStorage.setItem("saveStorage", JSON.stringify(gameVariables))
}












/////TODO:
//function updateLore() - self-calls
//function updateStatus() - self-calls
//function updateButtons() - self-calls
//function updateResources() - self-calls



///////////////////////////////////////////////
// variable manipulation or automatic things //
///////////////////////////////////////////////


function fixMaxAll(){
    for (let resource in gameVariables.resources){
        if (gameVariables.resources[resource][0] > gameVariables.resources[resource][1])
            gameVariables.resources[resource][0] = gameVariables.resources[resource][1];
    }
}









/**
 * goes through all the text banners of resources on the screen and modifies them according to the resources the player have
 */
function updateResourcesDisplay(){
    const resources = Object.keys(gameVariables.resources);


    for (let i = 0; (i < resources.length) && gameVariables.resources[resources[i]][0] > 0; i++) {
        let listItem = document.getElementsByClassName(resources[i])[0];
    
        if (!listItem) {
            listItem = document.createElement('li');
            listItem.classList.add(resources[i]);
            
            for (let iterList of document.getElementsByClassName("resourceList")){
                iterList.appendChild(listItem);
            }
        }
    
        listItem.textContent = `${resources[i].toUpperCase()}: ${gameVariables.resources[resources[i]][0].toFixed(2)}`;
    }
}
let updateResourcesInterval = setInterval(updateResourcesDisplay, 100);






/**
 * goes through all the effect banners and modify them according to the modifiers that the player have
 */
function updateEffectsDisplay(){
    let statuses = document.getElementsByClassName("status");
    let element;

    function macro(num){
        return "a"
    }

    //goes through all status banners that are divs and have ULs with one or more LIs
    for (let iterStatuses of statuses){
        
        switch (iterStatuses.id){
            case "focusHindrance":
                //TODO: prettier this shet
                element = iterStatuses.querySelectorAll(".effect_buff_text")[0].textContent = "(buff0) Focus interference: " + gameVariables.modifiers.focusHindrance;

                element = iterStatuses.querySelectorAll(".effect_buff_text")[1].textContent = "(buff1) Focus interference: " + gameVariables.resources.essence[0].toFixed(2);
                break;

            default:
                break;
        }
    }
}
let updateEffectsInterval = setInterval(updateEffectsDisplay, 100);











//TODO

/**
 * does various detections on the variables and/or other things that may happen when the player reach somewhere
 */
function progressionDetection(){

}
let doProgressionDetection = setInterval(progressionDetection, 100);