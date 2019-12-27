import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './containers/App';

const client = new ApolloClient({
  uri: 'https://qhw7bns6.api.sanity.io/v1/graphql/production/default'
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);