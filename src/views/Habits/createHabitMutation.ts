import { gql } from '@apollo/client'

export const createHabitMutation = gql`
  mutation createHabitMutation(
    $userId: String!
    $title: String!
    $description: String!
    $totalOfDays: Int!
    $currentDay: Int!
    $completed: Boolean!
    $category: String!
    $repeat: String!
  ) {
    createHabit(
      userId: $userId
      title: $title
      description: $description
      totalOfDays: $totalOfDays
      currentDay: $currentDay
      completed: $completed
      category: $category
      repeat: $repeat
    ) {
      id
      email
    }
  }
`
