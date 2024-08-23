"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/messages/[messageId]/update/route";
exports.ids = ["app/api/messages/[messageId]/update/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessages%2F%5BmessageId%5D%2Fupdate%2Froute&page=%2Fapi%2Fmessages%2F%5BmessageId%5D%2Fupdate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2F%5BmessageId%5D%2Fupdate%2Froute.js&appDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Cchatapp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Cchatapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessages%2F%5BmessageId%5D%2Fupdate%2Froute&page=%2Fapi%2Fmessages%2F%5BmessageId%5D%2Fupdate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2F%5BmessageId%5D%2Fupdate%2Froute.js&appDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Cchatapp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Cchatapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_shahzaib_Desktop_chatapp_app_api_messages_messageId_update_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/messages/[messageId]/update/route.js */ \"(rsc)/./app/api/messages/[messageId]/update/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/messages/[messageId]/update/route\",\n        pathname: \"/api/messages/[messageId]/update\",\n        filename: \"route\",\n        bundlePath: \"app/api/messages/[messageId]/update/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\shahzaib\\\\Desktop\\\\chatapp\\\\app\\\\api\\\\messages\\\\[messageId]\\\\update\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_shahzaib_Desktop_chatapp_app_api_messages_messageId_update_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/messages/[messageId]/update/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZtZXNzYWdlcyUyRiU1Qm1lc3NhZ2VJZCU1RCUyRnVwZGF0ZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbWVzc2FnZXMlMkYlNUJtZXNzYWdlSWQlNUQlMkZ1cGRhdGUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZtZXNzYWdlcyUyRiU1Qm1lc3NhZ2VJZCU1RCUyRnVwZGF0ZSUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNzaGFoemFpYiU1Q0Rlc2t0b3AlNUNjaGF0YXBwJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNzaGFoemFpYiU1Q0Rlc2t0b3AlNUNjaGF0YXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUN3QztBQUNySDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRhcHAvP2YwODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcc2hhaHphaWJcXFxcRGVza3RvcFxcXFxjaGF0YXBwXFxcXGFwcFxcXFxhcGlcXFxcbWVzc2FnZXNcXFxcW21lc3NhZ2VJZF1cXFxcdXBkYXRlXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9tZXNzYWdlcy9bbWVzc2FnZUlkXS91cGRhdGUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9tZXNzYWdlcy9bbWVzc2FnZUlkXS91cGRhdGVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL21lc3NhZ2VzL1ttZXNzYWdlSWRdL3VwZGF0ZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXHNoYWh6YWliXFxcXERlc2t0b3BcXFxcY2hhdGFwcFxcXFxhcHBcXFxcYXBpXFxcXG1lc3NhZ2VzXFxcXFttZXNzYWdlSWRdXFxcXHVwZGF0ZVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvbWVzc2FnZXMvW21lc3NhZ2VJZF0vdXBkYXRlL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessages%2F%5BmessageId%5D%2Fupdate%2Froute&page=%2Fapi%2Fmessages%2F%5BmessageId%5D%2Fupdate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2F%5BmessageId%5D%2Fupdate%2Froute.js&appDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Cchatapp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Cchatapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/messages/[messageId]/update/route.js":
/*!******************************************************!*\
  !*** ./app/api/messages/[messageId]/update/route.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_pusher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/pusher */ \"(rsc)/./lib/pusher.js\");\n/* harmony import */ var _models_Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/Message */ \"(rsc)/./models/Message.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/User */ \"(rsc)/./models/User.js\");\n/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mongodb */ \"(rsc)/./mongodb/index.js\");\n\n\n\n\nconst POST = async (req, { params })=>{\n    try {\n        const body = await req.json();\n        const { emoji, senderId, chatId } = body;\n        const { messageId } = params;\n        await (0,_mongodb__WEBPACK_IMPORTED_MODULE_3__.ConnectToDB)();\n        let message = await _models_Message__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(messageId);\n        // Check if the message exists\n        if (!message) {\n            return new Response(\"Message not found\", {\n                status: 404\n            });\n        }\n        // Find the existing reaction by the senderId\n        const existingReaction = message.reaction.find((r)=>r.senderId.toString() === senderId);\n        if (existingReaction) {\n            // If a reaction from this sender already exists, update the emoji\n            existingReaction.emoji = emoji;\n        } else {\n            // If no reaction exists from this sender, add a new one\n            message.reaction.push({\n                senderId,\n                emoji\n            });\n        }\n        // Save the updated message\n        await message.save();\n        // Re-fetch and populate the message to ensure the reaction is populated\n        message = await _models_Message__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(messageId).populate([\n            {\n                path: \"sender seenBy\",\n                model: _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n            },\n            {\n                path: \"reaction.senderId\",\n                model: _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n            }\n        ]);\n        // Trigger the Pusher event with the updated message document\n        await _lib_pusher__WEBPACK_IMPORTED_MODULE_0__.pusherServer.trigger(chatId, \"add-reaction\", {\n            id: messageId,\n            message\n        });\n        return new Response(JSON.stringify(message), {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error adding reaction:\", error);\n        return new Response(\"Failed to add reaction\", {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL21lc3NhZ2VzL1ttZXNzYWdlSWRdL3VwZGF0ZS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNMO0FBQ047QUFDTztBQUVoQyxNQUFNSSxPQUFPLE9BQU9DLEtBQUssRUFBRUMsTUFBTSxFQUFFO0lBQ3hDLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1GLElBQUlHLElBQUk7UUFDM0IsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFLEdBQUdKO1FBQ3BDLE1BQU0sRUFBRUssU0FBUyxFQUFFLEdBQUdOO1FBRXRCLE1BQU1ILHFEQUFXQTtRQUVqQixJQUFJVSxVQUFVLE1BQU1aLHVEQUFPQSxDQUFDYSxRQUFRLENBQUNGO1FBRXJDLDhCQUE4QjtRQUM5QixJQUFJLENBQUNDLFNBQVM7WUFDWixPQUFPLElBQUlFLFNBQVMscUJBQXFCO2dCQUFFQyxRQUFRO1lBQUk7UUFDekQ7UUFFQSw2Q0FBNkM7UUFDN0MsTUFBTUMsbUJBQW1CSixRQUFRSyxRQUFRLENBQUNDLElBQUksQ0FDNUMsQ0FBQ0MsSUFBTUEsRUFBRVYsUUFBUSxDQUFDVyxRQUFRLE9BQU9YO1FBR25DLElBQUlPLGtCQUFrQjtZQUNwQixrRUFBa0U7WUFDbEVBLGlCQUFpQlIsS0FBSyxHQUFHQTtRQUMzQixPQUFPO1lBQ0wsd0RBQXdEO1lBQ3hESSxRQUFRSyxRQUFRLENBQUNJLElBQUksQ0FBQztnQkFBRVo7Z0JBQVVEO1lBQU07UUFDMUM7UUFFQSwyQkFBMkI7UUFDM0IsTUFBTUksUUFBUVUsSUFBSTtRQUVsQix3RUFBd0U7UUFDeEVWLFVBQVUsTUFBTVosdURBQU9BLENBQUNhLFFBQVEsQ0FBQ0YsV0FBV1ksUUFBUSxDQUFDO1lBQ25EO2dCQUNFQyxNQUFNO2dCQUNOQyxPQUFPeEIsb0RBQUlBO1lBQ2I7WUFDQTtnQkFDRXVCLE1BQU07Z0JBQ05DLE9BQU94QixvREFBSUE7WUFDYjtTQUNEO1FBRUQsNkRBQTZEO1FBQzdELE1BQU1GLHFEQUFZQSxDQUFDMkIsT0FBTyxDQUFDaEIsUUFBUSxnQkFBZ0I7WUFDakRpQixJQUFJaEI7WUFDSkM7UUFDRjtRQUVBLE9BQU8sSUFBSUUsU0FBU2MsS0FBS0MsU0FBUyxDQUFDakIsVUFBVTtZQUFFRyxRQUFRO1FBQUk7SUFDN0QsRUFBRSxPQUFPZSxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1FBQ3hDLE9BQU8sSUFBSWhCLFNBQVMsMEJBQTBCO1lBQUVDLFFBQVE7UUFBSTtJQUM5RDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0YXBwLy4vYXBwL2FwaS9tZXNzYWdlcy9bbWVzc2FnZUlkXS91cGRhdGUvcm91dGUuanM/ODE3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdXNoZXJTZXJ2ZXIgfSBmcm9tIFwiQGxpYi9wdXNoZXJcIjtcclxuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIkBtb2RlbHMvTWVzc2FnZVwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiQG1vZGVscy9Vc2VyXCI7XHJcbmltcG9ydCB7IENvbm5lY3RUb0RCIH0gZnJvbSBcIkBtb25nb2RiXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUE9TVCA9IGFzeW5jIChyZXEsIHsgcGFyYW1zIH0pID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICBjb25zdCB7IGVtb2ppLCBzZW5kZXJJZCwgY2hhdElkIH0gPSBib2R5O1xyXG4gICAgY29uc3QgeyBtZXNzYWdlSWQgfSA9IHBhcmFtcztcclxuXHJcbiAgICBhd2FpdCBDb25uZWN0VG9EQigpO1xyXG5cclxuICAgIGxldCBtZXNzYWdlID0gYXdhaXQgTWVzc2FnZS5maW5kQnlJZChtZXNzYWdlSWQpO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSBtZXNzYWdlIGV4aXN0c1xyXG4gICAgaWYgKCFtZXNzYWdlKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXCJNZXNzYWdlIG5vdCBmb3VuZFwiLCB7IHN0YXR1czogNDA0IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIGV4aXN0aW5nIHJlYWN0aW9uIGJ5IHRoZSBzZW5kZXJJZFxyXG4gICAgY29uc3QgZXhpc3RpbmdSZWFjdGlvbiA9IG1lc3NhZ2UucmVhY3Rpb24uZmluZChcclxuICAgICAgKHIpID0+IHIuc2VuZGVySWQudG9TdHJpbmcoKSA9PT0gc2VuZGVySWRcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nUmVhY3Rpb24pIHtcclxuICAgICAgLy8gSWYgYSByZWFjdGlvbiBmcm9tIHRoaXMgc2VuZGVyIGFscmVhZHkgZXhpc3RzLCB1cGRhdGUgdGhlIGVtb2ppXHJcbiAgICAgIGV4aXN0aW5nUmVhY3Rpb24uZW1vamkgPSBlbW9qaTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIElmIG5vIHJlYWN0aW9uIGV4aXN0cyBmcm9tIHRoaXMgc2VuZGVyLCBhZGQgYSBuZXcgb25lXHJcbiAgICAgIG1lc3NhZ2UucmVhY3Rpb24ucHVzaCh7IHNlbmRlcklkLCBlbW9qaSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTYXZlIHRoZSB1cGRhdGVkIG1lc3NhZ2VcclxuICAgIGF3YWl0IG1lc3NhZ2Uuc2F2ZSgpO1xyXG5cclxuICAgIC8vIFJlLWZldGNoIGFuZCBwb3B1bGF0ZSB0aGUgbWVzc2FnZSB0byBlbnN1cmUgdGhlIHJlYWN0aW9uIGlzIHBvcHVsYXRlZFxyXG4gICAgbWVzc2FnZSA9IGF3YWl0IE1lc3NhZ2UuZmluZEJ5SWQobWVzc2FnZUlkKS5wb3B1bGF0ZShbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBcInNlbmRlciBzZWVuQnlcIixcclxuICAgICAgICBtb2RlbDogVXNlcixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IFwicmVhY3Rpb24uc2VuZGVySWRcIixcclxuICAgICAgICBtb2RlbDogVXNlcixcclxuICAgICAgfSxcclxuICAgIF0pO1xyXG5cclxuICAgIC8vIFRyaWdnZXIgdGhlIFB1c2hlciBldmVudCB3aXRoIHRoZSB1cGRhdGVkIG1lc3NhZ2UgZG9jdW1lbnRcclxuICAgIGF3YWl0IHB1c2hlclNlcnZlci50cmlnZ2VyKGNoYXRJZCwgXCJhZGQtcmVhY3Rpb25cIiwge1xyXG4gICAgICBpZDogbWVzc2FnZUlkLFxyXG4gICAgICBtZXNzYWdlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgeyBzdGF0dXM6IDIwMCB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyByZWFjdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIkZhaWxlZCB0byBhZGQgcmVhY3Rpb25cIiwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJwdXNoZXJTZXJ2ZXIiLCJNZXNzYWdlIiwiVXNlciIsIkNvbm5lY3RUb0RCIiwiUE9TVCIsInJlcSIsInBhcmFtcyIsImJvZHkiLCJqc29uIiwiZW1vamkiLCJzZW5kZXJJZCIsImNoYXRJZCIsIm1lc3NhZ2VJZCIsIm1lc3NhZ2UiLCJmaW5kQnlJZCIsIlJlc3BvbnNlIiwic3RhdHVzIiwiZXhpc3RpbmdSZWFjdGlvbiIsInJlYWN0aW9uIiwiZmluZCIsInIiLCJ0b1N0cmluZyIsInB1c2giLCJzYXZlIiwicG9wdWxhdGUiLCJwYXRoIiwibW9kZWwiLCJ0cmlnZ2VyIiwiaWQiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/messages/[messageId]/update/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/pusher.js":
/*!***********************!*\
  !*** ./lib/pusher.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pusherClient: () => (/* binding */ pusherClient),\n/* harmony export */   pusherServer: () => (/* binding */ pusherServer)\n/* harmony export */ });\n/* harmony import */ var pusher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pusher */ \"(rsc)/./node_modules/pusher/lib/pusher.js\");\n/* harmony import */ var pusher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pusher__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pusher-js */ \"(rsc)/./node_modules/pusher-js/dist/node/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst pusherServer = new (pusher__WEBPACK_IMPORTED_MODULE_0___default())({\n    appId: process.env.PUSHER_APP_ID,\n    key: \"0085e18e598aa0a21a04\",\n    secret: process.env.PUSHER_SECRET,\n    cluster: \"ap2\",\n    useTLS: true\n});\nconst pusherClient = new (pusher_js__WEBPACK_IMPORTED_MODULE_1___default())(\"0085e18e598aa0a21a04\", {\n    cluster: \"ap2\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHVzaGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrQztBQUNHO0FBRTlCLE1BQU1FLGVBQWUsSUFBSUYsK0NBQVlBLENBQUM7SUFDM0NHLE9BQU9DLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtJQUNoQ0MsS0FBS0gsc0JBQWtDO0lBQ3ZDSyxRQUFRTCxRQUFRQyxHQUFHLENBQUNLLGFBQWE7SUFDakNDLFNBQVM7SUFDVEMsUUFBUTtBQUNWLEdBQUc7QUFFSSxNQUFNQyxlQUFlLElBQUlaLGtEQUFZQSxDQUMxQ0csc0JBQWtDLEVBQ2xDO0lBQ0VPLFNBQVM7QUFDWCxHQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdGFwcC8uL2xpYi9wdXNoZXIuanM/MGFkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHVzaGVyU2VydmVyIGZyb20gXCJwdXNoZXJcIjtcclxuaW1wb3J0IFB1c2hlckNsaWVudCBmcm9tIFwicHVzaGVyLWpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcHVzaGVyU2VydmVyID0gbmV3IFB1c2hlclNlcnZlcih7XHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52LlBVU0hFUl9BUFBfSUQsXHJcbiAga2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QVVNIRVJfS0VZLFxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuUFVTSEVSX1NFQ1JFVCxcclxuICBjbHVzdGVyOiBcImFwMlwiLFxyXG4gIHVzZVRMUzogdHJ1ZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcHVzaGVyQ2xpZW50ID0gbmV3IFB1c2hlckNsaWVudChcclxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QVVNIRVJfS0VZLFxyXG4gIHtcclxuICAgIGNsdXN0ZXI6IFwiYXAyXCIsXHJcbiAgfVxyXG4pO1xyXG4iXSwibmFtZXMiOlsiUHVzaGVyU2VydmVyIiwiUHVzaGVyQ2xpZW50IiwicHVzaGVyU2VydmVyIiwiYXBwSWQiLCJwcm9jZXNzIiwiZW52IiwiUFVTSEVSX0FQUF9JRCIsImtleSIsIk5FWFRfUFVCTElDX1BVU0hFUl9LRVkiLCJzZWNyZXQiLCJQVVNIRVJfU0VDUkVUIiwiY2x1c3RlciIsInVzZVRMUyIsInB1c2hlckNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/pusher.js\n");

