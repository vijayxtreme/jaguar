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

	//Mobile Shelf
	$(".mobile_shelf").click(function(){
		// $("header ul").toggle();
		$("header ul").toggle();
	});

	//Mobile Change Template

	$(".mobile_tab").click(function(){
		var id = $(this).attr('id');
		if(timer){
			clearInterval(timer);
		}
		// alert(id);
		if(id != "contact" && id != "map" && id != "extra"){
			$(".carousel").hide();
			$(".mobile-all").hide();
			$("."+id).toggle();
		}


	})


});