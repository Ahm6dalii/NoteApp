
import noteModel from './../../../database/modules/note.module.js';



const getAllNote= async (req,res)=>{
 let allNote =await noteModel.find().select("title -_id createdBy ").populate("createdBy")
 res.json({message:"done",allNote})
}
const addNote= async (req,res)=>{
 let addedNote =await noteModel.insertMany(req.body)
 res.json({message:"Note Added",addedNote})
}


export{
    getAllNote,
    addNote
}