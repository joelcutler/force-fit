import React from "react";
//import Auth from "../utils/auth";
import Workouts from "../components/Workouts";
import Today from "../components/Today";
import Exercises from "../components/Exercises";

const Home = () => {
  return (
    <div>
      <main>
        <Workouts />
        <Today />
        <Exercises />
      </main>
    </div>
  );
};

export default Home;
