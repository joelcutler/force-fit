const mongoose = require('mongoose');
const { Schema } = mongoose;

const workoutSchema = new Schema({
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Exercise',
      required: true
    }
  ],
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
  day: {
    type: Date,
    default: Date.now,
  },
});



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;