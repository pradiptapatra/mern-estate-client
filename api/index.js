import express from "express";
import mongoose from "mongoose";
import dotent from "dotenv";
const app = express();
dotent.config();
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).then(() => {
    console.log("Connection to MongoDB!");
 }).catch((err) => {
    console.log(err);
 });

app.listen(3000, () => {
    console.log("Server is runing 3000");
});