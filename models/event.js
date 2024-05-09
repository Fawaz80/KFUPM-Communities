const { ObjectId } = require("mongodb");
const db = require("../db");

// Create a model from the schema
const events = db.model("events", {

    id:            { type: ObjectId },
   eventTitle:       { type: String },
   eventText:         {type: String},
   eventImages:       { type: String, unique: true },
   eventDatePosted:          { type: Date },
   eventCom:        {type: ObjectId},
});

module.exports = events;