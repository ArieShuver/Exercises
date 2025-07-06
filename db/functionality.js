
import fs from "fs/promises";

// Reading a file
async function read(path) {
    try {
        const read = await fs.readFile(path, "utf-8")
        const readJson = JSON.parse(read)
        return read;
    }
    catch (error) {
        console.log(error)
        return [];
    }
    return [];
}


//Added a riddle
async function create(path, data) {
    let listRiddles = await read(path);
    listRiddles.push(data);
    listRiddles = JSON.stringify(listRiddles);
    try {
        return await fs.writeFile(path, listRiddles);
    }
    catch (error) {
        console.log(error);
    }
}

//change a riddle
async function update(nameRiddle, newRiddle, path) {
    let listRiddles = await read(path);
    listRiddles = JSON.stringify(listRiddles);
    const indexRiddle = listReddles.indexOf(nameReddle);
    if (indexRiddle !== -1) {
        listRiddles[indexRiddle] = nameRiddle;
    }
    else {
        console.log('The riddle is not found');
    }
    try {
        return await fs.writeFile(path, listRiddles);
    }
    catch (error) {
        console.log(error);
    }
}





