const {Router} = require('express');
const Book = require('../controllers/book-controller')

const bookRouter = Router()

//create book
bookRouter.post('/', Book.createBook)
bookRouter.get('/', Book.getBooks)
bookRouter.get('/:id', Book.getBookById)
bookRouter.patch('/:id', Book.updateBook)
bookRouter.delete('/:id', Book.deleteBook)

module.exports = {
    bookRouter,
}