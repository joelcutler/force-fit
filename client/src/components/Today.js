import React from "react";
import { useStoreContext } from "../utils/GlobalState";

const Today = () => {
  const [state] = useStoreContext();
  console.log(state?.user?.workouts);

  

  return (
  <div className="cards">
    {/* {state.user.workouts.map((workout) => (
              <div key={workout._id}>
                <h4>{workout.workoutTitle}</h4>
                <p>{workout.day}</p>
                {workout.exercises.map((exercise) => (
                  <span key={exercise.exerciseName}>{exercise.exerciseName} </span>
                ))}
              </div>
            ))} */}
  </div>
  );
};

export default Today;