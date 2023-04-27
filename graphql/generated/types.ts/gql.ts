/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation createHabitMutation(\n    $userId: String!\n    $title: String!\n    $description: String!\n    $totalOfDays: Int!\n    $currentDay: Int!\n    $completed: Boolean!\n    $category: String!\n  ) {\n    createHabit(\n      userId: $userId\n      title: $title\n      description: $description\n      totalOfDays: $totalOfDays\n      currentDay: $currentDay\n      completed: $completed\n      category: $category\n    ) {\n      id\n      title\n    }\n  }\n": types.CreateHabitMutationDocument,
    "\n  query GetHabits {\n    habits {\n      id\n      title\n      description\n      category\n      completed\n      currentDay\n      totalOfDays\n      logs {\n        id\n        createdAt\n        expiresAt\n        completed\n      }\n    }\n  }\n": types.GetHabitsDocument,
    "\n  mutation RemoveHabit($habitId: String!) {\n    removeHabit(habitId: $habitId) {\n      id\n      title\n    }\n  }\n": types.RemoveHabitDocument,
    "\n  mutation ToggleHabit($habitId: String!, $logId: String!) {\n    toggleHabit(habitId: $habitId, logId: $logId) {\n      id\n      title\n      completed\n      logs {\n        id\n        completed\n      }\n    }\n  }\n": types.ToggleHabitDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createHabitMutation(\n    $userId: String!\n    $title: String!\n    $description: String!\n    $totalOfDays: Int!\n    $currentDay: Int!\n    $completed: Boolean!\n    $category: String!\n  ) {\n    createHabit(\n      userId: $userId\n      title: $title\n      description: $description\n      totalOfDays: $totalOfDays\n      currentDay: $currentDay\n      completed: $completed\n      category: $category\n    ) {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\n  mutation createHabitMutation(\n    $userId: String!\n    $title: String!\n    $description: String!\n    $totalOfDays: Int!\n    $currentDay: Int!\n    $completed: Boolean!\n    $category: String!\n  ) {\n    createHabit(\n      userId: $userId\n      title: $title\n      description: $description\n      totalOfDays: $totalOfDays\n      currentDay: $currentDay\n      completed: $completed\n      category: $category\n    ) {\n      id\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetHabits {\n    habits {\n      id\n      title\n      description\n      category\n      completed\n      currentDay\n      totalOfDays\n      logs {\n        id\n        createdAt\n        expiresAt\n        completed\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetHabits {\n    habits {\n      id\n      title\n      description\n      category\n      completed\n      currentDay\n      totalOfDays\n      logs {\n        id\n        createdAt\n        expiresAt\n        completed\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RemoveHabit($habitId: String!) {\n    removeHabit(habitId: $habitId) {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveHabit($habitId: String!) {\n    removeHabit(habitId: $habitId) {\n      id\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ToggleHabit($habitId: String!, $logId: String!) {\n    toggleHabit(habitId: $habitId, logId: $logId) {\n      id\n      title\n      completed\n      logs {\n        id\n        completed\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation ToggleHabit($habitId: String!, $logId: String!) {\n    toggleHabit(habitId: $habitId, logId: $logId) {\n      id\n      title\n      completed\n      logs {\n        id\n        completed\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;