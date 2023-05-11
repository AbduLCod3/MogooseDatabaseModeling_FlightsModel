const { Schema, model } = require("mongoose");

// Flight schema
const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"], // Airline choices
    required: true,
  },
  flightNo: {
    type: Number,
    required: true,
    min: 999,
    max: 9999, // Flight number range
  },
  departs: {
    type: Date,
    default: function () {
      // Default departure time
      return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    },
  },

  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SAN", "SEA"], // Airport choices
    default: "SAN",
  },

  destination: [{ type: Schema.Types.ObjectId, ref: "destination" }], // Destination reference
});

// Model creation
const Flight = model("Flight", flightSchema);

// Export model
module.exports = Flight;
