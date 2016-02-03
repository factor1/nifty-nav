// Proposed Changes To Nify Nav

function niftyNav(){
  $nifty_toggle = $('#nifty-nav-toggle');
  $nifty_panel = $('.nifty-panel');
  $nifty_mask = $('.nifty-mask');
  $nifty_nav_item = $('.nifty-nav-item');
  $nifty_parent = $('.nifty-panel ul li');

  // Settings
  sub_menus = true;
  use_mask = true;
  item_click_close = true;

  // Core Nifty Nav Functions
  niftyRemove = function(){
    $nifty_mask.remove();
  }

  niftyUnmask = function(){
    $nifty_mask.animate({opacity: 0.0});
    setTimeout(niftyRemove, 800);
  }

  // on nifty nav toggle click
  $nifty_toggle.click(function(){
    var $this = $(this);
    $this.toggleClass('nifty-active');
    $nifty_panel.slideToggle(500).css('position','absolute');

    if( use_mask === true){
      // if a mask exists
      if( $nifty_mask.length ){
        niftyUnmask();
      } else{
        // if no mask exists
        $('body').append('<div class="nifty-mask"></div>');
        $nifty_mask.animate({opacity: 1.0});

        // if a user clicks on the mask
        $nifty_mask.click(function(){
          $nifty_panel.slideUp(500);
          niftyUnmask();
          $nifty_toggle.removeClass('nifty-active');
        });
      }
    }
  })

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
