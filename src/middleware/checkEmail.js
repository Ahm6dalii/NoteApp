import userModel from "./../../database/modules/user.module.js";
import bcrypt from "bcrypt";

export const checkEmail = async (req, res, next) => {
  let foundedUser = await userModel.findOne({ email: req.body.email });
  if (foundedUser) return res.status(409).json({ message: "Aleardy Added" });
  req.body.password = bcrypt.hashSync(req.body.password, 8);

  next();
};
