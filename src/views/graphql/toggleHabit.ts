import { gql } from '@apollo/client'

export const TOGGLE_HABIT = gql`
  mutation ToggleHabit($habitId: String!, $logId: String!) {
    toggleHabit(habitId: $habitId, logId: $logId) {
      id
      title
      completed
      logs {
        id
        completed
      }
    }
  }
`
