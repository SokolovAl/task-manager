# Task Manager App

This is a simple Task Manager application with a frontend built using React, TypeScript, Material UI and a backend
powered by GraphQL, Express.js, Node.js
The app allows you to manage a list of tasks, including adding new tasks, marking them as completed, and
deleting them.

## Technologies Used

- **Frontend**:
    - React: A popular JavaScript library for building user interfaces.
    - Apollo Client: A client for consuming GraphQL APIs in React applications.
    - Material-UI: A popular React UI framework for building responsive and attractive user interfaces.
    - TypeScript: A statically typed superset of JavaScript for improved code quality.

- **Backend**:
    - Express: A minimal and flexible Node.js web application framework.
    - GraphQL: A query language for APIs that allows you to request only the data you need.
    - Express-graphql: A library for building GraphQL servers in Node.js.
    - Cors: Middleware for enabling Cross-Origin Resource Sharing (CORS) in the Express application.

## Features

- View a list of tasks with their descriptions and completion status.
- Add new tasks to the list.
- Mark tasks as done or not done.
- Delete tasks from the list.

## Installation

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- Node.js: You can download it from [nodejs.org](https://nodejs.org/).

### Setup application

1. Install the required packages for both backend and frontend at the same time using the following command:

### `npm install:both`

2. Start both the backend and frontend simultaneously using the following command:

### `npm start:both`

The server should now be running at `http://localhost:4000`.
The React app should now be running at `http://localhost:3000`.


## Usage

1. Open your web browser and go to `http://localhost:3000` to access the Task Manager app.

2. You'll see a list of tasks. You can add new tasks by entering a description in the "Task description" input field and clicking the "Add Task" button.

3. You can mark tasks as completed by checking the checkboxes next to them. You can also mark them as not completed by unchecking the checkboxes.

4. To delete a task, click the "Delete" button next to it.
