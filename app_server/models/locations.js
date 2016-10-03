var mongoose = require('mongoose');

//remember the mongoose schema takes a javascript object that has many options. 
//Explore the options in the documentation.

var openingTimeSchema = new mongoose.Schema({
	days: {type: String, required: true},
	opening: {type: String},
	closing: {type: String},
	closed: {type: Boolean, required: true}
});

var reviewSchema = new mongoose.Schema({
	author: {type: String, required: true},
	rating: {type: Number, required: true},
	reviewText: {type: String, min: 0, max: 5},
	createdOn: {type: Date, "default": Date.now}
});


var locationSchema =  mongoose.Schema({
	name: {type: String, required: true},
	address: {type: String, required: true}, 
	rating: {type: Number, "default": 0, min: 0, max: 5}, //default doesnt have to be in "", buts a reserve word so its a good idea to 
	facilities: {type: [String]} ,
	coords: {type: [Number], index: '2dsphere'},
	openingTimes: [openingTimeSchema],
	reviews: [reviewSchema]
});

mongoose.model('Location', locationSchema);

