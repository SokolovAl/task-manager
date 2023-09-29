import React from "react";
import {useMutation} from "@apollo/client";
import {DELETE_TASK, UPDATE_TASK} from "../graphql/mutations";

interface Task {
    id: string;
    text: string;
    isDone: boolean;
}

interface TaskItemProps {
    task: Task;
    refetch: () => void
}

export const TaskItem: React.FC<TaskItemProps> = ({task,refetch}) => {
    const [deleteTask] = useMutation(DELETE_TASK)
    const [updateTask] = useMutation(UPDATE_TASK)


    const handleUpdateTask = async () => {
        try {
            await updateTask({
                variables: {id: task.id, isDone: !task.isDone}
            })
        } catch (error) {
            console.error(`Error updating task: ${error}`)
        }
    }

    const handleDeleteTask = async () => {
        try {
            await deleteTask({
                variables: {id: task.id}
            })
            refetch()
        } catch (error) {
            console.error(`Error deleting task: ${error}`)
        }
    }

    return (
        <li>
            <input
                type = "checkbox"
                checked = {task.isDone}
                onChange = {handleUpdateTask}
            />
            <span>{task.text} - {task.isDone ? 'Completed' : 'Not completed'}</span>
            <button onClick = {handleDeleteTask}>Delete</button>
        </li>
    );
};
