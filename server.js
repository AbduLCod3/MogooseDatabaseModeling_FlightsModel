require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const Flight = require("./models/flight");
const methodOverride = require("method-override");
const Destination = require("./models/destination");
const { connect, connection } = require("mongoose");

// Database connect
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MongoDB connection
connection.once("open", () => {
  console.log("connected to mongo");
});

// View Engine Config
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);

// Set view engine
app.set("view engine", "jsx");
app.set("views", "./views");

// Middleware setup
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// Custom Middleware
app.use((req, res, next) => {
  console.log("Middleware running...");
  next();
});

// Routes
app.get("/flights", async (req, res) => {
  try {
    const foundFlight = await Flight.find({});
    res.status(200).render("index", { flight: foundFlight });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New route
app.get("/flights/new", (req, res) => {
  res.render("New");
});

// Create route
app.post("/flights", async (req, res) => {
  try {
    const newflight = await Flight.create(req.body);
    res.redirect("/flights");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update route
app.put("/flights/:id", async (req, res) => {
  try {
    const updatetFlight = await Flight.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.redirect(`flight/${req.params.id}`, {
      flight: updatetFlight,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Show route
app.get("/flights/:id", async (req, res) => {
  try {
    const newFlight = await Flight.findById(req.params.id).populate(
      "destinations"
    );
    res.render("Show", { flight: newFlight });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Server listening
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
