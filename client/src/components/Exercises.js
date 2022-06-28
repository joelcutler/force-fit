import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_EXERCISES } from "../utils/queries";
import { useStoreContext } from "../utils/GlobalState";
import defaultExercises from "../assets/defaultExercises.json";
import { parse } from "graphql";
import defaultCategories from "../assets/defaultCategories.json";

const Exercises = () => {
  // const { data: userData, loading, error, refetch } = useQuery(QUERY_USER);
  // const userDataLength = loading ? 0 : Object.keys(userData).length;
  //const [queryExercises] = useQuery(QUERY_EXERCISES);

  const [state] = useStoreContext();
  //   console.log(state.user);

  const defExs = defaultExercises.defaultExercises;

  const defCats = defaultCategories.defaultCategories;

  return (
    <div className="cards">
      <h3 className="card-title">Exercises</h3>
      {/* <div>
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
      {/* </div> */}
      {/* ))} */}
      {/* </> */}
      {/* )} */}
      {/* </div>  */}

      <div className="wrapper">
        <div className="ui container exercise">
          <div className="ui raised card m-auto">
            <h2>Add Your Exercise</h2>
            <form action="POST">
              <div className="workout-type">
                <label>Exercise Type:</label>
                <select
                  name="type"
                  id="type"
                  defaultValue="Select Exercise Type"
                >
                  {/* <option disabled selected>Select Exercise Type</option> */}
                  {defCats.map((categories) => (
                    <option
                      key={categories._id}
                      value={categories.categoryName}
                    >
                      {categories.categoryName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="cardio-form">
                <div className="cardio-name">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="cardio-name"
                    id="cardio-name"
                    placeholder="Running"
                  />
                </div>
                <div className="distance">
                  <label>Distance (miles):</label>
                  <input
                    type="number"
                    name="distance"
                    id="distance"
                    placeholder="5"
                  />
                </div>
                <div className="duration">
                  <label>Duration (minutes):</label>
                  <input
                    type="number"
                    name="duration"
                    id="duration"
                    placeholder="10"
                  />
                </div>
              </div>
              <div className="resistance-form">
                <div className="exercise">
                  <label>Exercise Name:</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Bench Press"
                  />
                </div>
                <div className="weight">
                  <label>Weight (lbs):</label>
                  <input
                    type="number"
                    name="weight"
                    id="weight"
                    placeholder="200"
                  />
                </div>
                <div className="sets">
                  <label>Sets:</label>
                  <input type="number" name="sets" id="sets" placeholder="4" />
                </div>
                <div className="reps">
                  <label>Reps:</label>
                  <input type="number" name="reps" id="reps" placeholder="10" />
                </div>
                <div className="resistance-duration">
                  <label>Duration (minutes):</label>
                  <input
                    type="number"
                    name="resistance-duration"
                    id="resistance-duration"
                    placeholder="10"
                  />
                </div>
              </div>
              <div className="buttons">
                <button>Complete</button>
                <button>Add Exercise</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercises;
