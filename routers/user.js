const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const user = new User({ email, password, username });
    await user.save();

    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: "Must provide email and password" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(422).send({ error: " Invalid password or email" });
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: " Invalid password or email" });
  }
});

router.get("/users", async (req, res) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "MY_SECRET_KEY");
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res
        .status(422)
        .send({ error: ` Invalid password or email ${err}` });
    }
    res.send(user.username);
  } catch (err) {
    return res.status(422).send({ error: ` Invalid password or email ${err}` });
  }
});

module.exports = router;
