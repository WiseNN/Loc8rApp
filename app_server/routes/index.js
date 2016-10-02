var express = require('express');
var router = express.Router();
/**
	This "goes up one directory, into the controllers folder, and 
	accesses the file named 'main.js', but leaves the extension off. ". 
	This is then 'require' d or imported into the current file inside of 
	the variable named: ctrlMain. 
 **/
var ctrlMain = require('../controllers/main');

/* GET home page. */




  router.get('/', ctrlMain.index);

module.exports = router;
