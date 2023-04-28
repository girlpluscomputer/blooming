import * as Types from './operations';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const CreateHabitDocument = gql`
    mutation CreateHabit($userId: String!, $title: String!, $description: String!, $totalOfDays: Int!, $currentDay: Int!, $completed: Boolean!, $category: String!) {
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
    `;
export type CreateHabitMutationFn = Apollo.MutationFunction<Types.CreateHabitMutation, Types.CreateHabitMutationVariables>;

/**
 * __useCreateHabitMutation__
 *
 * To run a mutation, you first call `useCreateHabitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHabitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHabitMutation, { data, loading, error }] = useCreateHabitMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      totalOfDays: // value for 'totalOfDays'
 *      currentDay: // value for 'currentDay'
 *      completed: // value for 'completed'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useCreateHabitMutation(baseOptions?: Apollo.MutationHookOptions<Types.CreateHabitMutation, Types.CreateHabitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.CreateHabitMutation, Types.CreateHabitMutationVariables>(CreateHabitDocument, options);
      }
export type CreateHabitMutationHookResult = ReturnType<typeof useCreateHabitMutation>;
export type CreateHabitMutationResult = Apollo.MutationResult<Types.CreateHabitMutation>;
export type CreateHabitMutationOptions = Apollo.BaseMutationOptions<Types.CreateHabitMutation, Types.CreateHabitMutationVariables>;
export const RemoveHabitDocument = gql`
    mutation RemoveHabit($habitId: String!) {
  removeHabit(habitId: $habitId) {
    id
    title
  }
}
    `;
export type RemoveHabitMutationFn = Apollo.MutationFunction<Types.RemoveHabitMutation, Types.RemoveHabitMutationVariables>;

/**
 * __useRemoveHabitMutation__
 *
 * To run a mutation, you first call `useRemoveHabitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveHabitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeHabitMutation, { data, loading, error }] = useRemoveHabitMutation({
 *   variables: {
 *      habitId: // value for 'habitId'
 *   },
 * });
 */
export function useRemoveHabitMutation(baseOptions?: Apollo.MutationHookOptions<Types.RemoveHabitMutation, Types.RemoveHabitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.RemoveHabitMutation, Types.RemoveHabitMutationVariables>(RemoveHabitDocument, options);
      }
export type RemoveHabitMutationHookResult = ReturnType<typeof useRemoveHabitMutation>;
export type RemoveHabitMutationResult = Apollo.MutationResult<Types.RemoveHabitMutation>;
export type RemoveHabitMutationOptions = Apollo.BaseMutationOptions<Types.RemoveHabitMutation, Types.RemoveHabitMutationVariables>;
export const ToggleHabitDocument = gql`
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
    `;
export type ToggleHabitMutationFn = Apollo.MutationFunction<Types.ToggleHabitMutation, Types.ToggleHabitMutationVariables>;

/**
 * __useToggleHabitMutation__
 *
 * To run a mutation, you first call `useToggleHabitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleHabitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleHabitMutation, { data, loading, error }] = useToggleHabitMutation({
 *   variables: {
 *      habitId: // value for 'habitId'
 *      logId: // value for 'logId'
 *   },
 * });
 */
export function useToggleHabitMutation(baseOptions?: Apollo.MutationHookOptions<Types.ToggleHabitMutation, Types.ToggleHabitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.ToggleHabitMutation, Types.ToggleHabitMutationVariables>(ToggleHabitDocument, options);
      }
export type ToggleHabitMutationHookResult = ReturnType<typeof useToggleHabitMutation>;
export type ToggleHabitMutationResult = Apollo.MutationResult<Types.ToggleHabitMutation>;
export type ToggleHabitMutationOptions = Apollo.BaseMutationOptions<Types.ToggleHabitMutation, Types.ToggleHabitMutationVariables>;
export const GetHabitsDocument = gql`
    query GetHabits {
  habits {
    id
    title
    description
    category
    completed
    currentDay
    totalOfDays
    createdAt
    logs {
      id
      createdAt
      expiresAt
      completed
      status
    }
    user {
      id
      email
    }
  }
}
    `;

/**
 * __useGetHabitsQuery__
 *
 * To run a query within a React component, call `useGetHabitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHabitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHabitsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHabitsQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetHabitsQuery, Types.GetHabitsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetHabitsQuery, Types.GetHabitsQueryVariables>(GetHabitsDocument, options);
      }
export function useGetHabitsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetHabitsQuery, Types.GetHabitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetHabitsQuery, Types.GetHabitsQueryVariables>(GetHabitsDocument, options);
        }
export type GetHabitsQueryHookResult = ReturnType<typeof useGetHabitsQuery>;
export type GetHabitsLazyQueryHookResult = ReturnType<typeof useGetHabitsLazyQuery>;
export type GetHabitsQueryResult = Apollo.QueryResult<Types.GetHabitsQuery, Types.GetHabitsQueryVariables>;