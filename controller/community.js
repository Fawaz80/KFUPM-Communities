// Import the Community model
const Community = require("../models/community");
const User = require("../models/user"); // Whenever we create a community or update a community a user is appended to it. in doing so, we update the community and the user in the database.
const session = require("express-session");
const { addComToUser } = require("./user");

// Get all communities
async function getAllCommunities(req, res) {
	try {
		const communities = await Community.find();
		console.log(communities);
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
		compos = await newCommunity.save(); //new
		const user = await User.findOne({ username: req.session.username });
		const updatedUser = await User.findOneAndUpdate(
			{ username: user.username }, // Filter to find the user
			{ $push: { communities: newCommunity } }, // Update to add the new section
			{ new: true } // Return the updated document
		);

		console.log(
			user.username + " successfully created and joined " + newCommunity.comName
		);

		res.render("community", {
			navUsername: req.session.username,
			Posts: compos.posts,
			postsNum: compos.posts.length,
			membersNum: compos.members.length,
			comBio: compos.comBio,
			comName: compos.comName,
			postDate: compos.postDate,
		});
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

// Get communities by name
async function getCommunityByName(req, res) {
	try {
		const regex = new RegExp("^" + req.query.communityName, "i");
		const communities = await Community.find({ comName: regex });
		req.session.communities = communities;
		res.render("searchedCommunity", {
			communities: communities,
			navUsername: req.session.username,
		});
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

//load chosen com
async function loadCommunity(req, res) {
	try {
		const { comName } = req.body;
		console.log(comName);
		const community = await Community.findOne({ comName: comName[0] });
		compo = community.posts;

		res.render("community", {
			navUsername: req.session.username,
			Posts: compo,
			postsNum: community.posts.length,
			membersNum: community.members.length,
			comBio: community.comBio,
			comName: community.comName,
			postDate: compo.postDate,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

//export modules
module.exports = {
	loadCommunity,
	getAllCommunities,
	createCommunity,
	getCommunityById,
	getCommunityByName,
	updateCommunityById,
	deleteCommunityById,
};
