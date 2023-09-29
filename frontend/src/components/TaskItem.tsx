import React from "react";
import {useMutation} from "@apollo/client";
import {DELETE_TASK, UPDATE_TASK} from "../graphql/mutations";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";

interface Task {
    id: string;
    text: string;
    isDone: boolean;
}

interface TaskItemProps {
    task: Task;
    refetch: () => void
}

export const TaskItem: React.FC<TaskItemProps> = ({task, refetch}) => {
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
        <ListItem>
            <Checkbox
                color = "primary"
                checked = {task.isDone}
                onChange = {handleUpdateTask}
            />
            <ListItemText
                primary = {task.text}
                secondary = {
                    <Typography variant = "body2">
                        {task.isDone ? 'Completed' : 'Not completed'}
                    </Typography>
                }
            />
            <ListItemSecondaryAction>
                <IconButton edge = "end" aria-label = "delete" color = "error" onClick = {handleDeleteTask}>
                    <DeleteIcon/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};
