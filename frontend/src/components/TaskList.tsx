import React from "react";
import {useQuery} from "@apollo/client";
import {GET_TASKS} from "../graphql/queries";
import {TaskItem} from "./TaskItem";
import {AddTask} from "./AddTask";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

interface Task {
    id: string,
    text: string,
    isDone: boolean
}

export const TaskList: React.FC = () => {
    const {loading, error, data, refetch} = useQuery(GET_TASKS)

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error.message}</p>
    }

    const tasks: Task[] = data.tasks;

    return (
        <>
            <List
                sx={{
                    minWidth:"30%"
                }}
            >
                {tasks.map((task) => (
                    <TaskItem
                        key = {task.id}
                        task = {task}
                        refetch = {refetch}
                    />
                ))}
            </List>
            <AddTask refetch = {refetch}/>
        </>
    )
}
