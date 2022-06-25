import React from "react";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginSignup from "./pages/login";
import Home from "./pages/Home";
import Header from "./components/Header";

// const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    // <ApolloProvider client={client}>
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </div>
    </Router>

    // </ApolloProvider>
  );
}

export default App;
