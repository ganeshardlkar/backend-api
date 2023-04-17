import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    _id: {
        type: Number,
        autoIncrement: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const Post = mongoose.model('Post', postSchema);
export default Post;