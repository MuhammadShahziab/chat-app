/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-base64";
exports.ids = ["vendor-chunks/is-base64"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-base64/is-base64.js":
/*!*********************************************!*\
  !*** ./node_modules/is-base64/is-base64.js ***!
  \*********************************************/
/***/ (function(module, exports) {

eval(";(function(root) {\n  'use strict';\n\n  function isBase64(v, opts) {\n    if (v instanceof Boolean || typeof v === 'boolean') {\n      return false\n    }\n\n    if (!(opts instanceof Object)) {\n      opts = {}\n    }\n\n    if (opts.allowEmpty === false && v === '') {\n      return false\n    }\n\n    var regex = '(?:[A-Za-z0-9+\\\\/]{4})*(?:[A-Za-z0-9+\\\\/]{2}==|[A-Za-z0-9+\\/]{3}=)?'\n    var mimeRegex = '(data:\\\\w+\\\\/[a-zA-Z\\\\+\\\\-\\\\.]+;base64,)'\n\n    if (opts.mimeRequired === true) {\n      regex =  mimeRegex + regex\n    } else if (opts.allowMime === true) {\n      regex = mimeRegex + '?' + regex\n    }\n\n    if (opts.paddingRequired === false) {\n      regex = '(?:[A-Za-z0-9+\\\\/]{4})*(?:[A-Za-z0-9+\\\\/]{2}(==)?|[A-Za-z0-9+\\\\/]{3}=?)?'\n    }\n\n    return (new RegExp('^' + regex + '$', 'gi')).test(v)\n  }\n\n  if (true) {\n    if ( true && module.exports) {\n      exports = module.exports = isBase64\n    }\n    exports.isBase64 = isBase64\n  } else {}\n})(this);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtYmFzZTY0L2lzLWJhc2U2NC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0MsRUFBRSxxQkFBcUIsRUFBRSxrQkFBa0IsRUFBRTtBQUNqRixxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFO0FBQ25GOztBQUVBO0FBQ0E7O0FBRUEsTUFBTSxJQUE4QjtBQUNwQyxRQUFRLEtBQTZCO0FBQ3JDO0FBQ0E7QUFDQSxJQUFJLGdCQUFnQjtBQUNwQixJQUFJLEtBQUssRUFNTjtBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0YXBwLy4vbm9kZV9tb2R1bGVzL2lzLWJhc2U2NC9pcy1iYXNlNjQuanM/M2U5MSJdLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uKHJvb3QpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIGlzQmFzZTY0KHYsIG9wdHMpIHtcbiAgICBpZiAodiBpbnN0YW5jZW9mIEJvb2xlYW4gfHwgdHlwZW9mIHYgPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0cyBpbnN0YW5jZW9mIE9iamVjdCkpIHtcbiAgICAgIG9wdHMgPSB7fVxuICAgIH1cblxuICAgIGlmIChvcHRzLmFsbG93RW1wdHkgPT09IGZhbHNlICYmIHYgPT09ICcnKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB2YXIgcmVnZXggPSAnKD86W0EtWmEtejAtOStcXFxcL117NH0pKig/OltBLVphLXowLTkrXFxcXC9dezJ9PT18W0EtWmEtejAtOStcXC9dezN9PSk/J1xuICAgIHZhciBtaW1lUmVnZXggPSAnKGRhdGE6XFxcXHcrXFxcXC9bYS16QS1aXFxcXCtcXFxcLVxcXFwuXSs7YmFzZTY0LCknXG5cbiAgICBpZiAob3B0cy5taW1lUmVxdWlyZWQgPT09IHRydWUpIHtcbiAgICAgIHJlZ2V4ID0gIG1pbWVSZWdleCArIHJlZ2V4XG4gICAgfSBlbHNlIGlmIChvcHRzLmFsbG93TWltZSA9PT0gdHJ1ZSkge1xuICAgICAgcmVnZXggPSBtaW1lUmVnZXggKyAnPycgKyByZWdleFxuICAgIH1cblxuICAgIGlmIChvcHRzLnBhZGRpbmdSZXF1aXJlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHJlZ2V4ID0gJyg/OltBLVphLXowLTkrXFxcXC9dezR9KSooPzpbQS1aYS16MC05K1xcXFwvXXsyfSg9PSk/fFtBLVphLXowLTkrXFxcXC9dezN9PT8pPydcbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBSZWdFeHAoJ14nICsgcmVnZXggKyAnJCcsICdnaScpKS50ZXN0KHYpXG4gIH1cblxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBpc0Jhc2U2NFxuICAgIH1cbiAgICBleHBvcnRzLmlzQmFzZTY0ID0gaXNCYXNlNjRcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGlzQmFzZTY0XG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICByb290LmlzQmFzZTY0ID0gaXNCYXNlNjRcbiAgfVxufSkodGhpcyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-base64/is-base64.js\n");

/***/ })

};
;