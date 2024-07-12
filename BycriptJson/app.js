import bcrypt from 'bcrypt'
let user={
    name:'sai',
    email:'sai@gmail.com',
    cc:'1234 1234 1234 1111',
    cw:'145',
    password:'I love mangos'
}
console.log(user)
let salt=bcrypt.genSaltSync(10)
let new_cc=bcrypt.hashSync(user.cc,salt)
let new_password=bcrypt.hashSync(user.password,salt)
// console.log(user.cc)
// console.log(new_cc)
// console.log(new_password)

user={...user,cc:new_cc,password:new_password}
console.log(user)
console.log(user.password)

let flag=bcrypt.compareSync('I love mangos',user.password)
if(flag){
    console.log('login success')
}
else{
    console.log('login failed')
}