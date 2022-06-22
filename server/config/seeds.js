const db = require("./connection");
const { User, exercise, Category } = require("../models");

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
        exercises: [exercises[0]._id, exercises[1]._id, exercises[2]._id],
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
        exercises: [exercises[3]._id, exercises[4]._id, exercises[5]._id],
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
        exercises: [exercises[6]._id, exercises[7]._id, exercises[8]._id],
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
        exercises: [exercises[9]._id, exercises[10]._id, exercises[11]._id],
      },
    ],
  });

  console.log("users seeded");

  process.exit();
});
