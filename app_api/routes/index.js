var express = require('express'); //import express package
var router = express.Router();  //get express router
var ctrlLocations = require('../controllers/locations');
var ctrlReviews = require('../controllers/reviews'); //CREATE THIS FILE

router.get('/locations', ctrlLocations.locationsListByDistance);
// router.post('/locations', ctrlLocations.locationsCreate);
// router.get('/locations/:locationid', ctrlLocations.locationsReadOne);
// router.put('/locations/:locationid', ctrlLocations.locationsUpdateOne);
// router.delete('/locations:locationid', ctrlLocations.locationsDeleteOne);

// //reviews
// router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);
// router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
// router.put('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
// router.delete('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);

module.exports = router; 

