import React from "react";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import { Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Workouts from "./components/Workouts";

// const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    // <ApolloProvider client={client}>
    <>
      <nav>
        <Header></Header>
      </nav>
      <main>
        <Workouts></Workouts>
      </main>
    </>
    // </ApolloProvider>
  );
}

export default App;
