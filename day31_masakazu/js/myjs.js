$(function(){

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
  var nav = $('.gNav');
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() ) {
      nav.addClass('transform');
    } else {
      nav.removeClass('transform');
    }
  });

  // 
  // Hamburger menu 
  // 
  var bar = $('.gNav__hamburger__bar');
  var menu = $('.gNav-right__list');
  
  var ham = $('.gNav__hamburger');
  ham.on('click', function() {
    bar.addClass('is-cross');
    menu.addClass('is-active');
    $("html").addClass('is-fixed');
  });
  
  var link = $('.gNav-right__link');
  link.on('click', function() {
    bar.removeClass('is-cross');
    menu.removeClass('is-active');
    $("html").removeClass('is-fixed');
  });

  menu.on('click', function() {
    bar.removeClass('is-cross');
    menu.removeClass('is-active');
    $("html").removeClass('is-fixed');
  });



});