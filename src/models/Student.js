const {Schema, model} = require ('mongoose')

var mongoose = require('mongoose');

const studentSchema = new Schema(
    {

    firstName: { type: String, required: true },

    lastName: { type: String, required: true },

    email: {type: String, required: true, unique: true},

    course: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    
        }]
    }
);

const Student = model('Student', studentSchema)

module.exports = {
    Student,
};