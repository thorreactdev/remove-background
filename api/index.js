import express from "express";
import mongoose from "mongoose";
import authRoute from "./router/authRouter.js";
import removeBgRouter from "./router/removeBgRouter.js";
import userRoute from "./router/userRouter.js";
import path from "path";
import cookieParser from "cookie-parser";
import protectedRoute from "./router/protectedRoute.js";


mongoose
  .connect(
    "mongodb+srv://prajapativinay140404:vinay@removebackground.5ks9x.mongodb.net/remove_bg?retryWrites=true&w=majority&appName=removebackground"
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("Error connecting DB", err));

const __dirname = path.resolve();

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cookieParser());

app.use("/api" , protectedRoute);
app.use("/api" , authRoute);
app.use("/api", removeBgRouter);
app.use("/api", userRoute);

app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});




app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
})
