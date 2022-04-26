const {Course} = require ('../models/Course');

const createCourse = async (req, res) =>{
     try{
         const course = new Course(req.body)
         await course.save()
         res.status(200).send(course)
     }
     catch(e){
        res.status(400).send(e)
     }
}