/***/ }),

/***/ "(rsc)/./models/Message.js":
/*!***************************!*\
  !*** ./models/Message.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst messageSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    chat: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n        ref: \"Chat\"\n    },\n    sender: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n        ref: \"User\"\n    },\n    text: {\n        type: String,\n        default: \"\"\n    },\n    photo: {\n        type: String,\n        default: \"\"\n    },\n    reaction: [\n        {\n            senderId: {\n                type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n                ref: \"User\"\n            },\n            emoji: {\n                type: String,\n                default: \"\"\n            }\n        }\n    ],\n    seenBy: {\n        type: [\n            {\n                type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n                ref: \"User\"\n            }\n        ]\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nconst Message = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Message || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Message\", messageSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvTWVzc2FnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsZ0JBQWdCLElBQUlELHdEQUFlLENBQUM7SUFDeENHLE1BQU07UUFBRUMsTUFBTUosd0RBQWUsQ0FBQ0ssS0FBSyxDQUFDQyxRQUFRO1FBQUVDLEtBQUs7SUFBTztJQUMxREMsUUFBUTtRQUFFSixNQUFNSix3REFBZSxDQUFDSyxLQUFLLENBQUNDLFFBQVE7UUFBRUMsS0FBSztJQUFPO0lBQzVERSxNQUFNO1FBQUVMLE1BQU1NO1FBQVFDLFNBQVM7SUFBRztJQUNsQ0MsT0FBTztRQUFFUixNQUFNTTtRQUFRQyxTQUFTO0lBQUc7SUFDbkNFLFVBQVU7UUFDUjtZQUNFQyxVQUFVO2dCQUFFVixNQUFNSix3REFBZSxDQUFDSyxLQUFLLENBQUNDLFFBQVE7Z0JBQUVDLEtBQUs7WUFBTztZQUM5RFEsT0FBTztnQkFBRVgsTUFBTU07Z0JBQVFDLFNBQVM7WUFBRztRQUNyQztLQUNEO0lBQ0RLLFFBQVE7UUFBRVosTUFBTTtZQUFDO2dCQUFFQSxNQUFNSix3REFBZSxDQUFDSyxLQUFLLENBQUNDLFFBQVE7Z0JBQUVDLEtBQUs7WUFBTztTQUFFO0lBQUM7SUFDeEVVLFdBQVc7UUFBRWIsTUFBTWM7UUFBTVAsU0FBU08sS0FBS0MsR0FBRztJQUFDO0FBQzdDO0FBQ0EsTUFBTUMsVUFDSnBCLHdEQUFlLENBQUNvQixPQUFPLElBQUlwQixxREFBYyxDQUFDLFdBQVdDO0FBQ3ZELGlFQUFlbUIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRhcHAvLi9tb2RlbHMvTWVzc2FnZS5qcz8xN2EyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IG1lc3NhZ2VTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBjaGF0OiB7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiBcIkNoYXRcIiB9LFxyXG4gIHNlbmRlcjogeyB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogXCJVc2VyXCIgfSxcclxuICB0ZXh0OiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LFxyXG4gIHBob3RvOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LFxyXG4gIHJlYWN0aW9uOiBbXHJcbiAgICB7XHJcbiAgICAgIHNlbmRlcklkOiB7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiBcIlVzZXJcIiB9LFxyXG4gICAgICBlbW9qaTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBzZWVuQnk6IHsgdHlwZTogW3sgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6IFwiVXNlclwiIH1dIH0sXHJcbiAgY3JlYXRlZEF0OiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93IH0sXHJcbn0pO1xyXG5jb25zdCBNZXNzYWdlID1cclxuICBtb25nb29zZS5tb2RlbHMuTWVzc2FnZSB8fCBtb25nb29zZS5tb2RlbChcIk1lc3NhZ2VcIiwgbWVzc2FnZVNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm1lc3NhZ2VTY2hlbWEiLCJTY2hlbWEiLCJjaGF0IiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJzZW5kZXIiLCJ0ZXh0IiwiU3RyaW5nIiwiZGVmYXVsdCIsInBob3RvIiwicmVhY3Rpb24iLCJzZW5kZXJJZCIsImVtb2ppIiwic2VlbkJ5IiwiY3JlYXRlZEF0IiwiRGF0ZSIsIm5vdyIsIk1lc3NhZ2UiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/Message.js\n");

/***/ }),

