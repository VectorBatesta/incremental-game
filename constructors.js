
//////////////////////////////////////////////
//constructors macros ////////////////////////
//////////////////////////////////////////////

/**
 * creates new div for a button on the game
 *
 * @param {string} IDname the ID of the new button
 * @param {string} texto what will be written
 * @param {function} funcao what function it uses when clicking
 */
export function newButton(IDname, texto, funcao){
    let newDiv = document.createElement("div");
    newDiv.id = IDname;
    newDiv.className = "interactableButton";
    newDiv.addEventListener("click", funcao);
    newDiv.textContent = texto;

    document.getElementById("tab1_divEsq").appendChild(newDiv);

    return newDiv;
}



/**
 * creates a new HOLDABLE button on the game
 *
 * @param {string} IDname the ID of the new button
 * @param {string} texto what will be written
 * @param {function} funcao the function to run repeatedly while holding down
 * @param {int} intervalTime the time interval in ms for how often the function will execute
 */
export function newHoldableButton(IDname, texto, funcao, intervalTime) {
    let newDiv = document.createElement("div");
    newDiv.id = IDname;
    newDiv.className = "interactableButton";
    newDiv.textContent = texto;

    let intervalId; //this will be enabled later

    function onHold(){
        if (!intervalId){
            intervalId = setInterval(funcao, intervalTime);
        }
    }

    function onRelease(){
        clearInterval(intervalId);
        intervalId = null;
    }

    newDiv.addEventListener('mousedown', onHold);
    newDiv.addEventListener('mouseup', onRelease);
    newDiv.addEventListener('mouseleave', onRelease);

    document.getElementById("tab1_divEsq").appendChild(newDiv);

    return newDiv;
}










/**
 * creates an effect element
 * 
 * @param {string} effectId the name/id for the effect
 * @param {string} imageName the location for the image with the image type ("something.png")
 * @param {string} title the text that goes above
 * @param {Array} buffs array of strings for each of the buffs 
 */
export function newStatusEffect(effectId, imageName, title, descr, amountBuffs, curse = false){
    let statusLists = document.getElementsByClassName("statusList");

    for (let statusList of statusLists){
        //creating variables and structure
        let effect = document.createElement("div");
        effect.id = effectId;
        effect.className = "status";
        if (curse == true){
            effect.classList.add("debuff");
        }

        //img
        let effect_image = document.createElement("img");
        effect_image.src = "imgs/" + imageName;
        effect_image.width = "60";
        effect_image.height = "60";

        //title
        let effect_block = document.createElement("div");
        let effect_descr_title = document.createElement("span");
        effect_descr_title.textContent = title;
        
        //description
        let effect_descr = document.createElement("div");
        effect_descr.textContent = descr;

        //buff list
        let effect_buffs = document.createElement("ul");
        for(let i = 0; i < amountBuffs; i++){
            let newLi = document.createElement("li");
            newLi.id = "buff" + i;
            newLi.className = "effect_buff_text";

            effect_buffs.appendChild(newLi);
        }


        //
        //
        ////////////
        effect_block.appendChild(effect_descr_title);
        effect_block.appendChild(effect_descr);
        effect_block.appendChild(effect_buffs);

        effect.appendChild(effect_image);
        effect.appendChild(effect_block);

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
export function screen(tabNumber){
    for (let i of document.getElementsByClassName("tab")){
        i.classList.remove("_visible");
    }

    let tabName = "tab";
    tabName = tabName + tabNumber;

    document.getElementById(tabName).classList.add("_visible");
}




