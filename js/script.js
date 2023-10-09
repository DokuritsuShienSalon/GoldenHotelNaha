'use strict';

var menuFlg = false;

function menuAnimation() {
  if (menuFlg == false) {
      menuFlg = true;
      $(".c-hamburger").addClass("js-hamburger-on");
      $(".p-menu").removeClass("js-menu-off ");
      $(".p-menu").removeClass("u-none");
      $(".p-menu").addClass("js-menu-on")
  } else {
      menuFlg = false;
      $(".c-hamburger").removeClass("js-hamburger-on");
      $(".p-menu").removeClass("js-menu-on");
      $(".p-menu").addClass("js-menu-off ");
      $(".p-menu").delay(500).queue(function() {
          $(this).addClass("u-none").dequeue()
      })
  }
}

$(document).on("click", ".c-hamburger", menuAnimation);
