import jwt from 'jsonwebtoken'
let user_payload =  {
    "uname":"Rahul Gandhi",
    "password":"IamBadBoy"
}
let Secret_key="ABC123"
let token = jwt.sign(user_payload,Secret_key)
console.log(token)

let user_Data=jwt.verify(token,Secret_key)
console.log(user_Data)