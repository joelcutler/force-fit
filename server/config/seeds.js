const db = require("./connection");

const { User, Exercise, Category, Workout } = require("../models");

db.once("open", async () => {
  // insert other model seeds here, above Users. not sure if order matters here -joel

  await Category.deleteMany();
  // const categories = await Category.insertMany([
  //   { name: "Arm" },
  //   { name: "Legs" },
  //   { name: "Shoulders" },
  //   { name: "Back" },
  //   { name: "Core" },
  //   { name: "Cardio" },
  // ]);
  // console.log("categories seeded");

  await Exercise.deleteMany();
  // const exercises = await Exercise.insertMany([
  //   {
  //     name: "Bicep Curl",
  //     category: categories[0]._id,
  //     equipment: "Dumbell",
  //     description: "Do a Bicep Curl.",
  //     //image: 'cookie-tin.jpg',
  //   },
  // {
  //   name: "Hammer Curl",
  //   description: "Do a Hammer Curl.",
  //   //image: 'cookie-tin.jpg',
  //   category: categories[0]._id,
  // },
  // {
  //   name: "Hamstring Curl",
  //   category: categories[1]._id,
  //   description: "Do a hamstring curl",
  //   //image: 'toilet-paper.jpg',
  // },
  // {
  //   name: "Leg Extensions",
  //   category: categories[1]._id,
  //   description: "Do leg extensions.",
  //   //image: 'soap.jpg',
  //   weight: 80,
  //   sets: 3,
  //   reps: 12,
  // },
  // {
  //   name: "Shoulder Press",
  //   category: categories[2]._id,
  //   description: "Do a shoulder press.",
  //   //image: 'wooden-spoons.jpg',
  //   weight: 50,
  //   sets: 3,
  //   reps: 12,
  // },
  // {
  //   name: "Pike Ups",
  //   category: categories[2]._id,
  //   description: "Do pike ups",
  //   //image: 'camera.jpg',
  //   weight: 0,
  //   sets: 3,
  //   reps: 12,
  // },
  // {
  //   name: "Bent over row",
  //   category: categories[3]._id,
  //   description: "Do Bent over rows.",
  //   //image: 'tablet.jpg',
  //   weight: 45,
  //   sets: 3,
  //   reps: 12,
  // },
  // {
  //   name: "Seated Row",
  //   category: categories[3]._id,
  //   description: "Do seated rows.",
  //   //image: 'bedtime-book.jpg',
  //   weight: 45,
  //   sets: 3,
  //   reps: 12,
  // },
  // {
  //   name: "Planks",
  //   category: categories[4]._id,
  //   description: "Do plank.",
  //   //image: 'spinning-top.jpg',
  //   weight: 0,
  //   sets: 3,
  //   reps: 1,
  //   duration: 1,
  // },
  // {
  //   name: "Sit ups",
  //   category: categories[4]._id,
  //   description: "Do sit ups.",
  //   //image: 'plastic-horses.jpg',
  //   weight: 0,
  //   sets: 3,
  //   reps: 12,
  // },
  // {
  //   name: "Elliptical",
  //   category: categories[5]._id,
  //   description: "Use the elliptical.",
  //   //image: 'teddy-bear.jpg',
  // },
  // {
  //   name: "Treadmill",
  //   category: categories[5]._id,
  //   description: "Run on the treadmill.",
  //   //image: 'alphabet-blocks.jpg',
  // },
  // ]);
  console.log("exercises seeded");
  //console.log(exercises[0], "exercise[0]");

  await Workout.deleteMany();
  // const workouts = await Workout.insertMany([
  //   // {
  //   //   workoutExercises: [
  //   {
  //     // the following don't work
  //     // workoutExercises: [exercises[0]],
  //     // workoutExercises: [exercises[0]._id],
  //     // workoutExercises: exercises[0]._id,
  //     // workoutExercises: exercises[0],
  //     // workoutExercises: exercises,
  //     // workoutExercises: [{exercises[0]}],
  //     // workoutExercises: {exercises[0]},
  //     // workoutExercises: { exercises },
  //     // the above don't work
  //     workoutExercises: [exercises[0]],
  //     duration: 0,
  //     title: "title",
  //     distance: 0,
  //     weight: 20,
  //     sets: 3,
  //     reps: 10,
  //     day: new Date(),
  //   },
  // ]);
  // console.log("workouts seeded");

  await User.deleteMany();
  // await User.create({
  //   userName: "JoelCutler",
  //   email: "joel@joel.com",
  //   password: "pwpwpw",
  //   // workouts: [
  //   //   {
  //   //     exercises: [exercises[0]._id, exercises[1]._id, exercises[2]._id],
  //   //   },
  //   // ],
  // });

  // await User.create({
  //   userName: "JordanEdginton",
  //   email: "jordan@jordan.com",
  //   password: "pwpwpw",
  //   workouts: [
  //     {
  //       exercises: [exercises[0]._id],
  //     },
  //   ],
  // });

  // await User.create({
  //   userName: "RochelleDavis",
  //   email: "rochelle@rochelle.com",
  //   password: "pwpwpw",
  //   workouts: [
  //     // {
  //     //   exercises: [exercises[6]._id, exercises[7]._id, exercises[8]._id],
  //     // },
  //   ],
  // });

  // await User.create({
  //   userName: "LoganParke",
  //   email: "logan@logan.com",
  //   password: "pwpwpw",
  //   workouts: [
  //     // {
  //     //   exercises: [exercises[9]._id, exercises[10]._id, exercises[11]._id],
  //     // },
  //   ],
  // });

  // console.log("users seeded");

  process.exit();
});
