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
    url: {
      type: URL,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
      unique: true,
    },
  },
});

module.exports = mongoose.model("Place", placeSchema);
