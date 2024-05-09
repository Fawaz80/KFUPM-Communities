const { ObjectId } = require("mongodb");
const db = require("../db");

// Create a model from the schema
const posts = db.model("posts", {

    id:            { type: ObjectId },
   postOwner:       { type: ObjectId },
   postCom:         {type: ObjectId},
   postBody:       { type: String },
   postImages:          { type: String },
   postDate:        {type: Date},
   likers:      {type: Array},
   dislikers:   {type: Array},
   repliers:    {type: Array}
});

module.exports = posts;