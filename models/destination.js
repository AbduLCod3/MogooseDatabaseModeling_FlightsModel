const { Schema, model } = require("mongoose");

// Schema definition
const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SAN", "SEA"], // Allowed airport values
  },
});

// Model creation
const Destination = model("Destination", destinationSchema);

// Export model
module.exports = Destination;
