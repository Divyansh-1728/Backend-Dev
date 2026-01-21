
fs.mkdir("newDirectory",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("Directory created")
})