"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/lower-case";
exports.ids = ["vendor-chunks/lower-case"];
exports.modules = {

/***/ "(ssr)/./node_modules/lower-case/dist.es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/lower-case/dist.es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   localeLowerCase: () => (/* binding */ localeLowerCase),\n/* harmony export */   lowerCase: () => (/* binding */ lowerCase)\n/* harmony export */ });\n/**\n * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt\n */ var SUPPORTED_LOCALE = {\n    tr: {\n        regexp: /\\u0130|\\u0049|\\u0049\\u0307/g,\n        map: {\n            İ: \"i\",\n            I: \"ı\",\n            İ: \"i\"\n        }\n    },\n    az: {\n        regexp: /\\u0130/g,\n        map: {\n            İ: \"i\",\n            I: \"ı\",\n            İ: \"i\"\n        }\n    },\n    lt: {\n        regexp: /\\u0049|\\u004A|\\u012E|\\u00CC|\\u00CD|\\u0128/g,\n        map: {\n            I: \"i̇\",\n            J: \"j̇\",\n            Į: \"į̇\",\n            Ì: \"i̇̀\",\n            Í: \"i̇́\",\n            Ĩ: \"i̇̃\"\n        }\n    }\n};\n/**\n * Localized lower case.\n */ function localeLowerCase(str, locale) {\n    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];\n    if (lang) return lowerCase(str.replace(lang.regexp, function(m) {\n        return lang.map[m];\n    }));\n    return lowerCase(str);\n}\n/**\n * Lower case as a function.\n */ function lowerCase(str) {\n    return str.toLowerCase();\n} //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbG93ZXItY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztDQUVDLEdBQ0QsSUFBSUEsbUJBQW1CO0lBQ25CQyxJQUFJO1FBQ0FDLFFBQVE7UUFDUkMsS0FBSztZQUNEQyxHQUFHO1lBQ0hDLEdBQUc7WUFDSEMsSUFBSTtRQUNSO0lBQ0o7SUFDQUMsSUFBSTtRQUNBTCxRQUFRO1FBQ1JDLEtBQUs7WUFDREMsR0FBRztZQUNIQyxHQUFHO1lBQ0hDLElBQUk7UUFDUjtJQUNKO0lBQ0FFLElBQUk7UUFDQU4sUUFBUTtRQUNSQyxLQUFLO1lBQ0RFLEdBQUc7WUFDSEksR0FBRztZQUNIQyxHQUFHO1lBQ0hDLEdBQUc7WUFDSEMsR0FBRztZQUNIQyxHQUFHO1FBQ1A7SUFDSjtBQUNKO0FBQ0E7O0NBRUMsR0FDTSxTQUFTQyxnQkFBZ0JDLEdBQUcsRUFBRUMsTUFBTTtJQUN2QyxJQUFJQyxPQUFPakIsZ0JBQWdCLENBQUNnQixPQUFPRSxXQUFXLEdBQUc7SUFDakQsSUFBSUQsTUFDQSxPQUFPRSxVQUFVSixJQUFJSyxPQUFPLENBQUNILEtBQUtmLE1BQU0sRUFBRSxTQUFVbUIsQ0FBQztRQUFJLE9BQU9KLEtBQUtkLEdBQUcsQ0FBQ2tCLEVBQUU7SUFBRTtJQUNqRixPQUFPRixVQUFVSjtBQUNyQjtBQUNBOztDQUVDLEdBQ00sU0FBU0ksVUFBVUosR0FBRztJQUN6QixPQUFPQSxJQUFJRyxXQUFXO0FBQzFCLEVBQ0EsaUNBQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvd2VyLWNhc2UvZGlzdC5lczIwMTUvaW5kZXguanM/OTA2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNvdXJjZTogZnRwOi8vZnRwLnVuaWNvZGUub3JnL1B1YmxpYy9VQ0QvbGF0ZXN0L3VjZC9TcGVjaWFsQ2FzaW5nLnR4dFxuICovXG52YXIgU1VQUE9SVEVEX0xPQ0FMRSA9IHtcbiAgICB0cjoge1xuICAgICAgICByZWdleHA6IC9cXHUwMTMwfFxcdTAwNDl8XFx1MDA0OVxcdTAzMDcvZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICDEsDogXCJcXHUwMDY5XCIsXG4gICAgICAgICAgICBJOiBcIlxcdTAxMzFcIixcbiAgICAgICAgICAgIEnMhzogXCJcXHUwMDY5XCIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBhejoge1xuICAgICAgICByZWdleHA6IC9cXHUwMTMwL2csXG4gICAgICAgIG1hcDoge1xuICAgICAgICAgICAgxLA6IFwiXFx1MDA2OVwiLFxuICAgICAgICAgICAgSTogXCJcXHUwMTMxXCIsXG4gICAgICAgICAgICBJzIc6IFwiXFx1MDA2OVwiLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbHQ6IHtcbiAgICAgICAgcmVnZXhwOiAvXFx1MDA0OXxcXHUwMDRBfFxcdTAxMkV8XFx1MDBDQ3xcXHUwMENEfFxcdTAxMjgvZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICBJOiBcIlxcdTAwNjlcXHUwMzA3XCIsXG4gICAgICAgICAgICBKOiBcIlxcdTAwNkFcXHUwMzA3XCIsXG4gICAgICAgICAgICDErjogXCJcXHUwMTJGXFx1MDMwN1wiLFxuICAgICAgICAgICAgw4w6IFwiXFx1MDA2OVxcdTAzMDdcXHUwMzAwXCIsXG4gICAgICAgICAgICDDjTogXCJcXHUwMDY5XFx1MDMwN1xcdTAzMDFcIixcbiAgICAgICAgICAgIMSoOiBcIlxcdTAwNjlcXHUwMzA3XFx1MDMwM1wiLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuLyoqXG4gKiBMb2NhbGl6ZWQgbG93ZXIgY2FzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZUxvd2VyQ2FzZShzdHIsIGxvY2FsZSkge1xuICAgIHZhciBsYW5nID0gU1VQUE9SVEVEX0xPQ0FMRVtsb2NhbGUudG9Mb3dlckNhc2UoKV07XG4gICAgaWYgKGxhbmcpXG4gICAgICAgIHJldHVybiBsb3dlckNhc2Uoc3RyLnJlcGxhY2UobGFuZy5yZWdleHAsIGZ1bmN0aW9uIChtKSB7IHJldHVybiBsYW5nLm1hcFttXTsgfSkpO1xuICAgIHJldHVybiBsb3dlckNhc2Uoc3RyKTtcbn1cbi8qKlxuICogTG93ZXIgY2FzZSBhcyBhIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG93ZXJDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6WyJTVVBQT1JURURfTE9DQUxFIiwidHIiLCJyZWdleHAiLCJtYXAiLCLEsCIsIkkiLCJJzIciLCJheiIsImx0IiwiSiIsIsSuIiwiw4wiLCLDjSIsIsSoIiwibG9jYWxlTG93ZXJDYXNlIiwic3RyIiwibG9jYWxlIiwibGFuZyIsInRvTG93ZXJDYXNlIiwibG93ZXJDYXNlIiwicmVwbGFjZSIsIm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/lower-case/dist.es2015/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/lower-case/dist.es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/lower-case/dist.es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   localeLowerCase: () => (/* binding */ localeLowerCase),\n/* harmony export */   lowerCase: () => (/* binding */ lowerCase)\n/* harmony export */ });\n/**\n * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt\n */ var SUPPORTED_LOCALE = {\n    tr: {\n        regexp: /\\u0130|\\u0049|\\u0049\\u0307/g,\n        map: {\n            İ: \"i\",\n            I: \"ı\",\n            İ: \"i\"\n        }\n    },\n    az: {\n        regexp: /\\u0130/g,\n        map: {\n            İ: \"i\",\n            I: \"ı\",\n            İ: \"i\"\n        }\n    },\n    lt: {\n        regexp: /\\u0049|\\u004A|\\u012E|\\u00CC|\\u00CD|\\u0128/g,\n        map: {\n            I: \"i̇\",\n            J: \"j̇\",\n            Į: \"į̇\",\n            Ì: \"i̇̀\",\n            Í: \"i̇́\",\n            Ĩ: \"i̇̃\"\n        }\n    }\n};\n/**\n * Localized lower case.\n */ function localeLowerCase(str, locale) {\n    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];\n    if (lang) return lowerCase(str.replace(lang.regexp, function(m) {\n        return lang.map[m];\n    }));\n    return lowerCase(str);\n}\n/**\n * Lower case as a function.\n */ function lowerCase(str) {\n    return str.toLowerCase();\n} //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbG93ZXItY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztDQUVDLEdBQ0QsSUFBSUEsbUJBQW1CO0lBQ25CQyxJQUFJO1FBQ0FDLFFBQVE7UUFDUkMsS0FBSztZQUNEQyxHQUFHO1lBQ0hDLEdBQUc7WUFDSEMsSUFBSTtRQUNSO0lBQ0o7SUFDQUMsSUFBSTtRQUNBTCxRQUFRO1FBQ1JDLEtBQUs7WUFDREMsR0FBRztZQUNIQyxHQUFHO1lBQ0hDLElBQUk7UUFDUjtJQUNKO0lBQ0FFLElBQUk7UUFDQU4sUUFBUTtRQUNSQyxLQUFLO1lBQ0RFLEdBQUc7WUFDSEksR0FBRztZQUNIQyxHQUFHO1lBQ0hDLEdBQUc7WUFDSEMsR0FBRztZQUNIQyxHQUFHO1FBQ1A7SUFDSjtBQUNKO0FBQ0E7O0NBRUMsR0FDTSxTQUFTQyxnQkFBZ0JDLEdBQUcsRUFBRUMsTUFBTTtJQUN2QyxJQUFJQyxPQUFPakIsZ0JBQWdCLENBQUNnQixPQUFPRSxXQUFXLEdBQUc7SUFDakQsSUFBSUQsTUFDQSxPQUFPRSxVQUFVSixJQUFJSyxPQUFPLENBQUNILEtBQUtmLE1BQU0sRUFBRSxTQUFVbUIsQ0FBQztRQUFJLE9BQU9KLEtBQUtkLEdBQUcsQ0FBQ2tCLEVBQUU7SUFBRTtJQUNqRixPQUFPRixVQUFVSjtBQUNyQjtBQUNBOztDQUVDLEdBQ00sU0FBU0ksVUFBVUosR0FBRztJQUN6QixPQUFPQSxJQUFJRyxXQUFXO0FBQzFCLEVBQ0EsaUNBQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvd2VyLWNhc2UvZGlzdC5lczIwMTUvaW5kZXguanM/OTA2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNvdXJjZTogZnRwOi8vZnRwLnVuaWNvZGUub3JnL1B1YmxpYy9VQ0QvbGF0ZXN0L3VjZC9TcGVjaWFsQ2FzaW5nLnR4dFxuICovXG52YXIgU1VQUE9SVEVEX0xPQ0FMRSA9IHtcbiAgICB0cjoge1xuICAgICAgICByZWdleHA6IC9cXHUwMTMwfFxcdTAwNDl8XFx1MDA0OVxcdTAzMDcvZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICDEsDogXCJcXHUwMDY5XCIsXG4gICAgICAgICAgICBJOiBcIlxcdTAxMzFcIixcbiAgICAgICAgICAgIEnMhzogXCJcXHUwMDY5XCIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBhejoge1xuICAgICAgICByZWdleHA6IC9cXHUwMTMwL2csXG4gICAgICAgIG1hcDoge1xuICAgICAgICAgICAgxLA6IFwiXFx1MDA2OVwiLFxuICAgICAgICAgICAgSTogXCJcXHUwMTMxXCIsXG4gICAgICAgICAgICBJzIc6IFwiXFx1MDA2OVwiLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbHQ6IHtcbiAgICAgICAgcmVnZXhwOiAvXFx1MDA0OXxcXHUwMDRBfFxcdTAxMkV8XFx1MDBDQ3xcXHUwMENEfFxcdTAxMjgvZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICBJOiBcIlxcdTAwNjlcXHUwMzA3XCIsXG4gICAgICAgICAgICBKOiBcIlxcdTAwNkFcXHUwMzA3XCIsXG4gICAgICAgICAgICDErjogXCJcXHUwMTJGXFx1MDMwN1wiLFxuICAgICAgICAgICAgw4w6IFwiXFx1MDA2OVxcdTAzMDdcXHUwMzAwXCIsXG4gICAgICAgICAgICDDjTogXCJcXHUwMDY5XFx1MDMwN1xcdTAzMDFcIixcbiAgICAgICAgICAgIMSoOiBcIlxcdTAwNjlcXHUwMzA3XFx1MDMwM1wiLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuLyoqXG4gKiBMb2NhbGl6ZWQgbG93ZXIgY2FzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZUxvd2VyQ2FzZShzdHIsIGxvY2FsZSkge1xuICAgIHZhciBsYW5nID0gU1VQUE9SVEVEX0xPQ0FMRVtsb2NhbGUudG9Mb3dlckNhc2UoKV07XG4gICAgaWYgKGxhbmcpXG4gICAgICAgIHJldHVybiBsb3dlckNhc2Uoc3RyLnJlcGxhY2UobGFuZy5yZWdleHAsIGZ1bmN0aW9uIChtKSB7IHJldHVybiBsYW5nLm1hcFttXTsgfSkpO1xuICAgIHJldHVybiBsb3dlckNhc2Uoc3RyKTtcbn1cbi8qKlxuICogTG93ZXIgY2FzZSBhcyBhIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG93ZXJDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6WyJTVVBQT1JURURfTE9DQUxFIiwidHIiLCJyZWdleHAiLCJtYXAiLCLEsCIsIkkiLCJJzIciLCJheiIsImx0IiwiSiIsIsSuIiwiw4wiLCLDjSIsIsSoIiwibG9jYWxlTG93ZXJDYXNlIiwic3RyIiwibG9jYWxlIiwibGFuZyIsInRvTG93ZXJDYXNlIiwibG93ZXJDYXNlIiwicmVwbGFjZSIsIm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/lower-case/dist.es2015/index.js\n");

/***/ })

};
;