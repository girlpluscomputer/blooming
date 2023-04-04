import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  enum LogStatus {
    INITIAL
    COMPLETED
    EXPIRED
  }

  type Log {
    id: String
    createdAt: String
    expiresAt: String
    status: LogStatus
    habit: Habit
  }

  type Habit {
    id: String
    totalOfDays: Int
    currentDay: Int
    title: String
    description: String
    category: String
    completed: Boolean
    createdAt: String
    updatedAt: String
    user: User
    logs: [Log]
  }

  type User {
    id: String
    email: String
    habits: [Habit]
  }

  type Query {
    habits: [Habit]!
    users: [User]!
    logs: [Log]!
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

    createLog(habitId: String!, expiresAt: String!, status: LogStatus!): Log!
  }
`
