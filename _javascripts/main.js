var $ = require('jquery');
window.jQuery = $;

require('jquery-parallax.js');
require('swipebox');

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
});
