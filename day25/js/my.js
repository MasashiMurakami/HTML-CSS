$(function() {
//
// SmoothScroll
//
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
//
// Header Scroll
//
    //cssを変更するクラス
    var nav = $('.gNav'),
        headerHeight = $('.header').innerHeight() - 10;
    $(window).on('load scroll', function(){
      var value = $(this).scrollTop();
      if ( value > headerHeight ) {
        nav.addClass('transform');
      } else {
        nav.removeClass('transform');
      }
    });
//
// Vegas
//
  $('.header').vegas({
    timer: false,
    cover: true,
    slides: [
        { src: '/img/fv-bgi_01@2x.jpg' },
        { src: '/img/fv-bgi_02@2x.jpg' },
        { src: '/img/fv-bgi_03@2x.jpg' },
    ]
  });
});