import React, { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_WORKOUT } from "../utils/queries";
import { SET_WORKOUT } from "../utils/actions";

const Today = () => {
  const [state, dispatch] = useStoreContext();
  console.log(state.workout);

  const { loading, data } = useQuery(QUERY_WORKOUT, {
    variables: {
      userId: "62b655c348eb5e50f001132d",
      workoutId: "62b655cb48eb5e50f001132f",
    },
  });

  useEffect(() => {
    // console.log(data, "user data string at top of useEffect");
    if (data) {
      dispatch({
        type: SET_WORKOUT,
        workout: data.workout,
      });
    }
  }, [data, loading, dispatch]);
  // console.log("DATA " + state.workout);
  return (
    <>
      <div className="cards">
        <h1 className="card-title">{state?.workout?.workoutTitle}</h1>
        <div>
          {" "}
          helloo
          {/* map below is broke
        {state.workout.map((exercise) => (
        <div>{exercise.workoutTitle}</div>
        ))} */}
        </div>
      </div>
    </>
  );
};

export default Today;
