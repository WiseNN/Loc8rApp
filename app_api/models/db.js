
var mongoose = require("mongoose");

var dbURI = 'mongodb://localhost/Loc8r';

	
	if(process.env.NODE_ENV === 'production')
	{
		dbURI=process.env.MLAB_URI;
		console.log("Debug...INSIDE OF PRODUCTION LOOP")
		console.log("Show the URI:"+dbURI);
	}
		mongoose.connect(dbURI);
	

	console.log("Current Variable Status: "+process.env.NODE_ENV);

	mongoose.connection.on('connected', function(){

		console.log("Mongoose Connected to: "+dbURI);
	});

	mongoose.connection.on('error', function(err){
		console.log("Mongoose connection error: "+err);
	});

	mongoose.connection.on('disconnected',function(){
		console.log("...Mongoose DISCONNECTED");
	});

	var gracefulShutdown = function(msg, callback){
		mongoose.connection.close(function(){
			console.log('Mongoose disconnected through '+msg);
			callback();
		});

	};
	//Fore nodemon restarts
	process.once('SIGUSR2', function(){
		gracefulShutdown('nodemon restart', function(){
			process.kill(process.pid, 'SIGUSR2');
		});
	});
	//For app termination
	process.on('SIGINT', function(){
		gracefulShutdown('SIGINT', function(){
			process.exit(0);
		});
	});

	//For Heroku termination
	process.on('SIGTERM', function(){
		gracefulShutdown('SIGTERM', function(){
			process.exit(0);
		})
	});

	require('./locations');
