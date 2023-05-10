const express = require('express')
const router = express.Router()
const clientService = require('../service/clientService')

router.post('/create',async (req,res)=>{
    await clientService.clientCreate(req,res).then((doc)=>{
                
    }).catch((error)=>{
        console.log(error)
    })
    
})

router.get('/get',async (req,res)=>{
    await clientService.getAllClient(req,res).then().catch(e=>{
        console.log(e)
    })
})
module.exports = router