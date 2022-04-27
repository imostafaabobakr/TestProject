const {Schema, model} = require ('mongoose')

var mongoose = require('mongoose');


const reviewSchema = new Schema(
    {
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student',
            required: true
        },
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
            required: true
            },
        postedOn: {
            type: Date,
            default: Date.now
        },
        rating: {
            type: Number,
            required: [true, 'from 1 to 5'],
            min: 1,
            max: 5,
            default: 0
        },
        review: {
            type:String,
            required:false

        }
    }
);

const Review = model('Review', reviewSchema)

module.exports = {
    Review,
};