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
  updateTask(id: ID!, text: String, isDone: Boolean): Task
  deleteTask(id: ID!): Task
}
`;