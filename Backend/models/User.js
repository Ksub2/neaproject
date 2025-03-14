const mangoose=require('mangoose');
const bcrypt=require('bcryptjs');
const { type } = require('os');
const userSchema=new mangoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
});
userSchema.pre('save',async function (next) {
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,8);

    }
    next();
});
module.exports=mangoose.model('User',userSchema);