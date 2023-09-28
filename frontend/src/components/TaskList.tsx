import {useMutation, useQuery} from "@apollo/client";
import {GET_TASKS} from "../graphql/queries";
import React from "react";
import {TaskItem} from "./TaskItem";
import {AddTask} from "./AddTask";
import {UPDATE_TASK} from "../graphql/mutations";

interface Task {
    id: string,
    text: string,
    isDone: boolean
}

export const TaskList: React.FC = () => {
    const {loading, error, data, refetch} = useQuery(GET_TASKS)
    const [updateTask] = useMutation(UPDATE_TASK)

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

    const handleUpdateTask = async (taskId: string, isDone: boolean) => {
        try {
            await updateTask({
                variables: {id: taskId, isDone}
            })
            await refetch()
        } catch (error) {
            console.error(`Error updating task: ${error}`)
        }
    }

    const handleDeleteTask = async (taskId: string) => {
        await refetch()
    }

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <TaskItem
                        key = {task.id}
                        task = {task}
                        onUpdateTask = {handleUpdateTask}
                        onDeleteTask = {handleDeleteTask}
                    />
                ))}
            </ul>
            <AddTask onAddTask = {handleAddTask}/>
        </div>
    )
}
