/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {



/***/ }),
/* 2 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map