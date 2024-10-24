import User from "../model/userSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const googleAuth = async (req, res, next) => {
  try {
    const { name, email, avatar } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "2d",
      });

      res
        .status(200)
        .cookie("token", token, { httpOnly: true })
        .json({ message: "Login Success", success: true, userData: user });
    } else {
      const newUser = new User({
        name,
        email,
        avatar,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "2d",
      });
      res
        .status(200)
        .cookie("token", token, { httpOnly: true })
        .json({ message: "Login Success", success: true, userData: newUser });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" });
  }
};


export const signOut = async(req,res)=>{
  res.clearCookie("token").status(200).json({ message : "Logout Successfull"});
}
