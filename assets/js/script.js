$(document).ready(function(){
	// bootstrap carousel 
	const myCarouselElement = document.querySelector('#topCarousel')
	const carousel = new bootstrap.Carousel(myCarouselElement, {
	  interval: 3000,
	  cycle:true,
	  ride:"carousel"
	});

	// alert box delay 
  $("#alertBox").delay(2000).fadeIn(500, function(){
  	$(this).removeClass('d-none')
  });
});