const fs=require('fs')
const http=require('http')
let server=http.createServer((req,resp)=>{
    fs.readFile('index.html','utf-8',(err,data)=>{
        if(err) throw err
        resp.end(data)
    })
})
server.listen(8000,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`server Running http://localhost:8000/`)
})