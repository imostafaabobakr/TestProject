const {Schema, model} = require ('mongoose')
var mongoose = require('mongoose');


const bookSchema = new Schema(
    {
        title: { type: String, required: true, index: true },
        year: { type: Number, required: true, index: true },
        course:{
                  type: mongoose.Schema.Types.ObjectId,
                   ref: 'Course',
                   requird:true
                }
    }

);



const Book = model('Book', bookSchema)

module.exports = {
    Book,
};