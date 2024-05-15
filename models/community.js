const mongoose = require('../db');

// Create a model from the schema
const communitySchema = new mongoose.Schema(
  {
    comName: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
    },
    comBio: { type: String },
    comIcon: { type: String },
    owner: { type: String },
    members: { type: Array },
    posts: { type: Array },
    events: { type: Array },
    materials: { type: Array },
  },
  {
    collection: 'communities', // Specify the custom collection name here
  },
);

const Community = mongoose.model('Community', communitySchema);

module.exports = Community;
