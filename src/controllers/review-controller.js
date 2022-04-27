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