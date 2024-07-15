import mongoose, { model } from "mongoose";

let noteSchema = new mongoose.Schema({
    title:String,
    description:String,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
  },
  {
      timestamps:true
  })

  let noteModel = model("Note",noteSchema)

  export default noteModel;