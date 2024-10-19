import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import Image from "./model/imageSchema.js";
import sharp from "sharp";

mongoose
  .connect(
    "mongodb+srv://prajapativinay140404:vinay@removebackground.5ks9x.mongodb.net/remove_bg?retryWrites=true&w=majority&appName=removebackground"
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("Error connecting DB", err));

const app = express();
const PORT = 3000;
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());

// Route to upload and process image
app.post("/api/remove-background", upload.single("image"), async (req, res) => {
    try {
      const imageBuffer = req.file.buffer;
  
      // Remove background (basic solid color removal, replace with transparency)
      const processedImageBuffer = await sharp(imageBuffer)
        .extractChannel('red') // Example: extract red channel
        .threshold(200) // Example: threshold to create a mask
        .negate() // Invert the mask
        .toFormat('png') // Convert to PNG to preserve transparency
        .toBuffer();
  
      // Convert processed image to base64
      const processedImageBase64 = processedImageBuffer.toString("base64");
  
      // Save processed image in MongoDB
      const newImage = new Image({
        imageData: processedImageBase64,
      });
      console.log(newImage);
  
      await newImage.save();
  
      res.json({
        message: "Background removed and image saved successfully",
        imageId: newImage._id, // Send the image ID back for reference
        imageBase64: `data:image/png;base64,${processedImageBase64}`,
      });
    } catch (error) {
      console.error("Error processing image:", error);
      res.status(500).json({ message: "Error removing background" });
    }
  });



app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
})
