const http=require('http')
const dotenv=require('dotenv')

dotenv.config({path:'./config/.env'})
let port=process.env.PORT
let host_Name=process.env.HOST_NAME

let server=http.createServer((req,resp)=>{
    resp.end("HTTP Server")
})
server.listen(port,host_Name,(err)=>{
    if(err)throw err
    console.log(`Server Running on http://${host_Name}:${port}/`)
})