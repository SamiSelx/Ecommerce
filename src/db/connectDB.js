import mongoose from "mongoose";
import "dotenv/config";

mongoose
  .connect("http://localhost:27017/ecom")
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => console.log("failed to connect"));
