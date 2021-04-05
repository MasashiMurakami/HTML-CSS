$(function() {

  $('.hamburger__button, .hNav-right__list__link').on('click', function(){
    // $('.hNav-right').toggleClass('active');
    $('.hNav-right').fadeToggle(500);
    $('.hamburger__button').toggleClass('close');
    $('body').toggleClass('noscroll');
  });

});