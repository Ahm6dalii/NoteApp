import express from "express";
import {
  getAllUser,
  signIn,
  signUp,
  verfiyAccount,
} from "./user.controller.js";
import { checkEmail } from "./../../middleware/checkEmail.js";

const userRoutes = express.Router();

userRoutes.get("/users", getAllUser);
userRoutes.post("/signUp", checkEmail, signUp);
userRoutes.post("/signIn", signIn);
userRoutes.get("/verify/:email", verfiyAccount);
// userRoutes.get("/signUp",signUp)

export default userRoutes;
