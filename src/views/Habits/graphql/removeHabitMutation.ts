import { gql } from '@apollo/client'

const removeHabitMutation = gql`
  mutation RemoveHabit($habitId: String!) {
    removeHabit(habitId: $habitId) {
      id
      title
    }
  }
`
export default removeHabitMutation
