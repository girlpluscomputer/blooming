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
      repeat
      totalOfDays
      logs {
        id
        createdAt
        completed
        disabled
        weekDay
      }
    }
  }
`
