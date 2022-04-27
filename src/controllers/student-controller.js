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


const updateStudent = async (req,res) =>{
    try{
        const studentId =  req.params.id
        const student = await Student.findOne({_id : studentId})

        if(req.body.firstName){
            student.firstName = req.body.firstName;
        }
        if(req.body.lastName){
            student.lastName = req.body.lastName;
        }

        if(req.body.email){
            student.email = req.body.email;
        }
    

        if(req.body.course){
            student.course = req.body.course;
        }
    
    

        await student.save()
        res.status(200).send(student)
    }
    catch(e){
        res.status(400).send(e)
     }

}



const deleteStudent = async (req,res) =>{

    try{
        const studentId =  req.params.id
        const student = await Student.deleteOne({_id : studentId})
        res.status(200).send(student)
    }
    catch(e){
        res.status(400).send(e)
     }
}

module.exports= {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
}