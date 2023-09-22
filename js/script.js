
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");

  });



  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

});






var nowUrl, nowHash, snsData = [], wW, wH, cW, tW, pW, dH, slide0, slideFlg0 = false, openingFlg = false, menuFlg = false, popupFlg = false, thanksFlg = false;




function menuAnimation() {
  if (menuFlg == false) {
      menuFlg = true;
      if ($(".header_button").hasClass("header_button_fix")) {
          $(".header_button").addClass("header_button_pause")
      }
      $(".header_button").addClass("header_button_on");
      $(".menu").removeClass("u-none");
      $(".menu").removeClass("menu_off");
      $(".menu").addClass("menu_on")
  } else {
      menuFlg = false;
      $(".header_button").removeClass("header_button_on");
      $(".menu").removeClass("menu_on");
      $(".menu").addClass("menu_off");
      if ($(".header_button").hasClass("header_button_fix")) {
          $(".header_button").delay(250).queue(function() {
              $(this).removeClass("header_button_pause").dequeue()
          })
      } else {
          if ($(window).scrollTop() > wH) {
              $(".header_button").delay(250).queue(function() {
                  $(this).removeClass("header_button_nofix");
                  $(this).addClass("header_button_fix").dequeue()
              })
          }
      }
      $(".menu").delay(500).queue(function() {
          $(this).addClass("u-none").dequeue()
      })
  }
}


$(document).on("click", ".header_button", menuAnimation);

$(document).on("mouseenter", ".pc .menu_list", function() {
  if ($(this).hasClass("menu_list_on") == false) {
      $(this).removeClass("menu_list_off");
      $(this).addClass("menu_list_on")
  }
});
$(document).on("mouseleave", ".pc .menu_list", function() {
  if ($(this).hasClass("menu_list_on")) {
      $(this).removeClass("menu_list_on");
      $(this).addClass("menu_list_off")
  }
});

$(document).on("touchstart", ".menu_list", function() {
  if ($(this).hasClass("menu_list_on") == false) {
      $(this).removeClass("menu_list_off");
      $(this).addClass("menu_list_on")
  }
});
$(document).on("touchend", ".menu_list", function() {
  if ($(this).hasClass("menu_list_on")) {
      $(this).removeClass("menu_list_on");
      $(this).addClass("menu_list_off")
  }
});