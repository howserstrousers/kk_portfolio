$(document).ready(function(){
  $('.container-fluid').css('height', $(window).height());
});

if ( $(window).width() >1024) {
  $(document).ready(function(){
    function setHeight() {
            windowHeight = $(window).innerHeight();
            $('.container-fluid').css('min-height', windowHeight);
          };
          setHeight();
          
          $(window).resize(function() {
              setHeight();
          });

          function setHeight() {
            windowHeight = $(window).innerHeight();
            $('.carouselwrapper').css('max-height', windowHeight);
          };
          setHeight();
          
          $(window).resize(function() {
              setHeight();
          });

          function setHeight() {
            windowHeight = $(window).innerHeight();
            $('#measurements').css('height', windowHeight);
          };
          setHeight();
          
          $(window).resize(function() {
              setHeight();
          });
  });
}


//CAROUSEL
if ( $(window).width() < 1024) {

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
            adaptiveHeight: true,
        });
      });

  $(document).ready(function(){
      $('.bg-slideshow').css('height', $(window).height());
  });
  
}

/*
if ( $(window).width() > 1024) {

  $(".hpimages").click(function () {
    $(".hpimages").css("display", "none");
    $("#indexcontainer .navlink").css("display", "block");
  });

  $(".hpimages").click(function () {
    $(".hpimages").css("display", "none");
    $(".indexlist").css("display", "block");
  });
}
*/

$(document).ready(function() {
  $(".pdrop").click(function(){
      $("#plist").toggleClass("show");
      $(".pdrop span").toggleClass("hide");
      $(".pdrop p").toggleClass("remove");
  });

  $("#plist a").click(function(){
      $("#plist").removeClass("show");
  });
});


$(document).ready(function() {
    //Carousel
        $('.carousel_container').each(function (idx, item) {
            var carouselId = "carousel" + idx;
            this.id = carouselId;
            $(this).slick({
                slide: "#" + carouselId +" .carousel_image",
                appendArrows: "#" + carouselId + " .prev_next",
                prevArrow: '<a>&#8592;</a>',
                nextArrow: '<a>&#8594;</a>',
                lazyLoad: 'progressive',
            });
        });
});

$(function(){
  $(window).scroll(function(){
    $.PreImageLoad();
  });
});

$(document).ready(function () {
        $('.marquee').marquee({
          allowCss3Support:true,
          pauseOnHover:true,
          duration:6000,

        });
});