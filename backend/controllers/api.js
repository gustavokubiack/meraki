const Post = require('../models/post');
const fs = require('fs');

module.exports = class API {
    // fetch all posts
    static async fetchAllPosts(req, res) {
        try {
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch (err) {
            res.status(404).json({ message: err });
        }
    }
    // fetch post by id
    static async fetchPostByID(req, res) {
        const id = req.params.id;
        try {
            const post = await Post.findById(id);
            res.status(200).json(post);
        } catch (error) {
            res.status(404).json({ message: error });
        }

    }

    // create a post
    static async createPost(req, res) {
        const post = req.body;
        const imagename = req.file.filename;
        post.image = imagename;
        try {
            await Post.create(post);
            res.status(201).json({ message: 'Post created successfully' });
        }
        catch (err) {
            res.status(400).json({ message: err });
        }

    }


    // update a post
    static async updatePost(req, res) {
        const id = req.params.id;
        let new_image = "";
        if (req.file) {
            new_image = req.file.filename;
            try {
                fs.unlinkSync('./uploads/' + req.body.old_image);
            } catch (err) {
                console.log(err);
            }
        } else {
            new_image = req.body.old_image;
        }
        const newPost = req.body;
        newPost.image = new_image;
        
        try {
            await Post.findByIdAndUpdate(id, newPost);
            res.status(200).json({message: 'Post updated successfully'});
        } catch (err) {
            res.status(404).json({ message: err });
        }

    }

    // delete a post
    static async deletePost(req, res) {
        res.send('Delete a post');
    }
}