import express from "express";
import { addNote, getAllNote,updateNote } from "./note.controller.js";
import { verifyToken } from "../../middleware/verifyToken.js";
import { allowTo } from "../../middleware/allowTo.js";

const noteRoutes = express.Router();
noteRoutes.use("/Note",verifyToken)
noteRoutes.get("/Note",allowTo("user","admin"),getAllNote);
noteRoutes.post("/Note",addNote);
noteRoutes.put("/Note/:id",updateNote);

export default noteRoutes;
