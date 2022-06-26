import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";
import { QUERY_USER } from "../utils/queries";
import { SET_USER } from "../utils/actions";

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

  const [state, dispatch] = useStoreContext();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userName: "jkjk" },
  });

  useEffect(() => {
    console.log(data, "user data string at top of useEffect");
    if (data) {
      dispatch({
        type: SET_USER,
        user: data.user,
      });
      // data.products.forEach((product) => {
      //   idbPromise("products", "put", product);
      // });
      // add else if to check if `loading` is undefined in `useQuery()` Hook
      // } else if (!loading) {
      //   // since we're offline, get all of the data from the `products` store
      //   idbPromise("products", "get").then((products) => {
      //     // use retrieved data to set global state for offline browsing
      //     dispatch({
      //       type: UPDATE_PRODUCTS,
      //       products: products,
      //     });
      //   });
    }
  }, [data, loading]);

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
