var $ = require('jquery');
var basicLightbox = require('basiclightbox');

var getTargetHTML = function (elem) {
  var id = elem.attr('data-show-id');
  var target = $('[data-id="' + id + '"]');
  return target.length > 0 && target.get(0).outerHTML;
};

module.exports = {
  init: function () {
    var triggers = $('[data-show-id]');

    triggers.each(function (index, trigger) {
      var el = $(trigger);
      var html = getTargetHTML(el);

      if (html) {
        el.on('click', function (e) {
          e.preventDefault();
          basicLightbox.create(html).show();
        });
      }
    });
  }
};
