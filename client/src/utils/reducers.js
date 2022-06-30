import { useReducer } from "react";
import {
  SET_USER,
  SET_WORKOUT,
  SET_EXERCISE,
  NEW_WORKOUT,
  DELETE_WORKOUT,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      //   console.log(action);
      return {
        ...state,
        user: action.user,
      };

    case SET_WORKOUT:
      return {
        ...state,
        workout: action.workout,
      };

    case NEW_WORKOUT:
      // console.log(action.workout.data.addWorkout, "Action");
      return {
        ...state,
        user: {
          ...state.user,
          workouts: [
            action.workout,
            ...state.user.workouts.filter(
              (workout) => workout._id !== action.workout
            ),
          ],
        },
      };

    case SET_EXERCISE:
      return {
        ...state,
        user: {
          ...state.user,
          workouts: [
            ...state.user.workouts.filter(
              (workout) => workout._id !== action.user.data.addExerciseToWorkout
            ),
            action.user.data.addExerciseToWorkout,
          ],
        },
      };

    case DELETE_WORKOUT:
      let newWorkoutsState = state.user.workouts.filter((workout) => {
        // console.log(action.id === workout._id);
        // console.log(workout._id, "workout._id heere");

        return workout._id !== action.id;
      });

      return {
        ...state,
        user: {
          ...state.user,
          workouts: newWorkoutsState,
        },
      };

    default:
      return state;
  }
};

export function useAppReducer(initialState) {
  return useReducer(reducer, initialState);
}
