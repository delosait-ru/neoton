"use strict";

console.log('global');
"use strict";

var _document, _document2, _document3;

/*Меню каталог*/
$(function () {
  $(".sf-menu").superfish({
    delay: 200,
    speed: "fast",
    cssArrows: false,
    pathLevels: 3,
    speedOut: 'fast'
  }).after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");
  $("#mobile-menu").find("*").attr("style", "");
  $("#mobile-menu").children("ul").removeClass("sf-menu").parent().mmenu({
    extensions: ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
    navbar: {
      title: "Каталог"
    }
  });
  $(".toggle-mnu").click(function () {
    $(this).addClass("on");
  });
  var api = $("#mobile-menu").data("mmenu");
  api.bind("closed", function () {
    $(".toggle-mnu").removeClass("on");
  });
});
/*$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('mm-panel').addClass('mm-current');
    } else {
        $('#mm-0').removeClass('mm-current');
    }
});*/

/*
$(document).ready(function () {
    var elem = document.getElementById("mm-1");
    elem.classList.add("mm-hidden");
})
$(document).ready(function () {
    var elem = document.getElementById("mm-2");
    elem.classList.remove("mm-hidden");
})

$(document).ready(function () {
    var elem = document.getElementById("mm-2");
    elem.classList.add("mm-opened");
})*/

/*Главное меню*/

var burger = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-burger]');
var nav = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-nav]');
var navItems = nav === null || nav === void 0 ? void 0 : nav.querySelectorAll('a');
var body = document.body;
var header = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelector('.header');
var headerHeight = header.offsetHeight;
burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', function () {
  body.classList.toggle('stop-scroll');
  burger === null || burger === void 0 ? void 0 : burger.classList.toggle('burger--active');
  nav === null || nav === void 0 ? void 0 : nav.classList.toggle('nav--visible');
});
navItems.forEach(function (el) {
  el.addEventListener('click', function () {
    body.classList.remove('stop-scroll');
    burger === null || burger === void 0 ? void 0 : burger.classList.remove('burger--active');
    nav === null || nav === void 0 ? void 0 : nav.classList.remove('nav--visible');
  });
});
//# sourceMappingURL=main.js.map
