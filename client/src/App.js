import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Routes, Route } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";

import LoginSignup from "./pages/login";
import Home from "./pages/Home";
import Header from "./components/Header";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

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
