const express = require("express");
const cors = require("cors");
const setupMongoConection = require("./common/utils/setupMongoConection");
const { getAll } = require("./controllers/post");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/posts", getAll);

app.get("/api", (req, res) => {
  res.json("Hello from backend");
});
app.listen(PORT, async () => {
  await setupMongoConection();
  console.log(`Server start on port ${PORT}`);
});
