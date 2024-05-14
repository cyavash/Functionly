 
$('.price1-acc-title').click(function(){
  $(this).parents().siblings().children().find('.price1-acc-content').slideUp();
  $(this).siblings('.price1-acc-content').slideToggle();
  $(this).parent('.price1-acc-inner').toggleClass('active');
  $(this).parent('.price1-acc-inner').parent().toggleClass('activeparent');
  $(this).parents().siblings().children('.price1-acc-inner').removeClass('active');
  $(this).parents().siblings().children('.price1-acc-inner').parent().removeClass('activeparent');
});


 

