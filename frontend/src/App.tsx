import React from 'react';
import './App.css';
import {TaskList} from "./components/TaskList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function App() {
    return (
        <Box
            sx = {{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
            }}
        >
            <Typography variant = "h4">Task List</Typography>
            <TaskList/>
        </Box>
    );
}

export default App;
