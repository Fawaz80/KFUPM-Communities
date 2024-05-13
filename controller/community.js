// Import the Community model
const Community = require("../models/community");
const session = require("express-session");
// Get all communities
async function getAllCommunities(req, res) {
	try {
		const communities = await Community.find();
		res.json(communities);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

// Create a new community
async function createCommunity(req, res) {
	console.log(req.session.username);
	try {
		const { comName, comBio } = req.body;

		const newCommunity = new Community({
			comName: comName,
			comBio: comBio,
			owner: req.session.username,
			members: [req.session.username],
		});
		await newCommunity.save();
		console.log("community created successfully");
		res.render("community", { navUsername: req.session.username });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

// Get a community by ID
async function getCommunityById(req, res) {
	try {
		const community = await Community.findById(req.params.id);
		if (!community) {
			return res.status(404).json({ message: "Community not found" });
		}
		res.json(community);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

// Update a community by ID
async function updateCommunityById(req, res) {
	try {
		const {
			comName,
			comBio,
			comIcon,
			owner,
			members,
			posts,
			events,
			materials,
		} = req.body;
		const updatedCommunity = await Community.findByIdAndUpdate(
			req.params.id,
			{ comName, comBio, comIcon, owner, members, posts, events, materials },
			{ new: true }
		);
		if (!updatedCommunity) {
			return res.status(404).json({ message: "Community not found" });
		}
		res.json(updatedCommunity);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

// Delete a community by ID
async function deleteCommunityById(req, res) {
	try {
		const deletedCommunity = await Community.findByIdAndDelete(req.params.id);
		if (!deletedCommunity) {
			return res.status(404).json({ message: "Community not found" });
		}
		res.json({ message: "Community deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

//export modules
module.exports = {
	getAllCommunities,
	createCommunity,
	getCommunityById,
	updateCommunityById,
	deleteCommunityById,
};
