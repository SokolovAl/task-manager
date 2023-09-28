import {gql} from '@apollo/client';

export const CREATE_TASK = gql`
    mutation CreateTask($text: String!) {
        createTask(text: $text) {
            id
            text
            isDone
        }
    }
`;

export const UPDATE_TASK = gql`
    mutation UpdateTask($id: ID!, $isDone: Boolean!) {
        updateTask(id: $id, isDone: $isDone) {
            id
            isDone
        }
    }
`;

export const DELETE_TASK = gql`
    mutation DeleteTask($id: ID!) {
        deleteTask(id: $id) {
            id
            text
            isDone
        }
    }
`;
