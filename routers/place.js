const router = require("express").Router();
const { createPlace, getPlaces } = require("../controllers/place");
const multer = require("../middlewares/multer");
const { placeValidator, validate } = require("../middlewares/placeValidator");

router.post(
  "/places",
  multer.single("thumbnail"),
  placeValidator,
  validate,
  createPlace
);
router.get("/places", getPlaces);

module.exports = router;
