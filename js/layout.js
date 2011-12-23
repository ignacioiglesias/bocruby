(function($) {
  var config = {
    'layout': {
      'selector': '.layout',
      'speed': 'fast',
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
    layout.stop().animate(config.layout.over, config.layout.speed);
  }
  
  var layoutOut = function(ev) {
    layout.stop().animate(config.layout.out, config.layout.speed);
  }
  
  var init = function () {
    // Add handlers to turn ligths on/off layout
    layout = $(config.layout.selector);
    layout.hover(layoutIn, layoutOut);
    layoutOut(); // Turn light of ;) ;) <3 ;) BUNGA BUNGA (?)
    
    // Highlight code
    prettyPrint();
  }
  
  $(document).ready(init);
})(jQuery);