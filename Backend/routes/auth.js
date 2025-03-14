const express=require('express');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const User=require('../models/User');
const router=express.Router();
router.post('/register',async(req,res)=>{
    const{username,email,password}=req.body;
    try{
        const user=new User({username,email,password});
        await user.save();
        const token=jwt.sign({userId:user._id},'jwt_secret');
        res.status(201).send({token});
    } catch(error){
        res.status(400).send(error);
    }
});
router.post('./login',async(req,res)=>{
    const{username,password}=req.body;
    try{
        const user=await User.findOne({username});
        if(!user){
            return res.status(400).send({error:'Invalid login input'});
        }
        const isPasswordMatch=await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(400).send({error:'Invalid login input'});
        }
        const token=jwt.sign({userId:user._id},'jwt_secret');
        res.send({token});

    }
    catch(error){
        res.status(400).send(error);
    }
});
module.exports=router;