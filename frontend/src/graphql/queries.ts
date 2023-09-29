import {gql} from "@apollo/client";

/**
 * GraphQL query to get a list of tasks.
 * @returns {Array} - Returns an array of tasks, each containing a unique identifier (id),
 * task text (text) and completion status (isDone).
 */
export const GET_TASKS = gql`
    query GetTasks{
        tasks {
            id
            text
            isDone
        }
    }
`;