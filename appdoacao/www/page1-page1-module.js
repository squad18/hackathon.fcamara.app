(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page1-page1-module"],{

/***/ "5dPE":
/*!***********************************************!*\
  !*** ./src/app/page1/page1-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Page1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1PageRoutingModule", function() { return Page1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page1.page */ "LF6J");




const routes = [
    {
        path: '',
        component: _page1_page__WEBPACK_IMPORTED_MODULE_3__["Page1Page"]
    }
];
let Page1PageRoutingModule = class Page1PageRoutingModule {
};
Page1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Page1PageRoutingModule);



/***/ }),

/***/ "LF6J":
/*!*************************************!*\
  !*** ./src/app/page1/page1.page.ts ***!
  \*************************************/
/*! exports provided: Page1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1Page", function() { return Page1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_page1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./page1.page.html */ "XGIR");
/* harmony import */ var _page1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page1.page.scss */ "xqQM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Page1Page = class Page1Page {
    constructor() { }
    ngOnInit() {
    }
};
Page1Page.ctorParameters = () => [];
Page1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-page1',
        template: _raw_loader_page1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_page1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Page1Page);



/***/ }),

/***/ "Tul/":
/*!***************************************!*\
  !*** ./src/app/page1/page1.module.ts ***!
  \***************************************/
/*! exports provided: Page1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1PageModule", function() { return Page1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _page1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page1-routing.module */ "5dPE");
/* harmony import */ var _page1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page1.page */ "LF6J");







let Page1PageModule = class Page1PageModule {
};
Page1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _page1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Page1PageRoutingModule"]
        ],
        declarations: [_page1_page__WEBPACK_IMPORTED_MODULE_6__["Page1Page"]]
    })
], Page1PageModule);



/***/ }),

/***/ "XGIR":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page1/page1.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>page1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "xqQM":
/*!***************************************!*\
  !*** ./src/app/page1/page1.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlMS5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=page1-page1-module.js.map