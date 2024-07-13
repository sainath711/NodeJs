import express from'express'
let router=express.Router();

router.get("/read",(req,resp)=>{
    resp.send("user Router - GET Request")
})

router.post("/create",(req,resp)=>{
    resp.send("User Router post request")
})
export default router;