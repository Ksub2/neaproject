const { default: mongoose } = require('mongoose');
const mongoose=require('mongoose');
const { type } = require('os');
const meetingSchema=new mongoose.Schema({
        date:{type:String,required:true},
        type:{type:String,required:true},
        location:{type:String,required:true},
        description:{type:String,required},
        time:{type:String,required:true},
        user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    });
module.exports=mongoose.model('Meeting',meetingSchema);