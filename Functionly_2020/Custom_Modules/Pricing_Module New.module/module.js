 
$('.price1-acc-title').click(function(){
  $(this).parents().siblings().children().find('.price1-acc-content').slideUp();
  $(this).siblings('.price1-acc-content').slideToggle();
  $(this).parent('.price1-acc-inner').toggleClass('active');
  $(this).parent('.price1-acc-inner').parent().toggleClass('activeparent');
  $(this).parents().siblings().children('.price1-acc-inner').removeClass('active');
  $(this).parents().siblings().children('.price1-acc-inner').parent().removeClass('activeparent');
});


 

var e = document.getElementById("filt-month"),
    d = document.getElementById("filt-annual"),
    t = document.getElementById("switcher"),
    m = document.getElementById("month"),
    y = document.getElementById("annual");

e.addEventListener("click", function(){
  t.checked = false;
  e.classList.add("toggler--is-active");
  d.classList.remove("toggler--is-active");
  m.classList.remove("hide");
  y.classList.add("hide");
});

d.addEventListener("click", function(){

  t.checked = true;
  d.classList.add("toggler--is-active");
  e.classList.remove("toggler--is-active");
  m.classList.add("hide");
  y.classList.remove("hide");
});

t.addEventListener("click", function(){
    $(".price1-inner").toggleClass("active");
  d.classList.toggle("toggler--is-active");
  e.classList.toggle("toggler--is-active");
  m.classList.toggle("hide");
  y.classList.toggle("hide");
})


