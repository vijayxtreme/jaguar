$(function(){
	
	var arrImg = ['F-Type-R-Coupe.jpg', 'Jaguar-2.jpg', 'Jaguar-3.jpg'];
	var counter=1;

	var timer = setInterval(carouselImages, 4000);

	$(".unselected").click(function(){
		clearInterval(timer);
		
		var idx = $('.unselected').index(this);
		//console.log(idx);
		$(".carousel").css("background-image", function(){
				return 'url(\'images/'+arrImg[idx]+'\')';
		});
		$(".unselected").css("background-position","0 -16px");
		$(".unselected").eq(idx).css("background-position","0 0");

		//counter=0;

		//setInterval(carouselImages, 5000);
		
	});


	function carouselImages(){
		
		if(counter<arrImg.length){
			//console.log(counter);
			$(".carousel").fadeOut('slow', function(){
				$(".carousel").css("background-image", function(){
					return 'url(\'images/'+arrImg[counter]+'\')';
				});
				$(".carousel").fadeIn('slow');
				$(".unselected").css('background-position','0px -16px');
				$('.unselected').eq(counter).css('background-position','0px 0px');
				counter++;
			});
			
		}else {
			counter = 0;
		}

	}

	//Scroll Past Carousel (Desktop Only)
	var topofDiv = $("#carousel").offset().top;
	$(window).scroll(function(){
	    if($(window).scrollTop() > topofDiv){
	       $("header#fixed").show();
	    }
	    else{
	       $("header#fixed").hide();
	    }
	});

	//Mobile Swipes
	var swipeCount = 0;
	var myElement = document.getElementById("carousel");
	var hammertime = new Hammer(myElement);
	hammertime.on('swipe', function(ev) {
		if(swipeCount < arrImg.length){
			$(".carousel").css("background-image", function(){
				return 'url(\'images/'+arrImg[swipeCount]+'\')';	
			});
			$(".unselected").css("background-position","0 -16px");
			$(".unselected").eq(swipeCount).css("background-position","0 0");
			swipeCount++;
		}else {
			swipeCount = 0;
			$(".unselected").css("background-position","0 -16px");
			$(".unselected").eq(swipeCount).css("background-position","0 0");
			$(".carousel").css("background-image", function(){
				return 'url(\'images/'+arrImg[swipeCount]+'\')';	
			});
		}

	});

	$(".carousel").swipeleft
	if(timer){
		clearInterval(timer);
	}

	//Mobile Shelf
	$(".mobile_shelf").click(function(){
		// $("header ul").toggle();
		$("header ul").toggle();
	});

	//Fix for Pricing (if bigger than iPhone 5)
	if($("body").width() > 667) {
		$("div.membership_bottom").css("font-size", "0.5em");
	}

	//Mobile Change Template

	$(".mobile_tab").click(function(){
		var id = $(this).attr('id');
		if(timer){
			clearInterval(timer);
		}
		// alert(id);
		
		if(id=="contact"){
			$(".contact").ScrollTo({
				duration:200,
				easing: 'linear'
			});
		}else{
			$("body").ScrollTo({
				duration:200,
				easing: 'linear'
			});
			$(".carousel").hide();
			$(".mobile-all").hide();
			$("."+id).toggle();
		}




	})


});