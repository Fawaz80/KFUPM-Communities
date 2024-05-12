const mongoose = require("../db");

// Create a model from the schema
const postSchema = new mongoose.Schema(
	{
		postOwner: { type: String },
		postCom: { type: String },
		postBody: { type: String },
		postImages: { type: String },
		postDate: { type: String },
		likers: { type: Array },
		dislikers: { type: Array },
		repliers: { type: Array },
	},
	{
		collection: "posts", // Specify the custom collection name here
	}
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
