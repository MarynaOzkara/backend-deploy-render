const app = require("./app.js");
const setupMongoConection = require("./common/utils/setupMongoConection");
const PORT = process.env.PORT || 4000;

app.listen(4000, async () => {
  await setupMongoConection();
  console.log(`Server start on port ${PORT}`);
});
