const mongoose = require("mongoose");

const { Schema } = mongoose;
const roomSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  max: {
    type: Number,
    required: true,
    default: 8,
  },
  owner: {
    type: String,
    required: true,
  },
  concept: String,
  password: String,
  usernum: Number,
  userarr: Array,
  defaultpicture: String,
  createPic: Array,
  fourpic: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Room", roomSchema);
