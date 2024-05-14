$(document).ready(function(){

	var sloganArea = $('.slogan ul');
	sloganArea.width(sloganArea.find('li').eq(0).find('span').width());

	setInterval(function () {
		var itemHeight = $('.slogan ul li').eq(0).height();

		sloganArea.animate({
			width : $('.slogan ul li').eq(1).find('span').width(),
			top : itemHeight * -1
		},200, function(){
			sloganArea.append($('.slogan ul li').eq(0));
			sloganArea.css('top', 0);

			$('.slogan ul li').each(function(i){
				$(this).css('top', i*itemHeight);
			});
		});

	}, 2000);

});

