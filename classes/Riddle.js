import rl from "readline-sync";

class riddle {

    constructor(id, name, taskDescription, correctAnswer) {
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }

    DisplaysTheRiddle() {
        console.log(this.taskDescription)
        let answer = rl.question("Enter your answer:  ")
        while (! CompatibilityCheck(this.correctAnswer, answer)) {
            console.log(this.taskDescription)
            answer = rl.question("Enter your answer:  ")
        }
    }
}



function CompatibilityCheck(item1, item2) {
    return (item1 === item2)
}
export {
    riddle
}
