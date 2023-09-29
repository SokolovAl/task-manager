import {gql} from '@apollo/client';

/**
 * GraphQL mutation to create a new task.
 * @param {String} text - Text of the new task.
 * @returns {Object} - Returns the created task with its unique identifier (id), text (text) and completion status (isDone).
 */
export const CREATE_TASK = gql`
    mutation CreateTask($text: String!) {
        createTask(text: $text) {
            id
            text
            isDone
        }
    }
`;

/**
 * GraphQL mutation to update task status.
 * @param {String} id - Unique identifier of the task that needs to be updated.
 * @param {Boolean} isDone - New status of the task (completed or not).
 * @returns {Object} - Returns the updated task with its unique identifier (id) and updated status (isDone).
 */
export const UPDATE_TASK = gql`
    mutation UpdateTask($id: ID!, $isDone: Boolean!) {
        updateTask(id: $id, isDone: $isDone) {
            id
            isDone
        }
    }
`;

/**
 * GraphQL mutation to remove a task.
 * @param {String} id - Unique identifier of the task to be deleted.
 * @returns {Object} - Returns the remote task with its unique identifier (id).
 */
export const DELETE_TASK = gql`
    mutation DeleteTask($id: ID!) {
        deleteTask(id: $id) {
            id
        }
    }
`;
