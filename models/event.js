const mongoose = require("../db");

// Create a model from the schema
const eventSchema = new mongoose.Schema(
	{
		eventTitle: { type: String },
		eventText: { type: String },
		eventImages: { type: String, unique: true },
		eventDatePosted: { type: String },
		eventCom: { type: String },
	},
	{
		collection: "events", // Specify the custom collection name here
	}
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
