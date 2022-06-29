import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $userName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      userName: $userName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_WORKOUT = gql`
  mutation addWorkout ($userId: ID, $workoutTitle: String) {
    addWorkout(userId: $userId, workoutTitle: $workoutTitle) {
      email
      workouts {
        workoutTitle
        _id
      }
    }
  }
`;

export const ADD_EXERCISE = gql`
  mutation addExerciseToWorkout( 
      $workoutId: ID
      $exerciseName: String
      $duration: Int
      $distance: Int
      $weight: Int
      $sets: Int
      $reps: Int
  ) {
      addExerciseToWorkout(
      workoutId: $workoutId
      exerciseName: $exerciseName
      duration: $duration
      distance: $distance
      weight: $weight
      sets: $sets
      reps: $reps
      ) {
          workoutTitle
          _id
          day
          exercises {
            exerciseName
            _id
            sets
            reps
            duration
            distance
            weight
          }
        }
  }

`;