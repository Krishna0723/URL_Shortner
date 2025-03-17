const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    reDirectURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "short-url",
  }
);

const URL = mongoose.model("url", urlSchema);
module.exports = URL;
