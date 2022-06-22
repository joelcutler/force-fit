const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Excercise {
    _id: ID
    name: String
    equipment: String
    category: Category
  }

  type User {
    firstName: String
    lastName: String
    email: String
    password: String
    Workouts: Workout
  }

  # workout type needs fixing
  type Workout {
    exercises: [Exercise]
    duration: Number
    distance: Number
    weight: Number
    sets: Number
    reps: Number
    day: Date
  }

  type Query {

  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addWorkout(exercisess: [ID]!): Wokrout
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User

    login(email: String!, password: String!): Auth
  }
`;

// line 38 updateExercise(_id: ID!, quantity: Int!): Exercise

module.exports = typeDefs;
