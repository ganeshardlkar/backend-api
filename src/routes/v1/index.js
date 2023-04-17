import express from "express";
import { createPost, getPosts } from "../../controllers/post-controller.js";
const router = express.Router();

router.post('/create', createPost);
router.get('/posts', getPosts);
// router.delete('/posts/:id', deletePost);
// router.patch('/post/:id', updatePost);

export default router;