const {Student} = require ('../models/Student');

const createStudent = async (req, res) =>{
     try{
         const student = new Student(req.body)
         await student.save()
         res.status(200).send(student)
     }
     catch(e){
        res.status(400).send(e)
     }
}

const getStudents = async (req, res) =>{
    try{
        const students = await Student.find({})
        res.status(200).send(students)
    }
    catch(e){
       res.status(400).send(e)
    }
}

const getStudentById = async (req, res) =>{

    try{
        const studentId =  req.params.id
        const student = await Student.findById(studentId).populate({ path: 'course', select: 'name' });
        res.status(200).send(student)
    }
    catch(e){
        res.status(400).send(e)
     }
}
