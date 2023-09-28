import {useQuery} from "@apollo/client";
import {GET_TASKS} from "../graphql/queries";

interface Task {
    id: string,
    text: string,
    isDone: boolean
}

export const TaskList: React.FC = () => {
    const {loading, error, data} = useQuery(GET_TASKS)

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error.message}</p>
    }

    const tasks: Task[] = data.tasks;

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key = {task.id}>
                        <input
                            type = "checkbox"
                            checked = {task.isDone}
                        />
                        {task.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}
