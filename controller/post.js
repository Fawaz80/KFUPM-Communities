// Import the Post model
const Post = require('../models/post'); 


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
        const { postOwner, postCom, postBody, postImages, postDat } = req.body;
        const newPost = new Post({ postOwner, postCom, postBody, postImages, postDat });
        const savedPost = await newPost.save();
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