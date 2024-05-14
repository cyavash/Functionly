$( document ).ready(function() {

var modal1 = document.getElementById("myModal");
  
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// 
$(".fancybox").click(function() {
  modal1.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
  
  
  var modalbox = document.getElementById("myModal1");
  
// Get the <span> element that closes the modal
var spanclose = document.getElementsByClassName("close1")[0];

  
  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } 
}
  
  });




$('.price-acc-title').click(function(){
  $(this).parents().siblings().children().find('.price-acc-content').slideUp();
  $(this).siblings('.price-acc-content').slideToggle();
  $(this).parent('.price-acc-inner').toggleClass('active');
  $(this).parent('.price-acc-inner').parent().toggleClass('activeparent');
  $(this).parents().siblings().children('.price-acc-inner').removeClass('active');
  $(this).parents().siblings().children('.price-acc-inner').parent().removeClass('activeparent');
});









