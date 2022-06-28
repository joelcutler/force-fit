import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($userName: String) {
    user(userName: $userName) {
      userName
      _id
      workouts {
        _id
        workoutTitle
        exercises {
          exerciseName
        }
        day
      }
    }
  }
`;

export const QUERY_EXERCISES = gql`
query workoutt($workoutTitle: String) {
  workout(workoutTitle: $workout) {
    workoutTitle
    exercises {
      exerciseName
      equipment
      description
      category
      weight
      sets
      reps
    }
  }
}`

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
