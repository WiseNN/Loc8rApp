//GET Home-Page
module.exports.homeList = function(req, res){

	res.render('locations-list', {
			
		title: 'Loc8r - Find places to work with wifi',
		pageHeader: {
			title: 'Loc8r',
			strapline: 'Find places to work with wifi near you!'
		},
		locations: [
			{
				name: 'Starcups',
				address: '125 High Street, Reading, RG6 1Ps',
				rating: '3',
				facilities: ['Hot drinks', 'food', 'Premium Wifi'],
				distance: '100m'
			},
			{
				name: 'Flip Burger',
				address: '500 PowesFerry Hwy, Smyrna, GA 30830',
				rating: '5',
				facilities: ['Hot drinks', 'food', 'Premium Wifi'],
				distance: '100m'
			},
			{
				name: 'Smoothie King',
				address: '245 Roswell Rd, Sandy Springs, GA 30350',
				rating: '4',
				facilities: ['Hot drinks', 'food', 'Premium Wifi'],
				distance: '100m'
			}
		],
		sidebar: 'Looking for wifi and a seat? Loc8r hwlps you find places to work when out and about. Perhaps with coffee, cake or print? Let Loc8r help you find the place you\'re looking for.'
	});
};


/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Starcups',
        pageHeader: 
        {
            title: 'Starcups'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: 
        {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: new Date("Jul 16, 2013"),
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: {
            title: 'Review Starcups'
        }
    });
};