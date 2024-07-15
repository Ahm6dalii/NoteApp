import mongoose from "mongoose";

export const dbConnection = mongoose
  .connect("mongodb://localhost:27017/nodeTest")
  .then(() => console.log("db connected"))
  .catch(() => console.log("error"));
