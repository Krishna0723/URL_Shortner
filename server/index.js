const express = require("express");
const cors = require("cors");
const env = require("dotenv");

const route = require("./routes/url");

const URL = require("./models/url");

const { connect } = require("./connection");

env.config();

mongoLink = process.env.mongoLink;

if (!mongoLink) {
  console.error("MongoDB connection string is missing in .env file");
  process.exit(1);
}

connect(mongoLink)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 4000;

app.use(express.json());
app.use("/url", route);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const url = await URL.findOne({ shortId });
  if (url) {
    res.redirect(url.reDirectURL);
  } else {
    res.status(404).send("Not Found");
  }
});

app.listen(port, () => {
  console.log("Server Started" + port);
});
