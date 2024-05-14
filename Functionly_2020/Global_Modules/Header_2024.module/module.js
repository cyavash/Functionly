function updateLogoAndHamburgerIcon() {
  var header = document.querySelector('.header-mobile');
  var mobileTriggerDiv = document.querySelector('.mobile-trigger');
  
  // Use the correct paths for your SVGs
  var whiteHamburgerSvg = '<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="19.25" y2="1" stroke="#ffffff" stroke-width="2"/><line y1="8" x2="19.25" y2="8" stroke="#ffffff" stroke-width="2"/><line y1="15" x2="19.25" y2="15" stroke="#ffffff" stroke-width="2"/></svg>'; // white SVG hamburger menu
  var purpleHamburgerSvg = '<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="19.25" y2="1" stroke="#6B2D90" stroke-width="2"/><line y1="8" x2="19.25" y2="8" stroke="#6B2D90" stroke-width="2"/><line y1="15" x2="19.25" y2="15" stroke="#6B2D90" stroke-width="2"/></svg>'; // purple SVG hamburger menu

  // Check if the header has the 'sticky' class and update the hamburger icon accordingly
  if (header.classList.contains('sticky')) {
    mobileTriggerDiv.innerHTML = purpleHamburgerSvg;
  } else {
    mobileTriggerDiv.innerHTML = whiteHamburgerSvg;
  }
}

function checkScrollAndUpdate() {
  var header = document.querySelector('.header-mobile');
  
  if (window.pageYOffset > 5) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }

  // Update icon after class change
  updateLogoAndHamburgerIcon();
}

// Setup event listeners 
document.addEventListener('DOMContentLoaded', checkScrollAndUpdate);
window.onscroll = checkScrollAndUpdate;



function updateLogoAndHamburgerIcon() {
  var header = document.querySelector('.header-mobile');
  var mobileTriggerDiv = document.querySelector('.mobile-trigger');
  
  var whiteHamburgerSvg = '<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="19.25" y2="1" stroke="#ffffff" stroke-width="2"/><line y1="8" x2="19.25" y2="8" stroke="#ffffff" stroke-width="2"/><line y1="15" x2="19.25" y2="15" stroke="#ffffff" stroke-width="2"/></svg>'; // white SVG hamburger menu
  var purpleHamburgerSvg = '<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="19.25" y2="1" stroke="#6B2D90" stroke-width="2"/><line y1="8" x2="19.25" y2="8" stroke="#6B2D90" stroke-width="2"/><line y1="15" x2="19.25" y2="15" stroke="#6B2D90" stroke-width="2"/></svg>'; // purple SVG hamburger menu

  if (header.classList.contains('sticky')) {
    mobileTriggerDiv.innerHTML = purpleHamburgerSvg;
  } else {
    mobileTriggerDiv.innerHTML = whiteHamburgerSvg;
  }
}

function checkScrollAndUpdate() {
  var header = document.querySelector('.header-mobile');
  
  if (window.pageYOffset > 5) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }

  updateLogoAndHamburgerIcon();
}

// Setup event listeners 
document.addEventListener('DOMContentLoaded', checkScrollAndUpdate);
window.onscroll = checkScrollAndUpdate;

// Event listener for mobile trigger
var mobileTriggerDiv = document.querySelector('.mobile-trigger');
mobileTriggerDiv.addEventListener('click', function() {
  var closeTrigger = document.querySelector('.close-trigger');
  var logoWhite = document.querySelector('.logo-white img');
  var logoDefault = document.querySelector('.logo-default img');

 
  // Check if close-trigger's opacity is 1
  if (window.getComputedStyle(closeTrigger).opacity === '1') {
    logoWhite.style.display = 'none';
    logoDefault.style.display = 'inline-block';
  }
});