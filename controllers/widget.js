var args = arguments[0] || {};

var mode = args.mode;

var onStarImage = '/StarRating/star_enabled.png';
var offStarImage = '/StarRating/star_disabled.png';
var inputStarImage = '/StarRating/star_input.png';


var rating;

function setRating(r) {
	rating = r;
	
	updateDisplay();
}

function updateDisplay() {
Ti.API.info('updating display of star rating widget in mode '+mode);	
	if (mode == 'input') {
		for (var i=1; i<=5; i++) {
			$['star_'+i].image = inputStarImage;
		}
	}
	else {
		
		for (var i=1; i<=5; i++) {
			if (i <= rating) {
				$['star_'+i].image = onStarImage;
			}
			else {
				$['star_'+i].image = offStarImage;
			}
		}
	}
	
}



function clickRating(e) {
	if (mode == 'input') {
		setRating(e.source.rating);
		$.view.fireEvent('change', {rating: rating});
	}
	else {
		Ti.API.trace('ignoring click for display mode rating widget');
	}
}

updateDisplay();

if (args.rating) {
	setRating(parseFloat(args.rating));
}

exports = {
	
	setMode: function(m) { mode = m; updateDisplay(); },
	
	setRating: setRating,
	getRating: function(){ return rating; },

};

