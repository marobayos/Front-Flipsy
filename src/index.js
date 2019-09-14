import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
<<<<<<< HEAD
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache } from 'apollo-cache-inmemory';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
=======
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'
>>>>>>> 7cb968ecb9b0653e9cb1d0af41468812676ed6c8

const httpLink = {
    uri: 'https://api.github.com/graphql'
};

const client = new ApolloClient({
    link: new HttpLink(httpLink),
    cache: new InMemoryCache()
});

const Root = () => (
<<<<<<< HEAD
 <ApolloProvider client={client}>
    <App/>
 </ApolloProvider>
=======
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
>>>>>>> 7cb968ecb9b0653e9cb1d0af41468812676ed6c8
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
