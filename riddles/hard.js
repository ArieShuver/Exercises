import { riddle } from "../classes/Riddle.js";

function fektouty(obg){
    obg.name = new riddle(obg.id,obg.name,obg.taskDescription,obg.correctAnswer)
}
const hard{id,name,ask,answer}={ 3 ,"hard","I start at night, end in the morning, and I have no body. What am I?","dream"};


export{
    hard
}

