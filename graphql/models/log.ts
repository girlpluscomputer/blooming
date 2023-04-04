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

  type Query {
    logs: [Log]!
  }

  type Mutation {
    createLog(habitId: String!, expiresAt: String!, status: LogStatus!): Log!
  }
`
