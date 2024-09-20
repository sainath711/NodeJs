import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'

import apiRouter from './routes/apiRouter.js'


let app=express()

dotenv.config({path:'./config/product.config'})
let port=process.env.port
let hostname=process.env.hostname

app.use(morgan('tiny'))

app.get("/",(req,resp)=>{
    resp.json({"msg":"Root Request"})
})

app.use("/api",apiRouter);

app.listen(port,hostname,(err)=>{
    if(err) throw err
    console.log(`Server is Running http://${hostname}:${port}/`)
})