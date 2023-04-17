import mongoose from "mongoose";

export const connect = async () => {
    await mongoose.connect("mongodb://0.0.0.0/new_project");
}