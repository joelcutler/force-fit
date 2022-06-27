import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";
import { QUERY_USER } from "../utils/queries";
import { SET_USER } from "../utils/actions";

const Workouts = () => {
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
    <>
      <div className="cards">
        <h3 className="card-title">Workouts</h3>
        {state.user && state.user.workouts ? (
          <div>
            {state.user.workouts.map((workout) => (
              <div key={workout._id}>
                <h4>{workout.workoutTitle}</h4>
                <p>{workout.day}</p>
                {workout.exercises.map((exercise) => (
                  <span key={exercise}>{exercise} </span>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <h4> You haven't added any workouts yet!</h4>
        )}
      </div>

      {/* <Card className="cards">
        <Card.Body>
          <Card.Title className="card-title">Workouts</Card.Title>
        </Card.Body>
      </Card> */}
    </>
  );
};

export default Workouts;
