import { useReducer } from "react";
import { SET_USER } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      //   console.log(action);
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export function useAppReducer(initialState) {
  return useReducer(reducer, initialState);
}
