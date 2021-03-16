$(function() {
  
  // 
  // Vegas
  // 
  $('#header').vegas({
    slides: [
      {src: 'img/fv-bgi_01@2x.jpg'},
      {src: 'img/fv-bgi_02@2x.jpg'},
      {src: 'img/fv-bgi_03@2x.jpg'}
    ],
    delay: 7000,
    timer: false,
    transitionDuration: 3000
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


  //画像の高さを取得。これがイベント発火位置になる。
  var imgHeight = $('.header').outerHeight();
  //ヘッダーコンテンツ
  var nav = $('.nav');

  $(window).on('load scroll', function() {
    if ($(window).scrollTop() < imgHeight) {
      //メインビジュアル内にいるので、クラスを外す。
      nav.removeClass('trasform');
    } else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      nav.addClass('trasform');
    }
  });

  // 
  // Hamburger menu 
  // 
  $('.nav_right_btn').on('click', function() {
    $('.nav_right_menu').toggleClass('is-active');
    $('.nav_right_btn_bar').toggleClass('is-cross');
  });

  $('.nav_right_link').on('click', function() {
    $('.nav_right_menu').removeClass('is-active');
    $('.nav_right_btn_bar').removeClass('is-cross');
  });

  

});