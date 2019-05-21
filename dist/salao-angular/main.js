(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _tasks_task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks/task-detail/task-detail.component */ "./src/app/tasks/task-detail/task-detail.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up-form/sign-up-form.component */ "./src/app/sign-up-form/sign-up-form.component.ts");
/* harmony import */ var _sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in-form/sign-in-form.component */ "./src/app/sign-in-form/sign-in-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'tasks', component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_2__["TasksComponent"] },
    { path: 'tasks/:id', component: _tasks_task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_3__["TaskDetailComponent"] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'sign-up', component: _sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_5__["signUpFormComponent"] },
    { path: 'sign-in', component: _sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_6__["signInFormComponent"] }
]);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [ROUTES],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<div class=\"container\">\n<router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var angular2_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-token */ "./node_modules/angular2-token/fesm5/angular2-token.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(tokenService) {
        this.tokenService = tokenService;
        this.title = 'Projeto Teste';
        this.tokenService.init({
            apiBase: 'http://misslaura.herokuapp.com'
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_token__WEBPACK_IMPORTED_MODULE_0__["Angular2TokenService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _tasks_task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks/task-detail/task-detail.component */ "./src/app/tasks/task-detail/task-detail.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _navbar_task_search_task_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/task-search/task-search.component */ "./src/app/navbar/task-search/task-search.component.ts");
/* harmony import */ var _sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sign-up-form/sign-up-form.component */ "./src/app/sign-up-form/sign-up-form.component.ts");
/* harmony import */ var _tasks_shared_task_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tasks/shared/task.service */ "./src/app/tasks/shared/task.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_task_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./in-memory-task-data.service */ "./src/app/in-memory-task-data.service.ts");
/* harmony import */ var _sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sign-in-form/sign-in-form.component */ "./src/app/sign-in-form/sign-in-form.component.ts");
/* harmony import */ var angular2_token__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-token */ "./node_modules/angular2-token/fesm5/angular2-token.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular imports




// Components imports







// Services imports 

// modules imports





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__["TasksComponent"],
                _tasks_task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_7__["TaskDetailComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _navbar_task_search_task_search_component__WEBPACK_IMPORTED_MODULE_9__["TaskSearchComponent"],
                _sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_10__["signUpFormComponent"],
                _sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_15__["signInFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_13__["InMemoryWebApiModule"].forRoot(_in_memory_task_data_service__WEBPACK_IMPORTED_MODULE_14__["InMemoryTaskDataService"])
            ],
            providers: [
                _tasks_shared_task_service__WEBPACK_IMPORTED_MODULE_11__["TaskService"],
                angular2_token__WEBPACK_IMPORTED_MODULE_16__["Angular2TokenService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Dashboard </h1>\n\n<table class=\"table\">\n    <thead>\n        <tr> \n            <th>Tarefa</th>\n            <th>Ações</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let task of tasks\">\n            <td>{{task.titulo}}</td>\n            <td><button class=\"btn btn-info\" [routerLink]=\"['/tasks', task.id]\">Detalhes</button></td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tasks_shared_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks/shared/task.service */ "./src/app/tasks/shared/task.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(taskService) {
        this.taskService = taskService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getImportant()
            .subscribe(function (tasks) { return _this.tasks = tasks; }, function (error) { return alert('Ocorreu um erro no servidor. Tente mais tarde!'); });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [_tasks_shared_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/in-memory-task-data.service.ts":
/*!************************************************!*\
  !*** ./src/app/in-memory-task-data.service.ts ***!
  \************************************************/
/*! exports provided: InMemoryTaskDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryTaskDataService", function() { return InMemoryTaskDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InMemoryTaskDataService = /** @class */ (function () {
    function InMemoryTaskDataService() {
    }
    InMemoryTaskDataService.prototype.createDb = function () {
        var tasks = [
            { id: 1, titulo: 'Comprar um celular novo' },
            { id: 2, titulo: 'Pagar faculdade' },
            { id: 3, titulo: 'Pagar aditamento do Fies' },
            { id: 4, titulo: 'Fazer aditamento do Fies' },
            { id: 5, titulo: 'Assistir aulas online' }
        ];
        return { tasks: tasks };
    };
    InMemoryTaskDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], InMemoryTaskDataService);
    return InMemoryTaskDataService;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" routerLink=\"/\">Projeto Teste </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#conteudoNavbarSuportado\" aria-controls=\"conteudoNavbarSuportado\" aria-expanded=\"false\" aria-label=\"Alterna navegação\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"conteudoNavbarSuportado\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/tasks\">Tasks</a>\n        </li>\n        <!-- <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">Ação</a>\n            <a class=\"dropdown-item\" href=\"#\">Outra ação</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Algo mais aqui</a>\n          </div>\n        </li> -->\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\">Desativado</a>\n        </li> -->\n      </ul>\n      <div class=\"form-inline my-2 my-lg-0\">\n        <task-search></task-search>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html")
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/navbar/task-search/task-search.component.css":
/*!**************************************************************!*\
  !*** ./src/app/navbar/task-search/task-search.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL3Rhc2stc2VhcmNoL3Rhc2stc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvdGFzay1zZWFyY2gvdGFzay1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/task-search/task-search.component.html":
/*!***************************************************************!*\
  !*** ./src/app/navbar/task-search/task-search.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position:relative\">\n    <input #searchInput (keyup)=\"search(searchInput.value)\" class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Buscar tarefas\" aria-label=\"Buscar tarefas\">\n    <ul *ngIf=\"tasks\" class=\"list-group\" style=\"position: absolute; width: 100%; z-index: 100;\">\n        <li href=\"\" class=\"list-group-item\" *ngFor=\"let task of tasks\"><a (click)=\"gotoTask(task)\">{{task.titulo}}</a></li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/navbar/task-search/task-search.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/navbar/task-search/task-search.component.ts ***!
  \*************************************************************/
/*! exports provided: TaskSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskSearchComponent", function() { return TaskSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tasks_shared_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tasks/shared/task.service */ "./src/app/tasks/shared/task.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskSearchComponent = /** @class */ (function () {
    function TaskSearchComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.tasks = [];
    }
    TaskSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchTerms
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (termo) { return termo ? _this.taskService.searchByTitle(termo) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }))
            .subscribe(function (tasks) { return _this.tasks = tasks; });
    };
    TaskSearchComponent.prototype.search = function (termo) {
        // console.log(termo)
        this.searchTerms.next(termo);
    };
    TaskSearchComponent.prototype.gotoTask = function (task) {
        this.tasks = [];
        this.router.navigate(['/tasks', task.id]);
    };
    TaskSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'task-search',
            template: __webpack_require__(/*! ./task-search.component.html */ "./src/app/navbar/task-search/task-search.component.html"),
            styles: [__webpack_require__(/*! ./task-search.component.css */ "./src/app/navbar/task-search/task-search.component.css")]
        }),
        __metadata("design:paramtypes", [_tasks_shared_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TaskSearchComponent);
    return TaskSearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/form.utils.ts":
/*!**************************************!*\
  !*** ./src/app/shared/form.utils.ts ***!
  \**************************************/
/*! exports provided: FormUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUtils", function() { return FormUtils; });
var FormUtils = /** @class */ (function () {
    function FormUtils(form) {
        this.form = form;
    }
    FormUtils.prototype.fieldClassForErrorOrSuccess = function (fieldName) {
        return {
            "text-danger": this.showFieldError(fieldName),
            "text-success": this.getField(fieldName).valid
        };
    };
    FormUtils.prototype.iconClassForErrorOrSuccess = function (fieldName) {
        return {
            "fa fa-times": this.showFieldError(fieldName),
            "fa fa-check": this.getField(fieldName).valid
        };
    };
    FormUtils.prototype.showFieldError = function (field) {
        return field.invalid && (field.touched || field.dirty);
    };
    FormUtils.prototype.getField = function (fieldName) {
        return this.form.get(fieldName);
    };
    return FormUtils;
}());



/***/ }),

