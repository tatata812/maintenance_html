$(function () {
  $(".header__open-btn").click(function () {
    $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
    $(".header-sp").toggleClass("open-menu"); //ナビゲーションにクラスを付与
  });

  $(".header-sp").click(function () {
    $(".header__open-btn").toggleClass("active"); //ボタン自身に activeクラスを付与し
    $(".header-sp").toggleClass("open-menu"); //ナビゲーションにクラスを付与
  });

  $(".header-sp__nav-link").click(function () {
    //ナビゲーションのリンクがクリックされたら
    $("header__open-btn").removeClass("active"); //ボタンの activeクラスを除去し

  });

  // ローティングバナの×
  $('#btn-js,#btn-js02').click(function () {
    $(this).parent().hide();
  });

  var headerHight = 80;
    $('a[href^="#"]').click(function () {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "html" : href);
      var position = target.offset().top - headerHight;
      $("html, body").animate({ scrollTop: position }, 550, "swing");
      return false;
    });

});

