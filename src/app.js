const express = require('express');
const {courseRouter} = require('./routes/course')
const {reviewRouter} = require('./routes/review')
const app = express()

app.use(express.json())



app.use("/courses/", courseRouter)
app.use("/reviews/", reviewRouter)
module.exports = {app};