const { AuthenticationError } = require("apollo-server-express");
const { User, Workout, Exercise, Category } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //works
    categories: async () => {
      return await Category.find();
    },
    //works
    exercises: async (parent, { category, exerciseName }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (exerciseName) {
        params.exerciseName = {
          $regex: exerciseName,
        };
      }

      return await Exercise.find(params).populate("category");
    },
    //works
    exercise: async (parent, { _id }) => {
      return await Exercise.findOne(_id);
      // .populate("category");
    },

    //returns workouts in console, but not on front end
    user: async (parent, { userName }, context) => {
      return User.findOne({ userName }).populate("workouts");
    },
    // works
    users: async () => {
      const allUsers = await User.find();

      return allUsers;
    },

    // user: async (parent, args, context) => {
    //   // if (context.user) {
    //   if (user) {
    //     const user = await User.findById(user._id).populate({
    //       path: "workouts.exercises",
    //       populate: "category",
    //     });

    //     // user.workouts.sort((a, b) => b.purchaseDate - a.purchaseDate);

    //     return user;
    //   }

    //   throw new AuthenticationError("Not logged in");
    // },

    workout: async (parent, { userId, workoutId }, context) => {
      // if (context.user) {
      //const user = await User.findById(userId).populate('workouts');
      const workout = await Workout.findById(workoutId).populate('exercises');
      console.log(workout);
      return workout;
      //}

      throw new AuthenticationError("Not logged in");
    },
    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;
    //   const order = new Order({ products: args.products });
    //   const line_items = [];

    //   const { products } = await order.populate("products");

    //   for (let i = 0; i < products.length; i++) {
    //     const product = await stripe.products.create({
    //       name: products[i].name,
    //       description: products[i].description,
    //       images: [`${url}/images/${products[i].image}`],
    //     });

    //     const price = await stripe.prices.create({
    //       product: product.id,
    //       unit_amount: products[i].price * 100,
    //       currency: "usd",
    //     });

    //     line_items.push({
    //       price: price.id,
    //       quantity: 1,
    //     });
    //   }

    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ["card"],
    //     line_items,
    //     mode: "payment",
    //     success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${url}/`,
    //   });

    //   return { session: session.id };
    // },
  },
  Mutation: {
    //works
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    //works
    addWorkout: async (parent, { userId, workoutTitle }, context) => {
      console.log(workoutTitle, "workout title");
      // if (context.user) {
      try {
        const workout = await Workout.create(
          { workoutTitle }
        );
        console.log(workout, "workout!!");

        const updatedUser = await User.findByIdAndUpdate(
          { _id: userId },
          {
            $push: { workouts: workout._id },
          },
          { new: true }
        );
        console.log(updatedUser);
        return updatedUser;
      } catch (e) {
        console.log(e);
      }

      // throw new AuthenticationError("Not logged in");
    },
    //updated workout returns null
    addExerciseToWorkout: async (
      parent,
      {
        userId,
        workoutId,
        exerciseName,
        equipment,
        description,
        category,
        duration,
        distance,
        weight,
        sets,
        reps,
      },
      context
    ) => {
      const exercise = await Exercise.create({
        exerciseName,
        equipment,
        description,
        category,
        duration,
        distance,
        weight,
        sets,
        reps,
      });
      console.log(exercise, "exercise");
      const updatedUser = await User.findByIdAndUpdate(
        { _id: userId },
        {
          $push: { exercises: exercise }
        },
        { new: true }
      );
      console.log(updatedUser, "updated user");
      const updatedWorkout = await Workout.findByIdAndUpdate(
        { _id: workoutId },
        {
          $push: { exercises: exercise },
        },
        { new: true }
      );
      // console.log(updatedUser, "updated user");
      console.log("UPDATED " + updatedWorkout);
      return updatedWorkout;
    },
    deleteExerciseFromWorkout: async(parent, {workoutId, exerciseId}, context) => {
      console.log("exercise ID: " + exerciseId);
      const updatedWorkout = await Workout.findByIdAndUpdate(
        { _id: workoutId },
        { $pull: {exercises: { _id: exerciseId }}},
        { new: true }
      );
      console.log("UPDATED WORKOUT: " + updatedWorkout);
      return updatedWorkout;
    },
    deleteWorkoutFromUser: async(parent, {userId, workoutId}, context) => {
      const updatedUser = await User.findByIdAndUpdate(
        { _id: userId },
        { $pull: {workouts: workoutId }},
        { new: true }
      );
      console.log("UPDATED USER: " + updatedUser);
      return updatedUser;
    },
    //have not tested
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("Not logged in");
    },
    //works
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
