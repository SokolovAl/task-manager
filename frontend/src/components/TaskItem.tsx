import React from "react";

interface Task {
    id: string;
    text: string;
    isDone: boolean;
}

interface TaskItemProps {
    task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({task}) => {
    return (
        <li>
            {task.text} - {task.isDone ? 'Completed' : 'Not completed'}
        </li>
    );
};
