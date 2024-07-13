import express from 'express'
let router=express.Router()

router.put("/update",(req,resp)=>{
    resp.send("product Router- PUT Req")
})
router.delete('/delete',(req,resp)=>{
    resp.send('product Router -Delete request')
})
export default router;