/***/ "./src/app/sign-in-form/sign-in-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sign-in-form/sign-in-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Faça o seu Login</h1>\n<div class=\"jumbotron\">\n    <form class=\"text-right\" [formGroup]=\"form\" (ngSubmit)=\"signInUser()\">\n        <div class=\"form-group row\" [ngClass]=\"formUtils.fieldClassForErrorOrSuccess('email')\">\n            <label for=\"email\" class=\"col-sm-2 col-form-label\">Email</label>\n            <div class=\"col-sm-10\">\n                <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"email\">\n\n                <div *ngIf=\"formUtils.showFieldError(form.get('email'))\" class=\"text-danger\">\n                    <div *ngIf=\"form.get('email').errors.required\">Campo obrigatório</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group row\" [ngClass]=\"formUtils.fieldClassForErrorOrSuccess('senha')\">\n            <label for=\"senha\" class=\"col-sm-2 col-form-label\">Senha</label>\n            <div class=\"col-sm-10\">\n                <input type=\"password\" formControlName=\"senha\" class=\"form-control\" id=\"senha\"\n                    placeholder=\"Mínimo 6 caracteres\">\n\n                <div *ngIf=\"formUtils.showFieldError(form.get('senha'))\" class=\"text-danger\">\n                    <div *ngIf=\"form.get('senha').errors.required\">Campo obrigatório</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-10\">\n                <button [disabled]=\"form.invalid\" type=\"submit\" class=\"btn btn-primary\">Entrar</button>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/sign-in-form/sign-in-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sign-in-form/sign-in-form.component.ts ***!
  \********************************************************/
