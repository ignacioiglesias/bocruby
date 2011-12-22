(function($) {
  var config = {
    'layout': {
      'selector': '.layout',
      'over': {
        'opacity': 1,
      },
      'out': {
        'opacity': 0.25
      }
    }
  }
  // Every layout element      
  var layout;
  
  var layoutIn = function(ev) {
    layout.stop().animate(config.layout.over);
  }
  
  var layoutOut = function(ev) {
    layout.stop().animate(config.layout.out);
  }
  
  var init = function () {
    // Add handlers to turn ligths on/off layout
    layout = $(config.layout.selector);
    layout.hover(layoutIn, layoutOut);
    layoutOut(); // Turn light of ;) ;) <3 ;) BUNGA BUNGA (?)
  }
  
  $(document).ready(init);
})(jQuery);