var args = arguments[0] || {};

var DIMENSION = args.dimension || 40;

var onStarImage = args.onStarImage || '/StarRating/star_enabled.png';
var offStarImage = args.offStarImage || '/StarRating/star_disabled.png';
var inputStarImage = args.inputStarImage || '/StarRating/star_input.png';


$.view.height = DIMENSION;
for (var i=1; i<=5; i++) {
	
	$['starHolder'+i].width = DIMENSION;
	$['starHolder'+i].height = DIMENSION;
	
	$['star_'+i+'_left'].height = DIMENSION;
	$['star_'+i+'_left'].width = DIMENSION;
	
	$['star_'+i+'_right'].backgroundImage = offStarImage;
	$['star_'+i+'_right'].height = DIMENSION;
	$['star_'+i+'_right'].width = DIMENSION;
}


var mode = args.mode;



function setRating(r) {
	if (typeof r == 'string') {
		rating = parseFloat(r);
	}
	else {
		rating = r;
	}
Ti.API.info('setting rating widget to value '+(0+rating));	
	updateDisplay();
}




function updateDisplay() {

	if (mode == 'input') {
		for (var i=1; i<=5; i++) {
			$['star_'+i+'_left'].backgroundImage = inputStarImage;
			$['star_'+i+'_left'].width = DIMENSION;
			$['star_'+i+'_right'].width = 0;
		}
	}
	else {
		
		Ti.API.info('star rating widget value = '+rating);
		
		var ratingFloor = Math.floor(rating);
		
		for (var i=1; i<=5; i++) {

			$['star_'+i+'_left'].backgroundImage = onStarImage;
			$['star_'+i+'_right'].width = DIMENSION;

			if (i <= ratingFloor) {
				$['star_'+i+'_left'].width = DIMENSION;
			}
			else if (i-1<rating && i>rating) {
				var fraction = rating - (i-1);
				$['star_'+i+'_left'].width = fraction * DIMENSION;
			}
			else {
				$['star_'+i+'_left'].width = 0;
			}			
			
		}
	}
}


function clickRating(e) {
	if (mode == 'input') {
Ti.API.info(e);
		setRating(e.source.rating);
		$.view.fireEvent('change', {rating: rating});
	}
}


Ti.API.info('got rating from args = '+args.rating+' '+(typeof args.rating));

var rating = args.rating || 0;
Ti.API.info('stored rating = '+rating+' '+(typeof rating));
setRating(rating);


exports = {
	
	setMode: function(m) { mode = m; updateDisplay(); },
	
	setRating: setRating,
	getRating: function(){ return rating; },

};

