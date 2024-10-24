import jwt  from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyUser = async(req, res , next) =>{
    try {
        const token = req?.cookies?.token;
        console.log(token);
        // if(!token){
        //     return res.status(401).json({ message : "Please Login to access this resource"});
        // }
        jwt.verify(token , process.env.JWT_SECRET , (err, user)=>{
            if(err){
                console.log(err);
                if(err.name === "JsonWebTokenError"){
                    return res.status(401).json({ success : false , message : "Token Expired"});
                }else {
                    return res.status(401).json({ success: false, message: "Invalid Token" });
                  }
            }
            req.user = user;
            console.log(req.user);
            next();
        });
    } catch (error) {
        next(error);
    }
}