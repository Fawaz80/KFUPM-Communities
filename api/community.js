//routes
const router = require("express").Router();
const communityController = require("../controller/community");

// Add a new community to the database
router.post("/newCommunity", communityController.createCommunity);

// Get a community by ID
router.get("/", communityController.getCommunityById);

// Update a community by ID
router.put("/", communityController.updateCommunityById);

// Delete a community by ID
router.delete("/", communityController.deleteCommunityById);

// Get communities by name
router.get("/searchCommunities", communityController.getCommunityByName);

//Get list of all communities in the database
router.get("/getCommunities", communityController.getAllCommunities);

//load main
router.post("/loadCommunity", communityController.loadCommunity);

//export modules
module.exports = router;
