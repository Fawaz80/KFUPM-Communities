//routes
const router = require('express').Router();
const postController = require('../controller/post');

//Get list of all posts in the database
router.get('/', postController.getAllPosts);

// Add a new post to the database
router.post('/', postController.createPost);

// Get a post by ID
router.get('/', postController.getPostById);

// Update a post by ID
router.put('/', postController.updatePostById);

// Delete a post by ID
router.delete('/', postController.deletePostById);

//Get list of all posts in the database
router.get('/getPosts', postController.getAllPosts);

// Add a new post to the database
router.post('/newPost', postController.createPost);

//export modules
module.exports = router;
