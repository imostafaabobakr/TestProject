const {Book} = require ('../models/Book');

const createBook = async (req, res) =>{
     try{
         const book = new Book(req.body)
         await book.save()
         res.status(200).send(book)
     }
     catch(e){
        res.status(400).send(e)
     }
}

const getBooks = async (req, res) =>{
    try{
        const books = await Book.find({})
        res.status(200).send(books)
    }
    catch(e){
       res.status(400).send(e)
    }
}

const getBookById = async (req, res) =>{

    try{
        const bookId =  req.params.id
        console.log(bookId);
        const book = await Book.findById(bookId).populate({ path: 'course', select: 'name' });
        res.status(200).send(book)
    }
    catch(e){
        res.status(400).send(e)
     }
}


const updateBook = async (req,res) =>{
    try{
        const bookId =  req.params.id

        const book = await Book.findOne({_id : bookId})

        if(req.body.title){
            book.title = req.body.title;
        }
        if(req.body.year){
            book.year = req.body.year;
        }

        if(req.body.course){
            book.course = req.body.course;
        }
    

        await book.save()
        res.status(200).send(book)
    }
    catch(e){
        res.status(400).send(e)
     }

}



const deleteBook = async (req,res) =>{

    try{
        const bookId =  req.params.id
        const book = await Book.deleteOne({_id : bookId})
        res.status(200).send(book)
    }
    catch(e){
        res.status(400).send(e)
     }
}

module.exports= {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
}