import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number,
    isConfirmed:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }

},{
    timestamps:true,
    versionKey:false
})

const userModel = mongoose.model("User",userSchema);

export default userModel;