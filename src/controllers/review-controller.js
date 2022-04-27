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

const updateReview = async (req,res) =>{
    try{
        const reviewId =  req.params.id
        // const review = await review.findByIdAndUpdate({_id : reviewId}, req.body, {new:true});
        const review = await Review.findOne({_id : reviewId})

        if(req.body.student){
            review.student = req.body.student;
        }
        if(req.body.postedOn){
            review.postedOn = req.body.postedOn;
        }

        if(req.body.rating){
            review.rating = req.body.rating;
        }
    

        if(req.body.studnumber){
            review.review = req.body.review;
        }
    
    

        await review.save()
        res.status(200).send(review)
    }
    catch(e){
        res.status(400).send(e)
     }

}
