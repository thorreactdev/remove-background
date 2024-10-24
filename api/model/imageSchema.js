import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Referencing the User model
    required: true,
  },

  originalImage: {
    type: String, // Path to the original image file
    required: true,
  },
  processedImage: {
    type: String, // Path to the processed image file
    required: true,
  },
} , {timestamps : true});

const Image = mongoose.model("image" , imageSchema);
export default Image;
