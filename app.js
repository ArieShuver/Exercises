import rl from "readline-sync";
import {easytMath} from  "./riddles/EasyMath.js"
import { Mystery } from "./riddles/Mystery.js"; 
import {player} from "./classes/Player.js"


console.log("welcome the game");

const name = rl.question("what is your name?") 
const start = returnTime();
easytMath.DisplaysTheRiddle();
Mystery.DisplaysTheRiddle();
const end = returnTime();

returnPlayer(name,start,end)







function returnTime(){
    const now = Date.now();
    return now / 1000;
}

function returnPlayer(name,start,end){
    const player1 = new player(name)
    player1.time(start,end)
    console.log(player1.showStats());
}