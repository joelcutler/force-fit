const mongoose = require("mongoose");
const { Schema } = mongoose;

const workoutSchema = new Schema({
  exercises: {
    exercise: {
      type: Schema.Types.ObjectId,
      ref: "Exercise",
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
  },
  day: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
