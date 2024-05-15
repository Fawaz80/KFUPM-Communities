const mongoose = require('mongoose');

// MongoDB URI
const uri = 'mongodb://localhost:27017/KFUPM-Communities';

// Connect to MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose;

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// const conn = mongoose.connection;

// let gfs;

// conn.once('open', () => {
//   gfs = grid(conn.db, mongoose.mongo);
//   gfs.collection('uploads'); // Set collection name to 'uploads'
// });

// module.exports = { gfs, conn };
