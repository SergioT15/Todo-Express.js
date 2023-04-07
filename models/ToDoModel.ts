import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  filter: {
    type: String,
    default: "All",
  },
});

module.exports = mongoose.model("ToDo", todoSchema);
