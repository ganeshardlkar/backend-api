import express from "express";
import Post from "../models/post.js";

export const createPost = async (req, res) => {
    try {
        const response = await Post.create({
            _id: req.body.id,
            title: req.body.title,
            description: req.body.description,
        });
        return res.status(201).json({
            status: true,
            message: "Successfully created new post",
            data: response,
            err: {}
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Error creating new post",
            data: {},
            err: error
        })
    }
}

export const getPosts = async (req, res) => {
    try {
        const response = await Post.find({});
        return res.status(201).json({
            status: true,
            message: "Successfully fetched all posts",
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Error fetching all posts",
            data: {},
            err: error
        })
    }
}