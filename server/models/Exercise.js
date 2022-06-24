const mongoose = require("mongoose");

const { Schema } = mongoose;

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  equipment: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
