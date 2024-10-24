import { verifyUser } from "../middleware/verifyUser.js";
import express from "express";

const router = express.Router();

router.route("/protected").get(verifyUser , (req,res)=>{
    res.status(200).json({message : "Welcome to the protected route"});
})


export default router;