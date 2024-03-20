const { v4: uuid } = require("uuid");
const Workout = require('../database/Workout')

const getAllWorkouts = (filterParams) => {
  // console.log({filterParams})
  try {
    const allWorkouts = Workout.getAllWorkouts(filterParams);
    return allWorkouts;
  } catch (error) {
    throw error;
  }
};
  
const getOneWorkout = (workoutId) => {
  try {
    const workout = Workout.getOneWorkout(workoutId)
    return workout
  } catch (error) {
    throw error;
  }   
};
  
const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    
    try {
      const createdWorkout = Workout.createNewWorkout(workoutToInsert)
      return createdWorkout
    } catch (e) {
      throw e
    }
  };
  
const updateOneWorkout = (workoutId, newWorkout) => {
  const workoutToUpdate = {
    ...newWorkout,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const updatedWorkout = Workout.updateWorkout(workoutId, workoutToUpdate)
    return updatedWorkout
  } catch (e) {
    throw e
  }    
};
  
const deleteOneWorkout = (workoutId) => {
  try {
    const deletedWorkout = Workout.deleteOneWorkout(workoutId)
    return deletedWorkout
  } catch (e) {
    throw e
  }
}
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };