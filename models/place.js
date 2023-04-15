const mongoose = require("mongoose");

const placeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  details: {
    type: String,
    required: true,
    trim: true,
  },
  thumbnail: {
    type: Object,
    uri: {
      type: URL,
      required: true,
    },
  },
  coords: {
    type: Object,
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
});

module.exports = mongoose.model("Place", placeSchema);
