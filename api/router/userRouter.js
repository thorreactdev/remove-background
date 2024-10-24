// import { removeBgFromImage } from "api/controller/removeBgController";
import { getSingleImage, getUploadedFileFromUser } from "../controller/userController.js";
import express from "express";

const router = express.Router();

router.route("/get/uploads/:id").get(getUploadedFileFromUser);
router.route("/single/:id").get(getSingleImage)

export default router;