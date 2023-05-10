const express = require('express')
const client = require('../model/client')
const addressSchema = require('../model/address')
const bcrypt  = require('bcrypt')





exports.clientCreate = async (req,res)=>{
let { password ,address} = req.body
const userAddress =  await addressSchema(address).save().then((data)=>{
    console.log(data)
    return data
}).catch(e=>console.log(e))
    let obj = {
        name: req.body.name,
        email: req.body.email,
        password : await bcrypt.hash(password, 12),
        mobile_number:req.body.mobile_number,
     
        address:userAddress?._id,
        
    }

    const user = await client(obj).save().then((doc)=>{
        res.status(200).send("client creaated successfully")
    }).catch(e=> res.send(e))
    
}

exports.getAllClient = async (req,res)=>{

    let data = await client.find().populate('address')
    res.status(200).send(data)
}
