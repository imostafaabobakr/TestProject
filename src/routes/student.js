const {Router} = require('express');
const Student = require('../controllers/student-controller')

const studentRouter = Router()

//create student
studentRouter.post('/', Student.createStudent)
studentRouter.get('/', Student.getStudents)
studentRouter.get('/:id', Student.getStudentById)
studentRouter.patch('/:id', Student.updateStudent)
studentRouter.delete('/:id', Student.deleteStudent)

module.exports = {
    studentRouter,
}