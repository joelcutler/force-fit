const db = require("./connection");
const { User, Excercise, Category } = require("../models");

db.once("open", async () => {
  // insert other model seeds here, above Users. not sure if order matters here -joel

  await User.deleteMany();

  await User.create({
    firstName: "Joel",
    lastName: "Cutler",
    email: "joel@joel.com",
    password: "pwpwpw",
    workouts: [
      {
        excercises: [excercises[0]._id, excercises[1]._id, excercises[2]._id],
      },
    ],
  });

  await User.create({
    firstName: "Jordan",
    lastName: "Edginton",
    email: "jordan@jordan.com",
    password: "pwpwpw",
    workouts: [
      {
        excercises: [excercises[3]._id, excercises[4]._id, excercises[5]._id],
      },
    ],
  });

  await User.create({
    firstName: "Rochelle",
    lastName: "Davis",
    email: "rochelle@rochelle.com",
    password: "pwpwpw",
    workouts: [
      {
        excercises: [excercises[6]._id, excercises[7]._id, excercises[8]._id],
      },
    ],
  });

  await User.create({
    firstName: "Logan",
    lastName: "Parke",
    email: "logan@logan.com",
    password: "pwpwpw",
    workouts: [
      {
        excercises: [excercises[9]._id, excercises[10]._id, excercises[11]._id],
      },
    ],
  });

  console.log("users seeded");

  process.exit();
});
