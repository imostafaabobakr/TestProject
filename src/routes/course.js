const {Router} = require('express');
const Course = require('../controllers/course-controller')

const courseRouter = Router()

//create course
courseRouter.post('/', Course.createCourse)
courseRouter.get('/', Course.getCourses)
courseRouter.get('/:id', Course.getCourseById)
courseRouter.patch('/:id', Course.updateCourse)
courseRouter.delete('/:id', Course.deleteCourse)

module.exports = {
    courseRouter,
}