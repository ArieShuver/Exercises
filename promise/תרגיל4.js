function timer() {
    timerA = new Promise((res, rej) => {
        setTimeout(() => {
            res("timer a finsed!")
            
        },1000)
    })
    timerB = new Promise((res ,rej) =>{
        setTimeout(() =>{
            res("timer b finsed!")
            
        },4000)
    }) 
    return Promise.race([timerA,timerB])
}

timer().then((res)=>{
    console.log(res)
})