// Javascript


/**
 * ------------------------------------------------------
 * TEXT RESIZE
 * ------------------------------------------------------
 */

var resizeText = function () {
  // Standard height, for which the body font size is correct
  var preferredFontSize = 160; // %
  var preferredSize = 1200 * 900;

  var currentSize = $(window).width() * $(window).height();
  var scalePercentage = Math.sqrt(currentSize) / Math.sqrt(preferredSize);
  var newFontSize = preferredFontSize * scalePercentage;
  $("body").css("font-size", newFontSize + '%');
  };

  $(window).bind('resize', function() {
  resizeText();
}).trigger('resize');


