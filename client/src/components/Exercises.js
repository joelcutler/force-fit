import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_EXERCISES } from "../utils/queries";
import { useStoreContext } from "../utils/GlobalState";
import defaultExercises from "../assets/defaultExercises.json";
import { parse } from "graphql";
import defaultCategories from "../assets/defaultCategories.json"

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

  const defCats = defaultCategories.defaultCategories;
  console.log(defCats, "defcats");

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
      
  <div class="wrapper">
    <div class="ui container exercise">
      <div class="ui raised card m-auto">
        <h2>Add Your Exercise</h2>
        <form action="POST">
          <div class="workout-type">
            <label for="type">Exercise Type:</label>
            <select name="type" id="type">
            <option disabled selected>Select Exercise Type</option>
            {defCats.map((categories) => (<option value={categories.categoryName}>{categories.categoryName}</option>))}
            </select>
          </div>
          <div class="cardio-form">
            <div class="cardio-name">
              <label for="cardio-name">Name:</label>
              <input type="text" name="cardio-name" id="cardio-name" placeholder="Running" />
            </div>
            <div class="distance">
              <label for="distance">Distance (miles):</label>
              <input type="number" name="distance" id="distance" placeholder="5" />
            </div>
            <div class="duration">
              <label for="duration">Duration (minutes):</label>
              <input type="number" name="duration" id="duration" placeholder="10" />
            </div>
          </div>
          <div class="resistance-form">
            <div class="exercise">
              <label for="name">Exercise Name:</label>
              <input type="text" name="name" id="name" placeholder="Bench Press" />
            </div>
            <div class="weight">
              <label for="weight">Weight (lbs):</label>
              <input type="number" name="weight" id="weight" placeholder="200" />
            </div>
            <div class="sets">
              <label for="sets">Sets:</label>
              <input type="number" name="sets" id="sets" placeholder="4" />
            </div>
            <div class="reps">
              <label for="reps">Reps:</label>
              <input type="number" name="reps" id="reps" placeholder="10" />
            </div>
            <div class="resistance-duration">
              <label for="resistance-duration">Duration (minutes):</label>
              <input type="number" name="resistance-duration" id="resistance-duration" placeholder="10" />
            </div>
          </div>
          <div class="buttons">
            <button>
              Complete
            </button>
            <button>
              Add Exercise
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>
  );
};




export default Exercises;
