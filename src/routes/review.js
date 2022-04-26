const {Router} = require('express');
const Review = require('../controllers/review-controller')

const reviewRouter = Router()

//create review
reviewRouter.post('/', Review.createReview)
reviewRouter.get('/', Review.getReviews)
reviewRouter.get('/:id', Review.getReviewById)
reviewRouter.patch('/:id', Review.updateReview)
reviewRouter.delete('/:id', Review.deleteReview)

module.exports = {
    reviewRouter,
}