webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container pt-5 pb-5\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_organizers_organizers_component__ = __webpack_require__("../../../../../src/app/components/organizers/organizers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_sales_sales_component__ = __webpack_require__("../../../../../src/app/components/sales/sales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_graphs_graphs_component__ = __webpack_require__("../../../../../src/app/components/graphs/graphs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// Create routes
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'organizers', component: __WEBPACK_IMPORTED_MODULE_9__components_organizers_organizers_component__["a" /* OrganizersComponent */] },
    { path: 'sales', component: __WEBPACK_IMPORTED_MODULE_10__components_sales_sales_component__["a" /* SalesComponent */] },
    { path: 'graphs', component: __WEBPACK_IMPORTED_MODULE_11__components_graphs_graphs_component__["a" /* GraphsComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_organizers_organizers_component__["a" /* OrganizersComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_sales_sales_component__["a" /* SalesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_graphs_graphs_component__["a" /* GraphsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"mainfooter\" role=\"contentinfo\">\n    <div class=\"footer-bottom\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <p class=\"text-center\">&copy; Copyright 2017 - Stager. All rights reserved.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/graphs/graphs.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  graphs works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/graphs/graphs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/graphs/graphs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GraphsComponent = (function () {
    function GraphsComponent() {
    }
    GraphsComponent.prototype.ngOnInit = function () {
    };
    GraphsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-graphs',
            template: __webpack_require__("../../../../../src/app/components/graphs/graphs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/graphs/graphs.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], GraphsComponent);
    return GraphsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center animated fadeIn\">\n  Welcome to the Stager Ticket Sales Visualizer\n</h1>\n\n<div class=\"row mt-5 mb-4 animated fadeIn\">\n  <div class=\"col-mg-6 m-auto\">\n    <!-- <div class=\"card text-center\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Statistics</h4>\n          <p class=\"card-text\">Below you can see some basic total statistics. But besides that there is nothing much to see here...</p>\n        </div>\n        <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">Total sales: {{ salesTotal }}</li>\n            <li class=\"list-group-item\">Total expected ticket sales: {{ totalTicketsExpected }}</li>\n            <li class=\"list-group-item\">\n              <div *ngIf=\"salesTotal > totalTicketsExpected\"><b>Total needed sales reached</b></div>\n              <div *ngIf=\"!salesTotal > totalTicketsExpected\"><b>Total needed sales reached</b></div>\n            </li>\n        </ul>\n      </div> -->\n      <h3 class=\"text-center\">There is not much to see here, to see some real magic, click on a link in the menu :)<br />I don't like this page so empty, so here's some dummy content!</h3>\n      <div class='embed-container mt-4'><iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe></div>\n  </div>\n</div>\n\n<p class=\"text-center animtated fadeIn\">\n  Like I said, there is nothing much to see here. To see some actual stuff, go to <a href=\"#\" routerLink=\"/organizers\">Organizers</a> or <a href=\"#\" routerLink=\"/sales\">Sales</a>.\n</p>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.salesTotal = 0;
        this.totalTicketsExpected = 0;
        // Gets sales from data service
        this.dataService.getSales().subscribe(function (sales) {
            _this.sales = sales;
            // Calculate sales total
            for (var i = 0; i < _this.sales.length; i++) {
                _this.salesTotal += _this.sales[i].tickets;
            }
        });
        // Calculate total expected ticket total
        this.dataService.getOrganizers().subscribe(function (_organizers) {
            var organizers = _organizers;
            for (var i = 0; i < organizers.length; i++) {
                _this.totalTicketsExpected += organizers[i].expectedYearTotal;
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class=\"navbar navbar-expand-lg container-fullwidth col-xs-12 mb-5\">\n      <div class=\"container\">\n        \n        <a class=\"navbar-brand\" href=\"#\" routerLink=\"/\">\n          <img src=\"assets/img/logo-header.svg\" alt=\"Stager logo\" class=\"stager-branding\">\n        </a>\n\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/\" routerLinkActive=\"active\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/organizers\" routerLinkActive=\"active\">Organizers</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/sales\" routerLinkActive=\"active\">Sales</a>\n          </li>\n        </ul>\n\n      </div>\n    </nav>\n  </header>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/organizers/organizers.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center mb-5\">Organizers overview</h1>\n\n<div class=\"row\">\n  <div *ngFor=\"let organizer of organizers\" class=\"col-lg-4 col-md-6 mb-3 animated fadeIn\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title organizer-name\">{{ organizer.name }}</h4>\n      </div>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">Organizer id: {{ organizer.id }}</li>\n        <li class=\"list-group-item\">Expected year total: {{ organizer.expectedYearTotal }}</li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/organizers/organizers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".organizer-name {\n  font-size: 1.125em;\n  min-height: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/organizers/organizers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrganizersComponent = (function () {
    function OrganizersComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.dataService.getOrganizers().subscribe(function (organizers) {
            _this.organizers = organizers;
            console.log(_this.organizers);
        });
    }
    OrganizersComponent.prototype.ngOnInit = function () {
    };
    OrganizersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-organizers',
            template: __webpack_require__("../../../../../src/app/components/organizers/organizers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/organizers/organizers.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], OrganizersComponent);
    return OrganizersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sales/sales.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger animated fadeIn\" *ngFor=\"let inputError of inputErrors\">{{ inputError }}</div>\n\n<div class=\"row animated fadeIn\">\n    <div class=\"col-md-6\">\n        <h1 class=\"mb-3 text-center\">Search event sales</h1>\n\n        <div class=\"form-group\">\n            <label for=\"organizers\">Select organizer:</label>\n            <select class=\"form-control\" id=\"organizers\" #selectedOrganizer>\n                <option value=\"\">Any</option>\n              <option *ngFor=\"let organizer of organizers\" [value]=\"organizer.id\">{{ organizer.name }}</option>\n            </select>\n        </div>\n        \n        <div class=\"form-group\">\n            <label for=\"year\">Select year:</label>\n            <select class=\"form-control\" id=\"year\" #selectedYear>\n                <option value=\"\">Any</option>\n                <option value=\"2013\">2013</option>\n                <option value=\"2014\">2014</option>\n                <option value=\"2015\">2015</option>\n                <option value=\"2016\">2016</option>\n                <option value=\"2017\">2017</option>\n            </select>\n        </div>\n        \n        <div class=\"form-group\">\n            <label for=\"week\">Select week:</label>\n            <select class=\"form-control\" id=\"week\" #selectedWeek>\n                <option value=\"\">Any</option>\n                <option *ngFor=\"let week of weeks; let index = index\" [value]=\"index\">Week {{ index }}</option>\n            </select>\n        </div>\n \n        <button class=\"btn btn-stager mb-5\"(click)=\"sortSales(selectedOrganizer.value, selectedYear.value, selectedWeek.value)\">Show event sales</button>\n    </div>\n\n    <div class=\"col-md-6\">\n        <h1 class=\"text-center mb-3\">Statistics</h1>\n        <div *ngIf=\"!statistics\" class=\"text-center mt-5 animated fadeIn\">Hey, there's nothing to see here!</div>\n        <div *ngIf=\"statistics\" class=\"text-center animated fadeIn\">\n            <div class=\"progress\">\n                <div class=\"progress-bar\" role=\"progressbar\" [style.width]=\"ticketsPercentage+'%'\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"><span *ngIf=\"ticketsPercentage != 0\">{{ ticketsPercentage }}%</span></div>\n            </div>\n            <h1 class=\"mt-3\">{{ ticketsSold }} <span class=\"tickets-expected\">/ {{ ticketsExpected }}</span></h1>\n        </div>\n        <p class=\"mt-4\">That's all fun and games, but just give me some <a href=\"#\" routerLink=\"graphs\">nice graphs</a>.</p>\n    </div>\n</div>\n<br /> <br />\n\n<h1 *ngIf=\"sortedSales\" class=\"text-center mb-5 animated fadeIn\">Events (per week)</h1>\n<div class=\"row animated fadeIn\">\n    <div *ngFor=\"let sortedSale of sortedSales\" class=\"col-md-4 mb-3\">\n        <div class=\"card animated fadeIn\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Name: {{ organizers[sortedSale.organization-1].name }}</h4>\n                <div class=\"card-text\">Organization ID: {{ sortedSale.organization }}</div>\n                <div class=\"card-text\">Year: {{ sortedSale.year }}</div>\n                <div class=\"card-text\">Week: {{ sortedSale.week }}</div>\n                <div class=\"card-text\"><b>Tickets: {{ sortedSale.tickets }}</b></div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sales/sales.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sales/sales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/**
 * Quick note:
 * All calculations below are based on all organizers
 * starting in the same year. There are no methods (yet)
 * implemented to get a more accurate expected ticket
 * total in a way that the total expected tickets sold
 * is equal to the sum of expected tickets per year
 * per organizer times the amount of years per organizer.
 * It is possible to implement this, but then the user
 * experience would not be optimal as it will take quite
 * some more computing power.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SalesComponent = (function () {
    function SalesComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.weeks = new Array(52);
        this.statistics = false;
        this.ticketsExpected = 0;
        this.ticketsSold = 0;
        this.ticketsPercentage = 0;
        this.getYears = function (sales) {
            var lowest = Number.MAX_SAFE_INTEGER;
            var highest = Number.MIN_SAFE_INTEGER;
            var delta = 0;
            for (var i = 0; i < sales.length; i++) {
                if (sales[i].year < lowest)
                    lowest = sales[i].year;
                if (sales[i].year > highest)
                    highest = sales[i].year;
                console.log(highest + " - " + lowest + " = " + (highest - lowest));
            }
            delta = highest - lowest + 1;
            console.log("Delta: " + (highest - lowest + 1));
            return delta;
        };
        this.dataService.getOrganizers().subscribe(function (organizers) {
            _this.organizers = organizers;
            //console.log(this.organizers);
        });
        this.dataService.getSales().subscribe(function (sales) {
            _this.sales = sales;
            //console.log(this.sales);
        });
    }
    SalesComponent.prototype.sortSales = function (organizer, year, week) {
        var _this = this;
        //console.log(organizer, year, week)
        if (((year || week) && !organizer) || (week && !year)) {
            this.inputErrors = [];
            this.statistics = false;
            if ((year || week) && !organizer) {
                this.inputErrors.push("You can only select a year and week if you also select an organizer");
            }
            if (week && !year) {
                this.inputErrors.push("You can only select a week if you also select a year");
            }
        }
        else {
            this.inputErrors = [];
            this.statistics = true;
            this.dataService.getSalesSorted(organizer, year, week).subscribe(function (sortedSales) {
                _this.sortedSales = sortedSales;
                console.log(_this.sortedSales);
                if (organizer) {
                    _this.ticketsExpected = _this.organizers[organizer - 1].expectedYearTotal;
                }
                else {
                    _this.ticketsExpected = 0;
                    for (var i = 0; i < _this.organizers.length; i++) {
                        _this.ticketsExpected += _this.organizers[i].expectedYearTotal;
                    }
                }
                if (!year)
                    _this.ticketsExpected = Math.ceil(_this.ticketsExpected * _this.getYears(sortedSales));
                if (week)
                    _this.ticketsExpected = Math.ceil(_this.ticketsExpected / 52);
                //console.log(this.getYears(sortedSales));
                _this.ticketsSold = 0;
                for (var i = 0; i < _this.sortedSales.length; i++) {
                    _this.ticketsSold += _this.sortedSales[i].tickets;
                }
                _this.ticketsPercentage = Math.floor(_this.ticketsSold / _this.ticketsExpected * 100);
            });
        }
    };
    SalesComponent.prototype.ngOnInit = function () {
    };
    SalesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sales',
            template: __webpack_require__("../../../../../src/app/components/sales/sales.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sales/sales.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], SalesComponent);
    return SalesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getOrganizers = function () {
        return this.http.get('/api/organizers')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getSales = function () {
        return this.http.get('/api/sales')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getSalesSorted = function (id, year, week) {
        var parameters = "";
        if (id) {
            parameters += id + "/";
        }
        if (year) {
            parameters += year + "/";
        }
        if (week) {
            parameters += "" + week;
        }
        return this.http.get("/api/sales/" + parameters)
            .map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map