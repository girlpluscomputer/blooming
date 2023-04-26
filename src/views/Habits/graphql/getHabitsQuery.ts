import { gql } from '@apollo/client'

const getHabitsQuery = gql`
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
export default getHabitsQuery
