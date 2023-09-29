import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import {CREATE_TASK} from "../graphql/mutations";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface AddTaskProps {
    refetch: () => void
}

export const AddTask: React.FC<AddTaskProps> = ({refetch}) => {
    const [taskText, setTaskText] = useState<string>("")
    const [createTask] = useMutation(CREATE_TASK)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value)
    }

    const handleAddTask = async () => {
        if (taskText.trim() === "") {
            return;
        }

        try {
            await createTask({
                variables: {text: taskText}
            })

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
            <Typography variant = "h4">Add a New Task</Typography>
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