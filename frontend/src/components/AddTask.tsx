import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import {CREATE_TASK} from "../graphql/mutations";

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
        <div>
            <h2>Add a New Task</h2>
            <input
                type = "text"
                placeholder = "Task text"
                value = {taskText}
                onChange = {handleInputChange}
            />
            <button onClick = {handleAddTask}>Add Task</button>
        </div>
    )
}