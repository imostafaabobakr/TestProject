const express = require('express');
const {courseRouter} = require('./routes/course')
const app = express()



const {reviewRouter} = require('./routes/review')


app.use(express.json())



app.use("/courses/", courseRouter)




app.use("/reviews/", reviewRouter)

module.exports = {app};