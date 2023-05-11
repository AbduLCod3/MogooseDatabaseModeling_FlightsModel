// .env configuration
require("dotenv").config();
// Dependencies
const mongoose = require("mongoose");

//Global cofiguration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// connect to mongo
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongodb not running?"));
db.on("open", () => console.log("mongo connected: "));
db.on("close", () => console.log("mongo disconnected"));
