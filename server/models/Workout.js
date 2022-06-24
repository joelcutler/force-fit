const mongoose = require("mongoose");
const { Schema } = mongoose;
const addedExercise = require("./addedExercise");

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    workout: [addedExercise.schema],
    day: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
