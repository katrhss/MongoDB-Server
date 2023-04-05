require("express-async-errors");
require("./db");
const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const postRouter = require("./routers/place");
const userRouter = require("./routers/user");
const requireAuth = require("./middlewares/requireAuth");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(postRouter);
app.use(userRouter);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message || err });
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Port is listening on " + PORT);
});
