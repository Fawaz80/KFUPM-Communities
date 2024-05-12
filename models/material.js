const mongoose = require("../db");

// Create a model from the schema
const materialSchema = new mongoose.Schema(
	{
		materialName: { type: String },
		materialCom: { type: String },
		materialURL: { type: String, unique: true },
	},
	{
		collection: "materials", // Specify the custom collection name here
	}
);

const Material = mongoose.model("Material", materialSchema);

module.exports = Material;
