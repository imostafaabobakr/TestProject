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


module.exports= {
    createBook,
    getBooks,
    getBookById
}