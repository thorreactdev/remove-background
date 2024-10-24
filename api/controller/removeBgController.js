import Image from "../model/imageSchema.js";
import User from "../model/userSchema.js";
import dotenv from "dotenv";
import FormData from "form-data";
import fs from "fs";
import path from "path";
import axios from "axios";
dotenv.config();

export const removeBgFromImage = async (req, res) => {
  try {
    const { userId } = req.body;
    const user  = await User.findById(userId);
    if(!user){
      return res.status(401).json({ success : false , message : "Please Login To Upload file"});
    }

    const imagePath = req.file.path;
    console.log("imagePath",imagePath);

    const imageFile = fs.createReadStream(imagePath);
    console.log(imageFile);
    const formData = new FormData();
    formData.append("image_file" , imageFile);
    console.log("formData" , formData);

   const {data} = await axios.post("https://clipdrop-api.co/remove-background/v1", formData , {
    headers:{
      "x-api-key" : process.env.CLIPDROP_API_KEY,
    },
    responseType : "arraybuffer"
   })


   
    // const data = await response.json();
    console.log("data from api" , data);

    const base64Image = Buffer.from(data , "binary").toString("base64");
    // console.log("base64image" , base64Image);

    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

    const newImage = new Image({
      user : userId,
      originalImage : imagePath,
      processedImage: resultImage
    })

    await newImage.save();
    const totalCountOfImages = await Image.countDocuments();
    console.log(totalCountOfImages);
    res.status(200).json({ success : true , imageData  : newImage , resultImage});


  } catch (error) {
    console.log(error);
    res.status(500).json({ message : "Internal Server Error"});
  }
    
  };



