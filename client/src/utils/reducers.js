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
        return {
          ...state,
          workout: action.workout
        };

        case SET_EXERCISE:
          console.log(action, "Action")
          return{
            
            ...state,

            user: {...state.user, workouts: [...state.user.workouts.filter(workout => workout._id !== action.exercise.workout._id), action.exercise.workout]}
          }
    default:
      return state;
  }
};

export function useAppReducer(initialState) {
  return useReducer(reducer, initialState);
}
