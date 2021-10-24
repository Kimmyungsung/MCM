$(document).ready(function(){
  var navArea = $('.nav-area');
  var iconMenu = $('.icon-menu');
  var header = $('header')

  $(window).resize(function(){
    var windowWidth = $(this).width();

    if(windowWidth<=1024){
      navArea.hide();
      $('.sub-area').css({right:'100%'});

      $('.g-menu').off('mouseover');
      $('.g-menu').off('mouseout');
      navArea.prependTo('body');

      $('.g-menu > a').click(function(){
        $(this).siblings('.sub-area').animate({right:'0%'});
        });
        $('.s-prev').click(function () {
          $(this).parents('.sub-area').animate({ right: '100%' }, 200);
        });
        $('.s-close').click(function () {
          $(this).parents('.sub-area').animate({ right: '100%' }, 200);
        });
        $('.nav-home').click(function () {
          $(this).parents('.sub-area').animate({ right: '100%' }, 200);
        });
    } else {
  
      $('.sub-area').css({ right: '50%' });
      navArea.show();
      navArea.css({display:'flex'});

      $('.g-menu').on('mouseover',function(){
        var subHeight = $(this).find('.sub-area').height();
        $('.blackbg').css({height:subHeight});


        $('.blackbg').stop().show();
        $(this).find('.sub-area').stop().slideDown(300);
        $(this).css({"border-bottom": "2px solid #111"})
      });
      $('.g-menu').on('mouseout',function(){
        $(this).find('.sub-area').stop().slideUp(100);
        $('.blackbg').stop().hide();
        $(this).css({"border-bottom": "none"})
      });

           navArea.appendTo('header');

           iconMenu.before(navArea);
    }
  });
  let resize1 = $(window).trigger('resize') 


  if($(window).width()<= 480){
    var ootdslider = new Swiper(".backswiper", {
      slidesPerView: 2 ,
      spaceBetween: 7,
      loop: true 
    }


    )};


  //동영상 
  var listVideo = $('.list-video');
  var videoControl = $('.video-control');

  $(window).scroll(function () {

    var currentSct = $(this).scrollTop();
    var videoThreshould = listVideo.offset().top - 300;

    if (currentSct > videoThreshould) {
      videoControl.delay(1000).fadeIn();
      //get(인덱스번호)-선택한 요소를 배열로 가져오는 메서드
      listVideo.find('video').get(0).play();

    }//if
  });//scroll
  // 메뉴 이벤트
  $('.menu').click(function(){
    $('body, html').css({height:'100vh', overflow:'hidden'});
    navArea.show();
    navArea.find('nav').animate({left:'0px'},200);
    $('.menu').hide();
    $('.close').show();
  });
  $('.close').click(function(){
    navClose();
    $('.menu').show();
    $('.close').hide();
  });

  function navClose(){
    navArea.hide();
    $('body, html').css({ height: 'auto', overflow: 'visible' });
  }
}); //로딩함수