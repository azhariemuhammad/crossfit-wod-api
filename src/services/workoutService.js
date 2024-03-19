const { v4: uuid } = require("uuid");
const Workout = require('../database/Workout')

const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts()
    return allWorkouts
  };
  
const getOneWorkout = (workoutId) => {
    const workout = Workout.getOneWorkout(workoutId)
    return workout
  };
  
const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    
    const createdWorkout = Workout.createNewWorkout(workoutToInsert)
    return createdWorkout
  };
  
const updateOneWorkout = (workoutId, newWorkout) => {
  const workoutToUpdate = {
    ...newWorkout,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
};
    const updatedWorkout = Workout.updateWorkout(workoutId, workoutToUpdate)
    return updatedWorkout
  };
  
const deleteOneWorkout = (workoutId) => {
    const deletedWorkout = Workout.deleteOneWorkout(workoutId)
    return deletedWorkout
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };