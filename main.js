(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<p>This is a simple demonstration of how to write Angular Typescript code to use the Google Sheets API. I wrote it because when I came to work out how to do this I found a lack of a good examples elsewhere.</p>\r\n<p>It's actually very simple to do - you don't need to use a secret key or an API key or pass authorisation tokens about in your code. Google's OAuth and API code handle all that for you seamlessly. This contrasts with Google's own documentation which, at\r\n    the time of writing, only had examples that did pass an API key and an authorisation token in the code even though the same documentation says you shouldn't put an API key in browser code and even though it works without passing an authorisation token\r\n    around in the code. I am unduly stupid though so perhaps I was missing something.</p>\r\n<p>The underlying code for this demonstration is free open source software issued under the MIT license and can be found on Github at <a href=\"https://github.com/nadim-khan/Ang-GoogleApis\">https://github.com/nadim-khan/Ang-GoogleApis</a>. That site also\r\n    contains a readme file with information about some of the notable aspects of the code that I hope you will find helpful if you want to re-use the code in your own app.</p>\r\n<p>Note that you need to enable third-party cookies in your browser settings as Google's OAuth needs them.</p>\r\n<p>My name is David Ma and I'm the oldest, fattest and most foolish man in the world.</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\r\n    <div class=\"container\">\r\n        <a routerLink=\"/\" class=\"navbar-brand\">Angular Google sheet</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavBar()\" [attr.aria-expanded]=\"showNav\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n\t\t\t<span class=\"navbar-toggler-icon\"></span>\r\n\t\t  </button>\r\n        <div class=\"collapse navbar-collapse\" [class.show]=\"showNav\" id=\"navbarCollapse\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item\">\r\n                    <a routerLink=\"/simple\" routerLinkActive=\"active\">Simple Demo</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a routerLink=\"/hooks\" routerLinkActive=\"active\">Hooks Demo</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a routerLink=\"/about\" routerLinkActive=\"active\">About</a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"navbar-nav justify-content-end\">\r\n                <div *ngIf=\"isSignedIn\">\r\n                    <button class=\"sign-out\" matTooltip=\"Sign out\" (click)=\"signOut()\">Sign out\r\n\t\t\t\t\t\t</button>\r\n                </div>\r\n                <div [style.display]=\"googleDisplay\">\r\n                    <div class=\"g-signin2\" data-onsuccess=\"onSignIn\" data-theme=\"dark\">\r\n                    </div>\r\n                </div>\r\n            </ul>\r\n\r\n        </div>\r\n    </div>\r\n</nav>\r\n<h1>Demonstration of Using Google Sheets API</h1>\r\n<nav>\r\n    <a routerLink=\"/simple\" routerLinkActive=\"active\">\r\n\t\tGoogle Sheet</a>\r\n    <a routerLink=\"/hooks\" routerLinkActive=\"active\">\r\n\t\tUser Auth</a>\r\n    <a routerLink=\"/about\" routerLinkActive=\"active\">\r\n\t\tAbout</a>\r\n</nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hooks/hooks.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hooks/hooks.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<section *ngFor=\"let line of output\">\r\n    {{ line }}\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/simple/simple.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/simple/simple.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<form (ngSubmit)=\"onSubmit()\" #demoForm=\"ngForm\">\r\n\t<div class=\"form-group\">\r\n\t\t<label>Spreadsheet ID (the long text between the /d/ and the /edit/ in the address)</label>\r\n\t\t<input type=\"text\" class=\"form-control\" id=\"sheetId\" required [(ngModel)]=\"model.sheetId\" name=\"sheetId\" #sheetId=\"ngModel\">\r\n\t</div>\r\n\r\n\t<div class=\"form-group\">\r\n\t\t<label>Range e.g. Sheet1!A1:C</label>\r\n\t\t<input type=\"text\" class=\"form-control\" id=\"range\" [(ngModel)]=\"model.range\" name=\"range\">\r\n\t</div>\r\n\r\n\t<button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n\r\n</form>\r\n<br>\r\n<pre>{{ output }}</pre>\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'about', component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] }
];
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            declarations: []
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}()); // End of class AboutComponent



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: 'privacy', redirectTo: 'privacy.html' },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', component: _not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
                    enableTracing: false // <-- debugging purposes only
                })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".g-signin2 {\r\n    float: right;\r\n  }\r\n\r\n  .sign-out {\r\n    background-color: #4285f4;\r\n    color: white;\r\n    float: right;\r\n    font-size: 19px;\r\n  \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlOztFQUVqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmctc2lnbmluMiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuc2lnbi1vdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVmNDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICBcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-auth.service */ "./src/app/google-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AppComponent = /** @class */ (function () {
    function AppComponent(gdata, cd) {
        var _this = this;
        this.gdata = gdata;
        this.cd = cd;
        this.isSignedIn = false;
        this.googleDisplay = "block";
        window.onSignIn = function (googleUser) { return _this.onSignIn(googleUser); };
    }
    AppComponent.prototype.onSignIn = function (googleUser) {
        this.gdata.onSignIn(googleUser);
        this.isSignedIn = this.gdata.isSignedIn;
        this.googleDisplay = this.gdata.googleDisplay;
        this.cd.detectChanges();
    };
    AppComponent.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("calling gdata signout...");
                        return [4 /*yield*/, this.gdata.signOut()];
                    case 1:
                        _a.sent();
                        console.log("gdata signout finished");
                        this.isSignedIn = this.gdata.isSignedIn;
                        this.googleDisplay = this.gdata.googleDisplay;
                        this.cd.detectChanges();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_google_auth_service__WEBPACK_IMPORTED_MODULE_1__["GoogleAuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _google_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./google-auth.service */ "./src/app/google-auth.service.ts");
/* harmony import */ var _js_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js-loader.service */ "./src/app/js-loader.service.ts");
/* harmony import */ var _simple_simple_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./simple/simple.component */ "./src/app/simple/simple.component.ts");
/* harmony import */ var _hooks_hooks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/hooks.component */ "./src/app/hooks/hooks.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _simple_simple_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./simple/simple-routing.module */ "./src/app/simple/simple-routing.module.ts");
/* harmony import */ var _hooks_hooks_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hooks/hooks-routing.module */ "./src/app/hooks/hooks-routing.module.ts");
/* harmony import */ var _about_about_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about-routing.module */ "./src/app/about/about-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _simple_simple_routing_module__WEBPACK_IMPORTED_MODULE_11__["SimpleRoutingModule"],
                _hooks_hooks_routing_module__WEBPACK_IMPORTED_MODULE_12__["HooksRoutingModule"],
                _about_about_routing_module__WEBPACK_IMPORTED_MODULE_13__["AboutRoutingModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _simple_simple_component__WEBPACK_IMPORTED_MODULE_7__["SimpleComponent"],
                _hooks_hooks_component__WEBPACK_IMPORTED_MODULE_8__["HooksComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            providers: [
                _js_loader_service__WEBPACK_IMPORTED_MODULE_6__["JsLoaderService"],
                _google_auth_service__WEBPACK_IMPORTED_MODULE_5__["GoogleAuthService"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/google-auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/google-auth.service.ts ***!
  \****************************************/
/*! exports provided: GoogleAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAuthService", function() { return GoogleAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _js_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-loader.service */ "./src/app/js-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var GoogleAuthService = /** @class */ (function () {
    function GoogleAuthService(loader) {
        this.loader = loader;
        this.javascriptFile = "https://apis.google.com/js/platform.js";
        this.isSignedIn = false;
        this.googleDisplay = "block";
        this.signIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.signedOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        console.log("Loading the javascript API file.");
        this.loader.loadjs(this.javascriptFile).then(function () {
            // file loaded
        });
    }
    GoogleAuthService.prototype.onSignIn = function (googleUser) {
        this.googleUser = googleUser;
        console.log("signed in");
        this.isSignedIn = true;
        this.googleDisplay = "none";
        this.signIn.emit();
    };
    GoogleAuthService.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var auth2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Signing out.');
                        auth2 = gapi.auth2.getAuthInstance();
                        return [4 /*yield*/, auth2.signOut().then(function () {
                                console.log("signed out");
                                _this.isSignedIn = false;
                                _this.googleDisplay = "block";
                                _this.signedOut.emit();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GoogleAuthService.prototype.loadClient = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) {
                    gapi.load("client", function () {
                        resolve();
                    }, function (error) {
                        console.log("Error loading client: "
                            + JSON.stringify(error));
                    });
                });
                return [2 /*return*/, p];
            });
        });
    };
    GoogleAuthService.prototype.loadSheetsAPI = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) {
                    gapi.client.load('https://sheets.googleapis.com/$discovery/rest?version=v4')
                        .then(function () {
                        resolve();
                    }, function (error) {
                        console.log("Error loading SheetsAPI: "
                            + JSON.stringify(error));
                    });
                });
                return [2 /*return*/, p];
            });
        });
    };
    GoogleAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_js_loader_service__WEBPACK_IMPORTED_MODULE_1__["JsLoaderService"]])
    ], GoogleAuthService);
    return GoogleAuthService;
}());



