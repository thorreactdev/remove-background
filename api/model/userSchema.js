import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name :{
    type:String,
    required : true
  },
  email : {
    type : String,
    required : true,
  },
  avatar : {
    type : String,
    default : null
  }
}, { timestamps : true});

const User = mongoose.model("user" , userSchema);
export default User;
