const model = require("../model");
const util = require('../utils')

const signup = (async (req, res)=>{
   const isExist =  await model.user.findOne(req.body.email);
   if(isExist){
       return res.status(422).json({ message: "Already exist !"});
   }
   data = await model.user.create(req.body);
   res.status(200).json({ message: "User successfully created !", data });
})  

const login = (async (req, res)=>{
    const isExist =  await model.user.findOne(req.body);
    if(isExist){
        return res.status(422).json({ message: "Invalid !"});
    }
    const token = 123 //JWT token
    util.sent.mailer
    res.status(200).json({ message: "Login successfully !", token });
 })  

module.exports = {signup, login}