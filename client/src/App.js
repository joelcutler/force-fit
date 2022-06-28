import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { Routes, Route, Navigate } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth';


import LoginSignup from "./pages/login";
import Home from "./pages/Home";
import Header from "./components/Header";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

if(!Auth.loggedIn) {
  console.log('notloggedin');
}

function App() {
  return (
    <ApolloProvider client={client}>
<StoreProvider>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </div>
</StoreProvider>
    </ApolloProvider>
  );
}

export default App;
