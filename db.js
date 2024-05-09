const mongoose = require('mongoose');

// Atlas server URI
const uri = "mongodb+srv://fawaz80:102030@cluster0.2awghdp.mongodb.net/KFUPM-Communities?retryWrites=true&w=majority"; //security issues change the pass here.

async function connectToDatabase() {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB Atlas");
        return mongoose.connection;
    } catch (err) {
        console.error("Error connecting to MongoDB Atlas", err);
        throw err;
    }
}

module.exports = connectToDatabase;