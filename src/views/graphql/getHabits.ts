import { gql } from '@apollo/client'

export const GET_HABITS = gql`
  query GetHabits {
    habits {
      id
      title
      description
      category
      completed
      currentDay
      totalOfDays
      logs {
        id
        createdAt
        expiresAt
        completed
      }
    }
  }
`
