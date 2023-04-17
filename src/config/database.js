import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MONGOURL = process.env.MONGOURL;

export const connect = async () => {
    await mongoose.connect(MONGOURL);
}