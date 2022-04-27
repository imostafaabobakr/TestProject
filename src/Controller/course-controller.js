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


const updateCourse = async (req,res) =>{
    try{
        const courseId =  req.params.id
        // const course = await course.findByIdAndUpdate({_id : courseId}, req.body, {new:true});
        const course = await Course.findOne({_id : courseId})

        if(req.body.name){
            course.name = req.body.name;
        }
        if(req.body.instructor){
            course.instructor = req.body.instructor;
        }

        if(req.body.prof){
            course.prof = req.body.prof;
        }
    

        if(req.body.studnumber){
            course.studnumber = req.body.studnumber;
        }
    
    

        await course.save()
        res.status(200).send(course)
    }
    catch(e){
        res.status(400).send(e)
     }

}
