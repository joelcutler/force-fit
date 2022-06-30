const mongoose = require("mongoose");
const { Schema } = mongoose;
const Exercise = require("./Exercise");

const workoutSchema = new Schema(
  {
    workoutTitle: {
      type: String,
    },

    exercises: [Exercise.schema],

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
