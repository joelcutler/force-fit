import React from "react";
// import { useQuery, useMutation } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";
// import { QUERY_USER } from "../utils/queries";
// import { SET_USER } from "../utils/actions";

const Workouts = () => {
  const [state] = useStoreContext();

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