/***/ "(rsc)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    profileImage: {\n        type: String,\n        default: \"\"\n    },\n    phone: {\n        type: String,\n        default: \"\"\n    },\n    bio: {\n        type: String,\n        default: \"Hey there! i'm using this Chat App.\"\n    },\n    lastSeen: {\n        type: Date,\n        default: Date.now\n    },\n    chats: {\n        type: [\n            {\n                type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n                ref: \"Chat\"\n            }\n        ]\n    }\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxVQUFVO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN6Q0MsT0FBTztRQUFFSCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDdENFLFVBQVU7UUFDUkosTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FHLGNBQWM7UUFDWkwsTUFBTUM7UUFDTkssU0FBUztJQUNYO0lBQ0FDLE9BQU87UUFDTFAsTUFBTUM7UUFDTkssU0FBUztJQUNYO0lBQ0FFLEtBQUs7UUFDSFIsTUFBTUM7UUFDTkssU0FBUztJQUNYO0lBQ0FHLFVBQVU7UUFBRVQsTUFBTVU7UUFBTUosU0FBU0ksS0FBS0MsR0FBRztJQUFDO0lBRTFDQyxPQUFPO1FBQUVaLE1BQU07WUFBQztnQkFBRUEsTUFBTUosd0RBQWUsQ0FBQ2lCLEtBQUssQ0FBQ0MsUUFBUTtnQkFBRUMsS0FBSztZQUFPO1NBQUU7SUFBQztBQUN6RTtBQUVBLE1BQU1DLE9BQU9wQix3REFBZSxDQUFDb0IsSUFBSSxJQUFJcEIscURBQWMsQ0FBQyxRQUFRQztBQUU1RCxpRUFBZW1CLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0YXBwLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgdXNlcm5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICBwYXNzd29yZDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBwcm9maWxlSW1hZ2U6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGRlZmF1bHQ6IFwiXCIsXHJcbiAgfSxcclxuICBwaG9uZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdDogXCJcIixcclxuICB9LFxyXG4gIGJpbzoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdDogXCJIZXkgdGhlcmUhIGknbSB1c2luZyB0aGlzIENoYXQgQXBwLlwiLFxyXG4gIH0sXHJcbiAgbGFzdFNlZW46IHsgdHlwZTogRGF0ZSwgZGVmYXVsdDogRGF0ZS5ub3cgfSxcclxuXHJcbiAgY2hhdHM6IHsgdHlwZTogW3sgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6IFwiQ2hhdFwiIH1dIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCB1c2VyU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwicGFzc3dvcmQiLCJwcm9maWxlSW1hZ2UiLCJkZWZhdWx0IiwicGhvbmUiLCJiaW8iLCJsYXN0U2VlbiIsIkRhdGUiLCJub3ciLCJjaGF0cyIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJVc2VyIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/User.js\n");

