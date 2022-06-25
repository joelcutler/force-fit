const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const AddedExerciseSchema = new Schema({
  exercise: {
    type: String,
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

const AddedExercise = mongoose.model("AddedExercise", AddedExerciseSchema);

module.exports = AddedExercise;
