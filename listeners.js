window.addEventListener("DOMContentLoaded", (e) => game_onLoad(e));
window.addEventListener("beforeunload", (e) => game_onClose(e));




export let gameVariables = {
    recurso: 0,
    lore: ["You wake up in the middle of nowhere."],
    status: [

    ],
    resources: {
        test: 1,
        test2: 10
    }
}

/**
 * wipes save
 * 
 * @param {object} gameVariables the game's variables
 */
export function saveWipe(){
    gameVariables = {
        recurso: 0,
        lore: ["You wake up in the middle of nowhere."],
        status: [
        
        ],
        resources: {
            test: 1,
            test2: 10
        }
    }
}






function game_onLoad(e) {
    let getSave = JSON.parse(localStorage.getItem("saveStorage"));
    if (getSave){ //loads save if there is one
        gameVariables = getSave;
    }

    
    let loreListDivs = document.getElementsByClassName("loreList");

    for (let loreList of loreListDivs){ //ul
        for (let i of gameVariables.lore){ //li
            let lore = document.createElement("li");
            lore.className = "lore";
            lore.textContent = i;
            loreList.appendChild(lore);
        }
    }
}

function game_onClose(e){
    localStorage.setItem("saveStorage", JSON.stringify(gameVariables))
}












/////TODO:
//function updateLore() - self-calls
//function updateStatus() - self-calls
//function updateButtons() - self-calls
//function updateResources() - self-calls











let updateResourcesInterval = setInterval(updateResources, 100);
function updateResources(){
    const resources = Object.keys(gameVariables.resources);

    for (let i = 0; i < resources.length; i++) {
        let listItem = document.getElementsByClassName(resources[i])[0];
    
        if (!listItem) {
            listItem = document.createElement('li');
            listItem.classList.add(resources[i]);
            
            for (let iterList of document.getElementsByClassName("resourceList")){
                iterList.appendChild(listItem);
            }
        }
    
        listItem.textContent = `${resources[i]}: ${gameVariables.resources[resources[i]]}`;
    }
}