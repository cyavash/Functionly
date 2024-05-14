function tabs(context){
  var nav 			= context.querySelector('.hs-tabs__nav'),
      tabs 			= nav.querySelectorAll('a'),
      content 	= context.querySelectorAll('.hs-tabs__item'),
      switchTabs = function(id){
        removeClassAll(content, 'hs-tabs__item--active');
        context.querySelector(id).classList.add('hs-tabs__item--active');
      },
      tabEvent = function(event){
        if(event.target.nodeName == "A"){
          event.preventDefault();
          switchTabs(event.target.getAttribute('href'));
          removeClassAll(tabs, 'hs-tabs__navitem--active');
          event.target.classList.add('hs-tabs__navitem--active');
        }
      },
      removeClassAll = function(elemArr, className){
        for(var i = elemArr.length; i--;){
          elemArr[i].classList.remove(className);
        }
      },
      init = (function(){
        nav.addEventListener('click', tabEvent);
      })();
}

var tabbers = document.querySelectorAll('.hs-tabs');
for(var i = tabbers.length; i--;){
  tabs(tabbers[i]);
}
