/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Habit = {
  __typename?: 'Habit';
  category: Scalars['String'];
  completed: Scalars['Boolean'];
  createdAt: Scalars['String'];
  currentDay: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  logs: Array<Maybe<Log>>;
  title: Scalars['String'];
  totalOfDays: Scalars['Int'];
  user: User;
};

export type Log = {
  __typename?: 'Log';
  completed: Scalars['Boolean'];
  createdAt: Scalars['String'];
  expiresAt: Scalars['String'];
  habit: Habit;
  id: Scalars['String'];
  status: Scalars['String'];
};

export enum LogStatus {
  Completed = 'COMPLETED',
  Expired = 'EXPIRED',
  Initial = 'INITIAL'
}

export type Mutation = {
  __typename?: 'Mutation';
  createHabit: Habit;
  createLog: Log;
  removeHabit: Habit;
  toggleHabit: Habit;
};


export type MutationCreateHabitArgs = {
  category: Scalars['String'];
  completed: Scalars['Boolean'];
  currentDay: Scalars['Int'];
  description: Scalars['String'];
  title: Scalars['String'];
  totalOfDays: Scalars['Int'];
  userId: Scalars['String'];
};


export type MutationCreateLogArgs = {
  expiresAt: Scalars['String'];
  habitId: Scalars['String'];
  status: LogStatus;
};


export type MutationRemoveHabitArgs = {
  habitId: Scalars['String'];
};


export type MutationToggleHabitArgs = {
  habitId: Scalars['String'];
  logId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  habits: Array<Maybe<Habit>>;
  log: Log;
  logs: Array<Maybe<Log>>;
  users: Array<Maybe<User>>;
};


export type QueryLogArgs = {
  logId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  habits?: Maybe<Array<Maybe<Habit>>>;
  id: Scalars['String'];
};

export type CreateHabitMutationMutationVariables = Exact<{
  userId: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  totalOfDays: Scalars['Int'];
  currentDay: Scalars['Int'];
  completed: Scalars['Boolean'];
  category: Scalars['String'];
}>;


export type CreateHabitMutationMutation = { __typename?: 'Mutation', createHabit: { __typename?: 'Habit', id: string, title: string } };

export type GetHabitsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHabitsQuery = { __typename?: 'Query', habits: Array<{ __typename?: 'Habit', id: string, title: string, description?: string | null, category: string, completed: boolean, currentDay: number, totalOfDays: number, logs: Array<{ __typename?: 'Log', id: string, createdAt: string, expiresAt: string, completed: boolean } | null> } | null> };

export type RemoveHabitMutationVariables = Exact<{
  habitId: Scalars['String'];
}>;


export type RemoveHabitMutation = { __typename?: 'Mutation', removeHabit: { __typename?: 'Habit', id: string, title: string } };

export type ToggleHabitMutationVariables = Exact<{
  habitId: Scalars['String'];
  logId: Scalars['String'];
}>;


export type ToggleHabitMutation = { __typename?: 'Mutation', toggleHabit: { __typename?: 'Habit', id: string, title: string, completed: boolean, logs: Array<{ __typename?: 'Log', id: string, completed: boolean } | null> } };


export const CreateHabitMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createHabitMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"totalOfDays"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currentDay"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"completed"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createHabit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"totalOfDays"},"value":{"kind":"Variable","name":{"kind":"Name","value":"totalOfDays"}}},{"kind":"Argument","name":{"kind":"Name","value":"currentDay"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currentDay"}}},{"kind":"Argument","name":{"kind":"Name","value":"completed"},"value":{"kind":"Variable","name":{"kind":"Name","value":"completed"}}},{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateHabitMutationMutation, CreateHabitMutationMutationVariables>;
export const GetHabitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHabits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"habits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}},{"kind":"Field","name":{"kind":"Name","value":"currentDay"}},{"kind":"Field","name":{"kind":"Name","value":"totalOfDays"}},{"kind":"Field","name":{"kind":"Name","value":"logs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}}]}}]}}]}}]} as unknown as DocumentNode<GetHabitsQuery, GetHabitsQueryVariables>;
export const RemoveHabitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveHabit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"habitId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeHabit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"habitId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"habitId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<RemoveHabitMutation, RemoveHabitMutationVariables>;
export const ToggleHabitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleHabit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"habitId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"logId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleHabit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"habitId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"habitId"}}},{"kind":"Argument","name":{"kind":"Name","value":"logId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"logId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}},{"kind":"Field","name":{"kind":"Name","value":"logs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}}]}}]}}]}}]} as unknown as DocumentNode<ToggleHabitMutation, ToggleHabitMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Habit = {
  __typename?: 'Habit';
  category: Scalars['String'];
  completed: Scalars['Boolean'];
  createdAt: Scalars['String'];
  currentDay: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  logs: Array<Maybe<Log>>;
  title: Scalars['String'];
  totalOfDays: Scalars['Int'];
  user: User;
};

export type Log = {
  __typename?: 'Log';
  completed: Scalars['Boolean'];
  createdAt: Scalars['String'];
  expiresAt: Scalars['String'];
  habit: Habit;
  id: Scalars['String'];
  status: Scalars['String'];
};

export enum LogStatus {
  Completed = 'COMPLETED',
  Expired = 'EXPIRED',
  Initial = 'INITIAL'
}

export type Mutation = {
  __typename?: 'Mutation';
  createHabit: Habit;
  createLog: Log;
  removeHabit: Habit;
  toggleHabit: Habit;
};


export type MutationCreateHabitArgs = {
  category: Scalars['String'];
  completed: Scalars['Boolean'];
  currentDay: Scalars['Int'];
  description: Scalars['String'];
  title: Scalars['String'];
  totalOfDays: Scalars['Int'];
  userId: Scalars['String'];
};


export type MutationCreateLogArgs = {
  expiresAt: Scalars['String'];
  habitId: Scalars['String'];
  status: LogStatus;
};


export type MutationRemoveHabitArgs = {
  habitId: Scalars['String'];
};


export type MutationToggleHabitArgs = {
  habitId: Scalars['String'];
  logId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  habits: Array<Maybe<Habit>>;
  log: Log;
  logs: Array<Maybe<Log>>;
  users: Array<Maybe<User>>;
};


export type QueryLogArgs = {
  logId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  habits?: Maybe<Array<Maybe<Habit>>>;
  id: Scalars['String'];
};