/*! exports provided: signInFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInFormComponent", function() { return signInFormComponent; });
/* harmony import */ var _shared_form_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/form.utils */ "./src/app/shared/form.utils.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var signInFormComponent = /** @class */ (function () {
    function signInFormComponent(fb) {
        this.fb = fb;
        this.form = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            senha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.formUtils = new _shared_form_utils__WEBPACK_IMPORTED_MODULE_0__["FormUtils"](this.form);
    }
    signInFormComponent.prototype.signInUser = function () {
        console.log('Form de SignIn enviado!');
        console.log(this.form.value);
    };
    signInFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sign-in-form',
            template: __webpack_require__(/*! ./sign-in-form.component.html */ "./src/app/sign-in-form/sign-in-form.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], signInFormComponent);
    return signInFormComponent;
}());



/***/ }),

/***/ "./src/app/sign-up-form/sign-up-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sign-up-form/sign-up-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Faça o seu cadastro</h1>\n<div class=\"jumbotron\">\n    <form class=\"text-right\" [formGroup]=\"form\" (ngSubmit)=\"signUpUser()\">\n        <div class=\"form-group row\" [ngClass]=\"formUtils.fieldClassForErrorOrSuccess('nome')\">\n            <label for=\"nome\" class=\"col-sm-2 col-form-label\">Nome</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" formControlName=\"nome\" class=\"form-control\" id=\"nome\"\n                    placeholder=\"Digite seu nome completo\">\n\n                <div *ngIf=\"formUtils.showFieldError(form.get('nome'))\" class=\"text-danger\">\n                    <div *ngIf=\"form.get('nome').errors.required\">Campo obrigatório</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group row\" [ngClass]=\"formUtils.fieldClassForErrorOrSuccess('email')\">\n            <label for=\"email\" class=\"col-sm-2 col-form-label\">Email</label>\n            <div class=\"col-sm-10\">\n                <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"email\"\n                    placeholder=\"Ex: nome@email.com\">\n\n                <div *ngIf=\"formUtils.showFieldError(form.get('email'))\" class=\"text-danger\">\n                    <div *ngIf=\"form.get('email').errors.required\">Campo obrigatório</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group row\" [ngClass]=\"formUtils.fieldClassForErrorOrSuccess('senha')\">\n            <label for=\"senha\" class=\"col-sm-2 col-form-label\">Senha</label>\n            <div class=\"col-sm-10\">\n                <input type=\"password\" formControlName=\"senha\" class=\"form-control\" id=\"senha\"\n                    placeholder=\"Mínimo 6 caracteres\">\n\n                <div *ngIf=\"formUtils.showFieldError(form.get('senha'))\" class=\"text-danger\">\n                    <div *ngIf=\"form.get('senha').errors.required\">Campo obrigatório</div>\n                    <div *ngIf=\"form.get('senha').errors.minLength\">Mínimo 6 caracteres</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group row\" [ngClass]=\"formUtils.fieldClassForErrorOrSuccess('confirmacaoSenha')\">\n            <label for=\"confirmacaoSenha\" class=\"col-sm-2 col-form-label\">Confirme sua senha</label>\n            <div class=\"col-sm-10\">\n                <input type=\"password\" formControlName=\"confirmacaoSenha\" class=\"form-control\" id=\"confirmacaoSenha\"\n                    placeholder=\"Mínimo 6 caracteres\">\n\n                <div *ngIf=\"formUtils.showFieldError(form.get('confirmacaoSenha'))\" class=\"text-danger\">\n                    <div *ngIf=\"form.get('confirmacaoSenha').errors.required\">Campo obrigatório</div>\n                    <div *ngIf=\"form.get('confirmacaoSenha').errors.mismatch\">Campo não confere com a senha</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-10\">\n                <button [disabled]=\"form.invalid\" type=\"submit\" class=\"btn btn-primary\">Cadastrar</button>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/sign-up-form/sign-up-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sign-up-form/sign-up-form.component.ts ***!
  \********************************************************/
