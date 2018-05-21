$(document).ready(function(){
	$('.container-fluid').css('height', $(window).height());
});

$(window).resize(function(){
	$('.container-fluid').css('height', $(window).height());
});

//CAROUSEL

$(document).ready(function(){
      $('.bg-slideshow').slick({
          infinite: true,
          autoplay: true,
          dots: false,
          arrows: false,
          autoplaySpeed: 3500,
          fade: true,
          cssEase: 'linear',
          speed: 1500,
      });
    });

$(document).ready(function(){
    $('.bg-slideshow').css('height', $(window).height());
});