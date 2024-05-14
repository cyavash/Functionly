$('.accordion-title').click(function(){
  $(this).parents().siblings().children().find('.accordion-content').slideUp();
  $(this).siblings('.accordion-content').slideToggle();
  $(this).parent('.accordion-inner').toggleClass('active');
  $(this).parent('.accordion-inner').parent().toggleClass('activeparent');
  $(this).parents().siblings().children('.accordion-inner').removeClass('active');
  $(this).parents().siblings().children('.accordion-inner').parent().removeClass('activeparent');
});



