const { gql } = require('apollo-server-express');

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
    day: Date
  }

  type Query {

  }

  type Mutation {

  }
`;

module.exports = typeDefs;