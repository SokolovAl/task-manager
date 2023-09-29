import React from "react";
import {useQuery} from "@apollo/client";
import {GET_TASKS} from "../graphql/queries";
import {TaskItem} from "./TaskItem";
import {AddTask} from "./AddTask";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import {Task} from "./interfaces/taskIntarface";

/**
 * The TaskList component represents a list of tasks.
 * Loads tasks from the server using a GraphQL query and displays them.
 * Allows you to add new tasks and update the list after changes.
 */
export const TaskList: React.FC = () => {
    const {loading, error, data, refetch} = useQuery(GET_TASKS)

    // If data is loading, the message "Loading..." is displayed
    if (loading) {
        return <p>Loading...</p>
    }

    // If there was an error loading data, an error message is displayed
    if (error) {
        return <p>Error: {error.message}</p>
    }

    // Extract an array of tasks from the data
    const tasks: Task[] = data.tasks;

    return (
        <Box>
            <AddTask refetch = {refetch}/>
            <List>
                {tasks.map((task) => (
                    <TaskItem
                        key = {task.id}
                        task = {task}
                        refetch = {refetch}
                    />
                ))}
            </List>
        </Box>
    )
}
