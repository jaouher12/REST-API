
const mongoose = require("mongoose");
require("dotenv").config();
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://jaouher:TilltedAhri2021@cluster0.8vvyikw.mongodb.net/?retryWrites=true&w=majority");
    
    console.log("db is successfuly connected");
  } catch (error) {
    console.log("connection to db is failed ");
  }
};
module.exports=connectDb