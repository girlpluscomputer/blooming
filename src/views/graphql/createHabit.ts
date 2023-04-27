import { gql } from '@apollo/client'

export const CREATE_HABIT = gql`
  mutation createHabit(
    $userId: String!
    $title: String!
    $description: String!
    $totalOfDays: Int!
    $currentDay: Int!
    $completed: Boolean!
    $category: String!
  ) {
    createHabit(
      userId: $userId
      title: $title
      description: $description
      totalOfDays: $totalOfDays
      currentDay: $currentDay
      completed: $completed
      category: $category
    ) {
      id
      title
    }
  }
`
