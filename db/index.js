const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://admin:admin@local.tol4uo2.mongodb.net/test")
  .then(() => console.log("db connected"))
  .catch((err) => console.log("db connection failed: " + err.message || err));
