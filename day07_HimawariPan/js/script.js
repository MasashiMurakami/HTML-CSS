$(function(){
  $('#topMainVisual').slick({
    accessibility: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-out',
    arrows: false
  });

  var topBtn = $('#pagetop');
  topBtn.hide();
  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
        topBtn.fadeIn();
      }
      else {
        topBtn.fadeOut();
      }
  });

  $('a[href^="#"]').click(function(){
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html': href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

});