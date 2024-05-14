$(document).ready(function() {
  // Initially activate the first tab on desktop
  $('.tabs .tab:first').addClass('active');
  $('.tab-content .tab-pane:first').addClass('active');

  // Handle tab click events on desktop
  $('.tabs .tab').click(function() {
    // Remove active class from all tabs and tab content
    $('.tabs .tab').removeClass('active');
    $('.tab-content .tab-pane').removeClass('active');

    // Add active class to the clicked tab and corresponding tab content
    $(this).addClass('active');
    $('.tab-content .tab-pane:eq(' + $(this).index() + ')').addClass('active');
  });

  // Handle tab-pane-heading click events on mobile
  $('.tab-pane-heading').click(function() {
    // Remove active class from all other tab panes
    $('.tab-pane').removeClass('active');
    
    // Toggle active class for the clicked tab
    $(this).closest('.tab-pane').toggleClass('active');
  });
});
