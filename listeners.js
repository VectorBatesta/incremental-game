window.addEventListener("DOMContentLoaded", (e) => game_onLoad(e));
window.addEventListener("beforeunload", (e) => game_onClose(e));




export let gameVariables = {
    recurso: 0,
    lore: ["test", "teste"]
}

/**
 * wipes save
 * 
 * @param {object} gameVariables the game's variables
 */
export function saveWipe(){
    gameVariables = {
        recurso: 0,
        lore: ["> there once was a man from Thahrhxhrahxhxhasx and he tried eating batatas... then he died a death", "teste"]
    }
}






function game_onLoad(e) {
    if (JSON.parse(localStorage.getItem("saveStorage"))){
        gameVariables = JSON.parse(localStorage.getItem("saveStorage"));
    }

    //modify this in a way that gets all resources and prints on the correct div
    document.getElementById("recurso").textContent = gameVariables.recurso + " pontos";
    
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



// localStorage.setItem("nomeDaChave", JSON.stringify(OBJETO))

// JSON.parse(localStorage.getItem("nomeDaChave"))

