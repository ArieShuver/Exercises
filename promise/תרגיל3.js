function random(){
    return new Promise((res ,rej) =>{
      const num =  Math.random();
      if (num > 0.5){
        rej("failure!");
        return;
      }
      res("success!")
    })
}
random().then(res =>{
    console.log(res)
}).catch(rej => {
    console.log(rej)
})

