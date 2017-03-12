var $ = require('jquery');
window.jQuery = window.$ = $;

require('jquery-parallax.js');

$(function () {
  // Revamp plugin again
  $('[data-parallax="scroll"]').parallax();

  require('./vendor/jquery.tablehover')($);
  require('./components/dropdown').init();
  require('./components/table').init();
  require('./components/search').init();
  require('./components/scroll-observer').init();
  require('./components/header').init();
  require('./components/tabs').init();
  require('./components/lightbox').init();
  require('./components/modals').init();
});
