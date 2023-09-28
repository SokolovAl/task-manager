import {gql} from "@apollo/client";

export const GET_TASKS = gql`
    query GetTasks{
        tasks {
            id
            text
            completed
        }
    }
`;