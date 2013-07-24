var args = arguments[0] || {};

var rating;
function setRating(r) {
	rating = r;

	for (var i=1; i<=5; i++) {
		if (i <= rating) {
			$['star_'+i].image = '/StarRating/star_enabled.png'
		}
		else {
			$['star_'+i].image = '/StarRating/star_disabled.png'
		}
	}
	
}


function clickRating(e) {
	setRating(e.source.rating);
	$.view.fireEvent('change', {rating: rating});
}

if (args.rating) {
	setRating(args.rating);
}

exports = {
	setRating: setRating,
	getRating: function(){ return rating; }
};

