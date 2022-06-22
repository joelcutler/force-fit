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
    category: Category
  }

  type User {
    firstName: String
    lastName: String
    email: String
    password: String
    Workouts: Workout
  }
  type Auth {
    token: ID
    user: User
  }

  type Workout {
    exercises: [Exercise]
    duration: Int
    distance: Int
    weight: Int
    sets: Int
    reps: Int
    day: String
  }

  type Query {
    categories: [Category]
    exercises(category: ID, name: String): [Exercise]
    exercise(_id: ID!): Exercise
    user: User
    workout(_id: ID!): Workout
    #checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addWorkout(exercises: [ID]!): Workout
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
