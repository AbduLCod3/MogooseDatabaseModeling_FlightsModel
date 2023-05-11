const { Schema, model } = require("mongoose");

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
    required: true,
  },
  flightNo: {
    type: Number,
    required: true,
    min: 999,
    max: 9999,
  },
  departs: {
    type: Date,
    default: function () {
      return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    },
  },

  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
    default: "SAN",
  },

  destination: [{ type: Schema.Types.ObjectId, ref: "Destination" }],
});

const Flight = model("Flight", flightSchema);

//make this exportable to be accessed in `app.js`
module.exports = Flight;
