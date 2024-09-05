import express from "express";
import mongoose from "mongoose";
import dotent from "dotenv";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

const app = express();
dotent.config();
mongoose.connect(process.env.MONGODB, {
   useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true  // Ensure autoIndex is enabled
})
.then(() => {
    console.log("Connection to MongoDB!");
 }).catch((err) => {
    console.log(err);
 });

app.listen(3000, () => {
    console.log("Server is runing 3000");
});

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);