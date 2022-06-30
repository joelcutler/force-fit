import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_EXERCISES } from "../utils/queries";
import { ADD_EXERCISE } from "../utils/mutations";
import { useStoreContext } from "../utils/GlobalState";
import defaultExercises from "../assets/defaultExercises.json";
import { parse } from "graphql";
import defaultCategories from "../assets/defaultCategories.json";
import Auth from "../utils/auth";
import { SET_USER, SET_EXERCISE } from "../utils/actions";

const Exercises = () => {
  // const { data: userData, loading, error, refetch } = useQuery(QUERY_USER);
  // const userDataLength = loading ? 0 : Object.keys(userData).length;
  //const [queryExercises] = useQuery(QUERY_EXERCISES);
  let change = 0;

  const [state, dispatch] = useStoreContext();
  let activeWorkout;
  if (state.workout) {
    activeWorkout = state.workout._id;
    //console.log(activeWorkout)
  }
  //console.log(state);

  const { loading, data } = useQuery(QUERY_USER);

  //console.log(activeWorkout);

  const defExs = defaultExercises.defaultExercises;

  const defCats = defaultCategories.defaultCategories;

  const [addExerciseToWorkout] = useMutation(ADD_EXERCISE);

  const [exerciseFormState, setExerciseFormState] = useState();
  // {workoutId: activeWorkout}
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setExerciseFormState({
      ...exerciseFormState,
      [name]: value,
    });
  };

  //console.log(data, "data")

  useEffect(() => {
    // console.log(data, "user data string at top of useEffect");
    if (data) {
      dispatch({
        type: SET_USER,
        user: data.user,
      });
    }
  }, [data, loading, dispatch]);

  // THIS FUNCTION IS NOT WORKOING SOMEWHRE FRONT END OR BACKEND
  const addExercise = async (event) => {
    event.preventDefault();
    try {
      const addedEx = await addExerciseToWorkout({
        variables: {
          exerciseName: exerciseFormState.exerciseName,
          distance: parseInt(exerciseFormState.distance),
          duration: parseInt(exerciseFormState.duration),
          weight: parseInt(exerciseFormState.weight),
          sets: parseInt(exerciseFormState.sets),
          reps: parseInt(exerciseFormState.reps),
          workoutId: activeWorkout,
        },
      });
      if (data) {
        dispatch({
          type: SET_EXERCISE,
          user: addedEx,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  //if (Auth.loggedIn()) {
  return (
    <div className="cards">
      <h3 className="card-title">Add Your Exercises</h3>
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
            {/* <h2>Add Your Exercise</h2> */}
            <div className="ml-5">
              <div className="workout-type">
                <label>Exercise Type: </label>
                <select
                  className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                  name="type"
                  id="type"
                  defaultValue="Select Exercise Type"
                >
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
                <div className="cardio-name pb-2">
                  <label>Name: </label>
                  <input
                    className="w-1/2 block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleFormChange}
                    type="text"
                    name="exerciseName"
                    id="cardio-name"
                    placeholder="Running"
                  />
                </div>
                <div className="distance pb-2">
                  <label>Distance (miles): </label>
                  <input
                    className="w-1/4 block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleFormChange}
                    type="number"
                    name="distance"
                    id="distance"
                    placeholder="5"
                  />
                </div>
                <div className="duration pb-2">
                  <label>Duration (minutes): </label>
                  <input
                    className="w-1/4 block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleFormChange}
                    type="number"
                    name="duration"
                    id="duration"
                    placeholder="10"
                  />
                </div>
              </div>
              <div className="resistance-form">
                <div className="weight pb-2">
                  <label>Weight (lbs): </label>
                  <input
                    className="w-1/4 block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleFormChange}
                    type="number"
                    name="weight"
                    id="weight"
                    placeholder="200"
                  />
                </div>
                <div className="sets pb-2">
                  <label>Sets: </label>
                  <input
                    className="w-1/4 block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleFormChange}
                    type="number"
                    name="sets"
                    id="sets"
                    placeholder="4"
                  />
                </div>
                <div className="reps pb-2">
                  <label>Reps: </label>
                  <input
                    className="w-1/4 block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleFormChange}
                    type="number"
                    name="reps"
                    id="reps"
                    placeholder="10"
                  />
                </div>
                {/* <div className="resistance-duration">
              <label>Duration (minutes):</label>
              <input onChange={handleFormChange} type="number" name="resistance-duration" id="resistance-duration" placeholder="10" />
            </div> */}
              </div>
              <div className="buttons text-center">
                {/* <button>
              Complete
            </button> */}
                <button
                  className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 p-2 rounded"
                  onClick={addExercise}
                >
                  Add Exercise
                </button>
                {/* setExerciseFormState([...exerciseFormState, {}]) */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  //}
  //return <div>NOT logged in</div>
};

export default Exercises;
