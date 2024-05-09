const { ObjectId } = require("mongodb");
const db = require("../db");

// Create a model from the schema
const community = db.model("community", {

    id:            { type: ObjectId },
   comName:       { type: String, required: true, unique: true },
   comBio:        { type: String },
   comIcon:          { type: String, default: ""},
   owner:           {type: ObjectId, },
   members:         { type: Array },
   posts:          {type: Array},
   events:          {type: Array},
   materials:          {type: Array}

});

module.exports = community;