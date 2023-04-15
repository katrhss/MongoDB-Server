const Place = require("../models/place");
const cloudinary = require("../cloud");

exports.createPlace = async (req, res) => {
  const { title, details, coords } = req.body;
  const { file } = req;
  const newPlace = new Place({ title, details });

  if (coords) {
    const newCoords = JSON.parse(coords);
    const latitude = parseFloat(newCoords.latitude);
    const longitude = parseFloat(newCoords.longitude);
    newPlace.coords = { longitude, latitude };
  }

  if (file) {
    const { secure_url } = await cloudinary.uploader.upload(file.path);
    newPlace.thumbnail = { uri: secure_url };
  }

  await newPlace.save();
  res.json(newPlace);
};

exports.getPlaces = async (req, res) => {
  const place = await Place.find({});
  res.send(place);
};
