import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_EXERCISES } from "../utils/queries";
import { useStoreContext } from "../utils/GlobalState";
import defaultExercises from "../assets/defaultExercises.json";
import { parse } from "graphql";

const Exercises = () => {
  // const { data: userData, loading, error, refetch } = useQuery(QUERY_USER);
  // const userDataLength = loading ? 0 : Object.keys(userData).length;
  //const [queryExercises] = useQuery(QUERY_EXERCISES);

  console.log(defaultExercises, "def ex's");
  const [state] = useStoreContext();
  //   console.log(state.user);

  const defExs = defaultExercises.defaultExercises;
  console.log(defExs, "defexs");
  console.log(typeof defExs, "defexs type");

  return (
    <div className="cards">
      <h3 className="card-title">Exercises</h3>
      <div>
        {defExs && (
          <>
            {defExs.map((exercise) => (
              <div key={exercise._id}>
                <h4>{exercise.exerciseName}</h4>
                <p>{exercise.equipment}</p>
                <p>{exercise.description}</p>
                <p>{exercise.category}</p>
                <p>{exercise.weight}</p>
                <p>{exercise.sets}</p>
                <p>{exercise.reps}</p>
                {/* {exercise.exercises.map((exercise) => (
                <span>{exercise} </span>
              ))} */}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Exercises;
