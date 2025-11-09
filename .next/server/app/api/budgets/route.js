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
exports.id = "app/api/budgets/route";
exports.ids = ["app/api/budgets/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "@prisma/client/runtime/library":
/*!*************************************************!*\
  !*** external "@prisma/client/runtime/library" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@prisma/client/runtime/library");

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

/***/ "(rsc)/./node_modules/.pnpm/next@14.2.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbudgets%2Froute&page=%2Fapi%2Fbudgets%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbudgets%2Froute.ts&appDir=E%3A%5Cfinops-admin-auth-rbac%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfinops-admin-auth-rbac&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@14.2.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbudgets%2Froute&page=%2Fapi%2Fbudgets%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbudgets%2Froute.ts&appDir=E%3A%5Cfinops-admin-auth-rbac%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfinops-admin-auth-rbac&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@14.2.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/.pnpm/next@14.2.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@14.2.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_finops_admin_auth_rbac_app_api_budgets_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/budgets/route.ts */ \"(rsc)/./app/api/budgets/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/budgets/route\",\n        pathname: \"/api/budgets\",\n        filename: \"route\",\n        bundlePath: \"app/api/budgets/route\"\n    },\n    resolvedPagePath: \"E:\\\\finops-admin-auth-rbac\\\\app\\\\api\\\\budgets\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_finops_admin_auth_rbac_app_api_budgets_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/budgets/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNC4yLjE3X3JlYWN0LWRvbUAxOC4zLjFfcmVhY3RAMTguMy4xX19yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGYnVkZ2V0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYnVkZ2V0cyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmJ1ZGdldHMlMkZyb3V0ZS50cyZhcHBEaXI9RSUzQSU1Q2Zpbm9wcy1hZG1pbi1hdXRoLXJiYWMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUNmaW5vcHMtYWRtaW4tYXV0aC1yYmFjJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNPO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlub3BzLWFkbWluLz8xNmNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkU6XFxcXGZpbm9wcy1hZG1pbi1hdXRoLXJiYWNcXFxcYXBwXFxcXGFwaVxcXFxidWRnZXRzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9idWRnZXRzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYnVkZ2V0c1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYnVkZ2V0cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkU6XFxcXGZpbm9wcy1hZG1pbi1hdXRoLXJiYWNcXFxcYXBwXFxcXGFwaVxcXFxidWRnZXRzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9idWRnZXRzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@14.2.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbudgets%2Froute&page=%2Fapi%2Fbudgets%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbudgets%2Froute.ts&appDir=E%3A%5Cfinops-admin-auth-rbac%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfinops-admin-auth-rbac&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/budgets/route.ts":
/*!**********************************!*\
  !*** ./app/api/budgets/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@14.2.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var _lib_authz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/authz */ \"(rsc)/./lib/authz.ts\");\n/* harmony import */ var _lib_finops__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/finops */ \"(rsc)/./lib/finops.ts\");\n\n\n\n\nasync function GET(req) {\n    // 支持分页与筛选\n    const { searchParams } = new URL(req.url);\n    const page = Math.max(1, Number(searchParams.get(\"page\") ?? \"1\"));\n    const pageSize = Math.min(100, Math.max(1, Number(searchParams.get(\"pageSize\") ?? \"20\")));\n    const month = searchParams.get(\"month\") ?? undefined;\n    const team = searchParams.get(\"team\") ?? undefined;\n    const env = searchParams.get(\"env\") ?? undefined;\n    const where = {};\n    if (month) where.month = month;\n    if (team) where.team = team;\n    if (env) where.env = env;\n    const [total, items] = await Promise.all([\n        _lib_db__WEBPACK_IMPORTED_MODULE_1__.prisma.budget.count({\n            where\n        }),\n        _lib_db__WEBPACK_IMPORTED_MODULE_1__.prisma.budget.findMany({\n            where,\n            orderBy: [\n                {\n                    month: \"desc\"\n                },\n                {\n                    name: \"asc\"\n                }\n            ],\n            skip: (page - 1) * pageSize,\n            take: pageSize\n        })\n    ]);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        total,\n        page,\n        pageSize,\n        items\n    });\n}\nasync function POST(req) {\n    await (0,_lib_authz__WEBPACK_IMPORTED_MODULE_2__.requireRole)(\"ADMIN\");\n    const body = await req.json();\n    const data = {\n        name: String(body.name),\n        team: body.team ?? null,\n        env: body.env ?? null,\n        month: String(body.month),\n        amount: body.amount,\n        currency: body.currency ?? \"USD\",\n        note: body.note ?? null\n    };\n    // 初次写入顺便计算当月实花\n    const spent = await (0,_lib_finops__WEBPACK_IMPORTED_MODULE_3__.calcMonthSpent)({\n        month: data.month,\n        team: data.team,\n        env: data.env\n    });\n    const created = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.prisma.budget.create({\n        data: {\n            ...data,\n            spentCache: spent\n        }\n    });\n    await (0,_lib_finops__WEBPACK_IMPORTED_MODULE_3__.writeAuditLog)({\n        action: \"BUDGET_CREATE\",\n        target: created.id,\n        meta: created\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(created, {\n        status: 201\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2J1ZGdldHMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdEO0FBQ3RCO0FBQ1E7QUFDbUI7QUFFdEQsZUFBZUssSUFBSUMsR0FBZ0I7SUFDeEMsVUFBVTtJQUNWLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSUYsSUFBSUcsR0FBRztJQUN4QyxNQUFNQyxPQUFPQyxLQUFLQyxHQUFHLENBQUMsR0FBR0MsT0FBT04sYUFBYU8sR0FBRyxDQUFDLFdBQVc7SUFDNUQsTUFBTUMsV0FBV0osS0FBS0ssR0FBRyxDQUFDLEtBQUtMLEtBQUtDLEdBQUcsQ0FBQyxHQUFHQyxPQUFPTixhQUFhTyxHQUFHLENBQUMsZUFBZTtJQUNsRixNQUFNRyxRQUFRVixhQUFhTyxHQUFHLENBQUMsWUFBWUk7SUFDM0MsTUFBTUMsT0FBT1osYUFBYU8sR0FBRyxDQUFDLFdBQVdJO0lBQ3pDLE1BQU1FLE1BQU1iLGFBQWFPLEdBQUcsQ0FBQyxVQUFVSTtJQUV2QyxNQUFNRyxRQUFhLENBQUM7SUFDcEIsSUFBSUosT0FBT0ksTUFBTUosS0FBSyxHQUFHQTtJQUN6QixJQUFJRSxNQUFNRSxNQUFNRixJQUFJLEdBQUdBO0lBQ3ZCLElBQUlDLEtBQUtDLE1BQU1ELEdBQUcsR0FBR0E7SUFFckIsTUFBTSxDQUFDRSxPQUFPQyxNQUFNLEdBQUcsTUFBTUMsUUFBUUMsR0FBRyxDQUFDO1FBQ3ZDeEIsMkNBQU1BLENBQUN5QixNQUFNLENBQUNDLEtBQUssQ0FBQztZQUFFTjtRQUFNO1FBQzVCcEIsMkNBQU1BLENBQUN5QixNQUFNLENBQUNFLFFBQVEsQ0FBQztZQUNyQlA7WUFDQVEsU0FBUztnQkFBQztvQkFBRVosT0FBTztnQkFBTztnQkFBRztvQkFBRWEsTUFBTTtnQkFBTTthQUFFO1lBQzdDQyxNQUFNLENBQUNyQixPQUFPLEtBQUtLO1lBQ25CaUIsTUFBTWpCO1FBQ1I7S0FDRDtJQUVELE9BQU9mLHFEQUFZQSxDQUFDaUMsSUFBSSxDQUFDO1FBQUVYO1FBQU9aO1FBQU1LO1FBQVVRO0lBQU07QUFDMUQ7QUFFTyxlQUFlVyxLQUFLNUIsR0FBZ0I7SUFDekMsTUFBTUosdURBQVdBLENBQUM7SUFDbEIsTUFBTWlDLE9BQU8sTUFBTTdCLElBQUkyQixJQUFJO0lBQzNCLE1BQU1HLE9BQU87UUFDWE4sTUFBTU8sT0FBT0YsS0FBS0wsSUFBSTtRQUN0QlgsTUFBTWdCLEtBQUtoQixJQUFJLElBQUk7UUFDbkJDLEtBQUtlLEtBQUtmLEdBQUcsSUFBSTtRQUNqQkgsT0FBT29CLE9BQU9GLEtBQUtsQixLQUFLO1FBQ3hCcUIsUUFBUUgsS0FBS0csTUFBTTtRQUNuQkMsVUFBVUosS0FBS0ksUUFBUSxJQUFJO1FBQzNCQyxNQUFNTCxLQUFLSyxJQUFJLElBQUk7SUFDckI7SUFDQSxlQUFlO0lBQ2YsTUFBTUMsUUFBUSxNQUFNdEMsMkRBQWNBLENBQUM7UUFBRWMsT0FBT21CLEtBQUtuQixLQUFLO1FBQUVFLE1BQU1pQixLQUFLakIsSUFBSTtRQUFFQyxLQUFLZ0IsS0FBS2hCLEdBQUc7SUFBQztJQUN2RixNQUFNc0IsVUFBVSxNQUFNekMsMkNBQU1BLENBQUN5QixNQUFNLENBQUNpQixNQUFNLENBQUM7UUFBRVAsTUFBTTtZQUFFLEdBQUdBLElBQUk7WUFBRVEsWUFBWUg7UUFBTTtJQUFFO0lBRWxGLE1BQU1yQywwREFBYUEsQ0FBQztRQUFFeUMsUUFBUTtRQUFpQkMsUUFBUUosUUFBUUssRUFBRTtRQUFFQyxNQUFNTjtJQUFRO0lBRWpGLE9BQU8xQyxxREFBWUEsQ0FBQ2lDLElBQUksQ0FBQ1MsU0FBUztRQUFFTyxRQUFRO0lBQUk7QUFDbEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5vcHMtYWRtaW4vLi9hcHAvYXBpL2J1ZGdldHMvcm91dGUudHM/ODg3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvZGJcIjtcbmltcG9ydCB7IHJlcXVpcmVSb2xlIH0gZnJvbSBcIkAvbGliL2F1dGh6XCI7IFxuaW1wb3J0IHsgY2FsY01vbnRoU3BlbnQsIHdyaXRlQXVkaXRMb2cgfSBmcm9tIFwiQC9saWIvZmlub3BzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBOZXh0UmVxdWVzdCkge1xuICAvLyDmlK/mjIHliIbpobXkuI7nrZvpgIlcbiAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxLnVybCk7XG4gIGNvbnN0IHBhZ2UgPSBNYXRoLm1heCgxLCBOdW1iZXIoc2VhcmNoUGFyYW1zLmdldChcInBhZ2VcIikgPz8gXCIxXCIpKTtcbiAgY29uc3QgcGFnZVNpemUgPSBNYXRoLm1pbigxMDAsIE1hdGgubWF4KDEsIE51bWJlcihzZWFyY2hQYXJhbXMuZ2V0KFwicGFnZVNpemVcIikgPz8gXCIyMFwiKSkpO1xuICBjb25zdCBtb250aCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJtb250aFwiKSA/PyB1bmRlZmluZWQ7XG4gIGNvbnN0IHRlYW0gPSBzZWFyY2hQYXJhbXMuZ2V0KFwidGVhbVwiKSA/PyB1bmRlZmluZWQ7XG4gIGNvbnN0IGVudiA9IHNlYXJjaFBhcmFtcy5nZXQoXCJlbnZcIikgPz8gdW5kZWZpbmVkO1xuXG4gIGNvbnN0IHdoZXJlOiBhbnkgPSB7fTtcbiAgaWYgKG1vbnRoKSB3aGVyZS5tb250aCA9IG1vbnRoO1xuICBpZiAodGVhbSkgd2hlcmUudGVhbSA9IHRlYW07XG4gIGlmIChlbnYpIHdoZXJlLmVudiA9IGVudjtcblxuICBjb25zdCBbdG90YWwsIGl0ZW1zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBwcmlzbWEuYnVkZ2V0LmNvdW50KHsgd2hlcmUgfSksXG4gICAgcHJpc21hLmJ1ZGdldC5maW5kTWFueSh7XG4gICAgICB3aGVyZSxcbiAgICAgIG9yZGVyQnk6IFt7IG1vbnRoOiBcImRlc2NcIiB9LCB7IG5hbWU6IFwiYXNjXCIgfV0sXG4gICAgICBza2lwOiAocGFnZSAtIDEpICogcGFnZVNpemUsXG4gICAgICB0YWtlOiBwYWdlU2l6ZSxcbiAgICB9KSxcbiAgXSk7XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgdG90YWwsIHBhZ2UsIHBhZ2VTaXplLCBpdGVtcyB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xuICBhd2FpdCByZXF1aXJlUm9sZShcIkFETUlOXCIpO1xuICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBuYW1lOiBTdHJpbmcoYm9keS5uYW1lKSxcbiAgICB0ZWFtOiBib2R5LnRlYW0gPz8gbnVsbCxcbiAgICBlbnY6IGJvZHkuZW52ID8/IG51bGwsXG4gICAgbW9udGg6IFN0cmluZyhib2R5Lm1vbnRoKSwgLy8gXCJZWVlZLU1NXCJcbiAgICBhbW91bnQ6IGJvZHkuYW1vdW50LFxuICAgIGN1cnJlbmN5OiBib2R5LmN1cnJlbmN5ID8/IFwiVVNEXCIsXG4gICAgbm90ZTogYm9keS5ub3RlID8/IG51bGwsXG4gIH07XG4gIC8vIOWIneasoeWGmeWFpemhuuS+v+iuoeeul+W9k+aciOWunuiKsVxuICBjb25zdCBzcGVudCA9IGF3YWl0IGNhbGNNb250aFNwZW50KHsgbW9udGg6IGRhdGEubW9udGgsIHRlYW06IGRhdGEudGVhbSwgZW52OiBkYXRhLmVudiB9KTtcbiAgY29uc3QgY3JlYXRlZCA9IGF3YWl0IHByaXNtYS5idWRnZXQuY3JlYXRlKHsgZGF0YTogeyAuLi5kYXRhLCBzcGVudENhY2hlOiBzcGVudCB9IH0pO1xuXG4gIGF3YWl0IHdyaXRlQXVkaXRMb2coeyBhY3Rpb246IFwiQlVER0VUX0NSRUFURVwiLCB0YXJnZXQ6IGNyZWF0ZWQuaWQsIG1ldGE6IGNyZWF0ZWQgfSk7XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGNyZWF0ZWQsIHsgc3RhdHVzOiAyMDEgfSk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwicmVxdWlyZVJvbGUiLCJjYWxjTW9udGhTcGVudCIsIndyaXRlQXVkaXRMb2ciLCJHRVQiLCJyZXEiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJwYWdlIiwiTWF0aCIsIm1heCIsIk51bWJlciIsImdldCIsInBhZ2VTaXplIiwibWluIiwibW9udGgiLCJ1bmRlZmluZWQiLCJ0ZWFtIiwiZW52Iiwid2hlcmUiLCJ0b3RhbCIsIml0ZW1zIiwiUHJvbWlzZSIsImFsbCIsImJ1ZGdldCIsImNvdW50IiwiZmluZE1hbnkiLCJvcmRlckJ5IiwibmFtZSIsInNraXAiLCJ0YWtlIiwianNvbiIsIlBPU1QiLCJib2R5IiwiZGF0YSIsIlN0cmluZyIsImFtb3VudCIsImN1cnJlbmN5Iiwibm90ZSIsInNwZW50IiwiY3JlYXRlZCIsImNyZWF0ZSIsInNwZW50Q2FjaGUiLCJhY3Rpb24iLCJ0YXJnZXQiLCJpZCIsIm1ldGEiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/budgets/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.7_next@14.2._2d08e4e0ce09cec4bf5d696254b2f904/node_modules/next-auth/providers/github.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/.pnpm/@next-auth+prisma-adapter@1_830164b8f52c6ba9a4a25a42dfce798b/node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n// lib/auth.ts\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma),\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GITHUB_ID || \"\",\n            clientSecret: process.env.GITHUB_SECRET || \"\"\n        })\n    ],\n    // ✅ 用 JWT，让 middleware 能识别登录态\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        // 首次登录赋予角色\n        async signIn ({ user }) {\n            const count = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.user.count();\n            // 只有首次创建用户没有 role 时才写入\n            try {\n                if (!user.role) {\n                    await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.user.update({\n                        where: {\n                            id: user.id\n                        },\n                        data: {\n                            role: count === 1 ? \"ADMIN\" : \"VIEWER\"\n                        }\n                    });\n                }\n            } catch  {}\n            return true;\n        },\n        // 把数据库里的角色塞进 JWT\n        async jwt ({ token, user }) {\n            // user 只在首次登录时存在；其后从 DB 读\n            if (user) {\n                token.role = user.role ?? \"VIEWER\";\n            } else if (!token.role && token.sub) {\n                const dbUser = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        id: token.sub\n                    }\n                });\n                token.role = dbUser?.role ?? \"VIEWER\";\n            }\n            return token;\n        },\n        // 再把 JWT 里的角色同步到 session\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.sub;\n                session.user.role = token.role ?? \"VIEWER\";\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/signin\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsY0FBYztBQUUwQztBQUNFO0FBQ3hCO0FBRTNCLE1BQU1HLGNBQStCO0lBQzFDQyxTQUFTSCx3RUFBYUEsQ0FBQ0MsMkNBQU1BO0lBQzdCRyxXQUFXO1FBQ1RMLHNFQUFjQSxDQUFDO1lBQ2JNLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUyxJQUFJO1lBQ25DQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGFBQWEsSUFBSTtRQUM3QztLQUNEO0lBRUQsOEJBQThCO0lBQzlCQyxTQUFTO1FBQUVDLFVBQVU7SUFBTTtJQUUzQkMsV0FBVztRQUNULFdBQVc7UUFDWCxNQUFNQyxRQUFPLEVBQUVDLElBQUksRUFBRTtZQUNuQixNQUFNQyxRQUFRLE1BQU1mLDJDQUFNQSxDQUFDYyxJQUFJLENBQUNDLEtBQUs7WUFDckMsdUJBQXVCO1lBQ3ZCLElBQUk7Z0JBQ0YsSUFBSSxDQUFDLEtBQWNDLElBQUksRUFBRTtvQkFDdkIsTUFBTWhCLDJDQUFNQSxDQUFDYyxJQUFJLENBQUNHLE1BQU0sQ0FBQzt3QkFDdkJDLE9BQU87NEJBQUVDLElBQUlMLEtBQUtLLEVBQUU7d0JBQUM7d0JBQ3JCQyxNQUFNOzRCQUFFSixNQUFNRCxVQUFVLElBQUksVUFBVTt3QkFBUztvQkFDakQ7Z0JBQ0Y7WUFDRixFQUFFLE9BQU0sQ0FBQztZQUNULE9BQU87UUFDVDtRQUVBLGlCQUFpQjtRQUNqQixNQUFNTSxLQUFJLEVBQUVDLEtBQUssRUFBRVIsSUFBSSxFQUFFO1lBQ3ZCLDBCQUEwQjtZQUMxQixJQUFJQSxNQUFNO2dCQUNSUSxNQUFNTixJQUFJLEdBQUcsS0FBY0EsSUFBSSxJQUFJO1lBQ3JDLE9BQU8sSUFBSSxDQUFDTSxNQUFNTixJQUFJLElBQUlNLE1BQU1DLEdBQUcsRUFBRTtnQkFDbkMsTUFBTUMsU0FBUyxNQUFNeEIsMkNBQU1BLENBQUNjLElBQUksQ0FBQ1csVUFBVSxDQUFDO29CQUFFUCxPQUFPO3dCQUFFQyxJQUFJRyxNQUFNQyxHQUFHO29CQUFDO2dCQUFFO2dCQUN2RUQsTUFBTU4sSUFBSSxHQUFHUSxRQUFRUixRQUFRO1lBQy9CO1lBQ0EsT0FBT007UUFDVDtRQUVBLHlCQUF5QjtRQUN6QixNQUFNWixTQUFRLEVBQUVBLE9BQU8sRUFBRVksS0FBSyxFQUFFO1lBQzlCLElBQUlaLFFBQVFJLElBQUksRUFBRTtnQkFDZkosUUFBUUksSUFBSSxDQUFTSyxFQUFFLEdBQUdHLE1BQU1DLEdBQUc7Z0JBQ25DYixRQUFRSSxJQUFJLENBQVNFLElBQUksR0FBRyxNQUFlQSxJQUFJLElBQUk7WUFDdEQ7WUFDQSxPQUFPTjtRQUNUO0lBQ0Y7SUFFQWdCLE9BQU87UUFBRWIsUUFBUTtJQUFVO0FBQzdCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5vcHMtYWRtaW4vLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9hdXRoLnRzXG5pbXBvcnQgTmV4dEF1dGgsIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvZGJcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSBhcyBhbnksXG4gIHByb3ZpZGVyczogW1xuICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQgfHwgXCJcIixcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCB8fCBcIlwiLFxuICAgIH0pLFxuICBdLFxuXG4gIC8vIOKchSDnlKggSldU77yM6K6pIG1pZGRsZXdhcmUg6IO96K+G5Yir55m75b2V5oCBXG4gIHNlc3Npb246IHsgc3RyYXRlZ3k6IFwiand0XCIgfSxcblxuICBjYWxsYmFja3M6IHtcbiAgICAvLyDpppbmrKHnmbvlvZXotYvkuojop5LoibJcbiAgICBhc3luYyBzaWduSW4oeyB1c2VyIH0pIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLnVzZXIuY291bnQoKTtcbiAgICAgIC8vIOWPquaciemmluasoeWIm+W7uueUqOaIt+ayoeaciSByb2xlIOaXtuaJjeWGmeWFpVxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCEodXNlciBhcyBhbnkpLnJvbGUpIHtcbiAgICAgICAgICBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHVzZXIuaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHsgcm9sZTogY291bnQgPT09IDEgPyBcIkFETUlOXCIgOiBcIlZJRVdFUlwiIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2gge31cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICAvLyDmiormlbDmja7lupPph4znmoTop5LoibLloZ7ov5sgSldUXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgLy8gdXNlciDlj6rlnKjpppbmrKHnmbvlvZXml7blrZjlnKjvvJvlhbblkI7ku44gREIg6K+7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5yb2xlID0gKHVzZXIgYXMgYW55KS5yb2xlID8/IFwiVklFV0VSXCI7XG4gICAgICB9IGVsc2UgaWYgKCF0b2tlbi5yb2xlICYmIHRva2VuLnN1Yikge1xuICAgICAgICBjb25zdCBkYlVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IHRva2VuLnN1YiB9IH0pO1xuICAgICAgICB0b2tlbi5yb2xlID0gZGJVc2VyPy5yb2xlID8/IFwiVklFV0VSXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcblxuICAgIC8vIOWGjeaKiiBKV1Qg6YeM55qE6KeS6Imy5ZCM5q2l5YiwIHNlc3Npb25cbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHNlc3Npb24udXNlcikge1xuICAgICAgICAoc2Vzc2lvbi51c2VyIGFzIGFueSkuaWQgPSB0b2tlbi5zdWI7XG4gICAgICAgIChzZXNzaW9uLnVzZXIgYXMgYW55KS5yb2xlID0gKHRva2VuIGFzIGFueSkucm9sZSA/PyBcIlZJRVdFUlwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcblxuICBwYWdlczogeyBzaWduSW46IFwiL3NpZ25pblwiIH0sXG59O1xuIl0sIm5hbWVzIjpbIkdpdGh1YlByb3ZpZGVyIiwiUHJpc21hQWRhcHRlciIsInByaXNtYSIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9TRUNSRVQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJ1c2VyIiwiY291bnQiLCJyb2xlIiwidXBkYXRlIiwid2hlcmUiLCJpZCIsImRhdGEiLCJqd3QiLCJ0b2tlbiIsInN1YiIsImRiVXNlciIsImZpbmRVbmlxdWUiLCJwYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/authz.ts":
/*!**********************!*\
  !*** ./lib/authz.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSessionUser: () => (/* binding */ getSessionUser),\n/* harmony export */   hasRole: () => (/* binding */ hasRole),\n/* harmony export */   requireLogin: () => (/* binding */ requireLogin),\n/* harmony export */   requireRole: () => (/* binding */ requireRole)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@14.2.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.7_next@14.2._2d08e4e0ce09cec4bf5d696254b2f904/node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ \"(rsc)/./lib/auth.ts\");\n// lib/authz.ts\n\n\n\n/** 取当前登录用户（服务端） */ async function getSessionUser() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    // 允许 session.user 被你在 NextAuth callbacks 里扩展的字段（如 role）\n    return session?.user ?? null;\n}\n/** 未登录直接 401 */ async function requireLogin() {\n    const user = await getSessionUser();\n    if (!user) {\n        // 抛出一个可被 route 捕获的 Response（App Router 会正确返回）\n        throw next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"UNAUTHORIZED\"\n        }, {\n            status: 401\n        });\n    }\n    return user;\n}\n/** 角色校验，不通过直接 403；返回用户对象便于继续使用 */ async function requireRole(roles = [\n    \"ADMIN\"\n]) {\n    const user = await requireLogin();\n    const role = user.role ?? \"VIEWER\";\n    if (!roles.includes(role)) {\n        throw next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"FORBIDDEN\",\n            need: roles,\n            got: role\n        }, {\n            status: 403\n        });\n    }\n    return user;\n}\n/** 仅做布尔判断，不抛错，适合页面级条件渲染 */ async function hasRole(roles = [\n    \"ADMIN\"\n]) {\n    const user = await getSessionUser();\n    if (!user) return false;\n    const role = user.role ?? \"VIEWER\";\n    return roles.includes(role);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aHoudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxlQUFlO0FBQzRCO0FBQ0U7QUFDUjtBQVlyQyxpQkFBaUIsR0FDVixlQUFlRztJQUNwQixNQUFNQyxVQUFVLE1BQU1ILDJEQUFnQkEsQ0FBQ0MsOENBQVdBO0lBQ2xELHdEQUF3RDtJQUN4RCxPQUFPLFNBQVVHLFFBQXdCO0FBQzNDO0FBRUEsY0FBYyxHQUNQLGVBQWVDO0lBQ3BCLE1BQU1ELE9BQU8sTUFBTUY7SUFDbkIsSUFBSSxDQUFDRSxNQUFNO1FBQ1QsOENBQThDO1FBQzlDLE1BQU1MLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFlLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ25FO0lBQ0EsT0FBT0o7QUFDVDtBQUVBLGdDQUFnQyxHQUN6QixlQUFlSyxZQUFZQyxRQUFnQjtJQUFDO0NBQVE7SUFDekQsTUFBTU4sT0FBTyxNQUFNQztJQUNuQixNQUFNTSxPQUFjUCxLQUFLTyxJQUFJLElBQUk7SUFDakMsSUFBSSxDQUFDRCxNQUFNRSxRQUFRLENBQUNELE9BQU87UUFDekIsTUFBTVoscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFQyxPQUFPO1lBQWFNLE1BQU1IO1lBQU9JLEtBQUtIO1FBQUssR0FBRztZQUFFSCxRQUFRO1FBQUk7SUFDeEY7SUFDQSxPQUFPSjtBQUNUO0FBRUEseUJBQXlCLEdBQ2xCLGVBQWVXLFFBQVFMLFFBQWdCO0lBQUM7Q0FBUTtJQUNyRCxNQUFNTixPQUFPLE1BQU1GO0lBQ25CLElBQUksQ0FBQ0UsTUFBTSxPQUFPO0lBQ2xCLE1BQU1PLE9BQWNQLEtBQUtPLElBQUksSUFBSTtJQUNqQyxPQUFPRCxNQUFNRSxRQUFRLENBQUNEO0FBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlub3BzLWFkbWluLy4vbGliL2F1dGh6LnRzP2Q5MzciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL2F1dGh6LnRzXHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCIuL2F1dGhcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFJvbGUgPSBcIkFETUlOXCIgfCBcIlZJRVdFUlwiO1xyXG5cclxuZXhwb3J0IHR5cGUgU2Vzc2lvblVzZXIgPSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lPzogc3RyaW5nIHwgbnVsbDtcclxuICBlbWFpbD86IHN0cmluZyB8IG51bGw7XHJcbiAgaW1hZ2U/OiBzdHJpbmcgfCBudWxsO1xyXG4gIHJvbGU/OiBSb2xlOyAvLyDmsqHmnInml7bpu5jorqTmjIkgVklFV0VSIOWkhOeQhlxyXG59O1xyXG5cclxuLyoqIOWPluW9k+WJjeeZu+W9leeUqOaIt++8iOacjeWKoeerr++8iSAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2Vzc2lvblVzZXIoKTogUHJvbWlzZTxTZXNzaW9uVXNlciB8IG51bGw+IHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XHJcbiAgLy8g5YWB6K64IHNlc3Npb24udXNlciDooqvkvaDlnKggTmV4dEF1dGggY2FsbGJhY2tzIOmHjOaJqeWxleeahOWtl+aute+8iOWmgiByb2xl77yJXHJcbiAgcmV0dXJuIChzZXNzaW9uPy51c2VyIGFzIFNlc3Npb25Vc2VyKSA/PyBudWxsO1xyXG59XHJcblxyXG4vKiog5pyq55m75b2V55u05o6lIDQwMSAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWlyZUxvZ2luKCk6IFByb21pc2U8U2Vzc2lvblVzZXI+IHtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKTtcclxuICBpZiAoIXVzZXIpIHtcclxuICAgIC8vIOaKm+WHuuS4gOS4quWPr+iiqyByb3V0ZSDmjZXojrfnmoQgUmVzcG9uc2XvvIhBcHAgUm91dGVyIOS8muato+ehrui/lOWbnu+8iVxyXG4gICAgdGhyb3cgTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJVTkFVVEhPUklaRURcIiB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gIH1cclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuLyoqIOinkuiJsuagoemqjO+8jOS4jemAmui/h+ebtOaOpSA0MDPvvJvov5Tlm57nlKjmiLflr7nosaHkvr/kuo7nu6fnu63kvb/nlKggKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVSb2xlKHJvbGVzOiBSb2xlW10gPSBbXCJBRE1JTlwiXSk6IFByb21pc2U8U2Vzc2lvblVzZXI+IHtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgcmVxdWlyZUxvZ2luKCk7XHJcbiAgY29uc3Qgcm9sZTogUm9sZSA9ICh1c2VyLnJvbGUgPz8gXCJWSUVXRVJcIik7XHJcbiAgaWYgKCFyb2xlcy5pbmNsdWRlcyhyb2xlKSkge1xyXG4gICAgdGhyb3cgTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJGT1JCSURERU5cIiwgbmVlZDogcm9sZXMsIGdvdDogcm9sZSB9LCB7IHN0YXR1czogNDAzIH0pO1xyXG4gIH1cclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuLyoqIOS7heWBmuW4g+WwlOWIpOaWre+8jOS4jeaKm+mUme+8jOmAguWQiOmhtemdoue6p+adoeS7tua4suafkyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzUm9sZShyb2xlczogUm9sZVtdID0gW1wiQURNSU5cIl0pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKTtcclxuICBpZiAoIXVzZXIpIHJldHVybiBmYWxzZTtcclxuICBjb25zdCByb2xlOiBSb2xlID0gKHVzZXIucm9sZSA/PyBcIlZJRVdFUlwiKTtcclxuICByZXR1cm4gcm9sZXMuaW5jbHVkZXMocm9sZSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsImdldFNlc3Npb25Vc2VyIiwic2Vzc2lvbiIsInVzZXIiLCJyZXF1aXJlTG9naW4iLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJyZXF1aXJlUm9sZSIsInJvbGVzIiwicm9sZSIsImluY2x1ZGVzIiwibmVlZCIsImdvdCIsImhhc1JvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/authz.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// avoid creating many instances in dev hot-reload\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLGtEQUFrRDtBQUNsRCxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFHO0FBRW5FLElBQUlJLElBQXFDLEVBQUVILGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zpbm9wcy1hZG1pbi8uL2xpYi9kYi50cz8xZGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG4vLyBhdm9pZCBjcmVhdGluZyBtYW55IGluc3RhbmNlcyBpbiBkZXYgaG90LXJlbG9hZFxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQgfTtcblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPz8gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./lib/finops.ts":
