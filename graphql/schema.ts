import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type User {
    id: String
    email: String
    habits: Habit
  }
  type Habit {
    id: String
    totalOfDays: Int
    currentDay: Int
    title: String
    description: String
    category: String
    repeat: String
    completed: Boolean
    createdAt: String
    userId: String
  }
  type Query {
    habits: [Habit]!
    users: [User]!
  }
`
