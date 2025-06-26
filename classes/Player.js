class player{
    constructor(name){
        this.name = name;
        this.arr = [];
    }
    time(start,end){
        this.arr.push(end - start);
    }

    showStats(){
        return this.name +" " + this.arr;
    }
}
export{
    player
}