function syHeloo(name, delay) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("hello " + name);
        },
            delay)
    
    });
}

syHeloo("arie",5000).then(message =>{
    console.log(message)
})