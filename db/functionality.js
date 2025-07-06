
import fs from "fs/promises";
    
    // Reading a file
async function read(path) {
    try {
        let read = await fs.readFile(path, "utf-8")
        read = JSON.parse(read)
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
        let arr = await read(path)
        console.log("arr:", arr);
        arr.push(data)
        arr = JSON.stringify(arr)
        try {
            return await fs.writeFile(path, arr)
        }
        catch (error) {
            console.log(error)
        }
    }

        //change a riddle
    function update(nameReddle){

    }




