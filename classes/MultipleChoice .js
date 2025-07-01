import { riddle } from "./Riddle";

class MultipleChoice extends riddle {
    constructor(id, name, taskDescription, correctAnswer,arr) {
        super(id, name, taskDescription, correctAnswer)
    }
    DisplaysTheRiddle() {
        console.log(this.taskDescription +
            `\n A) ${this.arr[0]} \n B) ${this.arr[1]} \n C)${this.arr[2]} \n D)${this.arr[3]}`)
    }

}