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
