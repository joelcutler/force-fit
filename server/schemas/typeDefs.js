const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Categoty {

  }

  type exercise {

  }

  type User {

  }

  type Workout {

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
  }
`;

// line 38 updateExercise(_id: ID!, quantity: Int!): Exercise

module.exports = typeDefs;
