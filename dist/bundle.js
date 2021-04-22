/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n\nvar addItemButton = document.querySelector('.add');\nvar titleOfForm = document.querySelector('#title');\nvar descriptionOfForm = document.querySelector('#description');\nvar container = document.querySelector('.todo');\n\nvar createListItem = function createListItem(obj) {\n  var itemWrapper = document.createElement('article');\n  itemWrapper.classList = 'item';\n  var item = document.createElement('li');\n  item.className = 'item__description';\n  item.innerHTML = \"\\n    <p class=\\\"item__title\\\">\".concat(obj.title, \"</p>\\n    <p class=\\\"item__desc\\\">\").concat(obj.description, \"</p>\\n  \");\n  itemWrapper.appendChild(item);\n  return itemWrapper;\n};\n\nvar createCompletedButton = function createCompletedButton() {\n  var completedButton = document.createElement('button');\n  completedButton.className = 'item__completed';\n  completedButton.textContent = 'Mark as Completed';\n  return completedButton;\n};\n\nvar createRemoveButton = function createRemoveButton() {\n  var removeButton = document.createElement('button');\n  removeButton.classList = 'item__remove';\n  removeButton.textContent = 'Remove';\n  return removeButton;\n};\n\nvar saveToLocalStorage = function saveToLocalStorage(toDoitem) {\n  var list;\n\n  if (localStorage.getItem('list') === null) {\n    list = [];\n  } else {\n    list = JSON.parse(localStorage.getItem('list'));\n  }\n\n  list.push(toDoitem);\n  localStorage.setItem('list', JSON.stringify(list));\n};\n\nvar removeFromLocalStorage = function removeFromLocalStorage(toDoItem) {\n  var list = JSON.parse(localStorage.getItem('list'));\n  var foundTitle = toDoItem.children[0].children[0].textContent;\n\n  for (var i = 0; i < list.length; i++) {\n    if (list[i].title === foundTitle) {\n      list.splice(i, 1);\n      i--;\n    }\n  }\n\n  localStorage.setItem('list', JSON.stringify(list));\n};\n\nvar doneOrUndoneTheTask = function doneOrUndoneTheTask(event) {\n  var item = event.target.parentNode;\n  var toDoItem = event.currentTarget.myParam;\n  var completedButton = event.target;\n  var removeButton = createRemoveButton();\n  var updatedList;\n\n  if (toDoItem.done === false) {\n    updatedList = document.getElementById('completed');\n    completedButton.textContent = 'Mark as Uncompleted';\n    item.insertBefore(removeButton, item.children[2]);\n    toDoItem.done = true;\n    removeFromLocalStorage(item);\n    saveToLocalStorage(toDoItem);\n  } else {\n    updatedList = document.getElementById('uncompleted');\n    completedButton.textContent = 'Mark as Completed';\n    item.children[2].remove();\n    toDoItem.done = false;\n    removeFromLocalStorage(item);\n    saveToLocalStorage(toDoItem);\n  }\n\n  item.remove();\n  updatedList.appendChild(item);\n  removeButton.addEventListener('click', function () {\n    item.remove();\n    removeFromLocalStorage(item);\n  });\n};\n\nvar renderFromLocalStorage = function renderFromLocalStorage() {\n  var list = JSON.parse(localStorage.getItem('list'));\n  list.forEach(function (element) {\n    var itemWrapper = createListItem(element);\n    var completedButton = createCompletedButton();\n    var removeButton = createRemoveButton();\n    itemWrapper.appendChild(completedButton);\n    var updatedList;\n\n    if (element.done === false) {\n      updatedList = document.getElementById('uncompleted');\n      completedButton.textContent = 'Mark as Completed';\n    } else {\n      updatedList = document.getElementById('completed');\n      completedButton.textContent = 'Mark as Uncompleted';\n      itemWrapper.appendChild(removeButton);\n    }\n\n    updatedList.appendChild(itemWrapper);\n    completedButton.addEventListener('click', doneOrUndoneTheTask, false);\n    completedButton.myParam = element;\n    removeButton.addEventListener('click', function () {\n      itemWrapper.remove();\n      removeFromLocalStorage(itemWrapper);\n    });\n  });\n};\n\naddItemButton.addEventListener('click', function (event) {\n  event.preventDefault();\n  var title = titleOfForm.value;\n  var description = descriptionOfForm.value;\n\n  if (title === '' || description === '') {\n    alert('please fill out all fields to save your note 📄🖋');\n    return;\n  }\n\n  var toDoItem = {\n    title: title,\n    description: description,\n    done: false\n  };\n  var itemWrapper = createListItem(toDoItem);\n  saveToLocalStorage(toDoItem);\n  var completedButton = createCompletedButton();\n  titleOfForm.value = '';\n  descriptionOfForm.value = '';\n  itemWrapper.appendChild(completedButton);\n  container.appendChild(itemWrapper);\n  completedButton.addEventListener('click', doneOrUndoneTheTask, false);\n  completedButton.myParam = toDoItem;\n});\nwindow.addEventListener('load', function () {\n  renderFromLocalStorage();\n});\n\n//# sourceURL=webpack://todoJS/./src/javascript/index.js?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todoJS/./src/sass/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/javascript/index.js");
/******/ 	
/******/ })()
;