


$( document ).ready(function() {
      $( ".hs-accordion__item" ).click(function() {
        if($(this).hasClass("active"))
        {
          $( ".hs-accordion__item" ).removeClass("active"); 
          $("main").slideUp();
        }
        else{
          $( ".hs-accordion__item" ).removeClass("active"); 
          $( this ).addClass("active");
          $("main").slideUp();
          $(this).children("main").slideDown();
        }
      });
  
  });
