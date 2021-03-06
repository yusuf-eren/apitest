const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.pluralize(null);

const LocationSchema = new Schema({
  longitude: {
    type: String,
    required: true,
    default:''
  },
  latitude: {
    type: String,
    required: true,
    default:''
  },
});

const Location = mongoose.model("Location", LocationSchema);

module.exports = Location;
