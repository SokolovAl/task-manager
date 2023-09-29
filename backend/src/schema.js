/**
 * This GraphQL schema defines the data structure and operations supported by the GraphQL API.
 *
 * Schema Explanation:
 * - 'Task' Type: Represents a task with three fields: 'id', 'text', and 'isDone'.
 *   - 'id' (ID!): A unique identifier for the task.
 *   - 'text' (String!): The text content of the task.
 *   - 'isDone' (Boolean!): Indicates whether the task is marked as done.
 *
 * - 'Query' Type: Represents the queries that can be made to retrieve data.
 *   - 'tasks': Returns an array of 'Task' objects, representing a list of tasks.
 *
 * - 'Mutation' Type: Represents the mutations that can be made to modify data.
 *   - 'createTask': Creates a new task with the provided 'text' and returns the created 'Task' object.
 *   - 'updateTask': Updates an existing task's 'isDone' status by 'id' and returns the updated 'Task' object.
 *   - 'deleteTask': Deletes a task by 'id' and returns the deleted 'Task' object.
 */
export const schema = `
type Task {
  id: ID!
  text: String!
  isDone: Boolean!
}

type Query {
  tasks: [Task]
}

type Mutation {
  createTask(text: String!): Task
  updateTask(id: ID!, isDone: Boolean): Task
  deleteTask(id: ID!): Task
}
`;