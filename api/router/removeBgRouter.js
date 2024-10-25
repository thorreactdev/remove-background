import { verifyUser } from "../middleware/verifyUser.js";
import { productPhotography, reImagineImage, removeBgFromImage } from "../controller/removeBgController.js";
import express from "express";
import multer from "multer";
// import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});
const upload = multer({ storage });

router.route("/remove-bg").post(verifyUser,upload.single("image_file") , removeBgFromImage);
router.route("/reimagine").post(verifyUser , upload.single("image_file"), reImagineImage);
router.route("/product").post(verifyUser , upload.single("image_file"), productPhotography);

// router.route("/get/uploads/:id").get(getUploadedFileFromUser);

export default router;


