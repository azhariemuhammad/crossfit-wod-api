const DB = require('./db.json');
const { saveToDB } = require('./utils')
const getAllWorkouts = () => {
    try {
        return DB.workouts;
    } catch (error) {
        throw { status: 500, message: error };
    }
}

const getOneWorkout = (id) => {
    try {
        const workout = DB.workouts.find((workout) => workout.id === workoutId);
        if (!workout) {
            throw {
                status: 400,
                message: `Can't find workout with the id '${workoutId}'`,
            };
        }
        return workout;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};
  
const createNewWorkout = (newWorkout) => {

    const isAlreadyAdded = DB.workouts.findIndex(workout => workout.name === newWorkout.name) > -1
    if (isAlreadyAdded) {
        throw {
            status: 400,
            message: `Workout with the same name ${newWorkout.name} already exists`
        }
    }
    try {
        DB.workouts.push(newWorkout)
        saveToDB(DB)
        return newWorkout
    } catch (error) {
        throw { status: 500, message: error?.message || error };
    }
}

const updateWorkout = (workId, updatedWorkout) => {
    const indexToUpdate = DB.workouts.findIndex(workout => workout.id === workId)
    const target = DB.workouts[indexToUpdate]
    const workout =  {...target, ...updatedWorkout }

    if (indexToUpdate === -1) {
        throw {
            status: 400,
            message: `Workout with the same name ${newWorkout.name} already exists`
        }
    }
    try {
        DB.workouts.splice(indexToUpdate, 1, workout);
    
        saveToDB(DB)

        return DB.workouts
    } catch (error) {
        throw { status: 500, message: error?.message || error };
    }
}

const deleteOneWorkout = (workId) => {
    const indexToUpdate = DB.workouts.findIndex(workout => workout.id === workId)
    if (indexToUpdate === -1) {
        throw {
            status: 400,
            message: `Couldn't find workout with id ${workId}`
        }
    }

    try {
        DB.workouts.splice(indexToUpdate, 1);
        saveToDB(DB)
        return DB.workouts
    } catch (error) {
        throw { status: 500, message: error?.message || error };
    }
    
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateWorkout,
    deleteOneWorkout
}