import express  from "express";
import { googleAuth, signOut } from "../controller/authController.js";


const router = express.Router();

router.route("/google/login").post(googleAuth);
router.route("/signout").post(signOut);


export default router;
