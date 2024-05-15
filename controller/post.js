// Import the Post model
const Post = require("../models/post");
const User = require("../models/user");
const Community = require("../models/community");

// Create a new post
async function createPost(req, res) {
	try {
		const { postCom, postBody } = req.body;

		var date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		if (month < 10) month = "0" + month;
		if (day < 10) day = "0" + day;
		let formattedDate = `${year}/${month}/${day}`;
		console.log(req.session.username + "thank you");
		const newPost = new Post({
			postOwner: req.session.username,
			postCom: postCom,
			postBody: postBody,
			postDate: formattedDate,
		});

		//update the user to get the post
		const savedPost = await newPost.save();
		const user = await User.findOne({ username: req.session.username });
		const updatedUser = await User.findOneAndUpdate(
			{ username: user.username }, // Filter to find the user
			{ $push: { posts: newPost } }, // Update to add the new section
			{ new: true } // Return the updated document
		);

		//update the community to get the post
		const updatedCommunity = await Community.findOneAndUpdate(
			{ comName: postCom }, // Filter to find the user
			{ $push: { posts: newPost } }, // Update to add the new section
			{ new: true } // Return the updated document
		);
		console.log("debug..");
		// if (req.session.username == updatedCommunity.Owner) {
		// 	let isOwner = true;
		// } else if (updatedCommunity.members.includes(req.session.username)) {
		// 	let isMember = true;
		// } else {
		// }

		console.log(
			updatedCommunity.posts.length + "" + updatedCommunity.members.length
		);

		res.render("community", {
			navUsername: user.username,
			Posts: updatedCommunity.posts,
			postsNum: updatedCommunity.posts.length,
			membersNum: updatedCommunity.members.length,
			comBio: updatedCommunity.comBio,
			comName: updatedCommunity.comName,
			postDate: formattedDate,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

//get a user posts
async function getAllposts(req, res) {
	try {
		const posts = await Post.find(); // Fetch all posts from the database
		res.json(posts); // Send the posts as a response
	} catch (error) {
		console.error("Error fetching posts:", error);
		res.status(500).json({ message: "Internal server error" });
	}
}

// Update a post by ID
async function updatePostById(req, res) {
	try {
		const {
			postOwner,
			postCom,
			postBody,
			postImages,
			postDate,
			likers,
			dislikers,
			repliers,
		} = req.body;
		const updatedPost = await Post.findByIdAndUpdate(
			req.params.id,
			{
				postOwner,
				postCom,
				postBody,
				postImages,
				postDate,
				likers,
				dislikers,
				repliers,
			},
			{ new: true }
		);
		if (!updatedPost) {
			return res.status(404).json({ message: "Post not found" });
		}
		res.json(updatedPost);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

//export modules
module.exports = {
	createPost,
	updatePostById,
	getAllposts,
};
