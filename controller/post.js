// Import the Post model
const Post = require('../models/post'); 
const User = require('../models/user'); 
const Community = require("../models/community")


// Get all posts
async function getAllPosts(req, res) {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Create a new post
async function createPost(req, res) {
    try {
        const { postOwner, postCom, postBody, postImages, postDate } = req.body;
        var date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if (month < 10) month = '0' + month;
        if (day < 10) day = '0' + day;
        let formattedDate = `${year}/${month}/${day}`;
        const newPost = new Post({ postOwner: req.session.username, postCom: postCom, postBody: postBody, postImages: postImages, postDate: formattedDate });
        const savedPost = await newPost.save();
        const user = await User.findOne({username : req.session.username})
        const updatedUser = await User.findOneAndUpdate(
            { username: user.username }, // Filter to find the user
            { $push: { posts:  newPost} }, // Update to add the new section
            { new: true }, // Return the updated document
          );
          const updatedCommunity = await Community.findOneAndUpdate(
            { username: user.username }, // Filter to find the user
            { $push: { posts:  newPost} }, // Update to add the new section
            { new: true }, // Return the updated document
          );
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get a post by ID
async function getPostById(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update a post by ID
async function updatePostById(req, res) {
    try {
        const { postOwner, postCom, postBody, postImages, postDate, likers, dislikers, repliers } = req.body;
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { postOwner, postCom, postBody, postImages, postDate, likers, dislikers, repliers },
            { new: true }
        );
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete a post by ID
async function deletePostById(req, res) {
    try {
        const deletedPost = await Song.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//export modules
module.exports = {
    getAllPosts,
    createPost,
    getPostById,
    updatePostById,
    deletePostById
};