import express from 'express'
import fs from 'fs'

const app=express();

app.use((req,res,next)=>{
    console.log('middleware1')
    next()
})
app.use((req,res,next)=>{
    console.log("middleware2")
    next()
})
app.use(async(req,res,next)=>{
    const date=new Date().toLocaleString();
    const method=req.method;
    const obj={date,method};
    fs.appendFile("log.txt",date+"\n",(err)=>{
        if(err){
            console.log(err);
        }
    })
    next()
})
app.get("/",(req,res)=>{
    return res.send('hello world')
})
app.get("/student",(req,res)=>{
    return res.send('hello student')
})

const PORT = 3000;
app.listen(3000,(err)=>{
    console.log('server is running on port 3000')
})