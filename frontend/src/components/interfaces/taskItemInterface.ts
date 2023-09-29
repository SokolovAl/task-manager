import {Task} from "./taskIntarface";

/**
 * Interface for TaskItem component properties.
 */
export interface TaskItemProps {
    task: Task;
    refetch: () => void
}