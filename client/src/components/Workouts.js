import React, { useEffect } from "react";
// import { useQuery, useMutation } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";
import { formatDate } from "../utils/helpers";
// import { QUERY_USER } from "../utils/queries";
// import { SET_USER } from "../utils/actions";

const Workouts = () => {
  const [state] = useStoreContext();
  // console.log(state.user);
  return (
    <>
      <div className="cards">
        <h3 className="card-title">Past Workouts</h3>
        {state.user && state.user.workouts ? (
          <div>
            {state.user.workouts.map((workout) => (
              <div key={workout._id}>
                <p className="text-decoration-line: underline">
                  Workout: {workout.workoutTitle}
                </p>
                <span>Date: {formatDate(workout.day)}</span>
                <details className="ml-2.5">
                  <summary>Workout Details</summary>
                  {workout.exercises.map((exercise) => (
                    <div key={exercise._id}>
                      <p>{exercise.exerciseName}</p>
                      <details className="ml-2.5">
                        <summary>Exercise Details</summary>
                        <p>Distance: {exercise.distance} miles</p>
                        <p>Duration: {exercise.duration} minutes</p>
                        <p>Weight: {exercise.weight} lbs</p>
                        <p>Sets: {exercise.sets} X</p>
                        <p>Reps: {exercise.reps} X</p>
                      </details>
                    </div>
                  ))}
                </details>
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
