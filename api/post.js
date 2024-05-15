//routes
const router = require("express").Router();
const postController = require("../controller/post");

// Update a post by ID
router.put("/", postController.updatePostById);

// Add a new post to the database
router.post("/newPost", postController.createPost);

//get my posts
router.get("/getPosts", postController.getAllposts);

//export modules
module.exports = router;
