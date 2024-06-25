$(function () {
  $(".header-top__open-btn").click(function () {
    $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
    $(".header-sp").toggleClass("open-menu"); //ナビゲーションにクラスを付与
  });

  $(".header-sp").click(function () {
    $(".header-top__open-btn").toggleClass("active"); //ボタン自身に activeクラスを付与し
    $(".header-sp").toggleClass("open-menu"); //ナビゲーションにクラスを付与
  });

  $(".header-sp__nav-link").click(function () {
    //ナビゲーションのリンクがクリックされたら
    $("header-top__open-btn").removeClass("active"); //ボタンの activeクラスを除去し

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



// 計算フォーム
const app = Vue.createApp({
  data: () => ({
    a: 230,
    b: 10,
    c: 250,
    d: 100,
    e: 30,
    f:20
  }),
  computed: {
    multi1: function () {
      return (this.a * this.b * this.c * this.d) / 100;
    },
    multi2: function () {
      return (this.multi1 *this.f) / 100;
    },
    multi3: function () {
      return this.multi2 * this.e;
    }
  }
}).mount("#app");