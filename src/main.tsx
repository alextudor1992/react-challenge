import './index.css'
import { ApolloProvider } from "@apollo/client";
import { createRoot } from 'react-dom/client'
import { apolloClient } from "./graphql/client.ts";
import App from './App'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('#root element not found.')
}

const root = createRoot(rootElement);

root.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);
