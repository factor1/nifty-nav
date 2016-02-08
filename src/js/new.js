// Proposed Changes To Nify Nav


  var niftyNav = function(options){
    $nifty_toggle = $('#nifty-nav-toggle');
    $nifty_panel = $('.nifty-panel');
    $nifty_nav_item = $('.nifty-nav-item');
    $nifty_parent = $('.nifty-panel ul li');

    var settings = $.extend({
      // These are the defaults.
      sub_menus: false,
      use_mask: true,
      item_click_close: true
    }, options );

    sub_menus         = settings.sub_menus;
    use_mask          = settings.use_mask;
    item_click_close  = settings.use_mask;


    // Core Nifty Nav Functions
    niftyRemove = function(){
      $('.nifty-mask').remove();
    };

    niftyUnmask = function(){
      $('.nifty-mask').animate({opacity: 0.0});
      setTimeout(niftyRemove, 800);
    };

    // on nifty nav toggle click
    $nifty_toggle.click(function(){
      var $this = $(this);
      $this.toggleClass('nifty-active');
      $nifty_panel.slideToggle(500).css('position','absolute');

      if( use_mask === true){
        // if a mask exists
        if( $('.nifty-mask').length > 0 ){
          niftyUnmask();
        } else{
          // if no mask exists
          $('body').append('<div class="nifty-mask"></div>');
          $('.nifty-mask').animate({opacity: 1.0});

          // if a user clicks on the mask
          $('.nifty-mask').click(function(){
            $nifty_panel.slideUp(500);
            niftyUnmask();
            $nifty_toggle.removeClass('nifty-active');
          });
        }
      }
    });

    // close nifty nav on nav item click
    if( item_click_close === true ){
      $nifty_nav_item.click(function(){
        $nifty_panel.slideUp(500);
        niftyUnmask();
        $nifty_toggle.removeClass('nifty-active');
      });
    }

    // if sub menus are enabled
    if( sub_menus === true ){
      var $nifty_parent_active;
      $nifty_parent.click(function(){
        $nifty_parent_active = $(this);
        $nifty_parent_active.find('.sub-menu').slideToggle();
        $nifty_parent_active.find('a').toggleClass('nifty-menu-opened');
      });
    }

  };


$(document).ready(function(){
  niftyNav();
});
