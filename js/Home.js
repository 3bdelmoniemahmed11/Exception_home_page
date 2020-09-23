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
const haschildern=document.querySelectorAll('.haschildern');
const shortcodes_box=document.getElementById('shortcodes-box');
const div_mega=document.getElementsByClassName('div-mega');
const search_icon=document.getElementById('search-icon');
const search_box=document.getElementsByClassName('search-box');
const search_span=document.getElementsByClassName('fa fa-search');
const img_over=document.querySelectorAll('.img-over');
const a_link=document.querySelectorAll('.link');
const a_zoom=document.querySelectorAll('.zoom');
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
for(let i=0;i<img_over.length;i++)
{
  img_over[i].addEventListener('mouseover',()=>{
    img_over[i].style.opacity=1;
    a_link[i].classList.remove('fadeOutUp');
    a_link[i].classList.add('fadeInDown');
    a_zoom[i].classList.remove('fadeOutDown');
    a_zoom[i].classList.add('fadeInUp');
    })
  img_over[i].addEventListener('mouseleave',()=>{
    img_over[i].style.opacity=0;
    a_link[i].classList.add('fadeOutUp');
    a_link[i].classList.remove('fadeInDown');
    a_zoom[i].classList.add('fadeOutDown');
    a_zoom[i].classList.remove('fadeInUp');
  });
 
 
}
$('.top-search a ,.menuBtn').click(function(e)
{
    e.preventDefault();
});

$(".responsive-nav >ul").find('>li').each(function(){
  var t = $(this).find(">ul");
  var o= $(this).find('.div-mega_res');
      $(this).find('>.downArrow').click(function(){
      $(this).parent().toggleClass('current');
      t.slideToggle(500); 
      o.slideToggle(500);
      })
    })
    $(".responsive-nav >ul >li").find('>ul').find('>li').each(function(){
       var t = $(this).find(">ul");
      $(this).find('>.downArrow').click(function(){
      $(this).parent().toggleClass('current');
      t.slideToggle(500); 
      })
    })
    
    $('.menuBtn').on('click',()=>{
      $('.menuBtn').toggleClass('menuBtn-selected');
      $('.responsive-nav').toggleClass('res-act');
    });

});



var a = 0;
$(window).scroll(function() {

  var oTop = $('.fun-staff-o').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.fun-number').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 4000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);

          }

        });
    });
    a = 1;
  }
  var t= $(window).scrollTop();
  if(t>1)
  {
    $('.top-head')[0].classList.add('sticky');
    $('.top-head')[0].style.borderBottom='none';
    $('.top-nav>ul li a i').each(function(){
      this.style.display='none';
    });
    $('.top-nav .menu-hint').css('display','none');
    $('.top-search a').css('borderRadius','0%')
    $('.top-nav li').each(function()
    {
     this.classList.add('hidden');
    })
    $('.top-nav>ul.def-effect li>ul').css('top','83px');
    $('.top-nav>ul.def-effect li>ul').css('left','0px');
    $('.div-mega').css('top','83px');
    $('.search-box').css('top','83px');
  }
else
{
  $('.top-head')[0].classList.remove('sticky');
  $('.top-head')[0].style.borderBottom="";
  $('.top-nav>ul li a i').each(function(){
    this.style.display='block';
  });
  $('.menu-hint').css('display','block');
  $('.top-search a').css('borderRadius','50%');
  $('.top-nav li').each(function()
    {
     this.classList.remove('hidden');
    })
    $('.top-nav>ul.def-effect li>ul').css('top','92px');
    $('.top-nav>ul.def-effect li>ul').css('left','-5px');
    $('.div-mega').css('top','92px');
    $('.search-box').css('top','92px');
}  
  
});
