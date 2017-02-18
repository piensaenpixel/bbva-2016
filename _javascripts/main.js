var $ = require('jquery');
window.jQuery = $;

require('jquery-parallax.js');

// Revamp plugin again
$('[data-parallax="scroll"]').parallax();

require('./vendor/jquery.tablehover')($);
require('./components/dropdown').init();
require('./components/table').init();
require('./components/search').init();
