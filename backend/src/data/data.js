/**
 * This 'data' object serves as a dummy data source for the GraphQL API. It provides an array of tasks
 * that can be queried and manipulated through the API.
 *
 * Data Structure:
 * - 'tasks' Array: An array of task objects, where each task has the following properties:
 *   - 'id' (String): A unique identifier for the task.
 *   - 'text' (String): The text content of the task.
 *   - 'isDone' (Boolean): Indicates whether the task is marked as done (true) or not done (false).
 */
export const data = {
    tasks: [
        {id: "1", text: "Task 1", isDone: false},
        {id: "2", text: "Task 2", isDone: false},
        {id: "3", text: "Task 3", isDone: false},
    ]
};