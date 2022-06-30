import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";
import { formatDate } from "../utils/helpers";
import { DELETE_WORKOUT_MUTATION } from "../utils/mutations";
import { DELETE_WORKOUT } from "../utils/actions";

const Workouts = () => {
  const [state, dispatch] = useStoreContext();

  const [deleteWorkoutFromUser] = useMutation(DELETE_WORKOUT_MUTATION);

  const deleteWorkoutHandler = (id) => {
    dispatch({
      type: DELETE_WORKOUT,
      id: id,
    });
    deleteWorkoutFromUser({
      variables: {
        userId: state.user._id,
        workoutId: id,
      },
    });
  };

  return (
    <>
      <div className="cards">
        <h3 className="card-title">Past Workouts</h3>
        {state.user && state.user.workouts.length ? (
          <div className="mx-5">
            {state.user.workouts.map((workout) => (
              <div
                className="bg-gray-100 p-4 shadow rounded-md "
                key={workout._id}
              >
                <div className="flex justify-between ">
                  <p className="font-bold text-lg">
                    Workout:{" "}
                    <span className="font-medium">{workout.workoutTitle}</span>
                  </p>
                  <button onClick={() => deleteWorkoutHandler(workout._id)}>
                    ❌
                  </button>
                </div>
                <span>{formatDate(workout.day)}</span>
                <details className="ml-2.5">
                  <summary>Workout Details</summary>
                  {workout?.exercises?.length
                    ? workout.exercises.map((exercise) => (
                        <div key={exercise._id}>
                          <p>{exercise.exerciseName}</p>
                          <details className="ml-2.5">
                            <summary>Exercise Details</summary>
                            {exercise.distance && (
                              <p>Distance: {exercise.distance} mi</p>
                            )}
                            {exercise.duration && (
                              <p>Duration: {exercise.duration} mins</p>
                            )}
                            {exercise.weight && (
                              <p>Weight: {exercise.weight} lbs</p>
                            )}
                            {exercise.sets && <p>Sets: {exercise.sets}x</p>}
                            {exercise.reps && <p>Reps: {exercise.reps}x</p>}
                          </details>
                        </div>
                      ))
                    : null}
                </details>
              </div>
            ))}
          </div>
        ) : (
          <h4 className="ml-5">Add a workout first, you must!</h4>
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