/*! exports provided: signUpFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpFormComponent", function() { return signUpFormComponent; });
/* harmony import */ var _shared_form_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/form.utils */ "./src/app/shared/form.utils.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var signUpFormComponent = /** @class */ (function () {
    function signUpFormComponent(fb) {
        this.fb = fb;
        this.form = this.fb.group({
            nome: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            senha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmacaoSenha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        }, { validador: this.passwordConfirmationValidator });
        this.formUtils = new _shared_form_utils__WEBPACK_IMPORTED_MODULE_0__["FormUtils"](this.form);
    }
    signUpFormComponent.prototype.signUpUser = function () {
        console.log("Form de SignUp enviado!");
        console.log(this.form.value);
    };
    signUpFormComponent.prototype.passwordConfirmationValidator = function (form) {
        if (form.get('senha').dirty && form.get('senha').value === form.get('confirmacaoSenha').value)
            form.get('confirmacaoSenha').setErrors(null);
        else
            form.get('confirmacaoSenha').setErrors({ 'mismatch': true });
    };
    signUpFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sign-up-form',
            template: __webpack_require__(/*! ./sign-up-form.component.html */ "./src/app/sign-up-form/sign-up-form.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], signUpFormComponent);
    return signUpFormComponent;
}());



/***/ }),

/***/ "./src/app/tasks/shared/task.model.ts":
/*!********************************************!*\
  !*** ./src/app/tasks/shared/task.model.ts ***!
  \********************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(id, titulo, descricao, status, data) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
        this.data = data;
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/tasks/shared/task.service.ts":
/*!**********************************************!*\
  !*** ./src/app/tasks/shared/task.service.ts ***!
  \**********************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.tasksUrl = 'api/tasks';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({ 'Content-type': 'application/json' });
    }
    TaskService.prototype.getAll = function () {
        try {
            return this.http.get(this.tasksUrl)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                // console.log('getTastks => ', response.json())
                return response.json();
            }));
        }
        catch (error) {
            this.handleErrors(error);
        }
    };
    TaskService.prototype.getImportant = function () {
        try {
            return this.getAll()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (tasks) { return tasks.slice(0, 3); }));
        }
        catch (error) {
            this.handleErrors(error);
        }
    };
    TaskService.prototype.getById = function (id) {
        try {
            var url = this.tasksUrl + "/" + id;
            return this.http.get(url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
        }
        catch (error) {
            this.handleErrors(error);
        }
    };
    TaskService.prototype.create = function (task) {
        try {
            var url = this.tasksUrl;
            var body = JSON.stringify(task);
            return this.http.post(url, body, { headers: this.headers })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
        }
        catch (error) {
            this.handleErrors(error);
        }
    };
    TaskService.prototype.update = function (task) {
        try {
            var url = this.tasksUrl + "/" + task.id;
            var body = JSON.stringify(task);
            return this.http.put(url, body, { headers: this.headers })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return task; }));
        }
        catch (error) {
            this.handleErrors(error);
        }
    };
    TaskService.prototype.delete = function (id) {
        try {
            var url = this.tasksUrl + "/" + id;
            return this.http.delete(url, { headers: this.headers })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return null; }));
        }
        catch (error) {
            this.handleErrors(error);
        }
    };
    TaskService.prototype.searchByTitle = function (termo) {
        try {
            var url = this.tasksUrl + "?titulo=" + termo;
            return this.http.get(url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
        }
        catch (error) {
            this.handleErrors(error);
        }
    };
    TaskService.prototype.handleErrors = function (error) {
        console.log("Salvando o erro num arquivo de log. Detalhe: ", error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/tasks/task-detail/task-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/tasks/task-detail/task-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Detalhes da Tarefa: {{task.titulo}} </h1>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"updateTask()\">\n    <div class=\"row\">\n        <div class=\"form-group col-md-6\" [ngClass]=\"formUtils.fieldClassForErrorOrSuccess('titulo')\">\n            <label for=\"titulo\" class=\"control-label\">Título</label>\n            <input formControlName=\"titulo\" type=\"text\" class=\"form-control\" id=\"titulo\">\n\n            <div *ngIf=\"formUtils.showFieldError(form.get('titulo'))\" class=\"text-danger\">\n                <div *ngIf=\"form.get('titulo').errors.required\">Campo obrigatório</div>\n            </div>\n        </div>\n        <div class=\"form-group col-md-3\" [ngClass]=\"formUtils.fieldClassForErrorOrSuccess('data')\">\n            <label for=\"data\" class=\"control-label\">Data</label>\n            <input formControlName=\"data\" type=\"text\" class=\"form-control\" id=\"data\">\n\n            <div *ngIf=\"formUtils.showFieldError(form.get('data'))\" class=\"text-danger\">\n                <div *ngIf=\"form.get('data').errors.required\">Campo obrigatório</div>\n            </div>\n        </div>\n        <div class=\"form-group col-md-3\" [ngClass]=\"formUtils.fieldClassForErrorOrSuccess('status')\">\n            <label for=\"status\" class=\"control-label\">Status</label>\n            <select formControlName=\"status\" class=\"form-control\" id=\"status\">\n                <option *ngFor=\"let option of taskStatusOptions\" [value]=\"option.value\">{{option.text}}</option>\n            </select>\n\n            <div *ngIf=\"formUtils.showFieldError(form.get('status'))\" class=\"text-danger\">\n                <div *ngIf=\"form.get('status').errors.required\">Campo obrigatório</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"form-group col-md-12\">\n            <label for=\"descricao\" class=\"control-label\">Descrição</label>\n            <textarea formControlName=\"descricao\" class=\"form-control\" id=\"descricao\" rows=\"4\"></textarea>\n        </div>\n    </div>\n\n    <button type=\"button\" (click)=\"goBack()\" class=\"btn btn-default\">Voltar</button>\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.invalid\">Atualizar</button>\n</form>\n\n<br>\n<pre>{{form.value | json}}</pre>"

/***/ }),

