const express = require('express')
const v1WorkoutRouter = require('./v1/routes/workoutRoutes')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send(`<h1>I'm alive</h1>`)
})

app.use(bodyParser.json())
app.use('/api/v1/workouts', v1WorkoutRouter)

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`)
})