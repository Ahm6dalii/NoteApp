import express from "express";
import { addNote, getAllNote } from "./note.controller.js";

const noteRoutes = express.Router();

noteRoutes.get("/Note", getAllNote);
noteRoutes.post("/Note", addNote);

export default noteRoutes;
