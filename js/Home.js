$(document).ready(function(){
$(".clients").slick({
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
$('.home-Gallery').slick({
  dots: !1,
      infinite: !0,
      speed: 300,
      slidesToShow: 3,
      touchMove: !0,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
$(function () {
  $('[data-toggle="tooltip"]').tooltip(
    Animation
  )
})