const mongoose = require("mongoose");

const NewOne = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("newOne", NewOne);
