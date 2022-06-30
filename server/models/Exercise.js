const mongoose = require("mongoose");
const { Schema } = mongoose;

const exerciseSchema = new Schema({
  exerciseName: {
    type: String,
    // required: true,
    trim: true,
    // unique: true,
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
    // required: true,
  },
  duration: {
    type: Number,
  },
  distance: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
