import * as Types from './schemas';

export type CreateHabitMutationVariables = Types.Exact<{
  userId: Types.Scalars['String'];
  title: Types.Scalars['String'];
  description: Types.Scalars['String'];
  totalOfDays: Types.Scalars['Int'];
  currentDay: Types.Scalars['Int'];
  completed: Types.Scalars['Boolean'];
  category: Types.Scalars['String'];
}>;


export type CreateHabitMutation = { __typename?: 'Mutation', createHabit: { __typename?: 'Habit', id: string, title: string } };

export type RemoveHabitMutationVariables = Types.Exact<{
  habitId: Types.Scalars['String'];
}>;


export type RemoveHabitMutation = { __typename?: 'Mutation', removeHabit: { __typename?: 'Habit', id: string, title: string } };

export type ToggleHabitMutationVariables = Types.Exact<{
  habitId: Types.Scalars['String'];
  logId: Types.Scalars['String'];
}>;


export type ToggleHabitMutation = { __typename?: 'Mutation', toggleHabit: { __typename?: 'Habit', id: string, title: string, completed: boolean, logs: Array<{ __typename?: 'Log', id: string, completed: boolean }> } };

export type GetHabitsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetHabitsQuery = { __typename?: 'Query', habits: Array<{ __typename?: 'Habit', id: string, title: string, description?: string | null, category: string, completed: boolean, currentDay: number, totalOfDays: number, createdAt: string, logs: Array<{ __typename?: 'Log', id: string, createdAt: string, expiresAt: string, completed: boolean, status: string }>, user: { __typename?: 'User', id: string, email: string } }> };
