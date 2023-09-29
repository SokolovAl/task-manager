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
import {TaskItemProps} from "./interfaces/taskItemInterface";

/**
 * The TaskItem component represents an individual task in a task list.
 * @param {TaskItemProps} props - Properties of the TaskItem component.
 */
export const TaskItem: React.FC<TaskItemProps> = ({task, refetch}) => {
    const [deleteTask] = useMutation(DELETE_TASK)
    const [updateTask] = useMutation(UPDATE_TASK)

    /**
     * Handler for updating a task status (done / not done)
     * Sends a GraphQL mutation to update task status.
     * After successfully updating a task status, it updates the state.
     * In case of an error, displays the error in the console.
     */
    const handleUpdateTask = async () => {
        try {
            await updateTask({
                variables: {id: task.id, isDone: !task.isDone}
            })
        } catch (error) {
            console.error(`Error updating task: ${error}`)
        }
    }

    /**
     * Handler for deleting a task.
     * Sends a GraphQL mutation to remove a task.
     * After successfully deleting a task, it updates the state and calls the refetch function to update the list of tasks.
     * In case of an error, displays the error in the console.
     */
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
