const mongoose = require('../db');

// Create a model from the schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 16,
      match: /^[a-zA-Z0-9._]{3,16}$/,
      validate: {
        validator: async function (value) {
          const user = await this.constructor.findOne({ username: value });
          return !user;
        },
        message: 'Username already exists',
      },
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          // Validate email format using a regular expression
          // This regex is just a basic example, you may want to use a more comprehensive one
          return /^\S+@\S+\.\S+$/.test(value);
        },
        message: 'Invalid email format',
      },
      validate: {
        validator: async function (value) {
          const user = await this.constructor.findOne({ email: value });
          return !user;
        },
        message: 'Email already exists',
      },
    },
    communities: { type: Array },
    posts: { type: Array },
    bio: { type: String },
    icon: { type: String, default: '' }, //fill this
  },
  {
    collection: 'users', // Specify the custom collection name here
  },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