/***/ }),

/***/ "(rsc)/./mongodb/index.js":
/*!**************************!*\
  !*** ./mongodb/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConnectToDB: () => (/* binding */ ConnectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false;\nconst ConnectToDB = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    if (isConnected) {\n        console.log(\"MongoDB is already Connected\");\n    }\n    try {\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODBURL);\n        isConnected = true;\n        console.log(\"MongoDB is connected!\");\n    } catch (error) {\n        console.log(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb25nb2RiL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxJQUFJQyxjQUFjO0FBRVgsTUFBTUMsY0FBYztJQUN6QkYsbURBQVksQ0FBQyxlQUFlO0lBRTVCLElBQUlDLGFBQWE7UUFDZkcsUUFBUUMsR0FBRyxDQUFDO0lBQ2Q7SUFFQSxJQUFJO1FBQ0ZMLHVEQUFnQixDQUFDTyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFFdkNSLGNBQWM7UUFFZEcsUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPSyxPQUFPO1FBQ2ROLFFBQVFDLEdBQUcsQ0FBQ0s7SUFDZDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0YXBwLy4vbW9uZ29kYi9pbmRleC5qcz8zMjAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmxldCBpc0Nvbm5lY3RlZCA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbm5lY3RUb0RCID0gYXN5bmMgKCkgPT4ge1xyXG4gIG1vbmdvb3NlLnNldChcInN0cmljdFF1ZXJ5XCIsIHRydWUpO1xyXG5cclxuICBpZiAoaXNDb25uZWN0ZWQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTW9uZ29EQiBpcyBhbHJlYWR5IENvbm5lY3RlZFwiKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJVUkwpO1xyXG5cclxuICAgIGlzQ29ubmVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIk1vbmdvREIgaXMgY29ubmVjdGVkIVwiKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiaXNDb25uZWN0ZWQiLCJDb25uZWN0VG9EQiIsInNldCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJVUkwiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./mongodb/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/node-fetch","vendor-chunks/pusher-js","vendor-chunks/tweetnacl","vendor-chunks/pusher","vendor-chunks/event-target-shim","vendor-chunks/abort-controller","vendor-chunks/tweetnacl-util","vendor-chunks/is-base64"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessages%2F%5BmessageId%5D%2Fupdate%2Froute&page=%2Fapi%2Fmessages%2F%5BmessageId%5D%2Fupdate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2F%5BmessageId%5D%2Fupdate%2Froute.js&appDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Cchatapp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Cchatapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();