import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'


import apiRouter from './router/apiRouter.js'

let app=express()
app.use(morgan('tiny'))
dotenv.config({'path':'./config/dev.config'})
let port=process.env.PORT
let host=process.env.HOST_NAME

app.get("/",(req,resp)=>{
    resp.send("Root Request")
})

app.use("/api",apiRouter);

app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`server is runnning...http://${host}:${port}/`)
})

