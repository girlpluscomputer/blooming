import { gql } from '@apollo/client'

export const REMOVE_HABIT = gql`
  mutation RemoveHabit($habitId: String!) {
    removeHabit(habitId: $habitId) {
      id
      title
    }
  }
`
