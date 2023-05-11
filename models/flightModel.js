const { Schema, model } = require("mongoose");
// Destructuring  Schema and model from mongoose and
// setting them to their own vars

// create a new Schema
// This will define the shape of the documents in the collection
// https://mongoosejs.com/docs/guide.html
const destinationSchema =  new Schema ({
  airport: {
   type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA' ]}
})
const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
    required: true,
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
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
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA' ],
    default: 'SAN'
  }, 

  destinations: {
    type: [destinationSchema]
  }
});

// Creating Flight model : We need to convert our schema into a model--
// will be stored in 'flights' collection.
// Mongo does this for you automatically
// Model's are fancy constructors compiled from Schema definitions
// An instance of a model is called a document.
// Models are responsible for creating and reading documents from the underlying MongoDB Database
// from here: https://mongoosejs.com/docs/models.html
const Flight = model("Flight", flightSchema);

//make this exportable to be accessed in `app.js`
module.exports = Flight;
