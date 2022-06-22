const db = require("./connection");

const { User, Exercise, Category, Workout } = require("../models");


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



await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Arm' },
    { name: 'Legs' },
    { name: 'Shoulders' },
    { name: 'Back' },
    { name: 'Core' },
    { name: 'Cardio'}
  ]);

  console.log('categories seeded');

  await Exercise.deleteMany();

  const exercises = await Workout.insertMany([
    {
      name: 'Bicep Curl',
      description:
        'Do a Bicep Curl.',
      //image: 'cookie-tin.jpg',
      category: categories[0]._id,
      weight: 30,
      sets: 3,
      reps: 12
    },
    {
      name: 'Hammer Curl',
      description:
        'Do a Hammer Curl.',
      //image: 'cookie-tin.jpg',
      category: categories[0]._id,
      weight: 30,
      sets: 3,
      reps: 12
    },
    {
      name: 'Hamstring Curl',
      category: categories[1]._id,
      description:'Do a hamstring curl',
      //image: 'toilet-paper.jpg',
      weight: 30,
      sets: 3,
      reps: 12
    },
    {
      name: 'Leg Extensions',
      category: categories[1]._id,
      description:
        'Do leg extensions.',
      //image: 'soap.jpg',
      weight: 80,
      sets: 3,
      reps: 12
    },
    {
      name: 'Shoulder Press',
      category: categories[2]._id,
      description:
        'Do a shoulder press.',
      //image: 'wooden-spoons.jpg',
      weight: 50,
      sets: 3,
      reps: 12
    },
    {
      name: 'Pike Ups',
      category: categories[2]._id,
      description:
        'Do pike ups',
      //image: 'camera.jpg',
      weight: 0,
      sets: 3,
      reps: 12
    },
    {
      name: 'Bent over row',
      category: categories[3]._id,
      description:
        'Do Bent over rows.',
      //image: 'tablet.jpg',
      weight: 45,
      sets: 3,
      reps: 12
    },
    {
      name: 'Seated Row',
      category: categories[3]._id,
      description:
        'Do seated rows.',
      //image: 'bedtime-book.jpg',
      weight: 45,
      sets: 3,
      reps: 12
    },
    {
      name: 'Planks',
      category: categories[4]._id,
      description: 'Do plank.',
      //image: 'spinning-top.jpg',
      weight: 0,
      sets: 3,
      reps: 1,
      duration: 1
    },
    {
      name: 'Sit ups',
      category: categories[4]._id,
      description:
        'Do sit ups.',
      //image: 'plastic-horses.jpg',
      weight: 0,
      sets: 3,
      reps: 12
    },
    {
      name: 'Elliptical',
      category: categories[5]._id,
      description:
        'Use the elliptical.',
      //image: 'teddy-bear.jpg',
      duration: 30
    },
    {
      name: 'Treadmill',
      category: categories[5]._id,
      description:
        'Run on the treadmill.',
      //image: 'alphabet-blocks.jpg',
      duration: 30
    }
  ]);

  console.log('exercises seeded');

  process.exit();
});