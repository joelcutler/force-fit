import React, { useEffect } from "react";

//import Auth from "../utils/auth";
import Workouts from "../components/Workouts";
import Today from "../components/Today";
import Exercises from "../components/Exercises";
import { useStoreContext } from "../utils/GlobalState";
import { SET_USER } from "../utils/actions";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const Home = () => {
  // TODO: this import (below) is temporarily in this component, but it needs to be moved into the home page and triggered once a user logs in.
  const [state, dispatch] = useStoreContext();

  // TODO: this  import (below) is temporarily in this component, but it needs to be moved into the home page and triggered once a user logs in. username needs to be replaced w the logged in user's name
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userName: "jkjk" },
  });

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

  return (
    <div>
      <Workouts />
      <Today />
      <Exercises />
    </div>
  );
};

export default Home;