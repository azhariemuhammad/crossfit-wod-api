const recordService = require('../services/recordService')

const getRecordForWorkout = (req, res) => {
    const { params } = req
    try {
        const records = recordService.getRecordForWorkout(params.workoutId)
        res.send({ status: "OK", data: records });
    } catch (e) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

module.exports = {
    getRecordForWorkout
}