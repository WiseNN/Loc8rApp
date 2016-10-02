/**
	The purpose of the router is to route the controllers in the controllers folder to 
	a URL path that is literally built here inside of this file. 
**/


var express = require('express');
var router = express.Router();
/**
	This "goes up one directory, into the controllers folder, and 
	accesses the file named 'main.js', but leaves the extension off. ". 
	This is then 'require' d or imported into the current file inside of 
	the variable named: ctrlMain. 
 **/
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* Location Pages */
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);




  router.get('/about', ctrlOthers.about);

module.exports = router;
