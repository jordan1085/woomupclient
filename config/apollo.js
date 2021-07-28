import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch';

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://enigmatic-reef-03050.herokuapp.com/',
    fetch
  })
});

export default client;