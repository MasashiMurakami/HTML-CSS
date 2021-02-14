$(function(){
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

  $(function(){
    //画像の高さを取得。これがイベント発火位置になる。
    var imgHeight = $('.header').outerHeight();
    //ヘッダーコンテンツ
    var nav = $('.nav');
  
    $(window).on('load scroll', function(){
       if ($(window).scrollTop() < imgHeight) {
         //メインビジュアル内にいるので、クラスを外す。
         nav.removeClass('trasform');
       }else {
         //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
         nav.addClass('trasform');
       }
    });
  });

});