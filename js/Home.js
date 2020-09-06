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
$('.people').slick({
  dots: !1,
  infinite: !0,
  speed: 300,
  slidesToShow: 2,
  touchMove: !0,
  slidesToScroll: 1,
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

});


const haschildern=document.querySelectorAll('.haschildern');
const shortcodes_box=document.getElementById('shortcodes-box');
const div_mega=document.getElementsByClassName('div-mega');
const search_icon=document.getElementById('search-icon');
const search_box=document.getElementsByClassName('search-box');
const search_span=document.getElementsByClassName('fa fa-search')



for( let i=0;i<haschildern.length;i++)
{
  haschildern[i].addEventListener('mouseover',()=>{
    
    haschildern[i].classList.add('current');
   
  })
  haschildern[i].addEventListener('mouseleave',()=>{
    haschildern[i].classList.remove('current');
  })
}

shortcodes_box.addEventListener('mouseover',()=>
{
  div_mega[0].style.opacity=1;
  div_mega[0].style.visibility='visible';

});
shortcodes_box.addEventListener('mouseleave',()=>
{
  div_mega[0].style.opacity=0;
  div_mega[0].style.visibility='hidden';

});
search_icon.addEventListener('click',()=>{
   
  if( search_box[0].style.opacity==0)
  {
    search_span[0].style.color='#fff';
    search_icon.style.background='#e7512f';
    search_box[0].style.visibility='visible';
    search_box[0].style.opacity=1;

  }else
  {
    search_icon.style.background='';
    search_span[0].style.color='';
    search_box[0].style.visibility='hidden';
    search_box[0].style.opacity=0;
  }

})
$(window).scroll( function(){

  "use strict";
  /* Check the location of each desired element */
  $('.fun-staff').each( function(i){

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > bottom_of_object ){

          $(".count").countTo();

      }

  }); 

});