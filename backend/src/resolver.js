/**
 * These are GraphQL resolvers that define how data is fetched and manipulated for the GraphQL API
 * defined in the schema.
 *
 * Resolver Explanation:
 * - The 'Query' resolver defines how to fetch data when the 'tasks' query is executed.
 * - The 'Mutation' resolvers define how to create, update, and delete tasks.
 * - The 'findTaskIndexById' function helps locate a task in the 'context.tasks' array by its ID.
 */
export const resolvers = {
    Query: {
        /**
         * Resolver for the 'tasks' query.
         * @param {Object} obj - The parent object.
         * @param {Object} args - The arguments passed to the query.
         * @param {Object} context - The context object containing the 'tasks' array.
         * @returns {Array} - Returns the 'tasks' array from the context.
         */
        tasks: (obj, args, context) => context.tasks
    },

    Mutation: {
        /**
         * Resolver for the 'createTask' mutation.
         * @param {Object} obj - The parent object.
         * @param {Object} args - The arguments passed to the mutation, including 'text'.
         * @param {Object} context - The context object containing the 'tasks' array.
         * @returns {Object} - Returns the newly created 'Task' object.
         */
        createTask: (obj, {text}, context) => {
            const newTask = {
                id: String(context.tasks.length + 1),
                text,
                isDone: false
            };
            context.tasks.push(newTask);

            return newTask;
        },

        /**
         * Resolver for the 'updateTask' mutation.
         * @param {Object} obj - The parent object.
         * @param {Object} args - The arguments passed to the mutation, including 'id' and 'isDone'.
         * @param {Object} context - The context object containing the 'tasks' array.
         * @returns {Object} - Returns the updated 'Task' object.
         */
        updateTask: (obj, {id, isDone}, context) => {
            const taskIndex = findTaskIndexById(context.tasks, id);

            if (isDone !== undefined) {
                context.tasks[taskIndex].isDone = isDone;
            }

            return context.tasks[taskIndex];
        },

        /**
         * Resolver for the 'deleteTask' mutation.
         * @param {Object} obj - The parent object.
         * @param {Object} args - The arguments passed to the mutation, including 'id'.
         * @param {Object} context - The context object containing the 'tasks' array.
         * @returns {Object} - Returns the deleted 'Task' object.
         */
        deleteTask: (obj, {id}, context) => {
            const taskIndex = findTaskIndexById(context.tasks, id);

            return context.tasks.splice(taskIndex, 1)[0];
        }
    }
};

/**
 * Helper function to find the index of a task in the 'tasks' array by its ID.
 * Throws an error if the task is not found.
 * @param {Array} tasks - The array of tasks to search within.
 * @param {string} id - The ID of the task to locate.
 * @returns {number} - Returns the index of the task in the 'tasks' array.
 * @throws {Error} - Throws an error if the task is not found.
 */
const findTaskIndexById = (tasks, id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
        throw new Error("Task not found");
    }
    return taskIndex;
};