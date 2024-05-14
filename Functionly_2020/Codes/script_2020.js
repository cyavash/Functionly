

// Sticky Nav //
$(window).on('scroll',function(){
    if($(window).scrollTop() > 50){
      $('.header-outer-wrap').addClass('sticky-header')
    }else{
      $('.header-outer-wrap').removeClass('sticky-header')
    }
  
      // calculate the percentage the user has scrolled down the page
    var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());

    $('.bar-long').css('width', scrollPercent +"%"  );
  
  $('.blog-css.hs-blog-post .header-outer-wrap').addClass('sticky-header');
  
});
 



$(document).ready(function(){
  $(".open-feature").click(function(){
    $(".price-details").toggle(1000);
    $(".price-toggle-wrap").toggleClass("open");
  }); 
});



$(document).ready(function(){
  $(".open-feature").click(function(){
    $(".prce-table-inner").slideToggle(1000);
    $(".prce-table-wrap").toggleClass("open");
  }); 
});










 
$(document).ready(function() {

  /** 
     * Mobile Nav
     *
     * Hubspot Standard Toggle Menu
     */

  $('.header-container .main-navigation').addClass('js-enabled');

  /* Mobile button with three lines icon */
  $('.logo a').after('<div class="mobile-trigger"><img src="https://f.hubspotusercontent00.net/hubfs/7832858/Functionly_2020/Images/Hamburger.svg" width="20" height="16" ></div><div class="close-trigger"><img src="https://f.hubspotusercontent00.net/hubfs/7832858/Functionly_2020/Images/close-icon.svg" width="35" height="35"></div>');

  /* Uncomment for mobile button that says 'MENU' 
        $('.header-container .main-navigation .hs-menu-wrapper').before('<div class="mobile-trigger">MENU</div>');
    */

  $('.header-container .main-navigation .flyouts .hs-item-has-children > a').after(' <div class="child-trigger"><i></i></div>');
  $('.mobile-trigger').click(function() {
  
    $('.header-container .main-navigation .hs-menu-wrapper');
    $('body').toggleClass('mobile-open');
    $('.child-trigger').removeClass('child-open');
    $('.header-container .hs-menu-children-wrapper').slideUp(250);
     
  });

  $('.child-trigger').click(function() {
    $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
    $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
    $(this).next('.hs-menu-children-wrapper').slideToggle(250);
    $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
    $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
    $(this).toggleClass('child-open');
    return false;
  });
});
 
 








