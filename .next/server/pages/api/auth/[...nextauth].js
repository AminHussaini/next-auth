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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/facebook":
/*!***********************************************!*\
  !*** external "next-auth/providers/facebook" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/facebook");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "../../../api-utils/node":
/*!*****************************************************!*\
  !*** external "next/dist/server/api-utils/node.js" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ "../route-module":
/*!************************************************************************!*\
  !*** external "next/dist/server/future/route-modules/route-module.js" ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/**\n * Hoists a name from a module or promised module.\n *\n * @param module the module to hoist the name from\n * @param name the name to hoist\n * @returns the value on the module (or promised module)\n */ \nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"hoist\", ({\n    enumerable: true,\n    get: function() {\n        return hoist;\n    }\n}));\nfunction hoist(module, name) {\n    // If the name is available in the module, return it.\n    if (name in module) {\n        return module[name];\n    }\n    // If a property called `then` exists, assume it's a promise and\n    // return a promise that resolves to the name.\n    if (\"then\" in module && typeof module.then === \"function\") {\n        return module.then((mod)=>hoist(mod, name));\n    }\n    // If we're trying to hoise the default export, and the module is a function,\n    // return the module itself.\n    if (typeof module === \"function\" && name === \"default\") {\n        return module;\n    }\n    // Otherwise, return undefined.\n    return undefined;\n}\n\n//# sourceMappingURL=helpers.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9oZWxwZXJzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQWlCO0FBQ2pCLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2hlbHBlcnMuanM/MGUyOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEhvaXN0cyBhIG5hbWUgZnJvbSBhIG1vZHVsZSBvciBwcm9taXNlZCBtb2R1bGUuXG4gKlxuICogQHBhcmFtIG1vZHVsZSB0aGUgbW9kdWxlIHRvIGhvaXN0IHRoZSBuYW1lIGZyb21cbiAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIHRvIGhvaXN0XG4gKiBAcmV0dXJucyB0aGUgdmFsdWUgb24gdGhlIG1vZHVsZSAob3IgcHJvbWlzZWQgbW9kdWxlKVxuICovIFwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaG9pc3RcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGhvaXN0O1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gaG9pc3QobW9kdWxlLCBuYW1lKSB7XG4gICAgLy8gSWYgdGhlIG5hbWUgaXMgYXZhaWxhYmxlIGluIHRoZSBtb2R1bGUsIHJldHVybiBpdC5cbiAgICBpZiAobmFtZSBpbiBtb2R1bGUpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZVtuYW1lXTtcbiAgICB9XG4gICAgLy8gSWYgYSBwcm9wZXJ0eSBjYWxsZWQgYHRoZW5gIGV4aXN0cywgYXNzdW1lIGl0J3MgYSBwcm9taXNlIGFuZFxuICAgIC8vIHJldHVybiBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbmFtZS5cbiAgICBpZiAoXCJ0aGVuXCIgaW4gbW9kdWxlICYmIHR5cGVvZiBtb2R1bGUudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBtb2R1bGUudGhlbigobW9kKT0+aG9pc3QobW9kLCBuYW1lKSk7XG4gICAgfVxuICAgIC8vIElmIHdlJ3JlIHRyeWluZyB0byBob2lzZSB0aGUgZGVmYXVsdCBleHBvcnQsIGFuZCB0aGUgbW9kdWxlIGlzIGEgZnVuY3Rpb24sXG4gICAgLy8gcmV0dXJuIHRoZSBtb2R1bGUgaXRzZWxmLlxuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSBcImZ1bmN0aW9uXCIgJiYgbmFtZSA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCByZXR1cm4gdW5kZWZpbmVkLlxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlbHBlcnMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cauth%5C%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cauth%5C%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-route-loader/helpers */ \"(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\");\n/* harmony import */ var _src_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src\\pages\\api\\auth\\[...nextauth].js */ \"(api)/./src/pages/api/auth/[...nextauth].js\");\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n\nconst PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;\n// Import the userland code.\n// @ts-expect-error - replaced by webpack/turbopack loader\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/[...nextauth]\",\n        pathname: \"/api/auth/[...nextauth]\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnNyYyU1Q3BhZ2VzJTVDYXBpJTVDYXV0aCU1QyU1Qi4uLm5leHRhdXRoJTVELmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ2lGO0FBQ2xCO0FBQ21CO0FBQ2xGLDRCQUE0Qix1R0FBMEI7QUFDdEQ7QUFDQTtBQUNzRTtBQUN0RTtBQUNBLGlFQUFlLGdHQUFLLENBQUMsNERBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSxnR0FBSyxDQUFDLDREQUFRO0FBQ3BDO0FBQ087QUFDUDtBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8/MzBhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtaWdub3JlIHRoaXMgbmVlZCB0byBiZSBpbXBvcnRlZCBmcm9tIG5leHQvZGlzdCB0byBiZSBleHRlcm5hbFxuaW1wb3J0ICogYXMgbW9kdWxlIGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGVcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2hlbHBlcnNcIjtcbmNvbnN0IFBhZ2VzQVBJUm91dGVNb2R1bGUgPSBtb2R1bGUuUGFnZXNBUElSb3V0ZU1vZHVsZTtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSByZXBsYWNlZCBieSB3ZWJwYWNrL3R1cmJvcGFjayBsb2FkZXJcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3NyY1xcXFxwYWdlc1xcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsIFwiZGVmYXVsdFwiKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cauth%5C%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/facebook */ \"next-auth/providers/facebook\");\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);\n\n // Add this line\n\n\n\n\nconst nextAuthOptions = (req, res)=>{\n    return {\n        providers: [\n            next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default()({\n                clientId: process.env.GOOGLE_ID,\n                clientSecret: process.env.GOOGLE_SECRET\n            }),\n            next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_4___default()({\n                clientId: process.env.FACEBOOK_ID,\n                clientSecret: process.env.FACEBOOK_SECRET\n            })\n        ],\n        pages: {\n            signIn: \"/\"\n        },\n        debug: \"development\" === \"development\",\n        session: {\n            strategy: \"jwt\"\n        },\n        secret: process.env.JWT_SECRET,\n        callbacks: {\n            async signIn (user, account, profile) {\n                try {\n                    console.log({\n                        user\n                    });\n                    const apiUrl = \"http://localhost:3001/api/thirdparty\";\n                    const requestData = {\n                        id: user?.user?.id,\n                        name: user?.user?.name,\n                        picture: user?.user?.image,\n                        email: user?.user?.email,\n                        source: user?.account?.provider\n                    };\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(apiUrl, requestData);\n                    let token = response?.data?.token;\n                    // Use the useEffect hook to set the cookie on the client side\n                    // useEffect(() => {\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_5__.setCookie)({\n                        res\n                    }, \"token\", token, {\n                        maxAge: 3600,\n                        path: \"/\"\n                    });\n                    console.log(\"Third-party API response:\", response.data);\n                } catch (error) {\n                    console.error(\"API Error:\", error);\n                }\n                return true;\n            },\n            async jwt ({ token, user, account }) {\n                // console.log(\"jwt\");\n                // console.log({ token });\n                if (token || user) {\n                    token.userRole = \"admin\";\n                    return {\n                        ...token\n                    };\n                }\n            }\n        }\n    };\n};\n// eslint-disable-next-line import/no-anonymous-default-export\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    return next_auth__WEBPACK_IMPORTED_MODULE_2___default()(req, res, nextAuthOptions(req, res));\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1EsQ0FBQyxnQkFBZ0I7QUFDbEI7QUFDdUI7QUFDSTtBQUN4QjtBQUVwQyxNQUFNTSxrQkFBa0IsQ0FBQ0MsS0FBS0M7SUFDNUIsT0FBTztRQUNMQyxXQUFXO1lBQ1ROLGlFQUFjQSxDQUFDO2dCQUNiTyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7Z0JBQy9CQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGFBQWE7WUFDekM7WUFDQVgsbUVBQWdCQSxDQUFDO2dCQUNmTSxVQUFVQyxRQUFRQyxHQUFHLENBQUNJLFdBQVc7Z0JBQ2pDRixjQUFjSCxRQUFRQyxHQUFHLENBQUNLLGVBQWU7WUFDM0M7U0FDRDtRQUNEQyxPQUFPO1lBQ0xDLFFBQVE7UUFDVjtRQUNBQyxPQUFPVCxrQkFBeUI7UUFDaENVLFNBQVM7WUFDUEMsVUFBVTtRQUNaO1FBQ0FDLFFBQVFaLFFBQVFDLEdBQUcsQ0FBQ1ksVUFBVTtRQUM5QkMsV0FBVztZQUNULE1BQU1OLFFBQU9PLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPO2dCQUNqQyxJQUFJO29CQUNGQyxRQUFRQyxHQUFHLENBQUM7d0JBQUVKO29CQUFLO29CQUNuQixNQUFNSyxTQUFTO29CQUNmLE1BQU1DLGNBQWM7d0JBQ2xCQyxJQUFJUCxNQUFNQSxNQUFNTzt3QkFDaEJDLE1BQU1SLE1BQU1BLE1BQU1RO3dCQUNsQkMsU0FBU1QsTUFBTUEsTUFBTVU7d0JBQ3JCQyxPQUFPWCxNQUFNQSxNQUFNVzt3QkFDbkJDLFFBQVFaLE1BQU1DLFNBQVNZO29CQUN6QjtvQkFFQSxNQUFNQyxXQUFXLE1BQU14QyxpREFBVSxDQUFDK0IsUUFBUUM7b0JBQzFDLElBQUlVLFFBQVFGLFVBQVVHLE1BQU1EO29CQUU1Qiw4REFBOEQ7b0JBQzlELG9CQUFvQjtvQkFDbEJyQyxrREFBU0EsQ0FBQzt3QkFBRUc7b0JBQUksR0FBRyxTQUFTa0MsT0FBTzt3QkFDakNFLFFBQVE7d0JBQ1JDLE1BQU07b0JBQ1I7b0JBRUZoQixRQUFRQyxHQUFHLENBQUMsNkJBQTZCVSxTQUFTRyxJQUFJO2dCQUN4RCxFQUFFLE9BQU9HLE9BQU87b0JBQ2RqQixRQUFRaUIsS0FBSyxDQUFDLGNBQWNBO2dCQUM5QjtnQkFFQSxPQUFPO1lBQ1Q7WUFDQSxNQUFNQyxLQUFJLEVBQUVMLEtBQUssRUFBRWhCLElBQUksRUFBRUMsT0FBTyxFQUFFO2dCQUNoQyxzQkFBc0I7Z0JBQ3RCLDBCQUEwQjtnQkFFMUIsSUFBSWUsU0FBU2hCLE1BQU07b0JBQ2pCZ0IsTUFBTU0sUUFBUSxHQUFHO29CQUNqQixPQUFPO3dCQUFFLEdBQUdOLEtBQUs7b0JBQUM7Z0JBQ3BCO1lBQ0Y7UUFFRjtJQUNGO0FBQ0Y7QUFFQSw4REFBOEQ7QUFDOUQsaUVBQWUsQ0FBQ25DLEtBQUtDO0lBQ25CLE9BQU9OLGdEQUFRQSxDQUFDSyxLQUFLQyxLQUFLRixnQkFBZ0JDLEtBQUtDO0FBQ2pELEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz83OGFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7IC8vIEFkZCB0aGlzIGxpbmVcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5pbXBvcnQgRmFjZWJvb2tQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9mYWNlYm9va1wiO1xyXG5pbXBvcnQgeyBzZXRDb29raWUgfSBmcm9tICdub29raWVzJztcclxuXHJcbmNvbnN0IG5leHRBdXRoT3B0aW9ucyA9IChyZXEsIHJlcykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQsXHJcbiAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxyXG4gICAgICB9KSxcclxuICAgICAgRmFjZWJvb2tQcm92aWRlcih7XHJcbiAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX0lELFxyXG4gICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfU0VDUkVULFxyXG4gICAgICB9KSxcclxuICAgIF0sXHJcbiAgICBwYWdlczoge1xyXG4gICAgICBzaWduSW46IFwiL1wiLFxyXG4gICAgfSxcclxuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxyXG4gICAgc2Vzc2lvbjoge1xyXG4gICAgICBzdHJhdGVneTogXCJqd3RcIixcclxuICAgIH0sXHJcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsXHJcbiAgICBjYWxsYmFja3M6IHtcclxuICAgICAgYXN5bmMgc2lnbkluKHVzZXIsIGFjY291bnQsIHByb2ZpbGUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coeyB1c2VyIH0pO1xyXG4gICAgICAgICAgY29uc3QgYXBpVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3RoaXJkcGFydHlcIjtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0ge1xyXG4gICAgICAgICAgICBpZDogdXNlcj8udXNlcj8uaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHVzZXI/LnVzZXI/Lm5hbWUsXHJcbiAgICAgICAgICAgIHBpY3R1cmU6IHVzZXI/LnVzZXI/LmltYWdlLFxyXG4gICAgICAgICAgICBlbWFpbDogdXNlcj8udXNlcj8uZW1haWwsXHJcbiAgICAgICAgICAgIHNvdXJjZTogdXNlcj8uYWNjb3VudD8ucHJvdmlkZXIsXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChhcGlVcmwsIHJlcXVlc3REYXRhKTtcclxuICAgICAgICAgIGxldCB0b2tlbiA9IHJlc3BvbnNlPy5kYXRhPy50b2tlbjtcclxuXHJcbiAgICAgICAgICAvLyBVc2UgdGhlIHVzZUVmZmVjdCBob29rIHRvIHNldCB0aGUgY29va2llIG9uIHRoZSBjbGllbnQgc2lkZVxyXG4gICAgICAgICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0Q29va2llKHsgcmVzIH0sICd0b2tlbicsIHRva2VuLCB7XHJcbiAgICAgICAgICAgICAgbWF4QWdlOiAzNjAwLCAvLyBDb29raWUgZXhwaXJhdGlvbiB0aW1lIGluIHNlY29uZHMgKGUuZy4sIDEgaG91cilcclxuICAgICAgICAgICAgICBwYXRoOiAnLycsICAgIC8vIENvb2tpZSBwYXRoXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcmQtcGFydHkgQVBJIHJlc3BvbnNlOlwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkFQSSBFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyLCBhY2NvdW50IH0pIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImp3dFwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh7IHRva2VuIH0pO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4gfHwgdXNlcikge1xyXG4gICAgICAgICAgdG9rZW4udXNlclJvbGUgPSBcImFkbWluXCI7XHJcbiAgICAgICAgICByZXR1cm4geyAuLi50b2tlbiB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWFub255bW91cy1kZWZhdWx0LWV4cG9ydFxyXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcclxuICByZXR1cm4gTmV4dEF1dGgocmVxLCByZXMsIG5leHRBdXRoT3B0aW9ucyhyZXEsIHJlcykpO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VFZmZlY3QiLCJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiRmFjZWJvb2tQcm92aWRlciIsInNldENvb2tpZSIsIm5leHRBdXRoT3B0aW9ucyIsInJlcSIsInJlcyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJGQUNFQk9PS19JRCIsIkZBQ0VCT09LX1NFQ1JFVCIsInBhZ2VzIiwic2lnbkluIiwiZGVidWciLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJzZWNyZXQiLCJKV1RfU0VDUkVUIiwiY2FsbGJhY2tzIiwidXNlciIsImFjY291bnQiLCJwcm9maWxlIiwiY29uc29sZSIsImxvZyIsImFwaVVybCIsInJlcXVlc3REYXRhIiwiaWQiLCJuYW1lIiwicGljdHVyZSIsImltYWdlIiwiZW1haWwiLCJzb3VyY2UiLCJwcm92aWRlciIsInJlc3BvbnNlIiwicG9zdCIsInRva2VuIiwiZGF0YSIsIm1heEFnZSIsInBhdGgiLCJlcnJvciIsImp3dCIsInVzZXJSb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/future/route-kind.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/server/future/route-kind.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"RouteKind\", ({\n    enumerable: true,\n    get: function() {\n        return RouteKind;\n    }\n}));\nvar RouteKind;\n(function(RouteKind) {\n    RouteKind[/**\n   * `PAGES` represents all the React pages that are under `pages/`.\n   */ \"PAGES\"] = \"PAGES\";\n    RouteKind[/**\n   * `PAGES_API` represents all the API routes under `pages/api/`.\n   */ \"PAGES_API\"] = \"PAGES_API\";\n    RouteKind[/**\n   * `APP_PAGE` represents all the React pages that are under `app/` with the\n   * filename of `page.{j,t}s{,x}`.\n   */ \"APP_PAGE\"] = \"APP_PAGE\";\n    RouteKind[/**\n   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the\n   * filename of `route.{j,t}s{,x}`.\n   */ \"APP_ROUTE\"] = \"APP_ROUTE\";\n})(RouteKind || (RouteKind = {}));\n\n//# sourceMappingURL=route-kind.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksRUFBRSxHQUFHO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixJQUFJLEVBQUUsR0FBRztBQUNsQztBQUNBLENBQUMsOEJBQThCOztBQUUvQiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kLmpzP2Q3NWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZUtpbmRcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFJvdXRlS2luZDtcbiAgICB9XG59KTtcbnZhciBSb3V0ZUtpbmQ7XG4oZnVuY3Rpb24oUm91dGVLaW5kKSB7XG4gICAgUm91dGVLaW5kWy8qKlxuICAgKiBgUEFHRVNgIHJlcHJlc2VudHMgYWxsIHRoZSBSZWFjdCBwYWdlcyB0aGF0IGFyZSB1bmRlciBgcGFnZXMvYC5cbiAgICovIFwiUEFHRVNcIl0gPSBcIlBBR0VTXCI7XG4gICAgUm91dGVLaW5kWy8qKlxuICAgKiBgUEFHRVNfQVBJYCByZXByZXNlbnRzIGFsbCB0aGUgQVBJIHJvdXRlcyB1bmRlciBgcGFnZXMvYXBpL2AuXG4gICAqLyBcIlBBR0VTX0FQSVwiXSA9IFwiUEFHRVNfQVBJXCI7XG4gICAgUm91dGVLaW5kWy8qKlxuICAgKiBgQVBQX1BBR0VgIHJlcHJlc2VudHMgYWxsIHRoZSBSZWFjdCBwYWdlcyB0aGF0IGFyZSB1bmRlciBgYXBwL2Agd2l0aCB0aGVcbiAgICogZmlsZW5hbWUgb2YgYHBhZ2Uue2osdH1zeyx4fWAuXG4gICAqLyBcIkFQUF9QQUdFXCJdID0gXCJBUFBfUEFHRVwiO1xuICAgIFJvdXRlS2luZFsvKipcbiAgICogYEFQUF9ST1VURWAgcmVwcmVzZW50cyBhbGwgdGhlIEFQSSByb3V0ZXMgYW5kIG1ldGFkYXRhIHJvdXRlcyB0aGF0IGFyZSB1bmRlciBgYXBwL2Agd2l0aCB0aGVcbiAgICogZmlsZW5hbWUgb2YgYHJvdXRlLntqLHR9c3sseH1gLlxuICAgKi8gXCJBUFBfUk9VVEVcIl0gPSBcIkFQUF9ST1VURVwiO1xufSkoUm91dGVLaW5kIHx8IChSb3V0ZUtpbmQgPSB7fSkpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1raW5kLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/future/route-kind.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/dist/server/future/route-modules/pages-api/module.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n0 && (0);\nfunction _export(target, all) {\n    for(var name in all)Object.defineProperty(target, name, {\n        enumerable: true,\n        get: all[name]\n    });\n}\n_export(exports, {\n    PagesAPIRouteModule: function() {\n        return PagesAPIRouteModule;\n    },\n    default: function() {\n        return _default;\n    }\n});\nconst _routemodule = __webpack_require__(/*! ../route-module */ \"../route-module\");\nconst _node = __webpack_require__(/*! ../../../api-utils/node */ \"../../../api-utils/node\");\nclass PagesAPIRouteModule extends _routemodule.RouteModule {\n    /**\n   *\n   * @param req the incoming server request\n   * @param res the outgoing server response\n   * @param context the context for the render\n   */ async render(req, res, context) {\n        await (0, _node.apiResolver)(req, res, context.query, this.userland, {\n            ...context.previewProps,\n            revalidate: context.revalidate,\n            trustHostHeader: context.trustHostHeader,\n            allowedRevalidateHeaderKeys: context.allowedRevalidateHeaderKeys,\n            hostname: context.hostname\n        }, context.minimalMode, context.dev, context.page);\n    }\n}\nconst _default = PagesAPIRouteModule;\n\n//# sourceMappingURL=module.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsTUFBTSxDQUdMO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHFCQUFxQixtQkFBTyxDQUFDLHdDQUFpQjtBQUM5QyxjQUFjLG1CQUFPLENBQUMsd0RBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuanM/MjdjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICAgIFBhZ2VzQVBJUm91dGVNb2R1bGU6IG51bGwsXG4gICAgZGVmYXVsdDogbnVsbFxufSk7XG5mdW5jdGlvbiBfZXhwb3J0KHRhcmdldCwgYWxsKSB7XG4gICAgZm9yKHZhciBuYW1lIGluIGFsbClPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGdldDogYWxsW25hbWVdXG4gICAgfSk7XG59XG5fZXhwb3J0KGV4cG9ydHMsIHtcbiAgICBQYWdlc0FQSVJvdXRlTW9kdWxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFBhZ2VzQVBJUm91dGVNb2R1bGU7XG4gICAgfSxcbiAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0O1xuICAgIH1cbn0pO1xuY29uc3QgX3JvdXRlbW9kdWxlID0gcmVxdWlyZShcIi4uL3JvdXRlLW1vZHVsZVwiKTtcbmNvbnN0IF9ub2RlID0gcmVxdWlyZShcIi4uLy4uLy4uL2FwaS11dGlscy9ub2RlXCIpO1xuY2xhc3MgUGFnZXNBUElSb3V0ZU1vZHVsZSBleHRlbmRzIF9yb3V0ZW1vZHVsZS5Sb3V0ZU1vZHVsZSB7XG4gICAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSByZXEgdGhlIGluY29taW5nIHNlcnZlciByZXF1ZXN0XG4gICAqIEBwYXJhbSByZXMgdGhlIG91dGdvaW5nIHNlcnZlciByZXNwb25zZVxuICAgKiBAcGFyYW0gY29udGV4dCB0aGUgY29udGV4dCBmb3IgdGhlIHJlbmRlclxuICAgKi8gYXN5bmMgcmVuZGVyKHJlcSwgcmVzLCBjb250ZXh0KSB7XG4gICAgICAgIGF3YWl0ICgwLCBfbm9kZS5hcGlSZXNvbHZlcikocmVxLCByZXMsIGNvbnRleHQucXVlcnksIHRoaXMudXNlcmxhbmQsIHtcbiAgICAgICAgICAgIC4uLmNvbnRleHQucHJldmlld1Byb3BzLFxuICAgICAgICAgICAgcmV2YWxpZGF0ZTogY29udGV4dC5yZXZhbGlkYXRlLFxuICAgICAgICAgICAgdHJ1c3RIb3N0SGVhZGVyOiBjb250ZXh0LnRydXN0SG9zdEhlYWRlcixcbiAgICAgICAgICAgIGFsbG93ZWRSZXZhbGlkYXRlSGVhZGVyS2V5czogY29udGV4dC5hbGxvd2VkUmV2YWxpZGF0ZUhlYWRlcktleXMsXG4gICAgICAgICAgICBob3N0bmFtZTogY29udGV4dC5ob3N0bmFtZVxuICAgICAgICB9LCBjb250ZXh0Lm1pbmltYWxNb2RlLCBjb250ZXh0LmRldiwgY29udGV4dC5wYWdlKTtcbiAgICB9XG59XG5jb25zdCBfZGVmYXVsdCA9IFBhZ2VzQVBJUm91dGVNb2R1bGU7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZHVsZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cauth%5C%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!"));
module.exports = __webpack_exports__;

})();