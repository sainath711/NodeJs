import bcrypt from 'bcrypt'
let user={
    email:"Sainath@123",
    cc:'123445678',
    password:"IamBadBoy"
}
let salt=bcrypt.genSaltSync(10)
let new_cc=bcrypt.hashSync(user.cc,salt);
let new_PW=bcrypt.hashSync(user.password,salt)
console.log(new_cc)
console.log(new_PW)