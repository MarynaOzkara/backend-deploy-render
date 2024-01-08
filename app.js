const express = require("express");
const cors = require("cors");
const { getAll } = require("./controllers/post");
const postRouter = require("./routes/posts.js");
const authRouter = require("./routes/auth.js");

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static("uploads"));

app.use("/posts", postRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.json("Hello from backend");
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
