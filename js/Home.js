$(document).ready(function(){
$(".clients").not('.slick-initialized').slick({
    dots: !1,
      infinite: !0,
      speed: 300,
      slidesToShow: 5,
      touchMove: !0,
      slidesToScroll: 5,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
})
})