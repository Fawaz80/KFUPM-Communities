const { ObjectId } = require("mongodb");
const db = require("../db");

// Create a model from the schema
const user = db.model("user", {

    id:            { type: ObjectId },
   username:       { type: String, required: true, unique: true },
   password:       { type: String, required: true },
   email:          { type: String, required: true, unique: true },
   communities:    { type: Array },
   posts:          {type: Array},
   bio:            { type: String},
   icon:           {type: String, default: ""} //fill this

});

module.exports = user;