import {useQuery} from "@apollo/client";
import {GET_TASKS} from "../graphql/queries";
import React from "react";
import {TaskItem} from "./TaskItem";
import {AddTask} from "./AddTask";

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

    const handleAddTask = async () => {
        await refetch();
    };

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <TaskItem key = {task.id} task = {task}/>
                ))}
            </ul>
            <AddTask onAddTask = {handleAddTask}/>
        </div>
    )
}
