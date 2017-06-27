/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Animals = __webpack_require__(6);

var UI = function() {
  var animals = new Animals();
  animals.all(function(allAnimals){
    this.render(allAnimals)  
  }.bind(this));
}

UI.prototype = {
  createText: function(text, label){
    var p = document.createElement("p");
    p.innerText = label+text;
    return p;
  },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },


  render: function(animals) {
    var container = document.getElementById("animals");
console.log (animals)
    for(var animal of animals) {
      var li = document.createElement("li");
      this.appendText(li, animal.name, "animal: ");
      this.appendText(li, animal.type, "type: ");

      container.appendChild(li);
    }
  }
}

module.exports = UI;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var UI = __webpack_require__(0);

var app = function(){
  new UI();
}

window.addEventListener('load', app);


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

var Animals = function() {

}

Animals.prototype = {
  makeRequest: function(url, OnRequestComplete) {
    var request = new XMLHttpRequest();

    request.open('GET', url);
    request.addEventListener('load', function(){
      if (request.status !== 200) return;
      var jsonString = request.responseText;
      var resultsData = JSON.parse(jsonString);
      OnRequestComplete(resultsData)
    })
    request.send();
  },

  all: function(onAnimalsReady){
    this.makeRequest('http://localhost:3000/api/animals', function (allAnimals){
      onAnimalsReady(allAnimals);
    })
  }
}

module.exports = Animals;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map