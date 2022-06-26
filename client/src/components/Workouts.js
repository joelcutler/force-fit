import React from "react";
import { useQuery, useMutation } from "@apollo/client";

const Workouts = () => {
  const workoutsArray = [
    {
      _id: "62b7a0aab3d92c7af09931cf",
      workoutTitle: "mmmmmmmmmmmmmmmmmmm",
      exercises: ["bench press", "sith curl", "jedi squat"],
      day: "1656201386530",
    },

    {
      _id: "62b7a0aab3d92c7af09931cm",
      workoutTitle: "tttttttttttttttttttt",
      exercises: ["bench press", "sith curl", "jedi squat"],
      day: "1656201386530",
    },

    {
      _id: "62b7a0aab3d92c7af09931cl",
      workoutTitle: "pppppppppppppppppppp",
      exercises: ["bench press", "sith curl", "jedi squat"],
      day: "1656201386530",
    },
  ];

  // const { data: userData, loading, error, refetch } = useQuery(GET_ME);
  // const userDataLength = loading ? 0 : Object.keys(userData).length;
  // const [queryWorkouts] = useMutation(QUERY_WORKOUTS);

  return (
    <>
      <div className="cards">
        <h3 className="card-title">Workouts</h3>
        <div>
          {workoutsArray.map((workout) => (
            <div key={workout._id}>
              <h4>{workout.workoutTitle}</h4>
              <p>{workout.day}</p>
              {workout.exercises.map((exercise) => (
                <span>{exercise} </span>
              ))}
            </div>
          ))}
        </div>
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
