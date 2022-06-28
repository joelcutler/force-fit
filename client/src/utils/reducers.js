import { useReducer } from "react";
import { SET_USER, SET_WORKOUT } from "./actions";

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
        }
    default:
      return state;
  }
};

export function useAppReducer(initialState) {
  return useReducer(reducer, initialState);
}
