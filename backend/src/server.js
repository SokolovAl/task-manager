/**
 * This is a simple Express.js server that sets up a GraphQL API using the express-graphql package,
 * along with a schema, resolvers, and some sample data.
 *
 * The server listens on port 4000 and provides a GraphQL API at the '/graphql' endpoint.
 * It also enables GraphiQL, a graphical interface for interacting with the API, at the same endpoint.
 */
import express from "express";
import cors from "cors";
import {graphqlHTTP} from "express-graphql";
import {makeExecutableSchema} from "@graphql-tools/schema";
import {resolvers} from "./resolver.js";
import {schema} from "./schema.js";
import {data} from "./data/data.js";

const app = express();
const port = 4000;

// Create an executable GraphQL schema using the type definitions and resolvers.
const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers
});

// Enable CORS to allow requests from different domains.
app.use(cors());

// Parse JSON and URL-encoded request bodies.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Set up the '/graphql' endpoint with the GraphQL middleware.
app.use(
    "/graphql",
    graphqlHTTP({
        schema: executableSchema,
        context: data,
        graphiql: true
    })
);

// Start the server and listen on the specified port.
app.listen(port, () => {
    console.log(`Running a server at http://localhost:${port}`);
});