/*!***********************!*\
  !*** ./lib/finops.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calcMonthSpent: () => (/* binding */ calcMonthSpent),\n/* harmony export */   writeAuditLog: () => (/* binding */ writeAuditLog)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var _prisma_client_runtime_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client/runtime/library */ \"@prisma/client/runtime/library\");\n/* harmony import */ var _prisma_client_runtime_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client_runtime_library__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// 计算某个月的实际花费（可选 team/env 过滤）\nasync function calcMonthSpent(params) {\n    const { month, team, env } = params;\n    // month: \"YYYY-MM\"\n    const start = new Date(`${month}-01T00:00:00.000Z`);\n    const end = new Date(start);\n    end.setUTCMonth(start.getUTCMonth() + 1);\n    const where = {\n        date: {\n            gte: start,\n            lt: end\n        }\n    };\n    if (team) where.team = team;\n    if (env) where.env = env;\n    const rows = await _lib_db__WEBPACK_IMPORTED_MODULE_0__.prisma.cost.findMany({\n        where,\n        select: {\n            cost: true\n        }\n    });\n    const sum = rows.reduce((acc, r)=>acc + Number(r.cost), 0);\n    return new _prisma_client_runtime_library__WEBPACK_IMPORTED_MODULE_1__.Decimal(sum.toFixed(6));\n}\n// 写一条审计日志（尽量别失败阻塞主流程）\nasync function writeAuditLog(entry) {\n    try {\n        await _lib_db__WEBPACK_IMPORTED_MODULE_0__.prisma.auditLog.create({\n            data: {\n                ...entry,\n                meta: entry.meta ?? undefined\n            }\n        });\n    } catch (e) {\n        console.error(\"audit log failed\", e);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZmlub3BzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtDO0FBQ3VCO0FBRXpELDZCQUE2QjtBQUN0QixlQUFlRSxlQUFlQyxNQUFvRTtJQUN2RyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxHQUFHLEVBQUUsR0FBR0g7SUFDN0IsbUJBQW1CO0lBQ25CLE1BQU1JLFFBQVEsSUFBSUMsS0FBSyxDQUFDLEVBQUVKLE1BQU0saUJBQWlCLENBQUM7SUFDbEQsTUFBTUssTUFBTSxJQUFJRCxLQUFLRDtJQUNyQkUsSUFBSUMsV0FBVyxDQUFDSCxNQUFNSSxXQUFXLEtBQUs7SUFFdEMsTUFBTUMsUUFBYTtRQUNqQkMsTUFBTTtZQUFFQyxLQUFLUDtZQUFPUSxJQUFJTjtRQUFJO0lBQzlCO0lBQ0EsSUFBSUosTUFBTU8sTUFBTVAsSUFBSSxHQUFHQTtJQUN2QixJQUFJQyxLQUFLTSxNQUFNTixHQUFHLEdBQUdBO0lBRXJCLE1BQU1VLE9BQU8sTUFBTWhCLDJDQUFNQSxDQUFDaUIsSUFBSSxDQUFDQyxRQUFRLENBQUM7UUFDdENOO1FBQ0FPLFFBQVE7WUFBRUYsTUFBTTtRQUFLO0lBQ3ZCO0lBRUEsTUFBTUcsTUFBTUosS0FBS0ssTUFBTSxDQUFDLENBQUNDLEtBQUtDLElBQU1ELE1BQU1FLE9BQU9ELEVBQUVOLElBQUksR0FBRztJQUMxRCxPQUFPLElBQUloQixtRUFBT0EsQ0FBQ21CLElBQUlLLE9BQU8sQ0FBQztBQUNqQztBQUVBLHNCQUFzQjtBQUNmLGVBQWVDLGNBQWNDLEtBTW5DO0lBQ0MsSUFBSTtRQUNGLE1BQU0zQiwyQ0FBTUEsQ0FBQzRCLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO1lBQUVDLE1BQU07Z0JBQUUsR0FBR0gsS0FBSztnQkFBRUksTUFBTUosTUFBTUksSUFBSSxJQUFJQztZQUFVO1FBQUU7SUFDbkYsRUFBRSxPQUFPQyxHQUFHO1FBQ1ZDLFFBQVFDLEtBQUssQ0FBQyxvQkFBb0JGO0lBQ3BDO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5vcHMtYWRtaW4vLi9saWIvZmlub3BzLnRzPzQ3MTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL2RiXCI7XHJcbmltcG9ydCB7IERlY2ltYWwgfSBmcm9tIFwiQHByaXNtYS9jbGllbnQvcnVudGltZS9saWJyYXJ5XCI7XHJcblxyXG4vLyDorqHnrpfmn5DkuKrmnIjnmoTlrp7pmYXoirHotLnvvIjlj6/pgIkgdGVhbS9lbnYg6L+H5ruk77yJXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxjTW9udGhTcGVudChwYXJhbXM6IHsgbW9udGg6IHN0cmluZzsgdGVhbT86IHN0cmluZyB8IG51bGw7IGVudj86IHN0cmluZyB8IG51bGwgfSkge1xyXG4gIGNvbnN0IHsgbW9udGgsIHRlYW0sIGVudiB9ID0gcGFyYW1zO1xyXG4gIC8vIG1vbnRoOiBcIllZWVktTU1cIlxyXG4gIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoYCR7bW9udGh9LTAxVDAwOjAwOjAwLjAwMFpgKTtcclxuICBjb25zdCBlbmQgPSBuZXcgRGF0ZShzdGFydCk7XHJcbiAgZW5kLnNldFVUQ01vbnRoKHN0YXJ0LmdldFVUQ01vbnRoKCkgKyAxKTtcclxuXHJcbiAgY29uc3Qgd2hlcmU6IGFueSA9IHtcclxuICAgIGRhdGU6IHsgZ3RlOiBzdGFydCwgbHQ6IGVuZCB9LFxyXG4gIH07XHJcbiAgaWYgKHRlYW0pIHdoZXJlLnRlYW0gPSB0ZWFtO1xyXG4gIGlmIChlbnYpIHdoZXJlLmVudiA9IGVudjtcclxuXHJcbiAgY29uc3Qgcm93cyA9IGF3YWl0IHByaXNtYS5jb3N0LmZpbmRNYW55KHtcclxuICAgIHdoZXJlLFxyXG4gICAgc2VsZWN0OiB7IGNvc3Q6IHRydWUgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc3VtID0gcm93cy5yZWR1Y2UoKGFjYywgcikgPT4gYWNjICsgTnVtYmVyKHIuY29zdCksIDApO1xyXG4gIHJldHVybiBuZXcgRGVjaW1hbChzdW0udG9GaXhlZCg2KSk7XHJcbn1cclxuXHJcbi8vIOWGmeS4gOadoeWuoeiuoeaXpeW/l++8iOWwvemHj+WIq+Wksei0pemYu+WhnuS4u+a1geeoi++8iVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd3JpdGVBdWRpdExvZyhlbnRyeToge1xyXG4gIGFjdG9ySWQ/OiBzdHJpbmcgfCBudWxsO1xyXG4gIGFjdG9yRW1haWw/OiBzdHJpbmcgfCBudWxsO1xyXG4gIGFjdGlvbjogc3RyaW5nO1xyXG4gIHRhcmdldD86IHN0cmluZyB8IG51bGw7XHJcbiAgbWV0YT86IGFueTtcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHsgZGF0YTogeyAuLi5lbnRyeSwgbWV0YTogZW50cnkubWV0YSA/PyB1bmRlZmluZWQgfSB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiYXVkaXQgbG9nIGZhaWxlZFwiLCBlKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsIkRlY2ltYWwiLCJjYWxjTW9udGhTcGVudCIsInBhcmFtcyIsIm1vbnRoIiwidGVhbSIsImVudiIsInN0YXJ0IiwiRGF0ZSIsImVuZCIsInNldFVUQ01vbnRoIiwiZ2V0VVRDTW9udGgiLCJ3aGVyZSIsImRhdGUiLCJndGUiLCJsdCIsInJvd3MiLCJjb3N0IiwiZmluZE1hbnkiLCJzZWxlY3QiLCJzdW0iLCJyZWR1Y2UiLCJhY2MiLCJyIiwiTnVtYmVyIiwidG9GaXhlZCIsIndyaXRlQXVkaXRMb2ciLCJlbnRyeSIsImF1ZGl0TG9nIiwiY3JlYXRlIiwiZGF0YSIsIm1ldGEiLCJ1bmRlZmluZWQiLCJlIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/finops.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.2.17_react-dom@18.3.1_react@18.3.1__react@18.3.1","vendor-chunks/next-auth@4.24.7_next@14.2._2d08e4e0ce09cec4bf5d696254b2f904","vendor-chunks/jose@4.15.9","vendor-chunks/openid-client@5.7.1","vendor-chunks/@babel+runtime@7.28.4","vendor-chunks/oauth@0.9.15","vendor-chunks/object-hash@2.2.0","vendor-chunks/preact@10.27.2","vendor-chunks/uuid@8.3.2","vendor-chunks/@next-auth+prisma-adapter@1_830164b8f52c6ba9a4a25a42dfce798b","vendor-chunks/yallist@4.0.0","vendor-chunks/preact-render-to-string@5.2.6_preact@10.27.2","vendor-chunks/lru-cache@6.0.0","vendor-chunks/cookie@0.5.0","vendor-chunks/oidc-token-hash@5.2.0","vendor-chunks/@panva+hkdf@1.2.1"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@14.2.17_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbudgets%2Froute&page=%2Fapi%2Fbudgets%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbudgets%2Froute.ts&appDir=E%3A%5Cfinops-admin-auth-rbac%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfinops-admin-auth-rbac&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();