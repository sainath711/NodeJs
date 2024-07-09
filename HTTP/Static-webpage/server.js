import fs from 'fs'
import path from 'path'
import http from 'http'

let server=http.createServer((req,resp)=>{
    
    if(req.url==="/" || req.url ==="/index"){
        fs.readFile(path.join(process.cwd(),"index.html"),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    else
    if(req.url==="/about" ){
        fs.readFile(path.join(process.cwd(),"about.html"),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    else
    if(req.url==="/services" ){
        fs.readFile(path.join(process.cwd(),"services.html"),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    else 
    if(req.url==="/contact" ){
        fs.readFile(path.join(process.cwd(),"contact.html"),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    else{
        resp.end("Page Not Found")
    }
})
server.listen(8000,(err)=>{
    if(err) throw err 
    console.log(`Servre Running on http://localhost:8000/ `)
})