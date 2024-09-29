import { gameVariables, saveWipe, updateResourcesDisplay, fixMaxAll } from "./listeners.js"
import * as constructor from "./constructors.js"























///////////////////////////////////////////

















function focus(){
    let { essence } = gameVariables.resources;
    let { focusHindrance } = gameVariables.modifiers;
    
    //TODO: sound



    //variable for the growth based on logarithmic scaling
    let growth = 1 - (essence[0] / essence[1]);
    // /\ goes from (1 - 0%) to (1 - 100%)

    //apply dampening of the dampening
    if (focusHindrance > 0){
        growth = Math.pow(growth, focusHindrance / 10);
    }

    //increment actual essence by the variable
    essence[0] += growth;

    fixMaxAll(); //detect if current > max
    updateResourcesDisplay(); //update immediately
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





constructor.screen(1)



//temp
let btn_focus = constructor.newHoldableButton("btn_focus", "Focus", focus, 500);
let btn_saveWipe = constructor.newButton("btn_saveWipe", "TERMINATE SAVE", saveWipe);

btn_focus.classList.add("_visible")
btn_saveWipe.classList.add("_visible")






// constructor.newStatusEffect("test", "broken_bone.png", "title test", ["bufftest", "bufftest2"], true)

constructor.newStatusEffect("focusHindrance", "placeholder.png", "Focus Hindrance", "Your focus is being obstructed by something.", 1, true)


