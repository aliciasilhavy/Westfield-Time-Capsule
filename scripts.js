jQuery(function () {
	var before = $('.slider-bef');
	var after = $('.slider-after');
	var handle = $('.handle-wrapper');
	var slider = $('.AB-slidebar');
	var tooltip = $('.slider-tip');

	var currentWidth = $(before).width(); //get current width of top image
	var newTopWidth = currentWidth * 1 / 2; //calculate new top width -> 2/3 of current width
	var slideLeft = newTopWidth * 1 / 2; //set # of pixels to slide left
	var slideRight = newTopWidth; //set # of pixels to slide right


	before.width(newTopWidth); //set top image with new width
	handle.css('left', newTopWidth); //set left margin for bar

	function slideBar(e) {

		setTimeout(function () {
			var newWidth = parseInt($(handle).css('left'));
			// set width of before img div 
			before.width(newWidth);
		}, 30);

		e.stopPropagation();
	}


	handle.draggable({
		containment: slider,
		axis: 'x'
	});

	slider.bind('drag', slideBar).bind('mousedown', function () {
		tooltip.fadeOut(10);
	});

});
