
$(function(){
  // 
  // slick
  // 
  $('.works__slider').slick({
    autoplay: false,
    arrows: true,
    dots: true,
  });

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
  //変更するcssクラス
  var nav = $('.hNavWrap');
  var ham = $('.hNav__hamburger');

  $(window).on('load scroll', function(){
    if ($(window).scrollTop() ) {
      nav.addClass('transform');
      ham.addClass('transform-ham');
    } else {
      nav.removeClass('transform');
      ham.removeClass('transform-ham');
    }
  });
  // 
  // Hamburger menu 
  // 
  var menu = $('.hNav__right');
  var bar = $('.hNav__hamburger__bar');
  var slick_arrow = $('.slick-arrow');

  ham.on('click', function() {
    menu.toggleClass('is-active');
    bar.toggleClass('is-cross');
    slick_arrow.toggleClass('is-hidden');
  });

  var link = $('.hNav__rightLink');

  link.on('click', function() {
    menu.removeClass('is-active');
    bar.removeClass('is-cross');
    slick_arrow.removeClass('is-hidden');
  });

  // 
  // Scroll Button
  // 
  // var pageHeight = $('.TopView__heading').offset().top;
  var pageHeight = 300;
  var scrollBtn = $('.scroll__button');

  $(window).on('load scroll', function() {
    if ($(window).scrollTop() < pageHeight) {
      scrollBtn.removeClass('hidden');
    } else {
      scrollBtn.addClass('hidden');
    }
  });
  
});