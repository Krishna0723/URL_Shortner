const URL = require("../models/url");
const shortid = require("shortid");

async function generateShortURL(req, res) {
  const shortId = shortid();
  const ORG_URL = req.body;
  console.log(ORG_URL);

  if (!ORG_URL.url) return res.status(400).json({ error: "url is requires" });
  await URL.create({
    shortId: shortId,
    reDirectURL: ORG_URL.url,
  });
  return res.json({ id: shortId });
}

module.exports = {
  generateShortURL,
};
