import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import {CREATE_TASK} from "../graphql/mutations";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {AddTaskProps} from "./interfaces/addTaskInterface";

/**
 * The AddTask component is designed to add new tasks to the task list.
 * @param {function} refetch - Function for reloading the task list after adding a new task.
 */
export const AddTask: React.FC<AddTaskProps> = ({refetch}) => {
    const [taskText, setTaskText] = useState<string>("")
    const [createTask] = useMutation(CREATE_TASK)

    /**
     * Handler for changing the task text in the input field.
     * @param {Object} event - Change event object.
     */
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value)
    }

    /**
     * Handler for adding a new task.
     * Sends a GraphQL mutation to create a task with the entered text.
     * After successfully adding a task, it updates the state and calls the refetch function to update the list of tasks.
     * In case of an error, displays the error in the console.
     */
    const handleAddTask = async () => {

        //If the task text is empty, the function execution stops. This prevents an empty task from being added.
        if (taskText.trim() === "") {
            return;
        }

        try {
            await createTask({
                variables: {text: taskText}
            })

            //After successfully adding a task, the task input is cleared. This is done in preparation for adding the next task.
            setTaskText("")
            refetch();
        } catch (error) {
            console.error(`Error adding task ${error}`)
        }
    }

    return (
        <Box
            sx = {{
                display: "flex",
                flexDirection: "column",
                gap: 3
            }}
        >
            <TextField
                label = "Task description"
                variant = "outlined"
                value = {taskText}
                onChange = {handleInputChange}
            />
            <Button
                variant = "contained"
                color = "primary"
                onClick = {handleAddTask}
            >
                Add Task
            </Button>
        </Box>
    )
}