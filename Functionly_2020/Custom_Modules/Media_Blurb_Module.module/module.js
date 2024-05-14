$(document).ready(function() {
    $('.media-blurb-inner').isotope({
        itemSelector : '.media-blurb-item',
        layoutMode : 'fitRows'
    });
  
  $('#filterOptions li a').click(function() {
    
     $('#filterOptions li').removeClass("active");
    $(this).parent().addClass("active");
    var value1=$(this).text(); 
    console.log(value1);
      if(value1=="All")
      {
        $('.media-blurb-inner').isotope({ filter: '*' })
      }
      else if(value1=="In the news" )
      {
        $('.media-blurb-inner').isotope({ filter: '.news' });
      }

      else if(value1=="Press release")
      {
        $('.media-blurb-inner').isotope({ filter: '.press' });
      }
   	});

  /*
    $('#filterOptions li a').click(function() {
      // store anything commonly called in variables to speed up your code
      const $this = $(this)
      const ourClass = $this.attr('class');
      const $ourHolder = $('#ourHolder');
      // reset the active class on all the buttons
      $('#filterOptions li').removeClass('active');
      // update the active state on our clicked button
      $this.parent().addClass('active');
      
      if (ourClass === 'all') {
        // show all our items
        $ourHolder.children('div.item').fadeIn(1000); 
      } else {
        // hide all elements that don't share ourClass
        $ourHolder.children('div:not(.' + ourClass + ')').fadeOut();
        // show all elements that do share ourClass
        $ourHolder.children('div.' + ourClass).fadeIn(1000);
      }
      return false;
    });
  */
  
  });
















