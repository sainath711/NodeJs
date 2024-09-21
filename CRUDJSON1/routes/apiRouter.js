import express from 'express'
import fs from 'fs'
//import { get } from 'http';
let router=express.Router();

router.post("/create",async(req,resp)=>{
    
    let employee=req.body;
    let employees=await getEmployees()

    let emp_obj=employees.find((emp)=>{
       return emp.eid==emp.eid;
    })
    console.log(emp_obj)
    if(emp_obj){
        return resp.status(401).json({"msg":"Employe already exist"})
    }
    employees.push(employee)
    savemployees(employees)
        return resp.status(200).json({"msg":"New employee created"})
    
   
});
router.get("/read",async(req,resp)=>{
  let employees=await getEmployees()
  return resp.json(employees)
});
router.put("/update/:id",(req,resp)=>{
    let eid=req.params.id
});
router.delete("/del/:id",(req,resp)=>{
    let eid=req.params.id
});

let getEmployees=()=>{
    let emp_Data=fs.readFileSync('data.json','utf-8')
    return JSON.parse(emp_Data)
}
let savemployees = (employees)=>{
    fs.writeFileSync('data.json',JSON.stringify(employees))
}
export default router;
