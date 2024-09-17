window.addEventListener("DOMContentLoaded", (e) => game_onLoad(e));
window.addEventListener("beforeunload", (e) => game_onClose(e));

export let gameVariables = {
    recurso: 0
}

function game_onLoad(e) {
    if (JSON.parse(localStorage.getItem("saveStorage"))){
        gameVariables = JSON.parse(localStorage.getItem("saveStorage"));
    }

    document.getElementById("recurso").textContent = gameVariables.recurso + " pontos";
    
}

function game_onClose(e){
    localStorage.setItem("saveStorage", JSON.stringify(gameVariables))
}



// localStorage.setItem("nomeDaChave", JSON.stringify(OBJETO))

// JSON.parse(localStorage.getItem("nomeDaChave"))

