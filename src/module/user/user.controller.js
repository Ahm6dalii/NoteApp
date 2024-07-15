import userModel from "../../../database/modules/user.module.js";
import bcrypt from "bcrypt";
import sendEmail from "../../utils/sendEmail.js";

const getAllUser = async (req, res) => {

  let allUsers= await userModel.find();
  res.json({ message: "Done", allUsers });
};

const verfiyAccount = async (req, res) => {
  let foundedUser=await userModel.findOneAndUpdate({email:req.params.email},{isConfirmed:true},{new:true})
  res.json({ message: "Welcome Your Mail is verfied" ,foundedUser });
};

const signUp = async (req, res) => {
  await userModel.insertMany(req.body);
  sendEmail(req.body.email)
  res.json({ message: "Added" });
};

const signIn = async (req, res) => {
    let foundedUser=await userModel.findOne({email:req.body.email});

    if(!foundedUser||!bcrypt.compareSync(req.body.password,foundedUser.password))
        return res.status(422).json("invalid email or password")

    if(foundedUser.isConfirmed==false)
      return res.status(401).json("you should to sign-up first ")
                res.status(200).json({message:"welcome"})

    // if(foundedUser){
    //     let match= await bcrypt.compareSync(req.body.password,foundedUser.password)
    //     if(match)
    //     {
    //         res.status(200).json({message:"welcome"})
    //     }else{
    //         res.status(400).json({message:"wrong password"})
    //     }
    // }else{
    //     res.json({ message: "user not found you shoud register first" });
    // }
};

export {
     signUp, 
    signIn,
    getAllUser,
    verfiyAccount };
