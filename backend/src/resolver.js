export const resolvers = {
    Query: {
        tasks: (obj, args, context) => context.tasks
    },

    Mutation: {
        createTask: (obj, {text}, context) => {
            const newTask = {
                id: String(context.tasks.length + 1),
                text,
                isDone: false
            };
            context.tasks.push(newTask);

            return newTask;
        },

        updateTask: (obj, {id, isDone}, context) => {
            const taskIndex = findTaskIndexById(context.tasks, id);

            if (isDone !== undefined) {
                context.tasks[taskIndex].isDone = isDone;
            }

            return context.tasks[taskIndex];
        },

        deleteTask: (obj, {id}, context) => {
            const taskIndex = findTaskIndexById(context.tasks, id);

            return context.tasks.splice(taskIndex, 1)[0];
        }
    }
};

const findTaskIndexById = (tasks, id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
        throw new Error("Task not found");
    }
    return taskIndex;
};