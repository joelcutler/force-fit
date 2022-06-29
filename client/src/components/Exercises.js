import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_EXERCISES } from "../utils/queries";
import { ADD_EXERCISE } from "../utils/mutations";
import { useStoreContext } from "../utils/GlobalState";
import defaultExercises from "../assets/defaultExercises.json";
import { parse } from "graphql";
import defaultCategories from "../assets/defaultCategories.json";
import Auth from '../utils/auth';
import { SET_USER, SET_EXERCISE } from "../utils/actions";


const Exercises = () => {
  // const { data: userData, loading, error, refetch } = useQuery(QUERY_USER);
  // const userDataLength = loading ? 0 : Object.keys(userData).length;
  //const [queryExercises] = useQuery(QUERY_EXERCISES);
  let change = 0;

  const [state, dispatch] = useStoreContext();
  let activeWorkout;
  if(state.workout){
    activeWorkout = state.workout._id;
    //console.log(activeWorkout)
  }
  //console.log(state);

  
  const { loading, data } = useQuery(QUERY_USER);

  //console.log(activeWorkout);


  const defExs = defaultExercises.defaultExercises;

  const defCats = defaultCategories.defaultCategories;

  const [addExerciseToWorkout] = useMutation(ADD_EXERCISE);

  const [exerciseFormState, setExerciseFormState] = useState()
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
          workoutId: activeWorkout
        },
      });
      if(data){
      dispatch({
        type: SET_EXERCISE,
        user: addedEx
      })
    }

    } catch (e){
      console.log(e);
    }
  };
  //if (Auth.loggedIn()) {
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
        <div>
          <div className="workout-type">
            <label>Exercise Type:</label>
            {/* <select name="type" id="type" defaultValue="Select Exercise Type">
            {defCats.map((categories) => (<option  key={categories._id} value={categories.categoryName}>{categories.categoryName}</option>))}
            </select> */}
          </div>
          <div className="cardio-form">
            <div className="cardio-name">
              <label>Name:</label>
              <input onChange={handleFormChange} type="text" name="exerciseName" id="cardio-name" placeholder="Running" />
            </div>
            <div className="distance">
              <label>Distance (miles):</label>
              <input onChange={handleFormChange} type="number" name="distance" id="distance" placeholder="5" />
            </div>
            <div className="duration">
              <label>Duration (minutes):</label>
              <input onChange={handleFormChange} type="number" name="duration" id="duration" placeholder="10" />
            </div>
          </div>
          <div className="resistance-form">
            <div className="weight">
              <label>Weight (lbs):</label>
              <input onChange={handleFormChange} type="number" name="weight" id="weight" placeholder="200" />
            </div>
            <div className="sets">
              <label>Sets:</label>
              <input onChange={handleFormChange} type="number" name="sets" id="sets" placeholder="4" />
            </div>
            <div className="reps">
              <label>Reps:</label>
              <input onChange={handleFormChange} type="number" name="reps" id="reps" placeholder="10" />
            </div>
            {/* <div className="resistance-duration">
              <label>Duration (minutes):</label>
              <input onChange={handleFormChange} type="number" name="resistance-duration" id="resistance-duration" placeholder="10" />
            </div> */}
          </div>
          <div className="buttons">
            {/* <button>
              Complete
            </button> */}
            <button onClick={addExercise} className="bg-cyan-400">
              Add Exercise
            </button>
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
