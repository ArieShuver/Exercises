import { error } from "console";
import fs from "fs";


function readFile(file) {
    return new Promise((res, rej) => {
        fs.readFile(file, "utf-8", (error, data) => {
            if (error) {
                rej(error);
                return;
            }
            res(data);
        })
    })
}

readFile("./text.txt")
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.log(error)
    })