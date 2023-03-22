import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Habit {
    id: String
    title: String
    description: String
    totalOfDays: Int
    currentDay: Int
    category: String
    repeat: String
    completed: Boolean
    createdAt: String
  }

  type Query {
    habits: [Habit]!
  }
`
