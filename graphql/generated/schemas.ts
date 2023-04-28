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
