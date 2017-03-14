var $ = require('jquery');

var getTargetHTML = function (elem) {
  var id = elem.attr('data-modal-id');
  var target = $('[data-modal="' + id + '"]');
  return target.length > 0 && target;
};

module.exports = {
  init: function () {
    var triggers = $('[data-modal-id]');

    triggers.each(function (index, trigger) {
      var el = $(trigger);
      var target = getTargetHTML(el);

      if (target) {
        target.on('click', '[data-modal-close]', function (e) {
          e.preventDefault();
          target.fadeOut(200);
        });

        el.on('click', function (e) {
          e.preventDefault();
          $('[data-modal]').fadeOut(100);
          target.fadeIn(200);
        });
      }
    });
  }
};
