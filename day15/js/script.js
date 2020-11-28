$('.burger-btn').on('click',function(){//.btn_triggerをクリックすると
  $('.burger-btn').toggleClass('close');//.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
  $('.nav-wrapper').fadeToggle(500);//.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
  $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
 });

 if( $(window).width() < 768 ){//デバイスの幅が768以下のとき
  $('.nav-item>a').on('click',function(){//.nav-item>aをクリックすると
    $('.nav-wrapper').fadeOut(500);//.nav-wrapperが0.5秒でフェードアウト(メニューのフェードアウト)
    $('.burger-btn').removeClass('close');//.btn_triggerのcloseクラスを削除
    $('body').removeClass('noscroll');//bodyのnoscrollクラスを削除
  });
}