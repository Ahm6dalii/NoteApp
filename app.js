import express from "express";
import userModel from "./database/modules/user.module.js";
import { dbConnection } from "./database/dbConnection.js";
import userRoutes from "./src/module/user/user.router.js";
import noteRoutes from './src/module/note/note.router.js';
const app = express();
const port = 3000;
app.use(express.json());
app.use(userRoutes);
app.use(noteRoutes);

dbConnection;



app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));



// app.post("/User", async (req, res) => {
    //   await userModel.insertMany(req.body);
    //   res.json({ message: "addec" });
    // });
    
    // app.get("/User", async (req, res) => {
    //   const alluser = await userModel.find();
    //   res.json({ message: "done", alluser });
    // });
    // app.put("/User/:id", async (req, res) => {
    //   const user = await userModel.findByIdAndUpdate(
    //     req.params.id,
    //     { name: req.body.name },
    //     { new: true }
    //   );
    //   res.json({ message: "updated", user });
    // });
    // app.delete("/User/:id", async (req, res) => {
    //   const userDeleted = await userModel.deleteOne({ _id: req.params.id });
    //   res.json({ message: "deleted", userDeleted });
    // });