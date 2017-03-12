var $ = require('jquery');

module.exports = {
  init: function () {
    var tabs = $('ul.tabs');

    tabs.each(function (i) {
      var tab = $(this).find('> li > a');
      tab.on('click', function (e) {
        var contentLocation = $(this).attr('href');
        if (contentLocation && contentLocation.charAt(0) === '#' && contentLocation.length > 1) {
          e.preventDefault();
          tab.removeClass('is-active');
          $(this).addClass('is-active');

          var target = $(contentLocation);
          if (target.length > 0) {
            target.show().addClass('is-active').siblings().hide().removeClass('is-active');
          }
        }
      });

      tab.first().trigger('click');
    });
  }
};
