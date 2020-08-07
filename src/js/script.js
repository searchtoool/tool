function dataload(text_search){
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (xhttp.readyState == XMLHttpRequest.DONE) {
         if (xhttp.status == 200) {
             document.getElementById("result_search").innerHTML = xhttp.responseText;
         } else if (xhttp.status == 400) {
             console.log('There was an error 400');
         } else {
             console.log('something else other than 200 was returned');
         }
      }
   };
   xhttp.open("GET", "php/search.php?txt=" + text_search, true);
   xhttp.send();
}

document.addEventListener('DOMContentLoaded',function(){
   /*indicator search*/
   var _typingIndicator = document.querySelector('.typing'),
      _input = document.querySelector('#search_input'),
      idleTime = 1000,
      idleTimer = null,
      inputValue,
      indicatorState = {
           active : 'is-typing-active',
           init : 'is-typing-init'
      };
   function showIndicator(){
      _typingIndicator.classList.add(indicatorState.init);
   }
   function activateIndicator(el){
      _typingIndicator.classList.add(indicatorState.active);
      inputValue = el.value;
      detectIdle(el);
   }
   var removeIndicator = function(){
      _typingIndicator.classList.remove(indicatorState.init, indicatorState.active);
   }
   function detectIdle(el){
      if (idleTimer) {
         clearInterval(idleTimer);
      }

      idleTimer = setTimeout(function(){
         if (getInputCurrentValue(el) === inputValue) {
            _typingIndicator.classList.remove(indicatorState.active);
      }
   }, idleTime);
   }
   function getInputCurrentValue(el){
      var currentValue = el.value;
      return currentValue;
   }

   document.getElementById("search_input").onkeyup = function(){
      var ajax_function = function(){
         var search_input = document.getElementById("search_input"),
         result_search_waiting = document.getElementById("result_search_waiting");
         result_search.style.display = "block";
         var text = search_input.value;
         dataload(text);
      };
      setTimeout(ajax_function, 1200);
      showIndicator();
      activateIndicator(this);
      setTimeout(removeIndicator, 1200);
   };
});
