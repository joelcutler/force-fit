import React, { useEffect } from "react";

//import Auth from "../utils/auth";
import Workouts from "../components/Workouts";
import Today from "../components/Today";
import Exercises from "../components/Exercises";
import { useStoreContext } from "../utils/GlobalState";
import { SET_USER } from "../utils/actions";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Auth from "../utils/auth";

const Home = () => {
  const [state, dispatch] = useStoreContext();

  // const { loading, data } = useQuery(QUERY_USER, {
  //   variables: { userName: "jkjk" },
  // });
  const { loading, data } = useQuery(QUERY_USER);

  // TODO: this useeEffect hook is temporarily in this component, but it needs to be moved into the home page and triggered once a user logs in.
  useEffect(() => {
    // console.log(data, "user data string at top of useEffect");
    if (data) {
      dispatch({
        type: SET_USER,
        user: data.user,
      });
    }
  }, [data, loading, dispatch]);
  if (Auth.loggedIn()) {
    return (
      <div className="flex flex-wrap">
        <Workouts />
        <Today />
        <Exercises />
      </div>
    );
  }
  return (
    <div className="notLogged w-1/2 flex justify-around m-auto bg-white flex flex-col p-5 py-28 mt-10 rounded-xl">
      <p className=" w-full text-center text-3xl">Oh no! You are not Logged In!</p>
      <a href="/login" className="text-white text-center text-lg w-1/2 p-5 rounded-xl bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br m-auto mt-8">
        Click here to go to login page
      </a>
    </div>
  );
};

export default Home;