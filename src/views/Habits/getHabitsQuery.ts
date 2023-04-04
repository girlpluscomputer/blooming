import { gql } from '@apollo/client'

export const getHabitsQuery = gql`
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
      }
    }
  }
`
