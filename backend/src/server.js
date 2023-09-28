import express from "express";
import cors from "cors";
import {graphqlHTTP} from "express-graphql";
import {makeExecutableSchema} from "@graphql-tools/schema";
import {resolvers} from "./resolver.js";
import {schema} from "./schema.js";
import {data} from "./data/data.js";

const app = express();
const port = 4000;
const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
    "/graphql",
    graphqlHTTP({
        schema: executableSchema,
        context: data,
        graphiql: true
    })
);

app.listen(port, () => {
    console.log(`Running a server at http://localhost:${port}`);
});