/***/ }),

/***/ "./src/app/hooks/hooks-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/hooks/hooks-routing.module.ts ***!
  \***********************************************/
/*! exports provided: HooksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HooksRoutingModule", function() { return HooksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hooks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks.component */ "./src/app/hooks/hooks.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'hooks', component: _hooks_component__WEBPACK_IMPORTED_MODULE_2__["HooksComponent"] }
];
var HooksRoutingModule = /** @class */ (function () {
    function HooksRoutingModule() {
    }
    HooksRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            declarations: []
        })
    ], HooksRoutingModule);
    return HooksRoutingModule;
}());



/***/ }),

/***/ "./src/app/hooks/hooks.component.css":
/*!*******************************************!*\
  !*** ./src/app/hooks/hooks.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvb2tzL2hvb2tzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/hooks/hooks.component.ts":
/*!******************************************!*\
  !*** ./src/app/hooks/hooks.component.ts ***!
  \******************************************/
/*! exports provided: HooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HooksComponent", function() { return HooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../google-auth.service */ "./src/app/google-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HooksComponent = /** @class */ (function () {
    function HooksComponent(gdata) {
        var _this = this;
        this.gdata = gdata;
        this.output = new Array();
        this.output.push("Sign in to see what information it provides.");
        // Check whether it's already signed in, otherwise wait for it
        // to be.
        if (this.gdata.isSignedIn) {
            this.showData();
        }
        // Listen for the signin
        this.gdata.signIn.subscribe(function () {
            _this.showData();
        });
        // Listen for signout
        this.gdata.signedOut.subscribe(function () {
            _this.clearData();
        });
    }
    HooksComponent.prototype.ngOnInit = function () { };
    HooksComponent.prototype.showData = function () {
        // Useful data for your client-side scripts:
        var profile = this.gdata.googleUser.getBasicProfile();
        this.output.length = 0;
        this.output.push("Here are some of the data available from OAuth:");
        this.output.push("(But note that you don't need to code with any of it to access spreadsheets - Google handles it all for you.)");
        this.output.push("ID: " + profile.getId());
        // Don't send this directly to your server!
        this.output.push('Full Name: ' + profile.getName());
        this.output.push('Given Name: ' + profile.getGivenName());
        this.output.push('Family Name: ' + profile.getFamilyName());
        this.output.push("Image URL: " + profile.getImageUrl());
        this.output.push("Email: " + profile.getEmail());
        // The ID token you need to pass to your backend:
        var id_token = this.gdata.googleUser.getAuthResponse().id_token;
        this.output.push("ID Token: " + id_token);
    };
    HooksComponent.prototype.clearData = function () {
        this.output.length = 0;
        this.output.push("Sign in to see what information it provides.");
    };
    HooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hooks',
            template: __webpack_require__(/*! raw-loader!./hooks.component.html */ "./node_modules/raw-loader/index.js!./src/app/hooks/hooks.component.html"),
            styles: [__webpack_require__(/*! ./hooks.component.css */ "./src/app/hooks/hooks.component.css")]
        }),
        __metadata("design:paramtypes", [_google_auth_service__WEBPACK_IMPORTED_MODULE_1__["GoogleAuthService"]])
    ], HooksComponent);
    return HooksComponent;
}()); // End of class HooksComponent



