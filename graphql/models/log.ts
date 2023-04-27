import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  enum LogStatus {
    INITIAL
    COMPLETED
    EXPIRED
  }

  type Log {
    id: String!
    createdAt: String!
    expiresAt: String!
    completed: Boolean!
    status: String!
    habit: Habit!
  }

  type Query {
    logs: [Log]!
    log(logId: String!): Log!
  }

  type Mutation {
    createLog(habitId: String!, expiresAt: String!, status: LogStatus!): Log!
  }
`
