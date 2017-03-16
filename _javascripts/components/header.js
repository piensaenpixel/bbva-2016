var $ = require('jquery');

var header = $('[data-header]');
var headerControl = $('[data-header-control]');
var existeHeader = header.length > 0 && headerControl.length > 0;

var scrollHandler = function () {
  var top = headerControl.get(0).getBoundingClientRect().top;
  var h = header.height();
  header.toggleClass(header.data('header'), top - h < 0);
};

var $w = $(window);

module.exports = {
  init: function () {
    if (!existeHeader) return;
    $w.on('scroll', scrollHandler);
  }
};

$( ".js-searchAction" ).click(function() {
  /*$( "body" ).addClass('block');*/
  $( ".search" ).addClass('is-active');
  $( ".header" ).addClass('is-search');
  $( ".search-form input" ).focus();
});

$( ".js-searchClose" ).click(function() {
  /*$( "body" ).addClass('block');*/
  $( ".search" ).removeClass('is-active');
  $( ".header" ).removeClass('is-search');
});

$( ".js-hamburguer" ).click(function() {
  $('body').toggleClass('blocked');
  $('.navigation-mobile').toggleClass('is-open');
  $('.hamburguer-icon').toggleClass('is-hidden');
  $('.closeMenu-icon').toggleClass('is-open');
});

function fixHeader() {
  $('.container--fixed').css('padding-top', value+'px');
};

$(document).resize(function() {
  fixHeader();
});

fixHeader();



