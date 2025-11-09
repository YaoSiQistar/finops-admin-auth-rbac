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
exports.id = "app/api/stats/route";
exports.ids = ["app/api/stats/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

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

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

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

/***/ "(rsc)/./node_modules/.pnpm/next@14.2.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstats%2Froute&page=%2Fapi%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstats%2Froute.ts&appDir=E%3A%5Cfinops-admin-auth-rbac%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfinops-admin-auth-rbac&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@14.2.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstats%2Froute&page=%2Fapi%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstats%2Froute.ts&appDir=E%3A%5Cfinops-admin-auth-rbac%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfinops-admin-auth-rbac&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@14.2.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/.pnpm/next@14.2.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@14.2.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_finops_admin_auth_rbac_app_api_stats_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/stats/route.ts */ \"(rsc)/./app/api/stats/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/stats/route\",\n        pathname: \"/api/stats\",\n        filename: \"route\",\n        bundlePath: \"app/api/stats/route\"\n    },\n    resolvedPagePath: \"E:\\\\finops-admin-auth-rbac\\\\app\\\\api\\\\stats\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_finops_admin_auth_rbac_app_api_stats_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/stats/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNC4yLjE3X3JlYWN0LWRvbUAxOC4zLjFfcmVhY3RAMTguMy4xX19yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGc3RhdHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnN0YXRzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc3RhdHMlMkZyb3V0ZS50cyZhcHBEaXI9RSUzQSU1Q2Zpbm9wcy1hZG1pbi1hdXRoLXJiYWMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUNmaW5vcHMtYWRtaW4tYXV0aC1yYmFjJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNLO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlub3BzLWFkbWluLz8xNjVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkU6XFxcXGZpbm9wcy1hZG1pbi1hdXRoLXJiYWNcXFxcYXBwXFxcXGFwaVxcXFxzdGF0c1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc3RhdHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zdGF0c1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc3RhdHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJFOlxcXFxmaW5vcHMtYWRtaW4tYXV0aC1yYmFjXFxcXGFwcFxcXFxhcGlcXFxcc3RhdHNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3N0YXRzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@14.2.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstats%2Froute&page=%2Fapi%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstats%2Froute.ts&appDir=E%3A%5Cfinops-admin-auth-rbac%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfinops-admin-auth-rbac&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/stats/route.ts":
/*!********************************!*\
  !*** ./app/api/stats/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@14.2.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var _lib_rbac__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/rbac */ \"(rsc)/./lib/rbac.ts\");\n\n\n\nasync function GET() {\n    await (0,_lib_rbac__WEBPACK_IMPORTED_MODULE_2__.requireAuth)();\n    const items = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.prisma.costItem.findMany();\n    const total = items.reduce((s, c)=>s + c.cost, 0);\n    const byDate = Object.entries(items.reduce((acc, c)=>{\n        acc[c.date] = (acc[c.date] ?? 0) + c.cost;\n        return acc;\n    }, {})).sort((a, b)=>a[0].localeCompare(b[0])).map(([date, cost])=>({\n            date,\n            cost: Number(cost.toFixed(2))\n        }));\n    const byService = Object.entries(items.reduce((acc, c)=>{\n        acc[c.service] = (acc[c.service] ?? 0) + c.cost;\n        return acc;\n    }, {})).sort((a, b)=>b[1] - a[1]).slice(0, 5).map(([service, cost])=>({\n            service,\n            cost: Number(cost.toFixed(2))\n        }));\n    const recent = items.sort((a, b)=>b.date.localeCompare(a.date)).slice(0, 10);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        total: Number(total.toFixed(2)),\n        byDate,\n        byService,\n        recent\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N0YXRzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFDVDtBQUNPO0FBRWxDLGVBQWVHO0lBQ3BCLE1BQU1ELHNEQUFXQTtJQUNqQixNQUFNRSxRQUFRLE1BQU1ILDJDQUFNQSxDQUFDSSxRQUFRLENBQUNDLFFBQVE7SUFDNUMsTUFBTUMsUUFBUUgsTUFBTUksTUFBTSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELElBQUlDLEVBQUVDLElBQUksRUFBRTtJQUNqRCxNQUFNQyxTQUFTQyxPQUFPQyxPQUFPLENBQUNWLE1BQU1JLE1BQU0sQ0FBQyxDQUFDTyxLQUE2Qkw7UUFDdkVLLEdBQUcsQ0FBQ0wsRUFBRU0sSUFBSSxDQUFDLEdBQUcsQ0FBQ0QsR0FBRyxDQUFDTCxFQUFFTSxJQUFJLENBQUMsSUFBSSxLQUFLTixFQUFFQyxJQUFJO1FBQUUsT0FBT0k7SUFDcEQsR0FBRyxDQUFDLElBQUlFLElBQUksQ0FBQyxDQUFDQyxHQUFFQyxJQUFJRCxDQUFDLENBQUMsRUFBRSxDQUFDRSxhQUFhLENBQUNELENBQUMsQ0FBQyxFQUFFLEdBQUdFLEdBQUcsQ0FBQyxDQUFDLENBQUNMLE1BQU1MLEtBQUssR0FBSTtZQUFFSztZQUFNTCxNQUFNVyxPQUFPWCxLQUFLWSxPQUFPLENBQUM7UUFBSTtJQUV6RyxNQUFNQyxZQUFZWCxPQUFPQyxPQUFPLENBQUNWLE1BQU1JLE1BQU0sQ0FBQyxDQUFDTyxLQUE2Qkw7UUFDMUVLLEdBQUcsQ0FBQ0wsRUFBRWUsT0FBTyxDQUFDLEdBQUcsQ0FBQ1YsR0FBRyxDQUFDTCxFQUFFZSxPQUFPLENBQUMsSUFBSSxLQUFLZixFQUFFQyxJQUFJO1FBQUUsT0FBT0k7SUFDMUQsR0FBRyxDQUFDLElBQUlFLElBQUksQ0FBQyxDQUFDQyxHQUFFQyxJQUFLQSxDQUFDLENBQUMsRUFBRSxHQUFDRCxDQUFDLENBQUMsRUFBRSxFQUFFUSxLQUFLLENBQUMsR0FBRSxHQUFHTCxHQUFHLENBQUMsQ0FBQyxDQUFDSSxTQUFTZCxLQUFLLEdBQUk7WUFBRWM7WUFBU2QsTUFBTVcsT0FBT1gsS0FBS1ksT0FBTyxDQUFDO1FBQUk7SUFFNUcsTUFBTUksU0FBU3ZCLE1BQU1hLElBQUksQ0FBQyxDQUFDQyxHQUFFQyxJQUFLQSxFQUFFSCxJQUFJLENBQUNJLGFBQWEsQ0FBQ0YsRUFBRUYsSUFBSSxHQUFHVSxLQUFLLENBQUMsR0FBRTtJQUV4RSxPQUFPMUIscURBQVlBLENBQUM0QixJQUFJLENBQUM7UUFBRXJCLE9BQU9lLE9BQU9mLE1BQU1nQixPQUFPLENBQUM7UUFBS1g7UUFBUVk7UUFBV0c7SUFBTztBQUN4RiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zpbm9wcy1hZG1pbi8uL2FwcC9hcGkvc3RhdHMvcm91dGUudHM/OGRmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9kYlwiO1xuaW1wb3J0IHsgcmVxdWlyZUF1dGggfSBmcm9tIFwiQC9saWIvcmJhY1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICBhd2FpdCByZXF1aXJlQXV0aCgpO1xuICBjb25zdCBpdGVtcyA9IGF3YWl0IHByaXNtYS5jb3N0SXRlbS5maW5kTWFueSgpO1xuICBjb25zdCB0b3RhbCA9IGl0ZW1zLnJlZHVjZSgocywgYykgPT4gcyArIGMuY29zdCwgMCk7XG4gIGNvbnN0IGJ5RGF0ZSA9IE9iamVjdC5lbnRyaWVzKGl0ZW1zLnJlZHVjZSgoYWNjOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+LCBjKSA9PiB7XG4gICAgYWNjW2MuZGF0ZV0gPSAoYWNjW2MuZGF0ZV0gPz8gMCkgKyBjLmNvc3Q7IHJldHVybiBhY2M7XG4gIH0sIHt9KSkuc29ydCgoYSxiKT0+YVswXS5sb2NhbGVDb21wYXJlKGJbMF0pKS5tYXAoKFtkYXRlLCBjb3N0XSk9Pih7IGRhdGUsIGNvc3Q6IE51bWJlcihjb3N0LnRvRml4ZWQoMikpIH0pKTtcblxuICBjb25zdCBieVNlcnZpY2UgPSBPYmplY3QuZW50cmllcyhpdGVtcy5yZWR1Y2UoKGFjYzogUmVjb3JkPHN0cmluZywgbnVtYmVyPiwgYykgPT4ge1xuICAgIGFjY1tjLnNlcnZpY2VdID0gKGFjY1tjLnNlcnZpY2VdID8/IDApICsgYy5jb3N0OyByZXR1cm4gYWNjO1xuICB9LCB7fSkpLnNvcnQoKGEsYik9PiBiWzFdLWFbMV0pLnNsaWNlKDAsNSkubWFwKChbc2VydmljZSwgY29zdF0pPT4oeyBzZXJ2aWNlLCBjb3N0OiBOdW1iZXIoY29zdC50b0ZpeGVkKDIpKSB9KSk7XG5cbiAgY29uc3QgcmVjZW50ID0gaXRlbXMuc29ydCgoYSxiKT0+IGIuZGF0ZS5sb2NhbGVDb21wYXJlKGEuZGF0ZSkpLnNsaWNlKDAsMTApO1xuXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHRvdGFsOiBOdW1iZXIodG90YWwudG9GaXhlZCgyKSksIGJ5RGF0ZSwgYnlTZXJ2aWNlLCByZWNlbnQgfSk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwicmVxdWlyZUF1dGgiLCJHRVQiLCJpdGVtcyIsImNvc3RJdGVtIiwiZmluZE1hbnkiLCJ0b3RhbCIsInJlZHVjZSIsInMiLCJjIiwiY29zdCIsImJ5RGF0ZSIsIk9iamVjdCIsImVudHJpZXMiLCJhY2MiLCJkYXRlIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsIm1hcCIsIk51bWJlciIsInRvRml4ZWQiLCJieVNlcnZpY2UiLCJzZXJ2aWNlIiwic2xpY2UiLCJyZWNlbnQiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/stats/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.7_next@14.2._2d08e4e0ce09cec4bf5d696254b2f904/node_modules/next-auth/providers/github.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/.pnpm/@next-auth+prisma-adapter@1_830164b8f52c6ba9a4a25a42dfce798b/node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n// lib/auth.ts\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma),\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GITHUB_ID || \"\",\n            clientSecret: process.env.GITHUB_SECRET || \"\"\n        })\n    ],\n    // ✅ 用 JWT，让 middleware 能识别登录态\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        // 首次登录赋予角色\n        async signIn ({ user }) {\n            const count = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.user.count();\n            // 只有首次创建用户没有 role 时才写入\n            try {\n                if (!user.role) {\n                    await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.user.update({\n                        where: {\n                            id: user.id\n                        },\n                        data: {\n                            role: count === 1 ? \"ADMIN\" : \"VIEWER\"\n                        }\n                    });\n                }\n            } catch  {}\n            return true;\n        },\n        // 把数据库里的角色塞进 JWT\n        async jwt ({ token, user }) {\n            // user 只在首次登录时存在；其后从 DB 读\n            if (user) {\n                token.role = user.role ?? \"VIEWER\";\n            } else if (!token.role && token.sub) {\n                const dbUser = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        id: token.sub\n                    }\n                });\n                token.role = dbUser?.role ?? \"VIEWER\";\n            }\n            return token;\n        },\n        // 再把 JWT 里的角色同步到 session\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.sub;\n                session.user.role = token.role ?? \"VIEWER\";\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/signin\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsY0FBYztBQUUwQztBQUNFO0FBQ3hCO0FBRTNCLE1BQU1HLGNBQStCO0lBQzFDQyxTQUFTSCx3RUFBYUEsQ0FBQ0MsMkNBQU1BO0lBQzdCRyxXQUFXO1FBQ1RMLHNFQUFjQSxDQUFDO1lBQ2JNLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUyxJQUFJO1lBQ25DQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGFBQWEsSUFBSTtRQUM3QztLQUNEO0lBRUQsOEJBQThCO0lBQzlCQyxTQUFTO1FBQUVDLFVBQVU7SUFBTTtJQUUzQkMsV0FBVztRQUNULFdBQVc7UUFDWCxNQUFNQyxRQUFPLEVBQUVDLElBQUksRUFBRTtZQUNuQixNQUFNQyxRQUFRLE1BQU1mLDJDQUFNQSxDQUFDYyxJQUFJLENBQUNDLEtBQUs7WUFDckMsdUJBQXVCO1lBQ3ZCLElBQUk7Z0JBQ0YsSUFBSSxDQUFDLEtBQWNDLElBQUksRUFBRTtvQkFDdkIsTUFBTWhCLDJDQUFNQSxDQUFDYyxJQUFJLENBQUNHLE1BQU0sQ0FBQzt3QkFDdkJDLE9BQU87NEJBQUVDLElBQUlMLEtBQUtLLEVBQUU7d0JBQUM7d0JBQ3JCQyxNQUFNOzRCQUFFSixNQUFNRCxVQUFVLElBQUksVUFBVTt3QkFBUztvQkFDakQ7Z0JBQ0Y7WUFDRixFQUFFLE9BQU0sQ0FBQztZQUNULE9BQU87UUFDVDtRQUVBLGlCQUFpQjtRQUNqQixNQUFNTSxLQUFJLEVBQUVDLEtBQUssRUFBRVIsSUFBSSxFQUFFO1lBQ3ZCLDBCQUEwQjtZQUMxQixJQUFJQSxNQUFNO2dCQUNSUSxNQUFNTixJQUFJLEdBQUcsS0FBY0EsSUFBSSxJQUFJO1lBQ3JDLE9BQU8sSUFBSSxDQUFDTSxNQUFNTixJQUFJLElBQUlNLE1BQU1DLEdBQUcsRUFBRTtnQkFDbkMsTUFBTUMsU0FBUyxNQUFNeEIsMkNBQU1BLENBQUNjLElBQUksQ0FBQ1csVUFBVSxDQUFDO29CQUFFUCxPQUFPO3dCQUFFQyxJQUFJRyxNQUFNQyxHQUFHO29CQUFDO2dCQUFFO2dCQUN2RUQsTUFBTU4sSUFBSSxHQUFHUSxRQUFRUixRQUFRO1lBQy9CO1lBQ0EsT0FBT007UUFDVDtRQUVBLHlCQUF5QjtRQUN6QixNQUFNWixTQUFRLEVBQUVBLE9BQU8sRUFBRVksS0FBSyxFQUFFO1lBQzlCLElBQUlaLFFBQVFJLElBQUksRUFBRTtnQkFDZkosUUFBUUksSUFBSSxDQUFTSyxFQUFFLEdBQUdHLE1BQU1DLEdBQUc7Z0JBQ25DYixRQUFRSSxJQUFJLENBQVNFLElBQUksR0FBRyxNQUFlQSxJQUFJLElBQUk7WUFDdEQ7WUFDQSxPQUFPTjtRQUNUO0lBQ0Y7SUFFQWdCLE9BQU87UUFBRWIsUUFBUTtJQUFVO0FBQzdCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5vcHMtYWRtaW4vLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9hdXRoLnRzXG5pbXBvcnQgTmV4dEF1dGgsIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvZGJcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSBhcyBhbnksXG4gIHByb3ZpZGVyczogW1xuICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQgfHwgXCJcIixcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCB8fCBcIlwiLFxuICAgIH0pLFxuICBdLFxuXG4gIC8vIOKchSDnlKggSldU77yM6K6pIG1pZGRsZXdhcmUg6IO96K+G5Yir55m75b2V5oCBXG4gIHNlc3Npb246IHsgc3RyYXRlZ3k6IFwiand0XCIgfSxcblxuICBjYWxsYmFja3M6IHtcbiAgICAvLyDpppbmrKHnmbvlvZXotYvkuojop5LoibJcbiAgICBhc3luYyBzaWduSW4oeyB1c2VyIH0pIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLnVzZXIuY291bnQoKTtcbiAgICAgIC8vIOWPquaciemmluasoeWIm+W7uueUqOaIt+ayoeaciSByb2xlIOaXtuaJjeWGmeWFpVxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCEodXNlciBhcyBhbnkpLnJvbGUpIHtcbiAgICAgICAgICBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHVzZXIuaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHsgcm9sZTogY291bnQgPT09IDEgPyBcIkFETUlOXCIgOiBcIlZJRVdFUlwiIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2gge31cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICAvLyDmiormlbDmja7lupPph4znmoTop5LoibLloZ7ov5sgSldUXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgLy8gdXNlciDlj6rlnKjpppbmrKHnmbvlvZXml7blrZjlnKjvvJvlhbblkI7ku44gREIg6K+7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5yb2xlID0gKHVzZXIgYXMgYW55KS5yb2xlID8/IFwiVklFV0VSXCI7XG4gICAgICB9IGVsc2UgaWYgKCF0b2tlbi5yb2xlICYmIHRva2VuLnN1Yikge1xuICAgICAgICBjb25zdCBkYlVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IHRva2VuLnN1YiB9IH0pO1xuICAgICAgICB0b2tlbi5yb2xlID0gZGJVc2VyPy5yb2xlID8/IFwiVklFV0VSXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcblxuICAgIC8vIOWGjeaKiiBKV1Qg6YeM55qE6KeS6Imy5ZCM5q2l5YiwIHNlc3Npb25cbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHNlc3Npb24udXNlcikge1xuICAgICAgICAoc2Vzc2lvbi51c2VyIGFzIGFueSkuaWQgPSB0b2tlbi5zdWI7XG4gICAgICAgIChzZXNzaW9uLnVzZXIgYXMgYW55KS5yb2xlID0gKHRva2VuIGFzIGFueSkucm9sZSA/PyBcIlZJRVdFUlwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcblxuICBwYWdlczogeyBzaWduSW46IFwiL3NpZ25pblwiIH0sXG59O1xuIl0sIm5hbWVzIjpbIkdpdGh1YlByb3ZpZGVyIiwiUHJpc21hQWRhcHRlciIsInByaXNtYSIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9TRUNSRVQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJ1c2VyIiwiY291bnQiLCJyb2xlIiwidXBkYXRlIiwid2hlcmUiLCJpZCIsImRhdGEiLCJqd3QiLCJ0b2tlbiIsInN1YiIsImRiVXNlciIsImZpbmRVbmlxdWUiLCJwYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// avoid creating many instances in dev hot-reload\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLGtEQUFrRDtBQUNsRCxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFHO0FBRW5FLElBQUlJLElBQXFDLEVBQUVILGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zpbm9wcy1hZG1pbi8uL2xpYi9kYi50cz8xZGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG4vLyBhdm9pZCBjcmVhdGluZyBtYW55IGluc3RhbmNlcyBpbiBkZXYgaG90LXJlbG9hZFxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQgfTtcblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPz8gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./lib/rbac.ts":
/*!*********************!*\
  !*** ./lib/rbac.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   requireAuth: () => (/* binding */ requireAuth),\n/* harmony export */   requireRole: () => (/* binding */ requireRole)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.7_next@14.2._2d08e4e0ce09cec4bf5d696254b2f904/node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n\nasync function requireAuth() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n    if (!session) {\n        throw new Response(JSON.stringify({\n            error: \"Unauthorized\"\n        }), {\n            status: 401\n        });\n    }\n    return session;\n}\nasync function requireRole(role = \"ADMIN\") {\n    const session = await requireAuth();\n    const userRole = session.user?.role || \"VIEWER\";\n    const roles = [\n        \"VIEWER\",\n        \"ADMIN\"\n    ];\n    if (roles.indexOf(userRole) < roles.indexOf(role)) {\n        throw new Response(JSON.stringify({\n            error: \"Forbidden\"\n        }), {\n            status: 403\n        });\n    }\n    return session;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcmJhYy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2QztBQUNKO0FBRWxDLGVBQWVFO0lBQ3BCLE1BQU1DLFVBQVUsTUFBTUgsMkRBQWdCQSxDQUFDQyxrREFBV0E7SUFDbEQsSUFBSSxDQUFDRSxTQUFTO1FBQ1osTUFBTSxJQUFJQyxTQUFTQyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsT0FBTztRQUFlLElBQUk7WUFBRUMsUUFBUTtRQUFJO0lBQzlFO0lBQ0EsT0FBT0w7QUFDVDtBQUVPLGVBQWVNLFlBQVlDLE9BQTJCLE9BQU87SUFDbEUsTUFBTVAsVUFBVSxNQUFNRDtJQUN0QixNQUFNUyxXQUFXLFFBQVNDLElBQUksRUFBVUYsUUFBUTtJQUNoRCxNQUFNRyxRQUFRO1FBQUM7UUFBVTtLQUFRO0lBQ2pDLElBQUlBLE1BQU1DLE9BQU8sQ0FBQ0gsWUFBWUUsTUFBTUMsT0FBTyxDQUFDSixPQUFPO1FBQ2pELE1BQU0sSUFBSU4sU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLE9BQU87UUFBWSxJQUFJO1lBQUVDLFFBQVE7UUFBSTtJQUMzRTtJQUNBLE9BQU9MO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5vcHMtYWRtaW4vLi9saWIvcmJhYy50cz9jNjFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlQXV0aCgpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICBpZiAoIXNlc3Npb24pIHtcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9KSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgfVxuICByZXR1cm4gc2Vzc2lvbjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVSb2xlKHJvbGU6IFwiQURNSU5cIiB8IFwiVklFV0VSXCIgPSBcIkFETUlOXCIpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHJlcXVpcmVBdXRoKCk7XG4gIGNvbnN0IHVzZXJSb2xlID0gKHNlc3Npb24udXNlciBhcyBhbnkpPy5yb2xlIHx8IFwiVklFV0VSXCI7XG4gIGNvbnN0IHJvbGVzID0gW1wiVklFV0VSXCIsIFwiQURNSU5cIl07XG4gIGlmIChyb2xlcy5pbmRleE9mKHVzZXJSb2xlKSA8IHJvbGVzLmluZGV4T2Yocm9sZSkpIHtcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogXCJGb3JiaWRkZW5cIiB9KSwgeyBzdGF0dXM6IDQwMyB9KTtcbiAgfVxuICByZXR1cm4gc2Vzc2lvbjtcbn1cbiJdLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJyZXF1aXJlQXV0aCIsInNlc3Npb24iLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsInN0YXR1cyIsInJlcXVpcmVSb2xlIiwicm9sZSIsInVzZXJSb2xlIiwidXNlciIsInJvbGVzIiwiaW5kZXhPZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/rbac.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.2.17_react-dom@18.3.1_react@18.3.1__react@18.3.1","vendor-chunks/next-auth@4.24.7_next@14.2._2d08e4e0ce09cec4bf5d696254b2f904","vendor-chunks/jose@4.15.9","vendor-chunks/openid-client@5.7.1","vendor-chunks/@babel+runtime@7.28.4","vendor-chunks/oauth@0.9.15","vendor-chunks/object-hash@2.2.0","vendor-chunks/preact@10.27.2","vendor-chunks/uuid@8.3.2","vendor-chunks/@next-auth+prisma-adapter@1_830164b8f52c6ba9a4a25a42dfce798b","vendor-chunks/yallist@4.0.0","vendor-chunks/preact-render-to-string@5.2.6_preact@10.27.2","vendor-chunks/lru-cache@6.0.0","vendor-chunks/cookie@0.5.0","vendor-chunks/oidc-token-hash@5.2.0","vendor-chunks/@panva+hkdf@1.2.1"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@14.2.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstats%2Froute&page=%2Fapi%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstats%2Froute.ts&appDir=E%3A%5Cfinops-admin-auth-rbac%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfinops-admin-auth-rbac&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();