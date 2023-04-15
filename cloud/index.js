const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dezlftmum",
  api_key: "337914989825699",
  api_secret: "sNq_7kPZ_0AF67tfSWndS9kkX0E",
  secure: true,
});

module.exports = cloudinary;
