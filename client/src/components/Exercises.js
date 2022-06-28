import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_EXERCISES } from "../utils/queries";
import { useStoreContext } from "../utils/GlobalState";

const Exercises = () => {
  const exercisesArray = [
    {
      _id: 1,
      exerciseName: "bench press",
      equipment: "Dumbbells",
      description: "Lift the dumbbells to chest height with your palms facing forwards. Breathe out and push the dumbbells up until your arms are fully extended, using your pecs to power the movement.",
      category: "Chest",
      weight: 80,
      sets: 3,
      reps: 10,
    },
    {
      _id: 2,
      exerciseName: "sith curl",
      equipment: "Dumbbells",
      description: "Start standing with a dumbbell in each hand. Your elbows should rest at your sides and your forearms should extend out in front of your body,bring the dumbbells all the way up to your shoulders by bending your elbows, reverse the curl slowly and repeat. This exercise will prevent you from ever losing the high ground again.",
      category: "Arms",
      weight: 45,
      sets: 3,
      reps: 10,
    },
    {
      _id: 3,
      exerciseName: "jedi squat",
      equipment: "Body Weight",
      description: "Using the force stand with your hands on the back of your head and your feet shoulder-width apart with your feet turned out slightly to open the hip joint, lower your body until your thighs are parallel to the floor, pause and return to starting position and repeat.  ",
      category: "Arms",
      weight: 45,
      sets: 3,
      reps: 10,
    },
  ];

  // const { data: userData, loading, error, refetch } = useQuery(QUERY_USER);
  // const userDataLength = loading ? 0 : Object.keys(userData).length;
  //const [queryExercises] = useQuery(QUERY_EXERCISES);

  const [state] = useStoreContext();
  console.log(state.user);
  return (
      <div className="cards">
        <h3 className="card-title">Exercises</h3>
        <div>
          {exercisesArray.map((exercise) => (
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
        </div>
      </div>
  )
};


export default Exercises;

