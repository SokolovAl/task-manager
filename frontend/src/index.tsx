import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

/**
 * Create an Apollo Client to work with the GraphQL server.
 * Pass to the client settings GraphQL server URL and cache for data storage.
 */
const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});

/**
 * ApolloProvider is a component provided by the Apollo Client library.
 * It wraps the entire React application and provides access to the Apollo Client through the React context.
 * It is required so that application components can make requests to the GraphQL server and receive data.
 */
root.render(
    <ApolloProvider client = {client}>
        <App/>
    </ApolloProvider>
);

reportWebVitals();
