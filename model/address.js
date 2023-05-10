const mongoose = require('mongoose');
let addressSchema = new mongoose.Schema({
   city:{type:String,required:true},
   state:{type:String,required:true},
   country:{type:String,required:true},
    pincode:{type:Number,required:true},
    deleted: {type: Boolean,default: false}
   });

   module.exports = mongoose.model('address',addressSchema,'Address')