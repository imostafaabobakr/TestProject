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
const getCourses = async (req, res) =>{
    try{
        const courses = await Course.find({})
        res.status(200).send(courses)
    }
    catch(e){
       res.status(400).send(e)
    }
}

const getCourseById = async (req, res) =>{

    try{
        const courseId =  req.params.id
        const course = await Course.findById({_id : courseId})
        res.status(200).send(course)
    }
    catch(e){
        res.status(400).send(e)
     }
}

