import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
let payload={
    name:'Rahul',
    cid:'Rahul123',
    password:'Congress'
}
dotenv.config({path:'./config/dev.env'})

let s_key=process.env.SECRET_KEY
let token=jwt.sign(payload,s_key)
console.log(token)

let user=jwt.verify(token,s_key)
console.log(user)