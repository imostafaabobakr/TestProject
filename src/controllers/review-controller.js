const {Review} = require ('../models/Review');

const createReview = async (req, res) =>{
     try{
         const review = new Review(req.body)
         await review.save()
         res.status(200).send(review)
     }
     catch(e){
        res.status(400).send(e)
     }
}

const getReviews = async (req, res) =>{
    try{
        const reviews = await Review.find({})
        res.status(200).send(reviews)
    }
    catch(e){
       res.status(400).send(e)
    }
}

const getReviewById = async (req, res) =>{

    try{
        const reviewId =  req.params.id
        const review = await Review.findById(reviewId).populate({ path: 'student', select:[ 'firstName','lastName' ]}).populate({ path: 'course', select: 'name' });
        res.status(200).send(review)
    }
    catch(e){
        res.status(400).send(e)
     }
}
