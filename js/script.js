'use strict';

var menuFlg = false;

function menuAnimation() {
  if (menuFlg == false) {
      menuFlg = true;
      $(".header_button").addClass("header_button_on");
      $(".menu").removeClass("u-none");
      $(".menu").removeClass("menu_off");
      $(".menu").addClass("menu_on")
  } else {
      menuFlg = false;
      $(".header_button").removeClass("header_button_on");
      $(".menu").removeClass("menu_on");
      $(".menu").addClass("menu_off");
      $(".menu").delay(500).queue(function() {
          $(this).addClass("u-none").dequeue()
      })
  }
}

$(document).on("click", ".header_button", menuAnimation);
