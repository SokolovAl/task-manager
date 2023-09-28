import React from "react";

interface Task {
    id: string;
    text: string;
    isDone: boolean;
}

interface TaskItemProps {
    task: Task;
    onToggleDone: (taskId: string, isDone: boolean) => void
}

export const TaskItem: React.FC<TaskItemProps> = ({task, onToggleDone}) => {
    const handleToggleDone = () => {
        onToggleDone(task.id, !task.isDone)
    }
    return (
        <li>
            <input
                type = "checkbox"
                checked = {task.isDone}
                onChange = {handleToggleDone}
            />
            {task.text} - {task.isDone ? 'Completed' : 'Not completed'}
        </li>
    );
};
