
import express from 'express'
import path from 'path'
let app=express()

app.get("/",(req,resp)=>{
    //resp.send("Root Request")
    resp.sendFile(path.join(process.cwd(),'web','index.html'),(err)=>{
        if(err) throw err
    })
})
app.get("/about",(req,resp)=>{
    //resp.send("Root Request")
    resp.sendFile(path.join(process.cwd(),'web','about.html'),(err)=>{
        if(err) throw err
    })
})
app.listen(8080,'127.0.0.1',(err)=>{
    if (err) throw err
    console.log("express is Running")
})