import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Habit {
    id: String
    totalOfDays: Int
    currentDay: Int
    title: String
    description: String
    category: String
    completed: Boolean
    createdAt: String
    user: User
    logs: [Log]
  }

  type Query {
    habits: [Habit]!
  }

  type Mutation {
    createHabit(
      userId: String!
      title: String!
      description: String!
      totalOfDays: Int!
      currentDay: Int!
      completed: Boolean!
      category: String!
    ): Habit!
  }
`
