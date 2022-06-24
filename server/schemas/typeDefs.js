const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Exercise {
    _id: ID
    name: String
    equipment: String
    description: String
    category: Category
  }

  type addedExercise {
    exercise: String
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
    title: String
    _id: ID
    workout: [addedExercise]
    day: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    workouts: [Workout]
    addedExercises: [addedExercise]
  }

  type Query {
    categories: [Category]
    exercises(category: ID, name: String): [Exercise]
    exercise(_id: ID): Exercise
    users: [User]
    user(firstName: String): User
    workout(userId: ID, workoutId: ID): Workout
    #checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addWorkout(userId: ID, title: String): User
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
    addExerciseToWorkout(
      userId: ID
      workoutId: ID
      exercise: String
      duration: Int
      distance: Int
      weight: Int
      sets: Int
      reps: Int
    ): Workout
  }
`;

// line 38 updateExercise(_id: ID!, quantity: Int!): Exercise

module.exports = typeDefs;
