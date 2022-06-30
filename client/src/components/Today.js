import React, { useEffect, useRef, useState } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_WORKOUT } from "../utils/queries";
import { ADD_WORKOUT, DELETE_EXERCISE } from "../utils/mutations";
import { NEW_WORKOUT, SET_WORKOUT } from "../utils/actions";

const Today = () => {
  let change = 0;
  const [state, dispatch] = useStoreContext();
  const newWorkTitle = useRef();
  const [titleInput, setTitleInput] = useState({ workoutTitleInput: "" });

  // if(!state.user){
  //   return (<div>loading</div>)
  // }
  const { loading, data } = useQuery(QUERY_WORKOUT, {
    variables: {
      workoutId: state.user?.workouts[0]?._id || "",
    },
  });

  //console.log("THIS ONE " + data);

  useEffect(() => {
    // console.log(data, "user data string at top of useEffect");
    if (data) {
      dispatch({
        type: SET_WORKOUT,
        workout: data.workout,
      });
      //console.log("DATA " + data);
    }

  }, [data, loading, dispatch]);

  const handleTitleChange = (event) => {
    const { name, value } = event.target;
    setTitleInput({
      ...titleInput,
      [name]: value,
    });
  };

  const [addWorkout] = useMutation(ADD_WORKOUT);
  const addNewWorkout = async (event) => {
    //event.preventDefault();
    change++;
    const newWorkout = await addWorkout({
      variables: { workoutTitle: titleInput.workoutTitleInput },
    });
    dispatch({
      type: SET_WORKOUT,
      workout: newWorkout,
    });
  };

  const [deleteExerciseFromWorkout] = useMutation(DELETE_EXERCISE);
  const handleDeleteExercise = async (event) => {
    const workoutId = state?.workout?._id;
    const exerciseId = event.target.id;
    const response = await deleteExerciseFromWorkout({
      variables: { workoutId: workoutId,
      exerciseId: exerciseId }
    });
  }

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <>
      <div className="cards">
        <h3 className="card-title">Today's Workout</h3>
        <div className="flex justify-around">
          <input
            ref={newWorkTitle}
            onChange={handleTitleChange}
            name="workoutTitleInput"
            placeholder="ADD WORKOUT TITLE"
            className="w-4/6 h-12 shadow-xl border-2 border-gray-300 rounded-lg p-2 "
          />
          <button
            onClick={() => addNewWorkout()}
            className="w-3/12 text-white bg-cyan-400 rounded-xl bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br"
          >
            Save Workout
          </button>
        </div>
        <div>
          {state?.user?.workouts.length > 0 && (
            <div className="">
              <div className="my-3 w-full text-center">Workout Name: {state.user.workouts[0].workoutTitle}</div>
              <p>Exercises:</p>
              {state.user.workouts[0].exercises.map((exercise) => (
                <div key={exercise._id} className='m-3 flex justify-between bg-gray-100 p-4 shadow rounded-md'>
                  <div className="flex ">
                  <p className="mx-2 underline uppercase">{exercise.exerciseName}:  </p>
                  {exercise.distance && (<p className="mr-2">{exercise.distance} miles,</p>)}
                  {exercise.duration && (<p className="mr-2">{exercise.duration} minutes,</p>)}
                  {exercise.weight && (<p className="mr-2">{exercise.weight} lbs.</p>)}
                  {exercise.sets && (<p className="mr-2">{exercise.sets} sets,</p>)}
                  {exercise.reps && (<p className="mr-2">{exercise.reps} reps</p>)}
                  </div>
                  <button id={exercise._id} onClick={handleDeleteExercise} className='w-7'>
                  ❌
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Today;
// ❌ 🗑️ 🚮