const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    categoryName: String
  }

  type Exercise {
    _id: ID
    exerciseName: String
    equipment: String
    description: String
    category: Category
    duration: Int
    distance: Int
    weight: Int
    sets: Int
    reps: Int
  }

  type Auth {
    token: ID
    user: User
  }

  type Workout {
    _id: ID
    workoutTitle: String
    exercises: [Exercise]
    day: String
  }

  type User {
    _id: ID
    userName: String
    email: String
    password: String
    workouts: [Workout]
    exercises: [Exercise]
  }

  type Query {
    categories: [Category]
    exercises(category: ID, exerciseName: String): [Exercise]
    exercise(_id: ID): Exercise
    users: [User]
    user(userName: String): User
    workout(userId: ID, workoutId: ID): Workout
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(userName: String, email: String, password: String): User
    addWorkout(userId: ID, workoutTitle: String): User
    addExerciseToWorkout(
      userId: ID
      workoutId: ID
      exerciseName: String
      duration: Int
      distance: Int
      weight: Int
      sets: Int
      reps: Int
    ): Workout
    deleteExerciseFromWorkout(workoutId: ID, exerciseId: ID): Workout
    deleteWorkoutFromUser(userId: ID, workoutId: ID): User
  }
`;

// line 38 updateExercise(_id: ID!, quantity: Int!): Exercise

module.exports = typeDefs;
