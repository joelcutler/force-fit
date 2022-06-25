import React from "react";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Header from "./components/Header";
//import Workouts from "./components/Workouts";

import LoginSignup from './pages/login';
// const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    // <ApolloProvider client={client}>  
<>
        <nav>
          {/* <Header></Header> */}
        </nav> 
        
          <Routes>
          <Route path="/" element={<LoginSignup />}></Route>
          </Routes>

        <main>
          {/* <Workouts></Workouts> */}
        </main>
</>

    // </ApolloProvider>
  );
}

export default App;
