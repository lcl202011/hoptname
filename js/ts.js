$('li').mouseenter(function(){
		$(this).find('.divA').stop().animate({bottom:'-66px'});
		$(this).find('.a2').css({left:'0'})
		$(this).children('.a2').find('.p4').css({left:'0'})
		$(this).children('.a2').find('.p5').css({left:'0'})
		$(this).children('.a2').find('.p6').css({transform:'scale(1)'})
		$(this).children('.a2').find('.p7').css({bottom:'25px'})
	})
	$('li').mouseleave(function(){
		$(this).find('.divA').stop().animate({bottom:'0px'});
		$(this).find('.a2').css({left:-$(this).width()})
		$(this).children('.a2').find('.p4').css({left:-$(this).width()})
		$(this).children('.a2').find('.p5').css({left:-$(this).width()})
		$(this).children('.a2').find('.p6').css({transform:'scale(1.3)'})
		$(this).children('.a2').find('.p7').css({bottom:'-50px'})
	})