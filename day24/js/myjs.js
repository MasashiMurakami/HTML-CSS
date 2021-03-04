// 
// SmoothScroll
// 
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// 
// Header Scroll
// 
$(function(){
  //変更するcssクラス
  var nav = $('.hNavWrap');
  
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() ) {
      nav.addClass('transform');
    } else {
      nav.removeClass('transform');
    }
  });
});

// 
// Pager Button
// 
$(function(){
  // var pageHeight = $('.TopView__heading').offset().top;
  var pageHeight = 300;
  var pager = $('.scroll__button');

  $(window).on('load scroll', function() {
    if ($(window).scrollTop() < pageHeight) {
      pager.removeClass('hidden');
    } else {
      pager.addClass('hidden');
    }
  });
});