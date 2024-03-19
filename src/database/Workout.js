const DB = require('./db.json');
const { saveToDB } = require('./utils')
const getAllWorkouts = () => {
    return DB.workouts
}

const getOneWorkout = (id) => {
    const workouts = DB.workouts
    
    return workouts.filter(workout => workout.id === id)
};
  
const createNewWorkout = (newWorkout) => {

    const isAlreadyAdded = DB.workouts.findIndex(workout => workout.name === newWorkout.name) > -1
    if (isAlreadyAdded) return

    DB.workouts.push(newWorkout)
    saveToDB(DB)

    return DB.workouts
}

const updateWorkout = (workId, updatedWorkout) => {
    const indexToUpdate = DB.workouts.findIndex(workout => workout.id === workId)
    const target = DB.workouts[indexToUpdate]
    const workout =  {...target, ...updatedWorkout }

    if (indexToUpdate === -1) return

    DB.workouts.splice(indexToUpdate, 1, workout);
    
    saveToDB(DB)

    return DB.workouts
}

const deleteOneWorkout = (workId) => {
    const indexToUpdate = DB.workouts.findIndex(workout => workout.id === workId)
    if (indexToUpdate === -1) return

    DB.workouts.splice(indexToUpdate, 1);

    saveToDB(DB)

    return DB.workouts
    
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateWorkout,
    deleteOneWorkout
}