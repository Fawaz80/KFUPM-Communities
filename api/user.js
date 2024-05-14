//routes
const router = require("express").Router();
const userController = require("../controller/user");

//Get list of all users in the database
router.get("/", userController.getAllUsers);

// Add a new user to the database
router.post("/", userController.createUser);

// Get a user by ID
router.get("/getUserCommunities", userController.getUserCommunities);

// Update a user by ID
router.put("/", userController.updateUserById);

// Delete a user by ID
router.delete("/", userController.deleteUserById);

//login request
router.post("/logIn", userController.logIn);

//signup request
router.post("/signUp", userController.signUp);

router.get("/getUserByName/name", userController.getUserByName);

//export modules
module.exports = router;
