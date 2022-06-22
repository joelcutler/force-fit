const mongoose = require('mongoose');
const { Schema } = mongoose;

const workoutSchema = new Schema({
  exercise: [
    {
      type: {
        type: String,
        required: 'Type of exercise to perform, enter you will.',
      },
      name: {
        type: String,
        required: 'Exercise name to perform, enter you will.',
      },
      duration: {
        type: Number,
        required: 'Duration in minutes, enter you will.',
      },
      distance: {
        type: Number
      },
      weight: {
        type: Number
      },
      sets: {
        type: Number
      },
      reps: {
        type: Number
      },
    },
  ],
  day: {
    type: Date,
    default: Date.now,
  },
});



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;