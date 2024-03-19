const workoutService = require('../services/workoutService')

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts()
    res.status(201).send({status: 'OK', data: allWorkouts});
  };
  
const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout(req.params?.workoutId)
    res.status(201).send({status: 'OK', data: workout});
  };
  
const createNewWorkout = (req, res) => {
    const { body } = req
    
    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) return;

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises ?? [],
        trainerTips: body.trainerTips
    }
    const createdNewWorkout = workoutService.createNewWorkout(newWorkout)
    res.status(201).send({status: 'OK', data: createdNewWorkout});
  };
  
const updateOneWorkout = (req, res) => {
  const { body, params: { workoutId } } = req
  

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises ?? [],
    trainerTips: body.trainerTips,
    id: workoutId,
}

    const updatedWorkout = workoutService.updateOneWorkout(workoutId, newWorkout)
    res.status(201).send({status: 'OK', data: updatedWorkout});
  };
  
const deleteOneWorkout = (req, res) => {
    const { params: { workoutId } } = req
    workoutService.deleteOneWorkout(workoutId)
    res.status(204).send({status: 'OK'});
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };