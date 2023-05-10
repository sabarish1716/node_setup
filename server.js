const express = require('express')
const mongoose = require('mongoose')
const app = express()
const index = require('./router/index')
app.use(express.json())
const env = require('dotenv').config('env')
// app.use('/',()=>{
//     console.log("working")
// })

app.use('/api',index)

//db connection

mongoose.connect('mongodb://localhost:27017/accounts',{
    useNewUrlParser:true
})
const db = mongoose.connection;

db.on('connection',()=>{
    console.error.bind(console,'mongodb connection error: ')
})

db.once("open",  () => {console.log("MongoDB Connected successfully");});


app.listen(process.env.PORT||7200 ,()=>{
    console.log(process.env.PORT)
    console.log('server started ... ')
})