/***/ "./src/app/tasks/task-detail/task-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/tasks/task-detail/task-detail.component.ts ***!
  \************************************************************/
/*! exports provided: TaskDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function() { return TaskDetailComponent; });
/* harmony import */ var _shared_form_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/form.utils */ "./src/app/shared/form.utils.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_task_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/task.model */ "./src/app/tasks/shared/task.model.ts");
/* harmony import */ var _shared_task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/task.service */ "./src/app/tasks/shared/task.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TaskDetailComponent = /** @class */ (function () {
    function TaskDetailComponent(route, taskService, location, fb) {
        this.route = route;
        this.taskService = taskService;
        this.location = location;
        this.fb = fb;
        this.taskStatusOptions = [
            { value: false, text: 'Pendente' },
            { value: true, text: 'Concluído' }
        ];
        this.form = this.fb.group({
            titulo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            data: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            status: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            descricao: [null]
        });
        this.formUtils = new _shared_form_utils__WEBPACK_IMPORTED_MODULE_0__["FormUtils"](this.form);
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.task = new _shared_task_model__WEBPACK_IMPORTED_MODULE_5__["Task"](null, null);
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) { return _this.taskService.getById(+params['id']); }))
            .subscribe(function (task) { return _this.setTask(task); }, function () { return alert('Ocorreu um erro no servidor. Tente mais tarde!'); });
    };
    TaskDetailComponent.prototype.setTask = function (task) {
        this.task = task;
        this.form.patchValue(task);
    };
    TaskDetailComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $('#data').datetimepicker({
            'sideBySide': true,
            'locale': 'pt-br'
        }).on('dp.change', function () { return _this.form.get('data').setValue($("#data").val()); });
    };
    TaskDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    TaskDetailComponent.prototype.updateTask = function () {
        this.task.titulo = this.form.get('titulo').value;
        this.task.data = this.form.get('data').value;
        this.task.status = this.form.get('status').value;
        this.task.descricao = this.form.get('descricao').value;
        if (!this.task.titulo) {
            alert('A tarefa deve ter um título.');
        }
        else {
            this.taskService.update(this.task)
                .subscribe(function () { return alert('Tafera atualizada com sucesso!'); }, function () { return alert('Ocorreu um erro no servidor. Tente mais tarde!'); });
        }
    };
    TaskDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'task-detail',
            template: __webpack_require__(/*! ./task-detail.component.html */ "./src/app/tasks/task-detail/task-detail.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.component.html":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Lista de Tarefas</h1>\n\n<div class=\"jumbotron\">\n    <div class=\"row\">\n        <div class=\"col-md-10\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newTask.titulo\" placeholder=\"Adicione uma nova tarefa\">\n        </div>\n        <div class=\"col-md-2\">\n            <button class=\"btn btn-success\" (click)=\"createTask()\">Adicionar</button>\n        </div>\n    </div>\n</div>\n\n<table class=\"table\">\n    <thead>\n        <tr>\n            <th>Id</th>\n            <th>Título</th>\n            <th>Ações</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let task of tasks\">\n            <td>{{task.id}}</td>\n            <td>{{task.titulo}}</td>\n            <td>\n                <button class=\"btn btn-info\" [routerLink]=\"['/tasks', task.id]\">\n                    Detalhes\n                </button>&nbsp;\n                <button class=\"btn btn-danger\" (click)=\"deleteTask(task)\">\n                    Excluir\n                </button>\n            </td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_task_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/task.model */ "./src/app/tasks/shared/task.model.ts");
/* harmony import */ var _shared_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/task.service */ "./src/app/tasks/shared/task.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TasksComponent = /** @class */ (function () {
    function TasksComponent(taskService) {
        this.taskService = taskService;
        this.newTask = new _shared_task_model__WEBPACK_IMPORTED_MODULE_1__["Task"](null, '');
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getAll()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
            // console.log(tasks)
        }, function () { return alert('Ocorreu um erro no servidor. Tente mais tarde!'); });
    };
    TasksComponent.prototype.createTask = function () {
        var _this = this;
        this.newTask.titulo = this.newTask.titulo.trim();
        if (!this.newTask.titulo) {
            alert('A tarefa deve ter um título.');
        }
        else {
            this.taskService.create(this.newTask)
                .subscribe(function (task) {
                _this.tasks.push(task);
                _this.newTask = new _shared_task_model__WEBPACK_IMPORTED_MODULE_1__["Task"](null, '');
            }, function () { return alert('Ocorreu um erro no servidor. Tente mais tarde!'); });
        }
    };
    TasksComponent.prototype.deleteTask = function (task) {
        var _this = this;
        if (confirm("Deseja excluir a tarefa " + task.titulo + "?")) {
            this.taskService.delete(task.id)
                .subscribe(function () { return _this.tasks = _this.tasks.filter(function (t) { return t !== task; }); }, function () { return alert('Ocorreu um erro no servidor, Tente mais tarde!'); });
        }
    };
    TasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/tasks/tasks.component.html")
        }),
        __metadata("design:paramtypes", [_shared_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]])
    ], TasksComponent);
    return TasksComponent;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alefeio/Documents/Projetos/Angular/Curso_Angular_App/salao_front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map