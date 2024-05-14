//routes
const router = require("express").Router();
const communityController = require("../controller/community");

//Get list of all communities in the database
router.get("/", communityController.getAllCommunities);

// Add a new community to the database
router.post("/newCommunity", communityController.createCommunity);

// Get a community by ID
router.get("/", communityController.getCommunityById);

// Update a community by ID
router.put("/", communityController.updateCommunityById);

// Delete a community by ID
router.delete("/", communityController.deleteCommunityById);

//export modules
module.exports = router;