/***/ }),

/***/ "./src/app/js-loader.service.ts":
/*!**************************************!*\
  !*** ./src/app/js-loader.service.ts ***!
  \**************************************/
/*! exports provided: JsLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsLoaderService", function() { return JsLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JsLoaderService = /** @class */ (function () {
    function JsLoaderService() {
    }
    JsLoaderService.prototype.loadjs = function (url) {
        var p = new Promise(function (resolve) {
            var node = document.createElement('script');
            node.src = url;
            node.type = 'text/javascript';
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0]
                .appendChild(node);
            node.onload = function () {
                console.log("The javascript file " + url + " has been loaded.");
                resolve();
            };
        });
        return p;
    };
    JsLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], JsLoaderService);
    return JsLoaderService;
}());



/***/ }),

/***/ "./src/app/not-found.component.ts":
/*!****************************************!*\
  !*** ./src/app/not-found.component.ts ***!
  \****************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '<h2>Page not found</h2>'
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/simple/simple-request.ts":
/*!******************************************!*\
  !*** ./src/app/simple/simple-request.ts ***!
  \******************************************/
/*! exports provided: SimpleRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleRequest", function() { return SimpleRequest; });
var SimpleRequest = /** @class */ (function () {
    function SimpleRequest() {
    }
    return SimpleRequest;
}());



