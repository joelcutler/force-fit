import { useReducer } from "react";
import { SET_USER, SET_WORKOUT, SET_EXERCISE } from "./actions";


export const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      //   console.log(action);
      return {
        ...state,
        user: action.user,
      };

    case SET_WORKOUT:
      console.log(action, "Action")
        return {
          ...state,
          workout: action.workout
        };
    
        // case NEW_WORKOUT: 
        // return {
        //   ...state,
        //   workout: action.workout.data.addWorkout
        // }

    case SET_EXERCISE:
      return{
        ...state,
        user: {...state.user, workouts: [...state.user.workouts.filter(workout => workout._id !== action.user.data.addExerciseToWorkout), action.user.data.addExerciseToWorkout]}
      }
    default:
      return state;
  }
};

export function useAppReducer(initialState) {
  return useReducer(reducer, initialState);
}
