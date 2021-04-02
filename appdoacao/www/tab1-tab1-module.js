(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\r\n    <ion-card color=\"primary\">\r\n\r\n    <ion-card-header>\r\n      <ion-card-title>Olá, Ricardo!</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      Seja bem-vindo (a) ao aplicativo \"Doedu\"!     \r\n    </ion-card-content>\r\n\r\n    <ion-card-content>\r\n      Este é o aplicativo oficial para a campanha “Doe Educação”.\r\n      Um trabalho social que une pessoas de bom coração a pessoas que precisam de ajuda para a aquisição de materiais escolares.\r\n      A aplicação servirá como intermediadora, não fornecendo os materiais para compra, tampouco permitindo doações em dinheiro.\r\n      Doam-se apenas materiais escolares devidamente listados.\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-searchbar placeholder=\"ID da doação\"></ion-searchbar>\r\n\r\n  <ion-card>\r\n    <ion-item>\r\n      <ion-icon name=\"happy-outline\" slot=\"start\"></ion-icon>\r\n      <ion-label>Cadastrar aluno (a)</ion-label>\r\n      <ion-button color=\"purple\" fill=\"solid\" slot=\"end\">Acessar</ion-button>\r\n    </ion-item>\r\n  \r\n    <ion-card-content>\r\n      Pai, mãe ou responsável cadastra o (a) aluno (a) e faz uma lista com os materiais que necessita.\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-item>\r\n      <ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\r\n      <ion-label>Área do responsável</ion-label>\r\n      <ion-button color=\"purple\" fill=\"solid\" slot=\"end\">Acessar</ion-button>\r\n    </ion-item>\r\n  \r\n    <ion-card-content>\r\n      Já fez o cadastro? Então clique aqui e saiba as propostas de doação!\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-item>\r\n      <ion-icon name=\"people-outline\" slot=\"start\"></ion-icon>      \r\n      <ion-label>Doação idenficada</ion-label>\r\n      <ion-button color=\"purple\" fill=\"solid\" slot=\"end\">Acessar</ion-button>\r\n      \r\n    </ion-item>\r\n  \r\n    <ion-card-content>\r\n      O(a) doador(a) fará seu cadastro, acessará uma lista de alunos (as) com os materiais cadastrados e fará a proposta de doação.\r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n  <ion-card>\r\n    <ion-item>\r\n      <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\r\n      <ion-label>Doação anônima</ion-label>\r\n      <ion-button color=\"purple\" fill=\"solid\" slot=\"end\">Acessar</ion-button>\r\n    </ion-item>\r\n  \r\n    <ion-card-content>\r\n      O(a) doador(a) vai direto para a lista de alunos e materiais cadastrados para fazer a proposta de doação, porém, não será identificado.\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Tab1Page = class Tab1Page {
    constructor() { }
};
Tab1Page.ctorParameters = () => [];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-content {\n  font-family: Inter !important;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1jb250ZW50eyBcclxuICAgIGZvbnQtZmFtaWx5OkludGVyICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map