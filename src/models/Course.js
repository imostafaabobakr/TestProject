const {Schema, model} = require ('mongoose')


const courseSchema = new Schema(
    {
        name: {
            type : String,
            required: true
        },
        instructor: {
            type: String,
            required: true
        },
        prof:{
            type: String,
            required: true
        },
        studnumber:{
         type: Number,
         min : 15 ,
         required: true   
        }
    }
);

const Course = model('Course', courseSchema)

module.exports = {
    Course,
};