import express from 'express'
let router =express.Router()



router.post("/add",(req,resp)=>{
    return resp.json({"msg":"post request"})
})
//API URL: http://127.0.0.1:8080/api/add

router.get("/read",(req,resp)=>{
    return resp.json({"msg":"GET request"})
})
//API URL: http://127.0.0.1:8080/api/read

router.put("/update",(req,resp)=>{
    return resp.json({"msg":"PUT request"})
})
//API URL: http://127.0.0.1:8080/api/update

router.delete("/del",(req,resp)=>{
    return resp.json({"msg":"DELETE request"})
})
//API URL: http://127.0.0.1:8080/api/del
export default router;