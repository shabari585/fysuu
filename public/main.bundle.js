webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-up{\r\n  padding-top:0 !important;\r\n}\r\n.title-img-div {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/pen.jpg") + ");\r\n  background-size: cover;\r\n  background-position: 0% 50%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header for mobiles and smaller devices -->\r\n<header class=\"mob-main-header visible-sm visible-xs\">\r\n    <button type=\"button\" class=\"mob-menu-trig-btn\">\r\n                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n            </button>\r\n    <div class=\"mob-main-logo\">\r\n        <img src=\"../../assets/logo/logo_black.png\">\r\n    </div>\r\n</header>\r\n<header class=\"main-header visible-md visible-lg\">\r\n    <div class=\"container\">\r\n        <div class=\"main-logo pull-left\" routerLink='/home'>\r\n            <img src=\"../../assets/logo/logo_black.png\">\r\n        </div>\r\n        <ul class=\"list-inline det-ul visible-xs visible-sm pull-right\">\r\n            <li>\r\n                <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp;</button>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"list-inline det-ul pull-left visible-md visible-lg\">\r\n            <!-- <li>\r\n                <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp;</button>\r\n            </li> -->\r\n            <li>\r\n                <a routerLink='/menu' class=\"dets-div-btns\" id=\"our-menu-btn\">Today, {{dateForHeader}}</a>\r\n            </li>            \r\n            <!-- <li>\r\n                <a routerLink='/menu' class=\"dets-div-btns\">Schedule Menu</a>\r\n            </li>             -->\r\n        </ul>\r\n        <div class=\"scroll-login-div pull-right  visible-md visible-lg\">\r\n            <ul class=\"list-inline sc-ul\">\r\n                <li class=\"login-trig-div\" *ngIf=\"!authService.loggedIn()\">\r\n                    <button type=\"button\" class=\"login-signup-trig-btn dets-div-btns\" (click)=\"appComponent.loginSignupTrigger()\">Log in/Sign up</button>\r\n                </li>\r\n                <li class=\"account-trig-div\" *ngIf=\"authService.loggedIn()\">\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\">{{userName}}&nbsp;<i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i></button>\r\n                        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\r\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings'>My Profile</a></li>\r\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/my-orders'>My Orders</a></li>\r\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/address'>Saved Address</a></li>\r\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/reward-points'>Reward Points</a></li>\r\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/change-password'>Change Password</a></li>\r\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"onLogoutClick()\">Logout</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </li>\r\n                <li class=\"head-basket\" routerLink='/checkout'>\r\n                    Basket &nbsp; <span class=\"head-basket-num\">{{basket_num}}</span> \r\n                </li>\r\n            </ul>\r\n\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n</header>\r\n<div class=\"con-section jumbotron about-up\">\r\n    <div class=\"title-img-div\">\r\n        <h2 class=\"web-sec-heads\">ABOUT US</h2>\r\n    </div>\r\n    <div class=\"container\">\r\n        <p>\r\n            Fysu is a fresh approach to food on the move, with high-quality ingredients to prepare meals that are cooked in our kitchen for office delivery.\r\n        </p>\r\n    \r\n        <p>\r\n             An exciting menu of homely meals are available, from daily rotating menu that are varied on a weekly basis. Ordering is easy; select food, select a 45-minute delivery slot from 12pm to 3pm, six days a week and get reward points for every order. We are introducing a ground-breaking idea to make lunch-time fun, useful and creative.\r\n        </p>\r\n        <p>\r\n             Bringing back the lost art of letter writings and reinventing the concept of daily writing habits. Out-of-the-box thinking is actively encouraged and we move quickly to make great ideas happen.\r\n        </p>\r\n        <p>\r\n             Fysu is on a mission to transform the way the employees thinks about office lunch. Our plan is to position Fysu to become one of the leading brand in the office food delivery services industry in Hyderabad.\r\n        </p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AboutComponent = (function () {
    function AboutComponent(router, title, appComponent, authService, datePipe) {
        this.router = router;
        this.title = title;
        this.appComponent = appComponent;
        this.authService = authService;
        this.datePipe = datePipe;
        this.today_one = __WEBPACK_IMPORTED_MODULE_6_moment__();
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.title.setTitle('About - Fysu');
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.dateForHeader = this.datePipe.transform(this.today_one, 'EEE, MMM d');
        this.basket_num = parseInt(localStorage.getItem('basket_number'));
        if (this.basket_num == undefined || this.basket_num == null || this.basket_num == 0 || isNaN(this.basket_num) == true) {
            // redirect to menu
            this.basket_num = 0;
            // alert('no');
        }
        else {
            // this.basket_num;
        }
        if (this.authService.loggedIn() == true) {
            var user = this.authService.getUserFromLocal();
            var user_parsed = JSON.parse(user);
            this.userEmail = user_parsed.email;
            this.userName = user_parsed.name;
            this.companyName = user_parsed.company_name;
            this.userMobile = user_parsed.mobile;
            this.userId = user_parsed.id;
        }
        else {
            this.basket_num = 0;
        }
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css"), __webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]) === "function" && _e || Object])
], AboutComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/address/address.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".db,.wb{\r\n    z-index: 20;\r\n    position: fixed;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n.db{\r\n    display: none;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n.wb{\r\n    height: 300px;\r\n    width: 400px;\r\n    border-radius: 4px;\r\n    background-color: #fff;\r\n}\r\n.wb h2{\r\n    font-size: 140%;\r\n    margin-bottom: 20px;\r\n}\r\n.wb textarea{\r\n    resize: none !important;\r\n    outline: none !important;\r\n    height: 150px;\r\n    width: 250px;\r\n}\r\n.wb .fa{\r\n    position: absolute;\r\n    top:5%;\r\n    left:92%;\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Det Title Div-->\r\n<div class=\"det-title-div\">\r\n  <div class=\"det-title-core\">\r\n    <h2 class=\"det-title\">Saved Addresses</h2>\r\n  </div>\r\n</div>\r\n\r\n<!-- Det core div -->\r\n<div class=\"dets-core\">\r\n\r\n  <div class=\"addresses-core\">\r\n\r\n      <div class=\"address-item\" *ngFor='let address of addresses; let i = index'>\r\n      <div class=\"address-top\">\r\n        <h4 class=\"address-name\">OFFICE {{i+1}}</h4>\r\n        <div class=\"address-options\">\r\n          <i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)='editAddress(i,address)'></i>\r\n          <i class=\"fa fa-times\" aria-hidden=\"true\" (click)='addressDelete($event,address)'></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"address\">\r\n        <h6>{{address}}</h6>\r\n      </div>\r\n    </div>\r\n    <div class=\"add-address\" (click)='geoLocate()'>\r\n      <h5>Locate new address</h5>\r\n      <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"db\">\r\n  <div class=\"wb\">\r\n      <i class=\"fa fa-times\" aria-hidden=\"true\" (click)='closeUpAddress()'></i>\r\n    <h2>Update Address</h2>\r\n    <textarea [(ngModel)]='placeholder_address'>\r\n\r\n    </textarea>\r\n    <button class=\"save-btns\" (click)='updateAddress()' style=\"margin-top:20px;\">SUBMIT</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/address/address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddressComponent = (function () {
    function AddressComponent(title, authService, router) {
        this.title = title;
        this.authService = authService;
        this.router = router;
        this.addresses = [];
        this.location = {};
    }
    // addressDeleted = false;
    AddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set title
        this.title.setTitle('Settings: Address');
        var user = this.authService.getUserFromLocal();
        var user_parsed = JSON.parse(user);
        this.userEmail = user_parsed.email;
        this.userName = user_parsed.name;
        this.companyName = user_parsed.company_name;
        this.userMobile = user_parsed.mobile;
        this.userId = user_parsed.id;
        //Get addresses
        this.authService.getUserAddressses(this.userId).subscribe(function (res) {
            if (res.success) {
                _this.addresses = res.msg[0].address;
                console.log(res.msg);
            }
            else {
                console.log('err');
            }
        });
    };
    AddressComponent.prototype.editAddress = function (i, address) {
        this.original_address = address;
        this.placeholder_address = address;
        $('.db').css({ 'display': 'flex' });
    };
    AddressComponent.prototype.addressDelete = function (event, ad) {
        var address = {
            user_id: this.userId,
            address: ad
        };
        // delete the respective address
        this.authService.deleteAddress(address).subscribe(function (res) {
            if (res.success) {
                window.location.reload();
            }
            else {
                console.log('Something went wrong');
            }
        });
    };
    AddressComponent.prototype.geoLocate = function (callback) {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.location = position.coords;
                _this.lat = position.coords.latitude;
                _this.long = position.coords.longitude;
                if (_this.lat == undefined) {
                }
                else {
                    _this.authService.getLocation(_this.lat, _this.long).subscribe(function (res) {
                        _this.address = res.results[0].formatted_address;
                        // if (this.address.includes('Madhapur')) {
                        // send this address to save
                        var address = {
                            user_id: _this.userId,
                            address: _this.address
                        };
                        _this.authService.saveAddress(address).subscribe(function (res) {
                            if (res.success) {
                                // Address saved
                                // console.log(res);
                                window.location.reload();
                            }
                            else {
                                // Address not saved
                                if (res.msg = 'exists') {
                                    // address already exists
                                }
                                else {
                                    console.log(res);
                                }
                            }
                        });
                        // } 
                    });
                }
            });
        }
    };
    AddressComponent.prototype.closeUpAddress = function () {
        $('.db').css({ 'display': 'none' });
    };
    AddressComponent.prototype.updateAddress = function () {
        // alert('fd');
        var addresses = {
            user_id: this.userId,
            original: this.original_address,
            edited: this.placeholder_address
        };
        this.authService.updateAddress(addresses).subscribe(function (res) {
            if (res.success) {
                window.location.reload();
            }
            else {
                console.log(res.msg);
            }
        });
    };
    return AddressComponent;
}());
AddressComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-address',
        template: __webpack_require__("../../../../../src/app/address/address.component.html"),
        styles: [__webpack_require__("../../../../../src/app/address/address.component.css"), __webpack_require__("../../../../../src/app/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AddressComponent);

var _a, _b, _c;
//# sourceMappingURL=address.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/add-admin/add-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    color: #777;\r\n}\r\n.btn-primary{\r\n    color: #fff !important;\r\n}\r\ntable td {\r\n    padding: 20px 20px;\r\n    font-size: 130%;\r\n}\r\ntable .fa{\r\n    cursor: pointer;\r\n}\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/add-admin/add-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Add Admin</h2>\r\n<form (submit)=\"onAddAdminSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input type=\"text\" [(ngModel)]=\"adminname\" name=\"adminname\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Add Admin\">\r\n</form>\r\n<h3>View Admin</h3>\r\n<table class=\"table-striped\">\r\n  <tr *ngFor=\"let admin of admins\">\r\n    <td>\r\n      {{admin.adminname}}\r\n    </td>\r\n    <td>\r\n      <i class=\"fa fa-times cat-close-btn\" aria-hidden=\"true\" (click)=\"deleteAdmin(admin._id)\"></i>\r\n    </td>\r\n  </tr>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/admin/add-admin/add-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__ = __webpack_require__("../../../../../src/app/services/admin-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_admin_auth_service__ = __webpack_require__("../../../../../src/app/services/admin-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddAdminComponent = (function () {
    function AddAdminComponent(getMenu, validateService, flashMessage, router, authService, title) {
        this.getMenu = getMenu;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.authService = authService;
        this.title = title;
    }
    AddAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set title
        this.title.setTitle('Add Admin - Admin');
        // Get admins
        this.authService.getAdmins().subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.admins = res.msg;
            }
        });
    };
    AddAdminComponent.prototype.onAddAdminSubmit = function () {
        var _this = this;
        var admin = {
            adminname: this.adminname,
            password: this.password
        };
        // RequiredFields
        if (!this.validateService.validateInput(this.adminname) && !this.validateService.validateInput(this.password)) {
            this.flashMessage.show('Fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        else {
            // Register Admin
            this.authService.registerAdmin(admin).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('Registered !', { cssClass: 'alert-success', timeout: 3000 });
                    // this.router.navigate(['/login']);
                }
                else {
                    _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/add-admin']);
                }
            });
        }
    };
    AddAdminComponent.prototype.deleteAdmin = function (id) {
        var _this = this;
        this.authService.deleteAdmin(id).subscribe(function (res) {
            if (res.success) {
                _this.flashMessage.show('Registered !', { cssClass: 'alert-success', timeout: 3000 });
                window.location.reload();
            }
            else {
                console.log(res.msg);
            }
        });
    };
    return AddAdminComponent;
}());
AddAdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-admin',
        template: __webpack_require__("../../../../../src/app/admin/add-admin/add-admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin/admin.component.css"), __webpack_require__("../../../../../src/app/admin/add-admin/add-admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_admin_auth_service__["a" /* AdminAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_admin_auth_service__["a" /* AdminAuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _f || Object])
], AddAdminComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=add-admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/add-category/add-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".view-cat-table td {\r\n  padding: 20px 20px;\r\n  font-size: 130%;\r\n}\r\n\r\n.cat-close-btn {\r\n  cursor: pointer;\r\n  font-size: 100%;\r\n  color: #888;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/add-category/add-category.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Addons Section -->\r\n<div class=\"orders-section\">\r\n  <h3>Add Category</h3>\r\n\r\n</div>\r\n<!-- Orders Listing -->\r\n<div class=\"orders-list-section table-responsive\">\r\n  <table>\r\n    <tr>\r\n      <td>\r\n        <h5>Category Name : </h5>\r\n      </td>\r\n      <td>\r\n        <input type=\"text\" [(ngModel)]='catName'>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <button class=\"submit-btns\" (click)='addCategory(catName)'>SUBMIT</button>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n  <br><br><br>\r\n  <h3>View Categories</h3>\r\n  <table class=\"table-striped view-cat-table\">\r\n    <tr *ngFor=\"let cat of categories\">\r\n      <td>\r\n        {{cat.name}}\r\n      </td>\r\n      <td>\r\n        <i class=\"fa fa-times cat-close-btn\" aria-hidden=\"true\" (click)=\"deleteCategory(cat._id)\"></i>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/add-category/add-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__ = __webpack_require__("../../../../../src/app/services/admin-services.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCategoryComponent = (function () {
    function AddCategoryComponent(getMenu, router, title) {
        this.getMenu = getMenu;
        this.router = router;
        this.title = title;
        this.categories = [];
    }
    AddCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set title
        this.title.setTitle('Add Category');
        this.getMenu.getCategories().subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.categories = res.msg;
            }
        });
    };
    AddCategoryComponent.prototype.addCategory = function (catName) {
        var json = { 'name': catName };
        this.getMenu.addCategory(json).subscribe(function (res) {
            if (res.msg == 'success') {
                // Category added
                window.location.reload();
            }
        });
    };
    AddCategoryComponent.prototype.deleteCategory = function (id) {
        this.getMenu.deleteCategory(id).subscribe(function (res) {
            if (res == 'success') {
                window.location.reload();
            }
        });
    };
    return AddCategoryComponent;
}());
AddCategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-category',
        template: __webpack_require__("../../../../../src/app/admin/add-category/add-category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin/admin.component.css"), __webpack_require__("../../../../../src/app/admin/add-category/add-category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
], AddCategoryComponent);

var _a, _b, _c;
//# sourceMappingURL=add-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/add-items/add-items.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".view-sub-table td {\r\n  padding: 20px 20px;\r\n  font-size: 130%;\r\n}\r\n\r\n.cat-close-btn {\r\n  cursor: pointer;\r\n  font-size: 100%;\r\n  color: #888;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/add-items/add-items.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Menu Listing -->\r\n<div class=\"orders-list-section table-responsive\">\r\n\r\n  <!-- Add menu -->\r\n  <h3>Add Item</h3>\r\n\r\n\r\n  <table id=\"add-item-table\">\r\n    <tr>\r\n      <td>\r\n        <h4>Choose Category</h4>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <select [(ngModel)]=\"selectedCat\" (change)=\"catSelect($event.target.value)\">\r\n                        <option value=\"\" disabled default=\"true\">Choose Category</option>\r\n                        <option *ngFor=\"let category of categories\" value=\"{{category._id}}\">{{category.name}}</option>\r\n                    </select>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <h4>Choose Sub Category</h4>\r\n      </td>\r\n    </tr>\r\n    <tr *ngIf='catSelected == \"true\"'>\r\n      <td>\r\n        <select [(ngModel)]=\"selectedSubCat\" (change)=\"subCatSelect($event.target.value)\">\r\n                        <option value=\"\" disabled default=\"true\">Choose Sub Category</option>\r\n                        <option *ngFor=\"let sub of subsOfCat\" value=\"{{sub}}\">{{sub}}</option>\r\n                    </select>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <h4>Item Name</h4>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <input type=\"text\" name=\"name\" [(ngModel)]='itemName'>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <h4>Item Price</h4>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <input type=\"text\" name=\"price\" [(ngModel)]='itemPrice'>\r\n      </td>\r\n    </tr>\r\n    <!-- <tr>\r\n                <td>\r\n                    <h4>Item Image</h4>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <input type=\"file\" accept=\"image/*\" id=\"file\" name=\"File\" />\r\n                    <input formControlName=\"File\" type=\"hidden\" />\r\n                </td>\r\n            </tr> -->\r\n    <tr>\r\n      <td>\r\n        <p class=\"err\"></p>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <button (click)='AddItem(itemName,itemPrice)' class=\"submit-btns\">SUBMIT</button>\r\n        <!-- <button class=\"submit-btns\">SUBMIT</button> -->\r\n      </td>\r\n    </tr>\r\n\r\n  </table>\r\n  <table class=\"table-striped view-sub-table\">\r\n    <tr *ngFor=\"let item of items\">\r\n      <td>\r\n        {{item.item_name}}\r\n      </td>\r\n      <td>\r\n        <i class=\"fa fa-times cat-close-btn\" aria-hidden=\"true\" (click)=\"deleteItem(item._id)\"></i>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/add-items/add-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_admin_services_service__ = __webpack_require__("../../../../../src/app/services/admin-services.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddItemsComponent = (function () {
    function AddItemsComponent(getMenu, router, title, flash) {
        this.getMenu = getMenu;
        this.router = router;
        this.title = title;
        this.flash = flash;
        this.categories = [];
        this.catSelected = 'false';
    }
    AddItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set title
        this.title.setTitle('Add Items');
        this.getMenu.getCategories().subscribe(function (res) {
            if (res.success) {
                _this.categories = res.msg;
            }
        });
    };
    AddItemsComponent.prototype.catSelect = function (event) {
        var _this = this;
        this.catSelected = 'false';
        // var cjson = {'catId':event};
        this.selectedCat = event;
        var cjson = event;
        this.getMenu.getSubs(cjson).subscribe(function (res) {
            if (res.msg != 'failed') {
                _this.subsOfCat = res;
                _this.catSelected = 'true';
            }
            else {
                console.log(res.msg);
            }
        });
    };
    // When SubCat is selected
    AddItemsComponent.prototype.subCatSelect = function (event) {
        var _this = this;
        this.selectedSubCat = event;
        this.getMenu.getItems(this.selectedCat, this.selectedSubCat).subscribe(function (res) {
            console.log(res);
            _this.items = res;
        });
    };
    AddItemsComponent.prototype.AddItem = function (itemName, itemPrice) {
        var _this = this;
        // selected category 
        this.selectedCat;
        // selected sub category
        this.selectedSubCat;
        // Item Name
        this.itemName = itemName;
        // Item Price
        this.itemPrice = itemPrice;
        // Item image
        this.item_img = 'img/img.jpg';
        this.getMenu.addItem(this.selectedCat, this.selectedSubCat, this.itemName, this.itemPrice, this.item_img).subscribe(function (res) {
            if (res.msg == 'success') {
                _this.flash.show('Item Added !', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                window.location.reload();
            }
            else {
                console.log(res);
            }
        });
    };
    AddItemsComponent.prototype.deleteItem = function (item_id) {
        this.getMenu.deleteItem(item_id).subscribe(function (res) {
            if (res.success) {
                window.location.reload();
            }
            else {
                console.log(res.msg);
            }
        });
    };
    return AddItemsComponent;
}());
AddItemsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-items',
        template: __webpack_require__("../../../../../src/app/admin/add-items/add-items.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/add-items/add-items.component.css"), __webpack_require__("../../../../../src/app/admin/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_admin_services_service__["a" /* AdminServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_admin_services_service__["a" /* AdminServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], AddItemsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-items.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/add-menu/add-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".view-sub-table td {\r\n  padding: 20px 20px;\r\n  font-size: 130%;\r\n}\r\n\r\n.cat-close-btn {\r\n  cursor: pointer;\r\n  font-size: 100%;\r\n  color: #888;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/add-menu/add-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Menu Section -->\r\n<div class=\"orders-section\">\r\n  <h3>Menu</h3>\r\n  <!-- <div class=\"orders-core\">\r\n    <div class=\"order-tabs-row-one\">\r\n      <div class=\"order-tab\" id=\"order-tab-one-one\">\r\n        <h4 class=\"order-tab-number\">0</h4>\r\n        <h4 class=\"order-tab-name\">Total </h4>\r\n      </div>\r\n      <div class=\"order-tab\" id=\"order-tab-one-two\">\r\n        <h4 class=\"order-tab-number\">0</h4>\r\n        <h4 class=\"order-tab-name\">Active</h4>\r\n      </div>\r\n      <div class=\"order-tab\" id=\"order-tab-one-three\">\r\n        <h4 class=\"order-tab-number\">0</h4>\r\n        <h4 class=\"order-tab-name\">Deactive</h4>\r\n      </div>\r\n      <div class=\"order-tab\" id=\"order-tab-one-four\">\r\n        <h4 class=\"order-tab-number\">0</h4>\r\n        <h4 class=\"order-tab-name\">Popular</h4>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n</div>\r\n<!-- Menu Listing -->\r\n<div class=\"orders-list-section table-responsive\">\r\n\r\n  <!-- Add menu -->\r\n  <h3>ADD MENU</h3>\r\n\r\n  <select [(ngModel)]=\"dateSelected\" (change)=\"selectedDate($event.target.value)\">\r\n    <option value=\"{{day_one | date:'fullDate'}}\">{{day_one | date:'fullDate'}}</option>\r\n    <option value=\"{{day_two | date:'fullDate'}}\">{{day_two | date:'fullDate'}}</option>\r\n    <option value=\"{{day_three | date:'fullDate'}}\">{{day_three | date:'fullDate'}}</option>\r\n    <option value=\"{{day_four | date:'fullDate'}}\">{{day_four | date:'fullDate'}}</option>\r\n    <option value=\"{{day_five | date:'fullDate'}}\">{{day_five | date:'fullDate'}}</option>\r\n    <!-- <option value=\"{{day_six | date:'fullDate'}}\">{{day_six | date:'fullDate'}}</option>\r\n    <option value=\"{{day_seven | date:'fullDate'}}\">{{day_seven | date:'fullDate'}}</option> -->\r\n</select>\r\n\r\n  <br>\r\n  <br>\r\n  <div *ngIf=\"dateIsSelected == 'true'\">\r\n    <select [(ngModel)]=\"selectedCat\" (change)=\"catSelect($event.target.value)\" id=\"cat-select\">\r\n    <option value=\"\" disabled default=\"true\">Choose Category</option>\r\n    <option *ngFor=\"let category of categories\" value=\"{{category._id}}\">{{category.name}}</option>\r\n</select>\r\n\r\n    <br>\r\n    <br>\r\n\r\n    <div *ngIf=\"catSelected == 'true'\">\r\n      <select [(ngModel)]=\"selectedSubCat\" (change)=\"subCatSelect($event.target.value)\" id=\"sub-cat-select\">\r\n        <option value=\"\" disabled default=\"true\">Choose Sub Category</option>\r\n        <option *ngFor=\"let sub of subsOfCat\" value=\"{{sub}}\">{{sub}}</option>\r\n    </select>\r\n    </div>\r\n\r\n    <br>\r\n    <br>\r\n\r\n    <div class=\"schedule-choose-core roti-div\">\r\n\r\n      <div *ngIf=\"subSelected == 'true'\">\r\n        <h4>Select Items</h4>\r\n\r\n        <div *ngFor=\"let item of items\">\r\n          <label>\r\n                <input type=\"checkbox\" value=\"{{item.item_name}}\" (change)=\"onCheckChange(dateSelected,item.cat_id,item.sub_name,item._id, $event.target.checked)\" [checked]='item.checked'>{{item.item_name}}\r\n            </label>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <button (click)='submitMenu()' class=\"submit-btns\">SUBMIT</button>\r\n\r\n  <table class=\"table-striped view-sub-table\">\r\n    <tr *ngFor=\"let cat of outCats\">\r\n      <td>\r\n        {{cat.date}}\r\n      </td>\r\n      <td>\r\n        {{cat.name}}\r\n      </td>\r\n      <td>\r\n        <i class=\"fa fa-times cat-close-btn\" aria-hidden=\"true\" (click)=\"deleteDate(cat.date_id)\"></i>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/add-menu/add-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__ = __webpack_require__("../../../../../src/app/services/admin-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_get_menu_service__ = __webpack_require__("../../../../../src/app/services/get-menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { MenuItem } from "./models/menu-item";
// import { Items } from "../../models/items";
// importing service


// importing momentjs

var AddMenuComponent = (function () {
    function AddMenuComponent(getMenu, router, title, getMenuService) {
        this.getMenu = getMenu;
        this.router = router;
        this.title = title;
        this.getMenuService = getMenuService;
        this.items = [];
        this.dateIsSelected = 'false';
        this.categories = [];
        this.catSelected = 'false';
        this.subSelected = 'false';
        this.addedItems = [];
        this.removedItems = [];
        this.outCats = [];
        this.searchable_outCats = [];
        // date = new Date((60 * 60 * 24 * 1));
        this.today = __WEBPACK_IMPORTED_MODULE_5_moment__().format('LLLL');
        this.day_one = __WEBPACK_IMPORTED_MODULE_5_moment__().add(1, 'days');
        this.day_two = __WEBPACK_IMPORTED_MODULE_5_moment__().add(2, 'days');
        this.day_three = __WEBPACK_IMPORTED_MODULE_5_moment__().add(3, 'days');
        this.day_four = __WEBPACK_IMPORTED_MODULE_5_moment__().add(4, 'days');
        this.day_five = __WEBPACK_IMPORTED_MODULE_5_moment__().add(5, 'days');
        // day_six = moment().add(6, 'days');
        // day_seven = moment().add(7, 'days');
        this.dateItems = [];
        this.noItems = [];
    }
    AddMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set title
        this.title.setTitle('Add Menu');
        // Get category
        this.getMenu.getCategories().subscribe(function (res) {
            _this.categories = res.msg;
        });
        this.getMenu.getDates().subscribe(function (res) {
            _this.dates = res;
            res.forEach(function (element) {
                // element.date
                // element.item_id
                _this.getMenuService.getItemDetails(element.item_id).subscribe(function (res) {
                    var json = { date_id: element._id, date: element.date, name: res.msg[0].item_name };
                    _this.outCats.push(json);
                    var searchable_json = { date: element.date, name: res.msg[0].item_name, item_id: res.msg[0]._id };
                    _this.searchable_outCats.push(searchable_json);
                });
            });
        });
    };
    AddMenuComponent.prototype.selectedDate = function (event) {
        // alert(event);
        this.dateIsSelected = 'false';
        this.catSelected = 'false';
        this.subSelected = 'false';
        $('#cat-select').prop('selectedIndex', 0);
        $('#sub-cat-select').prop('selectedIndex', 0);
        this.dateIsSelected = 'true';
        this.dateSelected = event;
    };
    AddMenuComponent.prototype.catSelect = function (event) {
        var _this = this;
        this.catSelected = 'false';
        this.subSelected = 'false';
        // var cjson = {'catId':event};
        this.selectedCat = event;
        var cjson = event;
        this.getMenu.getSubs(cjson).subscribe(function (res) {
            if (res.msg != 'failed') {
                _this.subsOfCat = res;
                _this.catSelected = 'true';
            }
            else {
                console.log(res);
            }
        });
    };
    AddMenuComponent.prototype.subCatSelect = function (subCat) {
        var _this = this;
        this.subSelected = 'true';
        // selected category 
        this.selectedCat;
        // selected sub category
        this.selectedSubCat;
        this.getMenu.getDateItems(this.selectedCat, this.selectedSubCat, this.dateSelected).subscribe(function (res) {
            if (res == 'failed') {
                // alert('failed');
            }
            else {
                _this.items = res.msg;
                _this.items.forEach(function (element) {
                    // console.log(element);
                    // element.item_name;
                    // this.dateSelected;
                    // let searchable_json = {date:element.date,name:res.msg[0].item_name};
                    var find_json = { date: _this.dateSelected, name: element.item_name, item_id: element._id };
                    var found_arr = [];
                    found_arr = _this.searchable_outCats.find(function (find) { return find.date == find_json.date && find_json.name == find.name && find_json.item_id == find.item_id; });
                    // console.log('dorikindi');
                    // console.log(found_arr);
                    if (found_arr == undefined) {
                        element.checked = false;
                    }
                    else {
                        _this.dateItems.push(found_arr);
                        element.checked = true;
                        var temp_array = [find_json.date, find_json.item_id];
                        // console.log(temp_array);
                        // console.log('Added auto to added items');
                        _this.addedItems.push(temp_array);
                        // console.log('added Items');
                        // console.log(this.addedItems);
                    }
                    // console.log(element);
                });
                // console.log(this.items);
                // console.log(this.dateItems);
            }
        });
    };
    AddMenuComponent.prototype.onCheckChange = function (dateSelected, cat_id, sub_name, item_id, isChecked) {
        // alert(item_id);
        if (isChecked == true) {
            var temp_array = [dateSelected, item_id];
            // Add to added items
            // check if it already exists
            for (var x = 0; x < this.addedItems.length; x++) {
                if (this.addedItems[x][0] == dateSelected && this.addedItems[x][1] == item_id) {
                    this.addedItems.splice(x, 1);
                }
            }
            this.addedItems.push(temp_array);
            // console.log(this.addedItems);
            // Remove from removedItems
            for (var x = 0; x < this.removedItems.length; x++) {
                if (this.removedItems[x][0] == dateSelected && this.removedItems[x][1] == item_id) {
                    this.removedItems.splice(x, 1);
                }
            }
            // console.log(this.addedItems);
        }
        else {
            var tmp_array = [dateSelected, item_id];
            // Adding to removed items
            for (var x = 0; x < this.removedItems.length; x++) {
                if (this.removedItems[x][0] == dateSelected && this.removedItems[x][1] == item_id) {
                    this.removedItems.splice(x, 1);
                }
            }
            this.removedItems.push(tmp_array);
            // Removing from added items 
            for (var x = 0; x < this.addedItems.length; x++) {
                if (this.addedItems[x][0] == dateSelected && this.addedItems[x][1] == item_id) {
                    this.addedItems.splice(x, 1);
                }
            }
            // console.log(this.addedItems);
        }
        // console.log('Added items');
        // console.log(this.addedItems);
        // console.log('Removed items');
        // console.log(this.removedItems);
    };
    AddMenuComponent.prototype.submitMenu = function () {
        this.getMenu.postSchedule(this.addedItems, this.removedItems).subscribe(function (res) {
            // console.log(this.addedItems);
            // console.log(this.removedItems);
            if (res) {
                window.location.reload();
                // console.log(res);
            }
        });
    };
    AddMenuComponent.prototype.deleteDate = function (date_id) {
        this.getMenu.deleteDate(date_id).subscribe(function (res) {
            if (res.success) {
                // console.log(res.msg);
                window.location.reload();
            }
            else {
                // console.log(res);
            }
        });
    };
    return AddMenuComponent;
}());
AddMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-menu',
        template: __webpack_require__("../../../../../src/app/admin/add-menu/add-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/add-menu/add-menu.component.css"), __webpack_require__("../../../../../src/app/admin/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_get_menu_service__["a" /* GetMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_get_menu_service__["a" /* GetMenuService */]) === "function" && _d || Object])
], AddMenuComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/add-rewards/add-rewards.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h4{\r\n  color: #888;\r\n}\r\n.view-sub-table td {\r\n  padding: 20px 20px;\r\n  font-size: 130%;\r\n  color: #888;\r\n}\r\n\r\n.cat-close-btn {\r\n  cursor: pointer;\r\n  font-size: 100%;\r\n  color: #888;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/add-rewards/add-rewards.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Orders Section -->\r\n<div class=\"orders-section\">\r\n  <h3>Reward Points</h3>\r\n  <label for=\"admin-name\">User Email :</label>\r\n  <input type=\"text\" [(ngModel)]='userName' value=\"\">\r\n  <label for=\"admin-new-pwd\">Points to be added :</label>\r\n  <input type=\"integer\" [(ngModel)]='points' value=\"\"><br><br>\r\n  <button type=\"button\" class=\"c-btns\" (click)='addRewardPoints()'>SUBMIT</button>\r\n\r\n  <h4>Users</h4>\r\n  <table class=\"table-striped view-sub-table\">\r\n    <tr *ngFor=\"let user of allUsers\">\r\n      <td>\r\n        {{user.name}}\r\n      </td>\r\n      <td>\r\n        {{user.email}}\r\n      </td>\r\n      <td>\r\n        <i class=\"fa fa-times cat-close-btn\" aria-hidden=\"true\" (click)=\"deleteUser(user._id)\"></i>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/add-rewards/add-rewards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRewardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_admin_services_service__ = __webpack_require__("../../../../../src/app/services/admin-services.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddRewardsComponent = (function () {
    function AddRewardsComponent(getMenu, router, title, flash) {
        this.getMenu = getMenu;
        this.router = router;
        this.title = title;
        this.flash = flash;
    }
    AddRewardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set title
        this.title.setTitle('Reward Points');
        this.getMenu.getUsers().subscribe(function (res) {
            _this.allUsers = res;
            console.log(res);
        });
    };
    AddRewardsComponent.prototype.addRewardPoints = function () {
        var _this = this;
        // alert(this.points);
        this.getMenu.postRewards(this.userName, this.points).subscribe(function (res) {
            if (res.success) {
                _this.flash.show('Updated', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.userName = '';
                _this.points = '';
            }
        });
    };
    return AddRewardsComponent;
}());
AddRewardsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-rewards',
        template: __webpack_require__("../../../../../src/app/admin/add-rewards/add-rewards.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/add-rewards/add-rewards.component.css"), __webpack_require__("../../../../../src/app/admin/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_admin_services_service__["a" /* AdminServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_admin_services_service__["a" /* AdminServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], AddRewardsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-rewards.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/add-subs/add-subs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".view-sub-table td {\r\n  padding: 20px 20px;\r\n  font-size: 130%;\r\n}\r\n\r\n.cat-close-btn {\r\n  cursor: pointer;\r\n  font-size: 100%;\r\n  color: #888;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/add-subs/add-subs.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Addons Section -->\r\n<div class=\"orders-section\">\r\n  <h3>Add Sub Category</h3>\r\n</div>\r\n<!-- Orders Listing -->\r\n<div class=\"orders-list-section table-responsive\">\r\n  <table>\r\n    <tr>\r\n      <td>\r\n        Select Category\r\n      </td>\r\n      <td>\r\n        <ul>\r\n        </ul>\r\n        <select [(ngModel)]=\"selectedCat\" (change)=\"catSelect($event.target.value)\">\r\n                    <option *ngFor=\"let category of categories\" value=\"{{category._id}}\">{{category.name}}</option>\r\n                </select>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <h5>Sub Category Name : </h5>\r\n      </td>\r\n      <td>\r\n        <input type=\"text\" id=\"sub-inp\" [(ngModel)]='subName'>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <p class=\"err\"></p>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <button class=\"submit-btns\" (click)='submitSubCat(selectedCat,subName)'>SUBMIT</button>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n  <table class=\"table-striped view-sub-table\">\r\n    <tr *ngFor=\"let sub of subsOfCat\">\r\n      <td>\r\n        {{sub}}\r\n      </td>\r\n      <td>\r\n        <i class=\"fa fa-times cat-close-btn\" aria-hidden=\"true\" (click)=\"deleteSubFromCategory(sub)\"></i>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/add-subs/add-subs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSubsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__ = __webpack_require__("../../../../../src/app/services/admin-services.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddSubsComponent = (function () {
    function AddSubsComponent(getMenu, router, title) {
        this.getMenu = getMenu;
        this.router = router;
        this.title = title;
        this.categories = [];
    }
    AddSubsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set title
        this.title.setTitle('Add Sub Catregories');
        this.getMenu.getCategories().subscribe(function (res) {
            if (res.success) {
                _this.categories = res.msg;
            }
            console.log(res);
        });
    };
    AddSubsComponent.prototype.submitSubCat = function (cat, sub) {
        if (sub) {
            sub = sub.trim();
            var json = { 'category_id': cat, 'sub': sub };
            this.getMenu.addSub(json).subscribe(function (res) {
                if (res.msg == 'success') {
                    // Category added
                    $('.err').html('Added !');
                    $('#sub-inp').val('');
                    window.location.reload();
                }
            });
        }
        else {
            $('.err').html('Sub category name required !');
        }
    };
    AddSubsComponent.prototype.catSelect = function (event) {
        var _this = this;
        // var cjson = {'catId':event};
        this.selectedCat = event;
        var cjson = event;
        this.getMenu.getSubs(cjson).subscribe(function (res) {
            if (res.msg != 'failed') {
                _this.subsOfCat = res;
            }
            else {
                console.log(res.msg);
            }
        });
    };
    AddSubsComponent.prototype.deleteSubFromCategory = function (subName) {
        this.getMenu.deleteSubFromCategory(subName, this.selectedCat).subscribe(function (res) {
            if (res.msg == 'success') {
                // deleted
                $('.err').html('Deleted ' + subName);
                window.location.reload();
            }
            else {
                // failed
                $('.err').html('Failed to delete ' + subName);
            }
        });
    };
    return AddSubsComponent;
}());
AddSubsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-subs',
        template: __webpack_require__("../../../../../src/app/admin/add-subs/add-subs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/add-subs/add-subs.component.css"), __webpack_require__("../../../../../src/app/admin/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
], AddSubsComponent);

var _a, _b, _c;
//# sourceMappingURL=add-subs.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-orders/admin-orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".db{\r\n    z-index: 100;\r\n    position: fixed;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: none;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n.dets-div{\r\n    position: relative;\r\n    display: block;\r\n    height: 80%;\r\n    width: 80%;\r\n    background-color: #fff;\r\n    color:#000;\r\n}\r\n.det-close{\r\n    position: absolute;\r\n    display: block;\r\n    top:5%;\r\n    left: 95%;\r\n    color: #fff;\r\n    font-size: 240%;\r\n    cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-orders/admin-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Orders Section -->\r\n<div class=\"orders-section\">\r\n  <h3>Orders</h3>\r\n  <!-- <div class=\"orders-core\">\r\n    <div class=\"order-tabs-row-one\">\r\n\r\n      <div class=\"order-tab\" id=\"order-tab-one-one\">\r\n        <h4 class=\"order-tab-number\">0</h4>\r\n        <h4 class=\"order-tab-name\">Total Orders</h4>\r\n      </div>\r\n      <div class=\"order-tab\" id=\"order-tab-one-two\">\r\n        <h4 class=\"order-tab-number\">0</h4>\r\n        <h4 class=\"order-tab-name\">Pending Orders</h4>\r\n      </div>\r\n      <div class=\"order-tab\" id=\"order-tab-one-three\">\r\n        <h4 class=\"order-tab-number\">0</h4>\r\n        <h4 class=\"order-tab-name\">In Preparation Orders</h4>\r\n      </div>\r\n      <div class=\"order-tab\" id=\"order-tab-one-four\">\r\n        <h4 class=\"order-tab-number\">0</h4>\r\n        <h4 class=\"order-tab-name\">Out for Delivery Orders</h4>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"order-tabs-row-two\">\r\n\r\n      <div class=\"order-tab\" id=\"order-tab-two-one\">\r\n        <h4 class=\"order-tab-number\">0</h4>\r\n        <h4 class=\"order-tab-name\">Delivered Orders</h4>\r\n      </div>\r\n      <div class=\"order-tab\" id=\"order-tab-two-two\">\r\n        <h4 class=\"order-tab-number\">0</h4>\r\n        <h4 class=\"order-tab-name\">Cancelled Orders</h4>\r\n      </div>\r\n      <div class=\"order-tab\" id=\"order-tab-two-three\">\r\n        <h4 class=\"order-tab-number\">0</h4>\r\n        <h4 class=\"order-tab-name\">Rejected Orders</h4>\r\n      </div>\r\n      <div class=\"order-tab\" id=\"order-tab-two-four\">\r\n        <h4 class=\"order-tab-number\">0</h4>\r\n        <h4 class=\"order-tab-name\">Missed Orders</h4>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div> -->\r\n</div>\r\n<!-- Orders Listing -->\r\n<div class=\"orders-list-section table-responsive\">\r\n  <!-- <label for=\"sort-dropdown\">Sort By:</label><br>\r\n  <select id=\"sort-dropdown\">\r\n      <option value=\"\">Status</option>\r\n  </select> -->\r\n\r\n  \r\n\r\n  <!-- Today -->\r\n  <div class=\"days-div\">\r\n    <h2>{{disp_today_one}} (Today)</h2>\r\n    <table class=\"table table-striped\">\r\n      <tr>\r\n        <th>\r\n          Order id\r\n        </th>\r\n        <th>\r\n          Order Time\r\n        </th>\r\n        <th>\r\n          Delivery Address\r\n        </th>\r\n        <th>\r\n          Payment Type\r\n        </th>\r\n        <th>\r\n          User name\r\n        </th>\r\n        <th>\r\n          User Mobile\r\n        </th>\r\n        <th>\r\n          User Email\r\n        </th>\r\n        <th>\r\n          Details\r\n        </th>\r\n      </tr>\r\n      <tr *ngFor='let today of today_orders'>\r\n        <td>\r\n           {{today.order_id}}\r\n        </td>\r\n        <td>\r\n          {{today.order_time}}\r\n        </td>\r\n        <td>\r\n           {{today.delivery_address}}\r\n        </td>\r\n        <td>\r\n          {{today.payment_type}}\r\n        </td>\r\n        <td>\r\n           {{today.user_name}}\r\n        </td>\r\n        <td>\r\n           {{today.user_mobile}}\r\n        </td>\r\n        <td>\r\n           {{today.user_email}}\r\n        </td>\r\n        <td>\r\n          <span (click)='ViewDetails(\"today\",today.order_id,p_today_one)'>View</span>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n  <!-- Day one -->\r\n  <div class=\"days-div\">\r\n    <h2>{{p_day_one}}</h2>\r\n    <table class=\"table table-striped\">\r\n      <tr>\r\n        <th>\r\n          Order id\r\n        </th>\r\n        <th>\r\n          Order Time\r\n        </th>\r\n        <th>\r\n          Delivery Address\r\n        </th>\r\n        <th>\r\n          Payment Type\r\n        </th>\r\n        <th>\r\n          User name\r\n        </th>\r\n        <th>\r\n          User Mobile\r\n        </th>\r\n        <th>\r\n          User Email\r\n        </th>\r\n        <th>\r\n          Details\r\n        </th>\r\n      </tr>\r\n      <tr *ngFor='let order of day_one_total_orders'>\r\n        <td>\r\n          {{order.order_id}}\r\n        </td>\r\n        <td>\r\n          {{order.order_time}}\r\n        </td>\r\n        <td>\r\n          {{order.delivery_address}}\r\n        </td>\r\n        <td>\r\n          {{order.payment_type}}\r\n        </td>\r\n        <td>\r\n          {{order.user_name}}\r\n        </td>\r\n        <td>\r\n          {{order.user_mobile}}\r\n        </td>\r\n        <td>\r\n          {{order.user_email}}\r\n        </td>\r\n        <td>\r\n          <span (click)='ViewDetails(\"day_one\",order.order_id)'>View</span>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  \r\n  <!-- Day two -->\r\n    <div class=\"days-div\">\r\n      <h2>{{p_day_two}}</h2>\r\n      <table class=\"table table-striped\">\r\n        <tr>\r\n          <th>\r\n            Order id\r\n          </th>\r\n          <th>\r\n            Order Time\r\n          </th>\r\n          <th>\r\n            Delivery Address\r\n          </th>\r\n          <th>\r\n            Payment Type\r\n          </th>\r\n          <th>\r\n            User name\r\n          </th>\r\n          <th>\r\n            User Mobile\r\n          </th>\r\n          <th>\r\n            User Email\r\n          </th>\r\n          <th>\r\n            Details\r\n          </th>\r\n        </tr>\r\n        <tr *ngFor='let order of day_two_total_orders'>\r\n          <td>\r\n            {{order.order_id}}\r\n          </td>\r\n          <td>\r\n            {{order.order_time}}\r\n          </td>\r\n          <td>\r\n            {{order.delivery_address}}\r\n          </td>\r\n          <td>\r\n            {{order.payment_type}}\r\n          </td>\r\n          <td>\r\n            {{order.user_name}}\r\n          </td>\r\n          <td>\r\n            {{order.user_mobile}}\r\n          </td>\r\n          <td>\r\n            {{order.user_email}}\r\n          </td>\r\n          <td>\r\n            <span (click)='ViewDetails(\"day_two\",order.order_id)'>View</span>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n  <!-- Day three -->\r\n    <div class=\"days-div\">\r\n      <h2>{{p_day_three}}</h2>\r\n      <table class=\"table table-striped\">\r\n        <tr>\r\n          <th>\r\n            Order id\r\n          </th>\r\n          <th>\r\n            Order Time\r\n          </th>\r\n          <th>\r\n            Delivery Address\r\n          </th>\r\n          <th>\r\n            Payment Type\r\n          </th>\r\n          <th>\r\n            User name\r\n          </th>\r\n          <th>\r\n            User Mobile\r\n          </th>\r\n          <th>\r\n            User Email\r\n          </th>\r\n          <th>\r\n            Details\r\n          </th>\r\n        </tr>\r\n        <tr *ngFor='let order of day_three_total_orders'>\r\n          <td>\r\n            {{order.order_id}}\r\n          </td>\r\n          <td>\r\n            {{order.order_time}}\r\n          </td>\r\n          <td>\r\n            {{order.delivery_address}}\r\n          </td>\r\n          <td>\r\n            {{order.payment_type}}\r\n          </td>\r\n          <td>\r\n            {{order.user_name}}\r\n          </td>\r\n          <td>\r\n            {{order.user_mobile}}\r\n          </td>\r\n          <td>\r\n            {{order.user_email}}\r\n          </td>\r\n          <td>\r\n            <span (click)='ViewDetails(\"day_three\",order.order_id)'>View</span>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n  <!-- Day four -->\r\n    <div class=\"days-div\">\r\n      <h2>{{p_day_four}}</h2>\r\n      <table class=\"table table-striped\">\r\n        <tr>\r\n          <th>\r\n            Order id\r\n          </th>\r\n          <th>\r\n            Order Time\r\n          </th>\r\n          <th>\r\n            Delivery Address\r\n          </th>\r\n          <th>\r\n            Payment Type\r\n          </th>\r\n          <th>\r\n            User name\r\n          </th>\r\n          <th>\r\n            User Mobile\r\n          </th>\r\n          <th>\r\n            User Email\r\n          </th>\r\n          <th>\r\n            Details\r\n          </th>\r\n        </tr>\r\n        <tr *ngFor='let order of day_four_total_orders'>\r\n          <td>\r\n            {{order.order_id}}\r\n          </td>\r\n          <td>\r\n            {{order.order_time}}\r\n          </td>\r\n          <td>\r\n            {{order.delivery_address}}\r\n          </td>\r\n          <td>\r\n            {{order.payment_type}}\r\n          </td>\r\n          <td>\r\n            {{order.user_name}}\r\n          </td>\r\n          <td>\r\n            {{order.user_mobile}}\r\n          </td>\r\n          <td>\r\n            {{order.user_email}}\r\n          </td>\r\n          <td>\r\n            <span (click)='ViewDetails(\"day_four\",order.order_id)'>View</span>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n  <!-- Day five -->\r\n    <div class=\"days-div\">\r\n      <h2>{{p_day_five}}</h2>\r\n      <table class=\"table table-striped\">\r\n        <tr>\r\n          <th>\r\n            Order id\r\n          </th>\r\n          <th>\r\n            Order Time\r\n          </th>\r\n          <th>\r\n            Delivery Address\r\n          </th>\r\n          <th>\r\n            Payment Type\r\n          </th>\r\n          <th>\r\n            User name\r\n          </th>\r\n          <th>\r\n            User Mobile\r\n          </th>\r\n          <th>\r\n            User Email\r\n          </th>\r\n          <th>\r\n            Details\r\n          </th>\r\n        </tr>\r\n        <tr *ngFor='let order of day_five_total_orders'>\r\n          <td>\r\n            {{order.order_id}}\r\n          </td>\r\n          <td>\r\n            {{order.order_time}}\r\n          </td>\r\n          <td>\r\n            {{order.delivery_address}}\r\n          </td>\r\n          <td>\r\n            {{order.payment_type}}\r\n          </td>\r\n          <td>\r\n            {{order.user_name}}\r\n          </td>\r\n          <td>\r\n            {{order.user_mobile}}\r\n          </td>\r\n          <td>\r\n            {{order.user_email}}\r\n          </td>\r\n          <td>\r\n            <span (click)='ViewDetails(\"day_five\",order.order_id)'>View</span>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n  \r\n    <!-- Day six -->\r\n    <!-- <div class=\"days-div\">\r\n      <h2>{{p_day_six}}</h2>\r\n      <table class=\"table table-striped\">\r\n        <tr>\r\n          <th>\r\n            Order id\r\n          </th>\r\n          <th>\r\n            Order Time\r\n          </th>\r\n          <th>\r\n            Delivery Address\r\n          </th>\r\n          <th>\r\n            Payment Type\r\n          </th>\r\n          <th>\r\n            User name\r\n          </th>\r\n          <th>\r\n            User Mobile\r\n          </th>\r\n          <th>\r\n            User Email\r\n          </th>\r\n          <th>\r\n            Details\r\n          </th>\r\n        </tr>\r\n        <tr *ngFor='let order of day_six_total_orders'>\r\n          <td>\r\n            {{order.order_id}}\r\n          </td>\r\n          <td>\r\n            {{order.order_time}}\r\n          </td>\r\n          <td>\r\n            {{order.delivery_address}}\r\n          </td>\r\n          <td>\r\n            {{order.payment_type}}\r\n          </td>\r\n          <td>\r\n            {{order.user_name}}\r\n          </td>\r\n          <td>\r\n            {{order.user_mobile}}\r\n          </td>\r\n          <td>\r\n            {{order.user_email}}\r\n          </td>\r\n          <td>\r\n            <span (click)='ViewDetails(\"day_six\",order.order_id)'>View</span>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div> -->\r\n\r\n\r\n\r\n</div>\r\n\r\n<div class=\"db\">\r\n  <span (click)='closedb()' class=\"det-close\">X</span>\r\n  <div class=\"dets-div\">\r\n    <table class=\"table table-striped\">\r\n      <tr>\r\n        <th>\r\n          Order Id\r\n        </th>\r\n        <th>\r\n          User Name\r\n        </th>\r\n        <th>\r\n          User Mobile\r\n        </th>\r\n        <th>\r\n          User Email\r\n        </th>\r\n        <th>\r\n          User Address\r\n        </th>\r\n        <th>\r\n          Ordered Items\r\n        </th>\r\n        <th>\r\n          Number of orders\r\n        </th>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n           {{p_h_order_id}}\r\n        </td>\r\n        <td>\r\n           {{p_h_user_name}}\r\n        </td>\r\n        <td>\r\n           {{p_h_user_mobile}}\r\n        </td>\r\n        <td>\r\n           {{p_h_user_email}}\r\n        </td>\r\n        <td>\r\n           {{p_h_address}}\r\n        </td>\r\n        <td>\r\n          <div *ngFor='let order of p_h_order'>\r\n            {{order.item_name}}\r\n          </div>\r\n        </td>\r\n        <td>\r\n           {{p_h_num_times}}\r\n        </td>\r\n      </tr>\r\n    </table>\r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/admin-orders/admin-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_admin_services_service__ = __webpack_require__("../../../../../src/app/services/admin-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_admin_auth_service__ = __webpack_require__("../../../../../src/app/services/admin-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Order } from "./models/order";
// import { OrderedMenu } from "./models/ordered-menu";


var AdminOrdersComponent = (function () {
    function AdminOrdersComponent(getMenu, router, title, datePipe, adminAuth) {
        this.getMenu = getMenu;
        this.router = router;
        this.title = title;
        this.datePipe = datePipe;
        this.adminAuth = adminAuth;
        this.day_one_orders = [];
        this.day_two_orders = [];
        this.day_three_orders = [];
        this.day_four_orders = [];
        this.day_five_orders = [];
        this.day_six_orders = [];
        // today_orders = [];
        this.today_total_orders = [];
        this.day_one_total_orders = [];
        this.day_two_total_orders = [];
        this.day_three_total_orders = [];
        this.day_four_total_orders = [];
        this.day_five_total_orders = [];
        this.day_six_total_orders = [];
        this.today_one = __WEBPACK_IMPORTED_MODULE_4_moment__();
        this.day_one = __WEBPACK_IMPORTED_MODULE_4_moment__().add(1, 'days');
        this.day_two = __WEBPACK_IMPORTED_MODULE_4_moment__().add(2, 'days');
        this.day_three = __WEBPACK_IMPORTED_MODULE_4_moment__().add(3, 'days');
        this.day_four = __WEBPACK_IMPORTED_MODULE_4_moment__().add(4, 'days');
        this.day_five = __WEBPACK_IMPORTED_MODULE_4_moment__().add(5, 'days');
        this.day_six = __WEBPACK_IMPORTED_MODULE_4_moment__().add(6, 'days');
        this.day_seven = __WEBPACK_IMPORTED_MODULE_4_moment__().add(7, 'days');
        this.p_h_order = [];
        this.today_orders = [];
    }
    AdminOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // alert(this.today_one);
        // Set title
        this.title.setTitle('View Orders');
        // Dates for next seven days
        this.p_today_one = this.datePipe.transform(this.today_one, 'fullDate');
        this.p_day_one = this.datePipe.transform(this.day_one, 'fullDate');
        this.p_day_two = this.datePipe.transform(this.day_two, 'fullDate');
        this.p_day_three = this.datePipe.transform(this.day_three, 'fullDate');
        this.p_day_four = this.datePipe.transform(this.day_four, 'fullDate');
        this.p_day_five = this.datePipe.transform(this.day_five, 'fullDate');
        // this.p_day_six = this.datePipe.transform(this.day_six, 'fullDate');
        this.disp_today_one = this.p_today_one;
        this.disp_day_one = this.p_day_one;
        this.disp_day_two = this.p_day_two;
        this.disp_day_three = this.p_day_three;
        this.disp_day_four = this.p_day_four;
        this.disp_day_five = this.p_day_five;
        // this.disp_day_six = this.p_day_six;
        // Get orders
        this.getMenu.getOrders().subscribe(function (res) {
            _this.total_orders = res.msg;
            _this.total_orders.forEach(function (element) {
                if (element.order.order) {
                    // console.log(element.order);
                    var user_id_1 = element.order.user_id;
                    var order_time_1 = element.order.order_time;
                    var order_id_1 = element.order.order_id;
                    _this.getMenu.getUserFromId(user_id_1).subscribe(function (res) {
                        if (res.success) {
                            var user = res.msg;
                            var username = user[0].name;
                            var user_mobile = user[0].mobile;
                            var user_email = user[0].email;
                            // Today
                            if (_this.p_today_one == element.order.order.today.date) {
                                // Add these to today orders
                                // tab_one, tab_two,tab_three
                                var iind = { user_id: user_id_1, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id_1, order_time: order_time_1, delivery_address: element.order.delivery_address, order: element.order.order.today, payment_type: element.order.payment_method };
                                _this.today_orders.push(iind);
                                // console.log('see');
                                // console.log(iind);
                            }
                            // Next Days
                            _this.next_days = element.order.order.next_days;
                            for (var key in _this.next_days) {
                                if (_this.next_days.hasOwnProperty(key)) {
                                    var e = _this.next_days[key];
                                    if (e != null) {
                                        switch (e.date) {
                                            case _this.p_today_one:
                                                console.log(e.date);
                                                var iind = { user_id: user_id_1, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id_1, order_time: order_time_1, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method };
                                                _this.today_orders.push(iind);
                                                break;
                                            case _this.p_day_one:
                                                _this.day_one_orders.push(e);
                                                // let order = this.day_one_orders;
                                                var ind = { user_id: user_id_1, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id_1, order_time: order_time_1, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method };
                                                _this.day_one_total_orders.push(ind);
                                                // console.log(ind);
                                                break;
                                            case _this.p_day_two:
                                                _this.day_two_orders.push(e);
                                                var indd = { user_id: user_id_1, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id_1, order_time: order_time_1, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method };
                                                _this.day_two_total_orders.push(indd);
                                                break;
                                            case _this.p_day_three:
                                                _this.day_three_orders.push(e);
                                                var inddd = { user_id: user_id_1, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id_1, order_time: order_time_1, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method };
                                                _this.day_three_total_orders.push(inddd);
                                                break;
                                            case _this.p_day_four:
                                                _this.day_four_orders.push(e);
                                                var indddd = { user_id: user_id_1, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id_1, order_time: order_time_1, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method };
                                                _this.day_four_total_orders.push(indddd);
                                                break;
                                            case _this.p_day_five:
                                                _this.day_five_orders.push(e);
                                                var innddd = { user_id: user_id_1, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id_1, order_time: order_time_1, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method };
                                                _this.day_five_total_orders.push(innddd);
                                                break;
                                            case _this.p_day_six:
                                                _this.day_six_orders.push(e);
                                                var iinddd = { user_id: user_id_1, user_name: username, user_mobile: user_mobile, user_email: user_email, order_id: order_id_1, order_time: order_time_1, delivery_address: element.order.delivery_address, order: e, payment_type: element.order.payment_method };
                                                _this.day_six_total_orders.push(iinddd);
                                                break;
                                            default:
                                                break;
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            // user = 'No';
                        }
                    });
                    // console.log(this.day_one_total_orders);
                }
            });
        });
    };
    AdminOrdersComponent.prototype.getUserfromUserId = function (id) {
        // return 
        var user;
        this.getMenu.getUserFromId(id).subscribe(function (res) {
            if (res.success) {
                user = res.msg;
            }
            else {
                user = 'No';
            }
        });
        return user;
    };
    AdminOrdersComponent.prototype.ViewDetails = function (today, order_id, date) {
        var _this = this;
        this.p_h_order = [];
        // Display the dark back
        $('.db').css({ 'display': 'flex' });
        switch (today) {
            case 'today':
                // Get order with order id
                console.log(this.today_orders);
                // place_holder_order = this.today_orders;
                // this.p_today_one;
                this.today_orders.forEach(function (element) {
                    // console.log(element.order_id);
                    if (order_id == element.order_id) {
                        // console.log(element);
                        _this.p_h_order_id = element.order_id;
                        _this.p_h_user_name = element.user_name;
                        _this.p_h_user_email = element.user_email;
                        _this.p_h_user_mobile = element.user_mobile;
                        _this.p_h_address = element.delivery_address;
                        _this.p_h_num_times = element.order.numOfTimes;
                        console.log('kk' + element.order.numOfTimes);
                        element.order.menu.forEach(function (el) {
                            _this.p_h_order.push(el);
                            // console.log(this.p_h_order);
                        });
                    }
                });
                break;
            case 'day_one':
                this.day_one_total_orders.forEach(function (element) {
                    if (order_id == element.order_id) {
                        // console.log(element);
                        _this.p_h_order_id = element.order_id;
                        _this.p_h_user_name = element.user_name;
                        _this.p_h_user_email = element.user_email;
                        _this.p_h_user_mobile = element.user_mobile;
                        _this.p_h_address = element.delivery_address;
                        _this.p_h_num_times = element.order.numOfTimes;
                        // console.log('kk' + element.order.numOfTimes);
                        element.order.menu.forEach(function (el) {
                            _this.p_h_order.push(el);
                        });
                    }
                });
                break;
            case 'day_two':
                console.log(this.day_two_total_orders);
                this.day_two_total_orders.forEach(function (element) {
                    console.log(element.order_id);
                    if (order_id == element.order_id) {
                        // console.log(element);
                        _this.p_h_order_id = element.order_id;
                        _this.p_h_user_name = element.user_name;
                        _this.p_h_user_email = element.user_email;
                        _this.p_h_user_mobile = element.user_mobile;
                        _this.p_h_address = element.delivery_address;
                        _this.p_h_num_times = element.order.numOfTimes;
                        // console.log('kk' + element.order.numOfTimes);
                        element.order.menu.forEach(function (el) {
                            _this.p_h_order.push(el);
                        });
                    }
                });
                // this.p_day_two;
                break;
            case 'day_three':
                this.day_three_total_orders.forEach(function (element) {
                    if (order_id == element.order_id) {
                        // console.log(element);
                        _this.p_h_order_id = element.order_id;
                        _this.p_h_user_name = element.user_name;
                        _this.p_h_user_email = element.user_email;
                        _this.p_h_user_mobile = element.user_mobile;
                        _this.p_h_address = element.delivery_address;
                        _this.p_h_num_times = element.order.numOfTimes;
                        // console.log('kk' + element.order.numOfTimes);
                        element.order.menu.forEach(function (el) {
                            _this.p_h_order.push(el);
                        });
                    }
                });
                // this.p_day_three;
                break;
            case 'day_four':
                // console.log(this.day_four_total_orders);
                this.day_four_total_orders.forEach(function (element) {
                    if (order_id == element.order_id) {
                        // console.log(element);
                        _this.p_h_order_id = element.order_id;
                        _this.p_h_user_name = element.user_name;
                        _this.p_h_user_email = element.user_email;
                        _this.p_h_user_mobile = element.user_mobile;
                        _this.p_h_address = element.delivery_address;
                        _this.p_h_num_times = element.order.numOfTimes;
                        // console.log('kk' + element.order.numOfTimes);
                        element.order.menu.forEach(function (el) {
                            _this.p_h_order.push(el);
                        });
                    }
                });
                // this.p_day_four;
                break;
            case 'day_five':
                // console.log(this.day_five_total_orders);
                this.day_five_total_orders.forEach(function (element) {
                    if (order_id == element.order_id) {
                        // console.log(element);
                        _this.p_h_order_id = element.order_id;
                        _this.p_h_user_name = element.user_name;
                        _this.p_h_user_email = element.user_email;
                        _this.p_h_user_mobile = element.user_mobile;
                        _this.p_h_address = element.delivery_address;
                        _this.p_h_num_times = element.order.numOfTimes;
                        // console.log('kk' + element.order.numOfTimes);
                        element.order.menu.forEach(function (el) {
                            _this.p_h_order.push(el);
                        });
                    }
                });
                // this.p_day_five;
                break;
            case 'day_six':
                console.log(this.day_six_total_orders);
                this.day_six_total_orders.forEach(function (element) {
                    if (order_id == element.order_id) {
                        // console.log(element);
                        _this.p_h_order_id = element.order_id;
                        _this.p_h_user_name = element.user_name;
                        _this.p_h_user_email = element.user_email;
                        _this.p_h_user_mobile = element.user_mobile;
                        _this.p_h_address = element.delivery_address;
                        _this.p_h_num_times = element.order.numOfTimes;
                        // console.log('kk' + element.order.numOfTimes);
                        element.order.menu.forEach(function (el) {
                            _this.p_h_order.push(el);
                        });
                    }
                });
                // this.p_day_six;
                break;
            default:
                break;
        }
    };
    AdminOrdersComponent.prototype.closedb = function () {
        $('.db').hide();
    };
    return AdminOrdersComponent;
}());
AdminOrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__("../../../../../src/app/admin/admin-orders/admin-orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-orders/admin-orders.component.css"), __webpack_require__("../../../../../src/app/admin/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_admin_services_service__["a" /* AdminServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_admin_services_service__["a" /* AdminServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_admin_auth_service__["a" /* AdminAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_admin_auth_service__["a" /* AdminAuthService */]) === "function" && _e || Object])
], AdminOrdersComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=admin-orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Bubblegum+Sans|Open+Sans);", ""]);

// module
exports.push([module.i, ".main-container {\r\n  position: relative;\r\n  display: block;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100vw;\r\n  overflow: hidden;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n\r\n/* Main header */\r\n\r\n.main-header {\r\n  z-index: 8;\r\n  position: relative;\r\n  display: block;\r\n  top: 0px;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 10vh;\r\n  background-color: #232C33;\r\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.main-header .container {\r\n  height: 100%;\r\n  width: 90%;\r\n}\r\n\r\n.main-logo,\r\n.logout-div {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.logo-text {\r\n  margin: 0;\r\n  font-family: 'Bubblegum Sans', cursive;\r\n  font-size: 340%;\r\n  color: #fff;\r\n}\r\n\r\n.main-logout-btn {\r\n  border: none;\r\n  background: transparent;\r\n  color: #fff;\r\n  font-size: 120%;\r\n  margin-right: 30px;\r\n}\r\n\r\n\r\n/* Left index */\r\n\r\n.left-menu {\r\n  position: relative;\r\n  display: block;\r\n  background-color: #232C33;\r\n  width: 20%;\r\n  height: 90vh;\r\n  color: #fff;\r\n  margin: 0;\r\n}\r\n\r\n.left-menu li {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  padding-left: 30px;\r\n  border-left: 3px solid transparent;\r\n  height: 50px;\r\n  font-size: 120%;\r\n  transition: all 0.2s ease-in;\r\n}\r\n\r\n.left-menu li:hover {\r\n  cursor: pointer;\r\n  background-color: #142026;\r\n}\r\n\r\n.left-menu .selected-li {\r\n  border-left: 3px solid #4288BB;\r\n  background-color: #142026;\r\n}\r\n\r\n.left-menu li i {\r\n  margin-right: 20px;\r\n}\r\n\r\n\r\n/* Right dets */\r\n\r\n.right-dets {\r\n  position: relative;\r\n  display: block;\r\n  background-color: #EBEFF6;\r\n  width: 80%;\r\n  padding: 20px;\r\n  height: 90vh;\r\n  color: #fff;\r\n  margin: 0;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.orders-section {\r\n  position: relative;\r\n  display: block;\r\n  margin: 0;\r\n}\r\n\r\n.orders-section h3 {\r\n  margin: 0 0 10px 0;\r\n  color: #36AEBB;\r\n}\r\n\r\n.orders-core {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  -webkit-justify-content: space-around;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.order-tabs-row-one,\r\n.order-tabs-row-two {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.order-tab {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  -webkit-align-items: flex-start;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  margin: 20px;\r\n  height: 100px;\r\n}\r\n\r\n.order-tab h4 {\r\n  margin: 0;\r\n  margin-left: 20px\r\n}\r\n\r\n.order-tab .order-tab-number {\r\n  font-size: 200%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.order-tab-name {\r\n  white-space: nowrap;\r\n  font-size: 110%;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n/* Coloring order tabs */\r\n\r\n\r\n/* Row One */\r\n\r\n#order-tab-one-one {\r\n  background-color: #659BE0;\r\n  border-bottom: 4px solid #6189C5;\r\n}\r\n\r\n#order-tab-one-two {\r\n  background-color: #01A75B;\r\n  border-bottom: 4px solid #0B8F51;\r\n}\r\n\r\n#order-tab-one-three {\r\n  background-color: #F2C30E;\r\n  border-bottom: 4px solid #D8B107;\r\n}\r\n\r\n#order-tab-one-four {\r\n  background-color: #6BDE6F;\r\n  border-bottom: 4px solid #69BB6C;\r\n}\r\n\r\n\r\n/* Row Two */\r\n\r\n#order-tab-two-one {\r\n  background-color: #01A75B;\r\n  border-bottom: 4px solid #008944;\r\n}\r\n\r\n#order-tab-two-two {\r\n  background-color: #32C5D2;\r\n  border-bottom: 4px solid #26AAB3;\r\n}\r\n\r\n#order-tab-two-three {\r\n  background-color: #DD4B39;\r\n  border-bottom: 4px solid #C9432F;\r\n}\r\n\r\n#order-tab-two-four {\r\n  background-color: #F29D12;\r\n  border-bottom: 4px solid #D08711;\r\n}\r\n\r\n\r\n/* Orders Listing Section */\r\n\r\n.orders-list-section {\r\n  color: #1A1D26;\r\n}\r\n\r\n#sort-dropdown {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n\r\n/* Report page */\r\n\r\n.orders-core .c-order-tab {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  height: 100px;\r\n  width: 340px !important;\r\n  margin: 20px 0;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  background-color: #fff;\r\n  color: #000;\r\n  border-radius: 3px;\r\n  overflow: hidden;\r\n}\r\n\r\n.c-icon {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  color: #fff;\r\n  font-size: 400%;\r\n  width: 40%;\r\n  height: 100%;\r\n  margin: 0;\r\n  background-color: #DD4B38;\r\n}\r\n\r\n.c-dets {\r\n  width: 60%;\r\n  height: 100%;\r\n  margin: 0;\r\n  background-color: #fff;\r\n}\r\n\r\n.c-tab-head,\r\n.c-tab-det {\r\n  position: relative;\r\n  display: block;\r\n  text-align: left;\r\n  font-weight: bold;\r\n  color: #000;\r\n  margin: 10px 10px;\r\n  font-size: 100%;\r\n}\r\n\r\n.c-tab-det {\r\n  font-weight: normal;\r\n  margin: 5px 10px;\r\n}\r\n\r\n.c-filter-div {\r\n  position: relative;\r\n  display: block;\r\n  margin: 7px auto;\r\n}\r\n\r\n.c-btns {\r\n  background-color: #EEAA3E;\r\n  border: none;\r\n  border-bottom: 2px solid #D0943A;\r\n  color: #fff;\r\n  border-radius: 3px;\r\n}\r\n\r\n\r\n/* Categories Page */\r\n\r\n.dark-back {\r\n  z-index: 100;\r\n  position: fixed;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  display: none;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.white-back {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  background-color: #fff;\r\n  height: 60%;\r\n  width: 50%;\r\n}\r\n\r\n#cat-input {\r\n  border: 1px solid #eee;\r\n  height: 35px;\r\n  width: 300px;\r\n  border-radius: 3px;\r\n  padding: 0 5px;\r\n}\r\n\r\n.cat-submit-btn {\r\n  border: none;\r\n  background-color: #91022A;\r\n  color: #fff;\r\n  margin-top: 20px;\r\n  height: 35px;\r\n  width: 140px;\r\n  border-radius: 4px;\r\n  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.orders-section label {\r\n  display: block;\r\n  color: #555;\r\n  margin-top: 8px;\r\n}\r\n\r\n.orders-section input {\r\n  color: #555;\r\n}\r\n\r\n\r\n/* Mobile ones */\r\n\r\n.mob-menu-trig-btn {\r\n  height: 100%;\r\n  width: 60px;\r\n  margin-right: 20px;\r\n  background: transparent;\r\n  border: none;\r\n  color: #fff;\r\n  font-size: 130%;\r\n  outline: none;\r\n}\r\n\r\n.mob-main-logo {\r\n  position: absolute;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  height: 100%;\r\n}\r\n\r\n.mob-main-logo .logo-text {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n\r\n/* Mobile menu */\r\n\r\n.mob-menu {\r\n  z-index: 10;\r\n  position: fixed;\r\n  display: block;\r\n  top: 0;\r\n  left: -50vw;\r\n  width: 50vw;\r\n  height: 100vh;\r\n  background-color: #232C33;\r\n  color: #fff;\r\n}\r\n\r\n.mob-menu li {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  padding-left: 30px;\r\n  border-left: 3px solid transparent;\r\n  height: 50px;\r\n  font-size: 120%;\r\n  transition: all 0.2s ease-in;\r\n}\r\n\r\n.mob-menu li:hover {\r\n  cursor: pointer;\r\n  background-color: #142026;\r\n}\r\n\r\n.mob-menu .selected-li {\r\n  border-left: 3px solid #4288BB;\r\n  background-color: #142026;\r\n}\r\n\r\n.mob-menu li i {\r\n  margin-right: 20px;\r\n}\r\n\r\n#add-item-table h4 {\r\n  margin: 10px auto;\r\n  text-align: left;\r\n}\r\n\r\n.submit-btns {\r\n  margin: 10px auto;\r\n  border: none;\r\n  height: 30px;\r\n  width: 150px;\r\n  background-color: #e67e22;\r\n  color: #fff;\r\n}\r\n\r\n.menu-add-table h5 {\r\n  margin: auto 50px;\r\n}\r\n\r\n.menu-add-table label {\r\n  font-weight: normal;\r\n}\r\n\r\n.menu-add-table .sc-ch-mid-heads {\r\n  margin: 20px auto;\r\n  font-weight: bold;\r\n}\r\n\r\n.menu-add-table tr {\r\n  border-bottom: 1px solid #666;\r\n}\r\n\r\n\r\n/* Extra Small Devices, .visible-xs-* */\r\n\r\n\r\n/* @media (max-width: 480px) {} */\r\n\r\n@media (max-width: 767px) {\r\n  .right-dets {\r\n    width: 100%;\r\n  }\r\n  .order-tabs-row-one,\r\n  .order-tabs-row-two {\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: -webkit-flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-align-items: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n  .order-tab {\r\n    width: 80%;\r\n  }\r\n}\r\n\r\n\r\n/* Small Devices, .visible-sm-* */\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {}\r\n\r\n\r\n/* Medium Devices, .visible-md-* */\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {}\r\n\r\n\r\n/* Large Devices, .visible-lg-* */\r\n\r\n@media (min-width: 1200px) {}\r\n\r\n.add-menu-div {\r\n  z-index: 100;\r\n  position: fixed;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: none;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: #fff;\r\n  color: #000;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mob-menu\">\r\n  <ul class=\"list-unstyled\">\r\n    <li class=\"selected-li\"> <i class=\"fa fa-bars\" aria-hidden=\"true\"></i> Orders </li>\r\n    <li> <i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i> Report </li>\r\n    <li> <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i> Category </li>\r\n    <li> <i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i> Menu </li>\r\n    <li> <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i> Addons </li>\r\n    <li> <i class=\"fa fa-archive\" aria-hidden=\"true\"></i> Offers </li>\r\n    <li> <i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i> Bookings </li>\r\n    <li> <i class=\"fa fa-money\" aria-hidden=\"true\"></i> Payment </li>\r\n    <li> <i class=\"fa fa-user\" aria-hidden=\"true\"></i> Accounts </li>\r\n    <li> <i class=\"fa fa-cog\" aria-hidden=\"true\"></i> Settings </li>\r\n    <li> <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Reviews </li>\r\n    <li> <i class=\"fa fa-line-chart\" aria-hidden=\"true\"></i> Logout </li>\r\n  </ul>\r\n</div>\r\n<div class=\"main-container\">\r\n  <!-- Header -->\r\n  <header class=\"main-header\">\r\n    <div class=\"container\">\r\n      <button type=\"button\" class=\"mob-menu-trig-btn pull-left visible-sm visible-xs\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></button>\r\n      <div class=\"main-logo pull-left visible-md visible-lg\">\r\n        <img src=\"../../assets/logo/logo.png\" alt=\"\" srcset=\"\" style=\"height:80%; width:auto\">\r\n      </div>\r\n      <div class=\"main-logo visible-xs visible-sm mob-main-logo\">\r\n        <h1 class=\"logo-text\">fysu</h1>\r\n      </div>\r\n      <div class=\"logout-div pull-right visible-md visible-lg\" *ngIf=\"authService.loggedIn()\">\r\n        <button type=\"button\" class=\"main-logout-btn\" (click)=\"onLogoutClick()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> &nbsp; Logout</button>\r\n      </div>\r\n    </div>\r\n  </header>\r\n\r\n  <!-- Body -->\r\n  <div class=\"container-core\">\r\n    <!-- Left Menu -->\r\n    <div class=\"left-menu pull-left visible-md visible-lg\" *ngIf=\"authService.loggedIn()\">\r\n\r\n      <ul class=\"list-unstyled\" *ngIf=\"authService.loggedIn()\">\r\n        <a routerLink='/admin/orders'>\r\n          <li class=\"selected-li\"> <i class=\"fa fa-bars\" aria-hidden=\"true\"></i> Orders </li>\r\n        </a>\r\n        <a routerLink='/admin/add-menu'>\r\n          <li> <i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i> Menu </li>\r\n        </a>\r\n        <a routerLink='/admin/add-category'>\r\n          <li> <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i> Add Category</li>\r\n        </a>\r\n        <a routerLink='/admin/add-sub-category'>\r\n          <li> <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i> Add Sub Category</li>\r\n        </a>\r\n        <a routerLink='/admin/add-items'>\r\n          <li> <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i> Add Items</li>\r\n        </a>\r\n        <a routerLink='/admin/add-rewards'>\r\n          <li> <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Reward </li>\r\n        </a>\r\n        <a routerLink='/admin/add-admin'>\r\n          <li> <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Add Admin </li>\r\n        </a>\r\n        <a routerLink='/admin/reports'>\r\n          <li> <i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i> Report </li>\r\n        </a>\r\n      </ul>\r\n    </div>\r\n\r\n    <!-- Right Dets  -->\r\n    <div class=\"right-dets pull-right\">\r\n      <flash-messages></flash-messages>\r\n\r\n      <router-outlet>\r\n\r\n      </router-outlet>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_admin_auth_service__ = __webpack_require__("../../../../../src/app/services/admin-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = (function () {
    function AdminComponent(authService, router, title, flash) {
        this.authService = authService;
        this.router = router;
        this.title = title;
        this.flash = flash;
    }
    AdminComponent.prototype.ngOnInit = function () {
        // Title
        this.title.setTitle('Admin');
        // Mobile menu on menu click
        $('.mob-menu-trig-btn').click(function () {
            var mob_menu_offest = $('.mob-menu').offset().left;
            if (mob_menu_offest < 0) {
                $('.main-container').animate({
                    'margin-left': '50vw'
                }, 200);
                $('.mob-menu').animate({
                    'left': '0'
                }, 200);
            }
            else {
                $('.main-container').animate({
                    'margin-left': '0vw'
                }, 200);
                $('.mob-menu').animate({
                    'left': '-50vw'
                }, 200);
            }
        });
        // $('.left-menu a').click(function () {
        //   alert('hel');
        //   // $('.left-menu li').removeClass('selected-li');
        //   // this.classList.add('selected-li');
        // });
    };
    AdminComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flash.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/admin/login']);
        return false;
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_admin_auth_service__["a" /* AdminAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_admin_auth_service__["a" /* AdminAuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], AdminComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  background-color: transparent;\r\n  color: #000;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 60%;\r\n}\r\n\r\nlabel {\r\n  font-weight: normal;\r\n  margin-bottom: 20px;\r\n  font-size: 130%;\r\n}\r\n\r\ninput {\r\n  outline: none;\r\n  margin-bottom: 20px;\r\n  border: none;\r\n  border-bottom: 1px solid #111;\r\n}\r\n\r\nbutton {\r\n  height: 40px;\r\n  width: 150px;\r\n  background-color: #000;\r\n  color: #fff;\r\n  border: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Orders Section -->\r\n<div class=\"orders-section\">\r\n  <div class=\"container\">\r\n    <h3>Admin Login</h3>\r\n    <form (submit)=\"adminLoginFormSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label>Admin name</label>\r\n        <input type=\"text\" name=\"adminname\" [(ngModel)]=\"adminname\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Password</label>\r\n        <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\">\r\n      </div>\r\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\" style=\"color:#fff\">\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_admin_auth_service__ = __webpack_require__("../../../../../src/app/services/admin-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_admin_auth_guard__ = __webpack_require__("../../../../../src/app/guards/admin-auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(router, title, authService, flash, adminAuth) {
        this.router = router;
        this.title = title;
        this.authService = authService;
        this.flash = flash;
        this.adminAuth = adminAuth;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Login');
        if (this.authService.loggedIn() == true) {
            this.router.navigate(['/admin/orders']);
        }
    };
    LoginComponent.prototype.adminLoginFormSubmit = function () {
        var _this = this;
        var admin = {
            adminname: this.adminname,
            password: this.password
        };
        // this.router.navigate(['/admin/add-admin']);
        this.authService.authenticateAdmin(admin).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeAdminData(data.token, data.admin);
                _this.flash.show('You are logged in !', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['/admin/orders']);
            }
            else {
                _this.flash.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['/admin/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/admin/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/login/login.component.css"), __webpack_require__("../../../../../src/app/admin/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_admin_auth_service__["a" /* AdminAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_admin_auth_service__["a" /* AdminAuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__guards_admin_auth_guard__["a" /* AdminAuthGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__guards_admin_auth_guard__["a" /* AdminAuthGuard */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/reports/reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Reports Section -->\r\n<div class=\"orders-section\">\r\n  <h3>Reports</h3>\r\n<!-- Reports Listing -->\r\n<div class=\"orders-list-section table-responsive\">\r\n  <div class=\"c-filer-div\">\r\n    <div class=\"pull-left\">\r\n      \r\n      <form #myForm=\"ngForm\" novalidate>\r\n        <my-date-picker name=\"mydate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"fromDate\" required></my-date-picker><br>\r\n        <my-date-picker name=\"mydate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"toDate\" required></my-date-picker>\r\n        <button type=\"button\" class=\"c-btns\" (click)='datesUpdated()'>Show</button>\r\n      </form>\r\n    </div>\r\n    <div class=\"pull-right\">\r\n      <button type=\"button\" class=\"c-btns\" id=\"generate-pdf-btn\">Generate PDF</button>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n  <div *ngFor='let item of un_items'>\r\n    {{item.item_name}}:{{item.num_of_times}}\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_admin_services_service__ = __webpack_require__("../../../../../src/app/services/admin-services.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportsComponent = (function () {
    // filter_array:any=[];
    function ReportsComponent(getMenu, router, title, datePipe) {
        this.getMenu = getMenu;
        this.router = router;
        this.title = title;
        this.datePipe = datePipe;
        this.fromDate = { date: { year: 2017, month: 10, day: 1 } };
        this.toDate = { date: { year: 2017, month: 10, day: 4 } };
        this.allTodayOrders = [];
        this.allNextDayOrders = [];
        this.orders_of_these_sc_days = [];
        this.today_all_items = [];
        this.sc_all_items = [];
        // all_items:any=[];
        // unique_items:any=[];
        this.un_items = [];
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'dd.mm.yyyy',
        };
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set title
        this.title.setTitle('Reports');
        // Get orders
        this.getMenu.getOrders().subscribe(function (res) {
            if (res.success) {
                // All today orders within brought orders
                res.msg.forEach(function (element) {
                    if (element.order.order != null || element.order.order != undefined) {
                        // push today orders
                        _this.allTodayOrders.push(element.order.order.today);
                        // push next day orders
                        _this.allNextDayOrders.push(element.order.order.next_days);
                    }
                });
            }
        });
    };
    ReportsComponent.prototype.datesUpdated = function () {
        var _this = this;
        var datesArray = [];
        // console.log(this.datesArray);
        var unique_items = [];
        var filter_array = [];
        this.un_items = [];
        var all_items = [];
        var orders_of_todays = [];
        var orders_of_next_days = [];
        this.fromDate;
        this.toDate;
        var for_from = this.fromDate.date.month + '/' + this.fromDate.date.day + '/' + this.fromDate.date.year;
        var for_to = this.toDate.date.month + '/' + this.toDate.date.day + '/' + this.toDate.date.year;
        var from = this.datePipe.transform(for_from, 'fullDate');
        var to = this.datePipe.transform(for_to, 'fullDate');
        var mfrom = __WEBPACK_IMPORTED_MODULE_4_moment__(this.datePipe.transform(from, 'shortDate'));
        var mto = __WEBPACK_IMPORTED_MODULE_4_moment__(this.datePipe.transform(to, 'shortDate'));
        var new_from = mto.diff(mfrom, 'days');
        for (var i = 1; i <= new_from; i++) {
            var ph = mfrom;
            datesArray.push(this.datePipe.transform(ph.add(1, 'days'), 'fullDate'));
        }
        datesArray.forEach(function (element) {
            // Today dates
            _this.allTodayOrders.forEach(function (to_e) {
                if (to_e.date == element) {
                    orders_of_todays.push(to_e);
                }
            });
            // console.log('index');
            // console.log(this.allNextDayOrders);
            // Next days orders
            _this.allNextDayOrders.forEach(function (n_e) {
                // day_one
                if (n_e.day_one != null) {
                    if (n_e.day_one.date == element) {
                        orders_of_next_days.push(n_e.day_one);
                    }
                }
                // day_two
                if (n_e.day_two != null) {
                    if (n_e.day_two.date == element) {
                        orders_of_next_days.push(n_e.day_two);
                    }
                }
                // day_three
                if (n_e.day_three != null) {
                    if (n_e.day_three.date == element) {
                        orders_of_next_days.push(n_e.day_three);
                    }
                }
                // n_e.day_three.date
                // day_four
                if (n_e.day_four != null) {
                    if (n_e.day_four.date == element) {
                        orders_of_next_days.push(n_e.day_four);
                    }
                }
                // n_e.day_four.date
                // day_five
                if (n_e.day_five != null) {
                    if (n_e.day_five.date == element) {
                        orders_of_next_days.push(n_e.day_five);
                    }
                }
                // n_e.day_five.date
                // day_six
                if (n_e.day_six != null) {
                    if (n_e.day_six.date == element) {
                        orders_of_next_days.push(n_e.day_six);
                    }
                }
                // n_e.day_six.date
            });
        });
        orders_of_next_days.forEach(function (t) {
            // iterate through t.menu
            t.menu.forEach(function (menu_el) {
                all_items.push(menu_el.item_name);
                var p_ar = all_items;
                filter_array = p_ar.filter(function (item, pos) {
                    return p_ar.indexOf(item) == pos;
                });
                // for each object in unique_items
                var j_obj = [menu_el.item_name, parseInt(t.numOfTimes)];
                unique_items.push(j_obj);
            });
        });
        this.un_items = [];
        if (this.un_items.length < 1) {
            filter_array.forEach(function (far) {
                var js = { item_name: far, num_of_times: 0 };
                _this.un_items.push(js);
            });
        }
        unique_items.forEach(function (uu) {
            _this.un_items.forEach(function (unq) {
                if (unq.item_name == uu[0]) {
                    unq.num_of_times = unq.num_of_times + uu[1];
                    // unq.num_of_times = unq.num_of_times;
                    // console.log('match');
                }
            });
        });
        // console.log(this.un_items);
        all_items.length = 0;
        all_items = [];
        filter_array.length = 0;
        filter_array = [];
        unique_items = [];
        unique_items.length = 0;
        orders_of_next_days = [];
        orders_of_next_days.length = 0;
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reports',
        template: __webpack_require__("../../../../../src/app/admin/reports/reports.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/reports/reports.component.css"), __webpack_require__("../../../../../src/app/admin/admin/admin.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_admin_services_service__["a" /* AdminServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_admin_services_service__["a" /* AdminServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]) === "function" && _d || Object])
], ReportsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Bubblegum+Sans|Open+Sans);", ""]);

// module
exports.push([module.i, "body,\r\nhtml {\r\n  font-family: 'Open Sans', sans-serif;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n}\r\n\r\na:hover {\r\n  text-decoration: none !important;\r\n}\r\n\r\n.vp {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\n.dark-cover {\r\n  z-index: 2;\r\n  position: absolute;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.main-logo h1 {\r\n  margin: 0;\r\n  font-family: 'Bubblegum Sans', cursive;\r\n  font-size: 340%;\r\n}\r\nbutton p{\r\n  line-height: 0 !important;\r\n}\r\nbutton:active,\r\nbutton:focus,\r\ninput:focus,\r\ninput:active {\r\n  outline: none !important;\r\n}\r\n\r\n\r\n/* Login/Signup sections*/\r\n\r\n\r\n.fixed-dark-cover {\r\n  z-index: 10;\r\n  position: fixed;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: none;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.email-input-div {\r\n  position: relative;\r\n  display: block;\r\n  background-color: #fff;\r\n  padding: 20px 40px;\r\n  border-radius: 4px;\r\n  color: #555;\r\n  width: 400px;\r\n}\r\n.fixed-dark-cover .email-input-div #email {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n\r\n#next-reg-fixed-dark-cover .email-input-div {\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n}\r\n\r\n.email-input-div h4 {\r\n  margin-bottom: 10px;\r\n  font-size: 130%;\r\n  text-align: center;\r\n}\r\n\r\n.fixed-dark-cover label {\r\n  font-size: 101%;\r\n  font-weight: normal;\r\n  margin-top: 10px;\r\n}\r\n\r\n#email {\r\n  /* border: none; */\r\n  margin-top: 10px;\r\n  margin-bottom: 25px;\r\n  border: 2px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 3px;\r\n  width: 100%;\r\n  height: 40px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.next-inputs {\r\n  border: 1px solid rgba(0, 0, 0, 0.3);\r\n  border-radius: 3px;\r\n  width: 100%;\r\n  height: 35px;\r\n  padding-left: 7px;\r\n  padding-right: 7px;\r\n}\r\n\r\n.ls-btns-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  margin-top: 20px !important;\r\n}\r\n\r\n.ls-btns-core-div {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n\r\n.ls-btns {\r\n  position: relative;\r\n  display: inline-block;\r\n  height: 40px;\r\n  width: 100px;\r\n  border-radius: 4px;\r\n}\r\n\r\n#continue-btn,\r\n#otp-btn,\r\n#login-btn,\r\n#signup-btn {\r\n  border: none;\r\n  background-color: #b2b2b2;\r\n  color: #fff;\r\n  margin-right: 20px;\r\n}\r\n\r\n.close-btn {\r\n  border: 1px solid #515151;\r\n  background-color: #fff;\r\n  color: #787878;\r\n}\r\n\r\n#reg-mobile-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n#reg-terms-agree {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.otp-span {\r\n  display: none;\r\n}\r\n\r\n\r\n/* Location search div */\r\n\r\n.location-input-div {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  margin-top: 30px;\r\n  padding: 5px;\r\n  border-radius: 3px;\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.location-enter-div {\r\n  position: relative;\r\n  height: 40px;\r\n  width: 450px;\r\n  border-radius: 3px;\r\n}\r\n\r\n.location-search-input {\r\n  margin: 0;\r\n  height: 40px;\r\n  width: 100%;\r\n  color: #666;\r\n  border: none;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  font-size: 110%;\r\n  border-radius: 3px;\r\n}\r\n\r\n\r\n.locate-me-btn {\r\n  position: absolute;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  margin: 0;\r\n  height: 30px;\r\n  right: 5px;\r\n  top: 5px;\r\n  width: 120px;\r\n  color: #333;\r\n  border: none;\r\n  border-radius: 3px;\r\n  font-size: 90%;\r\n  transition: all 0.2s ease-in;\r\n  background-color: #d4d4d4;\r\n  cursor: pointer;\r\n}\r\n.locate-me-btn span{\r\n  position: absolute;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 100%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n  font-size: 100%;\r\n  line-height: 0 !important;\r\n}\r\n.locate-me-btn:hover {\r\n  background-color: #c6c6c6;\r\n}\r\n\r\n.locate-me-btn:active {\r\n  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);\r\n}\r\n.see-menu-btn {\r\n  margin: 0;\r\n  height: 40px;\r\n  width: 200px;\r\n  background-color: #000;\r\n  color: #fff;\r\n  border: none;\r\n  margin-left: 10px;\r\n  transition: all 0.2s ease-in;\r\n  border-radius: 3px;\r\n}\r\n\r\n.see-menu-btn:hover {\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n\r\n/* Header */\r\n\r\n\r\n/* Main header */\r\n\r\n.main-header {\r\n  z-index: 8;\r\n  position: relative;\r\n  display: block;\r\n  top: 0px;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 60px;\r\n  background-color: #fff;\r\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.main-header .container {\r\n  display: block;\r\n  /*display: -webkit-flex;*/\r\n  /*justify-content: center;\r\n    -webkit-justify-content: center;*/\r\n  /*align-items: center;\r\n    -webkit-align-items: center;*/\r\n  height: 100%;\r\n}\r\n\r\n.main-container {\r\n  padding-top: 50px;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.main-logo {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.main-logo img {\r\n  height: 60%;\r\n  width: auto;\r\n}\r\n\r\n.logo-text {\r\n  margin: 0;\r\n  font-family: 'Bubblegum Sans', cursive;\r\n  font-size: 340%;\r\n}\r\n\r\n.det-ul {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  margin-left: 50px;\r\n  margin-bottom: 0px;\r\n  height: 100%;\r\n}\r\n\r\n.main-header .det-ul li {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  color: #000;\r\n  height: 100%;\r\n}\r\n\r\n.det-ul a {\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  color: #000;\r\n  text-decoration: none;\r\n}\r\n\r\n.main-header h1 {\r\n  color: #000;\r\n}\r\n\r\n.scroll-login-div {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.dets-div-btns {\r\n  border: none;\r\n  background-color: transparent;\r\n  font-size: 110%;\r\n  height: 100%;\r\n}\r\n\r\n#loc-btn {\r\n  margin-right: 30px;\r\n}\r\n\r\n\r\n.selected {\r\n  font-weight: bold;\r\n  border-bottom: 2px solid #fa0000;\r\n}\r\n\r\n#schedule-menu-btn {\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* Account Drop down button */\r\n\r\n.btn-default {\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-default:hover,\r\n.btn-default:focus,\r\n.btn-default:active {\r\n  background-color: transparent !important;\r\n  box-shadow: none;\r\n}\r\n\r\n.open>.dropdown-toggle.btn-default:focus,\r\n.open>.dropdown-toggle.btn-default:hover {\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\n\r\n/* Account dropdown menu */\r\n\r\n.dropdown {\r\n  margin-right: 20px;\r\n}\r\n\r\n.dropdown-menu {\r\n  position: absolute;\r\n  top: 110%;\r\n  left: -120%;\r\n  z-index: 8;\r\n  display: none;\r\n  float: left;\r\n  min-width: 260px;\r\n  padding: 0px 0;\r\n  margin: 2px 0 0;\r\n  font-size: 14px;\r\n  text-align: left;\r\n  list-style: none;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid #ccc;\r\n  border: 1px solid rgba(0, 0, 0, .15);\r\n  border-radius: 4px;\r\n  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\r\n}\r\n\r\n.dropdown-menu::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: -22px;\r\n  left: 50%;\r\n  border-top: 11px solid transparent;\r\n  border-left: 11px solid transparent;\r\n  border-right: 11px solid transparent;\r\n  border-bottom: 11px solid #A6A6A6;\r\n}\r\n\r\n.dropdown-menu::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: -20px;\r\n  left: 50.4%;\r\n  border-top: 10px solid transparent;\r\n  border-left: 10px solid transparent;\r\n  border-right: 10px solid transparent;\r\n  border-bottom: 10px solid #fff;\r\n}\r\n\r\n.dropdown-menu li {\r\n  border-bottom: 1px solid #F2F5F6;\r\n}\r\n\r\n.dropdown-menu li:last-child {\r\n  border-bottom-left-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n}\r\n\r\n.dropdown-menu li a {\r\n  /* margin: 10px auto; */\r\n  padding: 15px 20px;\r\n}\r\n\r\n\r\n/* Basket button */\r\n\r\n.basket-btn {\r\n  position: relative;\r\n  display: block;\r\n}\r\n\r\n.b-badge {\r\n  position: absolute;\r\n  left: 83%;\r\n  top: 30%;\r\n  background-color: #fa0000;\r\n  color: #fff;\r\n  padding: 2px 7px;\r\n  margin-left: 5px;\r\n  border-radius: 50%;\r\n  font-size: 80%;\r\n}\r\n\r\n\r\n/* Footer */\r\n\r\n.main-footer {\r\n  position: relative;\r\n  display: block;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  background-color: #fff;\r\n  overflow: hidden;\r\n}\r\n\r\n.footer-nav,\r\n.footer-social-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  /*color: rgba(0, 0, 0, 0.7);*/\r\n  color: #666;\r\n}\r\n\r\n.footer-nav a,\r\n.footer-social-div a {\r\n  color: #666;\r\n  text-decoration: none;\r\n}\r\n\r\n.footer-nav a:hover,\r\n.footer-social-div a:hover {\r\n  color: #333;\r\n}\r\n\r\n.footer-social-div {\r\n  margin-top: 10px;\r\n  font-size: 150%;\r\n}\r\n\r\n\r\n/* Mobile */\r\n\r\n\r\n/* Mobile main header */\r\n\r\n.mob-main-header {\r\n  z-index: 13;\r\n  position: fixed;\r\n  display: block;\r\n  width: 100%;\r\n  top: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 60px;\r\n  background-color: rgba(0, 0, 0, 1);\r\n  box-shadow: 0 10px 10px 1px rgba(0, 0, 0, .15);\r\n}\r\n\r\n.mob-main-logo {\r\n  position: absolute;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  height: 100%;\r\n  width: auto;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.mob-main-logo img {\r\n  position: relative;\r\n  display: block;\r\n  height: 60%;\r\n  width: auto;\r\n}\r\n\r\n.mob-menu-trig-btn {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0%;\r\n  -webkit-transform: translate(0%, -50%);\r\n          transform: translate(0%, -50%);\r\n  height: 100%;\r\n  width: 50px;\r\n  background: transparent;\r\n  color: #fff;\r\n  border: none;\r\n  font-size: 140%;\r\n}\r\n\r\n.mob-menu {\r\n  z-index: 12;\r\n  position: fixed;\r\n  display: block;\r\n  top: -300px;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: auto;\r\n  padding-top: 20px;\r\n  background-color: #fff;\r\n  color: #000;\r\n  box-shadow: 0 10px 10px 1px rgba(0, 0, 0, .1);\r\n}\r\n\r\n.mob-menu li {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 40px;\r\n  width: 100%;\r\n  color: #000;\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.mob-menu .reward-pts-trig-btn {\r\n  border: none;\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n\r\n/* Extra Small Devices, .visible-xs-* */\r\n\r\n@media (max-width: 480px) {}\r\n\r\n@media (max-width: 767px) {\r\n  .footer-nav,\r\n  .footer-social-div {\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n\r\n/* Small Devices, .visible-sm-* */\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {}\r\n\r\n\r\n/* Medium Devices, .visible-md-* */\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {}\r\n\r\n\r\n/* Large Devices, .visible-lg-* */\r\n\r\n@media (min-width: 1200px) {}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!authService.loggedIn()\">\r\n\r\n<div class=\"fixed-dark-cover\" id=\"login-fixed-dark-cover\">\r\n  <div class=\"email-input-div\">\r\n    <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"mainClose()\"></i>\r\n    <h4>Let's get started!</h4>\r\n    <!-- <label for=\"email\" id=\"email-label\">Email or Mobile</label><br> -->\r\n    <input type=\"text\" name=\"email\" id=\"email\" [(ngModel)]='initialLoginInput' placeholder=\"Email or Mobile number\">\r\n    <p class=\"err\"></p>\r\n    <div class=\"ls-btns-div\">\r\n      <div class=\"ls-btns-core-div\">\r\n        <button type=\"button\" class=\"ls-btns\" id=\"continue-btn\" (click)=\"firstConClick(initialLoginInput)\">Continue</button>\r\n        <button type=\"button\" class=\"ls-btns close-btn\" (click)=\"mainClose()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"fixed-dark-cover\" id=\"next-reg-fixed-dark-cover\">\r\n  <div class=\"email-input-div\">\r\n    <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"mainClose()\"></i>\r\n    <h4>We just need few more details</h4>\r\n   \r\n    <label for=\"reg-name\" id=\"reg-name-label\">Full Name</label>\r\n    <input type=\"text\" name=\"reg-name\" class=\"next-inputs\" id=\"reg-name\" [(ngModel)]='regNameInput' placeholder=\"\"><br>\r\n    \r\n\r\n    <label for=\"reg-email\" id=\"reg-email-label\">Email</label>\r\n    <input type=\"text\" name=\"reg-email\" class=\"next-inputs\" id=\"reg-email\" [(ngModel)]='regEmailInput' placeholder=\"\"><br>\r\n\r\n    <label for=\"reg-mobile\" id=\"reg-mobile-label\">Phone Number</label>\r\n      <input type=\"text\" class=\"next-inputs\" [(ngModel)]='regMobileInput'\r\n        name=\"reg-mobile\" id=\"reg-mobile\" placeholder=\"\">\r\n\r\n    <label for=\"reg-pwd\" id=\"reg-pwd-label\">Choose Password</label>\r\n    <input type=\"password\" name=\"reg-pwd\" class=\"next-inputs\" [(ngModel)]='regPwdInput' id=\"reg-pwd\" placeholder=\"\"><br>\r\n\r\n    <span class=\"otp-span\"><label for=\"reg-otp\" id=\"reg-otp-label\">Enter OTP</label>\r\n    <input type=\"text\" name=\"reg-otp\" class=\"next-inputs\"  [(ngModel)]='regOTPInput' id=\"reg-otp\" (keyup)=\"otpKeyUp($event)\" placeholder=\"\"><br></span>\r\n\r\n    <h5 id=\"reg-terms-agree\">By continuing, you are accepting our <a routerLink='/terms' (click)='clickedOnTerms()'>Terms and Conditions</a></h5>\r\n\r\n    <p class=\"err\"></p>\r\n\r\n    <div class=\"ls-btns-div\">\r\n      <div class=\"ls-btns-core-div\">\r\n        <button type=\"button\" class=\"ls-btns\" id=\"otp-btn\" (click)=\"OtpBtnClick()\">Send OTP</button>\r\n        <button type=\"button\" class=\"ls-btns\" id=\"signup-btn\" (click)=\"SignUpClick(regNameInput,regEmailInput,regMobileInput,regPwdInput,regOTPInput)\"\r\n          style=\"display:none\">Register</button>\r\n        <button type=\"button\" class=\"ls-btns close-btn\" (click)=\"mainClose()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"fixed-dark-cover\" id=\"next-login-fixed-dark-cover\">\r\n  <div class=\"email-input-div\">\r\n    <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"mainClose()\"></i>\r\n    <h4>We just need few more details</h4>\r\n    <label for=\"login-email\" id=\"login-email-label\">Email or Mobile</label>\r\n    <input type=\"text\" name=\"login-email\" class=\"next-inputs\" id=\"login-email\" [(ngModel)]='loginEmailInput' placeholder=\"\"><br>\r\n\r\n    <label for=\"login-password\" id=\"login-password-label\">Password</label>\r\n    <input type=\"password\" name=\"login-password\" class=\"next-inputs\" [(ngModel)]='loginPasswordInput' id=\"login-password\" placeholder=\"\"><br>\r\n    <p class=\"login-err err\"></p>\r\n\r\n    <div class=\"ls-btns-div\">\r\n      <div class=\"ls-btns-core-div\">\r\n        <button type=\"button\" class=\"ls-btns\" id=\"login-btn\" (click)=\"LoginSubmit(loginEmailInput,loginPasswordInput)\">Login</button>\r\n        <button type=\"button\" class=\"ls-btns close-btn\" (click)=\"mainClose()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<div class=\"mob-menu visible-sm visible-xs\">\r\n  <ul class=\"list-unstyled\">\r\n    <li class=\"reward-pts-trig-btn\">\r\n      REWARDS\r\n    </li>\r\n    <li  *ngIf=\"!authService.loggedIn()\" (click)=\"appComponent.loginSignupTrigger()\">\r\n      LOGIN / SIGNUP\r\n    </li>\r\n    <li  *ngIf=\"authService.loggedIn()\" (click)=\"onLogoutClick()\">\r\n      LOGOUT\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<router-outlet>\r\n\r\n</router-outlet>\r\n<footer class=\"main-footer\">\r\n  <nav class=\"footer-nav\">\r\n    <ul class=\"list-inline\">\r\n      <li><a routerLink='/home'>Home</a></li>\r\n      <li><a routerLink='/about'>About us</a></li>\r\n      <li><a routerLink='/privacy'>Privacy Policy</a></li>\r\n      <li><a routerLink='/terms'>Terms and Conditions</a></li>      \r\n      <li><a routerLink='/contact'>Contact us</a></li>\r\n    </ul>\r\n  </nav>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    // geocoder: google.maps.Geocoder;
    function AppComponent(title, router, validate, authService, http) {
        this.title = title;
        this.router = router;
        this.validate = validate;
        this.authService = authService;
        this.http = http;
        this.location = {};
        this.isInputEmail = false;
        this.isInputMobile = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        // Set title
        this.title.setTitle('Home');
        this.basket_num = parseInt(localStorage.getItem('basket_number'));
        if (this.basket_num == undefined || this.basket_num == null || this.basket_num == 0 || isNaN(this.basket_num) == true) {
            // redirect to menu
            this.basket_num = 0;
            // alert('no');
        }
        else {
            // this.basket_num;
        }
        $(document).keypress(function (e) {
            if (e.which == 13) {
                // Login trigger tab is visible
                if ($('#login-fixed-dark-cover').is(':visible')) {
                    // Trigger continue-btn
                    $('#continue-btn').trigger('click');
                }
                // Sign up tab is visible
                if ($('#next-reg-fixed-dark-cover').is(':visible')) {
                    // OTP and sign up buttons
                    if ($('#reg-otp').val()) {
                        // trigger sign-up btn
                        $('#signup-btn').trigger('click');
                    }
                    else {
                        // Trigger otp btn
                        $('#otp-btn').trigger('click');
                    }
                }
                // Login tab is visible
                if ($('#next-login-fixed-dark-cover').is(':visible')) {
                    // trigger login-btn
                    $('#login-btn').trigger('click');
                }
            }
        });
    };
    // On clicking login/signup
    AppComponent.prototype.loginSignupTrigger = function () {
        $('.fixed-dark-cover').hide();
        $('#login-fixed-dark-cover').css({ 'display': 'flex' });
        $('#email').keyup(function () {
            var input = $(this).val();
            // let input = this.initialLoginInput;
            if (input.length > 2) {
                // Validate
                if (input == undefined || input == null || input == '') {
                    $('#continue-btn').css({ 'background-color': '#b2b2b2' });
                }
                else {
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (re.test(input)) {
                        $('#continue-btn').css({ 'background-color': '#6DA942' });
                    }
                    else {
                        if (/^\d{10}$/.test(input)) {
                            $('#continue-btn').css({ 'background-color': '#6DA942' });
                        }
                        else {
                            $('#continue-btn').css({ 'background-color': '#b2b2b2' });
                        }
                    }
                }
            }
            else {
                $('#continue-btn').css({ 'background-color': '#b2b2b2' });
            }
        });
    };
    // On clicking continue in first login/signup slide
    AppComponent.prototype.firstConClick = function (input) {
        var _this = this;
        $('.err').html('');
        // Validate input
        if (this.validate.validateInput(input)) {
            // User has entered input
            // Checking if it is email
            if (this.validate.validateEmail(input)) {
                // User have entered email
                // Check if email is registered
                $('.fixed-dark-cover').hide();
                this.authService.authenticateEmail(input).subscribe(function (data) {
                    if (data.success) {
                        // Email exists
                        _this.loginEmailInput = _this.initialLoginInput;
                        _this.isInputEmail = true;
                        $('#next-login-fixed-dark-cover').css({ 'display': 'flex' });
                        _this.loginEmailInput = _this.initialLoginInput;
                        $('#login-password').keyup(function (e) {
                            var inp = $(this).val();
                            if (inp.length > 5) {
                                $('#login-btn').css({ 'background-color': '#6DA942' });
                            }
                            else {
                                $('#login-btn').css({ 'background-color': '#b2b2b2' });
                            }
                        });
                    }
                    else {
                        $('#next-reg-fixed-dark-cover').css({ 'display': 'flex' });
                        _this.regEmailInput = _this.initialLoginInput;
                        $('#next-reg-fixed-dark-cover').keyup(function (e) {
                            var regname = $('#reg-name').val();
                            var regemail = $('#reg-email').val();
                            var regmobile = $('#reg-mobile').val();
                            var regpwd = $('#reg-pwd').val();
                            var otp = $('#reg-otp').val();
                            // Validate inputs
                            if (regname &&
                                regemail &&
                                regmobile &&
                                regpwd) {
                                if (regpwd.length > 5) {
                                    $('#otp-btn').css({ 'background-color': '#6DA942' });
                                    if (otp) {
                                        $('#signup-btn').css({ 'background-color': '#6DA942' });
                                    }
                                }
                            }
                            else {
                                $('#otp-btn').css({ 'background-color': '#b2b2b2' });
                            }
                        });
                    }
                });
                $('.err').html('');
            }
            else if (this.validate.validateMobile(input)) {
                // User entered mobile
                $('.err').html('');
                $('.fixed-dark-cover').hide();
                this.authService.authenticateMobile(input).subscribe(function (data) {
                    if (data.success) {
                        // this.loginMobileInput = this.initialLoginInput;
                        _this.loginEmailInput = _this.initialLoginInput;
                        _this.isInputMobile = true;
                        // Mobile number exists
                        $('#next-login-fixed-dark-cover').css({ 'display': 'flex' });
                        $('#login-email').keyup(function () {
                        });
                    }
                    else {
                        _this.regMobileInput = _this.initialLoginInput;
                        $('#next-reg-fixed-dark-cover').css({ 'display': 'flex' });
                    }
                });
            }
            else {
                $('.err').html('Please enter valid Email or Mobile number');
                $('#email').css({ 'border-color': '#fa0000' });
            }
        }
        else {
            $('.err').html('Please enter valid Email or Mobile number');
            $('#email').css({ 'border-color': '#fa0000' });
        }
    };
    AppComponent.prototype.otpKeyUp = function (event) {
        var otp = event.target.value;
        if (otp.length == 6) {
            $('#accept-btn').css({ 'background-color': '#f00', 'color': '#fff' });
        }
    };
    AppComponent.prototype.LoginSubmit = function (loginEmailInput, loginPasswordInput) {
        var _this = this;
        this.isInputEmail = false;
        this.isInputMobile = false;
        $('.err').html('');
        this.loginEmailInput = loginEmailInput;
        this.loginPasswordInput = loginPasswordInput;
        // Check if password has atleast 6 characters
        // valiadte
        if (this.validate.validateInput(loginEmailInput) && this.validate.validateInput(loginPasswordInput)) {
            if (this.validate.validateEmail(loginEmailInput)) {
                var user_1 = {
                    email: loginEmailInput,
                    password: loginPasswordInput
                };
                // User have entered email
                // Check if email is registered
                // $('.fixed-dark-cover').hide();
                this.authService.authenticateEmail(loginEmailInput).subscribe(function (data) {
                    if (data.success) {
                        // Email exists
                        // Log user in
                        _this.authService.authenticateUser(user_1).subscribe(function (dat) {
                            // console.log(dat);
                            if (dat.success) {
                                _this.uName = dat.user.name;
                                _this.authService.storeUserData(dat.token, dat.user);
                                // this.router.navigate(['/home']);
                                window.location.reload();
                                $('.login-trig-div').hide();
                                $('.account-trig-div').show();
                                $('.fixed-dark-cover').hide();
                            }
                            else {
                                $('.err').html(dat.msg);
                            }
                        });
                    }
                    else {
                        $('.err').html('That email is not registered with us');
                    }
                });
                $('.err').html('');
            }
            else {
                if (this.validate.validateMobile(loginEmailInput)) {
                    // User gave mobile
                    this.isInputMobile = true;
                    var user_2 = {
                        email: loginEmailInput,
                        password: loginPasswordInput
                    };
                    this.authService.authenticateMobile(loginEmailInput).subscribe(function (data) {
                        if (data.success) {
                            // Mobile exists
                            // Log user in
                            _this.authService.authenticateUser(user_2).subscribe(function (dat) {
                                // console.log(dat);
                                if (dat.success) {
                                    _this.uName = dat.user.name;
                                    _this.authService.storeUserData(dat.token, dat.user);
                                    // this.router.navigate(['/home']);
                                    window.location.reload();
                                    $('.login-trig-div').hide();
                                    $('.account-trig-div').show();
                                    $('.fixed-dark-cover').hide();
                                }
                                else {
                                    $('.err').html(dat.msg);
                                }
                            });
                        }
                        else {
                            $('.err').html('That email is not registered with us');
                        }
                    });
                    $('.err').html('');
                }
                else {
                    $('.err').html('Please enter valid input');
                }
            }
        }
        else {
            $('.err').html('All fields are required');
            if (this.validate.validateInput(loginEmailInput)) {
                $('#login-email').css({ 'border-color': '#fa0000' });
            }
        }
    };
    // On clicking enter OTP button
    AppComponent.prototype.OtpBtnClick = function () {
        var _this = this;
        $('.err').html('');
        // Validate inputs
        if (this.validate.validateInput(this.regNameInput) &&
            this.validate.validateInput(this.regEmailInput) &&
            this.validate.validateInput(this.regMobileInput) &&
            this.validate.validateInput(this.regPwdInput)) {
            // Validate Email and Mobile
            if (this.validate.validateEmail(this.regEmailInput)) {
                if (this.validate.validateMobile(this.regMobileInput)) {
                    if (this.regPwdInput.length > 6) {
                        this.authService.authenticateMobile(this.regMobileInput).subscribe(function (data) {
                            if (data.success) {
                                // Mobile exists
                                // Send otp
                                _this.authService.sendOtp(_this.regMobileInput).subscribe(function (res) {
                                    console.log(res);
                                });
                                $('.otp-span').show('slow');
                                $('#otp-btn').hide();
                                $('#signup-btn').css({ 'display': 'block' });
                                $('.err').html('That mobile number is already registered with us');
                            }
                            else {
                                // Send otp
                                _this.authService.sendOtp(_this.regMobileInput).subscribe(function (res) {
                                    console.log(res);
                                });
                                $('.otp-span').show('slow');
                                $('#otp-btn').hide();
                                $('#signup-btn').css({ 'display': 'block' });
                            }
                        });
                    }
                    else {
                        $('.err').html('Please Enter password with atleast 6 characters');
                        $('#reg-pwd').css({ 'border-color': '#fa0000' });
                    }
                }
                else {
                    $('.err').html('Please Enter Valid Mobile number');
                    $('#reg-mobile').css({ 'border-color': '#fa0000' });
                }
            }
            else {
                $('.err').html('Please Enter Valid Email');
                $('#reg-email').css({ 'border-color': '#fa0000' });
            }
        }
        else {
            $('.err').html('All input fields are required');
            if (!this.validate.validateInput(this.regNameInput)) {
                $('#reg-name').css({ 'border-color': '#fa0000' });
            }
            if (!this.validate.validateInput(this.regEmailInput)) {
                $('#reg-email').css({ 'border-color': '#fa0000' });
            }
            if (!this.validate.validateInput(this.regMobileInput)) {
                $('#reg-mobile').css({ 'border-color': '#fa0000' });
            }
            if (!this.validate.validateInput(this.regPwdInput)) {
                $('#reg-pwd').css({ 'border-color': '#fa0000' });
            }
        }
    };
    AppComponent.prototype.SignUpClick = function (regNameInput, regEmailInput, regMobileInput, regPwdInput, regOTPInput) {
        $('.err').html('');
        // validate and signup
        this.regNameInput = regNameInput;
        this.regEmailInput = regEmailInput;
        this.regMobileInput = regMobileInput;
        this.regPwdInput = regPwdInput;
        this.regOTPInput = regOTPInput;
        this.user = {
            email: this.regEmailInput,
            mobile: this.regMobileInput,
            name: this.regNameInput,
            password: this.regPwdInput,
            address: [],
            rewardPoints: 0,
            otp: this.regOTPInput
        };
        // Validate inputs
        if (this.validate.validateInput(regNameInput) &&
            this.validate.validateInput(regEmailInput) &&
            this.validate.validateInput(regMobileInput) &&
            this.validate.validateInput(regPwdInput)) {
            // Validate Email and Mobile
            if (this.validate.validateEmail(regEmailInput)) {
                if (this.validate.validateMobile(regMobileInput)) {
                    if (regPwdInput.length > 6) {
                        // Valid email and mobile numbers. register user
                        this.authService.registerUser(this.user).subscribe(function (res) {
                            if (res.success) {
                                window.location.reload();
                            }
                            else {
                                // Show Error
                                // if(res.msg = )
                                if (res.msg.message = 'otp_not_verified') {
                                    $('.err').html('Please enter valid OTP');
                                    $('#reg-otp').css({ 'border-color': '#fa0000' });
                                }
                            }
                        });
                    }
                    else {
                        $('.err').html('Please Enter password with atleast 6 characters');
                        $('#reg-pwd').css({ 'border-color': '#fa0000' });
                    }
                }
                else {
                    $('.err').html('Please Enter Valid Mobile number');
                    // Hightlight mogile number
                    $('#reg-mobile').css({ 'border-color': '#fa0000' });
                }
            }
            else {
                $('.err').html('Please Enter Valid Email');
                $('#reg-email').css({ 'border-color': '#fa0000' });
            }
        }
        else {
            $('.err').html('All input fields are required');
            if (!this.validate.validateInput(this.regNameInput)) {
                $('#reg-name').css({ 'border-color': '#fa0000' });
            }
            if (!this.validate.validateInput(this.regEmailInput)) {
                $('#reg-email').css({ 'border-color': '#fa0000' });
            }
            if (!this.validate.validateInput(this.regMobileInput)) {
                $('#reg-mobile').css({ 'border-color': '#fa0000' });
            }
            if (!this.validate.validateInput(this.regPwdInput)) {
                $('#reg-pwd').css({ 'border-color': '#fa0000' });
            }
        }
        $('.login-trig-div').hide();
        $('.account-trig-div').show();
    };
    AppComponent.prototype.showError = function (context, error) {
        switch (context) {
            case 'login-err':
                $('.login-err').html(error);
                break;
            default:
                break;
        }
    };
    // Onclicking Close button
    AppComponent.prototype.mainClose = function () {
        $('.fixed-dark-cover').hide();
    };
    AppComponent.prototype.clickedOnTerms = function () {
        $('.fixed-dark-cover').hide();
    };
    AppComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/home']);
        return false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__change_password_change_password_component__ = __webpack_require__("../../../../../src/app/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__checkout_checkout_component__ = __webpack_require__("../../../../../src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__checkout_WindowRef__ = __webpack_require__("../../../../../src/app/checkout/WindowRef.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__orders_orders_component__ = __webpack_require__("../../../../../src/app/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reward_points_reward_points_component__ = __webpack_require__("../../../../../src/app/reward-points/reward-points.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__rewards_rewards_component__ = __webpack_require__("../../../../../src/app/rewards/rewards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__terms_terms_component__ = __webpack_require__("../../../../../src/app/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__privacy_privacy_component__ = __webpack_require__("../../../../../src/app/privacy/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__address_address_component__ = __webpack_require__("../../../../../src/app/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__admin_admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_add_admin_add_admin_component__ = __webpack_require__("../../../../../src/app/admin/add-admin/add-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_add_category_add_category_component__ = __webpack_require__("../../../../../src/app/admin/add-category/add-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__admin_add_items_add_items_component__ = __webpack_require__("../../../../../src/app/admin/add-items/add-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__admin_add_subs_add_subs_component__ = __webpack_require__("../../../../../src/app/admin/add-subs/add-subs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__admin_login_login_component__ = __webpack_require__("../../../../../src/app/admin/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__admin_add_menu_add_menu_component__ = __webpack_require__("../../../../../src/app/admin/add-menu/add-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__admin_reports_reports_component__ = __webpack_require__("../../../../../src/app/admin/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__admin_add_rewards_add_rewards_component__ = __webpack_require__("../../../../../src/app/admin/add-rewards/add-rewards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__admin_admin_orders_admin_orders_component__ = __webpack_require__("../../../../../src/app/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_admin_auth_service__ = __webpack_require__("../../../../../src/app/services/admin-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_get_menu_service__ = __webpack_require__("../../../../../src/app/services/get-menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_user_service_service__ = __webpack_require__("../../../../../src/app/services/user-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_admin_services_service__ = __webpack_require__("../../../../../src/app/services/admin-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__guards_admin_auth_guard__ = __webpack_require__("../../../../../src/app/guards/admin-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__thanks_thanks_component__ = __webpack_require__("../../../../../src/app/thanks/thanks.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// Google
// import { GoogleMapDirective } from '../app/directives/google-map.directive';
















// Admin components











// import { DaterangePickerModule } from 'ng2-daterange-picker';
// import { AdminComponent } from "./admin/admin.component";
// Services








// Auth Guard



var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'menu',
        component: __WEBPACK_IMPORTED_MODULE_11__menu_menu_component__["a" /* MenuComponent */],
    },
    {
        path: 'rewards',
        component: __WEBPACK_IMPORTED_MODULE_15__rewards_rewards_component__["a" /* RewardsComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_19__contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: 'terms',
        component: __WEBPACK_IMPORTED_MODULE_17__terms_terms_component__["a" /* TermsComponent */]
    },
    {
        path: 'privacy',
        component: __WEBPACK_IMPORTED_MODULE_18__privacy_privacy_component__["a" /* PrivacyComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_16__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'checkout',
        component: __WEBPACK_IMPORTED_MODULE_9__checkout_checkout_component__["a" /* CheckoutComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_40__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'thanks',
        component: __WEBPACK_IMPORTED_MODULE_42__thanks_thanks_component__["a" /* ThanksComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_40__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__["a" /* SettingsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_40__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            {
                path: '',
                redirectTo: 'profile',
                pathMatch: 'full',
            },
            {
                path: 'address',
                component: __WEBPACK_IMPORTED_MODULE_20__address_address_component__["a" /* AddressComponent */],
            },
            {
                path: 'my-orders',
                component: __WEBPACK_IMPORTED_MODULE_12__orders_orders_component__["a" /* OrdersComponent */],
            },
            {
                path: 'profile',
                component: __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */],
            },
            {
                path: 'change-password',
                component: __WEBPACK_IMPORTED_MODULE_7__change_password_change_password_component__["a" /* ChangePasswordComponent */],
            },
            {
                path: 'reward-points',
                component: __WEBPACK_IMPORTED_MODULE_14__reward_points_reward_points_component__["a" /* RewardPointsComponent */],
            },
        ]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_21__admin_admin_admin_component__["a" /* AdminComponent */],
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full',
            },
            {
                path: 'orders',
                component: __WEBPACK_IMPORTED_MODULE_30__admin_admin_orders_admin_orders_component__["a" /* AdminOrdersComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_41__guards_admin_auth_guard__["a" /* AdminAuthGuard */]]
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_26__admin_login_login_component__["a" /* LoginComponent */]
            },
            {
                path: 'add-admin',
                component: __WEBPACK_IMPORTED_MODULE_22__admin_add_admin_add_admin_component__["a" /* AddAdminComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_41__guards_admin_auth_guard__["a" /* AdminAuthGuard */]]
            },
            {
                path: 'reports',
                component: __WEBPACK_IMPORTED_MODULE_28__admin_reports_reports_component__["a" /* ReportsComponent */],
                data: { title: 'Report' },
                canActivate: [__WEBPACK_IMPORTED_MODULE_41__guards_admin_auth_guard__["a" /* AdminAuthGuard */]]
            },
            {
                path: 'add-menu',
                component: __WEBPACK_IMPORTED_MODULE_27__admin_add_menu_add_menu_component__["a" /* AddMenuComponent */],
                data: { title: 'Menu' },
                canActivate: [__WEBPACK_IMPORTED_MODULE_41__guards_admin_auth_guard__["a" /* AdminAuthGuard */]]
            },
            {
                path: 'add-rewards',
                component: __WEBPACK_IMPORTED_MODULE_29__admin_add_rewards_add_rewards_component__["a" /* AddRewardsComponent */],
                data: { title: 'Reward Points' },
                canActivate: [__WEBPACK_IMPORTED_MODULE_41__guards_admin_auth_guard__["a" /* AdminAuthGuard */]]
            },
            {
                path: 'add-items',
                component: __WEBPACK_IMPORTED_MODULE_24__admin_add_items_add_items_component__["a" /* AddItemsComponent */],
                data: { title: 'Add Items' },
                canActivate: [__WEBPACK_IMPORTED_MODULE_41__guards_admin_auth_guard__["a" /* AdminAuthGuard */]]
            },
            {
                path: 'settings',
                component: __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__["a" /* SettingsComponent */],
                data: { title: 'Settings' },
                canActivate: [__WEBPACK_IMPORTED_MODULE_41__guards_admin_auth_guard__["a" /* AdminAuthGuard */]]
            },
            {
                path: 'add-category',
                component: __WEBPACK_IMPORTED_MODULE_23__admin_add_category_add_category_component__["a" /* AddCategoryComponent */],
                data: { title: 'Add Category' },
                canActivate: [__WEBPACK_IMPORTED_MODULE_41__guards_admin_auth_guard__["a" /* AdminAuthGuard */]]
            },
            {
                path: 'add-sub-category',
                component: __WEBPACK_IMPORTED_MODULE_25__admin_add_subs_add_subs_component__["a" /* AddSubsComponent */],
                data: { title: 'Add Sub Category' },
                canActivate: [__WEBPACK_IMPORTED_MODULE_41__guards_admin_auth_guard__["a" /* AdminAuthGuard */]]
            },
        ]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__change_password_change_password_component__["a" /* ChangePasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__checkout_checkout_component__["a" /* CheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_12__orders_orders_component__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_14__reward_points_reward_points_component__["a" /* RewardPointsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__rewards_rewards_component__["a" /* RewardsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__terms_terms_component__["a" /* TermsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__privacy_privacy_component__["a" /* PrivacyComponent */],
            __WEBPACK_IMPORTED_MODULE_19__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_20__address_address_component__["a" /* AddressComponent */],
            __WEBPACK_IMPORTED_MODULE_21__admin_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_22__admin_add_admin_add_admin_component__["a" /* AddAdminComponent */],
            __WEBPACK_IMPORTED_MODULE_23__admin_add_category_add_category_component__["a" /* AddCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_24__admin_add_items_add_items_component__["a" /* AddItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__admin_add_subs_add_subs_component__["a" /* AddSubsComponent */],
            __WEBPACK_IMPORTED_MODULE_26__admin_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_27__admin_add_menu_add_menu_component__["a" /* AddMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_28__admin_reports_reports_component__["a" /* ReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_29__admin_add_rewards_add_rewards_component__["a" /* AddRewardsComponent */],
            __WEBPACK_IMPORTED_MODULE_30__admin_admin_orders_admin_orders_component__["a" /* AdminOrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_42__thanks_thanks_component__["a" /* ThanksComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_39_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_31_mydatepicker__["MyDatePickerModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_32__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_33__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_34__services_admin_auth_service__["a" /* AdminAuthService */], __WEBPACK_IMPORTED_MODULE_40__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_41__guards_admin_auth_guard__["a" /* AdminAuthGuard */], __WEBPACK_IMPORTED_MODULE_35__services_get_menu_service__["a" /* GetMenuService */], __WEBPACK_IMPORTED_MODULE_38__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_36__services_user_service_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_37__services_admin_services_service__["a" /* AdminServicesService */], __WEBPACK_IMPORTED_MODULE_10__checkout_WindowRef__["a" /* WindowRef */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dets-core,.det-title-div{\r\n    width: 50%;\r\n    overflow: hidden;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Det Title Div-->\r\n<div class=\"det-title-div\">\r\n  <div class=\"det-title-core\">\r\n    <h2 class=\"det-title\">Change Password</h2>\r\n  </div>\r\n</div>\r\n\r\n<!-- Det core div -->\r\n<div class=\"dets-core\">\r\n  <ul class=\"list-unstyled\">\r\n    <li class=\"\">\r\n      <label for=\"old-pwd\">Old Password</label>\r\n    </li>\r\n    <li class=\"\">\r\n      <input type=\"password\" name=\"old-pwd\" id=\"old-pwd\" [(ngModel)]='oldPassword' class=\"inputs\" value=\"\">\r\n    </li>\r\n    <li class=\"\">\r\n      <label for=\"new-pwd\">New Password</label>\r\n    </li>\r\n    <li class=\"\">\r\n      <input type=\"text\" name=\"new-pwd\" class=\"inputs\" [(ngModel)]='newPassword' id=\"new-pwd\" value=\"\">\r\n    </li>\r\n    <li class=\"\">\r\n      <label for=\"re-new-pwd\">Retype New Password</label>\r\n    </li>\r\n    <li class=\"\">\r\n      <input type=\"text\" name=\"re-new-pwd\" class=\"inputs\" [(ngModel)]='conNewPassword' id=\"re-new-pwd\" value=\"\">\r\n    </li>\r\n    <li>\r\n      <p class=\"err\"></p>\r\n    </li>\r\n  </ul>\r\n  <div class=\"bottom-div\">\r\n    <div class=\"save-btns-div pull-left\">\r\n      <button type=\"button\" class=\"save-btns\" style=\"width:150px\" (click)='changePwd()'>Update</button>\r\n    </div>\r\n    <div class=\"clearfix\">\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(router, title, validate, authService) {
        this.router = router;
        this.title = title;
        this.validate = validate;
        this.authService = authService;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Settings: Profile');
        var user = this.authService.getUserFromLocal();
        var user_parsed = JSON.parse(user);
        this.userId = user_parsed.id;
    };
    ChangePasswordComponent.prototype.changePwd = function () {
        if (this.validate.validateInput(this.oldPassword) && this.validate.validateInput(this.newPassword) && this.validate.validateInput(this.conNewPassword)) {
            if (this.newPassword === this.conNewPassword) {
                var obj = {
                    u_id: this.userId,
                    password: this.oldPassword
                };
                // Update password
                this.authService.updatePassword(obj).subscribe(function (res) {
                    if (res.success) {
                        $('.err').html('Password Changed !');
                    }
                    else {
                        $('.err').html('Something went wrong');
                    }
                });
            }
            else {
                $('.err').html('Passwords does\'t match !');
            }
        }
        else {
            $('.err').html('All fields are required');
        }
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-change-password',
        template: __webpack_require__("../../../../../src/app/change-password/change-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css"), __webpack_require__("../../../../../src/app/change-password/change-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], ChangePasswordComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=change-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/WindowRef.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
WindowRef = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], WindowRef);

//# sourceMappingURL=WindowRef.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Address edit section */\r\n.db,.wb{\r\n  z-index: 20;\r\n  position: fixed;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n.db{\r\n  display: none;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n.wb{\r\n  height: 300px;\r\n  width: 400px;\r\n  border-radius: 4px;\r\n  background-color: #fff;\r\n}\r\n.wb h2{\r\n  font-size: 120%;\r\n  margin-bottom: 30px;\r\n}\r\n.wb textarea{\r\n  resize: none !important;\r\n  outline: none !important;\r\n  height: 150px;\r\n  width: 250px;\r\n}\r\n.wb .fa{\r\n  position: absolute;\r\n  top:5%;\r\n  left:92%;\r\n  cursor: pointer;\r\n}\r\n.checkout-main-container {\r\n  margin: 0;\r\n  background-color: #F2F5F6;\r\n  padding: 20px 0px 50px 0px;\r\n  color: #515151;\r\n}\r\n\r\n.head-divs {\r\n  border-bottom: 2px solid #F2F5F6;\r\n  padding: 0 20px;\r\n  margin: 0;\r\n}\r\n\r\n.section-titles {\r\n  font-size: 100%;\r\n  font-weight: bold;\r\n  margin: 15px auto 15px auto;\r\n  color: #515151;\r\n}\r\n\r\nh6 {\r\n  font-size: 110%;\r\n  margin: 0 0 10px 0;\r\n}\r\n\r\n.address-section,\r\n.payment-selection-section,\r\n.order-summary-section {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  border-radius: 2px;\r\n  margin: 0;\r\n  margin-bottom: 10px;\r\n  /*padding: 10px;*/\r\n  /*box-shadow: 0 0 1px 1px rgba(0,0, 0, 0.3);*/\r\n}\r\n.order-summary-section{\r\n  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n\r\n/* Left dets */\r\n\r\n.left-dets-section {\r\n  width: 30%;\r\n}\r\n\r\n.warning-div {\r\n  padding: 15px 15px;\r\n  background-color: #F04F60;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  margin: 10px 20px;\r\n  font-size: 90%;\r\n}\r\n\r\n.user-address-div {\r\n  position: relative;\r\n  display: block;\r\n  min-height: 80px;\r\n  padding: 10px 20px;\r\n  height: auto;\r\n  border-bottom: 2px solid #F2F5F6;\r\n}\r\n.user-address {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  width: 80%;\r\n  margin: 0;\r\n}\r\n.left-dets-section label{\r\n  width: 100%;\r\n}\r\n.address-container{\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n.user-address-item {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  margin-top: 20px;\r\n  width: 100%;\r\n}\r\n\r\n.address-lines {\r\n  margin-left: 10px;\r\n}\r\n\r\n.address-lines-title {\r\n  margin: 0 0 10px 0;\r\n  color: #000;\r\n  font-weight: bold;\r\n}\r\n\r\n.address-edit-div {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  width: 20%;\r\n  height: 100%;\r\n  min-height: 80px;\r\n  margin: 0;\r\n}\r\n\r\n#edit-address {\r\n  border: none;\r\n  background-color: transparent;\r\n  color: #6DA942;\r\n}\r\n#edit-address:hover{\r\n  color: #588835;\r\n}\r\n\r\n\r\n/* Instructions section */\r\n\r\n.instructions-div {\r\n  position: relative;\r\n  display: block;\r\n  margin: 0;\r\n  padding: 20px;\r\n}\r\n\r\n#delivery-instructions-input {\r\n  width: 100%;\r\n  height: 50px;\r\n  resize: none;\r\n  outline: none;\r\n  font-size: 90%;\r\n  padding: 5px 10px;\r\n  border: 2px solid rgba(0, 0, 0, 0.1);\r\n  border-radius: 3px;\r\n}\r\n\r\n\r\n/* Payments options */\r\n\r\n.payment-selection-section {\r\n  position: relative;\r\n  display: block;\r\n  padding: 4px 0 0 0;\r\n}\r\n\r\n.payment-options-ul li {\r\n  padding: 10px 20px 10px 20px;\r\n  /* border-bottom: 2px solid #F2F5F6; */\r\n}\r\n\r\n.payment-options-ul li label {\r\n  height: 100%;\r\n  width: 100%;\r\n  font-weight: normal;\r\n}\r\n\r\n.payment-options-ul li:last-child {\r\n  border-bottom: none;\r\n}\r\n.save-btns {\r\n  border-radius: 5px;\r\n  height: 35px;\r\n  width: 80px;\r\n  border: none;\r\n  background-color: #6DA942;\r\n  color: #fff;\r\n  margin-right: 15px;\r\n  transition: all 0.2s ease-out;\r\n}\r\n.save-btns:hover{\r\n  background-color: #588835;\r\n}\r\n\r\n/* Right dets */\r\n\r\n.right-dets-section {\r\n  width: 45%;\r\n  margin-left: 30px;\r\n}\r\n\r\n\r\n/* Order Summary section */\r\n\r\n/* .order-summary-body {} */\r\n\r\n.delivery-on-statement {\r\n  font-weight: bold;\r\n  padding: 20px 0px 10px 0px;\r\n}\r\n\r\n.delivery-items-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 100%;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -ms-flex-line-pack: start;\r\n      align-content: flex-start;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  margin: 10px auto 20px auto;\r\n  padding: 0 20px;\r\n}\r\n.delivery-items-div>div{\r\n  width: 100%;\r\n}\r\n\r\n.delivery-item {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 100%;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  margin: 10px auto;\r\n  height: auto;\r\n}\r\n\r\n.delivery-item-left {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  width: 55%;\r\n  height: auto;\r\n}\r\n\r\n.delivery-item-image {\r\n  position: relative;\r\n  margin: 0;\r\n  width: 150px;\r\n  height: 100%;\r\n  /* background-image: url('../../assets/menu-img/food.jpg'); */\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.delivery-item-dets {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  margin: 0;\r\n  width: auto;\r\n  height: 100%;\r\n  padding: 0px;\r\n}\r\n\r\n/* .delivery-item-dets h5 {\r\n  width: 100%;\r\n  text-align: left;\r\n  margin: 0;\r\n  margin-bottom: 7px;\r\n} */\r\n.delivery-item-dets>span {\r\n  display:inline-block;\r\n  text-align: left;\r\n  margin: 0;\r\n  margin-bottom: 7px;\r\n}\r\n\r\n.delivery-item-name {\r\n  display:inline-block;\r\n  text-align: left;\r\n  /* float: left; */\r\n  font-size: 105%;\r\n  margin-bottom: 0;\r\n  padding-bottom: 0;\r\n  color: #333;\r\n}\r\n\r\n.delivery-item-price {\r\n  font-size: 100%;\r\n  color: #888;\r\n}\r\n.delivery-number-div{\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.minus-btn{\r\n  margin-right: 10px;\r\n  background-color: transparent;\r\n  color: #6DA942;\r\n  border: 1px solid #6DA942;\r\n  height: 20px;\r\n  font-size: 80%;\r\n}\r\n.delivery-dets {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  margin: 0;\r\n  width: 45%;\r\n  height: 100%;\r\n}\r\n.delivery-number-core{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n\r\n\r\n.number-btns {\r\n  border: none;\r\n  background: transparent;\r\n  color: #fa0000;\r\n  margin: 0 7px;\r\n  font-size: 130%;\r\n}\r\n\r\n.price-core {\r\n  font-size: 110%;\r\n  color: #515151;\r\n}\r\n\r\n.order-summary-body h6 {\r\n  margin: 0px auto 10px auto;\r\n}\r\n\r\n.charges-div h6 {\r\n  font-size: 100%;\r\n}\r\n\r\n.cost-core {\r\n  font-size: 110%;\r\n  color: #515151;\r\n}\r\n.rewards-div{\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  border-bottom: 2px solid #F2F5F6;\r\n}\r\n.delivery-fee,\r\n.total-pay,\r\n.reward-points,.rewards-div {\r\n  padding: 6px 20px;\r\n}\r\n.total-pay,.total-pay .cost-core{\r\n  color: #6DA942;\r\n}\r\n\r\n.total-pay,.rewards-div {\r\n  margin-top: 6px;\r\n}\r\n\r\n.total-fee {\r\n  padding: 10px 20px;\r\n  border-bottom: 2px solid #F2F5F6;\r\n}\r\n\r\n.place-order-btn-div {\r\n  padding: 20px;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n}\r\n\r\n.place-order-notif {\r\n  position: relative;\r\n  display: block;\r\n  font-size: 90%;\r\n  font-weight: normal;\r\n  font-style: italic;\r\n  width: 98%;\r\n  margin: 5px 20px 10px 20px;\r\n}\r\n\r\n#place-order-button {\r\n  position: relative;\r\n  display: block;\r\n  width: 98%;\r\n  margin: 5px 1% 7px 1%;\r\n  border: none;\r\n  border-radius: 3px;\r\n  background-color: #6DA942;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  padding: 10px 0;\r\n}\r\n#place-order-button:hover{\r\n  background-color: #588835;\r\n}\r\n\r\n\r\n/* Extra Small Devices, .visible-xs-* */\r\n\r\n\r\n/* @media (max-width: 480px) {} */\r\n\r\n@media (max-width: 767px) {\r\n  .checkout-main-container {\r\n    padding-top: 100px;\r\n  }\r\n  .left-dets-section,\r\n  .right-dets-section {\r\n    position: relative;\r\n    display: block;\r\n    width: 90%;\r\n    margin: 10px 5%;\r\n  }\r\n  .delivery-item {\r\n    max-height: 200px;\r\n  }\r\n}\r\n\r\n\r\n/* Small Devices, .visible-sm-* */\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {}\r\n\r\n\r\n/* Medium Devices, .visible-md-* */\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {}\r\n\r\n\r\n/* Large Devices, .visible-lg-* */\r\n\r\n@media (min-width: 1200px) {}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header for mobiles and smaller devices -->\r\n<header class=\"mob-main-header visible-sm visible-xs\">\r\n  <button type=\"button\" class=\"mob-menu-trig-btn\">\r\n                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n            </button>\r\n  <div class=\"mob-main-logo\" routerLink='/home'>\r\n    <img src=\"../../assets/logo/logo_black.png\">\r\n  </div>\r\n</header>\r\n<header class=\"main-header visible-md visible-lg\">\r\n  <div class=\"container\">\r\n    <div class=\"main-logo pull-left\" routerLink='/home'>\r\n      <img src=\"../../assets/logo/logo_black.png\">\r\n    </div>\r\n    <ul class=\"list-inline det-ul visible-xs visible-sm pull-right\">\r\n      <li>\r\n        <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp;</button>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"list-inline det-ul pull-left visible-md visible-lg\">\r\n      <!-- <li>\r\n        <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp;</button>\r\n      </li> -->\r\n      <li>\r\n        <a routerLink='/menu' class=\"dets-div-btns selected\" id=\"our-menu-btn\">Today, {{dateForHeader}}</a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"scroll-login-div pull-right  visible-md visible-lg\">\r\n      <ul class=\"list-inline sc-ul\">\r\n        <li class=\"login-trig-div\" *ngIf=\"!authService.loggedIn()\">\r\n          <button type=\"button\" class=\"login-signup-trig-btn dets-div-btns\" (click)=\"appComponent.loginSignupTrigger()\">Log in/Sign up</button>\r\n        </li>\r\n        <li class=\"account-trig-div\" *ngIf=\"authService.loggedIn()\">\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\">{{userName}}&nbsp;<i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i></button>\r\n            <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings'>My Profile</a></li>\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/my-orders'>My Orders</a></li>\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/address'>Saved Address</a></li>\r\n              <!-- <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/payments'>Payments</a></li> -->\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/reward-points'>Reward Points</a></li>\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/change-password'>Change Password</a></li>\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"onLogoutClick()\">Logout</a></li>\r\n            </ul>\r\n          </div>\r\n        </li>\r\n        <li class=\"head-basket\" routerLink='/checkout'>\r\n          Basket &nbsp; <span class=\"head-basket-num\">{{basket_num}}</span> \r\n        </li>\r\n      </ul>\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n</header>\r\n\r\n<div class=\"checkout-main-container\">\r\n  <!-- Header for mobiles and smaller devices -->\r\n  <header class=\"mob-main-header visible-sm visible-xs\">\r\n    <button type=\"button\" class=\"mob-menu-trig-btn\">\r\n                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n            </button>\r\n    <div class=\"mob-main-logo\">\r\n      <img src=\"../assets/logo/logo.png\">\r\n    </div>\r\n  </header>\r\n  <div class=\"container\">\r\n\r\n    <!-- Left Dets -->\r\n    <div class=\"left-dets-section pull-left\">\r\n\r\n      <!-- Address and instructions section -->\r\n      <div class=\"address-section\">\r\n\r\n        <div class=\"address-head-div head-divs\">\r\n          <h3 class=\"section-titles\">Delivery Address</h3>\r\n        </div>\r\n        <div class=\"body-div\">\r\n\r\n          <!-- Warning -->\r\n          <div class=\"warning-div\">\r\n            Please edit the address to be accurate\r\n          </div>\r\n\r\n          <!-- Address statement -->\r\n\r\n          <div class=\"user-address-div\">\r\n            <div *ngIf='one_address == true'>\r\n              <div *ngFor=\"let address of addresses;let i = index\">\r\n                <label style=\"cursor:pointer\">\r\n                <div class=\"address-container\">\r\n                  <div class=\"user-address-item\">\r\n                    <div class=\"user-address pull-left\">\r\n                      <div class=\"pull-left\">\r\n                        <input type=\"radio\" name=\"check_address\" value=\"{{address}}\" (change)=\"addressChecked($event)\" checked>\r\n                      </div>\r\n                      <div class=\"pull-left address-lines\">\r\n                        <h5 class=\"address-lines-title\">Address {{i+1}}</h5>\r\n                        {{address}}\r\n                      </div>\r\n                      <div class=\"clearfix\"></div>\r\n                    </div>\r\n                    <div class=\"address-edit-div pull-right\">\r\n                      <button type=\"button\" id=\"edit-address\" (click)='editAddress(i,address)'>Edit</button>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                  </div>\r\n                </div>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div *ngIf='one_address == false'>\r\n              <div *ngFor=\"let address of addresses;let i = index\">\r\n                <label style=\"cursor:pointer\">\r\n                <div class=\"address-container\">\r\n                  <div class=\"user-address-item\">\r\n                    <div class=\"user-address pull-left\">\r\n                      <div class=\"pull-left\">\r\n                        <input type=\"radio\" name=\"check_address\" value=\"{{address}}\" (change)=\"addressChecked($event)\">\r\n                      </div>\r\n                      <div class=\"pull-left address-lines\">\r\n                        <h5 class=\"address-lines-title\">Address {{i+1}}</h5>\r\n                        {{address}}\r\n                      </div>\r\n                      <div class=\"clearfix\"></div>\r\n                    </div>\r\n                    <div class=\"address-edit-div pull-right\">\r\n                      <button type=\"button\" id=\"edit-address\" (click)='editAddress(i,address)'>Edit</button>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                  </div>\r\n                </div>\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n          <div class=\"instructions-div\">\r\n            <h6>Delivery Instructions</h6>\r\n            <textarea id=\"delivery-instructions-input\" placeholder=\"Instructions for delivery boy (Optional)\" [(ngModel)]='deliveryInst'></textarea>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      \r\n\r\n    </div>\r\n\r\n    <!-- Right Dets -->\r\n    <div class=\"right-dets-section pull-left\">\r\n\r\n      <!-- Order Summary section -->\r\n      <div class=\"order-summary-section\">\r\n\r\n        <div class=\"address-head-div head-divs\">\r\n          <h3 class=\"section-titles\">Order Summary</h3>\r\n        </div>\r\n\r\n        <div class=\"body-div order-summary-body\">\r\n          \r\n      <div class=\"delivery-items-div\">\r\n\r\n          <!-- Day today-->\r\n        <div *ngIf=\"today_orders !=null\">\r\n          <div *ngIf=\"tab_one !=null\">\r\n            \r\n            <h6 class=\"delivery-on-statement\">Delivery today &nbsp; {{tab_one_time_slot}}</h6>\r\n            <!-- Today exists -->\r\n              <div class=\"delivery-item\">\r\n  \r\n                <div class=\"delivery-item-left\">\r\n                  <div class=\"delivery-item-dets\">\r\n                    <span>\r\n                      <p class=\"delivery-item-name\">{{tab_one_name}}</p>\r\n                    </span>\r\n                    \r\n                  </div>\r\n                </div>\r\n  \r\n                <div class=\"delivery-dets\">\r\n                  <!-- Number of items -->\r\n                  <div class=\"delivery-number-div\">\r\n                    <div class=\"delivery-number-core\">\r\n                      <button class=\"minus-btn\" (click)=\"removeDate('tab_one')\"> <i class=\"fa fa-minus\" aria-hidden=\"true\"></i> </button><h5 class=\"delivery-item-price\">&#8377;<span class=\"item-cost-number\"> {{tab_one_base_price}}.00 </span> x {{tab_one_times}}</h5> \r\n                    </div>\r\n                  </div>\r\n                  <!-- Delivery item price -->\r\n                  <div class=\"price-div\">\r\n                    <div class=\"price-core\">\r\n                      &#8377; <span class=\"item-total-cost-number\"> {{tab_one_total_price}}.00 </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n          </div>\r\n          \r\n          <div *ngIf=\"tab_two !=null\">\r\n            \r\n            <h6 class=\"delivery-on-statement\">Delivery today &nbsp; {{tab_two_time_slot}}</h6>\r\n            <!-- Today exists -->\r\n              <div class=\"delivery-item\">\r\n  \r\n                <div class=\"delivery-item-left\">\r\n                  <div class=\"delivery-item-dets\">\r\n                    <span>\r\n                      <p class=\"delivery-item-name\">{{tab_two_name}}</p>\r\n                    </span>\r\n                    \r\n                  </div>\r\n                </div>\r\n  \r\n                <div class=\"delivery-dets\">\r\n                  <!-- Number of items -->\r\n                  <div class=\"delivery-number-div\">\r\n                    <button class=\"minus-btn\" (click)=\"removeDate('tab_two')\"> <i class=\"fa fa-minus\" aria-hidden=\"true\"></i> </button><h5 class=\"delivery-item-price\">&#8377;<span class=\"item-cost-number\"> {{tab_two_base_price}}.00 </span> x {{tab_two_times}}</h5> \r\n                  </div>\r\n                  <!-- Delivery item price -->\r\n                  <div class=\"price-div\">\r\n                    <div class=\"price-core\">\r\n                      &#8377; <span class=\"item-total-cost-number\"> {{tab_two_total_price}}.00 </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n          </div>\r\n          \r\n          <div *ngIf=\"tab_three !=null\">\r\n            \r\n            <h6 class=\"delivery-on-statement\">Delivery today &nbsp; {{tab_three_time_slot}}</h6>\r\n            <!-- Today exists -->\r\n              <div class=\"delivery-item\">\r\n  \r\n                <div class=\"delivery-item-left\">\r\n                  <div class=\"delivery-item-dets\">\r\n                    <span>\r\n                      <p class=\"delivery-item-name\">{{tab_three_name}}</p>\r\n                    </span>\r\n                    \r\n                  </div>\r\n                </div>\r\n  \r\n                <div class=\"delivery-dets\">\r\n                  <!-- Number of items -->\r\n                  <div class=\"delivery-number-div\">\r\n                    <div class=\"delivery-number-core\">\r\n                      <button class=\"minus-btn\" (click)=\"removeDate('tab_three')\"> <i class=\"fa fa-minus\" aria-hidden=\"true\"></i> </button><h5 class=\"delivery-item-price\">&#8377;<span class=\"item-cost-number\"> {{tab_three_base_price}}.00 </span>  x {{tab_three_times}}</h5>\r\n                    </div>\r\n                  </div>\r\n                  <!-- Delivery item price -->\r\n                  <div class=\"price-div\">\r\n                    <div class=\"price-core\">\r\n                      &#8377; <span class=\"item-total-cost-number\"> {{tab_three_total_price}}.00 </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n          </div>\r\n\r\n          \r\n        </div>\r\n        <!-- Day one -->\r\n        <div *ngIf=\"day_one_date !=null\">\r\n          <h6 class=\"delivery-on-statement\">Delivery on {{day_one_date}} &nbsp; {{day_one_slot}}</h6>\r\n            <div class=\"delivery-item\">\r\n              <div class=\"delivery-item-left\">\r\n                <div class=\"delivery-item-dets\">\r\n                  <span *ngFor=\"let menu of day_one_menu\">\r\n                    <span class=\"delivery-item-name\">{{menu.item_name}}</span>\r\n                  </span>\r\n                  \r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"delivery-dets\">\r\n                <!-- Number of items -->\r\n                <div class=\"delivery-number-div\">\r\n                  <button class=\"minus-btn\" (click)=\"removeDate('day_one')\"> <i class=\"fa fa-minus\" aria-hidden=\"true\"></i> </button><h5 class=\"delivery-item-price\">&#8377;<span class=\"item-cost-number\"> {{day_one_per_portion_price}}.00 </span> </h5>\r\n                </div>\r\n                <!-- Delivery item price -->\r\n                <div class=\"price-div\">\r\n                  <div class=\"price-core\">\r\n                    &#8377; <span class=\"item-total-cost-number\"> {{day_one_total_price}}.00 </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n        <!-- Day two -->\r\n        <div *ngIf=\"day_two_date !=null\">\r\n          <h6 class=\"delivery-on-statement\">Delivery on {{day_two_date}} &nbsp; {{day_two_slot}}</h6>\r\n          \r\n            <div class=\"delivery-item\">\r\n              <div class=\"delivery-item-left\">\r\n                <div class=\"delivery-item-dets\">\r\n                  <span *ngFor=\"let menu of day_two_menu\">\r\n                    <span class=\"delivery-item-name\">{{menu.item_name}}</span>\r\n                  </span>\r\n                  \r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"delivery-dets\">\r\n                <!-- Number of items -->\r\n                <div class=\"delivery-number-div\">\r\n                  <button class=\"minus-btn\" (click)=\"removeDate('day_two')\"> <i class=\"fa fa-minus\" aria-hidden=\"true\"></i> </button><h5 class=\"delivery-item-price\">&#8377;<span class=\"item-cost-number\"> {{day_two_per_portion_price}}.00 </span> </h5>\r\n                </div>\r\n                <!-- Delivery item price -->\r\n                <div class=\"price-div\">\r\n                  <div class=\"price-core\">\r\n                    &#8377; <span class=\"item-total-cost-number\"> {{day_two_total_price}}.00 </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          \r\n\r\n\r\n        </div>\r\n        <!-- Day three -->\r\n        <div *ngIf=\"day_three_date !=null\">\r\n          <h6 class=\"delivery-on-statement\">Delivery on {{day_three_date}} &nbsp; {{day_three_slot}}</h6>\r\n\r\n          \r\n            <div class=\"delivery-item\">\r\n              <div class=\"delivery-item-left\">\r\n                <div class=\"delivery-item-dets\">\r\n                  <span *ngFor=\"let menu of day_three_menu\">\r\n                  <span class=\"delivery-item-name\">{{menu.item_name}}</span>\r\n                  </span>\r\n                  \r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"delivery-dets\">\r\n                <!-- Number of items -->\r\n                <div class=\"delivery-number-div\">\r\n                  <button class=\"minus-btn\" (click)=\"removeDate('day_three')\"> <i class=\"fa fa-minus\" aria-hidden=\"true\"></i> </button><h5 class=\"delivery-item-price\">&#8377;<span class=\"item-cost-number\"> {{day_three_per_portion_price}}.00 </span> </h5>\r\n                </div>\r\n                <!-- Delivery item price -->\r\n                <div class=\"price-div\">\r\n                  <div class=\"price-core\">\r\n                    &#8377; <span class=\"item-total-cost-number\"> {{day_three_total_price}}.00 </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          \r\n        </div>\r\n        <!-- Day Four -->\r\n        <div *ngIf=\"day_four_date !=null\">\r\n          <h6 class=\"delivery-on-statement\">Delivery on {{day_four_date}} &nbsp; {{day_four_slot}}</h6>\r\n\r\n            <div class=\"delivery-item\">\r\n              <div class=\"delivery-item-left\">\r\n                <div class=\"delivery-item-dets\">\r\n                  <span *ngFor=\"let menu of day_four_menu\">\r\n                    <span class=\"delivery-item-name\">{{menu.item_name}}</span>\r\n                  </span>\r\n                  \r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"delivery-dets\">\r\n                <!-- Number of items -->\r\n                <div class=\"delivery-number-div\">\r\n                  <button class=\"minus-btn\" (click)=\"removeDate('day_four')\"> <i class=\"fa fa-minus\" aria-hidden=\"true\"></i> </button><h5 class=\"delivery-item-price\">&#8377;<span class=\"item-cost-number\"> {{day_four_per_portion_price}}.00 </span> </h5>\r\n                </div>\r\n                <!-- Delivery item price -->\r\n                <div class=\"price-div\">\r\n                  <div class=\"price-core\">\r\n                    &#8377; <span class=\"item-total-cost-number\"> {{day_four_total_price}}.00 </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n        </div>\r\n        <!-- Day five -->\r\n        <div *ngIf=\"day_five_date !=null\">\r\n          <h6 class=\"delivery-on-statement\">Delivery on {{day_five_date}} &nbsp; {{day_five_slot}}</h6>\r\n\r\n            <div class=\"delivery-item\">\r\n              <div class=\"delivery-item-left\">\r\n                <div class=\"delivery-item-dets\">\r\n                  <span *ngFor=\"let menu of day_five_menu\">\r\n                    <span class=\"delivery-item-name\">{{menu.item_name}}</span>\r\n                  </span>\r\n                  \r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"delivery-dets\">\r\n                <!-- Number of items -->\r\n                <div class=\"delivery-number-div\">\r\n                  <button class=\"minus-btn\" (click)=\"removeDate('day_five')\"> <i class=\"fa fa-minus\" aria-hidden=\"true\"></i> </button><h5 class=\"delivery-item-price\">&#8377;<span class=\"item-cost-number\"> {{day_five_per_portion_price}}.00 </span> </h5>\r\n                </div>\r\n                <!-- Delivery item price -->\r\n                <div class=\"price-div\">\r\n                  <div class=\"price-core\">\r\n                    &#8377; <span class=\"item-total-cost-number\"> {{day_five_total_price}}.00 </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n        </div>\r\n      \r\n      </div>\r\n\r\n        <div class=\"charges-div\">\r\n          <div class=\"total-fee\">\r\n            <div class=\"pull-left\">\r\n              <h6>Added letter :</h6>\r\n            </div>\r\n            <div class=\"pull-right cost-core\">\r\n              &#8377;<span class=\"cost-number\"> {{letter_price}}.00 </span>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n          </div>\r\n          <div class=\"delivery-fee\">\r\n            <div class=\"pull-left\">\r\n              <h6>Delivery Fee :</h6>\r\n            </div>\r\n            <div class=\"pull-right cost-core\">\r\n              &#8377; <span class=\"cost-number\"> {{delivery_fee}}.00 </span>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n          </div>\r\n\r\n          <div class=\"total-fee\">\r\n            <div class=\"pull-left\">\r\n              <h6>Total :</h6>\r\n            </div>\r\n            <div class=\"pull-right cost-core\">\r\n              &#8377;<span class=\"cost-number\"> {{total_price}}.00 </span>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n          </div>\r\n          <div class=\"total-fee\">\r\n            <div class=\"pull-left\">\r\n              <h6>Number of points you'll earn through this order :</h6>\r\n            </div>\r\n            <div class=\"pull-right cost-core\">\r\n            <span class=\"cost-number\"> {{points_earned}} </span>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n          </div>\r\n\r\n          <div *ngIf='rewardPointsPermissions == true'>\r\n              \r\n            <div class=\"rewards-div\">\r\n                <p>\r\n                    You have {{rewardPoints}} reward points.\r\n                </p> \r\n                <button  class=\"save-btns\" id=\"redeem-btn\" (click)='redeemClicked()'>\r\n                  Redeem\r\n                </button>&nbsp; &nbsp; \r\n                <div *ngIf=\"showDiscount\">- {{discount}}</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"total-pay\">\r\n            <div class=\"pull-left\">\r\n              <h6>Total to pay</h6>\r\n            </div>\r\n            <div class=\"pull-right cost-core\">\r\n              &#8377;<span class=\"cost-number\"> {{total_to_pay}}.00</span>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            \r\n          </div>\r\n\r\n          <!-- <div class=\"reward-points\">\r\n            <div class=\"pull-left\">\r\n              <h6>Reward points</h6>\r\n            </div>\r\n            <div class=\"pull-right cost-core\">\r\n              <span class=\"cost-number\"> 5 </span>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n          </div> -->\r\n        </div>\r\n          <!-- <span class=\"place-order-notif\">*Blah blah blah blah</span> -->\r\n        </div>\r\n        <!-- <button type=\"button\" id=\"place-order-button\">Place Order</button> -->\r\n      </div>\r\n      <!-- Payment Gateway Section -->\r\n      <div class=\"payment-selection-section\">\r\n          \r\n        <div class=\"address-head-div head-divs\">\r\n          <h3 class=\"section-titles\"> Select Payment Method</h3>\r\n        </div>\r\n\r\n        <div class=\"payment-options-div body-div\">\r\n          <ul class=\"payment-options-ul list-unstyled list-inline\">\r\n            <li>\r\n                <label for=\"invoice\">\r\n                    <input type=\"radio\" name=\"payment\" id=\"invoice\" value=\"Online\" (click)='paymentMethod($event)'> &nbsp; Pay Online\r\n                </label>\r\n              </li>\r\n            <li>\r\n              <label for=\"credit\">\r\n                  <input type=\"radio\" name=\"payment\" id=\"credit\" value=\"wallet\" (click)='paymentMethod($event)'> &nbsp; Wallet\r\n              </label>\r\n            </li>\r\n            <li>\r\n              <label for=\"paypal\">\r\n                  <input type=\"radio\" name=\"payment\" id=\"paypal\" value=\"cod\" (click)='paymentMethod($event)'> &nbsp; Cash on Delivery\r\n              </label>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"place-order-btn-div\">\r\n        <p class=\"err\"></p>\r\n        <button type=\"button\" id=\"place-order-button\" (click)='placeOrder()'>Proceed to Checkout</button>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n</div>\r\n<div class=\"db\">\r\n  <div class=\"wb\">\r\n      <i class=\"fa fa-times\" aria-hidden=\"true\" (click)='closeUpAddress()'></i>\r\n    <h2>Update Address</h2>\r\n    <textarea [(ngModel)]='placeholder_address'>\r\n\r\n    </textarea>\r\n    <button class=\"save-btns\" (click)='updateAddress()' style=\"margin-top:20px;\">SUBMIT</button>\r\n  </div>\r\n</div>\r\n<script src=\"https://checkout.razorpay.com/v1/checkout.js\"></script>\r\n<script>\r\n\r\n</script>"

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_admin_services_service__ = __webpack_require__("../../../../../src/app/services/admin-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_shortid__ = __webpack_require__("../../../../shortid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_shortid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_shortid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__WindowRef__ = __webpack_require__("../../../../../src/app/checkout/WindowRef.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// var shortid = require('shortid');
var CheckoutComponent = (function () {
    function CheckoutComponent(authService, title, router, getMenu, datePipe, winRef) {
        this.authService = authService;
        this.title = title;
        this.router = router;
        this.getMenu = getMenu;
        this.datePipe = datePipe;
        this.winRef = winRef;
        this.addresses = [];
        this.today_date = null;
        this.day_one_date = null;
        this.day_two_date = null;
        this.day_three_date = null;
        this.day_four_date = null;
        this.day_five_date = null;
        this.day_six_date = null;
        this.today_total_price = 0;
        this.day_one_total_price = 0;
        this.day_two_total_price = 0;
        this.day_three_total_price = 0;
        this.day_four_total_price = 0;
        this.day_five_total_price = 0;
        this.day_six_total_price = 0;
        this.today_menu = [];
        this.day_one_menu = [];
        this.day_two_menu = [];
        this.day_three_menu = [];
        this.day_four_menu = [];
        this.day_five_menu = [];
        this.day_six_menu = [];
        this.slot_one = '12:00 - 12:45';
        this.slot_two = '12:45 - 1:30';
        this.slot_three = '1:30 - 2:15';
        this.slot_four = '2:15 - 3';
        this.delivery_fee = 0;
        // Tabs total price
        this.tab_one_total_price = 0;
        this.tab_two_total_price = 0;
        this.tab_three_total_price = 0;
        this.deliveryInst = '';
        this.rewardPointsPermissions = false;
        this.redeemable = 0;
        this.discount = 0;
        this.deduct_points = 0;
        this.remainingPoints = 0;
        this.points_earned = 0;
        this.today_one = __WEBPACK_IMPORTED_MODULE_7_moment__();
        this.letter_price = 0;
        this.letter_added = 'false';
        this.one_address = false;
        this.showDiscount = false;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Getting orders
        this.title.setTitle('Fysu - Checkout');
        this.dateForHeader = this.datePipe.transform(this.today_one, 'EEE, MMM d');
        // Get basketnumber from localstorage
        this.basket_num = parseInt(localStorage.getItem('basket_number'));
        if (this.basket_num == undefined || this.basket_num == null || this.basket_num == 0 || isNaN(this.basket_num) == true) {
            // redirect to menu
            this.router.navigate(['/menu']);
            // alert('no');
        }
        else {
            // alert('yes');
        }
        var user = this.authService.getUserFromLocal();
        var user_parsed = JSON.parse(user);
        this.userEmail = user_parsed.email;
        this.userName = user_parsed.name;
        this.companyName = user_parsed.company_name;
        this.userMobile = user_parsed.mobile;
        this.userId = user_parsed.id;
        // Getting user reward points
        this.authService.getUserRewards(this.userId).subscribe(function (res) {
            if (res.success) {
                _this.rewardPoints = res.msg;
                // Conditions
                if (_this.rewardPoints > 100) {
                    _this.rewardPointsPermissions = true;
                    if (_this.rewardPoints < 189) {
                        // Number of redeemable points are 100
                        _this.redeemable = 100;
                        // Cost deductable
                        _this.discount = 10;
                    }
                    if (_this.rewardPoints > 191 && _this.rewardPoints < 259) {
                        // Number of redeemable points are 190
                        _this.redeemable = 190;
                        // Cost deductable
                        _this.discount = 20;
                    }
                    if (_this.rewardPoints > 360) {
                        // Number of redeemable points
                    }
                }
            }
            else {
                _this.rewardPoints = 0;
                // Can't do anything
            }
        });
        // Get if letter is added from localstorage
        this.letter_added = localStorage.getItem('letter_added');
        if (this.letter_added == 'true') {
            this.letter_price = 5;
        }
        else {
        }
        // Get orders from local storage
        var s_orders = localStorage.getItem('all_orders');
        this.orders = JSON.parse(s_orders);
        var to_orders = localStorage.getItem('today_orders');
        this.today_orders = JSON.parse(to_orders);
        if (this.today_orders != null) {
            // console.log(this.today_orders);
            // tab one
            this.tab_one = this.today_orders['tab_one'];
            this.tab_two = this.today_orders['tab_two'];
            this.tab_three = this.today_orders['tab_three'];
            if (this.tab_one != null) {
                this.tab_one_base_price = this.today_orders['tab_one'].base_price;
                this.tab_one_total_price = this.today_orders['tab_one'].total_price;
                this.tab_one_name = this.today_orders['tab_one'].name;
                this.tab_one_times = this.today_orders['tab_one'].num_of_items;
                this.tab_one_time_slot = this.getSlotValue(this.today_orders['tab_one'].time_slot);
                // alert(this.tab_one_name);
            }
            if (this.tab_two != null) {
                this.tab_two_base_price = this.today_orders['tab_two'].base_price;
                this.tab_two_total_price = this.today_orders['tab_two'].total_price;
                this.tab_two_name = this.today_orders['tab_two'].name;
                this.tab_two_times = this.today_orders['tab_two'].num_of_items;
                this.tab_two_time_slot = this.getSlotValue(this.today_orders['tab_two'].time_slot);
            }
            if (this.tab_three != null) {
                this.tab_three_base_price = this.today_orders['tab_three'].base_price;
                this.tab_three_total_price = this.today_orders['tab_three'].total_price;
                this.tab_three_name = this.today_orders['tab_three'].name;
                this.tab_three_times = this.today_orders['tab_three'].num_of_items;
                this.tab_three_time_slot = this.getSlotValue(this.today_orders['tab_three'].time_slot);
            }
        }
        //Get addresses
        this.authService.getUserAddressses(this.userId).subscribe(function (res) {
            if (res.success) {
                _this.addresses = res.msg[0].address;
                if (_this.addresses.length == 1) {
                    _this.one_address = true;
                    console.log('one address');
                }
            }
        });
        // if(this.orders['today'] != null){
        //   this.today_date = this.orders['today'].date;
        //   this.today_per_portion_price = this.orders['today'].perPortionPrice;
        //   this.today_total_price = this.orders['today'].totalPrice;
        //   this.today_num_items = this.orders['today'].numOfTimes;
        //   this.today_menu = this.orders['today'].menu;
        //   // Time slots
        //   switch (this.orders['today'].timeSlot) {
        //     case 'slot_one':
        //     this.today_slot = this.slot_one;
        //       break;
        //     case 'slot_two':
        //     this.today_slot = this.slot_two;
        //       break;
        //     case 'slot_three':
        //     this.today_slot = this.slot_three;
        //       break; 
        //     default:
        //       break;
        //   }
        // }else{
        //   this.today_menu = null;
        // }
        if (this.orders != null) {
            if (this.orders['day_one'] != null) {
                this.day_one_date = this.orders['day_one'].date;
                this.day_one_per_portion_price = this.orders['day_one'].perPortionPrice;
                this.day_one_total_price = this.orders['day_one'].totalPrice;
                this.day_one_num_items = this.orders['day_one'].numOfTimes;
                this.day_one_menu = this.orders['day_one'].menu;
                // Time slots
                switch (this.orders['day_one'].timeSlot) {
                    case 'slot_one':
                        this.day_one_slot = this.slot_one;
                        break;
                    case 'slot_two':
                        this.day_one_slot = this.slot_two;
                        break;
                    case 'slot_three':
                        this.day_one_slot = this.slot_three;
                        break;
                    default:
                        break;
                }
            }
            else {
                this.day_one_menu = null;
            }
            if (this.orders['day_two'] != null) {
                this.day_two_date = this.orders['day_two'].date;
                this.day_two_per_portion_price = this.orders['day_two'].perPortionPrice;
                this.day_two_total_price = this.orders['day_two'].totalPrice;
                this.day_two_num_items = this.orders['day_two'].numOfTimes;
                this.day_two_menu = this.orders['day_two'].menu;
                // Time slots
                switch (this.orders['day_two'].timeSlot) {
                    case 'slot_one':
                        this.day_two_slot = this.slot_one;
                        break;
                    case 'slot_two':
                        this.day_two_slot = this.slot_two;
                        break;
                    case 'slot_three':
                        this.day_two_slot = this.slot_three;
                        break;
                    default:
                        break;
                }
            }
            else {
                this.day_two_menu = null;
            }
            if (this.orders['day_three'] != null) {
                this.day_three_date = this.orders['day_three'].date;
                this.day_three_per_portion_price = this.orders['day_three'].perPortionPrice;
                this.day_three_total_price = this.orders['day_three'].totalPrice;
                this.day_three_num_items = this.orders['day_three'].numOfTimes;
                this.day_three_menu = this.orders['day_three'].menu;
                // Time slots
                switch (this.orders['day_three'].timeSlot) {
                    case 'slot_one':
                        this.day_three_slot = this.slot_one;
                        break;
                    case 'slot_two':
                        this.day_three_slot = this.slot_two;
                        break;
                    case 'slot_three':
                        this.day_three_slot = this.slot_three;
                        break;
                    default:
                        break;
                }
            }
            else {
                this.day_three_menu = null;
            }
            if (this.orders['day_four'] != null) {
                this.day_four_date = this.orders['day_four'].date;
                this.day_four_per_portion_price = this.orders['day_four'].perPortionPrice;
                this.day_four_total_price = this.orders['day_four'].totalPrice;
                this.day_four_num_items = this.orders['day_four'].numOfTimes;
                this.day_four_menu = this.orders['day_four'].menu;
                // Time slots
                switch (this.orders['day_four'].timeSlot) {
                    case 'slot_one':
                        this.day_four_slot = this.slot_one;
                        break;
                    case 'slot_two':
                        this.day_four_slot = this.slot_two;
                        break;
                    case 'slot_three':
                        this.day_four_slot = this.slot_three;
                        break;
                    default:
                        break;
                }
            }
            else {
                this.day_four_menu = null;
            }
            if (this.orders['day_five'] != null) {
                this.day_five_date = this.orders['day_five'].date;
                this.day_five_per_portion_price = this.orders['day_five'].perPortionPrice;
                this.day_five_total_price = this.orders['day_five'].totalPrice;
                this.day_five_num_items = this.orders['day_five'].numOfTimes;
                this.day_five_menu = this.orders['day_five'].menu;
                // Time slots
                switch (this.orders['day_five'].timeSlot) {
                    case 'slot_one':
                        this.day_five_slot = this.slot_one;
                        break;
                    case 'slot_two':
                        this.day_five_slot = this.slot_two;
                        break;
                    case 'slot_three':
                        this.day_five_slot = this.slot_three;
                        break;
                    default:
                        break;
                }
            }
            else {
                this.day_five_menu = null;
            }
            if (this.orders['day_six'] != null) {
                this.day_six_date = this.orders['day_six'].date;
                this.day_six_per_portion_price = this.orders['day_six'].perPortionPrice;
                this.day_six_total_price = this.orders['day_six'].totalPrice;
                this.day_six_num_items = this.orders['day_six'].numOfTimes;
                this.day_six_menu = this.orders['day_six'].menu;
                // Time slots
                switch (this.orders['day_six'].timeSlot) {
                    case 'slot_one':
                        this.day_six_slot = this.slot_one;
                        break;
                    case 'slot_two':
                        this.day_six_slot = this.slot_two;
                        break;
                    case 'slot_three':
                        this.day_six_slot = this.slot_three;
                        break;
                    default:
                        break;
                }
            }
            else {
                this.day_six_menu = null;
            }
        }
        // Get location from local storage
        this.total_price = this.delivery_fee + this.today_total_price + this.day_one_total_price + this.day_two_total_price + this.day_three_total_price + this.day_four_total_price + this.day_five_total_price + this.day_six_total_price + this.tab_one_total_price + this.tab_two_total_price + this.tab_three_total_price + this.letter_price;
        this.total_to_pay = this.total_price;
        // calculate points_earned from total_price
        var rounded_num = Math.round(this.total_price / 10);
        this.points_earned = rounded_num;
        // this.points_earned
        // this.address = localStorage.getItem('home_address');
        // console.log(this.address);
    };
    // if redeem is clicked
    CheckoutComponent.prototype.redeemClicked = function () {
        // Show discount points
        this.showDiscount = true;
        // Get total points
        this.rewardPoints;
        // Get redeemable points;
        this.redeemable;
        // Get discountable amount
        this.discount;
        // Remaining user points
        this.remainingPoints = this.rewardPoints - this.redeemable;
        // Update total price
        this.total_to_pay = this.total_price - this.discount;
        // Update rewards
        this.rewardPoints = this.remainingPoints;
        // disable button
        $('#redeem-btn').css({ 'background-color': '#9a9a9a' });
        $('#redeem-btn').prop('disabled', true);
    };
    CheckoutComponent.prototype.addRewardPoints = function () {
        // alert(this.points);
        this.getMenu.postRewards(this.userName, this.deduct_points).subscribe(function (res) {
            if (res.success) {
                // this.flash.show('Updated', {
                //   cssClass: 'alert-success',
                //   timeout: 5000
                // });
                // this.userName='';
                // this.points='';
            }
        });
    };
    CheckoutComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/home']);
        return false;
    };
    CheckoutComponent.prototype.addressChecked = function (event) {
        this.selected_address = event.target.value;
        // alert(this.selected_address);
    };
    CheckoutComponent.prototype.paymentMethod = function (event) {
        this.payment_method = event.target.value;
    };
    CheckoutComponent.prototype.placeOrder = function () {
        // Check for address
        if (this.selected_address == null || this.selected_address == undefined) {
            // Show Error
            $('.err').html('Please select an address');
        }
        else {
            var delivery_address = this.selected_address;
            // Check for payment type
            if (this.payment_method == null || this.payment_method == undefined) {
                // Show error
                $('.err').html('Please select a payment method');
            }
            else {
                var pay_method = this.payment_method;
                // Generate Order Id
                // delivery notes
                var delivery_notes = void 0;
                if (this.deliveryInst != null) {
                    delivery_notes = this.deliveryInst;
                }
                else {
                    delivery_notes = '-';
                }
                // Order id
                var order_id = __WEBPACK_IMPORTED_MODULE_6_shortid__["generate"]();
                // delivery_address,pay_method, delivery_notes
                // Make order
                // Cumulative of today's and all schduled orders
                var cum_orders = {
                    // today orders
                    today: this.today_orders,
                    // next days orders
                    next_days: this.orders
                };
                // Whole order in one place
                var main_order = {
                    user_id: this.userId,
                    order_id: order_id,
                    order_time: __WEBPACK_IMPORTED_MODULE_7_moment__().format('llll'),
                    delivery_address: delivery_address,
                    payment_method: pay_method,
                    order: cum_orders,
                    total_price: this.total_price
                };
                // console.log(main_order);
                // Send order to backend
                // var json = { 'name': catName };
                var json = { 'order_dets': main_order };
                console.log(json);
                if (this.payment_method != "cod") {
                    if (this.payment_method == "wallet") {
                        this.options = {
                            "key": "rzp_test_hJMKKQwECWfY82",
                            "amount": this.total_to_pay * 100,
                            "name": "Fysy",
                            "description": "Purchase Description",
                            "image": "../../assets/logo/logo_black.png",
                            "handler": function (response) {
                                alert(response.razorpay_payment_id);
                            },
                            "prefill": {
                                "name": this.userName,
                                "email": this.userEmail,
                                "contact": this.userMobile,
                                "method": this.payment_method
                            },
                            "notes": {
                                "address": this.deliveryInst
                            },
                            "theme": {
                                "color": "#F37254"
                            }
                        };
                    }
                    else {
                        this.options = {
                            "key": "rzp_test_hJMKKQwECWfY82",
                            "amount": this.total_to_pay * 100,
                            "name": "Fysu",
                            "description": "Purchase Description",
                            "image": "../../assets/logo/logo_black.png",
                            "handler": function (response) {
                                alert(response.razorpay_payment_id);
                            },
                            "prefill": {
                                "name": this.userName,
                                "email": this.userEmail,
                                "contact": this.userMobile
                            },
                            "notes": {
                                "address": this.deliveryInst
                            },
                            "theme": {
                                "color": "#F37254"
                            }
                        };
                    }
                    this.rzp1 = new this.winRef.nativeWindow.Razorpay(this.options);
                    this.rzp1.open();
                }
                // this.authService.postOrder(json).subscribe(res=>{
                //   if(res.success){
                //     console.log(res.msg);
                //     // Save order id to local storage
                //     // localStorage.setItem('order_id',order_id);
                //     // localStorage.removeItem('all_orders');
                //     // localStorage.removeItem('today_orders');
                //     // redirect to thanks page
                //     // this.router.navigate(['/thanks']);
                //   }else{
                //     $('.err').html('Something went wrong. please try again later');
                //   }
                // });
            }
        }
        // Get payment type
        // alert(this.payment_method+' AND '+this.deliveryInst+ ' AND ' +order_id);
        // Make order
    };
    CheckoutComponent.prototype.getSlotValue = function (slot) {
        switch (slot) {
            case 'slot_one':
                return "12:00PM - 12:45PM";
            // break;/
            case 'slot_two':
                return "12:45PM - 1:30PM";
            // break;
            case 'slot_three':
                return "1:30PM - 2:15PM";
            case 'slot_four':
                return "2:15PM - 3:00PM";
            // break;
            default:
                break;
        }
    };
    CheckoutComponent.prototype.editAddress = function (i, address) {
        this.original_address = address;
        this.placeholder_address = address;
        $('.db').css({ 'display': 'flex' });
    };
    CheckoutComponent.prototype.updateAddress = function () {
        // alert('fd');
        var addresses = {
            user_id: this.userId,
            original: this.original_address,
            edited: this.placeholder_address
        };
        this.authService.updateAddress(addresses).subscribe(function (res) {
            if (res.success) {
                window.location.reload();
            }
            else {
                console.log(res.msg);
            }
        });
    };
    CheckoutComponent.prototype.closeUpAddress = function () {
        $('.db').css({ 'display': 'none' });
    };
    CheckoutComponent.prototype.removeDate = function (day) {
        switch (day) {
            case 'tab_one':
                // Remove tab_one from orders
                this.today_orders['tab_one'] = null;
                this.tab_one = null;
                // Update from localstorage
                localStorage.setItem('today_orders', JSON.stringify(this.today_orders));
                // Minus the cost from total
                this.total_price = this.total_price - this.tab_one_total_price;
                this.total_to_pay = this.total_to_pay - this.tab_one_total_price;
                break;
            case 'tab_two':
                // Remove tab_one from orders
                this.today_orders['tab_two'] = null;
                this.tab_two = null;
                // Update from localstorage
                localStorage.setItem('today_orders', JSON.stringify(this.today_orders));
                // Minus the cost from total
                this.total_price = this.total_price - this.tab_two_total_price;
                this.total_to_pay = this.total_to_pay - this.tab_two_total_price;
                break;
            case 'tab_three':
                // Remove tab_one from orders
                this.today_orders['tab_three'] = null;
                this.tab_three = null;
                // Update from localstorage
                localStorage.setItem('today_orders', JSON.stringify(this.today_orders));
                // Minus the cost from total
                this.total_price = this.total_price - this.tab_three_total_price;
                this.total_to_pay = this.total_to_pay - this.tab_three_total_price;
                break;
            case 'day_one':
                // Remove day one from orders
                this.orders['day_one'] = null;
                this.day_one_date = null;
                // Update LocalStorage
                localStorage.setItem('all_orders', JSON.stringify(this.orders));
                // Minus the cost from total
                this.total_price = this.total_price - this.day_one_total_price;
                this.total_to_pay = this.total_to_pay - this.day_one_total_price;
                break;
            case 'day_two':
                // Remove day one from orders
                this.orders['day_two'] = null;
                this.day_two_date = null;
                // Update LocalStorage
                localStorage.setItem('all_orders', JSON.stringify(this.orders));
                // Minus the cost from total
                this.total_price = this.total_price - this.day_two_total_price;
                this.total_to_pay = this.total_to_pay - this.day_two_total_price;
                break;
            case 'day_three':
                // Remove day one from orders
                this.orders['day_three'] = null;
                this.day_three_date = null;
                // Update LocalStorage
                localStorage.setItem('all_orders', JSON.stringify(this.orders));
                // Minus the cost from total
                this.total_price = this.total_price - this.day_three_total_price;
                this.total_to_pay = this.total_to_pay - this.day_three_total_price;
                break;
            case 'day_four':
                // Remove day one from orders
                this.orders['day_four'] = null;
                this.day_four_date = null;
                // Update LocalStorage
                localStorage.setItem('all_orders', JSON.stringify(this.orders));
                // Minus the cost from total
                this.total_price = this.total_price - this.day_four_total_price;
                this.total_to_pay = this.total_to_pay - this.day_four_total_price;
                break;
            case 'day_five':
                // Remove day one from orders
                this.orders['day_five'] = null;
                this.day_five_date = null;
                // Update LocalStorage
                localStorage.setItem('all_orders', JSON.stringify(this.orders));
                // Minus the cost from total
                this.total_price = this.total_price - this.day_five_total_price;
                this.total_to_pay = this.total_to_pay - this.day_five_total_price;
                break;
            default:
                break;
        }
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__("../../../../../src/app/checkout/checkout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/checkout.component.css"), __webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_admin_services_service__["a" /* AdminServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_admin_services_service__["a" /* AdminServicesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__WindowRef__["a" /* WindowRef */]) === "function" && _f || Object])
], CheckoutComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title-img-div {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/contact-us.jpg") + ");\r\n  background-size: cover;\r\n  background-position: 0% 54%;\r\n}\r\n.contact-core{\r\n    position: relative;\r\n    display: block;\r\n}\r\ntable td{\r\n    padding: 20px 0px;\r\n}\r\ntable h6{\r\n    font-size: 140%;\r\n}\r\ntable img{\r\n    height: 80px;\r\n    margin-right: 30px;\r\n}\r\n.jumbotron{\r\n    padding-top:0px !important;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header for mobiles and smaller devices -->\r\n<header class=\"mob-main-header visible-sm visible-xs\">\r\n  <button type=\"button\" class=\"mob-menu-trig-btn\">\r\n                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n            </button>\r\n  <div class=\"mob-main-logo\">\r\n    <img src=\"../../assets/logo/logo_black.png\">\r\n  </div>\r\n</header>\r\n<header class=\"main-header visible-md visible-lg\">\r\n  <div class=\"container\">\r\n    <div class=\"main-logo pull-left\" routerLink='/home'>\r\n      <img src=\"../../assets/logo/logo_black.png\">\r\n    </div>\r\n    <ul class=\"list-inline det-ul visible-xs visible-sm pull-right\">\r\n      <!-- <li>\r\n        <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp;</button>\r\n      </li> -->\r\n    </ul>\r\n    <ul class=\"list-inline det-ul pull-left visible-md visible-lg\">\r\n      <!-- <li>\r\n        <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp;</button>\r\n      </li> -->\r\n      <li>\r\n        <a routerLink='/menu' class=\"dets-div-btns\" id=\"our-menu-btn\">Today, {{dateForHeader}}</a>\r\n      </li>\r\n      <!-- <li>\r\n        <a class=\"dets-div-btns\" id=\"schedule-menu-btn\" (click)='schMenuBtn(schTrigBtn)'>Schedule Menu</a>\r\n      </li> -->\r\n    </ul>\r\n    <div class=\"scroll-login-div pull-right  visible-md visible-lg\">\r\n      <ul class=\"list-inline sc-ul\">\r\n        <li class=\"login-trig-div\" *ngIf=\"!authService.loggedIn()\">\r\n          <button type=\"button\" class=\"login-signup-trig-btn dets-div-btns\" (click)=\"appComponent.loginSignupTrigger()\">Log in/Sign up</button>\r\n        </li>\r\n        <li class=\"account-trig-div\" *ngIf=\"authService.loggedIn()\">\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\">{{userName}}&nbsp;<i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i></button>\r\n            <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings'>My Profile</a></li>\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/my-orders'>My Orders</a></li>\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/address'>Saved Address</a></li>\r\n              <!-- <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/payments'>Payments</a></li> -->\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/reward-points'>Reward Points</a></li>\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/change-password'>Change Password</a></li>\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"onLogoutClick()\">Logout</a></li>\r\n            </ul>\r\n          </div>\r\n        </li>\r\n        <li class=\"head-basket\" routerLink='/checkout'>\r\n          Basket &nbsp; <span class=\"head-basket-num\">{{basket_num}}</span> \r\n      </li>\r\n      </ul>\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n</header>\r\n<div class=\"con-section jumbotron\">\r\n  <div class=\"title-img-div\">\r\n    <div class=\"db\"></div>\r\n    <h2 class=\"web-sec-heads\">CONTACT US</h2>\r\n  </div>\r\n  <div class=\"container\">\r\n    \r\n\r\n    <div class=\"contact-core\">\r\n        <table>\r\n          <tr>\r\n            <td>\r\n              <!-- Mobile icon -->\r\n              <img src=\"../../assets/img/mobile.png\" alt=\"\">\r\n            </td>\r\n            <td>\r\n              <h6>Customer Support : +91 9393290390</h6>\r\n            </td>\r\n\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <img src=\"../../assets/img/mail.png\" alt=\"\">\r\n            </td>\r\n\r\n            <td>\r\n              <h6>info@fysu.in</h6>\r\n            </td>\r\n\r\n          </tr>\r\n        </table>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactComponent = (function () {
    function ContactComponent(router, title, appComponent, authService, datePipe) {
        this.router = router;
        this.title = title;
        this.appComponent = appComponent;
        this.authService = authService;
        this.datePipe = datePipe;
        this.today_one = __WEBPACK_IMPORTED_MODULE_6_moment__();
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.dateForHeader = this.datePipe.transform(this.today_one, 'EEE, MMM d');
        this.basket_num = parseInt(localStorage.getItem('basket_number'));
        if (this.basket_num == undefined || this.basket_num == null || this.basket_num == 0 || isNaN(this.basket_num) == true) {
            // redirect to menu
            this.basket_num = 0;
            // alert('no');
        }
        else {
            // this.basket_num;
        }
        this.title.setTitle('Contact - Fysu');
        if (this.authService.loggedIn() == true) {
            var user = this.authService.getUserFromLocal();
            var user_parsed = JSON.parse(user);
            this.userEmail = user_parsed.email;
            this.userName = user_parsed.name;
            this.companyName = user_parsed.company_name;
            this.userMobile = user_parsed.mobile;
            this.userId = user_parsed.id;
        }
        else {
            this.basket_num = 0;
        }
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css"), __webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]) === "function" && _e || Object])
], ContactComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/admin-auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_admin_auth_service__ = __webpack_require__("../../../../../src/app/services/admin-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminAuthGuard = (function () {
    function AdminAuthGuard(adminauthService, router) {
        this.adminauthService = adminauthService;
        this.router = router;
    }
    AdminAuthGuard.prototype.canActivate = function () {
        // return true;
        if (this.adminauthService.loggedIn() == true) {
            return true;
        }
        else {
            this.router.navigateByUrl('/admin/login');
            // console.log('false');
            return false;
        }
    };
    return AdminAuthGuard;
}());
AdminAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_admin_auth_service__["a" /* AdminAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_admin_auth_service__["a" /* AdminAuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdminAuthGuard);

var _a, _b;
//# sourceMappingURL=admin-auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/home']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// module
exports.push([module.i, ".cdb{\r\n  z-index: 10000;\r\n  position: absolute;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  top:0;\r\n  left:50%;\r\n  width: 50vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n}\r\n.cdb h2{\r\n  color: #fff;\r\n  font-size: 250%;\r\n}\r\n\r\na {\r\n  text-decoration: none !important;\r\n}\r\n\r\n/* Typed font */\r\n\r\n.typed-one,\r\n.typed-two,.typed-three {\r\n  font-weight: 300;\r\n  letter-spacing: 1px;\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n.typed-one #t-one-two{\r\n  opacity: 0;\r\n  -webkit-animation: typedonetwoanime 10s ease-in infinite;\r\n          animation: typedonetwoanime 10s ease-in infinite;\r\n}\r\n@-webkit-keyframes typedonetwoanime{\r\n  0%,100%{\r\n    opacity: 0;\r\n  }\r\n  6%{\r\n    opacity: 0;\r\n  }\r\n  10%{\r\n    opacity: 1;\r\n  }\r\n  30%{\r\n    opacity: 1;\r\n  }\r\n  33%{\r\n    opacity: 0;\r\n  }\r\n  99%{\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes typedonetwoanime{\r\n  0%,100%{\r\n    opacity: 0;\r\n  }\r\n  6%{\r\n    opacity: 0;\r\n  }\r\n  10%{\r\n    opacity: 1;\r\n  }\r\n  30%{\r\n    opacity: 1;\r\n  }\r\n  33%{\r\n    opacity: 0;\r\n  }\r\n  99%{\r\n    opacity: 0;\r\n  }\r\n}\r\n.typed-two #t-two-two{\r\n  opacity: 0;\r\n  -webkit-animation: typedtwotwoanime 10s ease-in infinite;\r\n          animation: typedtwotwoanime 10s ease-in infinite;\r\n}\r\n@-webkit-keyframes typedtwotwoanime{\r\n  0%,100%{\r\n    opacity: 0;\r\n  }\r\n  32%{\r\n    opacity: 0;\r\n  }\r\n  38%{\r\n    opacity: 0;\r\n  }\r\n  42%{\r\n    opacity: 1;\r\n  }\r\n  63%{\r\n    opacity: 1;\r\n  }\r\n  66%{\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes typedtwotwoanime{\r\n  0%,100%{\r\n    opacity: 0;\r\n  }\r\n  32%{\r\n    opacity: 0;\r\n  }\r\n  38%{\r\n    opacity: 0;\r\n  }\r\n  42%{\r\n    opacity: 1;\r\n  }\r\n  63%{\r\n    opacity: 1;\r\n  }\r\n  66%{\r\n    opacity: 0;\r\n  }\r\n}\r\n.typed-one{\r\n  -webkit-animation: typedoneanime 10s ease-in infinite;\r\n          animation: typedoneanime 10s ease-in infinite;\r\n}\r\n.typed-two{\r\n  -webkit-animation: typedtwoanime 10s ease-in infinite;\r\n          animation: typedtwoanime 10s ease-in infinite;\r\n}\r\n.typed-three{\r\n  -webkit-animation: typedthreeanime 10s ease-in infinite;\r\n          animation: typedthreeanime 10s ease-in infinite;\r\n}\r\n@-webkit-keyframes typedoneanime{\r\n  /* Visible for 0%-33% */\r\n  0%,100%{\r\n    opacity: 1;\r\n  }\r\n  30%{\r\n    opacity: 1;\r\n  }\r\n  33%{\r\n    opacity: 0;\r\n  }\r\n  99%{\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes typedoneanime{\r\n  /* Visible for 0%-33% */\r\n  0%,100%{\r\n    opacity: 1;\r\n  }\r\n  30%{\r\n    opacity: 1;\r\n  }\r\n  33%{\r\n    opacity: 0;\r\n  }\r\n  99%{\r\n    opacity: 0;\r\n  }\r\n}\r\n@-webkit-keyframes typedtwoanime{\r\n  /* Visible for 33%-66% */\r\n  0%,100%{\r\n    opacity: 0;\r\n  }\r\n  32%{\r\n    opacity: 0;\r\n  }\r\n  38%{\r\n    opacity: 1;\r\n  }\r\n  63%{\r\n    opacity: 1;\r\n  }\r\n  66%{\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes typedtwoanime{\r\n  /* Visible for 33%-66% */\r\n  0%,100%{\r\n    opacity: 0;\r\n  }\r\n  32%{\r\n    opacity: 0;\r\n  }\r\n  38%{\r\n    opacity: 1;\r\n  }\r\n  63%{\r\n    opacity: 1;\r\n  }\r\n  66%{\r\n    opacity: 0;\r\n  }\r\n}\r\n@-webkit-keyframes typedthreeanime{\r\n  /* Visible for 66%-99% */\r\n  0%,100%{\r\n    opacity: 0;\r\n  }\r\n  65%{\r\n    opacity: 0;\r\n  }\r\n  70%{\r\n    opacity: 1;\r\n  }\r\n  93%{\r\n    opacity: 1;\r\n  }\r\n  99%{\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes typedthreeanime{\r\n  /* Visible for 66%-99% */\r\n  0%,100%{\r\n    opacity: 0;\r\n  }\r\n  65%{\r\n    opacity: 0;\r\n  }\r\n  70%{\r\n    opacity: 1;\r\n  }\r\n  93%{\r\n    opacity: 1;\r\n  }\r\n  99%{\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n/* Fixed scroll header */\r\n\r\n.scroll-header {\r\n  z-index: 8;\r\n  position: fixed;\r\n  top: -100px;\r\n  left: 0;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  -webkit-justify-content: space-around;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  width: 100vw;\r\n  height: 70px;\r\n  background-color: #fff;\r\n  transition: all 0.2s ease-in;\r\n  /* box-shadow: 0 0 2px 1px #999; */\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.13);\r\n}\r\n\r\n.scroll-header h1 {\r\n  color: #000;\r\n}\r\n\r\n.scroll-header .location-input-div {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  margin-top: 0px;\r\n  padding: 0px;\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.scroll-header .location-search-input {\r\n  border: 1px solid #eaeaea;\r\n  border-top-left-radius: 4px;\r\n  border-bottom-left-radius: 4px;\r\n}\r\n\r\n.scroll-header .login-signup-trig-btn {\r\n  border: none;\r\n  color: #333;\r\n  font-size: 110%;\r\n  background-color: transparent;\r\n  /* letter-spacing: 0.1px; */\r\n}\r\n.scroll-header .see-menu-btn{\r\n  line-height: 0;\r\n}\r\n\r\n.fvp {\r\n  background: transparent;\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/fvp.jpg") + ");\r\n  background-size: cover;\r\n  box-shadow: inset 0 20px 50px 1px rgba(0, 0, 0, 1);\r\n}\r\n\r\n.dark-cover .container {\r\n  width: 95%;\r\n  height: 100%;\r\n}\r\n\r\n\r\n/* Main header */\r\n\r\n.m-main-header {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100px;\r\n  top: 0;\r\n  margin-top: 0;\r\n}\r\n\r\n\r\n/* Main logo */\r\n\r\n.main-logo {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 100%;\r\n  color: #fff;\r\n}\r\n\r\n.main-logo img {\r\n  height: 60%;\r\n  width: auto;\r\n}\r\n\r\n\r\n/* Main navigation bar */\r\n\r\n.main-nav-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 100%;\r\n  color: #fff;\r\n  font-size: 100%;\r\n}\r\n\r\n.main-nav-div > nav > ul > li {\r\n  cursor: pointer;\r\n  font-weight: 300;\r\n  letter-spacing: 1px;\r\n  font-weight: 400;\r\n  width: 140px;\r\n  text-align: center;\r\n}\r\n.home-dropdown #menu1 {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #fff;\r\n}\r\n.main-nav-div .uline {\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.main-nav-div .uline:hover {\r\n  /* text-decoration: underline; */\r\n  color: #6DA942;\r\n}\r\n\r\n.concept-btn-li {\r\n  margin: 0 0px;\r\n}\r\n\r\n.concept-trig-btn {\r\n  /* padding: 6px 10px; */\r\n  height: 40px;\r\n  width: 200px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  margin: 15px auto 0px auto;\r\n  background-color: #6DA942;\r\n  color: #fff;\r\n  font-size: 110%;\r\n  letter-spacing: 1px;\r\n  /* font-weight: bold; */\r\n  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.7);\r\n  transition: all 0.2s ease-out;\r\n}\r\n\r\n.concept-trig-btn:hover {\r\n  background-color: #588835;\r\n}\r\n\r\n.reward-pts-trig-btn {\r\n  position: relative;\r\n  display: block;\r\n  border: 1px solid #fff;\r\n  background: transparent;\r\n  padding: 15px 10px !important;\r\n  border-radius: 4px;\r\n  overflow: hidden;\r\n  letter-spacing: 1px;\r\n  transition: all 0.4s linear;\r\n}\r\n\r\n.main-nav-div li .reward-pts-trig-btn:hover {\r\n  border-color: #6DA942;\r\n}\r\n\r\n.reward-pts-trig-btn p {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 100%;\r\n}\r\n\r\n#rwd-hover-div {\r\n  z-index: -1;\r\n  position: absolute;\r\n  display: block;\r\n  top: 100%;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  /* background-color: #F00E3F; */\r\n  background-color: #6DA942;\r\n  /* background-color: #FE7736; */\r\n  /* background: linear-gradient(to right, #F00E3F, #FE7736); */\r\n  transition: all 0.4s linear;\r\n}\r\n\r\n.reward-pts-trig-btn:hover>#rwd-hover-div {\r\n  top: 0;\r\n}\r\n\r\n.reward-pts-trig-btn:hover {\r\n  text-decoration: none !important;\r\n}\r\n\r\n\r\n/* in-container for main text */\r\n\r\n.container .in-container {\r\n  position: relative;\r\n  display: block;\r\n  margin: 0 auto;\r\n  height: 75%;\r\n  width: 90%;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n/* Main text div */\r\n\r\n.main-text {\r\n  position: absolute;\r\n  top: 45%;\r\n  /* left:35%; */\r\n  -webkit-transform: translate(0, -50%);\r\n          transform: translate(0, -50%);\r\n  bottom: 10%;\r\n  color: #fff;\r\n}\r\n\r\n.main-text h2 {\r\n  font-size: 300%;\r\n  margin-bottom: 20px;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.main-text h3 {\r\n  font-size: 120%;\r\n}\r\n\r\n.typed-container {\r\n  position: relative;\r\n  display: block;\r\n  height: 30px;\r\n  margin: 0;\r\n}\r\n\r\n.typed-cursor {\r\n  visibility: hidden;\r\n}\r\n\r\n\r\n/* Currently serving text */\r\n\r\n.cur-serving {\r\n  /* color: #fff; */\r\n  color: rgba(255, 255, 255, 0.6);\r\n  margin: 10px auto;\r\n  margin-left: 2px;\r\n  letter-spacing: 0.5px;\r\n  font-size: 80%;\r\n  font-weight: normal;\r\n}\r\n\r\n\r\n/* Warning div */\r\n\r\n.location-warning-div {\r\n  position: relative;\r\n  display: block;\r\n  /* visibility: hidden; */\r\n  display: none;\r\n  max-width: 650px;\r\n  white-space: normal;\r\n  margin-top: 15px;\r\n  padding: 10px 20px;\r\n\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  /* background-color: rgba(0, 0, 0, 1); */\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n  color: #000;\r\n}\r\n\r\n.location-warning-div ul,\r\n.location-warning-div li,\r\n.location-warning-div p {\r\n  margin: 0;\r\n}\r\n\r\n.location-warning-div ul {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n}\r\n\r\n.location-warning-div i {\r\n  font-size: 250%;\r\n  color: #ffcc00;\r\n  margin-right: 20px;\r\n}\r\n\r\n.location-warning-div p {\r\n  font-size: 100%;\r\n}\r\n\r\n\r\n/* Location enter div */\r\n\r\n#main-see-menu-btn {\r\n  background-color: #000;\r\n  color: #fff;\r\n  font-size: 90%;\r\n  margin-left: 5px;\r\n  transition: all 0.2s ease-in;\r\n}\r\n\r\n#main-see-menu-btn:hover {\r\n  background-color: #191919;\r\n}\r\n\r\n.fvp-down-btn {\r\n  position: absolute;\r\n  display: block;\r\n  bottom: 2%;\r\n  left: 47.5%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  font-size: 200%;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  -webkit-animation-duration: 4s !important;\r\n          animation-duration: 4s !important;\r\n  transition-timing-function: linear !important;\r\n}\r\n\r\n/* Chevron animation */\r\n.animated{\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n} \r\n.infinite{\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n} \r\n.bounce{\r\n  -webkit-animation-name: bounce;\r\n          animation-name: bounce;\r\n  -webkit-transform-origin: center bottom;\r\n          transform-origin: center bottom;\r\n}\r\n@-webkit-keyframes bounce {\r\n  from,\r\n  20%,\r\n  53%,\r\n  80%,\r\n  to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n  40%,\r\n  43% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    -webkit-transform: translate3d(0, -30px, 0);\r\n            transform: translate3d(0, -30px, 0);\r\n  }\r\n  70% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    -webkit-transform: translate3d(0, -15px, 0);\r\n            transform: translate3d(0, -15px, 0);\r\n  }\r\n  90% {\r\n    -webkit-transform: translate3d(0, -4px, 0);\r\n            transform: translate3d(0, -4px, 0);\r\n  }\r\n}\r\n@keyframes bounce {\r\n  from,\r\n  20%,\r\n  53%,\r\n  80%,\r\n  to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n  40%,\r\n  43% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    -webkit-transform: translate3d(0, -30px, 0);\r\n            transform: translate3d(0, -30px, 0);\r\n  }\r\n  70% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    -webkit-transform: translate3d(0, -15px, 0);\r\n            transform: translate3d(0, -15px, 0);\r\n  }\r\n  90% {\r\n    -webkit-transform: translate3d(0, -4px, 0);\r\n            transform: translate3d(0, -4px, 0);\r\n  }\r\n}\r\n\r\n\r\n\r\n/* svp */\r\n\r\n.svp {\r\n  position: relative;\r\n  display: block;\r\n  min-height: 100vh;\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  background-position: center;\r\n  background-size: cover;\r\n  overflow: hidden;\r\n}\r\n\r\n.how-it-works-div,\r\n.concept-div {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  text-align: center;\r\n  margin: 0px auto;\r\n  background-color: rgba(255, 255, 255, 0.90);\r\n  color: #555;\r\n}\r\n\r\n.hv-look-head{\r\n  position: relative;\r\n  display: block;\r\n  margin: 20px auto;\r\n  text-align: center;\r\n  font-size: 120%;\r\n  font-weight: bold;\r\n  color: #444;\r\n}\r\n\r\n.how-it-works-div {\r\n  background-color: #fff;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n  padding: 25px 40px 0px 40px;\r\n}\r\n\r\n.how-it-works-div .how-it-works-core .row {\r\n  padding-bottom: 0px;\r\n  margin-bottom: 0px;\r\n  height: 10% !important;\r\n}\r\n\r\n\r\n.how-it-works-div img {\r\n  position: relative;\r\n  display: block;\r\n  margin: 10px auto 20px auto;\r\n  height: 50px;\r\n  width: auto;\r\n}\r\n\r\n.concept-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding: 0px 0px;\r\n}\r\n\r\n\r\n.concept-div .img {\r\n  position: relative;\r\n  display: block;\r\n  height: auto;\r\n  width: 40% !important;\r\n  margin: 0 0 0 20px;\r\n  overflow: hidden;\r\n}\r\n.concept-div .img img{\r\n  width: 90%;\r\n  height: auto;\r\n}\r\n.concept-exp-div {\r\n  position: relative;\r\n  display: block;\r\n  height: 100%;\r\n  width: 57%;\r\n  margin: 0;\r\n  text-align: center;\r\n  overflow: hidden !important;\r\n}\r\n.conc-core{\r\n  position: relative;\r\n  display: block;\r\n  width: 86%;\r\n  margin: 0 auto;\r\n  padding: 0;\r\n}\r\n.concept-div #cn-list{\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  padding-left: 20px;\r\n  box-sizing: content-box;\r\n}\r\n.concept-div #cn-list li {\r\n  position: relative;\r\n  display: list-item;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.concept-div ul li p{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.rw-p{\r\n  margin: 20px auto !important;\r\n}\r\n.rw-pp{\r\n  margin: 20px auto !important;\r\n}\r\n.how-it-works-div p {\r\n  position: relative;\r\n  display: block;\r\n  text-align: center;\r\n  margin: 10px auto;\r\n  font-size: 110%;\r\n  line-height: 1.5;\r\n  color: #666;\r\n  width: 90%;\r\n}\r\n\r\n.concept-div p {\r\n  position: relative;\r\n  display: block;\r\n  text-align: left;\r\n  margin: 6px auto;\r\n  font-size: 100%;\r\n  line-height: 1.5;\r\n  color: #666;\r\n  width: 100%;\r\n}\r\n\r\n/* Headings in how it works section and concept section */\r\n\r\n.how-it-works-div h3 {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.how-it-works-div h4 {\r\n  margin-bottom: 10px;\r\n  color: #111;\r\n}\r\n\r\n.svp .parallax-window {\r\n  /* background: transparent; */\r\n  height: 150px;\r\n}\r\n\r\n.p-window-one {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/pen.jpg") + ");\r\n  background-size: cover;\r\n  background-position-y: 90%;\r\n}\r\n\r\n.p-window-two {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/contact-us.jpg") + ");\r\n  background-size: cover;\r\n  background-position-y: 53%;\r\n}\r\n\r\n.how-it-works-div i {\r\n  font-size: 300%;\r\n  margin: 20px auto;\r\n}\r\n\r\n.concept-pic-div {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.concept-div h3 {\r\n  margin-top: 30px;\r\n  margin-bottom: 20px;\r\n  color: #222;\r\n  font-weight: bold;\r\n}\r\n\r\n#concept-rewards-trig div {\r\n  position: relative;\r\n  display: inline-block;\r\n  padding: 18px 20px;\r\n  margin: 0px auto 20px auto;\r\n  color: #fff;\r\n  background-color: #6DA942;\r\n  text-decoration: none;\r\n  /* box-shadow: 2px 0px 2px 1px rgba(0,0,0,0.2); */\r\n  transition: all 0.2s ease-in;\r\n  border-radius: 4px;\r\n  line-height: 0 !important;\r\n}\r\n\r\n#concept-rewards-trig div:hover {\r\n  background-color: #588835;\r\n  /* box-shadow: 8px 2px 10px 1px rgba(0,0,0,0.2); */\r\n}\r\n\r\n#concept-rewards-trig div:active {\r\n  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n\r\n/* Columns in how it works section*/\r\n\r\n.col-one-div::after,\r\n.col-two-div::after,\r\n.col-three-div::after {\r\n  content: '';\r\n  position: absolute;\r\n  display: block;\r\n  top: 50%;\r\n  left: 100%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  height: 50%;\r\n  width: 1px;\r\n  color: #888;\r\n  background-color: #000;\r\n}\r\n\r\n.how-it-works-div .row {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n\r\n/* Extra Small Devices, .visible-xs-* */\r\n\r\n\r\n/* @media (max-width: 480px) {} */\r\n\r\n@media (max-width: 767px) {\r\n  .container .in-container {\r\n    width: 95%;\r\n  }\r\n  .main-text {\r\n    top: 50%;\r\n    font-size: 70%;\r\n  }\r\n  .cur-serving {\r\n    font-size: 100%;\r\n  }\r\n  .location-warning-div {\r\n    width: 90%;\r\n  }\r\n  .concept-trig-btn {\r\n    height: 35px;\r\n    font-size: 120%;\r\n    margin: 10px auto 0px auto;\r\n  }\r\n  .location-enter-div {\r\n    width: 200px;\r\n  }\r\n  /* .locate-me-btn {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n  } */\r\n  .see-menu-btn {\r\n    width: 90px;\r\n  }\r\n  /* svp */\r\n  /* How it works */\r\n  .col-one-div::after,\r\n  .col-two-div::after,\r\n  .col-three-div::after {\r\n    /* display: none; */\r\n    top: 110%;\r\n    left: 50%;\r\n    height: 1px !important;\r\n    width: 30%;\r\n  }\r\n  .how-it-works-div .row>div {\r\n    padding-top: 30px !important;\r\n  }\r\n  /* concept div */\r\n  .concept-div {\r\n    width: 100%;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n  .concept-div img {\r\n    width: 100%;\r\n  }\r\n  .concept-exp-div {\r\n    width: 90%;\r\n  }\r\n  .concept-div p {\r\n    width: 85%;\r\n  }\r\n  .concept-div h3 {\r\n    margin-top: 30px;\r\n  }\r\n  .scroll-header {\r\n    display: none;\r\n  }\r\n}\r\n\r\n\r\n/* Small Devices, .visible-sm-* */\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .scroll-header {\r\n    display: none;\r\n  }\r\n  .container .in-container {\r\n    width: 95%;\r\n  }\r\n  .main-text {\r\n    top: 50%;\r\n    font-size: 90%;\r\n  }\r\n  .cur-serving {\r\n    font-size: 110%;\r\n  }\r\n  .location-warning-div {\r\n    width: 80%;\r\n  }\r\n  .concept-trig-btn {\r\n    height: 35px;\r\n    font-size: 110%;\r\n    margin: 10px auto 0px auto;\r\n  }\r\n  /* svp */\r\n  /* How it works */\r\n  .col-one-div::after,\r\n  .col-two-div::after,\r\n  .col-three-div::after {\r\n    /* display: none; */\r\n    top: 110%;\r\n    left: 50%;\r\n    height: 1px !important;\r\n    width: 30%;\r\n  }\r\n  .how-it-works-div .row>div {\r\n    padding-top: 30px !important;\r\n  }\r\n  /* concept div */\r\n  .concept-div {\r\n    width: 100%;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n  .concept-div img {\r\n    width: 100%;\r\n  }\r\n  .concept-exp-div {\r\n    width: 90%;\r\n  }\r\n  .concept-div p {\r\n    width: 85%;\r\n  }\r\n  .concept-div h3 {\r\n    margin-top: 30px;\r\n  }\r\n  .scroll-header {\r\n    display: none;\r\n  }\r\n}\r\n\r\n\r\n/* Medium Devices, .visible-md-* */\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {}\r\n\r\n\r\n/* Large Devices, .visible-lg-* */\r\n\r\n@media (min-width: 1200px) {}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scroll-header\">\r\n  <div class=\"main-logo pull-left\">\r\n    <img src=\"../../assets/logo/logo_black.png\">\r\n  </div>\r\n  <div class=\"location-input-div\">\r\n    <div class=\"location-enter-div\">\r\n      <input type=\"search\" class=\"location-search-input\"  [(ngModel)]=\"locationEntry\" placeholder=\"Ex: Madhapur\">\r\n      <!-- <button type=\"button\" class=\"locate-me-btn\" (click)=\"geoLocate()\">Locate me</button> -->\r\n      <div class=\"locate-me-btn\" (click)=\"geoLocate()\"><span> Locate me</span></div>\r\n    </div>\r\n    <button type=\"button\" class=\"see-menu-btn\" id=\"main-see-menu-btn\" (click)=\"seeMenu()\">See The Menu</button>\r\n  </div>\r\n  <div class=\"scroll-login-div\" *ngIf=\"!authService.loggedIn()\">\r\n    <button type=\"button\" class=\"login-signup-trig-btn\" (click)=\"appComponent.loginSignupTrigger()\">Log in/Sign up</button>\r\n\r\n  </div>\r\n  <div class=\"scroll-login-div\" *ngIf=\"authService.loggedIn()\">\r\n    <!-- <a (click)=\"onLogoutClick()\" style=\"cursor:pointer\">Logout</a> -->\r\n    \r\n      <div class=\"account-trig-div\" *ngIf=\"authService.loggedIn()\">\r\n        <div class=\"dropdown home-dropdown\">\r\n          <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\" style=\"color:#000\">{{userName}}&nbsp;<i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i></button>\r\n          <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\r\n            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings'>My Profile</a></li>\r\n            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/my-orders'>My Orders</a></li>\r\n            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/address'>Saved Address</a></li>\r\n            <!-- <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/payments'>Payments</a></li> -->\r\n            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/reward-points'>Reward Points</a></li>\r\n            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/change-password'>Change Password</a></li>\r\n            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"onLogoutClick()\">Logout</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<div class=\"vp fvp\">\r\n\r\n\r\n  <!-- Header for mobiles and smaller devices -->\r\n  <header class=\"mob-main-header visible-sm visible-xs\">\r\n    <button type=\"button\" class=\"mob-menu-trig-btn\">\r\n        <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n    </button>\r\n    <div class=\"mob-main-logo\">\r\n      <img src=\"../../assets/logo/logo.png\">\r\n    </div>\r\n  </header>\r\n  <div class=\"dark-cover\">\r\n    <div class=\"container\">\r\n\r\n      <!-- <div class=\"cdb\">\r\n        <h2>Coming Soon</h2>\r\n      </div> -->\r\n\r\n      <!-- Header for tablets and desktops -->\r\n      <header class=\"m-main-header visible-lg visible-md\">\r\n        <div class=\"main-logo pull-left\">\r\n          <img src=\"../../assets/logo/logo.png\">\r\n        </div>\r\n        <div class=\"pull-right main-nav-div\">\r\n          <nav>\r\n            <ul class=\"list list-inline\">\r\n              <li class=\"how-it-works-trig-btn uline\" (click)=\"gotoHowitWorks()\">\r\n                How It Works\r\n              </li>\r\n              <li class=\"concept-btn-li\">\r\n                <a routerLink=\"/rewards\">\r\n                  <button type=\"button\" class=\"reward-pts-trig-btn\" style=\"color:#fff\">\r\n                    <div id=\"rwd-hover-div\"></div>\r\n                    <p>Reward Points</p>\r\n                  </button>\r\n                </a>\r\n              </li>\r\n              <li class=\"login-signup-trig-btn uline\" *ngIf=\"!authService.loggedIn()\" (click)=\"appComponent.loginSignupTrigger()\">\r\n                Log in/Sign up\r\n              </li>\r\n              <li class=\"account-trig-div\" *ngIf=\"authService.loggedIn()\">\r\n                <div class=\"dropdown home-dropdown\">\r\n                  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\">{{userName}}&nbsp;<i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i></button>\r\n                  <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\r\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings'>My Profile</a></li>\r\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/my-orders'>My Orders</a></li>\r\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/address'>Saved Address</a></li>\r\n                    <!-- <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/payments'>Payments</a></li> -->\r\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/reward-points'>Reward Points</a></li>\r\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/change-password'>Change Password</a></li>\r\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"onLogoutClick()\">Logout</a></li>\r\n                  </ul>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </header>\r\n      <div class=\"container in-container\">\r\n        <div class=\"main-text\">\r\n          <h2>Office Lunch?<br>Sorted.</h2>\r\n          <div class=\"typed-container\">\r\n            <h3>\r\n              <span class=\"typed-one\">\r\n                <span id=\"t-one-one\" class= \"typed-spans\">NO MINIMUMS.</span>\r\n                <span id=\"t-one-two\" class= \"typed-spans\">NO DELIVERY CHARGES.</span>\r\n              </span>\r\n              <span class=\"typed-two\">\r\n                <span id=\"t-two-one\" class=\"typed-spans\">SIMPLE MENU.</span>\r\n                <span id=\"t-two-two\" class=\"typed-spans\">MORE REWARD POINTS.</span>\r\n              </span>\r\n              <span class=\"typed-three\">\r\n                <span id=\"t-three-one\" class=\"typed-spans\">OPTIONS FOR SCHEDULED MEALS.</span>\r\n                <span id=\"t-three-two\" class=\"typed-spans\"></span>\r\n              </span>\r\n            </h3>\r\n          </div>\r\n\r\n          <div class=\"concept-trig-btn-div\">\r\n            <a><button type=\"button\" class=\"concept-trig-btn\" (click)=\"gotoConcept()\">Unique Concept</button></a>\r\n          </div>\r\n\r\n          <div class=\"location-input-div location-input-scrolltop-helper\">\r\n            <div class=\"location-enter-div\">\r\n              <input type=\"search\" class=\"location-search-input\" placeholder=\"Ex: Madhapur\" [(ngModel)]=\"locationEntry\">\r\n              <!-- <button type=\"button\" class=\"locate-me-btn\" (click)=\"geoLocate()\"><span>Locate me</span></button> -->\r\n              <div class=\"locate-me-btn\" (click)=\"geoLocate()\"><span> Locate me</span></div>\r\n            </div>\r\n            <button type=\"button\" class=\"see-menu-btn\" id=\"main-see-menu-btn\" (click)=\"seeMenu()\">See The Menu</button>\r\n          </div>\r\n          <h6 class=\"cur-serving\">We are currently serving in Madhapur</h6>\r\n          <div class=\"location-warning-div\">\r\n            <ul class=\"list-inline\">\r\n              <li>\r\n                <i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\r\n              </li>\r\n              <li>\r\n                <p>\r\n                  We currently do not deliver in your area. We currently deliver in or around Madhapur.\r\n                </p>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <span class=\"fvp-down-btn animated infinite bounce\" (click)=\"gotoHowitWorks()\"><i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i></span>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"svp\">\r\n  <div class=\"w-cover\">\r\n    <section class=\"how-it-works-div container\">\r\n      <h3>How it works</h3>\r\n      <div class=\"how-it-works-core\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 col-one-div\">\r\n            <img src=\"../../assets/img/cook.png\" alt=\"\">\r\n            <h4>Choose your meal</h4>\r\n            <!--<i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i>-->\r\n            <!--<br>-->\r\n            <p>\r\n               Choose number of meals from daily rotating menu.\r\n            </p>\r\n          </div>\r\n          <div class=\"col-md-3 col-two-div\">\r\n            <img src=\"../../assets/img/time.png\" alt=\"\">\r\n            <h4>Choose your time</h4>\r\n            <!--<i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>-->\r\n            <!--<br>-->\r\n            <p>\r\n               Select Delivery Slots. You can also order in advance.\r\n            </p>\r\n          </div>\r\n          <div class=\"col-md-3 col-three-div\">\r\n            <img src=\"../../assets/img/gift.png\" alt=\"\">\r\n            <h4>Earn rewards</h4>\r\n            <!--<i class=\"fa fa-trophy\" aria-hidden=\"true\"></i>-->\r\n            <!--<br>-->\r\n            <p>\r\n               Get reward points with every order Redeem them for future orders.\r\n            </p>\r\n          </div>\r\n          <div class=\"col-md-3 col-four-div\">\r\n            <img src=\"../../assets/img/smile.png\" alt=\"\">\r\n            <h4>Enjoy fysu</h4>\r\n            <p>\r\n               We’ll call you when it arrives. Ready with spoon and pen.\r\n            </p>\r\n            <br><br><br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <div class=\"parallax-window p-window-one sub-main\"> </div>\r\n    <section class=\"concept-div container\">\r\n        <div class=\"img pull-left\">\r\n          <img src=\"../../assets/img/idea.jpg\" alt=\"\" class=\"\">\r\n        </div>\r\n        <div class=\"concept-exp-div\" class=\"pull-right\">\r\n          <div class=\"conc-core\">\r\n\r\n            <h3>Concept</h3>\r\n            <p>\r\n               Are you bored of the monotonous work at your desk? Are you hungry as well? We make your lunch time fun time as well. Order your lunch and be ready with Pen &amp; Paper !!!\r\n            </p>\r\n            <p>\r\n               We are introducing a ground-breaking idea to make your lunch-time fun, useful and creative. Bringing back the lost art of letter writings, reinventing the concept of daily writing habits and sharpen your mind.\r\n            </p>\r\n            <h5 class=\"hv-look-head\">Have a look !</h5>\r\n              <ul id=\"cn-list\">\r\n                <li>\r\n                  <p>\r\n                     With every order, you get a puzzle, it may be a Sudoku/finding ways/puzzles or even a mere basic math problem. Solve them and return it on the next order.\r\n                  </p>\r\n                </li>\r\n                <li>\r\n                  <p>\r\n                     Share your thoughts and let the world know them. We are providing an excellent platform to reach out to people who are tired of Electronic media and want to go back to good old days of reading and writing.\r\n                  </p>\r\n                </li>\r\n                <li>\r\n                  <p>\r\n                     You can even write a letter to your loved ones. A few things that you cannot tell on phone can seamlessly be explained through personal letters. How cool is that?!\r\n                  </p>\r\n                </li>\r\n              </ul>\r\n              <p class=\"rw-p\">\r\n                <b>\r\n                Get reward points for every order you place and every letter you write or every thought you share or every puzzle you solve. Redeem them in your future orders.\r\n                </b>\r\n              </p>\r\n              <p>\r\n                 Making something creative can always be a boost to your brain and your personality and it makes you happier over the period of time. Doing what we love is all we crave for, so why not crave for food and happiness together?\r\n              </p>\r\n              <p>What are you even waiting for? Place lunch order and be ready with spoon and pen.</p>\r\n              <p style=\"text-align:center\" class=\"rw-pp\">\r\n                <b>\r\n                  <em>\r\n                     Not Just a Lunch. Not Just a Box.<br> It’s an Experience. Live It.\r\n                  </em>\r\n                </b>\r\n              </p>\r\n              \r\n    \r\n            <a [routerLink]=\"['/rewards']\" id=\"concept-rewards-trig\">\r\n              <div>\r\n                REWARD POINTS\r\n              </div>\r\n            </a>\r\n\r\n          </div>\r\n        </div>\r\n      <div class=\"clearfix\"></div>\r\n    </section>\r\n    <div class=\"parallax-window p-window-two sub-main\"> </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
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
    function HomeComponent(router, title, appComponent, authService) {
        this.router = router;
        this.title = title;
        this.appComponent = appComponent;
        this.authService = authService;
        this.location = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        if (this.authService.loggedIn()) {
            var user = this.authService.getUserFromLocal();
            var user_parsed = JSON.parse(user);
            this.userEmail = user_parsed.email;
            this.userName = user_parsed.name;
            this.companyName = user_parsed.company_name;
            this.userMobile = user_parsed.mobile;
            this.userId = user_parsed.id;
            if (this.userName == undefined || this.userName == null || this.userName == '') {
                this.userName = this.appComponent.uName;
            }
        }
        else {
            // window.location.reload();
            // console.log('shlog');
        }
        // Set title
        this.title.setTitle('Fysu - Home');
        $(window).on('scroll', function () {
            var scrollTop = $(this).scrollTop();
            $('.location-input-scrolltop-helper').each(function () {
                var topDistance = $(this).offset().top;
                if ((topDistance + 100) < scrollTop) {
                    $('.scroll-header').css({ 'top': '0' });
                    $('.mob-main-header').css({ 'background-color': 'rgba(0,0,0,1)' });
                }
                else {
                    $('.scroll-header').css({ 'top': '-100px' });
                    $('.mob-main-header').css({ 'background-color': 'rgba(0,0,0,.5)' });
                    $('.scroll-header .dropdown').removeClass('open');
                }
            });
        });
        // showSentence();
        // // Typed effect
        // function showSentence() {
        //   var tOut = setTimeout(showSentence, 8000);
        //   // First 
        //   setTimeout(function () {
        //     $('#t-two-one').hide();
        //     $('#t-two-two').hide();
        //     $('#t-three-one').hide();
        //     $('#t-three-two').hide();
        //     $('#t-one-one').fadeIn(500);
        //   }, 0);
        //   setTimeout(function () {
        //     $('#t-one-two').fadeIn(500);
        //   }, 1000);
        //   // Second lines
        //   setTimeout(function () {
        //     $('#t-one-one').hide();
        //     $('#t-one-two').hide();
        //     $('#t-three-one').hide();
        //     $('#t-three-two').hide();
        //     $('#t-two-one').fadeIn(500);
        //   }, 3000);
        //   setTimeout(function () {
        //     $('#t-two-two').fadeIn(500);
        //   }, 4000);
        //   // Third lines
        //   setTimeout(function () {
        //     $('#t-one-one').hide();
        //     $('#t-one-two').hide();
        //     $('#t-two-one').hide();
        //     $('#t-two-two').hide();
        //     $('#t-three-one').fadeIn(500);
        //   }, 5500);
        //   setTimeout(function () {
        //     $('#t-three-two').fadeIn(500)
        //   }, 6500);
        // }
    };
    HomeComponent.prototype.gotoHowitWorks = function () {
        $('html, body').animate({ scrollTop: $(".how-it-works-div").offset().top - 70 }, 1000);
    };
    HomeComponent.prototype.gotoConcept = function () {
        $('html, body').animate({ scrollTop: $(".concept-div").offset().top - 70 }, 1000);
    };
    HomeComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/']);
        return false;
    };
    HomeComponent.prototype.geoLocate = function (callback) {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.location = position.coords;
                _this.lat = position.coords.latitude;
                _this.long = position.coords.longitude;
                if (_this.location == undefined || _this.location == null) {
                }
                else {
                    _this.authService.getLocation(_this.lat, _this.long).subscribe(function (res) {
                        console.log(res);
                        _this.address = res.results[0].formatted_address;
                        _this.locationEntry = _this.address;
                        if (_this.address.includes('Madhapur')) {
                            // this.give_menu_permission = true;
                            localStorage.setItem('home_address', _this.address);
                            // Add to user's address if he is logged in
                            if (_this.authService.loggedIn()) {
                                // User is logged in 
                                // send this address to save
                                var address = {
                                    user_id: _this.userId,
                                    address: _this.address
                                };
                                _this.authService.saveAddress(address).subscribe(function (res) {
                                    if (res.success) {
                                        // Address saved
                                        console.log(res);
                                    }
                                    else {
                                        // Address not saved
                                        if (res.msg = 'exists') {
                                            // address already exists
                                        }
                                        else {
                                            // console.log(res);
                                        }
                                    }
                                });
                            }
                            else {
                                // Not logged in 
                                // this.give_menu_permission = true;
                            }
                            // Add to input box
                            // $('.location-search-input').val(this.address);
                            _this.locationEntry = _this.address;
                        }
                        else {
                            // ********** VERY IMPORTANT DELETE AFTER TESTING IS DONE ************** 
                            // Delete after testing is done
                            // this.give_menu_permission = true;
                            localStorage.setItem('home_address', _this.address);
                            // Add to user's address if he is logged in
                            if (_this.authService.loggedIn()) {
                                // console.log('user is logged in');
                                // User is logged in 
                                // send this address to save
                                var address = {
                                    user_id: _this.userId,
                                    address: _this.address
                                };
                                // console.log(address);
                                _this.authService.saveAddress(address).subscribe(function (res) {
                                    if (res.success) {
                                        // Address saved
                                        console.log(res.msg);
                                    }
                                    else {
                                        // Address not saved
                                        if (res.msg == 'exists') {
                                            // address already exists
                                            console.log('exists');
                                        }
                                        else {
                                            console.log(res.msg);
                                        }
                                    }
                                });
                            }
                            else {
                                // console.log('not logged in');
                            }
                            _this.locationEntry = _this.address;
                            $('.location-warning-div').show();
                        }
                    });
                }
            });
        }
    };
    HomeComponent.prototype.seeMenu = function () {
        // alert('menu');
        // Address in this.locationEntry
        if (this.locationEntry != undefined) {
            if (this.locationEntry.includes('Madhapur') || this.locationEntry.includes('madhapur') || this.locationEntry == 'Madhapur' || this.locationEntry == 'madhapur' || this.locationEntry == 'Madapur' || this.locationEntry == 'madapur' || this.locationEntry.includes('Madapur') || this.locationEntry.includes('madapur')) {
                localStorage.setItem('home_address', this.locationEntry);
                // Add to user's address if he is logged in
                if (this.authService.loggedIn()) {
                    // User is logged in 
                    //     // send this address to save
                    var address = {
                        user_id: this.userId,
                        address: this.locationEntry
                    };
                    this.authService.saveAddress(address).subscribe(function (res) {
                        if (res.success) {
                            // Address saved
                            console.log(res);
                        }
                        else {
                            // Address not saved
                            if (res.msg = 'exists') {
                                // address already exists
                            }
                            else {
                                // console.log(res);
                            }
                        }
                    });
                    this.router.navigate(['/menu']);
                }
                else {
                    // Navigate to menu
                    this.router.navigate(['/menu']);
                }
            }
            else {
                this.locationEntry = this.address;
                $('.location-warning-div').show();
                // Remove later
                this.router.navigate(['/menu']);
            }
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.added-db{\r\n  z-index: 10000;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: none;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n}\r\n/* .added-wb{\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 200px;\r\n  width: 400px;\r\n  border-radius: 4px;\r\n  background-color: #fff;\r\n  color: #777;\r\n} */\r\n.added-wb{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 60%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  height: 200px;\r\n  width: 400px;\r\n  border-radius: 4px;\r\n  background-color: #fff;\r\n  color: #777;\r\n}\r\n.added-wb h3{\r\n  font-size: 200%;\r\n}\r\n\r\n.main-header .container {\r\n  width: 90%;\r\n}\r\n.det-ul{\r\n  margin-left: 50px;\r\n}\r\n\r\n/* Today select */\r\n.today-menu-back{\r\n   z-index: 100;\r\n   position: fixed;\r\n   display: -webkit-box;\r\n   display: -ms-flexbox;\r\n   display: flex;\r\n   display: none;\r\n   top: 0;\r\n   left: 0;\r\n   height: 100vh;\r\n   width: 100vw;\r\n   background-color: rgba(0, 0, 0, 0.7);\r\n   -webkit-box-pack: center;\r\n       -ms-flex-pack: center;\r\n           justify-content: center;\r\n   -webkit-box-align: center;\r\n       -ms-flex-align: center;\r\n           align-items: center;\r\n   -webkit-box-orient: horizontal;\r\n   -webkit-box-direction: normal;\r\n       -ms-flex-direction: row;\r\n           flex-direction: row;\r\n}\r\n.today-core{\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  background-color: #fff;\r\n  height: 270px;\r\n  width: 500px;\r\n  padding: 30px 0px;\r\n  border-radius: 4px;\r\n}\r\n.today-core label{\r\n  position: relative;\r\n  display: block;\r\n  height: 30px;\r\n  width: 90%;\r\n  color: #666;\r\n}\r\n.today-btns{\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  height: 40px;\r\n  width: 100%;\r\n  margin-top: 30px;\r\n}\r\n.today-btns button{\r\n  height: 40px;\r\n}\r\n\r\n.today-core select{\r\n  outline: none !important;\r\n  position: relative;\r\n  display: block;\r\n  height: 35px;\r\n  width: 100%;\r\n  font-size: 100%;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 4px;\r\n  font-weight: normal;\r\n}\r\n#letter-label{\r\n  font-weight: normal;\r\n  margin-top: 10px;\r\n}\r\n.main-container {\r\n  padding-top: 30px;\r\n  background-color: #F2F5F6;\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/mbg.png") + ");\r\n  background-size: auto;\r\n  padding-bottom: 20px !important;\r\n  /* filter: sepia(10%); */\r\n  /* background-repeat: repeat; */\r\n}\r\n\r\n.main-container .container {\r\n  width: 90%;\r\n}\r\n\r\n.scroll-login-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  width: 40%;\r\n}\r\n\r\n.scroll-login-div .sc-ul {\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: end;\r\n      -ms-flex-align: end;\r\n          align-items: flex-end;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n\r\n.scroll-login-div .sc-ul>li {\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  margin-left: 20px;\r\n}\r\n\r\n.scroll-login-div .sc-ul .dropdown-menu {\r\n  position: absolute;\r\n  top: 140%;\r\n}\r\n\r\n.scroll-login-div .sc-ul .dropdown-menu li {\r\n  width: 100%;\r\n}\r\n\r\n.scroll-login-div .sc-ul .dropdown-menu li a {\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.slot-select{\r\n  outline: none;\r\n  height: 30px;\r\n  width: 200px;\r\n}\r\nbutton{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n\r\n/* Filters section */\r\n\r\n.filter-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  height: 50px;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  overflow: visible;\r\n}\r\n\r\n.filter-div div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 100%;\r\n  width: 33.333%;\r\n  margin: 0;\r\n  overflow: visible;\r\n}\r\n.date-filter-div,\r\n.filter-type-div,\r\n.filter-filter-div {\r\n  position: relative;\r\n  display: block;\r\n  overflow: visible;\r\n}\r\n\r\n.date-filter-div .dropdown-menu,\r\n.filter-type-div .dropdown-menu,\r\n.filter-filter-div .dropdown-menu {\r\n  position: absolute;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, 0%);\r\n          transform: translate(-50%, 0%);\r\n}\r\n.menu-title-div{\r\n  position: relative;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n.menu-title {\r\n  position: relative;\r\n  display: inline-block;\r\n  font-size: 150%;\r\n  margin: 0px auto 25px auto;\r\n  text-align: center;\r\n}\r\n.menu-title::before{\r\n  content: '';\r\n  position: absolute;\r\n  display: block;\r\n  height: 1px;\r\n  width: 70px;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  left: 0%;\r\n  top:50%;\r\n  -webkit-transform: translate(-120%,-50%);\r\n          transform: translate(-120%,-50%);\r\n}\r\n.menu-title::after{\r\n  content: '';\r\n  position: absolute;\r\n  display: block;\r\n  height: 1px;\r\n  width: 70px;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  left: 100%;\r\n  top:50%;\r\n  -webkit-transform: translate(20%,-50%);\r\n          transform: translate(20%,-50%);\r\n}\r\n/* Check boxes in sch menu */\r\n\r\n.checks{\r\n  display: none;\r\n}\r\n\r\nlabel{\r\n  cursor: pointer;\r\n}\r\n\r\n/* Menu item */\r\n\r\n.menu-item {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  /* height: 400px; */\r\n  height: 400px;\r\n  width: 380px;\r\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  border-radius: 2px;\r\n}\r\n\r\n.item-image {\r\n  position: relative;\r\n  display: block;\r\n  margin: 0;\r\n  /* height: 67%; */\r\n  height: 60%;\r\n  width: 100%;\r\n  /* background-image: url('../assets/menu-img/food.jpg'); */\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.item-announcement {\r\n  position: absolute;\r\n  /* display: block; */\r\n  display: none;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 4px 0px;\r\n  text-align: center;\r\n  /* background-color: rgba(255, 255, 255, 0.8); */\r\n  background-color: rgba(109, 169, 66, 0.9);\r\n  color: #fff;\r\n}\r\n.item-announcement h5{\r\n  font-weight: bold;\r\n}\r\n\r\n.item-dets-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  margin: 0px 0 0 0;\r\n  height: 40%;\r\n  width: 100%;\r\n  background-color: #fff;\r\n}\r\n\r\n.item-name-div {\r\n  position: relative;\r\n  display: block;\r\n  width: 90%;\r\n}\r\n\r\n.item-name {\r\n  text-align: left;\r\n  font-size: 120%;\r\n  margin-bottom: 10px;\r\n  margin-top: 25px;\r\n}\r\n.item-conts-div{\r\n  position: relative;\r\n  display: block;\r\n  width: 90%;\r\n}\r\n.item-conts-div h5{\r\n  font-size: 90%;\r\n  text-align: left;\r\n}\r\n\r\n\r\n\r\n\r\n.item-dets {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  /* flex-direction: row; */\r\n  width: 90%;\r\n  margin-top: 0px;\r\n}\r\n.item-dets .pull-right{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n.item-price {\r\n  font-size: 110%;\r\n}\r\n\r\n.incl-tax {\r\n  font-size: 80%;\r\n}\r\n.remove-t-item-btn{\r\n  display: none;\r\n  font-size: 110%;\r\n  background-color: transparent;\r\n  color: #6DA942;\r\n  border: 1px solid #6DA942;\r\n  font-weight: bold;\r\n  margin-right: 10px;\r\n  padding: 10px 20px;\r\n  border-radius: 3px;\r\n  transition: all 0.2s ease-in;\r\n}\r\n.item-add-btn {\r\n  font-size: 110%;\r\n  background-color: #6DA942;\r\n  color: #fff;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  border-radius: 3px;\r\n  transition: all 0.2s ease-in;\r\n}\r\n\r\n.item-add-btn:hover {\r\n  background-color: #588835;\r\n}\r\n.plan-lunch-title{\r\n  position: relative;\r\n  display: block;\r\n  text-align: center;\r\n  font-size: 140%;\r\n  margin-top: 30px;\r\n  margin-bottom: 20px;\r\n}\r\n.schedule-rep-btn {\r\n  position: relative;\r\n  display: block;\r\n  width: 250px;\r\n  height: 40px;\r\n  margin: 10px auto;\r\n  /* background-color: #353637; */\r\n  background-color: #6DA942;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 4px;\r\n  transition: all 0.2s ease-in;\r\n} \r\n\r\n.schedule-rep-btn:hover {\r\n  /* background-color: #D84656; */\r\n  /* background-color: #494a4b; */\r\n  background-color: #588835;\r\n}\r\n\r\n\r\n.sc-ch-item img{\r\n  height: 70px;\r\n  width: 70px;\r\n}\r\n\r\n\r\n\r\n/* Hover Basket */\r\n\r\n.hover-basket-div {\r\n  z-index: 7;\r\n  position: fixed;\r\n  display: block;\r\n  top: 91%;\r\n  left: 80%;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  height: 50px;\r\n  width: 200px;\r\n  border-radius: 50px;\r\n  cursor: pointer;\r\n}\r\n\r\n.hover-basket-div .span {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  height: 100%;\r\n  width: 100%;\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\n.hover-basket-div h6 {\r\n  position: relative;\r\n  font-size: 105%;\r\n}\r\n\r\n.hover-basket-number {\r\n  position: absolute;\r\n  top: -10px;\r\n  left: -45%;\r\n  margin-left: 10px;\r\n  background-color: #fa0000;\r\n  padding: 5px 10px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.shop-basket-icon {\r\n  position: absolute;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  top: 0;\r\n  left: -10px;\r\n  background-color: #6DA942;\r\n  color: #fff;\r\n  height: 50px;\r\n  width: 50px;\r\n  border-radius: 50%;\r\n}\r\n.shop-basket-icon:hover{\r\n  background-color: #588835;\r\n}\r\n\r\n.fa-arrow-right {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 90%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n\r\n/* Schedule menu styles */\r\n\r\n.schedule-menu-back {\r\n  z-index: 100;\r\n  position: fixed;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  display: none;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n\r\n.sch-close-btn {\r\n  z-index: 100;\r\n  position: absolute;\r\n  display: block;\r\n  color: #fff;\r\n  top: 0%;\r\n  left: 93%;\r\n  font-size: 260%;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* Schedule menu left */\r\n\r\n.schedule-menu-left {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 100%;\r\n  width: 30%;\r\n}\r\n\r\n.calender-core {\r\n  position: relative;\r\n  display: block;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  height: 400px;\r\n  width: 300px;\r\n  overflow: hidden;\r\n}\r\n\r\n.calender-core ul {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.calender-core ul li {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  height: 20%;\r\n  width: 100%;\r\n  border-bottom: 1px solid #666;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* Schedule menu right */\r\n\r\n.schedule-menu-right {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 100%;\r\n  width: 80%;\r\n}\r\n\r\n.schedule-choose-core {\r\n  height: 95%;\r\n  width: 80%;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n}\r\n\r\n\r\n/* Top div */\r\n\r\n.sc-ch-item-name {\r\n  font-size: 120%;\r\n  font-weight: bold;\r\n}\r\n\r\n.sc-ch-top {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  /* align-content: space-between; */\r\n  top: 0;\r\n  margin: 0;\r\n  height: 10%;\r\n  width:100%;\r\n  padding: 0 40px;\r\n}\r\n\r\n.sc-ch-top .pull-left {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  width: 65%;\r\n}\r\n\r\n.sc-ch-top .pull-right {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  width: 35%;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  padding-left: 30px;\r\n}\r\n\r\n.sc-ch-price {\r\n  color: #888;\r\n  font-size: 80%;\r\n}\r\n\r\n.sc-ch-price-num {\r\n  font-size: 200%;\r\n}\r\n\r\n.sc-ch-num {\r\n  margin: 0 10px;\r\n}\r\n\r\n.sc-ch-num-btns-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n\r\n.sc-ch-num-btn {\r\n  border: 1px solid #323232;\r\n  background: transparent;\r\n  border-radius: 2px;\r\n  width: 30px;\r\n}\r\n\r\n.schedule-choose-core hr {\r\n  position: relative;\r\n  display: block;\r\n  /* width: 100%; */\r\n  margin: 0 40px;\r\n  color: #444;\r\n  background-color: #444;\r\n}\r\n\r\n.sc-ch-mid{\r\n  display: none;\r\n}\r\n\r\n.sc-ch-ul {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  height: 80%;\r\n  width: 90%;\r\n  margin: 0 5%;\r\n  overflow: hidden;\r\n}\r\n\r\n.sc-ch-ul>li {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.roti-div,\r\n.mini-meals-div,\r\n.large-div {\r\n  display: none;\r\n}\r\n\r\n\r\n/* Middle div */\r\n\r\n.sc-ch-mid-heads {\r\n  font-weight: bold;\r\n}\r\n\r\n.sc-ch-menu-divs {\r\n  position: relative;\r\n  display: block;\r\n  overflow-x: scroll;\r\n  margin: 20px auto;\r\n}\r\n\r\n.sc-ch-menu-divs li {\r\n  margin-left: 20px;\r\n}\r\n\r\n.sc-ch-menu-divs li .sc-ch-item {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  cursor: pointer;\r\n}\r\n\r\n.sc-ch-menu-divs li .sc-ch-item img {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.sch-note-div {\r\n  margin: 10px 0;\r\n  padding: 5px 10px;\r\n  height: 15%;\r\n  overflow: hidden;\r\n}\r\n\r\n.sc-ch-textarea {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  border: none;\r\n  border-bottom: 1px solid #666;\r\n  font-size: 90%;\r\n  resize: none;\r\n  /* height: 25px; */\r\n  color: #666;\r\n  padding: 10px 10px;\r\n}\r\n\r\n/* Bottom div */\r\n.sc-ch-btm {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  height: 10%;\r\n  width: 100%;\r\n  margin: 0;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding: 0 40px;\r\n  overflow: hidden;\r\n}\r\n.sc-ch-cancel-btn,\r\n.sc-ch-add-btn {\r\n  \r\n  width: auto;\r\n  border-radius: 4px;\r\n  border: none;\r\n  padding: 0 30px;\r\n}\r\n\r\n.sc-ch-cancel-btn {\r\n  background-color: #fff;\r\n  height: 40px;\r\n  color: #444;\r\n  margin-right: 20px;\r\n  border: 1px solid #444;\r\n}\r\n\r\n.sc-ch-add-btn {\r\n  color: #fff;\r\n  background-color: #6DA942;\r\n  cursor: pointer;\r\n  height: 40px;\r\n  transition: all 0.2s ease-in;\r\n}\r\n\r\n.sc-ch-add-btn:hover {\r\n  background-color: #588835;\r\n}\r\n/* Sch hover basket */\r\n.sc-hover-basket-div{\r\n  /* z-index: 7; */\r\n  /* position: fixed; */\r\n  position: relative;\r\n  display: block;\r\n  margin-left: 30px;\r\n  /* top: 91%;\r\n  left: 8%; */\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  height: 40px;\r\n  width: 150px;\r\n  border-radius: 50px;\r\n  cursor: pointer;\r\n}\r\n.sc-hover-basket-div .shop-basket-icon{\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n.sc-hover-basket-div .span {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  height: 100%;\r\n  width: 100%;\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\n.sc-hover-basket-div h6 {\r\n  position: relative;\r\n  font-size: 105%;\r\n}\r\n\r\n.sc-hover-basket-div .hover-basket-number {\r\n  position: absolute;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  top: 0px;\r\n  left: -45%;\r\n  margin-left: 10px;\r\n  background-color: #fa0000;\r\n  height: 20px;\r\n  width: 20px;\r\n  padding: 0;\r\n  border-radius: 50%;\r\n}\r\n\r\n/* Basket button for mobiles */\r\n\r\n.mob-basket-div {\r\n  z-index: 10;\r\n  position: fixed;\r\n  display: block;\r\n  bottom: 0;\r\n  height: 50px;\r\n  width: 100vw;\r\n  background-color: #F04F60;\r\n  color: #fff;\r\n  box-shadow: 0 -4px 20px 1px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.mob-basket-div a {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  height: 100%;\r\n  width: 100%;\r\n  color: #fff;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  text-decoration: none;\r\n}\r\n\r\n.mob-basket-div a .fa-shopping-basket {\r\n  margin-right: 10px;\r\n  font-size: 130%;\r\n}\r\n\r\n.mob-basket-div a h6 {\r\n  font-size: 120%;\r\n  font-weight: normal;\r\n}\r\n\r\n.mob-hover-basket-number {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin-left: 20px;\r\n  background-color: #fa0000;\r\n  color: #fff;\r\n  padding: 5px 10px;\r\n}\r\n.selected-date-li{\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  color: #fff;\r\n}\r\n.added-date-li{\r\n   background-color: #000;\r\n   color: #fff;\r\n\r\n}\r\n\r\n\r\n/* Extra Small Devices, .visible-xs-* */\r\n\r\n\r\n/* @media (max-width: 480px) {} */\r\n\r\n@media (max-width: 767px) {\r\n  .menu-title {\r\n    font-size: 120%;\r\n  }\r\n  .col-md-4 {\r\n    margin-bottom: 20px;\r\n  }\r\n  .menu-item {\r\n    margin: 0 auto;\r\n    max-width: 70vw;\r\n  }\r\n  .main-footer {\r\n    margin-bottom: 40px;\r\n  }\r\n  .date-filter-div .dropdown-menu {\r\n    position: absolute;\r\n    left: -10%;\r\n    min-width: 80px !important;\r\n  }\r\n  .filter-type-div .dropdown-menu {\r\n    position: absolute;\r\n    left: 0%;\r\n    min-width: 80px !important;\r\n  }\r\n  .filter-filter-div .dropdown-menu {\r\n    position: absolute;\r\n    left: 0%;\r\n    min-width: 80px !important;\r\n  }\r\n  .filter-div .btn {\r\n    font-size: 80%;\r\n  }\r\n  .main-container {\r\n    padding-top: 80px;\r\n  }\r\n}\r\n\r\n\r\n/* Small Devices, .visible-sm-* */\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .menu-title {\r\n    font-size: 120%;\r\n  }\r\n  .col-md-4 {\r\n    margin-bottom: 20px;\r\n  }\r\n  .menu-item {\r\n    margin: 0 auto;\r\n    max-width: 70vw;\r\n  }\r\n  .main-footer {\r\n    margin-bottom: 40px;\r\n  }\r\n}\r\n\r\n\r\n/* Medium Devices, .visible-md-* */\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .menu-item {\r\n    width: 300px;\r\n  }\r\n}\r\n\r\n\r\n/* Large Devices, .visible-lg-* */\r\n\r\n@media (min-width: 1200px) {}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header for mobiles and smaller devices -->\r\n<header class=\"mob-main-header visible-sm visible-xs\">\r\n    <button type=\"button\" class=\"mob-menu-trig-btn\">\r\n                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n            </button>\r\n    <div class=\"mob-main-logo\" routerLink='/home'>\r\n        <img src=\"../../assets/logo/logo_black.png\">\r\n    </div>\r\n</header>\r\n<header class=\"main-header visible-md visible-lg\">\r\n    <div class=\"container\">\r\n        <div class=\"main-logo pull-left\" routerLink='/home'>\r\n            <img src=\"../../assets/logo/logo_black.png\">\r\n        </div>\r\n        <ul class=\"list-inline det-ul visible-xs visible-sm pull-right\">\r\n            <!-- <li>\r\n                <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp;</button>\r\n            </li> -->\r\n        </ul>\r\n        <ul class=\"list-inline det-ul pull-left visible-md visible-lg\">\r\n            <!-- <li>\r\n                <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp;</button>\r\n            </li> -->\r\n            <li>\r\n                <a routerLink='/menu' class=\"dets-div-btns selected\" id=\"our-menu-btn\">Today, {{dateForHeader}}</a>\r\n            </li>\r\n            <li>\r\n                <a class=\"dets-div-btns\" id=\"our-menu-btn\">Schdule Menu</a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"scroll-login-div pull-right  visible-md visible-lg\">\r\n            <ul class=\"list-inline sc-ul\">\r\n                <li class=\"login-trig-div\" *ngIf=\"!authService.loggedIn()\">\r\n                    <button type=\"button\" class=\"login-signup-trig-btn dets-div-btns\" (click)=\"appComponent.loginSignupTrigger()\">Log in/Sign up</button>\r\n                </li>\r\n                <li class=\"account-trig-div\" *ngIf=\"authService.loggedIn()\">\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\">{{userName}}&nbsp;<i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i></button>\r\n                        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\r\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings'>My Profile</a></li>\r\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/my-orders'>My Orders</a></li>\r\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/address'>Saved Address</a></li>\r\n                            <!-- <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/payments'>Payments</a></li> -->\r\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/reward-points'>Reward Points</a></li>\r\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/change-password'>Change Password</a></li>\r\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"onLogoutClick()\">Logout</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </li>\r\n                <li class=\"head-basket\" routerLink='/checkout'>\r\n                    Basket &nbsp; <span class=\"head-basket-num\">{{basketNumber}}</span> \r\n                </li>\r\n            </ul>\r\n            \r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n</header>\r\n<div class=\"main-container\">\r\n    <div class=\"container\">\r\n        <ul class=\"list-inline det-ul pull-left visible-sm visible-xs\" style=\"width:100%;margin:0 0 20px 0;padding:0\">\r\n            <li style=\"width:100%;text-align:center;padding:0;margin:0;\">\r\n                <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp; <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i> </button>\r\n            </li>\r\n        </ul>\r\n        <!-- <div class=\"filter-div\">\r\n            <div class=\"date-filter-div\">\r\n                <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu\" data-toggle=\"dropdown\">Today, 16 July</button>\r\n                <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu\">\r\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Today</a></li>\r\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Tomorrow</a></li>\r\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Saturday</a></li>\r\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Sunday</a></li>\r\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Monday</a></li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"filter-type-div\">\r\n                <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu\" data-toggle=\"dropdown\">Ready To Heat Meals</button>\r\n                <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu\">\r\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Item One</a></li>\r\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Item Two</a></li>\r\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Item Three</a></li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"filter-filter-div\">\r\n                <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu\" data-toggle=\"dropdown\">Filter</button>\r\n                <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu\">\r\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Item One</a></li>\r\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Item Two</a></li>\r\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Item Three</a></li>\r\n                </ul>\r\n            </div>\r\n        </div> -->\r\n        <div>\r\n            <div class=\"menu-title-div\">\r\n                <h2 class=\"menu-title\">HOME FOOD IS HERE</h2>\r\n            </div>\r\n            {{curtime}}\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"menu-item\">\r\n\r\n                        <div class=\"item-image\" style=\"background-image:url('../../assets/menu-img/tab_one.jpg')\">\r\n\r\n                        <div class=\"item-announcement\" id='tab-one-band'>\r\n                            <h5>{{num_tab_one}} x Added !</h5>\r\n                        </div>\r\n                        </div>\r\n                        <div class=\"item-dets-div\">\r\n                            <div class=\"item-name-div\">\r\n                                <h4 class=\"item-name\">{{ tab_one }}</h4>\r\n                                \r\n                            </div>\r\n                            <div class=\"item-conts-div\">\r\n                                <h5>3 Roti,Fry,Curry,Sweet</h5>\r\n                            </div>\r\n                            <div class=\"item-dets\">\r\n                                <div class=\"pull-left\">\r\n                                    <span class=\"item-price\"> &#8377; {{tab_one_cost}} </span>\r\n                                    <!-- <span class=\"incl-tax\">(Inclusive of all taxes)</span> -->\r\n                                </div>\r\n                                <div class=\"pull-right\">\r\n                                    <button type=\"button\" class=\"remove-t-item-btn\" id=\"rem-t-tab_one\" (click)='removeTodayTab(\"tab_one\")'> - </button>\r\n                                    <button type=\"button\" class=\"item-add-btn\" (click)='todayAdd(\"tab_one\")'> + Add</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-md-4\">\r\n                    <div class=\"menu-item\">\r\n\r\n                        <div class=\"item-image\" style=\"background-image:url('../../assets/menu-img/tab_two.jpg')\">\r\n\r\n                            <div class=\"item-announcement\" id='tab-two-band'>\r\n                                <h5>{{num_tab_two}} x Added !</h5>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"item-dets-div\">\r\n                            <div class=\"item-name-div\">\r\n                                <h4 class=\"item-name\">{{ tab_two }}</h4>\r\n                            </div>\r\n                            <div class=\"item-conts-div\">\r\n                                <h5>Rice,Fry,Curry,Dal,Sweet</h5>\r\n                            </div>\r\n                            <div class=\"item-dets\">\r\n                                <div class=\"pull-left\">\r\n                                    <span class=\"item-price\"> &#8377; {{tab_two_cost}} </span>\r\n                                    <!-- <span class=\"incl-tax\">(Inclusive of all taxes)</span> -->\r\n                                </div>\r\n                                <div class=\"pull-right\">\r\n                                        <button type=\"button\" class=\"remove-t-item-btn\" id=\"rem-t-tab_two\" (click)='removeTodayTab(\"tab_two\")'> - </button>\r\n                                    <button type=\"button\" class=\"item-add-btn\" (click)='todayAdd(\"tab_two\")'> + Add</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <button type=\"button\" class=\"schedule-rep-btn\" (click)=\"schMenuBtn('tab_two')\">\r\n                            SCHEDULE MENU\r\n                        </button> -->\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-md-4\">\r\n                    <div class=\"menu-item\">\r\n\r\n                        <div class=\"item-image\" style=\"background-image:url('../../assets/menu-img/tab_three.jpg')\">\r\n\r\n                            <div class=\"item-announcement\" id='tab-three-band'>\r\n                                <h5>{{num_tab_three}} x Added !</h5>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"item-dets-div\">\r\n                            <div class=\"item-name-div\">\r\n                                <h4 class=\"item-name\">{{ tab_three }}</h4>\r\n                            </div>\r\n                            <div class=\"item-conts-div\">\r\n                                <h5>2 Roti,Rice,Fry,Curry,Dal,Curd</h5>\r\n                            </div>\r\n                            <div class=\"item-dets\">\r\n                                <div class=\"pull-left\">\r\n                                    <span class=\"item-price\"> &#8377; {{tab_three_cost}} </span>\r\n                                    <!-- <span class=\"incl-tax\">(Inclusive of all taxes)</span> -->\r\n                                </div>\r\n                                <div class=\"pull-right\">\r\n                                        <button type=\"button\" class=\"remove-t-item-btn\" id=\"rem-t-tab_three\" (click)='removeTodayTab(\"tab_three\")'> - </button>\r\n                                    <button type=\"button\" class=\"item-add-btn\" (click)='todayAdd(\"tab_three\")'> + Add</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <button type=\"button\" class=\"schedule-rep-btn\" (click)=\"schMenuBtn('tab_three')\">\r\n                            SCHEDULE MENU\r\n                        </button> -->\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n            <h5 class=\"plan-lunch-title\">\r\n                Plan your lunch in advance for next 5 days\r\n            </h5>\r\n            <button type=\"button\" class=\"schedule-rep-btn\" (click)=\"schMenuBtn()\">\r\n                SCHEDULE MENU\r\n            </button>\r\n            <!-- Today's Menu -->\r\n            <div class=\"today-menu-back\">\r\n                <div class=\"today-core\">\r\n                    <label for=\"t-menu-select-slot\" id=\"reg-name-label\">Select Delivery Slot</label>\r\n                    <label for=\"\">\r\n                        <select name=\"\" id=\"t-menu-select-slot\" (change)='todayMenuSlotSelect($event)'>\r\n                            <option selected disabled>Choose time slot</option>\r\n                            <option value=\"slot_one\" id=\"slot_one_option\">12:00 PM - 12:45 PM</option>\r\n                            <option value=\"slot_two\" id=\"slot_two_option\">12:45 PM - 01:30 PM</option>\r\n                            <option value=\"slot_three\" id=\"slot_three_option\">01:30 PM - 02:15 PM</option>\r\n                            <option value=\"slot_four\" id=\"slot_four_option\">02:15 PM - 03:00 PM</option>\r\n                        </select>\r\n                    </label>\r\n                    <br>\r\n                    <label for=\"t-menu-select-times\" id=\"reg-name-label\">Select Quantity</label>\r\n                    <label for=\"\">\r\n                        <select name=\"\" id=\"t-menu-select-times\" (change)='todayMenuTimesSelect($event)'>\r\n                            <option value=\"1\">1</option>\r\n                            <option value=\"2\">2</option>\r\n                            <option value=\"3\">3</option>\r\n                            <option value=\"4\">4</option>\r\n                            <option value=\"5\">5</option>\r\n                            <option value=\"6\">6</option>\r\n                            <option value=\"7\">8</option>\r\n                            <option value=\"9\">9</option>\r\n                            <option value=\"10\">10</option>\r\n                        </select>\r\n                    </label>\r\n                    <label id=\"letter-label\"><input type=\"checkbox\" name=\"\" id=\"\" (change)='letterCheck($event)'> Wish to write a letter to beloved one? <b> (&#8377;5) </b> </label>\r\n                    <div class=\"today-btns\">\r\n                        <button type=\"button\" class=\"sc-ch-cancel-btn\" (click)=\"tdClose()\">CANCEL</button>\r\n                        <button type=\"button\" class=\"sc-ch-add-btn\" (click)=\"addTodayCartClicked()\">ADD TO CART</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n            <!-- Schedule menu section -->\r\n            <div class=\"schedule-menu-back\">\r\n                <button type=\"button\" class=\"sch-close-btn\" (click)=\"scClose()\">x</button>\r\n                <!-- Left side where calender appears -->\r\n                <div class=\"schedule-menu-left pull-left\">\r\n                    <!-- Calender -->\r\n                    <div class=\"calender-core\">\r\n                        <!-- Next seven days -->\r\n                        <ul class=\"list-unstyled\">\r\n                            <li class=\"selected-date-li calender-li\" (click)=\"loadDay(day_one)\">\r\n                                <h5>{{day_one | date: 'fullDate'}}</h5>\r\n                            </li>\r\n                            <li class=\"calender-li\" (click)=\"loadDay(day_two)\">\r\n                                <h5>{{day_two | date: 'fullDate'}}</h5>\r\n                            </li>\r\n                            <li class=\"calender-li\" (click)=\"loadDay(day_three)\">\r\n                                <h5>{{day_three | date: 'fullDate'}}</h5>\r\n                            </li>\r\n                            <li class=\"calender-li\" (click)=\"loadDay(day_four)\">\r\n                                <h5>{{day_four | date: 'fullDate'}}</h5>\r\n                            </li>\r\n                            <li class=\"calender-li\" (click)=\"loadDay(day_five)\">\r\n                                <h5>{{day_five | date: 'fullDate'}}</h5>\r\n                            </li>\r\n                            <!-- <li class=\"calender-li\" (click)=\"loadDay(day_six)\">\r\n                                <h5>{{day_six | date: 'fullDate'}}</h5>\r\n                            </li> -->\r\n                        </ul>\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- Right side where Menu appears -->\r\n                <div class=\"schedule-menu-right pull-right\">\r\n\r\n                    <div class=\"schedule-choose-core\">\r\n                        <!-- Top div -->\r\n                        <div class=\"sc-ch-top\">\r\n                            <div class=\"pull-left\">\r\n                                <div class=\"sc-ch-num-btns-div\">\r\n                                    <button type=\"button\" class=\"sc-ch-num-btn\" (click)=\"decNumberOfItems()\">-</button>\r\n                                    <span class=\"sc-ch-num\">{{numberOfItems}}</span>\r\n                                    <button type=\"button\" class=\"sc-ch-num-btn\" (click)=\"incNumberOfItems()\">+</button>\r\n                                </div>\r\n                                <div>\r\n                                    <select (change)=slotSelected($event) class=\"slot-select\">\r\n                                    <option value=\"slot_one\">12:00 PM - 12:45 PM</option>\r\n                                    <option value=\"slot_two\">12:45 PM - 01:30 PM</option>\r\n                                    <option value=\"slot_three\">01:30 PM - 02:15 PM</option>\r\n                                    <option value=\"slot_four\">02:15 PM - 03:00 PM</option>\r\n                                </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"sc-ch-price-div pull-right\">\r\n                                <span class=\"sc-ch-price\">&#8377; <span class=\"sc-ch-price-num\">{{place_holder_price}}</span></span>\r\n                            </div>\r\n                            \r\n                            <div class=\"clearfix\"></div>\r\n                        </div>\r\n\r\n                        <hr>\r\n                        <ul class=\"list-inline sc-ch-ul\">\r\n                            <li class=\"sch-col-one\">\r\n                                <!-- Day one -->\r\n                                <div class=\"sc-ch-mid day-divs\" id=\"day-one-div\">\r\n\r\n                                    <!-- Combo -->\r\n                                    <div *ngFor=\"let cat of categories\">\r\n                                    <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                    <div *ngFor=\"let sub of cat.subs\">\r\n                                    <div *ngIf=\"sub == 'Combo'\">\r\n                                        <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                        <div class=\"sc-ch-menu-divs\">\r\n                                            <ul class=\"list-inline\">\r\n                                                <li *ngFor=\"let menu of day_one_books\">\r\n                                                    <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                        <div class=\"sc-ch-item\">\r\n                                                            <label>\r\n                                                                <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                <div *ngIf=\"menu[0].item_name == 'Roti'\">\r\n                                                                    <img [src]=\"roti_img\" class=\"roti-cl\" alt=\"\">\r\n                                                                </div>\r\n                                                                <div *ngIf=\"menu[0].item_name == 'Roti + Rice' || menu[0].item_name == 'Roti + Half Rice'|| menu[0].item_name == 'Roti and Half Rice' || menu[0].item_name == 'Roti + Full Rice' ||menu[0].item_name == 'Roti and Full Rice' || menu[0].item_name == 'Roti + Full rice' || menu[0].item_name == 'Roti + Half rice'\">\r\n                                                                    <img [src]=\"rice_roti_img\" class=\"rice-roti-cl\" alt=\"\">\r\n                                                                </div>\r\n                                                                <div *ngIf=\"menu[0].item_name == 'Rice'\">\r\n                                                                    <img [src]=\"rice_img\" class=\"rice-cl\" alt=\"\">\r\n                                                                </div>\r\n                                                                \r\n                                                                <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    </div>\r\n                                    </div>\r\n                                    </div>\r\n                                    <!-- Dry Curry -->\r\n                                    <div *ngFor=\"let cat of categories\">\r\n                                    <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                    <div *ngFor=\"let sub of cat.subs\">\r\n                                    <div *ngIf=\"sub == 'Dry Curry' || sub == 'dry curry' || sub == 'dry curries' || sub == 'Dry Curries'\">\r\n                                        <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                        <div class=\"sc-ch-menu-divs\">\r\n                                            <ul class=\"list-inline\">\r\n                                                \r\n                                                <li *ngFor=\"let menu of day_one_books\">\r\n                                                    <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                        <div class=\"sc-ch-item\">\r\n                                                            <label>\r\n                                                                <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                <img [src]=\"fry_img\" class=\"fry-cl\" alt=\"\">\r\n                                                                <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </li>\r\n                                            </ul>\r\n    \r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n                                    </div>\r\n                                    </div>\r\n                                    </div>\r\n                                    <!-- Wet Curry -->\r\n                                    <div *ngFor=\"let cat of categories\">\r\n                                    <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                    <div *ngFor=\"let sub of cat.subs\">\r\n                                    <div *ngIf=\"sub == 'Wet Curry' || sub == 'wet curry' || sub == 'wet curries' || sub == 'Wet Curries' || sub == 'Wet curry'\">\r\n                                        <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                        <div class=\"sc-ch-menu-divs\">\r\n                                            <ul class=\"list-inline\">\r\n                                                \r\n                                                <li *ngFor=\"let menu of day_one_books\">\r\n                                                    <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                        <div class=\"sc-ch-item\">\r\n                                                            <label>\r\n                                                                <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                <img [src]=\"curry_img\" class=\"curry-cl\" alt=\"\">\r\n                                                                <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </li>\r\n                                            </ul>\r\n    \r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n                                    </div>\r\n                                    </div>\r\n                                    </div>\r\n\r\n                                    <!-- Dal -->\r\n                                    <div *ngFor=\"let cat of categories\">\r\n                                    <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                    <div *ngFor=\"let sub of cat.subs\">\r\n                                    <div *ngIf=\"sub == 'Dal' || sub == 'dal'\">\r\n                                        <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                        <div class=\"sc-ch-menu-divs\">\r\n                                            <ul class=\"list-inline\">\r\n                                                <li *ngFor=\"let menu of day_one_books\">\r\n                                                    <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                        <div class=\"sc-ch-item\">\r\n                                                            <label>\r\n                                                                <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                <img [src]=\"dal_img\" class=\"dal-cl\" alt=\"\">\r\n                                                                <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                    </div>\r\n                                    </div>\r\n                                    </div>\r\n                                    \r\n                                    <!-- Curd -->\r\n                                    <div *ngFor=\"let cat of categories\">\r\n                                    <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                    <div *ngFor=\"let sub of cat.subs\">\r\n                                    <div *ngIf=\"sub == 'Curd' || sub == 'curd'\">\r\n                                        <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                        <div class=\"sc-ch-menu-divs\">\r\n                                            <ul class=\"list-inline\">\r\n                                                <li *ngFor=\"let menu of day_one_books\">\r\n                                                    <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                        <div class=\"sc-ch-item\">\r\n                                                            <label>\r\n                                                                <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                <img [src]=\"dal_img\" class=\"dal-cl\" alt=\"\">\r\n                                                                <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                    </div>\r\n                                    </div>\r\n                                    </div>\r\n\r\n                                    <!-- Sweet -->\r\n                                    <div *ngFor=\"let cat of categories\">\r\n                                    <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                    <div *ngFor=\"let sub of cat.subs\">\r\n                                    <div *ngIf=\"sub == 'Sweets' || sub == 'sweet' || sub == 'sweets' || sub == 'Sweet'\">\r\n                                        <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                        <div class=\"sc-ch-menu-divs\">\r\n                                            <ul class=\"list-inline\">\r\n                                                <li *ngFor=\"let menu of day_one_books\">\r\n                                                    <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                        <div class=\"sc-ch-item\">\r\n                                                            <label>\r\n                                                                <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                <img [src]=\"sweets_img\" class=\"sweet-cl\" alt=\"\">\r\n                                                                <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                    </div>\r\n                                    </div>\r\n                                    </div>\r\n\r\n\r\n                                </div>\r\n\r\n                                <!-- Day two div -->\r\n                                <div class=\"sc-ch-mid day-divs\" id=\"day-two-div\">\r\n                                    \r\n                                    \r\n                                     <!-- Combo -->\r\n                                     <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Combo'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        \r\n                                                        <li *ngFor=\"let menu of day_two_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Roti'\">\r\n                                                                            <img [src]=\"roti_img\" class=\"roti-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Curries' || menu[0].sub_name == 'Curry' || menu[0].sub_name == 'curry' || menu[0].sub_name == 'curries'\">\r\n                                                                            <img [src]=\"curry_img\" class=\"curry-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Dal' || menu[0].sub_name == 'dal'\">\r\n                                                                            <img [src]=\"dal_img\" class=\"dal-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Rice' || menu[0].sub_name == 'rice'\">\r\n                                                                            <img [src]=\"rice_img\" class=\"rice-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Curd' || menu[0].sub_name == 'curd'\">\r\n                                                                            <img [src]=\"curd_img\" class=\"curd-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Fry' || menu[0].sub_name == 'fry'\">\r\n                                                                            <img [src]=\"fry_img\" class=\"fry-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Sweets' || menu[0].sub_name == 'sweets' || menu[0].sub_name == 'sweet' || menu[0].sub_name == 'Sweet'\">\r\n                                                                            <img [src]=\"sweets_img\" class=\"sweet-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n            \r\n                                                </div>\r\n        \r\n                                            </div>\r\n        \r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            <!-- Dry Curry -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Dry Curry' || sub == 'dry curry' || sub == 'dry curries' || sub == 'Dry Curries'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        \r\n                                                        <li *ngFor=\"let menu of day_two_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"fry_img\" class=\"fry-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n            \r\n                                                </div>\r\n        \r\n                                            </div>\r\n        \r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            <!-- Wet Curry -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Wet Curry' || sub == 'wet curry' || sub == 'wet curries' || sub == 'Wet Curries' || sub == 'Wet curry'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        \r\n                                                        <li *ngFor=\"let menu of day_two_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"curry_img\" class=\"curry-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n            \r\n                                                </div>\r\n        \r\n                                            </div>\r\n        \r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n        \r\n                                            <!-- Dal -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Dal' || sub == 'dal'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        <li *ngFor=\"let menu of day_two_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"dal_img\" class=\"dal-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            \r\n                                            <!-- Curd -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Curd' || sub == 'curd'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        <li *ngFor=\"let menu of day_two_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"dal_img\" class=\"dal-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n        \r\n                                            <!-- Sweet -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Sweets' || sub == 'sweet' || sub == 'sweets' || sub == 'Sweet'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        <li *ngFor=\"let menu of day_two_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"sweets_img\" class=\"sweet-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n\r\n\r\n                                </div>\r\n\r\n                                <!-- Day three div -->\r\n                                <div class=\"sc-ch-mid day-divs\" id=\"day-three-div\">\r\n                                    \r\n                                     <!-- Combo -->\r\n                                     <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Combo'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        \r\n                                                        <li *ngFor=\"let menu of day_three_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Roti'\">\r\n                                                                            <img [src]=\"roti_img\" class=\"roti-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Curries' || menu[0].sub_name == 'Curry' || menu[0].sub_name == 'curry' || menu[0].sub_name == 'curries'\">\r\n                                                                            <img [src]=\"curry_img\" class=\"curry-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Dal' || menu[0].sub_name == 'dal'\">\r\n                                                                            <img [src]=\"dal_img\" class=\"dal-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Rice' || menu[0].sub_name == 'rice'\">\r\n                                                                            <img [src]=\"rice_img\" class=\"rice-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Curd' || menu[0].sub_name == 'curd'\">\r\n                                                                            <img [src]=\"curd_img\" class=\"curd-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Fry' || menu[0].sub_name == 'fry'\">\r\n                                                                            <img [src]=\"fry_img\" class=\"fry-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Sweets' || menu[0].sub_name == 'sweets' || menu[0].sub_name == 'sweet' || menu[0].sub_name == 'Sweet'\">\r\n                                                                            <img [src]=\"sweets_img\" class=\"sweet-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n            \r\n                                                </div>\r\n        \r\n                                            </div>\r\n        \r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            <!-- Dry Curry -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Dry Curry' || sub == 'dry curry' || sub == 'dry curries' || sub == 'Dry Curries'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        \r\n                                                        <li *ngFor=\"let menu of day_three_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"fry_img\" class=\"fry-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n            \r\n                                                </div>\r\n        \r\n                                            </div>\r\n        \r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            <!-- Wet Curry -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Wet Curry' || sub == 'wet curry' || sub == 'wet curries' || sub == 'Wet Curries' || sub == 'Wet curry'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        \r\n                                                        <li *ngFor=\"let menu of day_three_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"curry_img\" class=\"curry-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n            \r\n                                                </div>\r\n        \r\n                                            </div>\r\n        \r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n        \r\n                                            <!-- Dal -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Dal' || sub == 'dal'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        <li *ngFor=\"let menu of day_three_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"dal_img\" class=\"dal-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            \r\n                                            <!-- Curd -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Curd' || sub == 'curd'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        <li *ngFor=\"let menu of day_three_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"dal_img\" class=\"dal-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n        \r\n                                            <!-- Sweet -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Sweets' || sub == 'sweet' || sub == 'sweets' || sub == 'Sweet'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        <li *ngFor=\"let menu of day_three_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"sweets_img\" class=\"sweet-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n\r\n                                </div>\r\n\r\n                                <!-- Day four div -->\r\n                                <div class=\"sc-ch-mid day-divs\" id=\"day-four-div\">\r\n                                    \r\n\r\n                                    <!-- Combo -->\r\n                                    <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Combo'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        \r\n                                                        <li *ngFor=\"let menu of day_four_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Roti'\">\r\n                                                                            <img [src]=\"roti_img\" class=\"roti-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Curries' || menu[0].sub_name == 'Curry' || menu[0].sub_name == 'curry' || menu[0].sub_name == 'curries'\">\r\n                                                                            <img [src]=\"curry_img\" class=\"curry-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Dal' || menu[0].sub_name == 'dal'\">\r\n                                                                            <img [src]=\"dal_img\" class=\"dal-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Rice' || menu[0].sub_name == 'rice'\">\r\n                                                                            <img [src]=\"rice_img\" class=\"rice-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Curd' || menu[0].sub_name == 'curd'\">\r\n                                                                            <img [src]=\"curd_img\" class=\"curd-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Fry' || menu[0].sub_name == 'fry'\">\r\n                                                                            <img [src]=\"fry_img\" class=\"fry-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Sweets' || menu[0].sub_name == 'sweets' || menu[0].sub_name == 'sweet' || menu[0].sub_name == 'Sweet'\">\r\n                                                                            <img [src]=\"sweets_img\" class=\"sweet-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n            \r\n                                                </div>\r\n        \r\n                                            </div>\r\n        \r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            <!-- Dry Curry -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Dry Curry' || sub == 'dry curry' || sub == 'dry curries' || sub == 'Dry Curries'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        \r\n                                                        <li *ngFor=\"let menu of day_four_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"fry_img\" class=\"fry-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n            \r\n                                                </div>\r\n        \r\n                                            </div>\r\n        \r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            <!-- Wet Curry -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Wet Curry' || sub == 'wet curry' || sub == 'wet curries' || sub == 'Wet Curries' || sub == 'Wet curry'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        \r\n                                                        <li *ngFor=\"let menu of day_four_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"curry_img\" class=\"curry-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n            \r\n                                                </div>\r\n        \r\n                                            </div>\r\n        \r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n        \r\n                                            <!-- Dal -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Dal' || sub == 'dal'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        <li *ngFor=\"let menu of day_four_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"dal_img\" class=\"dal-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            \r\n                                            <!-- Curd -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Curd' || sub == 'curd'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        <li *ngFor=\"let menu of day_four_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"dal_img\" class=\"dal-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n        \r\n                                            <!-- Sweet -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Sweets' || sub == 'sweet' || sub == 'sweets' || sub == 'Sweet'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        <li *ngFor=\"let menu of day_four_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"sweets_img\" class=\"sweet-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n\r\n                                        \r\n\r\n                                </div>\r\n\r\n                                <!-- Day five div -->\r\n                                <div class=\"sc-ch-mid day-divs\" id=\"day-five-div\">\r\n                                    \r\n                                    <!-- Combo -->\r\n                                    <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Combo'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        \r\n                                                        <li *ngFor=\"let menu of day_five_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Roti'\">\r\n                                                                            <img [src]=\"roti_img\" class=\"roti-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Curries' || menu[0].sub_name == 'Curry' || menu[0].sub_name == 'curry' || menu[0].sub_name == 'curries'\">\r\n                                                                            <img [src]=\"curry_img\" class=\"curry-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Dal' || menu[0].sub_name == 'dal'\">\r\n                                                                            <img [src]=\"dal_img\" class=\"dal-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Rice' || menu[0].sub_name == 'rice'\">\r\n                                                                            <img [src]=\"rice_img\" class=\"rice-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Curd' || menu[0].sub_name == 'curd'\">\r\n                                                                            <img [src]=\"curd_img\" class=\"curd-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Fry' || menu[0].sub_name == 'fry'\">\r\n                                                                            <img [src]=\"fry_img\" class=\"fry-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <div *ngIf=\"menu[0].sub_name == 'Sweets' || menu[0].sub_name == 'sweets' || menu[0].sub_name == 'sweet' || menu[0].sub_name == 'Sweet'\">\r\n                                                                            <img [src]=\"sweets_img\" class=\"sweet-cl\" alt=\"\">\r\n                                                                        </div>\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n            \r\n                                                </div>\r\n        \r\n                                            </div>\r\n        \r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            <!-- Dry Curry -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Dry Curry' || sub == 'dry curry' || sub == 'dry curries' || sub == 'Dry Curries'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        \r\n                                                        <li *ngFor=\"let menu of day_five_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"fry_img\" class=\"fry-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n            \r\n                                                </div>\r\n        \r\n                                            </div>\r\n        \r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            <!-- Wet Curry -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Wet Curry' || sub == 'wet curry' || sub == 'wet curries' || sub == 'Wet Curries' || sub == 'Wet curry'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        \r\n                                                        <li *ngFor=\"let menu of day_five_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"curry_img\" class=\"curry-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n            \r\n                                                </div>\r\n        \r\n                                            </div>\r\n        \r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n        \r\n                                            <!-- Dal -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Dal' || sub == 'dal'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        <li *ngFor=\"let menu of day_five_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"dal_img\" class=\"dal-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            \r\n                                            <!-- Curd -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Curd' || sub == 'curd'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        <li *ngFor=\"let menu of day_five_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"dal_img\" class=\"dal-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n        \r\n                                            <!-- Sweet -->\r\n                                            <div *ngFor=\"let cat of categories\">\r\n                                            <div *ngIf=\"cat.name == 'Vegetarian'\">\r\n                                            <div *ngFor=\"let sub of cat.subs\">\r\n                                            <div *ngIf=\"sub == 'Sweets' || sub == 'sweet' || sub == 'sweets' || sub == 'Sweet'\">\r\n                                                <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\r\n                                                <div class=\"sc-ch-menu-divs\">\r\n                                                    <ul class=\"list-inline\">\r\n                                                        <li *ngFor=\"let menu of day_five_books\">\r\n                                                            <div *ngIf=\"menu[0].sub_name == sub\">\r\n                                                                <div class=\"sc-ch-item\">\r\n                                                                    <label>\r\n                                                                        <input type=\"checkbox\" class= \"checks\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked,$event)\">\r\n                                                                        <img [src]=\"sweets_img\" class=\"sweet-cl\" alt=\"\">\r\n                                                                        <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n                                            </div>\r\n\r\n                                </div>\r\n                                \r\n                            </li>\r\n\r\n                        </ul>\r\n\r\n                        <!-- Schedule menu bottom -->\r\n                        <div class=\"sc-ch-btm\">\r\n                            <!-- <button type=\"button\" class=\"sc-ch-cancel-btn\" (click)=\"scClose()\">CANCEL</button> -->\r\n                            <button type=\"button\" class=\"sc-ch-add-btn\" (click)=\"addCartClicked()\">ADD TO CART</button>\r\n                            <div class=\"sc-hover-basket-div visible-md visible-lg\" (click)='navToChekout()'>\r\n                                <span class=\"span\">\r\n                                    <div class=\"shop-basket-icon\"><span class=\"hover-basket-number\">{{basketNumber}}</span><i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i></div>\r\n                                    <h6>Basket</h6><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n\r\n            </div>\r\n        </div>\r\n        <!-- Basket -->\r\n        <div class=\"hover-basket-div visible-md visible-lg\" (click)='navToChekout()'>\r\n            <span class=\"span\">\r\n                <div class=\"shop-basket-icon\"><span class=\"hover-basket-number\">{{basketNumber}}</span><i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i></div>\r\n                <h6>Basket</h6><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\r\n            </span>\r\n        </div>\r\n\r\n        \r\n    </div>\r\n</div>\r\n<!-- Basket for mobiles -->\r\n<div class=\"mob-basket-div visible-xs visible-sm\" (click)='navToChekout()'>\r\n    <span class=\"span\">\r\n        <i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i><h6>BASKET</h6><span class=\"mob-hover-basket-number\">0</span><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\r\n    </span>\r\n</div>\r\n\r\n<div class=\"added-db\">\r\n    <div class=\"added-wb\">\r\n        <h3>Added !</h3>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_get_menu_service__ = __webpack_require__("../../../../../src/app/services/get-menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MenuComponent = (function () {
    // curtime = moment().format('LTS');
    function MenuComponent(router, title, appComponent, authService, getMenuItems, datePipe) {
        this.router = router;
        this.title = title;
        this.appComponent = appComponent;
        this.authService = authService;
        this.getMenuItems = getMenuItems;
        this.datePipe = datePipe;
        // Three menus
        this.tab_one = "Rajin-e ka Roti";
        this.tab_two = "Kohil-e ka Khana";
        this.tab_three = "Mode-e ka Meals";
        // Today 
        this.today_books = [];
        this.today_c_books = [];
        this.today_tab_one_slot = null;
        this.today_tab_two_slot = null;
        this.today_tab_three_slot = null;
        this.num_today_items = 0;
        this.num_tab_one_items = 0;
        this.num_tab_two_items = 0;
        this.num_tab_three_items = 0;
        this.num_tab_one = 0;
        this.num_tab_two = 0;
        this.num_tab_three = 0;
        this.tab_one_cost = 79;
        this.tab_two_cost = 89;
        this.tab_three_cost = 99;
        this.today_one = __WEBPACK_IMPORTED_MODULE_7_moment__();
        this.day_one = __WEBPACK_IMPORTED_MODULE_7_moment__().add(1, 'days');
        this.day_two = __WEBPACK_IMPORTED_MODULE_7_moment__().add(2, 'days');
        this.day_three = __WEBPACK_IMPORTED_MODULE_7_moment__().add(3, 'days');
        this.day_four = __WEBPACK_IMPORTED_MODULE_7_moment__().add(4, 'days');
        this.day_five = __WEBPACK_IMPORTED_MODULE_7_moment__().add(5, 'days');
        this.day_six = __WEBPACK_IMPORTED_MODULE_7_moment__().add(6, 'days');
        this.day_seven = __WEBPACK_IMPORTED_MODULE_7_moment__().add(7, 'days');
        this.last_today_one = __WEBPACK_IMPORTED_MODULE_7_moment__().subtract(7, 'days');
        this.last_day_one = __WEBPACK_IMPORTED_MODULE_7_moment__().subtract(6, 'days');
        this.last_day_two = __WEBPACK_IMPORTED_MODULE_7_moment__().subtract(5, 'days');
        this.last_day_three = __WEBPACK_IMPORTED_MODULE_7_moment__().subtract(4, 'days');
        this.last_day_four = __WEBPACK_IMPORTED_MODULE_7_moment__().subtract(3, 'days');
        this.last_day_five = __WEBPACK_IMPORTED_MODULE_7_moment__().subtract(2, 'days');
        this.last_day_six = __WEBPACK_IMPORTED_MODULE_7_moment__().subtract(1, 'days');
        this.today_item_dets = [];
        this.day_one_item_dets = [];
        this.day_two_item_dets = [];
        this.day_three_item_dets = [];
        this.day_four_item_dets = [];
        this.day_five_item_dets = [];
        this.day_six_item_dets = [];
        this.day_one_books = [];
        this.day_two_books = [];
        this.day_three_books = [];
        this.day_four_books = [];
        this.day_five_books = [];
        this.day_six_books = [];
        this.day_one_c_books = [];
        this.day_two_c_books = [];
        this.day_three_c_books = [];
        this.day_four_c_books = [];
        this.day_five_c_books = [];
        this.day_six_c_books = [];
        // Time slots
        this.day_one_slot = "slot_one";
        this.day_two_slot = "slot_one";
        this.day_three_slot = "slot_one";
        this.day_four_slot = "slot_one";
        this.day_five_slot = "slot_one";
        this.day_six_slot = "slot_one";
        this.num_day_one_items = 0;
        this.num_day_two_items = 0;
        this.num_day_three_items = 0;
        this.num_day_four_items = 0;
        this.num_day_five_items = 0;
        this.num_day_six_items = 0;
        this.today_price = 0;
        this.day_one_price = 0;
        this.day_two_price = 0;
        this.day_three_price = 0;
        this.day_four_price = 0;
        this.day_five_price = 0;
        this.day_six_price = 0;
        this.total_today_price = 0;
        this.total_day_one_price = 0;
        this.total_day_two_price = 0;
        this.total_day_three_price = 0;
        this.total_day_four_price = 0;
        this.total_day_five_price = 0;
        this.total_day_six_price = 0;
        this.place_holder_price = 0;
        this.basketNumber = 0;
        this.tab_one_status = false;
        this.tab_two_status = false;
        this.tab_three_status = false;
        this.roti_img = '../assets/menu-icons/roti_b.png';
        this.roti_r_img = '../assets/menu-icons/roti_r.png';
        this.rice_img = '../assets/menu-icons/rice_b.png';
        this.rice_r_img = '../assets/menu-icons/rice_r.png';
        this.rice_roti_img = '../assets/menu-icons/rice_roti_b.png';
        this.rice_roti_r_img = '../assets/menu-icons/rice_roti_r.png';
        this.curry_img = '../assets/menu-icons/cur_b.png';
        this.curry_r_img = '../assets/menu-icons/cur_r.png';
        this.dal_img = '../assets/menu-icons/dal_b.png';
        this.dal_r_img = '../assets/menu-icons/dal_r.png';
        this.curd_img = '../assets/menu-icons/curd_b.png';
        this.curd_r_img = '../assets/menu-icons/curd_r.png';
        this.fry_img = '../assets/menu-icons/fry_b.png';
        this.fry_r_img = '../assets/menu-icons/fry_r.png';
        this.sweets_img = '../assets/menu-icons/sweets_b.png';
        this.sweets_r_img = '../assets/menu-icons/sweets_r.png';
        this.time_slot_one_status = true;
        this.time_slot_two_status = true;
        this.time_slot_three_status = true;
        this.time_slot_four_status = true;
        this.letter_added = false;
        this.letter_price = 0;
        // slot_one_time_form = "08:40:00";
        this.slot_one_time_form = __WEBPACK_IMPORTED_MODULE_7_moment__("08:60:00", "HH:mm:ss").format('hh:mm:ss A');
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        var m_cur_time = __WEBPACK_IMPORTED_MODULE_7_moment__(new Date());
        // var endTime = moment('3:00pm', 'h:mma');
        // if(m_cur_time.isBefore(endTime)){
        //   alert('yes');
        // }else{
        //   alert('no');
        // }
        // Time validations 
        // Check if current time is past 02:14PM
        var last_time = __WEBPACK_IMPORTED_MODULE_7_moment__('2:14pm', 'h:mma');
        var slot_three_end_time = __WEBPACK_IMPORTED_MODULE_7_moment__('1:29pm', 'h:mma');
        var slot_two_end_time = __WEBPACK_IMPORTED_MODULE_7_moment__('12:44pm', 'h:mma');
        var slot_one_end_time = __WEBPACK_IMPORTED_MODULE_7_moment__('11:59am', 'h:mma');
        if (m_cur_time.isAfter(last_time)) {
            // Disable all today slots
            $('#slot_one_option').prop('disabled', true);
            $('#slot_two_option').prop('disabled', true);
            $('#slot_three_option').prop('disabled', true);
            $('#slot_four_option').prop('disabled', true);
        }
        else if (m_cur_time.isAfter(slot_three_end_time)) {
            // Diable first three slots
            $('#slot_one_option').prop('disabled', true);
            $('#slot_two_option').prop('disabled', true);
            $('#slot_three_option').prop('disabled', true);
        }
        else if (m_cur_time.isAfter(slot_two_end_time)) {
            // Diable first two slots
            $('#slot_one_option').prop('disabled', true);
            $('#slot_two_option').prop('disabled', true);
        }
        else if (m_cur_time.isAfter(slot_one_end_time)) {
            // Diable first slot
            $('#slot_one_option').prop('disabled', true);
        }
        // Getting current date and time
        $(document).ready(function () {
            setInterval(function () {
                var m_cur_time = __WEBPACK_IMPORTED_MODULE_7_moment__(new Date());
                // Time validations 
                // Check if current time is past 02:14PM
                var last_time = __WEBPACK_IMPORTED_MODULE_7_moment__('2:14pm', 'h:mma');
                var slot_three_end_time = __WEBPACK_IMPORTED_MODULE_7_moment__('1:29pm', 'h:mma');
                var slot_two_end_time = __WEBPACK_IMPORTED_MODULE_7_moment__('12:44pm', 'h:mma');
                var slot_one_end_time = __WEBPACK_IMPORTED_MODULE_7_moment__('11:59am', 'h:mma');
                if (m_cur_time.isAfter(last_time)) {
                    // Disable all today slots
                    $('#slot_one_option').prop('disabled', true);
                    $('#slot_two_option').prop('disabled', true);
                    $('#slot_three_option').prop('disabled', true);
                    $('#slot_four_option').prop('disabled', true);
                }
                else if (m_cur_time.isAfter(slot_three_end_time)) {
                    // Diable first three slots
                    $('#slot_one_option').prop('disabled', true);
                    $('#slot_two_option').prop('disabled', true);
                    $('#slot_three_option').prop('disabled', true);
                }
                else if (m_cur_time.isAfter(slot_two_end_time)) {
                    // Diable first two slots
                    $('#slot_one_option').prop('disabled', true);
                    $('#slot_two_option').prop('disabled', true);
                }
                else if (m_cur_time.isAfter(slot_one_end_time)) {
                    // Diable first slot
                    $('#slot_one_option').prop('disabled', true);
                }
            }, 1000);
        });
        // clear localStorage
        localStorage.removeItem('all_orders');
        localStorage.removeItem('today_orders');
        localStorage.removeItem('basket_number');
        localStorage.removeItem('letter_added');
        // Set title
        this.title.setTitle('Fysu - Menu');
        if (this.authService.loggedIn() == true) {
            var user = this.authService.getUserFromLocal();
            var user_parsed = JSON.parse(user);
            this.userEmail = user_parsed.email;
            this.userName = user_parsed.name;
            this.companyName = user_parsed.company_name;
            this.userMobile = user_parsed.mobile;
            this.userId = user_parsed.id;
        }
        // console.log(this.datePipe.transform(this.day_six, 'fullDate') + 'ee roju' + this.datePipe.transform(this.last_day_six, 'fullDate'));
        this.numberOfItems = 1;
        this.place_holder_price = 0;
        this.p_today_one = this.datePipe.transform(this.today_one, 'fullDate');
        this.p_day_one = this.datePipe.transform(this.day_one, 'fullDate');
        this.p_day_two = this.datePipe.transform(this.day_two, 'fullDate');
        this.p_day_three = this.datePipe.transform(this.day_three, 'fullDate');
        this.p_day_four = this.datePipe.transform(this.day_four, 'fullDate');
        this.p_day_five = this.datePipe.transform(this.day_five, 'fullDate');
        this.p_day_six = this.datePipe.transform(this.day_six, 'fullDate');
        this.p_last_today_one = this.datePipe.transform(this.last_today_one, 'fullDate');
        this.p_last_day_one = this.datePipe.transform(this.last_day_one, 'fullDate');
        this.p_last_day_two = this.datePipe.transform(this.last_day_two, 'fullDate');
        this.p_last_day_three = this.datePipe.transform(this.last_day_three, 'fullDate');
        this.p_last_day_four = this.datePipe.transform(this.last_day_four, 'fullDate');
        this.p_last_day_five = this.datePipe.transform(this.last_day_five, 'fullDate');
        this.p_last_day_six = this.datePipe.transform(this.last_day_six, 'fullDate');
        this.dateForHeader = this.datePipe.transform(this.today_one, 'EEE, MMM d');
        $(document).keyup(function (e) {
            if (e.keyCode == 27) {
                $('.schedule-menu-back').css({ 'display': 'none' });
            }
        });
        this.getMenuItems.getCats().subscribe(function (res) {
            if (res.success) {
                _this.categories = res.msg;
            }
            else {
                window.location.reload();
            }
        });
        // Get day one menu
        this.getMenuItems.getDatesMenu(this.p_day_one, this.p_last_day_one).subscribe(function (do_res) {
            if (do_res.success) {
                _this.day_one_menu = do_res.msg;
                if (_this.day_one_menu.length < 1) {
                    // Menu does't exist for today
                }
                else {
                    var un_1 = [];
                    _this.day_one_menu.forEach(function (e) {
                        if (un_1.length < 1) {
                            un_1.push(e.item_id);
                        }
                        else {
                            if (un_1.includes(e.item_id)) {
                                // Do nothing
                            }
                            else {
                                un_1.push(e.item_id);
                            }
                        }
                    });
                    if (un_1.length > 0) {
                        // For each item id
                        un_1.forEach(function (el) {
                            _this.getMenuItems.getItemDetails(el).subscribe(function (idets) {
                                if (idets.success) {
                                    idets.msg[0].checked = false;
                                    idets.msg[0].date = _this.p_day_one;
                                    _this.day_one_item_dets.push(idets.msg);
                                }
                            });
                        });
                        console.log(_this.day_one_item_dets);
                        // Experiment to re-order array
                        var arr = void 0;
                        _this.day_one_item_dets.forEach(function (bele) {
                            console.log('hi');
                        });
                        _this.day_one_books = _this.day_one_item_dets;
                    }
                }
            }
        });
        // Get day two menu
        this.getMenuItems.getDatesMenu(this.p_day_two, this.p_last_day_two).subscribe(function (dt_res) {
            if (dt_res.success) {
                _this.day_two_menu = dt_res.msg;
                if (_this.day_two_menu.length < 1) {
                    // Menu does't exist for today
                }
                else {
                    var un_2 = [];
                    _this.day_two_menu.forEach(function (e) {
                        if (un_2.length < 1) {
                            un_2.push(e.item_id);
                        }
                        else {
                            if (un_2.includes(e.item_id)) {
                                // Do nothing
                            }
                            else {
                                un_2.push(e.item_id);
                            }
                        }
                    });
                    if (un_2.length > 0) {
                        // For each item id
                        un_2.forEach(function (el) {
                            _this.getMenuItems.getItemDetails(el).subscribe(function (idets) {
                                if (idets.success) {
                                    idets.msg[0].checked = false;
                                    idets.msg[0].date = _this.p_day_two;
                                    _this.day_two_item_dets.push(idets.msg);
                                }
                            });
                        });
                        _this.day_two_books = _this.day_two_item_dets;
                    }
                }
            }
            else {
            }
        });
        // Get day three menu
        this.getMenuItems.getDatesMenu(this.p_day_three, this.p_last_day_three).subscribe(function (dth_res) {
            if (dth_res.success) {
                _this.day_three_menu = dth_res.msg;
                if (_this.day_three_menu.length < 1) {
                    // Menu does't exist for today
                }
                else {
                    var un_3 = [];
                    _this.day_three_menu.forEach(function (e) {
                        if (un_3.length < 1) {
                            un_3.push(e.item_id);
                        }
                        else {
                            if (un_3.includes(e.item_id)) {
                                // Do nothing
                            }
                            else {
                                un_3.push(e.item_id);
                            }
                        }
                    });
                    if (un_3.length > 0) {
                        // For each item id
                        un_3.forEach(function (el) {
                            _this.getMenuItems.getItemDetails(el).subscribe(function (idets) {
                                if (idets.success) {
                                    idets.msg[0].checked = false;
                                    idets.msg[0].date = _this.p_day_three;
                                    _this.day_three_item_dets.push(idets.msg);
                                }
                            });
                        });
                        _this.day_three_books = _this.day_three_item_dets;
                    }
                }
            }
        });
        // Get day four menu
        this.getMenuItems.getDatesMenu(this.p_day_four, this.p_last_day_four).subscribe(function (df_res) {
            if (df_res.success) {
                // console.log(df_res);
                _this.day_four_menu = df_res.msg;
                if (_this.day_four_menu.length < 1) {
                    // Menu does't exist for today
                }
                else {
                    var un_4 = [];
                    _this.day_four_menu.forEach(function (e) {
                        if (un_4.length < 1) {
                            un_4.push(e.item_id);
                        }
                        else {
                            if (un_4.includes(e.item_id)) {
                                // Do nothing
                            }
                            else {
                                un_4.push(e.item_id);
                            }
                        }
                    });
                    if (un_4.length > 0) {
                        // For each item id
                        un_4.forEach(function (el) {
                            _this.getMenuItems.getItemDetails(el).subscribe(function (idets) {
                                if (idets.success) {
                                    idets.msg[0].checked = false;
                                    idets.msg[0].date = _this.p_day_four;
                                    _this.day_four_item_dets.push(idets.msg);
                                    // this.day_four_item_dets[0][0].checked='true';
                                }
                            });
                        });
                        _this.day_four_books = _this.day_four_item_dets;
                    }
                }
            }
        });
        // Get day five menu
        this.getMenuItems.getDatesMenu(this.p_day_five, this.p_last_day_five).subscribe(function (dfi_res) {
            if (dfi_res.success) {
                // console.log(dfi_res.msg[0]);
                _this.day_five_menu = dfi_res.msg;
                if (_this.day_five_menu.length < 1) {
                    // Menu does't exist for today
                }
                else {
                    var un_5 = [];
                    _this.day_five_menu.forEach(function (e) {
                        if (un_5.length < 1) {
                            un_5.push(e.item_id);
                        }
                        else {
                            if (un_5.includes(e.item_id)) {
                                // Do nothing
                            }
                            else {
                                un_5.push(e.item_id);
                            }
                        }
                    });
                    if (un_5.length > 0) {
                        // For each item id
                        un_5.forEach(function (el) {
                            _this.getMenuItems.getItemDetails(el).subscribe(function (idets) {
                                if (idets.success) {
                                    idets.msg[0].checked = false;
                                    idets.msg[0].date = _this.p_day_five;
                                    _this.day_five_item_dets.push(idets.msg);
                                }
                            });
                        });
                        _this.day_five_books = _this.day_five_item_dets;
                    }
                }
            }
        });
        // Get day six menu
        this.getMenuItems.getDatesMenu(this.p_day_six, this.p_last_day_six).subscribe(function (dsix_res) {
            if (dsix_res.success) {
                _this.day_six_menu = dsix_res.msg;
                if (_this.day_six_menu.length < 1) {
                    // Menu does't exist for today
                }
                else {
                    var un_6 = [];
                    _this.day_six_menu.forEach(function (e) {
                        if (un_6.length < 1) {
                            un_6.push(e.item_id);
                        }
                        else {
                            if (un_6.includes(e.item_id)) {
                                // Do nothing
                            }
                            else {
                                un_6.push(e.item_id);
                            }
                        }
                    });
                    if (un_6.length > 0) {
                        // For each item id
                        un_6.forEach(function (el) {
                            _this.getMenuItems.getItemDetails(el).subscribe(function (idets) {
                                if (idets.success) {
                                    idets.msg[0].checked = false;
                                    idets.msg[0].date = _this.p_day_six;
                                    _this.day_six_item_dets.push(idets.msg);
                                }
                            });
                        });
                        _this.day_six_books = _this.day_six_item_dets;
                    }
                }
            }
        });
        // Date li
        $(document).on('click', '.calender-li', function () {
            $('.calender-li').removeClass('selected-date-li');
            $(this).addClass('selected-date-li');
        });
        this.getMenuItems.getRotiItems().subscribe(function (rotiis) {
            if (rotiis.success) {
                _this.rotiItems = rotiis.msg;
            }
            else {
            }
        });
    };
    // Load menu
    MenuComponent.prototype.loadDay = function (date) {
        switch (this.datePipe.transform(date, 'fullDate')) {
            case this.p_day_one:
                // Day one menu
                this.menu_to_be_loaded = this.day_one_books;
                // Experiment
                $('.sc-ch-mid').hide();
                $('#day-one-div').show();
                this.numberOfItems = this.num_day_one_items;
                this.place_holder_price = this.total_day_one_price;
                // Update active day status
                this.day_one_status = true;
                this.day_two_status = false;
                this.day_three_status = false;
                this.day_four_status = false;
                this.day_five_status = false;
                this.day_six_status = false;
                break;
            case this.p_day_two:
                // Day two menu
                this.menu_to_be_loaded = this.day_two_books;
                // Experiment
                $('.sc-ch-mid').hide();
                $('#day-two-div').show();
                this.numberOfItems = this.num_day_two_items;
                this.place_holder_price = this.total_day_two_price;
                // Update active day status
                this.day_one_status = false;
                this.day_two_status = true;
                this.day_three_status = false;
                this.day_four_status = false;
                this.day_five_status = false;
                this.day_six_status = false;
                break;
            case this.p_day_three:
                // Day three menu
                this.menu_to_be_loaded = this.day_three_books;
                // Experiment
                $('.sc-ch-mid').hide();
                $('#day-three-div').show();
                this.numberOfItems = this.num_day_three_items;
                this.place_holder_price = this.total_day_three_price;
                // Update active day status
                this.day_one_status = false;
                this.day_two_status = false;
                this.day_three_status = true;
                this.day_four_status = false;
                this.day_five_status = false;
                this.day_six_status = false;
                break;
            case this.p_day_four:
                // Day four menu
                this.menu_to_be_loaded = this.day_four_books;
                // Experiment
                $('.sc-ch-mid').hide();
                $('#day-four-div').show();
                this.numberOfItems = this.num_day_four_items;
                this.place_holder_price = this.total_day_four_price;
                // Update active day status
                this.day_one_status = false;
                this.day_two_status = false;
                this.day_three_status = false;
                this.day_four_status = true;
                this.day_five_status = false;
                this.day_six_status = false;
                break;
            case this.p_day_five:
                // Day five menu
                // this.menu_to_be_loaded = this.day_five_books;
                // Experiment
                $('.sc-ch-mid').hide();
                $('#day-five-div').show();
                this.numberOfItems = this.num_day_five_items;
                this.place_holder_price = this.total_day_five_price;
                // Update active day status
                this.day_one_status = false;
                this.day_two_status = false;
                this.day_three_status = false;
                this.day_four_status = false;
                this.day_five_status = true;
                this.day_six_status = false;
                break;
            case this.p_day_six:
                // Day six menu
                this.menu_to_be_loaded = this.day_six_books;
                // Experiment
                $('.sc-ch-mid').hide();
                $('#day-six-div').show();
                this.numberOfItems = this.num_day_six_items;
                this.place_holder_price = this.total_day_six_price;
                // Update active day status
                this.day_one_status = false;
                this.day_two_status = false;
                this.day_three_status = false;
                this.day_four_status = false;
                this.day_five_status = false;
                this.day_six_status = true;
                break;
            default:
                break;
        }
    };
    MenuComponent.prototype.decNumberOfItems = function () {
        switch (true) {
            case this.today_status:
                if (this.numberOfItems == 1) {
                    this.numberOfItems = 1;
                    this.num_today_items = 1;
                    // this.today_price = 1;
                }
                else {
                    // console.log('Num today Items :'+ this.num_today_items);
                    this.numberOfItems--;
                    this.num_today_items--;
                    console.log('Num today Items updated :' + this.num_today_items);
                    if (this.num_today_items == 1) {
                        this.total_today_price = this.place_holder_price = this.today_price;
                        console.log("NUmber of items is one" + this.total_today_price);
                    }
                    else {
                        this.total_today_price = this.place_holder_price = this.total_today_price - this.today_price;
                        console.log(this.today_price);
                    }
                }
                break;
            case this.day_one_status:
                if (this.numberOfItems == 1) {
                    this.numberOfItems = 1;
                    this.num_day_one_items = 1;
                }
                else {
                    this.numberOfItems--;
                    this.num_day_one_items--;
                    if (this.num_day_one_items == 1) {
                        this.total_day_one_price = this.place_holder_price = this.day_one_price;
                        console.log("Number of items is one" + this.total_day_one_price);
                    }
                    else {
                        this.total_day_one_price = this.place_holder_price = this.total_day_one_price - this.day_one_price;
                        // console.log(this.today_price);
                    }
                }
                break;
            case this.day_two_status:
                if (this.numberOfItems == 1) {
                    this.numberOfItems = 1;
                    this.num_day_two_items = 1;
                }
                else {
                    this.numberOfItems--;
                    this.num_day_two_items--;
                    if (this.num_day_two_items == 1) {
                        this.total_day_two_price = this.place_holder_price = this.day_two_price;
                        console.log("Number of items is one" + this.total_day_two_price);
                    }
                    else {
                        this.total_day_two_price = this.place_holder_price = this.total_day_two_price - this.day_two_price;
                        // console.log(this.today_price);
                    }
                }
                break;
            case this.day_three_status:
                if (this.numberOfItems == 1) {
                    this.numberOfItems = 1;
                    this.num_day_three_items = 1;
                }
                else {
                    this.numberOfItems--;
                    this.num_day_three_items--;
                    if (this.num_day_three_items == 1) {
                        this.total_day_three_price = this.place_holder_price = this.day_three_price;
                        console.log("Number of items is one" + this.total_day_three_price);
                    }
                    else {
                        this.total_day_three_price = this.place_holder_price = this.total_day_three_price - this.day_three_price;
                        // console.log(this.today_price);
                    }
                }
                break;
            case this.day_four_status:
                if (this.numberOfItems == 1) {
                    this.numberOfItems = 1;
                    this.num_day_four_items = 1;
                }
                else {
                    this.numberOfItems--;
                    this.num_day_four_items--;
                    if (this.num_day_four_items == 1) {
                        this.total_day_four_price = this.place_holder_price = this.day_four_price;
                        console.log("Number of items is one" + this.total_day_four_price);
                    }
                    else {
                        this.total_day_four_price = this.place_holder_price = this.total_day_four_price - this.day_four_price;
                        // console.log(this.today_price);
                    }
                }
                break;
            case this.day_five_status:
                if (this.numberOfItems == 1) {
                    this.numberOfItems = 1;
                    this.num_day_five_items = 1;
                }
                else {
                    this.numberOfItems--;
                    this.num_day_five_items--;
                    if (this.num_day_five_items == 1) {
                        this.total_day_five_price = this.place_holder_price = this.day_five_price;
                        console.log("Number of items is one" + this.total_day_five_price);
                    }
                    else {
                        this.total_day_five_price = this.place_holder_price = this.total_day_five_price - this.day_five_price;
                        // console.log(this.today_price);
                    }
                }
                break;
            case this.day_six_status:
                if (this.numberOfItems == 1) {
                    this.numberOfItems = 1;
                    this.num_day_six_items = 1;
                }
                else {
                    this.numberOfItems--;
                    this.num_day_six_items--;
                    if (this.num_day_six_items == 1) {
                        this.total_day_six_price = this.place_holder_price = this.day_six_price;
                        console.log("Number of items is one" + this.total_day_six_price);
                    }
                    else {
                        this.total_day_six_price = this.place_holder_price = this.total_day_six_price - this.day_six_price;
                        // console.log(this.today_price);
                    }
                }
                break;
            default:
                break;
        }
    };
    MenuComponent.prototype.incNumberOfItems = function () {
        switch (true) {
            case this.today_status:
                this.numberOfItems++;
                this.num_today_items++;
                // Increase the cost as well
                if (this.num_today_items == 0) {
                    this.total_today_price = this.place_holder_price = this.today_price * 1;
                    console.log(this.total_today_price);
                }
                else {
                    this.total_today_price = this.place_holder_price = this.today_price * this.num_today_items;
                    console.log(this.total_today_price);
                }
                break;
            case this.day_one_status:
                this.numberOfItems++;
                this.num_day_one_items++;
                // Increase the cost as well
                if (this.num_day_one_items == 0) {
                    this.total_day_one_price = this.place_holder_price = this.day_one_price * 1;
                    // console.log(this.total_today_price);
                }
                else {
                    this.total_day_one_price = this.place_holder_price = this.day_one_price * this.num_day_one_items;
                    // console.log(this.total_today_price);
                }
                break;
            case this.day_two_status:
                this.numberOfItems++;
                this.num_day_two_items++;
                // Increase the cost as well
                if (this.num_day_two_items == 0) {
                    this.total_day_two_price = this.place_holder_price = this.day_two_price * 1;
                    // console.log(this.total_today_price);
                }
                else {
                    this.total_day_two_price = this.place_holder_price = this.day_two_price * this.num_day_two_items;
                    // console.log(this.total_today_price);
                }
                break;
            case this.day_three_status:
                this.numberOfItems++;
                this.num_day_three_items++;
                // Increase the cost as well
                if (this.num_day_three_items == 0) {
                    this.total_day_three_price = this.place_holder_price = this.day_three_price * 1;
                    // console.log(this.total_today_price);
                }
                else {
                    this.total_day_three_price = this.place_holder_price = this.day_three_price * this.num_day_three_items;
                    // console.log(this.total_today_price);
                }
                break;
            case this.day_four_status:
                this.numberOfItems++;
                this.num_day_four_items++;
                // Increase the cost as well
                if (this.num_day_four_items == 0) {
                    this.total_day_four_price = this.place_holder_price = this.day_four_price * 1;
                    // console.log(this.total_today_price);
                }
                else {
                    this.total_day_four_price = this.place_holder_price = this.day_four_price * this.num_day_four_items;
                    // console.log(this.total_today_price);
                }
                break;
            case this.day_five_status:
                this.numberOfItems++;
                this.num_day_five_items++;
                // Increase the cost as well
                if (this.num_day_five_items == 0) {
                    this.total_day_five_price = this.place_holder_price = this.day_five_price * 1;
                    // console.log(this.total_today_price);
                }
                else {
                    this.total_day_five_price = this.place_holder_price = this.day_five_price * this.num_day_five_items;
                    // console.log(this.total_today_price);
                }
                break;
            case this.day_six_status:
                this.numberOfItems++;
                this.num_day_six_items++;
                // Increase the cost as well
                if (this.num_day_six_items == 0) {
                    this.total_day_six_price = this.place_holder_price = this.day_six_price * 1;
                    // console.log(this.total_today_price);
                }
                else {
                    this.total_day_six_price = this.place_holder_price = this.day_six_price * this.num_day_six_items;
                    // console.log(this.total_today_price);
                }
                break;
            default:
                break;
        }
    };
    // Each item
    MenuComponent.prototype.decNumberOfItem = function () {
        switch (true) {
            case this.today_status:
                break;
            case this.day_one_status:
                break;
            case this.day_two_status:
                break;
            case this.day_three_status:
                break;
            case this.day_four_status:
                break;
            case this.day_five_status:
                break;
            case this.day_six_status:
                break;
            default:
                break;
        }
    };
    MenuComponent.prototype.incNumberOfItem = function () {
        switch (true) {
            case this.today_status:
                break;
            case this.day_one_status:
                break;
            case this.day_two_status:
                break;
            case this.day_three_status:
                break;
            case this.day_four_status:
                break;
            case this.day_five_status:
                break;
            case this.day_six_status:
                break;
            default:
                break;
        }
    };
    MenuComponent.prototype.letterCheck = function (e) {
        console.log(e.target.checked);
        switch (e.target.checked) {
            case true:
                // Add 5 rupees to the total
                this.letter_added = true;
                this.letter_price = 5;
                localStorage.setItem('letter_added', 'true');
                break;
            case false:
                // Deduct 5 rupees from the total
                this.letter_added = false;
                this.letter_price = 0;
                localStorage.setItem('letter_added', 'false');
                break;
            default:
                break;
        }
    };
    MenuComponent.prototype.onCheckChange = function (menu, event, mevent) {
        var _this = this;
        menu.checked = event;
        var tar = mevent.target;
        if (event == true) {
            // b_img
            if ($(tar).parent().find('img').hasClass('roti-cl')) {
                $(tar).parent().find('img').attr('src', this.roti_r_img);
            }
            if ($(tar).parent().find('img').hasClass('rice-roti-cl')) {
                $(tar).parent().find('img').attr('src', this.rice_roti_r_img);
            }
            if ($(tar).parent().find('img').hasClass('curry-cl')) {
                $(tar).parent().find('img').attr('src', this.curry_r_img);
            }
            if ($(tar).parent().find('img').hasClass('dal-cl')) {
                $(tar).parent().find('img').attr('src', this.dal_r_img);
            }
            if ($(tar).parent().find('img').hasClass('rice-cl')) {
                $(tar).parent().find('img').attr('src', this.rice_r_img);
            }
            if ($(tar).parent().find('img').hasClass('curd-cl')) {
                $(tar).parent().find('img').attr('src', this.curd_r_img);
            }
            if ($(tar).parent().find('img').hasClass('fry-cl')) {
                $(tar).parent().find('img').attr('src', this.fry_r_img);
            }
            if ($(tar).parent().find('img').hasClass('sweet-cl')) {
                $(tar).parent().find('img').attr('src', this.sweets_r_img);
            }
        }
        else {
            // r_img
            if ($(tar).parent().find('img').hasClass('roti-cl')) {
                $(tar).parent().find('img').attr('src', this.roti_img);
            }
            if ($(tar).parent().find('img').hasClass('rice-roti-cl')) {
                $(tar).parent().find('img').attr('src', this.rice_roti_img);
            }
            if ($(tar).parent().find('img').hasClass('curry-cl')) {
                $(tar).parent().find('img').attr('src', this.curry_img);
            }
            if ($(tar).parent().find('img').hasClass('dal-cl')) {
                $(tar).parent().find('img').attr('src', this.dal_img);
            }
            if ($(tar).parent().find('img').hasClass('rice-cl')) {
                $(tar).parent().find('img').attr('src', this.rice_img);
            }
            if ($(tar).parent().find('img').hasClass('curd-cl')) {
                $(tar).parent().find('img').attr('src', this.curd_img);
            }
            if ($(tar).parent().find('img').hasClass('fry-cl')) {
                $(tar).parent().find('img').attr('src', this.fry_img);
            }
            if ($(tar).parent().find('img').hasClass('sweet-cl')) {
                $(tar).parent().find('img').attr('src', this.sweets_img);
            }
        }
        switch (true) {
            case this.day_one_status:
                this.day_one_books = this.menu_to_be_loaded;
                if (event) {
                    // checked
                    // Add to added items
                    this.day_one_c_books.push(menu);
                    // Update prices
                    if (this.num_day_one_items == 0) {
                        this.num_day_one_items++;
                        this.numberOfItems = this.num_day_one_items;
                        var to_be_added_price = this.num_day_one_items * menu.item_price;
                        this.day_one_price += +menu.item_price;
                        this.total_day_one_price += +menu.item_price;
                        this.place_holder_price = this.total_day_one_price;
                    }
                    else {
                        var to_be_added_price = this.num_day_one_items * menu.item_price;
                        this.day_one_price += +menu.item_price;
                        this.total_day_one_price += +to_be_added_price;
                        this.place_holder_price = this.total_day_one_price;
                    }
                }
                else {
                    // must remove from added items if exists
                    this.day_one_c_books.forEach(function (element) {
                        if (element._id == menu._id && element.date == menu.date) {
                            var ind = _this.day_one_c_books.indexOf(element, 0);
                            if (ind > -1) {
                                _this.day_one_c_books.splice(ind, 1);
                                _this.day_one_price -= menu.item_price;
                                var to_be_added_price = _this.num_day_one_items * menu.item_price;
                                _this.total_day_one_price -= to_be_added_price;
                                _this.place_holder_price = _this.total_day_one_price;
                            }
                        }
                    });
                }
                break;
            case this.day_two_status:
                this.day_two_books = this.menu_to_be_loaded;
                if (event) {
                    // checked
                    // Add to added items
                    this.day_two_c_books.push(menu);
                    // Update prices
                    if (this.num_day_two_items == 0) {
                        this.num_day_two_items++;
                        this.numberOfItems = this.num_day_two_items;
                        var to_be_added_price = this.num_day_two_items * menu.item_price;
                        this.day_two_price += +menu.item_price;
                        this.total_day_two_price += +menu.item_price;
                        this.place_holder_price = this.total_day_two_price;
                    }
                    else {
                        var to_be_added_price = this.num_day_two_items * menu.item_price;
                        this.day_two_price += +menu.item_price;
                        this.total_day_two_price += +to_be_added_price;
                        this.place_holder_price = this.total_day_two_price;
                    }
                }
                else {
                    // must remove from added items if exists
                    this.day_two_c_books.forEach(function (element) {
                        if (element._id == menu._id && element.date == menu.date) {
                            var ind = _this.day_two_c_books.indexOf(element, 0);
                            if (ind > -1) {
                                _this.day_two_c_books.splice(ind, 1);
                                _this.day_two_price -= menu.item_price;
                                var to_be_added_price = _this.num_day_two_items * menu.item_price;
                                _this.total_day_two_price -= to_be_added_price;
                                _this.place_holder_price = _this.total_day_two_price;
                            }
                        }
                        // console.log(this.day_two_c_books);
                    });
                }
                break;
            case this.day_three_status:
                this.day_three_books = this.menu_to_be_loaded;
                if (event) {
                    // checked
                    // Add to added items
                    this.day_three_c_books.push(menu);
                    // Update prices
                    if (this.num_day_three_items == 0) {
                        this.num_day_three_items++;
                        this.numberOfItems = this.num_day_three_items;
                        var to_be_added_price = this.num_day_three_items * menu.item_price;
                        this.day_three_price += +menu.item_price;
                        this.total_day_three_price += +menu.item_price;
                        this.place_holder_price = this.total_day_three_price;
                    }
                    else {
                        var to_be_added_price = this.num_day_three_items * menu.item_price;
                        this.day_three_price += +menu.item_price;
                        this.total_day_three_price += +to_be_added_price;
                        this.place_holder_price = this.total_day_three_price;
                    }
                }
                else {
                    // must remove from added items if exists
                    this.day_three_c_books.forEach(function (element) {
                        if (element._id == menu._id && element.date == menu.date) {
                            var ind = _this.day_three_c_books.indexOf(element, 0);
                            if (ind > -1) {
                                _this.day_three_c_books.splice(ind, 1);
                                _this.day_three_c_books.splice(ind, 1);
                                _this.day_three_price -= menu.item_price;
                                var to_be_added_price = _this.num_day_three_items * menu.item_price;
                                _this.total_day_three_price -= to_be_added_price;
                                _this.place_holder_price = _this.total_day_three_price;
                            }
                        }
                        // console.log(this.day_three_c_books);
                    });
                }
                break;
            case this.day_four_status:
                this.day_four_books = this.menu_to_be_loaded;
                if (event) {
                    // checked
                    // Add to added items
                    this.day_four_c_books.push(menu);
                    // Update prices
                    if (this.num_day_four_items == 0) {
                        this.num_day_four_items++;
                        this.numberOfItems = this.num_day_four_items;
                        var to_be_added_price = this.num_day_four_items * menu.item_price;
                        this.day_four_price += +menu.item_price;
                        this.total_day_four_price += +menu.item_price;
                        this.place_holder_price = this.total_day_four_price;
                    }
                    else {
                        var to_be_added_price = this.num_day_four_items * menu.item_price;
                        this.day_four_price += +menu.item_price;
                        this.total_day_four_price += +to_be_added_price;
                        this.place_holder_price = this.total_day_four_price;
                    }
                }
                else {
                    // must remove from added items if exists
                    this.day_four_c_books.forEach(function (element) {
                        if (element._id == menu._id && element.date == menu.date) {
                            var ind = _this.day_four_c_books.indexOf(element, 0);
                            if (ind > -1) {
                                _this.day_four_c_books.splice(ind, 1);
                                _this.day_four_price -= menu.item_price;
                                var to_be_added_price = _this.num_day_four_items * menu.item_price;
                                _this.total_day_four_price -= to_be_added_price;
                                _this.place_holder_price = _this.total_day_four_price;
                            }
                        }
                    });
                }
                break;
            case this.day_five_status:
                this.day_five_books = this.menu_to_be_loaded;
                if (event) {
                    // checked
                    // Add to added items
                    this.day_five_c_books.push(menu);
                    // Update prices
                    if (this.num_day_five_items == 0) {
                        this.num_day_five_items++;
                        this.numberOfItems = this.num_day_five_items;
                        var to_be_added_price = this.num_day_five_items * menu.item_price;
                        this.day_five_price += +menu.item_price;
                        this.total_day_five_price += +menu.item_price;
                        this.place_holder_price = this.total_day_five_price;
                    }
                    else {
                        var to_be_added_price = this.num_day_five_items * menu.item_price;
                        this.day_five_price += +menu.item_price;
                        this.total_day_five_price += +to_be_added_price;
                        this.place_holder_price = this.total_day_five_price;
                    }
                }
                else {
                    // must remove from added items if exists
                    this.day_five_c_books.forEach(function (element) {
                        if (element._id == menu._id && element.date == menu.date) {
                            var ind = _this.day_five_c_books.indexOf(element, 0);
                            if (ind > -1) {
                                _this.day_five_c_books.splice(ind, 1);
                                _this.day_five_price -= menu.item_price;
                                var to_be_added_price = _this.num_day_five_items * menu.item_price;
                                _this.total_day_five_price -= to_be_added_price;
                                _this.place_holder_price = _this.total_day_five_price;
                            }
                        }
                    });
                }
                break;
            case this.day_six_status:
                this.day_six_books = this.menu_to_be_loaded;
                if (event) {
                    // checked
                    // Add to added items
                    this.day_six_c_books.push(menu);
                    // Update books
                    if (this.num_day_six_items == 0) {
                        this.num_day_six_items++;
                        this.numberOfItems = this.num_day_six_items;
                        var to_be_added_price = this.num_day_six_items * menu.item_price;
                        this.day_six_price += +menu.item_price;
                        this.total_day_six_price += +menu.item_price;
                        this.place_holder_price = this.total_day_six_price;
                    }
                    else {
                        var to_be_added_price = this.num_day_six_items * menu.item_price;
                        this.day_six_price += +menu.item_price;
                        this.total_day_six_price += +to_be_added_price;
                        this.place_holder_price = this.total_day_six_price;
                    }
                }
                else {
                    // must remove from added items if exists
                    this.day_six_c_books.forEach(function (element) {
                        if (element._id == menu._id && element.date == menu.date) {
                            var ind = _this.day_six_c_books.indexOf(element, 0);
                            if (ind > -1) {
                                _this.day_six_c_books.splice(ind, 1);
                                _this.day_six_price -= menu.item_price;
                                var to_be_added_price = _this.num_day_six_items * menu.item_price;
                                _this.total_day_six_price -= to_be_added_price;
                                _this.place_holder_price = _this.total_day_six_price;
                            }
                        }
                        // console.log(this.day_six_c_books);
                    });
                }
                break;
            default:
                break;
        }
    };
    // Add to cart button clicked
    MenuComponent.prototype.addCartClicked = function () {
        var today, day_one, day_two, day_three, day_four, day_five, day_six;
        // Today's items are active
        if (this.num_today_items > 0) {
            var date = void 0, menu = void 0, numOfTimes = void 0, totalPrice = void 0;
            today = {
                // Get Date
                date: this.p_today_one,
                // Raw date for reports
                rawDate: this.today_one,
                // Get the booked menu
                menu: this.today_c_books,
                // Get the number of times menu has been booked
                numOfTimes: this.num_today_items,
                // Price per portion
                perPortionPrice: this.today_price,
                // Time slot
                timeSlot: this.today_slot,
                // Total price
                totalPrice: this.total_today_price
            };
        }
        else {
            today = null;
        }
        // If day one's items are active
        if (this.num_day_one_items > 0) {
            var date = void 0, menu = void 0, numOfTimes = void 0, totalPrice = void 0;
            day_one = {
                // Get Date
                date: this.p_day_one,
                // Raw date for reports
                rawDate: this.day_one,
                // Get the booked menu
                menu: this.day_one_c_books,
                // Get the number of times menu has been booked
                numOfTimes: this.num_day_one_items,
                // Price per portion
                perPortionPrice: this.day_one_price,
                // Time slot
                timeSlot: this.day_one_slot,
                // Total price
                totalPrice: this.total_day_one_price
            };
        }
        else {
            day_one = null;
        }
        // If day two's items are active
        if (this.num_day_two_items > 0) {
            var date = void 0, menu = void 0, numOfTimes = void 0, totalPrice = void 0;
            day_two = {
                // Get Date
                date: this.p_day_two,
                // Raw date for reports
                rawDate: this.day_two,
                // Get the booked menu
                menu: this.day_two_c_books,
                // Get the number of times menu has been booked
                numOfTimes: this.num_day_two_items,
                // Price per portion
                perPortionPrice: this.day_two_price,
                // Time slot
                timeSlot: this.day_two_slot,
                // Total price
                totalPrice: this.total_day_two_price
            };
        }
        else {
            day_two = null;
        }
        // If day three's items are active
        if (this.num_day_three_items > 0) {
            var date = void 0, menu = void 0, numOfTimes = void 0, totalPrice = void 0;
            day_three = {
                // Get Date
                date: this.p_day_three,
                // Raw date for reports
                rawDate: this.day_three,
                // Get the booked menu
                menu: this.day_three_c_books,
                // Get the number of times menu has been booked
                numOfTimes: this.num_day_three_items,
                // Price per portion
                perPortionPrice: this.day_three_price,
                // Time slot
                timeSlot: this.day_three_slot,
                // Total price
                totalPrice: this.total_day_three_price
            };
        }
        else {
            day_three = null;
        }
        // If day four's items are active
        if (this.num_day_four_items > 0) {
            var date = void 0, menu = void 0, numOfTimes = void 0, totalPrice = void 0;
            day_four = {
                // Get Date
                date: this.p_day_four,
                // Raw date for reports
                rawDate: this.day_four,
                // Get the booked menu
                menu: this.day_four_c_books,
                // Get the number of times menu has been booked
                numOfTimes: this.num_day_four_items,
                // Price per portion
                perPortionPrice: this.day_four_price,
                // Time slot
                timeSlot: this.day_four_slot,
                // Total price
                totalPrice: this.total_day_four_price
            };
        }
        else {
            day_four = null;
        }
        // If day five's items are active
        if (this.num_day_five_items > 0) {
            var date = void 0, menu = void 0, numOfTimes = void 0, totalPrice = void 0;
            day_five = {
                // Get Date
                date: this.p_day_five,
                // Raw date for reports
                rawDate: this.day_five,
                // Get the booked menu
                menu: this.day_five_c_books,
                // Get the number of times menu has been booked
                numOfTimes: this.num_day_five_items,
                // Price per portion
                perPortionPrice: this.day_five_price,
                // Time slot
                timeSlot: this.day_five_slot,
                // Total price
                totalPrice: this.total_day_five_price
            };
        }
        else {
            day_five = null;
        }
        // If day six's items are active
        if (this.num_day_six_items) {
            var date = void 0, menu = void 0, numOfTimes = void 0, totalPrice = void 0;
            day_six = {
                // Get Date
                date: this.p_day_six,
                // Raw date for reports
                rawDate: this.day_six,
                // Get the booked menu
                menu: this.day_six_c_books,
                // Get the number of times menu has been booked
                numOfTimes: this.num_day_six_items,
                // Price per portion
                perPortionPrice: this.day_six_price,
                // Time slot
                timeSlot: this.day_six_slot,
                // Total price
                totalPrice: this.total_day_six_price
            };
        }
        else {
            day_six = null;
        }
        switch (true) {
            case this.today_status:
                this.basketNumber++;
                break;
            case this.day_one_status:
                this.basketNumber++;
                break;
            case this.day_two_status:
                this.basketNumber++;
                break;
            case this.day_three_status:
                this.basketNumber++;
                break;
            case this.day_four_status:
                this.basketNumber++;
                break;
            case this.day_five_status:
                this.basketNumber++;
                break;
            case this.day_six_status:
                this.basketNumber++;
                break;
            default:
                break;
        }
        // Updating basket number
        // this.basketNumber += index;
        // Get noted to chef
        // this.notesToChef;
        this.allOrders = {
            // today: today,
            day_one: day_one,
            day_two: day_two,
            day_three: day_three,
            day_four: day_four,
            day_five: day_five,
            day_six: day_six,
        };
        localStorage.setItem('all_orders', JSON.stringify(this.allOrders));
        $('.added-db').css({ 'display': 'flex' });
        setTimeout(function () {
            $('.added-db').css({ 'display': 'none' });
        }, 1000);
    };
    // Close schedule menu
    MenuComponent.prototype.scClose = function () {
        $('.schedule-menu-back').css({ 'display': 'none' });
    };
    MenuComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/home']);
        return false;
    };
    MenuComponent.prototype.schMenuBtn = function () {
        if (this.authService.loggedIn() == true) {
            this.day_one_status = true;
            this.day_two_status = false;
            this.day_three_status = false;
            this.day_four_status = false;
            this.day_five_status = false;
            this.day_six_status = false;
            this.place_holder_price = this.total_today_price;
            this.loadDay(this.day_one);
            $('.schedule-menu-back').css({ 'display': 'flex' });
            $('.schedule-choose-core').show();
        }
        else {
            this.appComponent.loginSignupTrigger();
        }
    };
    // Slot selected event
    MenuComponent.prototype.slotSelected = function (event) {
        var slot = event.target.value;
        switch (true) {
            case this.today_status:
                this.today_slot = slot;
                break;
            case this.day_one_status:
                this.day_one_slot = slot;
                break;
            case this.day_two_status:
                this.day_two_slot = slot;
                break;
            case this.day_three_status:
                this.day_three_slot = slot;
                break;
            case this.day_four_status:
                this.day_four_slot = slot;
                break;
            case this.day_five_status:
                this.day_five_slot = slot;
                break;
            case this.day_six_status:
                this.day_six_slot = slot;
                break;
            default:
                break;
        }
    };
    // Today slot select
    MenuComponent.prototype.todayMenuSlotSelect = function (event) {
        $('#t-menu-select-slot').css({ 'border-color': 'rgba(0,0,0,.2)' });
        var tslot = event.target.value;
        // this.today_slot = tslot;
        switch (true) {
            case this.tab_one_status:
                this.today_tab_one_slot = event.target.value;
                break;
            case this.tab_two_status:
                this.today_tab_two_slot = event.target.value;
                break;
            case this.tab_three_status:
                this.today_tab_three_slot = event.target.value;
                break;
            default:
                break;
        }
    };
    MenuComponent.prototype.todayMenuTimesSelect = function (event) {
        switch (true) {
            case this.tab_one_status:
                this.num_tab_one_items = event.target.value;
                break;
            case this.tab_two_status:
                this.num_tab_two_items = event.target.value;
                break;
            case this.tab_three_status:
                this.num_tab_three_items = event.target.value;
                break;
            default:
                break;
        }
    };
    MenuComponent.prototype.todayAdd = function (tab) {
        // check if user is loggedIn
        if (this.authService.loggedIn() == true) {
            $('.today-menu-back').css('display', 'flex');
            // Reset dropdowns in today-menu tab
            $('#t-menu-select-slot').prop('selectedIndex', 0);
            $('#t-menu-select-times').prop('selectedIndex', 0);
            switch (tab) {
                case 'tab_one':
                    this.tab_two_status = false;
                    this.tab_three_status = false;
                    this.tab_one_status = true;
                    // Updating tab item number
                    this.num_tab_one_items = 1;
                    break;
                case 'tab_two':
                    this.tab_three_status = false;
                    this.tab_one_status = false;
                    this.tab_two_status = true;
                    this.num_tab_two_items = 1;
                    break;
                case 'tab_three':
                    this.tab_two_status = false;
                    this.tab_one_status = false;
                    this.tab_three_status = true;
                    this.num_tab_three_items = 1;
                    break;
                default:
                    break;
            }
        }
        else {
            // propmt to login
            this.appComponent.loginSignupTrigger();
        }
    };
    MenuComponent.prototype.addTodayCartClicked = function () {
        $('#t-menu-select-slot').css({ 'border-color': 'rgba(0,0,0,.2)' });
        switch (true) {
            case this.tab_one_status:
                if (this.today_tab_one_slot != null || this.today_tab_one_slot != undefined) {
                    this.tab_one_total_price = this.num_tab_one_items * this.tab_one_cost;
                    // Add to orders
                    this.today_tab_one_books = {
                        name: this.tab_one,
                        time_slot: this.today_tab_one_slot,
                        num_of_items: this.num_tab_one_items,
                        base_price: this.tab_one_cost,
                        total_price: this.tab_one_total_price
                    };
                    this.basketNumber++;
                    // add announcement
                    // Update tab_one_text and display
                    this.num_tab_one = this.num_tab_one_items;
                    $('#tab-one-band').show();
                    // Show tab remove btn
                    $('#rem-t-tab_one').show();
                    var today_orders = {
                        date: this.p_today_one,
                        tab_one: this.today_tab_one_books,
                        tab_two: this.today_tab_two_books,
                        tab_three: this.today_tab_three_books
                    };
                    localStorage.setItem('today_orders', JSON.stringify(today_orders));
                    $('.today-menu-back').hide();
                }
                else {
                    // Do nothing
                    this.today_tab_one_books = null;
                    $('.today-core #t-menu-select-slot').css({ 'border-color': '#fa0000' });
                }
                break;
            case this.tab_two_status:
                if (this.today_tab_two_slot != null || this.today_tab_two_slot != undefined) {
                    this.tab_two_total_price = this.num_tab_two_items * this.tab_two_cost;
                    // Add to orders
                    this.today_tab_two_books = {
                        name: this.tab_two,
                        time_slot: this.today_tab_two_slot,
                        num_of_items: this.num_tab_two_items,
                        base_price: this.tab_two_cost,
                        total_price: this.tab_two_total_price
                    };
                    this.basketNumber++;
                    // Update tab_two_text and display
                    this.num_tab_two = this.num_tab_two_items;
                    $('#tab-two-band').show();
                    // Show tab remove btn
                    $('#rem-t-tab_two').show();
                    var today_orders = {
                        date: this.p_today_one,
                        tab_one: this.today_tab_one_books,
                        tab_two: this.today_tab_two_books,
                        tab_three: this.today_tab_three_books
                    };
                    localStorage.setItem('today_orders', JSON.stringify(today_orders));
                    $('.today-menu-back').hide();
                }
                else {
                    // Do nothing
                    this.today_tab_two_books = null;
                    $('#t-menu-select-slot').css({ 'border-color': '#fa0000' });
                }
                break;
            case this.tab_three_status:
                if (this.today_tab_three_slot != null || this.today_tab_three_slot != undefined) {
                    this.tab_three_total_price = this.num_tab_three_items * this.tab_three_cost;
                    // Add to orders
                    this.today_tab_three_books = {
                        name: this.tab_three,
                        time_slot: this.today_tab_three_slot,
                        num_of_items: this.num_tab_three_items,
                        base_price: this.tab_three_cost,
                        total_price: this.tab_three_total_price
                    };
                    this.basketNumber++;
                    // Update tab three text and display band
                    this.num_tab_three = this.num_tab_three_items;
                    $('#tab-three-band').show();
                    // Show tab remove btn
                    $('#rem-t-tab_three').show();
                    var today_orders = {
                        date: this.p_today_one,
                        tab_one: this.today_tab_one_books,
                        tab_two: this.today_tab_two_books,
                        tab_three: this.today_tab_three_books
                    };
                    localStorage.setItem('today_orders', JSON.stringify(today_orders));
                    $('.today-menu-back').hide();
                }
                else {
                    // Do nothing
                    this.today_tab_three_books = null;
                    $('#t-menu-select-slot').css({ 'border-color': '#fa0000' });
                }
                break;
            default:
                break;
        }
    };
    MenuComponent.prototype.removeTodayTab = function (tab) {
        switch (tab) {
            case "tab_one":
                // Remove from today_orders
                this.today_tab_one_books = null;
                // Hide band
                $('#tab-one-band').hide();
                // Hide tab remove btn
                $('#rem-t-tab_one').hide();
                // basket number decrement
                this.basketNumber--;
                break;
            case "tab_two":
                // Remove from today_orders
                this.today_tab_two_books = null;
                // Hide band
                $('#tab-two-band').hide();
                // Hide tab remove btn
                $('#rem-t-tab_two').hide();
                // basket number decrement
                this.basketNumber--;
                break;
            case "tab_three":
                // Remove from today_orders
                this.today_tab_three_books = null;
                // Hide band
                $('#tab-three-band').hide();
                // Hide tab remove btn
                $('#rem-t-tab_three').hide();
                // basket number decrement
                this.basketNumber--;
                break;
            default:
                break;
        }
        var today_orders = {
            date: this.p_today_one,
            tab_one: this.today_tab_one_books,
            tab_two: this.today_tab_two_books,
            tab_three: this.today_tab_three_books
        };
        localStorage.setItem('today_orders', JSON.stringify(today_orders));
        console.log(today_orders);
    };
    MenuComponent.prototype.tdClose = function () {
        $('.today-menu-back').hide();
        $('#t-menu-select-slot').css({ 'border-color': 'rgba(0,0,0,.2)' });
        this.num_tab_one_items = 0;
        this.num_tab_two_items = 0;
        this.num_tab_three_items = 0;
    };
    MenuComponent.prototype.navToChekout = function () {
        // if basket number is atleast one
        if (this.basketNumber > 0) {
            localStorage.setItem('basket_number', this.basketNumber.toString());
            this.router.navigate(['/checkout']);
        }
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_get_menu_service__["a" /* GetMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_get_menu_service__["a" /* GetMenuService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"]) === "function" && _f || Object])
], MenuComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\r\n  margin: 20px auto;\r\n}\r\n\r\ntable td {\r\n  padding: 10px 10px;\r\n  font-size: 80%;\r\n  font-weight: normal;\r\n  white-space: normal;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Det Title Div-->\r\n<div class=\"det-title-div\">\r\n  <div class=\"det-title-core\">\r\n    <h2 class=\"det-title\">Orders</h2>\r\n  </div>\r\n</div>\r\n\r\n<!-- Det core div -->\r\n<div class=\"dets-core\">\r\n\r\n  <div *ngIf='orders_exist == false'>\r\n    <h5>You have no orders yet.</h5>\r\n  </div>\r\n  <div *ngIf='orders_exist == true'>\r\n    <table class=\"table table-striped\">\r\n      <tr>\r\n        <th>\r\n          Order id\r\n        </th>\r\n        <th>\r\n          Order Time\r\n        </th>\r\n        <th>\r\n          Delivery Address\r\n        </th>\r\n        <th>\r\n          Payment Type\r\n        </th>\r\n        <th>\r\n          Price\r\n        </th>\r\n      </tr>\r\n      <tr *ngFor='let order of users_orders'>\r\n        <td>\r\n          {{order.order_id}}\r\n        </td>\r\n        <td>\r\n          {{order.order_time}}\r\n        </td>\r\n        <td>\r\n          {{order.delivery_address}}\r\n        </td>\r\n        <td>\r\n          {{order.payment_method}}\r\n        </td>\r\n        <td>\r\n          {{order.total_price}}\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"clearfix\"></div>"

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_admin_auth_service__ = __webpack_require__("../../../../../src/app/services/admin-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_admin_services_service__ = __webpack_require__("../../../../../src/app/services/admin-services.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrdersComponent = (function () {
    function OrdersComponent(router, adminAuth, title, getadMenu, authService) {
        this.router = router;
        this.adminAuth = adminAuth;
        this.title = title;
        this.getadMenu = getadMenu;
        this.authService = authService;
        this.users_orders = [];
        this.users_orders_all = [];
        this.orders_exist = false;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle('Settings: Orders');
        var user = this.authService.getUserFromLocal();
        var user_parsed = JSON.parse(user);
        this.userEmail = user_parsed.email;
        this.userName = user_parsed.name;
        this.companyName = user_parsed.company_name;
        this.userMobile = user_parsed.mobile;
        this.userId = user_parsed.id;
        this.getadMenu.getOrders().subscribe(function (res) {
            _this.all_orders = res.msg;
            console.log(_this.all_orders);
            _this.all_orders.forEach(function (element) {
                // console.log(element.order.user_id);
                if (_this.userId == element.order.user_id) {
                    _this.users_orders.push(element.order);
                }
            });
            console.log(_this.users_orders);
            if (_this.users_orders.length > 0) {
                _this.orders_exist = true;
            }
        });
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__("../../../../../src/app/orders/orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/orders/orders.component.css"), __webpack_require__("../../../../../src/app/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_admin_auth_service__["a" /* AdminAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_admin_auth_service__["a" /* AdminAuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_admin_services_service__["a" /* AdminServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_admin_services_service__["a" /* AdminServicesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _e || Object])
], OrdersComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".web-sec-heads {\r\n  position: relative;\r\n  display: block;\r\n  margin: 20px auto;\r\n  text-align: center;\r\n  color: #000;\r\n  font-size: 200%;\r\n}\r\n\r\n.con-section .container {\r\n  text-align: left !important;\r\n}\r\n\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n  padding-left: 20px;\r\n}\r\n\r\nli {\r\n  margin: 0;\r\n}\r\nh3 {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  text-align: left !important;\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header for mobiles and smaller devices -->\r\n<header class=\"mob-main-header visible-sm visible-xs\">\r\n  <button type=\"button\" class=\"mob-menu-trig-btn\">\r\n                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n            </button>\r\n  <div class=\"mob-main-logo\">\r\n    <img src=\"../../assets/logo/logo_black.png\">\r\n  </div>\r\n</header>\r\n<header class=\"main-header visible-md visible-lg\">\r\n  <div class=\"container\">\r\n    <div class=\"main-logo pull-left\" routerLink='/home'>\r\n      <img src=\"../../assets/logo/logo_black.png\">\r\n    </div>\r\n    <ul class=\"list-inline det-ul visible-xs visible-sm pull-right\">\r\n      <!-- <li>\r\n        <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp; </button>\r\n      </li> -->\r\n    </ul>\r\n    <ul class=\"list-inline det-ul pull-left visible-md visible-lg\">\r\n      <!-- <li>\r\n        <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp;</button>\r\n      </li> -->\r\n      <li>\r\n        <a routerLink='/menu' class=\"dets-div-btns\" id=\"our-menu-btn\">Today, {{dateForHeader}}</a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"scroll-login-div pull-right  visible-md visible-lg\">\r\n      <ul class=\"list-inline sc-ul\">\r\n        <li class=\"login-trig-div\" *ngIf=\"!authService.loggedIn()\">\r\n          <button type=\"button\" class=\"login-signup-trig-btn dets-div-btns\" (click)=\"appComponent.loginSignupTrigger()\">Log in/Sign up</button>\r\n        </li>\r\n        <li class=\"account-trig-div\" *ngIf=\"authService.loggedIn()\">\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\">{{userName}}&nbsp;<i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i></button>\r\n            <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings'>My Profile</a></li>\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/my-orders'>My Orders</a></li>\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/address'>Saved Address</a></li>\r\n              <!-- <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/payments'>Payments</a></li> -->\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/reward-points'>Reward Points</a></li>\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/change-password'>Change Password</a></li>\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"onLogoutClick()\">Logout</a></li>\r\n            </ul>\r\n          </div>\r\n        </li>\r\n        <li class=\"head-basket\" routerLink='/checkout'>\r\n          Basket &nbsp; <span class=\"head-basket-num\">{{basket_num}}</span> \r\n        </li>\r\n      </ul>\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n</header>\r\n<div class=\"con-section jumbotron\">\r\n  <h2 class=\"web-sec-heads\">PRIVACY POLICY</h2>\r\n  <div class=\"container\">\r\n\r\n    <p>\r\n       Fysu is the sole operator of www.fysu.in (website) for the convenient and hassle free order of lunch via the website.\r\n    </p>\r\n    <p>\r\n      The Privacy Policy states our policies regarding the personal information (Email address & Contact Number) we receive from our clients on the website.\r\n    </p>\r\n    <p>\r\n      All the personal information provided shall be used to provide the service and enhance the site and thus, you agree to the use of such information provided by clients in accordance to the policy.\r\n    </p>\r\n    \r\n    <h3>\r\n       Collection and Disclosure of Personal Information\r\n    </h3>\r\n    <p>\r\n       We collect personal data provided by the client voluntarily, which typically includes yours:\r\n    </p>\r\n    <p>Company Name</p>\r\n    <p>Email Address</p>\r\n    <p>\r\n       Mobile Number\r\n    </p>\r\n    <p>\r\n       Delivery Address\r\n    </p>\r\n    <p>\r\n       Any other information you give us while registering and ordering.\r\n    </p>\r\n    <p>\r\n      We use Personal Information to deliver the lunch to you. To the extent, we may use your Personal Information for the marketing mails and you can opt out of such uses via unsubscribe option. We use your personal information to resolve disputes/queries; for a safe transaction; delivery; measure consumer interest in our lunch service, inform you about online offers, enforce our terms and conditions and as otherwise informed to you at the time of collection.\r\n    </p>\r\n    <p>\r\n      We may transfer your Personal Information with other parties in order to comply with laws, protect our rights and property, in connection with or during negotiation of any merger, financing, acquisition, bankruptcy, dissolution, transaction or proceeding involving sale, transfer, divestiture, or disclosure of all or a portion of our business or assets to another company.\r\n    </p>\r\n    <h3>Log Data</h3>\r\n    <p>\r\n      Fysu collects information that your browser sends us whenever you visit our website. This Log Data may include information such as your computer's Internet Protocol (\"IP\") address, browser type, browser version, &amp; the pages of our website that you visit, the time and date of your visit, the time spent on those pages and other statistics.\r\n    </p>\r\n    <p>\r\n      We may use data collection devices such as cookies on certain pages of the website to analyze our web page flow, count visits, measure promotional effectiveness of emails and websites, and promote trust and safety.\r\n    </p>\r\n    <h3>\r\n       Cookies\r\n    </h3>\r\n    <p>\r\n      Cookies are small files placed on your hard drive that assist us in providing our services. We offer certain features that are available through the use of a cookie only. If you decline all cookies, you may not be able to use some pages of our website.\r\n    </p>\r\n    <h3>\r\n       Google Analytics\r\n    </h3>\r\n    <p>\r\n       We may use Google Analytics to analyze how our users use the website and help improve our website and services.\r\n    </p>\r\n    <h3>\r\n       Security\r\n    </h3>\r\n    <p>\r\n      To protect the user's Personal Information is important to us and we take utmost precautions to ensure that the information is not lost, misused, disclosed or destroyed, but no electronic method is 100 % secure. Hence, we don't guarantee hundred percent security of your Personal Information.\r\n    </p>\r\n    <h3>\r\n       Payment Information\r\n    </h3>\r\n    <p>\r\n      Fysu does not store credit card or any other customer payment information. All the information you provide is processed through a secure server.\r\n    </p>\r\n    <h3>\r\n       Access, Accuracy and Security\r\n    </h3>\r\n    <p>\r\n      Fysu will take reasonable steps to ensure the personal information collected is accurate, complete and up-to-date. The customer may access and request correction of any personal information concerning you at any time. The customer may also request the personal information be deleted at any time. Any such requests should be made directly by contacting Fysu. We will take reasonable steps to protect personal information from misuse, loss and unauthorized access, modification or disclosure.\r\n    </p>\r\n    <h3>\r\n       Confidentiality\r\n    </h3>\r\n    <p>\r\n      You further acknowledge that the Website may contain information which is designated confidential by Us and that you shall not disclose such information without our prior written consent. \r\n    </p>\r\n    <p>\r\n      Your information is regarded as confidential and therefore will not be divulged to any third party, unless if legally required to do so to the appropriate authorities.\r\n    </p>\r\n    <p>\r\n      We will not sell, share, or rent your personal information to any third party or use your e-mail address for unsolicited mail. Any emails sent by us will only be in connection with the provision of agreed services and products.\r\n    </p>\r\n    <h3>\r\n       Changes to Privacy Policy\r\n    </h3>\r\n    <p>\r\n      We reserve the rights to modify or update this Privacy Policy any time. Changes shall be effective immediately upon posting on the website. So, you are advised to review this Privacy Policy every time upon placement of order.\r\n    </p>\r\n    <h3>\r\n       Contact Us\r\n    </h3>\r\n    <p>\r\n       For any query, grievance, complaint, any other information or just to say HI, you can contact us at info@fysu.in\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PrivacyComponent = (function () {
    function PrivacyComponent(router, title, appComponent, authService, datePipe) {
        this.router = router;
        this.title = title;
        this.appComponent = appComponent;
        this.authService = authService;
        this.datePipe = datePipe;
        this.today_one = __WEBPACK_IMPORTED_MODULE_6_moment__();
    }
    PrivacyComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.dateForHeader = this.datePipe.transform(this.today_one, 'EEE, MMM d');
        this.basket_num = parseInt(localStorage.getItem('basket_number'));
        if (this.basket_num == undefined || this.basket_num == null || this.basket_num == 0 || isNaN(this.basket_num) == true) {
            // redirect to menu
            this.basket_num = 0;
            // alert('no');
        }
        else {
            // this.basket_num;
        }
        this.title.setTitle('Privacy Policy - Fysu');
        if (this.authService.loggedIn() == true) {
            var user = this.authService.getUserFromLocal();
            var user_parsed = JSON.parse(user);
            this.userEmail = user_parsed.email;
            this.userName = user_parsed.name;
            this.companyName = user_parsed.company_name;
            this.userMobile = user_parsed.mobile;
            this.userId = user_parsed.id;
        }
        else {
            this.basket_num = 0;
        }
    };
    return PrivacyComponent;
}());
PrivacyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-privacy',
        template: __webpack_require__("../../../../../src/app/privacy/privacy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/privacy/privacy.component.css"), __webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]) === "function" && _e || Object])
], PrivacyComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=privacy.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dets-core,.det-title-div{\r\n    width: 50%;\r\n    overflow: hidden;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Det Title Div-->\r\n<div class=\"det-title-div\">\r\n  <div class=\"det-title-core\">\r\n    <h2 class=\"det-title\">Your Profile</h2>\r\n  </div>\r\n</div>\r\n\r\n<!-- Det core div -->\r\n<div class=\"dets-core\">\r\n  <ul class=\"list-unstyled\">\r\n    <li class=\"\">\r\n      <label for=\"email\">Email</label>\r\n    </li>\r\n    <li class=\"\">\r\n      <input type=\"email\" name=\"email\" id=\"dets-email\" [(ngModel)]='userEmail' class=\"inputs\" value=\"\">\r\n    </li>\r\n    <li class=\"\">\r\n      <label for=\"name\">Full Name</label>\r\n    </li>\r\n    <li class=\"\">\r\n      <input type=\"text\" name=\"full-name\" class=\"inputs\" [(ngModel)]='userName' id=\"name\" value=\"\">\r\n    </li>\r\n\r\n    <!-- <li class=\"\">\r\n      <label for=\"name\">Company Name</label>\r\n    </li>\r\n    <li class=\"\">\r\n      <input type=\"text\" name=\"full-name\" class=\"inputs\" [(ngModel)]='companyName' id=\"name\" value=\"\">\r\n    </li> -->\r\n\r\n    <li class=\"\">\r\n      <label for=\"mobile\">Mobile Number</label>\r\n    </li>\r\n    <li class=\"\">\r\n      <input type=\"text\" name=\"mobile\" class=\"inputs\" [(ngModel)]='userMobile' id=\"mobile\" value=\"\">\r\n    </li>\r\n  </ul>\r\n  <div class=\"bottom-div\">\r\n    <div class=\"save-btns-div pull-left\">\r\n      <button type=\"button\" class=\"save-btns\">Cancel</button>\r\n      <button type=\"button\" class=\"save-btns\" (click)='profileUpdate(userEmail,userName,userMobile)'>Save</button>\r\n    </div>\r\n    <div class=\"pull-right\">\r\n      <a routerLink='/settings/change-password'><button type=\"button\" class=\"change-pwd-btn\">Change Password</button></a>\r\n    </div>\r\n    <div class=\"clearfix\">\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(router, title, authService) {
        this.router = router;
        this.title = title;
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Settings: Profile');
        var user = this.authService.getUserFromLocal();
        var user_parsed = JSON.parse(user);
        this.userEmail = user_parsed.email;
        this.userName = user_parsed.name;
        this.userMobile = user_parsed.mobile;
        this.userId = user_parsed.id;
    };
    ProfileComponent.prototype.profileUpdate = function (userEmail, userName, userMobile) {
        var user = {
            id: this.userId,
            name: this.userName,
            email: this.userEmail,
            mobile: this.userMobile
        };
        // Update in the backend
        this.authService.updateUser(user).subscribe(function (res) {
            if (res.success) {
                console.log(res.msg);
            }
            else {
                console.log(res.msg);
            }
        });
        localStorage.setItem('user', JSON.stringify(user));
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css"), __webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/reward-points/reward-points.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .points {\r\n   font-size: 300%;\r\n }\r\n.redeem-div {\r\n  position: relative;\r\n  display: block;\r\n  width: 100% !important;\r\n  margin: 0;\r\n  padding: 10px 0;\r\n}\r\n\r\n.redeem-head {\r\n  position: relative;\r\n  display: block;\r\n  margin: 20px auto;\r\n  text-align: center;\r\n  font-size: 150%;\r\n  color: #666;\r\n}\r\n\r\n.redeem-points-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  width: 100%;\r\n  margin : 0;\r\n}\r\n\r\n.redeem-core {\r\n  position: relative;\r\n  display: block;\r\n  height: auto;\r\n  /* width: 350px; */\r\n}\r\n\r\n.redeem-top {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  height: 10%;\r\n  margin: 0;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  background-color: #efefef;\r\n  color: #666;\r\n  font-weight: bold;\r\n  font-size: 150%;\r\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.redeem-main {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  height: 88%;\r\n  margin: 0;\r\n  margin-top: 2%;\r\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.redeem-amount {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  width: 100%;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 300px;\r\n  /* padding: 30px 0; */\r\n  margin: 0;\r\n  /* background-color: #fff; */\r\n  background-color: #efefef;\r\n}\r\n\r\n.redeem-number {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 200px;\r\n  width: 200px;\r\n  border-radius: 50%;\r\n  /* background-color: #49AAFF; */\r\n  background-color: #6DA942;;\r\n  color: #fff;\r\n  font-size: 400%;\r\n}\r\n\r\n.red-num-in {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  -webkit-align-items: flex-start;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-justify-content: flex-start;\r\n}\r\n\r\n.redeem-dollar-sign {\r\n  font-size: 50%;\r\n}\r\n\r\n.redeem-dets {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  width: 100%;\r\n  height: 40%;\r\n  margin: 0;\r\n  padding: 10px 30px;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  -webkit-align-items: flex-start;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  background-color: #fff;\r\n}\r\n\r\n.redeem-dets h6 {\r\n  margin: 0 0 5px 0;\r\n  font-size: 105%;\r\n  color: #3e3e3e;\r\n  font-weight: bold;\r\n}\r\n\r\n.points-index-bar {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 7px;\r\n  border-radius: 7px;\r\n  background-color: #eee;\r\n  margin: 20px auto 2px auto;\r\n}\r\n\r\n.points-away {\r\n  font-size: 70%;\r\n  color: #666;\r\n  margin-top: 3px;\r\n}\r\n\r\n.redeem-btn {\r\n  height: 40px;\r\n  width: 150px;\r\n  border: none;\r\n  background-color: #CCCCCC;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  font-weight: bold;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reward-points/reward-points.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Det Title Div-->\r\n<div class=\"det-title-div\">\r\n  <div class=\"det-title-core\">\r\n    <h2 class=\"det-title\">Reward Points</h2>\r\n  </div>\r\n</div>\r\n\r\n<!-- Det core div -->\r\n<div class=\"dets-core\">\r\n  <h5>Reward Points</h5>\r\n  <h3 class=\"points\">{{rewardPoints}}</h3>\r\n\r\n  <div class=\"redeem-div container\">\r\n      <h3 class=\"redeem-head\">Redeem your points</h3>\r\n      <div class=\"redeem-points-div row\">\r\n          <div class=\"redeem-core col-md-4\">\r\n              <div class=\"redeem-top\">\r\n                  <h6>100 Point Rewards</h6>\r\n              </div>\r\n              <div class=\"redeem-main\">\r\n                  \r\n                  <div class=\"redeem-amount\">\r\n                      <div class=\"redeem-number\">\r\n\r\n                          \r\n\r\n                          <div class=\"red-num-in\"><div class=\"redeem-dollar-sign\">&#8377;</div><span class=\"redee\">10</span></div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"redeem-core col-md-4\">\r\n              <div class=\"redeem-top\">\r\n                  <h6>190 Point Rewards</h6>\r\n              </div>\r\n              <div class=\"redeem-main\">\r\n                  \r\n                  <div class=\"redeem-amount\">\r\n                      <div class=\"redeem-number\">\r\n                          <div class=\"red-num-in\"><div class=\"redeem-dollar-sign\">&#8377;</div><span class=\"redee\">20</span></div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"redeem-core col-md-4\">\r\n              <div class=\"redeem-top\">\r\n                  <h6>360 Point Rewards</h6>\r\n              </div>\r\n              <div class=\"redeem-main\">\r\n                  \r\n                  <div class=\"redeem-amount\">\r\n                      <div class=\"redeem-number\">\r\n                          <div class=\"red-num-in\"><div class=\"redeem-dollar-sign\">&#8377;</div><span class=\"redee\">40</span></div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/reward-points/reward-points.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardPointsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RewardPointsComponent = (function () {
    function RewardPointsComponent(router, authService, title) {
        this.router = router;
        this.authService = authService;
        this.title = title;
    }
    RewardPointsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle('Settings: Reward Points');
        var user = this.authService.getUserFromLocal();
        var user_parsed = JSON.parse(user);
        this.userEmail = user_parsed.email;
        this.userName = user_parsed.name;
        this.companyName = user_parsed.company_name;
        this.userMobile = user_parsed.mobile;
        this.userId = user_parsed.id;
        this.authService.getUserRewards(this.userId).subscribe(function (res) {
            console.log(res.msg);
            if (res.success) {
                _this.rewardPoints = res.msg;
            }
            else {
                _this.rewardPoints = 0;
            }
        });
    };
    return RewardPointsComponent;
}());
RewardPointsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reward-points',
        template: __webpack_require__("../../../../../src/app/reward-points/reward-points.component.html"),
        styles: [__webpack_require__("../../../../../src/app/reward-points/reward-points.component.css"), __webpack_require__("../../../../../src/app/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
], RewardPointsComponent);

var _a, _b, _c;
//# sourceMappingURL=reward-points.component.js.map

/***/ }),

/***/ "../../../../../src/app/rewards/rewards.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\r\n  padding: 0 !important;\r\n}\r\n\r\n.main-container>.container {\r\n  width: 100% !important;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.rewards-title-img-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  width: 100%;\r\n  height: 200px;\r\n  color: #fff;\r\n  text-align: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/gift.jpg") + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.rewards-main {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  padding: 50px 0px 20px 0px;\r\n  background-color: #EEEEEE;\r\n}\r\n\r\n/* Left rewards section */\r\n\r\n.left-rew-section,\r\n.right-rew-section {\r\n  position: relative;\r\n  margin: 0;\r\n}\r\n\r\n.right-rew-section ul{\r\n  font-size: 90%;\r\n}\r\n.right-rew-section ul li{\r\n  margin: 0;\r\n}\r\n.left-rew-section {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  -webkit-justify-content: flex-end;\r\n  -webkit-box-align: end;\r\n      -ms-flex-align: end;\r\n          align-items: flex-end;\r\n  -webkit-align-items: flex-end;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  width: 50%;\r\n}\r\n\r\n.right-rew-section {\r\n  width: 50%;\r\n}\r\n\r\n.points-reps {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  -webkit-justify-content: space-around;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  width: auto;\r\n}\r\n\r\n.points-rep {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  /* background-color: #1F5EA9; */\r\n  background-color: #6DA942;\r\n  height: 70px;\r\n  width: 35px;\r\n  border: none;\r\n  color: #fff;\r\n  font-size: 200%;\r\n  margin: 0 3px;\r\n  border-radius: 3px;\r\n}\r\n\r\n.points-reps h6 {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  text-align: center !important;\r\n}\r\n\r\n.bar-div-core {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  width: 90%;\r\n}\r\n\r\n.bar-div,\r\n.bar-div-top,\r\n.bar-div-bottom {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  -webkit-justify-content: flex-end;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n}\r\n\r\n.bar-div-top,\r\n.bar-div-bottom {\r\n  margin: 0;\r\n  color: #417EBF;\r\n  font-size: 80%;\r\n  font-weight: bold;\r\n}\r\n\r\n.bar-div-num {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 100%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  color: #6DA942;\r\n  /* background-color:  */\r\n}\r\n\r\n.bar-div-bottom .bar-div-num {\r\n  top: 15px;\r\n}\r\n\r\n.bar {\r\n  position: relative;\r\n  background-color: #CCCCCC;\r\n  height: 30px;\r\n  width: 30%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.bar-one {\r\n  border-bottom-left-radius: 30px;\r\n  border-top-left-radius: 30px;\r\n}\r\n\r\n.bar-two {\r\n  margin: 0 5px;\r\n}\r\n\r\n.bar-three {\r\n  border-bottom-right-radius: 30px;\r\n  border-top-right-radius: 30px;\r\n}\r\n\r\n.bar-div-top .bar,\r\n.bar-div-bottom .bar {\r\n  background-color: transparent;\r\n  /* height: 0; */\r\n}\r\n\r\n.last-bar-num {\r\n  left: 85%;\r\n}\r\n\r\n.main-container .redeem-div {\r\n  position: relative;\r\n  display: block;\r\n  width: 100% !important;\r\n  margin: 0;\r\n  padding: 10px 0;\r\n}\r\n\r\n.redeem-head {\r\n  position: relative;\r\n  display: block;\r\n  margin: 20px auto;\r\n  text-align: center;\r\n  font-size: 200%;\r\n  color: #666;\r\n}\r\n\r\n.redeem-points-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  width: 100%;\r\n  margin : 0;\r\n}\r\n\r\n.redeem-core {\r\n  position: relative;\r\n  display: block;\r\n  height: auto;\r\n  /* width: 350px; */\r\n}\r\n\r\n.redeem-top {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  height: 10%;\r\n  margin: 0;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  background-color: #fff;\r\n  color: #666;\r\n  font-weight: bold;\r\n  font-size: 150%;\r\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.redeem-main {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  height: 88%;\r\n  margin: 0;\r\n  margin-top: 2%;\r\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.redeem-amount {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  width: 100%;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 300px;\r\n  /* padding: 30px 0; */\r\n  margin: 0;\r\n  background-color: #fff;\r\n}\r\n\r\n.redeem-number {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 200px;\r\n  width: 200px;\r\n  border-radius: 50%;\r\n  /* background-color: #49AAFF; */\r\n  background-color: #6DA942;;\r\n  color: #fff;\r\n  font-size: 400%;\r\n}\r\n\r\n.red-num-in {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  -webkit-align-items: flex-start;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-justify-content: flex-start;\r\n}\r\n\r\n.redeem-dollar-sign {\r\n  font-size: 50%;\r\n}\r\n\r\n.redeem-dets {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  width: 100%;\r\n  height: 40%;\r\n  margin: 0;\r\n  padding: 10px 30px;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  -webkit-align-items: flex-start;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  background-color: #fff;\r\n}\r\n\r\n.redeem-dets h6 {\r\n  margin: 0 0 5px 0;\r\n  font-size: 105%;\r\n  color: #3e3e3e;\r\n  font-weight: bold;\r\n}\r\n\r\n.points-index-bar {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 7px;\r\n  border-radius: 7px;\r\n  background-color: #eee;\r\n  margin: 20px auto 2px auto;\r\n}\r\n\r\n.points-away {\r\n  font-size: 70%;\r\n  color: #666;\r\n  margin-top: 3px;\r\n}\r\n\r\n.redeem-btn {\r\n  height: 40px;\r\n  width: 150px;\r\n  border: none;\r\n  background-color: #CCCCCC;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  font-weight: bold;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rewards/rewards.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header for mobiles and smaller devices -->\r\n<header class=\"mob-main-header visible-sm visible-xs\">\r\n    <button type=\"button\" class=\"mob-menu-trig-btn\">\r\n                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n            </button>\r\n    <div class=\"mob-main-logo\">\r\n        <img src=\"../../assets/logo/logo_black.png\" routerLink='/home'>\r\n    </div>\r\n</header>\r\n<!-- For large screens -->\r\n<header class=\"main-header visible-md visible-lg\">\r\n    <div class=\"container\">\r\n        <div class=\"main-logo pull-left\" routerLink='/home'>\r\n            <img src=\"../../assets/logo/logo_black.png\">\r\n        </div>\r\n        <ul class=\"list-inline det-ul visible-xs visible-sm pull-right\">\r\n            <!-- <li>\r\n                <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp;</button>\r\n            </li> -->\r\n        </ul>\r\n        <ul class=\"list-inline det-ul pull-left visible-md visible-lg\">\r\n            <!-- <li>\r\n                <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp;</button>\r\n            </li> -->\r\n            <li>\r\n                <a routerLink='/menu' class=\"dets-div-btns\" id=\"our-menu-btn\">Today, {{dateForHeader}}</a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"scroll-login-div pull-right  visible-md visible-lg\">\r\n            <ul class=\"list-inline sc-ul\">\r\n                <li class=\"login-trig-div\" *ngIf=\"!authService.loggedIn()\">\r\n                    <button type=\"button\" class=\"login-signup-trig-btn dets-div-btns\" (click)=\"appComponent.loginSignupTrigger()\">Log in/Sign up</button>\r\n                </li>\r\n                <li class=\"account-trig-div\" *ngIf=\"authService.loggedIn()\">\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\">{{userName}}&nbsp;<i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i></button>\r\n                        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\r\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings'>My Profile</a></li>\r\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/my-orders'>My Orders</a></li>\r\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/address'>Saved Address</a></li>\r\n                            <!-- <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/payments'>Payments</a></li> -->\r\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/reward-points'>Reward Points</a></li>\r\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/change-password'>Change Password</a></li>\r\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"appComponent.onLogoutClick()\">Logout</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </li>\r\n                <li class=\"head-basket\" routerLink='/checkout'>\r\n                    Basket &nbsp; <span class=\"head-basket-num\">{{basket_num}}</span> \r\n                </li>\r\n            </ul>\r\n\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n</header>\r\n    <div class=\"main-container\">\r\n        <div class=\"container\">\r\n            <div class=\"rewards-title-img-div\">\r\n                <h2>Got points? Get rewards</h2>\r\n                <!-- <h6>Earn 1 point for every $1 spent</h6> -->\r\n            </div>\r\n            <div class=\"rewards-main\">\r\n                <div class=\"container\">\r\n\r\n                    <!-- Left rewards section -->\r\n                    <div class=\"right-rew-section pull-left\">\r\n\r\n                        <ul>\r\n                            <li>\r\n                                <p>\r\n                                    Earn Points for every Order and (Writing a letter or sharing a thought or solving a puzzle), which you can redeem on your future orders. \r\n                                </p> \r\n                            </li>\r\n                            <li>\r\n                                <p>\r\n                                    For every Rs.10 spent you will receive 1 point. 10 Points = Rs. 1/-\r\n                                </p>\r\n                            </li>\r\n                            <li>\r\n                                <p>\r\n                                    Get 15 points by sharing a thought (min of 100 words) on any topic or solving a puzzle or writing a letter.\r\n                                </p>\r\n                            </li>\r\n                            <li>\r\n                                <p>\r\n                                    Points are added for pen to paper, returning while you receive the next order.\r\n                                </p>\r\n                            </li>\r\n                            <li>\r\n                                <p>\r\n                                    Redeem them when you reach to 100 points.\r\n                                </p>\r\n                            </li>\r\n                            <li>\r\n                                <p>\r\n                                    The points are valid for 6 months from the day they are assigned to you.\r\n                                </p>\r\n                            </li>\r\n                            <li>\r\n                                <p>\r\n                                    You can check your point’s history on your fysu dashboard.\r\n                                </p>\r\n                            </li>\r\n                            <li>\r\n                                <p>\r\n                                    If you cannot earn/redeem points, please drop us an email at info@fysu.in or give us a call at +91 9393290390\r\n                                </p>\r\n                            </li>\r\n                        </ul>\r\n\r\n                    </div>\r\n                    \r\n                    <!-- Right rewards section-->\r\n                    \r\n                    <div class=\"left-rew-section pull-right\">\r\n                        \r\n                        <div class=\"points-div\">\r\n                            <div class=\"points-reps\">\r\n                                <div class=\"points-rep\">\r\n                                    0\r\n                                </div>\r\n                                <div class=\"points-rep\">\r\n                                    0\r\n                                </div>\r\n                                <div class=\"points-rep\">\r\n                                    0\r\n                                </div>\r\n                                <div class=\"points-rep\">\r\n                                    0\r\n                                </div>\r\n                            </div>\r\n                            <h6>Points Earned</h6>\r\n                        </div>\r\n                        <br>\r\n\r\n                        <div class=\"bar-div-core\">\r\n                            <div class=\"bar-div-top\">\r\n                                <div class=\"bar bar-one\">\r\n                                    <span class=\"bar-div-num\"> &#8377;10 </span>\r\n                                </div>\r\n                                <div class=\"bar bar-two\">\r\n                                    <span class=\"bar-div-num\">&#8377;20</span>\r\n                                </div>\r\n                                <div class=\"bar bar-three\">\r\n                                    <span class=\"bar-div-num last-bar-num\">&#8377;40</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"bar-div\">\r\n                                \r\n                                <div class=\"bar bar-one\">\r\n                                    \r\n                                </div>\r\n                                <div class=\"bar bar-two\">\r\n                                    \r\n                                </div>\r\n                                <div class=\"bar bar-three\">\r\n                                    \r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"bar-div-bottom\">\r\n                                <div class=\"bar bar-one\">\r\n                                    <span class=\"bar-div-num\">100</span>\r\n                                </div>\r\n                                <div class=\"bar bar-two\">\r\n                                    <span class=\"bar-div-num\">190</span>\r\n                                </div>\r\n                                <div class=\"bar bar-three\">\r\n                                    <span class=\"bar-div-num last-bar-num\">360</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"clearfix\"></div>\r\n                    <div class=\"redeem-div container\">\r\n                        <h3 class=\"redeem-head\">Redeem your points</h3>\r\n                        <div class=\"redeem-points-div row\">\r\n                            <div class=\"redeem-core col-md-4\">\r\n                                <div class=\"redeem-top\">\r\n                                    <h6>100 Point Rewards</h6>\r\n                                </div>\r\n                                <div class=\"redeem-main\">\r\n                                    \r\n                                    <div class=\"redeem-amount\">\r\n                                        <div class=\"redeem-number\">\r\n\r\n                                            \r\n\r\n                                            <div class=\"red-num-in\"><div class=\"redeem-dollar-sign\">&#8377;</div><span class=\"redee\">10</span></div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"redeem-core col-md-4\">\r\n                                <div class=\"redeem-top\">\r\n                                    <h6>190 Point Rewards</h6>\r\n                                </div>\r\n                                <div class=\"redeem-main\">\r\n                                    \r\n                                    <div class=\"redeem-amount\">\r\n                                        <div class=\"redeem-number\">\r\n                                            <div class=\"red-num-in\"><div class=\"redeem-dollar-sign\">&#8377;</div><span class=\"redee\">20</span></div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"redeem-core col-md-4\">\r\n                                <div class=\"redeem-top\">\r\n                                    <h6>360 Point Rewards</h6>\r\n                                </div>\r\n                                <div class=\"redeem-main\">\r\n                                    \r\n                                    <div class=\"redeem-amount\">\r\n                                        <div class=\"redeem-number\">\r\n                                            <div class=\"red-num-in\"><div class=\"redeem-dollar-sign\">&#8377;</div><span class=\"redee\">40</span></div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>"

/***/ }),

/***/ "../../../../../src/app/rewards/rewards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RewardsComponent = (function () {
    function RewardsComponent(router, title, appComponent, authService, datePipe) {
        this.router = router;
        this.title = title;
        this.appComponent = appComponent;
        this.authService = authService;
        this.datePipe = datePipe;
        this.today_one = __WEBPACK_IMPORTED_MODULE_6_moment__();
    }
    RewardsComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.title.setTitle('Fysu - Rewards');
        this.dateForHeader = this.datePipe.transform(this.today_one, 'EEE, MMM d');
        this.basket_num = parseInt(localStorage.getItem('basket_number'));
        if (this.basket_num == undefined || this.basket_num == null || this.basket_num == 0 || isNaN(this.basket_num) == true) {
            // redirect to menu
            this.basket_num = 0;
            // alert('no');
        }
        else {
            // this.basket_num;
        }
        if (this.authService.loggedIn() == true) {
            var user = this.authService.getUserFromLocal();
            var user_parsed = JSON.parse(user);
            this.userEmail = user_parsed.email;
            this.userName = user_parsed.name;
            this.companyName = user_parsed.company_name;
            this.userMobile = user_parsed.mobile;
            this.userId = user_parsed.id;
        }
        else {
            this.basket_num = 0;
        }
    };
    return RewardsComponent;
}());
RewardsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rewards',
        template: __webpack_require__("../../../../../src/app/rewards/rewards.component.html"),
        styles: [__webpack_require__("../../../../../src/app/rewards/rewards.component.css"), __webpack_require__("../../../../../src/app/menu/menu.component.css"), __webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]) === "function" && _e || Object])
], RewardsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=rewards.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/admin-auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminAuthService = (function () {
    function AdminAuthService(http) {
        this.http = http;
    }
    AdminAuthService.prototype.registerAdmin = function (admin) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3700/admin/register', admin, { headers: header }).map(res => res.json());
        return this.http.post('admin/register', admin, { headers: header }).map(function (res) { return res.json(); });
    };
    AdminAuthService.prototype.getAdmins = function () {
        // return this.http.get('http://localhost:3700/admin/get-admins').map(res => res.json());
        return this.http.get('admin/get-admins').map(function (res) { return res.json(); });
    };
    AdminAuthService.prototype.deleteAdmin = function (admin_id) {
        // return this.http.delete('http://localhost:3700/admin/delete-admin/'+admin_id).map(res => res.json());
        return this.http.delete('admin/delete-admin/' + admin_id).map(function (res) { return res.json(); });
    };
    AdminAuthService.prototype.authenticateAdmin = function (admin) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3700/admin/authenticate', admin, { headers: header }).map(res => res.json());
        return this.http.post('admin/authenticate', admin, { headers: header }).map(function (res) { return res.json(); });
    };
    AdminAuthService.prototype.getProfile = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        this.loadToken();
        header.append('Authorization', this.authToken);
        // return this.http.get('http://localhost:3700/admin/profile', { headers: header }).map(res => res.json());
        return this.http.get('admin/profile', { headers: header }).map(function (res) { return res.json(); });
    };
    AdminAuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('admin_id_token');
        this.authToken = token;
    };
    AdminAuthService.prototype.storeAdminData = function (token, admin) {
        localStorage.setItem('admin_id_token', token);
        localStorage.setItem('admin', JSON.stringify(admin));
        this.authToken = token;
        this.admin = admin;
    };
    AdminAuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('admin_id_token');
    };
    AdminAuthService.prototype.logout = function () {
        this.authToken = null;
        this.admin = null;
        localStorage.clear();
    };
    return AdminAuthService;
}());
AdminAuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AdminAuthService);

var _a;
//# sourceMappingURL=admin-auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/admin-services.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminServicesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// http://localhost:3700/
var AdminServicesService = (function () {
    function AdminServicesService(http) {
        this.http = http;
    }
    // Add Category Page
    // Adding a category
    AdminServicesService.prototype.addCategory = function (newData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        // return this.http.post('http://localhost:3700/admin/add-category', newData, { headers: headers }).map(res => res.json());
        return this.http.post('admin/add-category', newData, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Delete cateogry
    AdminServicesService.prototype.deleteCategory = function (id) {
        // return this.http.delete('http://localhost:3700/admin/delete-category/' + id).map(res => res.json());
        return this.http.delete('admin/delete-category/' + id).map(function (res) { return res.json(); });
    };
    // Get Categories
    AdminServicesService.prototype.getCategories = function () {
        // return this.http.get('http://localhost:3700/admin/get-categories').map(res => res.json());
        return this.http.get('admin/get-categories').map(function (res) { return res.json(); });
    };
    // Get Orders
    AdminServicesService.prototype.getOrders = function () {
        // return this.http.get('http://localhost:3700/admin/get-orders').map(res => res.json());
        return this.http.get('admin/get-orders').map(function (res) { return res.json(); });
    };
    // Add Items Page
    // Add Item
    AdminServicesService.prototype.addItem = function (cat_id, sub_name, item_name, item_price, item_img) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        var Data = {
            'cat_id': cat_id,
            'sub_name': sub_name,
            'item_name': item_name,
            'item_price': item_price,
            'item_img': item_img
        };
        // return this.http.post('http://localhost:3700/admin/add-item', Data, { headers: headers }).map(res => res.json());
        return this.http.post('admin/add-item', Data, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Get all items
    AdminServicesService.prototype.getItems = function (cat_id, sub_name) {
        // return this.http.get('http://localhost:3700/admin/get-items/' + cat_id + '/' + sub_name).map(res => res.json());
        return this.http.get('admin/get-items/' + cat_id + '/' + sub_name).map(function (res) { return res.json(); });
    };
    // Delete Items
    AdminServicesService.prototype.deleteItem = function (item_id) {
        // return this.http.delete('http://localhost:3700/admin/delete-item/' + item_id).map(res => res.json());
        return this.http.delete('admin/delete-item/' + item_id).map(function (res) { return res.json(); });
    };
    // Add Sub Categories Page
    // Add subcategory
    AdminServicesService.prototype.addSub = function (subData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        // return this.http.post('http://localhost:3700/admin/add-sub-category', subData, { headers: headers }).map(res => res.json());
        return this.http.post('admin/add-sub-category', subData, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Get subs in a category
    AdminServicesService.prototype.getSubs = function (catId) {
        // return this.http.get('http://localhost:3700/admin/get-subs/' + catId).map(res => res.json());
        return this.http.get('admin/get-subs/' + catId).map(function (res) { return res.json(); });
    };
    // Delet Sub from category
    AdminServicesService.prototype.deleteSubFromCategory = function (subName, cat_id) {
        // return this.http.delete('http://localhost:3700/admin/delete-sub-category/' + subName + '/' + cat_id).map(res => res.json());
        return this.http.delete('admin/delete-sub-category/' + subName + '/' + cat_id).map(function (res) { return res.json(); });
    };
    // Add Menu Page
    // Getting items by sub category
    AdminServicesService.prototype.getDateItems = function (cat_id, sub_name, date) {
        // return this.http.get('http://localhost:3700/admin/get-date-items/' + cat_id + '/' + sub_name + '/' + date).map(res => res.json());
        return this.http.get('admin/get-date-items/' + cat_id + '/' + sub_name + '/' + date).map(function (res) { return res.json(); });
    };
    // post schedule
    AdminServicesService.prototype.postSchedule = function (schArray, remArray) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        var schJSON = JSON.stringify(schArray);
        var schData = { schArray: schArray, remArray: remArray };
        // return this.http.post('http://localhost:3700/admin/post-dates', schData, { headers: headers }).map(res => res.json());
        return this.http.post('admin/post-dates', schData, { headers: headers }).map(function (res) { return res.json(); });
    };
    AdminServicesService.prototype.getDates = function () {
        // return this.http.get('http://localhost:3700/admin/get-all-dates').map(res => res.json());
        return this.http.get('admin/get-all-dates').map(function (res) { return res.json(); });
    };
    AdminServicesService.prototype.deleteDate = function (date_id) {
        // return this.http.delete('http://localhost:3700/admin/delete-date/' + date_id).map(res => res.json());
        return this.http.delete('admin/delete-date/' + date_id).map(function (res) { return res.json(); });
    };
    // View Orders Page
    // Reward Page
    // Get all users
    AdminServicesService.prototype.getUsers = function () {
        // return this.http.get('http://localhost:3700/admin/get-users').map(res => res.json());
        return this.http.get('admin/get-users').map(function (res) { return res.json(); });
    };
    // Get User from userId
    AdminServicesService.prototype.getUserFromId = function (user_id) {
        // return this.http.get('http://localhost:3700/admin/get-user-from-id/'+user_id).map(res => res.json());
        return this.http.get('admin/get-user-from-id/' + user_id).map(function (res) { return res.json(); });
    };
    AdminServicesService.prototype.getUserOrders = function (user_id) {
        // return this.http.get('http://localhost:3700/users/get-user-orders/' + user_id).map(res => res.json());
        return this.http.get('users/get-user-orders/' + user_id).map(function (res) { return res.json(); });
    };
    AdminServicesService.prototype.postRewards = function (email, points) {
        // return this.http.get('http://localhost:3700/admin/post-rewards/' + email + '/' + points ).map(res => res.json());
        return this.http.get('admin/post-rewards/' + email + '/' + points).map(function (res) { return res.json(); });
    };
    return AdminServicesService;
}());
AdminServicesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AdminServicesService);

var _a;
//# sourceMappingURL=admin-services.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getLocation = function (lat, long) {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&key=AIzaSyA87IC9OaLzSxRfYOFjVzXF6ObsDGYFWeQ').map(function (response) { return response.json(); });
    };
    AuthService.prototype.getUserFromLocal = function () {
        var user = localStorage.getItem('user');
        // user = JSON.parse(user);
        return user;
    };
    AuthService.prototype.updateUser = function (user) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3700/users/update-user', user, { headers: header }).map(res => res.json());
        return this.http.post('users/update-user', user, { headers: header }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.updatePassword = function (pwd) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3700/users/update-pwd', pwd, { headers: header }).map(res => res.json());
        return this.http.post('users/update-pwd', pwd, { headers: header }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.sendOtp = function (mobile) {
        // return this.http.get('http://localhost:3700/users/send-otp/'+ mobile).map(res=>res.json());
        return this.http.get('users/send-otp/' + mobile).map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerUser = function (user) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3700/users/register', user, { headers: header }).map(res => res.json());
        return this.http.post('users/register', user, { headers: header }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateMobile = function (mobile) {
        // return this.http.get('http://localhost:3700/users/find-mobile/'+ mobile).map(res=>res.json());
        return this.http.get('users/find-mobile/' + mobile).map(function (res) { return res.json(); });
    };
    // Delete cateogry
    AuthService.prototype.authenticateEmail = function (email) {
        // return this.http.get('http://localhost:3700/users/find-email/' + email).map(res => res.json());
        return this.http.get('users/find-email/' + email).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3700/users/authenticate', user, { headers: header }).map(res => res.json());
        return this.http.post('users/authenticate', user, { headers: header }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    // Save user address
    AuthService.prototype.saveAddress = function (address) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3700/users/save-address', address, { headers: header }).map(res => res.json());
        return this.http.post('users/save-address', address, { headers: header }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteAddress = function (address) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3700/users/delete-address', address, { headers: header }).map(res => res.json());
        return this.http.post('users/delete-address', address, { headers: header }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateAddress = function (address) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3700/users/update-address', address, { headers: header }).map(res => res.json());
        return this.http.post('users/delete-address', address, { headers: header }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUserAddressses = function (user_id) {
        // return this.http.get('http://localhost:3700/users/get-address/' + user_id).map(res => res.json());
        return this.http.get('users/get-address/' + user_id).map(function (res) { return res.json(); });
    };
    AuthService.prototype.postOrder = function (order) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3700/users/post-order', order, { headers: header }).map(res => res.json());
        return this.http.post('users/post-order', order, { headers: header }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUserRewards = function (user_id) {
        // return this.http.get('http://localhost:3700/users/get-user-rewards/' + user_id).map(res => res.json());
        return this.http.get('users/get-user-rewards/' + user_id).map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/get-menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetMenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetMenuService = (function () {
    function GetMenuService(http) {
        this.http = http;
    }
    GetMenuService.prototype.getCats = function () {
        // return this.http.get('http://localhost:3700/admin/get-categories').map(res => res.json());
        return this.http.get('admin/get-categories').map(function (res) { return res.json(); });
    };
    // Getting roti items
    GetMenuService.prototype.getRotiItems = function () {
        // return this.http.get('http://localhost:3700/admin/get-roti-items').map(res => res.json());
        return this.http.get('admin/get-roti-items').map(function (res) { return res.json(); });
    };
    GetMenuService.prototype.getDatesMenu = function (date, last_date) {
        // return this.http.get('http://localhost:3700/admin/get-dates-menu/' + date + '/' + last_date).map(res => res.json());
        return this.http.get('admin/get-dates-menu/' + date + '/' + last_date).map(function (res) { return res.json(); });
    };
    GetMenuService.prototype.getItemDetails = function (item_id) {
        // return this.http.get('http://localhost:3700/admin/get-item-details/' + item_id).map(res => res.json());
        return this.http.get('admin/get-item-details/' + item_id).map(function (res) { return res.json(); });
    };
    return GetMenuService;
}());
GetMenuService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], GetMenuService);

var _a;
//# sourceMappingURL=get-menu.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUserFromLocal = function () {
        var user = localStorage.getItem('user');
        // user = JSON.parse(user);
        return user;
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateMobile = function (mobile) {
        return /^\d{10}$/.test(mobile);
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateInput = function (string) {
        if (string == undefined || string == null || string == '') {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sc-ul{\r\n  margin-bottom: 0px !important;\r\n}\r\n.main-container {\r\n  position: relative;\r\n  display: block;\r\n  background-color: #F2F5F6;\r\n  min-height: 75vh;\r\n  padding-bottom: 30px;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n/* Change pwd btn in profile */\r\n\r\n.change-pwd-btn {\r\n  color: #F04F5E !important;\r\n  transition: all 0.2s ease-in;\r\n}\r\n\r\n.change-pwd-btn:hover {\r\n  color: #353637 !important;\r\n}\r\n\r\n\r\n/*  Left Index  */\r\n\r\n.left-index-div {\r\n  position: relative;\r\n  display: block;\r\n  width: 20%;\r\n}\r\n\r\n.left-index {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n}\r\n\r\n.left-index li {\r\n  padding: 15px 20px;\r\n  font-size: 100%;\r\n  border-bottom: 1px solid #F2F5F6;\r\n  transition: all 0.2s ease-in;\r\n}\r\n\r\n.left-index a {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n.left-index a:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.left-index li h2 {\r\n  font-size: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.left-index li:hover {\r\n  cursor: pointer;\r\n  background-color: #F2F5F6;\r\n}\r\n\r\n.selected-index-item {\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n/* Right Details */\r\n\r\n.right-dets {\r\n  position: relative;\r\n  display: block;\r\n  width: 78%;\r\n  /* font-size: 130%; */\r\n}\r\n\r\n.det-title-div {\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  padding: 15px 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.det-title {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 100%;\r\n  font-weight: bold;\r\n}\r\n\r\n.dets-core {\r\n  position: relative;\r\n  display: block;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  padding: 5px 20px;\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n\r\n.dets-core label {\r\n  display: block;\r\n  text-align: left;\r\n  font-size: 105%;\r\n  font-weight: normal;\r\n  margin: 10px auto;\r\n}\r\n\r\n.dets-core .inputs {\r\n  width: 50%;\r\n  height: 40px;\r\n  border: 2px solid #F3F3F3;\r\n  border-radius: 5px;\r\n  padding: 0 10px;\r\n}\r\n\r\n.save-btns-div {\r\n  position: relative;\r\n  margin: 20px 0;\r\n}\r\n\r\n.save-btns {\r\n  border-radius: 5px;\r\n  height: 45px;\r\n  width: 80px;\r\n  border: none;\r\n  background-color: #6DA942;\r\n  color: #fff;\r\n  margin-right: 15px;\r\n  transition: all 0.2s ease-out;\r\n}\r\n.save-btns:hover{\r\n  background-color: #588835;\r\n}\r\n\r\n\r\n/* Address page */\r\n\r\n.addresses-core {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  width: 100%;\r\n}\r\n\r\n.address-item,\r\n.add-address {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  border-radius: 4px;\r\n  padding: 20px;\r\n  width: 300px;\r\n  height: 200px;\r\n  margin: 20px auto;\r\n}\r\n\r\n.address-item {\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.address-top {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 20%;\r\n  width: 100%;\r\n  color: #c6c6c6;\r\n  margin: 0;\r\n}\r\n\r\n.address-top i {\r\n  cursor: pointer;\r\n}\r\n\r\n.address-name {\r\n  color: #fa0000;\r\n}\r\n\r\n.address {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  -webkit-align-items: flex-start;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  height: 80%;\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n\r\n.address h6 {\r\n  font-size: 110%;\r\n}\r\n\r\n.add-address {\r\n  background-color: #DCDCDC;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);\r\n  transition: all 0.2s ease-out;\r\n}\r\n\r\n.add-address:hover {\r\n  cursor: pointer;\r\n  background-color: #e3e3e3;\r\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.add-address h5 {\r\n  font-size: 120%;\r\n}\r\n\r\n.add-address i {\r\n  font-size: 200%;\r\n}\r\n\r\n.bottom-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  width: 100%;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-justify-content: space-between;\r\n}\r\n\r\n.change-pwd-btn {\r\n  border: none;\r\n  /* border-bottom: 1px solid #00f; */\r\n  background: transparent;\r\n  color: #0000af;\r\n}\r\n\r\n\r\n/* Extra Small Devices, .visible-xs-* */\r\n\r\n\r\n/* @media (max-width: 480px) {} */\r\n\r\n@media (max-width: 767px) {\r\n  .main-footer {\r\n    margin-bottom: 40px;\r\n  }\r\n  .main-container {\r\n    padding-top: 80px;\r\n  }\r\n  .left-index-div {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    margin: 20px auto;\r\n  }\r\n  .left-index-div .left-index {\r\n    position: relative;\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 90%;\r\n  }\r\n  .right-dets {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    margin: 20px auto;\r\n  }\r\n  .right-dets .det-title-div,\r\n  .right-dets .dets-core {\r\n    position: relative;\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 90%;\r\n  }\r\n  .dets-core .inputs {\r\n    width: 80%;\r\n  }\r\n  .bottom-div .save-btns-div {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    margin: 20px auto;\r\n  }\r\n  .bottom-div .save-btns-div .save-btns {\r\n    width: 40%;\r\n  }\r\n}\r\n\r\n\r\n/* Small Devices, .visible-sm-* */\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .left-index-div {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    margin: 20px auto;\r\n  }\r\n  .left-index-div .left-index {\r\n    position: relative;\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 90%;\r\n  }\r\n  .right-dets {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    margin: 20px auto;\r\n  }\r\n  .right-dets .det-title-div,\r\n  .right-dets .dets-core {\r\n    position: relative;\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 90%;\r\n  }\r\n  .dets-core .inputs {\r\n    width: 80%;\r\n  }\r\n  .bottom-div .save-btns-div {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    margin: 20px auto;\r\n  }\r\n  .bottom-div .save-btns-div .save-btns {\r\n    width: 40%;\r\n  }\r\n}\r\n\r\n\r\n/* Medium Devices, .visible-md-* */\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {}\r\n\r\n\r\n/* Large Devices, .visible-lg-* */\r\n\r\n@media (min-width: 1200px) {}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mob-menu visible-sm visible-xs\">\r\n  <ul class=\"list-unstyled\">\r\n    <li class=\"reward-pts-trig-btn\">\r\n      REWARDS\r\n    </li>\r\n  </ul>\r\n</div>\r\n<!-- Header for mobiles and smaller devices -->\r\n<header class=\"mob-main-header visible-sm visible-xs\">\r\n  <button type=\"button\" class=\"mob-menu-trig-btn\">\r\n                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n            </button>\r\n  <div class=\"mob-main-logo\" routerLink='/home'>\r\n    <img src=\"../assets/logo/logo_black.png\">\r\n  </div>\r\n</header>\r\n<header class=\"main-header visible-md visible-lg\">\r\n  <div class=\"container\">\r\n    <div class=\"main-logo pull-left\" routerLink='/home'>\r\n      <img src=\"../../assets/logo/logo_black.png\">\r\n    </div>\r\n    <ul class=\"list-inline det-ul pull-left visible-md visible-lg\">\r\n        <!-- <li>\r\n            <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp;</button>\r\n        </li> -->\r\n        <li>\r\n            <a routerLink='/menu' class=\"dets-div-btns\" id=\"our-menu-btn\">Today, {{dateForHeader}}</a>\r\n        </li>            \r\n    </ul>\r\n    <div class=\"scroll-login-div pull-right\">\r\n        <ul class=\"list-inline sc-ul\">\r\n            <li class=\"account-trig-div\" *ngIf=\"authService.loggedIn()\">\r\n              <div class=\"dropdown\">\r\n                <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\">{{userName}}&nbsp;<i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i></button>\r\n                <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\r\n                  <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings'>My Profile</a></li>\r\n                  <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/my-orders'>My Orders</a></li>\r\n                  <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/address'>Saved Address</a></li>\r\n                  <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/reward-points'>Reward Points</a></li>\r\n                  <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/change-password'>Change Password</a></li>\r\n                  <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"onLogoutClick()\" routerLink=''>Logout</a></li>\r\n                </ul>\r\n              </div>\r\n            </li>\r\n            <li class=\"head-basket\" routerLink='/checkout'>\r\n              Basket &nbsp; <span class=\"head-basket-num\">{{basket_num}}</span> \r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n</header>\r\n<div class=\"main-container\">\r\n  <div class=\"container\">\r\n\r\n    <!-- Left index -->\r\n    <div class=\"left-index-div pull-left\">\r\n      <div class=\"left-index\">\r\n        <ul class=\"list-unstyled\">\r\n          <a routerLink='profile'>\r\n            <li class=\"left-index-items selected-index-item\">\r\n              <h2>My Profile</h2>\r\n            </li>\r\n          </a>\r\n          <a routerLink='my-orders'>\r\n            <li class=\"left-index-items\">\r\n              <h2>My Orders</h2>\r\n            </li>\r\n          </a>\r\n          <a routerLink='address'>\r\n            <li class=\"left-index-items\">\r\n              <h2>Saved Address</h2>\r\n            </li>\r\n          </a>\r\n          <!-- <a routerLink='payments'>\r\n            <li class=\"left-index-items\">\r\n              <h2>Payments</h2>\r\n            </li>\r\n          </a> -->\r\n          <a routerLink='reward-points'>\r\n            <li class=\"left-index-items\">\r\n              <h2>Reward Points</h2>\r\n            </li>\r\n          </a>\r\n          <a routerLink='change-password'>\r\n            <li class=\"left-index-items\">\r\n              <h2>Change Password</h2>\r\n            </li>\r\n          </a>\r\n          <li class=\"left-index-items\" (click)=\"onLogoutClick()\">\r\n            <h2>Logout</h2>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Right Details -->\r\n    <div class=\"right-dets pull-right\">\r\n      <router-outlet>\r\n\r\n      </router-outlet>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_service__ = __webpack_require__("../../../../../src/app/services/user-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SettingsComponent = (function () {
    function SettingsComponent(router, title, authService, userService, datePipe) {
        this.router = router;
        this.title = title;
        this.authService = authService;
        this.userService = userService;
        this.datePipe = datePipe;
        this.today_one = __WEBPACK_IMPORTED_MODULE_6_moment__();
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Settings');
        this.dateForHeader = this.datePipe.transform(this.today_one, 'EEE, MMM d');
        var user = this.authService.getUserFromLocal();
        var user_parsed = JSON.parse(user);
        this.userEmail = user_parsed.email;
        this.userName = user_parsed.name;
        this.companyName = user_parsed.company_name;
        this.userMobile = user_parsed.mobile;
        this.userId = user_parsed.id;
        this.basket_num = parseInt(localStorage.getItem('basket_number'));
        if (this.basket_num == undefined || this.basket_num == null || this.basket_num == 0 || isNaN(this.basket_num) == true) {
            // redirect to menu
            this.basket_num = 0;
            // alert('no');
        }
        else {
            // this.basket_num;
        }
    };
    SettingsComponent.prototype.onLogoutClick = function () {
        // alert('reached');
        this.authService.logout();
        this.router.navigate(['/home']);
        return false;
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css"), __webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]) === "function" && _e || Object])
], SettingsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/terms/terms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".web-sec-heads{\r\n    position: relative;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    color: #000;\r\n    font-size: 200%;\r\n}\r\n.con-section .container{\r\n    text-align: left !important;\r\n    width: 90%;\r\n}\r\nul{\r\n    margin: 0;\r\n    padding: 0;\r\n    padding-left: 20px;\r\n}\r\nli{\r\n    margin: 0;\r\n}\r\nh3,h4{\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    text-align: left !important;\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header for mobiles and smaller devices -->\r\n<header class=\"mob-main-header visible-sm visible-xs\">\r\n  <button type=\"button\" class=\"mob-menu-trig-btn\">\r\n                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n            </button>\r\n  <div class=\"mob-main-logo\">\r\n    <img src=\"../../assets/logo/logo_black.png\">\r\n  </div>\r\n</header>\r\n<header class=\"main-header visible-md visible-lg\">\r\n  <div class=\"container\">\r\n    <div class=\"main-logo pull-left\" routerLink='/home'>\r\n      <img src=\"../../assets/logo/logo_black.png\">\r\n    </div>\r\n    <ul class=\"list-inline det-ul visible-xs visible-sm pull-right\">\r\n      <!-- <li>\r\n        <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp; <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i> </button>\r\n      </li> -->\r\n    </ul>\r\n    <ul class=\"list-inline det-ul pull-left visible-md visible-lg\">\r\n      <!-- <li>\r\n        <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp; <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i> </button>\r\n      </li> -->\r\n      <li>\r\n        <a routerLink='/menu' class=\"dets-div-btns\" id=\"our-menu-btn\">Today, {{dateForHeader}}</a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"scroll-login-div pull-right  visible-md visible-lg\">\r\n      <ul class=\"list-inline sc-ul\">\r\n        <li class=\"login-trig-div\" *ngIf=\"!authService.loggedIn()\">\r\n          <button type=\"button\" class=\"login-signup-trig-btn dets-div-btns\" (click)=\"appComponent.loginSignupTrigger()\">Log in/Sign up</button>\r\n        </li>\r\n        <li class=\"account-trig-div\" *ngIf=\"authService.loggedIn()\">\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\">{{userName}}&nbsp;<i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i></button>\r\n            <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings'>My Profile</a></li>\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/my-orders'>My Orders</a></li>\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/address'>Saved Address</a></li>\r\n              <!-- <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/payments'>Payments</a></li> -->\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/reward-points'>Reward Points</a></li>\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/change-password'>Change Password</a></li>\r\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"onLogoutClick()\">Logout</a></li>\r\n            </ul>\r\n          </div>\r\n        </li>\r\n        <li class=\"head-basket\" routerLink='/checkout'>\r\n          Basket &nbsp; <span class=\"head-basket-num\">{{basket_num}}</span> \r\n        </li>\r\n      </ul>\r\n\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n</header>\r\n<div class=\"con-section jumbotron\">\r\n    <h2 class=\"web-sec-heads\">TERMS AND CONDITIONS</h2>\r\n  <div class=\"container\">\r\n    <p>\r\n     Kindly go through these terms and conditions carefully before using the www.fysu.in website. These terms shall apply to your use of the website and all the associated services we may offer, whether directly through the website or otherwise.\r\n    </p>\r\n\r\n    <p>\r\n      The user must agree to the terms and conditions to avail the services offered at our website. These Terms shall apply to all visitors, users and others who access or use our service.\r\n    </p>\r\n    <p>\r\n     By accessing or using our website, you are abiding by these Terms &amp; Conditions. If you disagree with any part of the Terms &amp; Conditions then you may not access the website. Kindly check the Terms of Use for any amendments or updates to the terms and conditions regularly.\r\n    </p>\r\n    \r\n    <h3>General Conditions</h3>\r\n    <ul>\r\n      <li>\r\n          The purpose of the website is to provide a platform to deliver lunch, and to facilitate the ordering of lunch to be provided to you.\r\n      </li>\r\n      <li>\r\n         You can place your order by following the instructions provided on the website.\r\n      </li>\r\n      <li>\r\n          Once you place an order, you will receive a message confirming that your order has been placed. \r\n      </li>\r\n      <li>\r\n        You cannot cancel your order at fysu for same day delivery, no refund of the full purchase price. Cancellations and refunds are accepted for scheduled meals by calling our customer support team.\r\n      </li>\r\n      <li>\r\n         If you are dissatisfied for any reason, we're here to help. Just call us at +91 9393290390 or contact us via e-mail at info@fysu.in.\r\n      </li>\r\n      <li>\r\n        Cancellation of order for scheduled meals will be entertained till 12 hours before your delivery slot starts by email or by a call to customer service.\r\n      </li>\r\n      <li>\r\n         All meals are subject to availability. Your order is guaranteed once you receive a confirmation message from us.\r\n      </li>\r\n      <li>\r\n        You agree that delivery estimated time is just estimate and we are not liable for any variations (+/- 30 minutes) in the same.\r\n      </li>\r\n\r\n    </ul>\r\n\r\n    <h3>Returns and Refunds</h3>\r\n    <h4>Returns</h4>\r\n    <ul>\r\n      <li>\r\n         We will facilitate the return and replacement of items if you have received an incorrect order.\r\n      </li>\r\n      <li>\r\n        In case you wish to not have the items replaced, and you have already made the payment for such orders we will facilitate a full refund from Fysu.\r\n      </li>\r\n      <li>\r\n         As a general rule you shall not be entitled to cancel your order once you have received confirmation for the same day delivery.\r\n      </li>\r\n      <li>\r\n         We reserve the sole right to cancel your order in the following circumstance:\r\n          <ol>\r\n            <li>in the event of the designated address following outside the delivery zone offered by us.</li>\r\n            <li>failure to contact you by phone or email at the time of confirming the order booking.</li>\r\n            <li>failure to deliver your order due to lack of information, direction or authorization from you at the time of delivery; or\r\n            </li>\r\n            <li>\r\n              unavailability of all the items ordered by you at the time of booking the order; or failure due to reasons beyond our control or attributable to the Food service provider\r\n            </li>\r\n          </ol>\r\n      </li>\r\n\r\n    </ul>\r\n    <h4>Refunds</h4>\r\n    <ul>\r\n      <li>\r\n        You shall be entitled to a refund only if you pre-pay for your order at the time of placing your order on the Services and only in the event of any of the following circumstances:\r\n        <ul>\r\n          <li>\r\n             your order packaging has been tampered or damaged at the time of delivery;\r\n              <ol>\r\n                <li>Cancelling the order for scheduled meals by email or by calling to customer service before 12 hours when your delivery slot start\r\n                </li>\r\n                <li>\r\n                   you cancelling the order at the time of confirmation due to unavailability of the items you ordered for at the time of booking.\r\n                </li>\r\n              </ol>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n         Our decision on refunds shall be at our sole discretion and shall be final and binding.\r\n      </li>\r\n      <li>\r\n        All refund amounts shall be credited to your account within 5 business days in accordance with the terms that may be stipulated by the bank which has issued the credit / debit card.\r\n      </li>\r\n      <li>\r\n         In case of payment at the time of delivery, you will not be required to pay for:\r\n         <ol>\r\n           <li>\r\n             orders where the packaging has been tampered or damaged by us;\r\n           </li>\r\n           <li>\r\n             wrong order being delivered; or\r\n           </li>\r\n           <li>\r\n             items missing from your order at the time of delivery.\r\n           </li>\r\n         </ol>\r\n      </li>\r\n    </ul>\r\n\r\n    <h3>Governing Law</h3>\r\n    <p>\r\n      These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India and jurisdiction of Hyderabad, Telangana.\r\n    </p>\r\n    <h3>Acceptable Use Policy</h3>\r\n    <ul>\r\n      <li>\r\n        You agree not to use the website that causes damage to Fysu, whether reputational, security, financial, or otherwise hacking or other cyber threats, violating any rights, sending unauthorized spam, junk mail, compiling information about our users, interfering with our network infrastructure, introducing scripts or other programs to produce multiple accounts, generate multiple queries, or otherwise use the website for purposes other than the intended purpose.\r\n      </li>\r\n      <li>\r\n        Unless authorized by us, you agree not to copy, reproduce, distribute, post, or transmit in any form or by any means any of the content provided by the service.\r\n      </li>\r\n    </ul>\r\n    <h3>Electronic Communication</h3>\r\n    <p>When you visit our website (www.fysu.in) or send us mails, you consent to receive our regular promotional and order related e-mail and SMS. Once you place the order, we shall confirm you with the primary medium we will be using to communicate with you (either e-mail or SMS). You can always unsubscribe the daily email and SMS.</p>\r\n\r\n    <h3>\r\n       Fysu Reward Points\r\n    </h3>\r\n    <ul>\r\n      <li>\r\n        To avail of reward points a user needs to be a registered customer who has created an account through the \"Sign In\" tab on the website – fysu.in\r\n      </li>\r\n      <li>\r\n         You can redeem them when you reach to 100 points.\r\n      </li>\r\n      <li>\r\n         Reward points are valid for 6 months from the day they are assigned to you.\r\n      </li>\r\n      <li>\r\n        Fysu Food Networks Pvt Ltd (\"Fysu\") Reserves the right to change the terms, conditions and the reward points to be awarded at their discretion.\r\n      </li>\r\n    </ul>\r\n\r\n    <h3>\r\n       Changes to Terms & Conditions\r\n    </h3>\r\n    <p>\r\n      We reserve the rights to modify or update these Terms & Conditions any time without notice. Changes shall be effective immediately upon posting on the website. So, you are advised to review these Terms & Conditions every time upon placement of order. By accessing or using our website, you abide by the terms. If you do not agree to the new terms, kindly stop using the website.\r\n    </p>\r\n\r\n    <h3>\r\n       Indemnification, Disclaimers and Limitation on Liability\r\n    </h3>\r\n    <ul>\r\n      <li>\r\n        You agree to indemnify and hold us harmless - us, our team, affiliates, clients and suppliers from any claim or demand made by any third party arising out of breach of these Terms including attorneys’ fees and costs, your interactions with any Partner, or your violation of these Terms or applicable laws.\r\n      </li>\r\n      <li>\r\n        The service is provided “as-in” and “as available.” We expressly disclaim any express or implied warranties and conditions of any kind.\r\n      </li>\r\n      <li>\r\n        In no event shall we be liable to you or any third party for any lost profits or any indirect, consequential, exemplary, incidental, special or punitive damages arising from or relating to this agreement or your use of, or inability to use, the service, even if we have been advised of the possibility of such damages. You hereby release and forever discharge us (and our officers, employees, agents, successors, and assigns) from, and hereby waive and relinquish, each and every past, present and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature (including personal injuries, death, and property damage), that has arisen or arises directly or indirectly out of, or relates directly or indirectly to, any interactions with, or act or omission of, other website users.\r\n      </li>\r\n\r\n    </ul>\r\n\r\n    <h3>\r\n       Agreement\r\n    </h3>\r\n    <ul>\r\n      <li>\r\n         These Terms &amp; Conditions consist the entire agreement between us. You shall abide by them.\r\n      </li>\r\n      <li>\r\n        All notices, requests, complaints and other communications here shall be made in writing (e.g., via email).\r\n      </li>\r\n    </ul>\r\n    <h3>\r\n       Contact Us\r\n    </h3>\r\n    <p>\r\n      We are sure you would love our food. In case you were not happy or if you have any questions about these Terms, please contact us at info@fysu.in \r\n    </p>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/terms/terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TermsComponent = (function () {
    function TermsComponent(router, title, appComponent, authService, datePipe) {
        this.router = router;
        this.title = title;
        this.appComponent = appComponent;
        this.authService = authService;
        this.datePipe = datePipe;
        this.today_one = __WEBPACK_IMPORTED_MODULE_6_moment__();
    }
    TermsComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.dateForHeader = this.datePipe.transform(this.today_one, 'EEE, MMM d');
        this.title.setTitle('Terms - Fysu');
        this.basket_num = parseInt(localStorage.getItem('basket_number'));
        if (this.authService.loggedIn() == true) {
            var user = this.authService.getUserFromLocal();
            var user_parsed = JSON.parse(user);
            this.userEmail = user_parsed.email;
            this.userName = user_parsed.name;
            this.companyName = user_parsed.company_name;
            this.userMobile = user_parsed.mobile;
            this.userId = user_parsed.id;
        }
        else {
            this.basket_num = 0;
        }
        if (this.basket_num == undefined || this.basket_num == null || this.basket_num == 0 || isNaN(this.basket_num) == true) {
            // redirect to menu
            this.basket_num = 0;
        }
        else {
            // this.basket_num;
        }
    };
    return TermsComponent;
}());
TermsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-terms',
        template: __webpack_require__("../../../../../src/app/terms/terms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/terms/terms.component.css"), __webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"]) === "function" && _e || Object])
], TermsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=terms.component.js.map

/***/ }),

/***/ "../../../../../src/app/thanks/thanks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    position: relative;\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 80%;\r\n    text-align: center;\r\n}\r\nh2,h3{\r\n    position: relative;\r\n    display: block;\r\n}\r\nh2{\r\n    color: #f80000;\r\n    font-size: 200%;\r\n    font-weight: normal;\r\n}\r\nh3{\r\n    color: #777;\r\n    font-size: 130%;\r\n    font-weight: normal;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/thanks/thanks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Thanks you for placing order !</h2>\r\n  <h3>Your order id is : {{order_id}}</h3>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/thanks/thanks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThanksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThanksComponent = (function () {
    function ThanksComponent(authService, title, router) {
        this.authService = authService;
        this.title = title;
        this.router = router;
    }
    ThanksComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('order_id') == null || localStorage.getItem('order_id') == undefined) {
            // redirect to Home page
            this.router.navigate(['/home']);
        }
        this.order_id = localStorage.getItem('order_id');
        this.title.setTitle('Thanks ! - Fysu');
        localStorage.removeItem('order_id');
    };
    return ThanksComponent;
}());
ThanksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-thanks',
        template: __webpack_require__("../../../../../src/app/thanks/thanks.component.html"),
        styles: [__webpack_require__("../../../../../src/app/thanks/thanks.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ThanksComponent);

var _a, _b, _c;
//# sourceMappingURL=thanks.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/contact-us.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "contact-us.ceda239e260001389203.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/fvp.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fvp.a19557efebf5efad894e.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/gift.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gift.ebd33a806de42e229c8e.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/mbg.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mbg.d6bb960bd0670286783c.png";

/***/ }),

/***/ "../../../../../src/assets/img/pen.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pen.540153c88c9af827d4d7.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map