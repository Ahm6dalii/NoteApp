import noteModel from "./../../../database/modules/note.module.js";
import jwt from "jsonwebtoken";


const getAllNote = async (req, res) => {
    let allNote
    console.log("(req.user.role",req.user.role);
    if(req.user.role=="admin"){
         allNote = await noteModel.find().select("title description  createdBy ")
        .populate("createdBy");
    }else{
        allNote = await noteModel.find({ createdBy: req.user.id }).select("title description  createdBy ")
        .populate("createdBy");
    }
  
  res.json({ message: "done", allNote });
};
const addNote = async (req, res) => {
  req.body.createdBy = req.user.id;
  let addedNote = await noteModel.insertMany(req.body);
  res.json({ message: "Note Added", addedNote });
};

const updateNote = async (req, res) => {
  let updatedNote = await noteModel.findOneAndUpdate(
    { _id: req.params.id, createdBy: req.user.id },
    { title: req.body.title, description: req.body.description },
    { new: true }
  );
  updatedNote &&
    res.status(200).json({ message: "upadted successfuly", updatedNote });
  !updatedNote && res.status(404).json({ message: "Note not found" });
};

export { getAllNote, addNote, updateNote };
