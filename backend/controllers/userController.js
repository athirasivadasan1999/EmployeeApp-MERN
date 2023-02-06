const User = require("../models/userModel");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAllUsers = async(req,res)=>{
    const users = await User.find();

    res.status(200).json({
        success: true,
        users,
      });
}


//user registration
exports.createUSers = async(req,res)=>{
   const user = await User.create(req.body);
   res.status(200).json({
    success:true,
    user
   })
   console.log(user);
}


//user Login
exports.loginUser = async(req,res)=>{
    let email = req.body.email;
    let password = req.body.password;

    let result = User.find({email:email},(err,data)=>{

        if(data.length>0){
            const passwordValidator = bycrypt.compareSync(password,data[0].password)
            if(passwordValidator){
               
                jwt.sign({email:email,id:data[0]._id},"EmployeeToken",{expiresIn:"1d"},(err,token)=>{
                    if(err){
                        res.json({"status":"failed","error":err})
                    }
                    else{
                        res.json({"status":"success","data":data,"token":token})
                    }
                })
            }
            else{
                res.json({"status":"failed","data":"invalid email"})
            }
        }
        else{
            res.json({"status":"failed","data":"invalid email"})
        }
    })
}