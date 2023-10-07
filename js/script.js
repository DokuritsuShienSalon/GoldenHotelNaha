'use strict';

var wH, menuFlg = false;

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