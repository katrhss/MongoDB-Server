const Place = require("../models/place");
const cloudinary = require("../cloud");

exports.createPlace = async (req, res) => {
  const { title, details } = req.body;
  const { file } = req;
  const newPlace = new Place({ title, details });

  if (file) {
    const { secure_url, public_id } = await cloudinary.uploader.upload(
      file.path
    );
    newPlace.thumbnail = { url: secure_url, public_id };
  }

  await newPlace.save();
  res.json(newPlace);
};

exports.getPlaces = async (req, res) => {
  const place = await Place.find({});
  res.send(place);
};
