import Image from "../model/imageSchema.js";

export const getUploadedFileFromUser = async(req,res)=>{
    try {
      const uploadedImage = await Image.find({ user : req.params.id});
      console.log("got data");
      res.status(200).json({ success: true , getData : uploadedImage});
    } catch (error) {
      console.log(error);
    }
  }

export const getSingleImage = async(req,res)=>{
    try {
        const getSingleImageData = await Image.findById(req.params.id);
        console.log(getSingleImage);
        res.status(200).json({ success: true , getData : getSingleImageData});
    } catch (error) {
        console.log(error);
    }
}