const express = require('express')

const mongoose = require('mongoose')
const studentModel = require('../models/studentmodel')

const {validEmail,validPass} = require('../validation/validation')

const createStudent = async function(req,res){
    try{
    let student = req.body;
    let {frames, lname, email, password, address } = student;
    
    // validations'
    if(!validEmail) return res.send(message : "Please enter" )
    if (!fname || lname || email || password || address){
        return res.send({message : "Please provide all information !"})
    }
    let createStu = await studentModel.create(student)
res.send({message :createStu})
    }catch(error){
        console.log("internal error",error)
    }
}

module.exports.createStudent = createStudent;

let loginStudent =async(req,res)=>{
    try{
        let data =req.body
        let {emaill,password}=data
        if (!email || !password){
           return res.status(400).send({message:"Please provide all information !"})
        }
        


        return res.status (200).send ({ status :true,msg:"Student logged in successfully",data:token })
        
    }
module.exports={validEmail,validPass,validMobile}
}
