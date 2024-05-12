// Import the User model
const User = require("../models/user");
// Import necessary modules
const bcrypt = require("bcrypt");
const session = require("express-session");

// Get all users
async function getAllUsers(req, res) {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

// Create a new user (redundant)
async function createUser(req, res) {
	try {
		const { username, password, email } = req.body;
		const newUser = new User({ username, password, email });
		const savedUser = await newUser.save();
		res.status(201).json(savedUser);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

//Create a new user 2 (sign up)
async function signUp(req, res) {
	try {
		// Handle form submission here
		const { username, email, password, confirmPassword } = req.body;

		// Check if passwords match
		if (confirmPassword !== password || password.length < 8) {
			throw new Error("Password confirmation failed");
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10); // Salt rounds: 10

		// Create a new User instance with hashed password
		const newUser = new User({
			username: username,
			password: hashedPassword,
			email: email,
		});

		// Save the new user to the database
		await newUser.save();

		console.log("User created successfully");

		// Redirect to success page after user is saved
		req.session.loggedIn = true;
		req.session.username = username;
		res.render("home", { navUsername: req.session.username });
	} catch (error) {
		console.error("An error occurred:", error);

		// Render error message or redirect to sign-up page with error message
		res.render("./signup", {
			error: "An error occurred. Please try again.",
		});
	}
}

// Get a user by ID
async function getUserById(req, res) {
	try {
		const user = await User.findById(req.params.id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

// Get a user by username
async function getUserByUsername(req, res) {
	try {
		const user = await User.findById(req.params.username);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

// Update a user by ID
async function updateUserById(req, res) {
	try {
		const { username, password, email, communities, posts, bio, icon } =
			req.body;
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{ username, password, email, communities, posts, bio, icon },
			{ new: true }
		);
		if (!updatedUser) {
			return res.status(404).json({ message: "User not found" });
		}
		res.json(updatedUser);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

// Delete a user by ID
async function deleteUserById(req, res) {
	try {
		const deletedUser = await Song.findByIdAndDelete(req.params.id);
		if (!deletedUser) {
			return res.status(404).json({ message: "User not found" });
		}
		res.json({ message: "User deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

//Login
async function logIn(req, res) {
	try {
		const { username, password } = req.body;
		console.log(username);
		// Find user by username
		const user = await User.findOne({ username: username });
		// If user not found, return error
		if (!user) {
			return res.status(401).send("Invalid username");
		}
		// Compare hashed password with input password
		const passwordMatch = await bcrypt.compare(password, user.password);
		// If password doesn't match, return error
		if (!passwordMatch) {
			return res.status(401).send("Invalid password");
		}
		// If username and password match, log in successfully
		req.session.loggedIn = true;
		req.session.username = username;
		console.log(req.session.loggedIn + " " + req.session.username);
		res.render("home", { navUsername: req.session.username });
	} catch (error) {
		console.error("Login error:", error);
		res.status(500).send("An unexpected error occurred");
	}
}

//export modules
module.exports = {
	getAllUsers,
	createUser,
	getUserById,
	updateUserById,
	deleteUserById,
	logIn,
	signUp,
	getUserByUsername,
};
