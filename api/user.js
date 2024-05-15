//routes
const router = require("express").Router();
const userController = require("../controller/user");

// Get a user by ID
router.get("/", userController.getUserById);

// Update a user by ID
router.put("/", userController.updateUserById);

// Delete a user by ID
router.delete("/", userController.deleteUserById);

//login request
router.post("/logIn", userController.logIn);

//signup request
router.post("/signUp", userController.signUp);

//Get user communities request
router.post("/getUserCommunities", userController.getUserCommunities);

router.post("/loadHome", userController.loadHome);

//Get list of all posts in the database
// router.get("/getUserPosts", userController.getUserPosts);

//export modules
module.exports = router;
