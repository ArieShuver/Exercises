import riddle from "../classes/Riddle.js";

function fektouty(obg) {
    obg.name = new riddle(obg.id, obg.name, obg.taskDescription, obg.correctAnswer)
}
const hard = {
  id: 3,
  name: "hard",
  ask: "I start at night, end in the morning, and I have no body. What am I?",
  answer: "dream"
};


export {
    hard
}

