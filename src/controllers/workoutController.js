const workoutService = require('../services/workoutService')

const getAllWorkouts = (req, res) => {
  const { mode } = req.query
    try {
      const allWorkouts = workoutService.getAllWorkouts({ mode });
      res.send({ status: "OK", data: allWorkouts });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };
  
const getOneWorkout = (req, res) => {
  try {
    const workout = workoutService.getOneWorkout(req.params?.workoutId)
    res.status(201).send({ status: 'OK', data: workout });
  } catch (error) {
    res
    .status(error?.status || 500)
    .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
  
const createNewWorkout = (req, res) => {
    const { body } = req
    
    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
      res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
        },
      })

      return
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises ?? [],
        trainerTips: body.trainerTips
    }
    try {
      const createdNewWorkout = workoutService.createNewWorkout(newWorkout)
      res.status(201).send({status: 'OK', data: createdNewWorkout});
    } catch (error) {
      res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
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
  try {
    const updatedWorkout = workoutService.updateOneWorkout(workoutId, newWorkout)
    res.status(201).send({status: 'OK', data: updatedWorkout});
  }  catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
  }
    
};
  
const deleteOneWorkout = (req, res) => {
  const { params: { workoutId } } = req
  try {
    workoutService.deleteOneWorkout(workoutId)
    res.status(204).send({ status: 'OK' });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };