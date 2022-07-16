const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.pluralize(null);

const LocationSchema = new Schema({
  longitude: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: true,
  },
});

const Location = mongoose.model("Location", LocationSchema);

module.exports = Location;