/***/ }),

/***/ "./src/app/simple/simple-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/simple/simple-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SimpleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleRoutingModule", function() { return SimpleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _simple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple.component */ "./src/app/simple/simple.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'simple', component: _simple_component__WEBPACK_IMPORTED_MODULE_2__["SimpleComponent"] }
];
var SimpleRoutingModule = /** @class */ (function () {
    function SimpleRoutingModule() {
    }
    SimpleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            declarations: []
        })
    ], SimpleRoutingModule);
    return SimpleRoutingModule;
}());



/***/ }),

/***/ "./src/app/simple/simple.component.css":
/*!*********************************************!*\
  !*** ./src/app/simple/simple.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbXBsZS9zaW1wbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/simple/simple.component.ts":
/*!********************************************!*\
  !*** ./src/app/simple/simple.component.ts ***!
  \********************************************/
/*! exports provided: SimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleComponent", function() { return SimpleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _simple_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-request */ "./src/app/simple/simple-request.ts");
/* harmony import */ var _google_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-auth.service */ "./src/app/google-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var SimpleComponent = /** @class */ (function () {
    function SimpleComponent(cd, gauth) {
        this.cd = cd;
        this.gauth = gauth;
        this.model = new _simple_request__WEBPACK_IMPORTED_MODULE_1__["SimpleRequest"]();
        this.output = "Enter a spreadsheet id and range then press submit. "
            + "Ensure that third-party cookies are enabled in your browser settings.";
    }
    SimpleComponent.prototype.ngOnInit = function () { };
    SimpleComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.output = "Processing submission...";
                        console.log(JSON.stringify(this.model));
                        return [4 /*yield*/, this.gauth.loadClient()];
                    case 1:
                        _a.sent();
                        console.log("client loaded");
                        return [4 /*yield*/, this.gauth.loadSheetsAPI()];
                    case 2:
                        _a.sent();
                        console.log("sheets v4 loaded");
                        gapi.client.sheets.spreadsheets.values.get({
                            spreadsheetId: this.model.sheetId,
                            range: this.model.range
                        }).then(function (response) {
                            console.log("Range retrieved: "
                                + response.result.values[0]);
                            _this.output = "Data found: \n";
                            for (var _i = 0, _a = response.result.values; _i < _a.length; _i++) {
                                var v = _a[_i];
                                _this.output += v + "\n";
                            }
                            _this.cd.detectChanges();
                        }, function (error) {
                            _this.output = "Error: \n";
                            _this.output += error.result.error.message + "\n";
                            _this.cd.detectChanges();
                        });
                        return [2 /*return*/];
                }
            });
        });
    }; // End of onSubmit method
    SimpleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-simple',
            template: __webpack_require__(/*! raw-loader!./simple.component.html */ "./node_modules/raw-loader/index.js!./src/app/simple/simple.component.html"),
            styles: [__webpack_require__(/*! ./simple.component.css */ "./src/app/simple/simple.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _google_auth_service__WEBPACK_IMPORTED_MODULE_2__["GoogleAuthService"]])
    ], SimpleComponent);
    return SimpleComponent;
}()); // End of class SimpleComponent



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Angular Projects\google-sheets-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map