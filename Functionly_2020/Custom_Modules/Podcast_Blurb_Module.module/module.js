(function() {
  // https://stackoverflow.com/a/34487069/383904
  var AUD = document.createElement("audio"),
      BTN = document.querySelectorAll("[data-audio]"),
      tot = BTN.length;
  
  function playPause() {
    // Get track URL from clicked element's data attribute
    var src = this.dataset.audio;
    // Are we already listening that track?
    if(AUD.src != src) AUD.src = src;
    // Toggle audio play() / pause() methods
    AUD[AUD.paused ? "play" : "pause"]();
    // Remove active class from all other buttons
    for(var j=0;j<tot;j++) if(BTN[j]!=this) BTN[j].classList.remove("on");
    // Add active class to clicked button
    this.classList.toggle("on");
    // Track ended? (Remove active class etc)
    AUD.addEventListener("ended", playPause);
  }
  
  for(var i=0;i<tot;i++) BTN[i].addEventListener("click", playPause);
  
}());