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
exports.push([module.i, ".title-img-div {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/pen.jpg") + ");\r\n  background-size: cover;\r\n  background-position: 0% 50%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header for mobiles and smaller devices -->\n<header class=\"mob-main-header visible-sm visible-xs\">\n    <button type=\"button\" class=\"mob-menu-trig-btn\">\n                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n            </button>\n    <div class=\"mob-main-logo\">\n        <img src=\"../../assets/logo/logo_black.png\">\n    </div>\n</header>\n<header class=\"main-header visible-md visible-lg\">\n    <div class=\"container\">\n        <div class=\"main-logo pull-left\">\n            <img src=\"../../assets/logo/logo_black.png\">\n        </div>\n        <ul class=\"list-inline det-ul visible-xs visible-sm pull-right\">\n            <li>\n                <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp; <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i> </button>\n            </li>\n        </ul>\n        <ul class=\"list-inline det-ul pull-left visible-md visible-lg\">\n            <li>\n                <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp; <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i> </button>\n            </li>\n            <li>\n                <a href=\"\" class=\"dets-div-btns\" id=\"our-menu-btn\">Our Menu</a>\n            </li>\n            <!-- <li>\n                <a class=\"dets-div-btns\" id=\"schedule-menu-btn\" (click)='schMenuBtn(schTrigBtn)'>Schedule Menu</a>\n            </li> -->\n        </ul>\n        <div class=\"scroll-login-div pull-right  visible-md visible-lg\">\n            <ul class=\"list-inline sc-ul\">\n                <li class=\"login-trig-div\" *ngIf=\"!authService.loggedIn()\">\n                    <button type=\"button\" class=\"login-signup-trig-btn dets-div-btns\" (click)=\"appComponent.loginSignupTrigger()\">Log in/Sign up</button>\n                </li>\n                <li class=\"account-trig-div\" *ngIf=\"authService.loggedIn()\">\n                    <div class=\"dropdown\">\n                        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\">Account</button>\n                        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings'>My Profile</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/my-orders'>My Orders</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/address'>Saved Address</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/payments'>Payments</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/reward-points'>Reward Points</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/change-password'>Change Password</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"onLogoutClick()\">Logout</a></li>\n                        </ul>\n                    </div>\n                </li>\n            </ul>\n\n        </div>\n        <div class=\"clearfix\"></div>\n    </div>\n</header>\n<div class=\"con-section jumbotron\">\n    <div class=\"title-img-div\">\n        <h2 class=\"web-sec-heads\">ABOUT US</h2>\n    </div>\n    <div class=\"container\">\n        <p>\n             Fysu is a fresh approach to food on the move, with high-quality ingredients to prepare meals that are cooked in our kitchen for office delivery.\n        </p>\n    \n        <p>\n             An exciting menu of homely meals are available, from daily rotating menu that are varied on a weekly basis. Ordering is easy; select food, select a 45-minute delivery slot from 12pm to 3pm, six days a week and get reward points for every order. We are introducing a ground-breaking idea to make lunch-time fun, useful and creative.\n        </p>\n        <p>\n             Bringing back the lost art of letter writings and reinventing the concept of daily writing habits. Out-of-the-box thinking is actively encouraged and we move quickly to make great ideas happen.\n        </p>\n        <p>\n             Fysu is on a mission to transform the way the employees thinks about office lunch. Our plan is to position Fysu to become one of the leading brand in the office food delivery services industry in Hyderabad.\n        </p>\n    </div>\n</div>\n"

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
    function AboutComponent(router, title, appComponent, authService) {
        this.router = router;
        this.title = title;
        this.appComponent = appComponent;
        this.authService = authService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.title.setTitle('About - Fysu');
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css"), __webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], AboutComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/address/address.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Det Title Div-->\n<div class=\"det-title-div\">\n  <div class=\"det-title-core\">\n    <h2 class=\"det-title\">Saved Addresses</h2>\n  </div>\n</div>\n\n<!-- Det core div -->\n<div class=\"dets-core\">\n\n  <div class=\"addresses-core\">\n\n      <div class=\"address-item\" *ngFor='let address of addresses; let i = index'>\n      <div class=\"address-top\">\n        <h4 class=\"address-name\">OFFICE {{i+1}}</h4>\n        <div class=\"address-options\">\n          <i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)='editAddress(i,address)'></i>\n          <i class=\"fa fa-times\" aria-hidden=\"true\" (click)='addressDelete($event,address)'></i>\n        </div>\n      </div>\n      <div class=\"address\">\n        <h6>{{address}}</h6>\n      </div>\n    </div>\n\n\n    \n\n    <div class=\"add-address\" (click)='addAddress($event)'>\n      <h5>Locate new address</h5>\n      <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n    </div>\n  </div>\n</div>"

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
            }
        });
    };
    AddressComponent.prototype.editAddress = function (i, address) {
        console.log(i);
    };
    AddressComponent.prototype.addressDelete = function (event, ad) {
        var address = {
            user_id: this.userId,
            address: ad
        };
        // delete the respective address
        this.authService.deleteAddress(address).subscribe(function (res) {
            if (res.success) {
                var address = event.target;
                // this.router.navigate['/home'];
                // this.addressDeleted = true;
                // setTimeout(function() {
                //   alert('loop');
                //   this.addressDeleted = false;
                // }, 1000);
            }
            else {
                console.log('Something went wrong');
            }
        });
        // var target = event.target;
        // $(target).parent().parent().parent().hide();
        // this.authService
    };
    AddressComponent.prototype.addAddress = function (event) {
    };
    AddressComponent.prototype.geoLocate = function (callback) {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.location = position.coords;
                _this.lat = position.coords.latitude;
                _this.long = position.coords.longitude;
            });
            // console.log(this.lat);
            if (this.lat == undefined) {
                // this.geoLocate();
                $('#locate-me-btn').trigger('click');
            }
            else {
                this.authService.getLocation(this.lat, this.long).subscribe(function (res) {
                    // console.log(res);
                    // console.log(res.results[0].formatted_address);
                    _this.address = res.results[0].formatted_address;
                    if (_this.address.includes('Madhapur')) {
                        localStorage.setItem('home_address', _this.address);
                        // Add to user's address if he is logged in
                        if (_this.authService.loggedIn()) {
                            console.log('user is logged in');
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
                                        console.log(res);
                                    }
                                }
                            });
                        }
                        else {
                            console.log('not logged in');
                        }
                        // Add to input box
                        $('.location-search-input').val(_this.address);
                    }
                    else {
                        // ********** VERY IMPORTANT DELETE AFTER TESTING IS DONE ************** 
                        // Delete after testing is done
                        localStorage.setItem('home_address', _this.address);
                        // Add to user's address if he is logged in
                        if (_this.authService.loggedIn()) {
                            console.log('user is logged in');
                            // User is logged in 
                            // send this address to save
                            var address = {
                                user_id: _this.userId,
                                address: _this.address
                            };
                            // console.log(address);
                            _this.authService.saveAddress(address).subscribe(function (res) {
                                console.log('entered');
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
                            console.log('not logged in');
                        }
                        $('.location-search-input').val(_this.address);
                        $('.location-warning-div').show();
                    }
                });
            }
        }
    };
    return AddressComponent;
}());
AddressComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-address',
        template: __webpack_require__("../../../../../src/app/address/address.component.html"),
        styles: [__webpack_require__("../../../../../src/app/address/address.component.css"), __webpack_require__("../../../../../src/app/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], AddressComponent);

var _a, _b, _c;
//# sourceMappingURL=address.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/add-admin/add-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Add Admin</h2>\n<form (submit)=\"onAddAdminSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"adminname\" name=\"adminname\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Add Admin\">\n</form>"

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
        // Set title
        this.title.setTitle('Add Admin - Admin');
    };
    AddAdminComponent.prototype.onAddAdminSubmit = function () {
        var _this = this;
        var admin = {
            adminname: this.adminname,
            password: this.password
        };
        // RequiredFields
        if (!this.validateService.validateRegister(admin)) {
            this.flashMessage.show('Fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
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
    };
    return AddAdminComponent;
}());
AddAdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-admin',
        template: __webpack_require__("../../../../../src/app/admin/add-admin/add-admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_admin_auth_service__["a" /* AdminAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_admin_auth_service__["a" /* AdminAuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _f || Object])
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

module.exports = "<!-- Addons Section -->\n<div class=\"orders-section\">\n  <h3>Add Category</h3>\n\n</div>\n<!-- Orders Listing -->\n<div class=\"orders-list-section table-responsive\">\n  <table>\n    <tr>\n      <td>\n        <h5>Category Name : </h5>\n      </td>\n      <td>\n        <input type=\"text\" [(ngModel)]='catName'>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <button class=\"submit-btns\" (click)='addCategory(catName)'>SUBMIT</button>\n      </td>\n    </tr>\n  </table>\n  <br><br><br>\n  <h3>View Categories</h3>\n  <table class=\"table-striped view-cat-table\">\n    <tr *ngFor=\"let cat of categories\">\n      <td>\n        {{cat.name}}\n      </td>\n      <td>\n        <i class=\"fa fa-times cat-close-btn\" aria-hidden=\"true\" (click)=\"deleteCategory(cat._id)\"></i>\n      </td>\n    </tr>\n  </table>\n</div>"

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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
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

module.exports = "<!-- Menu Listing -->\n<div class=\"orders-list-section table-responsive\">\n\n  <!-- Add menu -->\n  <h3>Add Item</h3>\n\n\n  <table id=\"add-item-table\">\n    <tr>\n      <td>\n        <h4>Choose Category</h4>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <select [(ngModel)]=\"selectedCat\" (change)=\"catSelect($event.target.value)\">\n                        <option value=\"\" disabled default=\"true\">Choose Category</option>\n                        <option *ngFor=\"let category of categories\" value=\"{{category._id}}\">{{category.name}}</option>\n                    </select>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h4>Choose Sub Category</h4>\n      </td>\n    </tr>\n    <tr *ngIf='catSelected == \"true\"'>\n      <td>\n        <select [(ngModel)]=\"selectedSubCat\" (change)=\"subCatSelect($event.target.value)\">\n                        <option value=\"\" disabled default=\"true\">Choose Sub Category</option>\n                        <option *ngFor=\"let sub of subsOfCat\" value=\"{{sub}}\">{{sub}}</option>\n                    </select>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h4>Item Name</h4>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <input type=\"text\" name=\"name\" [(ngModel)]='itemName'>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h4>Item Price</h4>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <input type=\"text\" name=\"price\" [(ngModel)]='itemPrice'>\n      </td>\n    </tr>\n    <!-- <tr>\n                <td>\n                    <h4>Item Image</h4>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <input type=\"file\" accept=\"image/*\" id=\"file\" name=\"File\" />\n                    <input formControlName=\"File\" type=\"hidden\" />\n                </td>\n            </tr> -->\n    <tr>\n      <td>\n        <p class=\"err\"></p>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <button (click)='AddItem(itemName,itemPrice)' class=\"submit-btns\">SUBMIT</button>\n        <!-- <button class=\"submit-btns\">SUBMIT</button> -->\n      </td>\n    </tr>\n\n  </table>\n  <table class=\"table-striped view-sub-table\">\n    <tr *ngFor=\"let item of items\">\n      <td>\n        {{item.item_name}}\n      </td>\n      <td>\n        <i class=\"fa fa-times cat-close-btn\" aria-hidden=\"true\" (click)=\"deleteItem(item._id)\"></i>\n      </td>\n    </tr>\n  </table>\n\n\n\n</div>"

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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_admin_services_service__["a" /* AdminServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_admin_services_service__["a" /* AdminServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
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

module.exports = "<!-- Menu Section -->\n<div class=\"orders-section\">\n  <h3>Menu</h3>\n  <div class=\"orders-core\">\n    <div class=\"order-tabs-row-one\">\n      <div class=\"order-tab\" id=\"order-tab-one-one\">\n        <h4 class=\"order-tab-number\">0</h4>\n        <h4 class=\"order-tab-name\">Total </h4>\n      </div>\n      <div class=\"order-tab\" id=\"order-tab-one-two\">\n        <h4 class=\"order-tab-number\">0</h4>\n        <h4 class=\"order-tab-name\">Active</h4>\n      </div>\n      <div class=\"order-tab\" id=\"order-tab-one-three\">\n        <h4 class=\"order-tab-number\">0</h4>\n        <h4 class=\"order-tab-name\">Deactive</h4>\n      </div>\n      <div class=\"order-tab\" id=\"order-tab-one-four\">\n        <h4 class=\"order-tab-number\">0</h4>\n        <h4 class=\"order-tab-name\">Popular</h4>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Menu Listing -->\n<div class=\"orders-list-section table-responsive\">\n\n  <!-- Add menu -->\n  <h3>ADD MENU</h3>\n\n  <select [(ngModel)]=\"dateSelected\" (change)=\"selectedDate($event.target.value)\">\n    <option value=\"{{day_one | date:'fullDate'}}\">{{day_one | date:'fullDate'}}</option>\n    <option value=\"{{day_two | date:'fullDate'}}\">{{day_two | date:'fullDate'}}</option>\n    <option value=\"{{day_three | date:'fullDate'}}\">{{day_three | date:'fullDate'}}</option>\n    <option value=\"{{day_four | date:'fullDate'}}\">{{day_four | date:'fullDate'}}</option>\n    <option value=\"{{day_five | date:'fullDate'}}\">{{day_five | date:'fullDate'}}</option>\n    <option value=\"{{day_six | date:'fullDate'}}\">{{day_six | date:'fullDate'}}</option>\n    <option value=\"{{day_seven | date:'fullDate'}}\">{{day_seven | date:'fullDate'}}</option>\n</select>\n\n  <br>\n  <br>\n  <div *ngIf=\"dateIsSelected == 'true'\">\n    <select [(ngModel)]=\"selectedCat\" (change)=\"catSelect($event.target.value)\" id=\"cat-select\">\n    <option value=\"\" disabled default=\"true\">Choose Category</option>\n    <option *ngFor=\"let category of categories\" value=\"{{category._id}}\">{{category.name}}</option>\n</select>\n\n    <br>\n    <br>\n\n    <div *ngIf=\"catSelected == 'true'\">\n      <select [(ngModel)]=\"selectedSubCat\" (change)=\"subCatSelect($event.target.value)\" id=\"sub-cat-select\">\n        <option value=\"\" disabled default=\"true\">Choose Sub Category</option>\n        <option *ngFor=\"let sub of subsOfCat\" value=\"{{sub}}\">{{sub}}</option>\n    </select>\n    </div>\n\n    <br>\n    <br>\n\n    <div class=\"schedule-choose-core roti-div\">\n\n      <div *ngIf=\"subSelected == 'true'\">\n        <h4>Select Items</h4>\n\n        <div *ngFor=\"let item of items\">\n          <label>\n                <input type=\"checkbox\" value=\"{{item.item_name}}\" (change)=\"onCheckChange(dateSelected,item.cat_id,item.sub_name,item._id, $event.target.checked)\">{{item.item_name}}\n            </label>\n        </div>\n\n\n      </div>\n\n    </div>\n  </div>\n  <button (click)='submitMenu()' class=\"submit-btns\">SUBMIT</button>\n\n  <table class=\"table-striped view-sub-table\">\n    <tr *ngFor=\"let date of dates\">\n      <td>\n        {{date.date}}\n      </td>\n      <td>\n        <i class=\"fa fa-times cat-close-btn\" aria-hidden=\"true\" (click)=\"deleteDate(date._id)\"></i>\n      </td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/add-menu/add-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__ = __webpack_require__("../../../../../src/app/services/admin-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// importing service

// importing momentjs

var AddMenuComponent = (function () {
    function AddMenuComponent(getMenu, router, title) {
        this.getMenu = getMenu;
        this.router = router;
        this.title = title;
        this.dateIsSelected = 'false';
        this.categories = [];
        this.catSelected = 'false';
        this.subSelected = 'false';
        this.addedItems = [];
        this.removedItems = [];
        // date = new Date((60 * 60 * 24 * 1));
        this.today = __WEBPACK_IMPORTED_MODULE_4_moment__().format('LLLL');
        this.day_one = __WEBPACK_IMPORTED_MODULE_4_moment__().add(1, 'days');
        this.day_two = __WEBPACK_IMPORTED_MODULE_4_moment__().add(2, 'days');
        this.day_three = __WEBPACK_IMPORTED_MODULE_4_moment__().add(3, 'days');
        this.day_four = __WEBPACK_IMPORTED_MODULE_4_moment__().add(4, 'days');
        this.day_five = __WEBPACK_IMPORTED_MODULE_4_moment__().add(5, 'days');
        this.day_six = __WEBPACK_IMPORTED_MODULE_4_moment__().add(6, 'days');
        this.day_seven = __WEBPACK_IMPORTED_MODULE_4_moment__().add(7, 'days');
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
            console.log(res);
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
                console.log(res.msg);
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
                console.log(res);
                _this.items = res.msg;
            }
        });
    };
    AddMenuComponent.prototype.onCheckChange = function (dateSelected, cat_id, sub_name, item_id, isChecked) {
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
            console.log(this.addedItems);
            // Remove from removedItems
            for (var x = 0; x < this.removedItems.length; x++) {
                if (this.removedItems[x][0] == dateSelected && this.removedItems[x][1] == item_id) {
                    this.removedItems.splice(x, 1);
                }
            }
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
    };
    AddMenuComponent.prototype.submitMenu = function () {
        this.getMenu.postSchedule(this.addedItems, this.removedItems).subscribe(function (res) {
            if (res) {
                window.location.reload();
            }
        });
    };
    AddMenuComponent.prototype.deleteDate = function (date_id) {
        this.getMenu.deleteDate(date_id).subscribe(function (res) {
            if (res.success) {
                console.log(res.msg);
            }
            else {
                console.log('failed');
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
], AddMenuComponent);

var _a, _b, _c;
//# sourceMappingURL=add-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/add-rewards/add-rewards.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".view-sub-table td {\r\n  padding: 20px 20px;\r\n  font-size: 130%;\r\n  color: #888;\r\n}\r\n\r\n.cat-close-btn {\r\n  cursor: pointer;\r\n  font-size: 100%;\r\n  color: #888;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/add-rewards/add-rewards.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Orders Section -->\n<div class=\"orders-section\">\n  <h3>Reward Points</h3>\n  <label for=\"admin-name\">User Email :</label>\n  <input type=\"text\" name=\"admin-name\" id=\"admin-name\" value=\"\">\n  <label for=\"admin-new-pwd\">Points to be added :</label>\n  <input type=\"integer\" name=\"admin-new-pwd\" id=\"admin-new-pwd\" value=\"\"><br><br>\n  <button type=\"button\" class=\"c-btns\">SUBMIT</button>\n\n  <h4>Users</h4>\n  <table class=\"table-striped view-sub-table\">\n    <tr *ngFor=\"let user of allUsers\">\n      <td>\n        {{user.name}}\n      </td>\n      <td>\n        {{user.email}}\n      </td>\n      <td>\n        <i class=\"fa fa-times cat-close-btn\" aria-hidden=\"true\" (click)=\"deleteUser(user._id)\"></i>\n      </td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/add-rewards/add-rewards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRewardsComponent; });
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




var AddRewardsComponent = (function () {
    function AddRewardsComponent(getMenu, router, title) {
        this.getMenu = getMenu;
        this.router = router;
        this.title = title;
    }
    AddRewardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set title
        this.title.setTitle('Reward Points');
        this.getMenu.getUsers().subscribe(function (res) {
            _this.allUsers = res;
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
], AddRewardsComponent);

var _a, _b, _c;
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

module.exports = "<!-- Addons Section -->\n<div class=\"orders-section\">\n  <h3>Add Sub Category</h3>\n</div>\n<!-- Orders Listing -->\n<div class=\"orders-list-section table-responsive\">\n  <table>\n    <tr>\n      <td>\n        Select Category\n      </td>\n      <td>\n        <ul>\n        </ul>\n        <select [(ngModel)]=\"selectedCat\" (change)=\"catSelect($event.target.value)\">\n                    <option *ngFor=\"let category of categories\" value=\"{{category._id}}\">{{category.name}}</option>\n                </select>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h5>Sub Category Name : </h5>\n      </td>\n      <td>\n        <input type=\"text\" id=\"sub-inp\" [(ngModel)]='subName'>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <p class=\"err\"></p>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <button class=\"submit-btns\" (click)='submitSubCat(selectedCat,subName)'>SUBMIT</button>\n      </td>\n    </tr>\n  </table>\n  <table class=\"table-striped view-sub-table\">\n    <tr *ngFor=\"let sub of subsOfCat\">\n      <td>\n        {{sub}}\n      </td>\n      <td>\n        <i class=\"fa fa-times cat-close-btn\" aria-hidden=\"true\" (click)=\"deleteSubFromCategory(sub)\"></i>\n      </td>\n    </tr>\n  </table>\n</div>"

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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
], AddSubsComponent);

var _a, _b, _c;
//# sourceMappingURL=add-subs.component.js.map

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

module.exports = "<div class=\"mob-menu\">\n  <ul class=\"list-unstyled\">\n    <li class=\"selected-li\"> <i class=\"fa fa-bars\" aria-hidden=\"true\"></i> Orders </li>\n    <li> <i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i> Report </li>\n    <li> <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i> Category </li>\n    <li> <i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i> Menu </li>\n    <li> <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i> Addons </li>\n    <li> <i class=\"fa fa-archive\" aria-hidden=\"true\"></i> Offers </li>\n    <li> <i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i> Bookings </li>\n    <li> <i class=\"fa fa-money\" aria-hidden=\"true\"></i> Payment </li>\n    <li> <i class=\"fa fa-user\" aria-hidden=\"true\"></i> Accounts </li>\n    <li> <i class=\"fa fa-cog\" aria-hidden=\"true\"></i> Settings </li>\n    <li> <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Reviews </li>\n    <li> <i class=\"fa fa-line-chart\" aria-hidden=\"true\"></i> Logout </li>\n  </ul>\n</div>\n<div class=\"main-container\">\n  <!-- Header -->\n  <header class=\"main-header\">\n    <div class=\"container\">\n      <button type=\"button\" class=\"mob-menu-trig-btn pull-left visible-sm visible-xs\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></button>\n      <div class=\"main-logo pull-left visible-md visible-lg\">\n        <h1 class=\"logo-text\">fysu</h1>\n      </div>\n      <div class=\"main-logo visible-xs visible-sm mob-main-logo\">\n        <h1 class=\"logo-text\">fysu</h1>\n      </div>\n      <div class=\"logout-div pull-right visible-md visible-lg\" *ngIf=\"authService.loggedIn()\">\n        <button type=\"button\" class=\"main-logout-btn\" (click)=\"onLogoutClick()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> &nbsp; Logout</button>\n      </div>\n    </div>\n  </header>\n\n  <!-- Body -->\n  <div class=\"container-core\">\n    <!-- Left Menu -->\n    <div class=\"left-menu pull-left visible-md visible-lg\" *ngIf=\"authService.loggedIn()\">\n\n      <ul class=\"list-unstyled\" *ngIf=\"authService.loggedIn()\">\n        <a routerLink='/admin/orders'>\n          <li class=\"selected-li\"> <i class=\"fa fa-bars\" aria-hidden=\"true\"></i> Orders </li>\n        </a>\n        <a routerLink='/admin/add-menu'>\n          <li> <i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i> Menu </li>\n        </a>\n        <a routerLink='/admin/add-category'>\n          <li> <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i> Add Category</li>\n        </a>\n        <a routerLink='/admin/add-sub-category'>\n          <li> <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i> Add Sub Category</li>\n        </a>\n        <a routerLink='/admin/add-items'>\n          <li> <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i> Add Items</li>\n        </a>\n        <a routerLink='/admin/add-rewards'>\n          <li> <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Reward </li>\n        </a>\n        <a routerLink='/admin/add-admin'>\n          <li> <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Add Admin </li>\n        </a>\n        <a routerLink='/admin/reports'>\n          <li> <i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i> Report </li>\n        </a>\n      </ul>\n    </div>\n\n    <!-- Right Dets  -->\n    <div class=\"right-dets pull-right\">\n      <flash-messages></flash-messages>\n\n      <router-outlet>\n\n      </router-outlet>\n\n    </div>\n\n  </div>\n\n</div>"

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
        $('.left-menu li').click(function () {
            $('.left-menu li').removeClass('selected-li');
            this.classList.add('selected-li');
        });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_admin_auth_service__["a" /* AdminAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_admin_auth_service__["a" /* AdminAuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
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

module.exports = "<!-- Orders Section -->\n<div class=\"orders-section\">\n  <div class=\"container\">\n    <h3>Admin Login</h3>\n    <form (submit)=\"adminLoginFormSubmit()\">\n      <div class=\"form-group\">\n        <label>Admin name</label>\n        <input type=\"text\" name=\"adminname\" [(ngModel)]=\"adminname\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n    </form>\n  </div>\n</div>"

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
    function LoginComponent(router, title, authService, flash) {
        this.router = router;
        this.title = title;
        this.authService = authService;
        this.flash = flash;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Login');
    };
    LoginComponent.prototype.adminLoginFormSubmit = function () {
        var _this = this;
        var admin = {
            adminname: this.adminname,
            password: this.password
        };
        this.authService.authenticateAdmin(admin).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeAdminData(data.token, data.admin);
                _this.flash.show('You are logged in !', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['/orders']);
            }
            else {
                _this.flash.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['/login']);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_admin_auth_service__["a" /* AdminAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_admin_auth_service__["a" /* AdminAuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
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

module.exports = "<!-- Reports Section -->\n<div class=\"orders-section\">\n  <h3>Reports</h3>\n  <div class=\"orders-core\">\n    <div class=\"order-tabs-row-one\">\n      <div class=\"c-order-tab\">\n        <div class=\"c-icon\">\n          <i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"c-dets\">\n          <h4 class=\"c-tab-head\">Total Reports</h4>\n          <h4 class=\"c-tab-det\">40</h4>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Reports Listing -->\n<div class=\"orders-list-section table-responsive\">\n  <div class=\"c-filer-div\">\n    <div class=\"pull-left\">\n      <select id=\"sort-dropdown\">\n                                <option value=\"\" disabled selected>Select</option>\n                            </select>\n      <input type=\"text\" name=\"\" value=\"\"> to\n      <input type=\"text\" name=\"\" value=\"\">\n      <button type=\"button\" class=\"c-btns\" id=\"show-btn\">Show</button>\n    </div>\n    <div class=\"pull-right\">\n      <button type=\"button\" class=\"c-btns\" id=\"generate-pdf-btn\">Generate PDF</button>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n  <table class=\"table table-striped\">\n    <tr>\n      <th>\n        #\n      </th>\n      <th>\n        Name\n      </th>\n      <th>\n        Address\n      </th>\n      <th>\n        Order Number\n      </th>\n      <th>\n        Total Price\n      </th>\n      <th>\n        Order Time\n      </th>\n    </tr>\n    <tr>\n      <td>\n        1\n      </td>\n      <td>\n        ADCB102\n      </td>\n      <td>\n        05/08/2017\n      </td>\n      <td>\n        Madhapur\n      </td>\n      <td>\n        Delivery\n      </td>\n      <td>\n        &#8377; 600\n      </td>\n    </tr>\n    <tr>\n      <td>\n        1\n      </td>\n      <td>\n        ADCB102\n      </td>\n      <td>\n        05/08/2017\n      </td>\n      <td>\n        Madhapur\n      </td>\n      <td>\n        Delivery\n      </td>\n      <td>\n        &#8377; 600\n      </td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
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




var ReportsComponent = (function () {
    function ReportsComponent(getMenu, router, title) {
        this.getMenu = getMenu;
        this.router = router;
        this.title = title;
    }
    ReportsComponent.prototype.ngOnInit = function () {
        // Set title
        this.title.setTitle('Reports');
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reports',
        template: __webpack_require__("../../../../../src/app/admin/reports/reports.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/reports/reports.component.css"), __webpack_require__("../../../../../src/app/admin/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_admin_services_service__["a" /* AdminServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
], ReportsComponent);

var _a, _b, _c;
//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Bubblegum+Sans|Open+Sans);", ""]);

// module
exports.push([module.i, "body,\r\nhtml {\r\n  font-family: 'Open Sans', sans-serif;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n}\r\n\r\na:hover {\r\n  text-decoration: none !important;\r\n}\r\n\r\n.vp {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\n.dark-cover {\r\n  z-index: 2;\r\n  position: absolute;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.main-logo h1 {\r\n  margin: 0;\r\n  font-family: 'Bubblegum Sans', cursive;\r\n  font-size: 340%;\r\n}\r\n\r\nbutton:active,\r\nbutton:focus,\r\ninput:focus,\r\ninput:active {\r\n  outline: none !important;\r\n}\r\n\r\n\r\n/* Login/Signup sections*/\r\n\r\n.err{\r\n  margin: 10px 0;\r\n}\r\n\r\n.fixed-dark-cover {\r\n  z-index: 10;\r\n  position: fixed;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  display: none;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.email-input-div {\r\n  position: relative;\r\n  display: block;\r\n  background-color: #fff;\r\n  padding: 20px 40px;\r\n  color: #555;\r\n  width: 40vw;\r\n}\r\n.fixed-dark-cover .email-input-div #email {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n\r\n#next-reg-fixed-dark-cover .email-input-div {\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n}\r\n\r\n.email-input-div h4 {\r\n  margin-bottom: 10px;\r\n  font-size: 130%;\r\n  text-align: center;\r\n}\r\n\r\n.fixed-dark-cover label {\r\n  font-size: 101%;\r\n  font-weight: normal;\r\n  margin-top: 10px;\r\n}\r\n\r\n#email {\r\n  /* border: none; */\r\n  margin-top: 10px;\r\n  margin-bottom: 25px;\r\n  border: 2px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 3px;\r\n  width: 100%;\r\n  height: 40px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.next-inputs {\r\n  border: 1px solid rgba(0, 0, 0, 0.3);\r\n  border-radius: 3px;\r\n  width: 100%;\r\n  height: 35px;\r\n  padding-left: 7px;\r\n  padding-right: 7px;\r\n}\r\n\r\n.ls-btns-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  margin-top: 20px !important;\r\n}\r\n\r\n.ls-btns-core-div {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n\r\n.ls-btns {\r\n  position: relative;\r\n  display: inline-block;\r\n  height: 40px;\r\n  width: 100px;\r\n  border-radius: 4px;\r\n}\r\n\r\n#continue-btn,\r\n#accept-btn,\r\n#signup-btn {\r\n  border: none;\r\n  background-color: #b2b2b2;\r\n  color: #fff;\r\n  margin-right: 20px;\r\n}\r\n\r\n.close-btn {\r\n  border: 1px solid #515151;\r\n  background-color: #fff;\r\n  color: #787878;\r\n}\r\n\r\n#reg-mobile-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n#country-code {\r\n  width: 10%;\r\n  height: 100%;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\n#reg-mobile {\r\n  width: 90%;\r\n}\r\n\r\n#reg-terms-agree {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.otp-span {\r\n  display: none;\r\n}\r\n\r\n\r\n/* Location search div */\r\n\r\n.location-input-div {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  margin-top: 30px;\r\n  padding: 5px;\r\n  border-radius: 3px;\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.location-enter-div {\r\n  position: relative;\r\n  height: 40px;\r\n  width: 450px;\r\n  border-radius: 3px;\r\n}\r\n\r\n.location-search-input {\r\n  margin: 0;\r\n  height: 40px;\r\n  width: 100%;\r\n  color: #666;\r\n  border: none;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  font-size: 110%;\r\n  border-radius: 3px;\r\n}\r\n\r\n.locate-me-btn {\r\n  position: absolute;\r\n  margin: 0;\r\n  height: 30px;\r\n  right: 5px;\r\n  top: 5px;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  color: #333;\r\n  border: none;\r\n  border-radius: 3px;\r\n  font-size: 90%;\r\n  transition: all 0.2s ease-in;\r\n}\r\n\r\n.locate-me-btn:hover {\r\n  background-color: #c6c6c6;\r\n}\r\n\r\n.locate-me-btn:active {\r\n  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.see-menu-btn {\r\n  margin: 0;\r\n  height: 40px;\r\n  width: 200px;\r\n  background-color: #000;\r\n  color: #fff;\r\n  border: none;\r\n  margin-left: 10px;\r\n  transition: all 0.2s ease-in;\r\n  border-radius: 3px;\r\n}\r\n\r\n.see-menu-btn:hover {\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n\r\n/* Header */\r\n\r\n\r\n/* Main header */\r\n\r\n.main-header {\r\n  z-index: 8;\r\n  position: relative;\r\n  display: block;\r\n  top: 0px;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 60px;\r\n  background-color: #fff;\r\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.main-header .container {\r\n  display: block;\r\n  /*display: -webkit-flex;*/\r\n  /*justify-content: center;\r\n    -webkit-justify-content: center;*/\r\n  /*align-items: center;\r\n    -webkit-align-items: center;*/\r\n  height: 100%;\r\n}\r\n\r\n.main-container {\r\n  padding-top: 50px;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.main-logo {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.main-logo img {\r\n  height: 60%;\r\n  width: auto;\r\n}\r\n\r\n.logo-text {\r\n  margin: 0;\r\n  font-family: 'Bubblegum Sans', cursive;\r\n  font-size: 340%;\r\n}\r\n\r\n.det-ul {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  margin-left: 50px;\r\n  margin-bottom: 0px;\r\n  height: 100%;\r\n}\r\n\r\n.main-header .det-ul li {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  color: #000;\r\n  height: 100%;\r\n}\r\n\r\n.det-ul a {\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  color: #000;\r\n  text-decoration: none;\r\n}\r\n\r\n.main-header h1 {\r\n  color: #000;\r\n}\r\n\r\n.scroll-login-div {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.dets-div-btns {\r\n  border: none;\r\n  background-color: transparent;\r\n  font-size: 110%;\r\n  height: 100%;\r\n}\r\n\r\n#loc-btn {\r\n  color: #f00;\r\n  margin-right: 30px;\r\n}\r\n\r\n#our-menu-btn {\r\n  margin-right: 20px;\r\n}\r\n\r\n.selected {\r\n  font-weight: bold;\r\n  border-bottom: 2px solid #fa0000;\r\n}\r\n\r\n#schedule-menu-btn {\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* Account Drop down button */\r\n\r\n.btn-default {\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-default:hover,\r\n.btn-default:focus,\r\n.btn-default:active {\r\n  background-color: transparent !important;\r\n  box-shadow: none;\r\n}\r\n\r\n.open>.dropdown-toggle.btn-default:focus,\r\n.open>.dropdown-toggle.btn-default:hover {\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\n\r\n/* Account dropdown menu */\r\n\r\n.dropdown {\r\n  margin-right: 20px;\r\n}\r\n\r\n.dropdown-menu {\r\n  position: absolute;\r\n  top: 110%;\r\n  left: -120%;\r\n  z-index: 8;\r\n  display: none;\r\n  float: left;\r\n  min-width: 260px;\r\n  padding: 0px 0;\r\n  margin: 2px 0 0;\r\n  font-size: 14px;\r\n  text-align: left;\r\n  list-style: none;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid #ccc;\r\n  border: 1px solid rgba(0, 0, 0, .15);\r\n  border-radius: 4px;\r\n  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\r\n}\r\n\r\n.dropdown-menu::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: -22px;\r\n  left: 50%;\r\n  border-top: 11px solid transparent;\r\n  border-left: 11px solid transparent;\r\n  border-right: 11px solid transparent;\r\n  border-bottom: 11px solid #A6A6A6;\r\n}\r\n\r\n.dropdown-menu::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: -20px;\r\n  left: 50.4%;\r\n  border-top: 10px solid transparent;\r\n  border-left: 10px solid transparent;\r\n  border-right: 10px solid transparent;\r\n  border-bottom: 10px solid #fff;\r\n}\r\n\r\n.dropdown-menu li {\r\n  border-bottom: 1px solid #F2F5F6;\r\n}\r\n\r\n.dropdown-menu li:last-child {\r\n  border-bottom-left-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n}\r\n\r\n.dropdown-menu li a {\r\n  /* margin: 10px auto; */\r\n  padding: 15px 20px;\r\n}\r\n\r\n\r\n/* Basket button */\r\n\r\n.basket-btn {\r\n  position: relative;\r\n  display: block;\r\n}\r\n\r\n.b-badge {\r\n  position: absolute;\r\n  left: 83%;\r\n  top: 30%;\r\n  background-color: #fa0000;\r\n  color: #fff;\r\n  padding: 2px 7px;\r\n  margin-left: 5px;\r\n  border-radius: 50%;\r\n  font-size: 80%;\r\n}\r\n\r\n\r\n/* Footer */\r\n\r\n.main-footer {\r\n  position: relative;\r\n  display: block;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  background-color: #fff;\r\n  overflow: hidden;\r\n}\r\n\r\n.footer-nav,\r\n.footer-social-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  /*color: rgba(0, 0, 0, 0.7);*/\r\n  color: #666;\r\n}\r\n\r\n.footer-nav a,\r\n.footer-social-div a {\r\n  color: #666;\r\n  text-decoration: none;\r\n}\r\n\r\n.footer-nav a:hover,\r\n.footer-social-div a:hover {\r\n  color: #333;\r\n}\r\n\r\n.footer-social-div {\r\n  margin-top: 10px;\r\n  font-size: 150%;\r\n}\r\n\r\n\r\n/* Mobile */\r\n\r\n\r\n/* Mobile main header */\r\n\r\n.mob-main-header {\r\n  z-index: 13;\r\n  position: fixed;\r\n  display: block;\r\n  width: 100%;\r\n  top: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 60px;\r\n  background-color: rgba(0, 0, 0, 1);\r\n  box-shadow: 0 10px 10px 1px rgba(0, 0, 0, .15);\r\n}\r\n\r\n.mob-main-logo {\r\n  position: absolute;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  height: 100%;\r\n  width: auto;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.mob-main-logo img {\r\n  position: relative;\r\n  display: block;\r\n  height: 60%;\r\n  width: auto;\r\n}\r\n\r\n.mob-menu-trig-btn {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0%;\r\n  -webkit-transform: translate(0%, -50%);\r\n          transform: translate(0%, -50%);\r\n  height: 100%;\r\n  width: 50px;\r\n  background: transparent;\r\n  color: #fff;\r\n  border: none;\r\n  font-size: 140%;\r\n}\r\n\r\n.mob-menu {\r\n  z-index: 12;\r\n  position: fixed;\r\n  display: block;\r\n  top: -300px;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: auto;\r\n  padding-top: 20px;\r\n  background-color: #fff;\r\n  color: #000;\r\n  box-shadow: 0 10px 10px 1px rgba(0, 0, 0, .1);\r\n}\r\n\r\n.mob-menu li {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 40px;\r\n  width: 100%;\r\n  color: #000;\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.mob-menu .reward-pts-trig-btn {\r\n  border: none;\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n\r\n/* Extra Small Devices, .visible-xs-* */\r\n\r\n@media (max-width: 480px) {}\r\n\r\n@media (max-width: 767px) {\r\n  .footer-nav,\r\n  .footer-social-div {\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n\r\n/* Small Devices, .visible-sm-* */\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {}\r\n\r\n\r\n/* Medium Devices, .visible-md-* */\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {}\r\n\r\n\r\n/* Large Devices, .visible-lg-* */\r\n\r\n@media (min-width: 1200px) {}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!authService.loggedIn()\">\n\n<div class=\"fixed-dark-cover\" id=\"login-fixed-dark-cover\">\n  <div class=\"email-input-div\">\n    <h4>Please enter your email or mobile number</h4>\n    <label for=\"email\" id=\"email-label\">Email or Mobile</label><br>\n    <input type=\"text\" name=\"email\" id=\"email\" [(ngModel)]='initialLoginInput' placeholder=\"e.g pavan@fysu.com or +91 9999999999\">\n    <p class=\"err\"></p>\n    <div class=\"ls-btns-div\">\n      <div class=\"ls-btns-core-div\">\n        <button type=\"button\" class=\"ls-btns\" id=\"continue-btn\" (click)=\"firstConClick(initialLoginInput)\">Continue</button>\n        <button type=\"button\" class=\"ls-btns close-btn\" (click)=\"mainClose()\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"fixed-dark-cover\" id=\"next-reg-fixed-dark-cover\">\n  <div class=\"email-input-div\">\n    <h4>We just need few more details</h4>\n   \n    <label for=\"reg-name\" id=\"reg-name-label\">Name</label>\n    <input type=\"text\" name=\"reg-name\" class=\"next-inputs\" id=\"reg-name\" [(ngModel)]='regNameInput' placeholder=\"\"><br>\n    \n    <!-- Company name -->\n    \n    <!-- <label for=\"reg-name\" id=\"reg-com-name-label\">Company Name</label>\n    <input type=\"text\" name=\"reg-com-name\" class=\"next-inputs\" id=\"reg-com-name\" [(ngModel)]='regComNameInput' placeholder=\"\"><br> -->\n\n    <label for=\"reg-email\" id=\"reg-email-label\">Email</label>\n    <input type=\"text\" name=\"reg-email\" class=\"next-inputs\" id=\"reg-email\" [(ngModel)]='regEmailInput' placeholder=\"\" value=\"{{initialLoginInput}}\"><br>\n\n    <label for=\"reg-mobile\" id=\"reg-mobile-label\">Mobile Number</label>\n    <!-- <div id=\"reg-mobile-div\"> -->\n      <!-- <button type=\"\" id=\"country-code\">+ 91 </button> -->\n      <input type=\"text\" class=\"next-inputs\" [(ngModel)]='regMobileInput'\n        name=\"reg-mobile\" id=\"reg-mobile\" placeholder=\"\">\n    <!-- </div> -->\n\n    <label for=\"reg-pwd\" id=\"reg-pwd-label\">Choose Password</label>\n    <input type=\"password\" name=\"reg-pwd\" class=\"next-inputs\" [(ngModel)]='regPwdInput' id=\"reg-pwd\" placeholder=\"\"><br>\n\n    <span class=\"otp-span\"><label for=\"reg-otp\" id=\"reg-otp-label\">Enter OTP</label>\n    <input type=\"text\" name=\"reg-otp\" class=\"next-inputs\"  [(ngModel)]='regOTPInput' id=\"reg-otp\" (keyup)=\"otpKeyUp($event)\" placeholder=\"\"><br></span>\n\n    <h5 id=\"reg-terms-agree\">By continuing, you are accepting Fysu Terms and Conditions</h5>\n\n    <p class=\"err\"></p>\n\n    <div class=\"ls-btns-div\">\n      <div class=\"ls-btns-core-div\">\n        <button type=\"button\" class=\"ls-btns\" id=\"accept-btn\" (click)=\"OtpBtnClick()\">Send OTP</button>\n        <button type=\"button\" class=\"ls-btns\" id=\"signup-btn\" (click)=\"SignUpClick(regNameInput,regEmailInput,regMobileInput,regPwdInput,regOTPInput)\"\n          style=\"display:none\">Register</button>\n        <button type=\"button\" class=\"ls-btns close-btn\" (click)=\"mainClose()\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"fixed-dark-cover\" id=\"next-login-fixed-dark-cover\">\n  <div class=\"email-input-div\">\n    <h4>We just need few more details</h4>\n    <label for=\"login-email\" id=\"login-email-label\">Email</label>\n    <input type=\"text\" name=\"login-email\" class=\"next-inputs\" id=\"login-email\" [(ngModel)]='loginEmailInput' placeholder=\"\" value=\"{{initialLoginInput}}\"><br>\n\n    <label for=\"login-password\" id=\"login-password-label\">Password</label>\n    <input type=\"password\" name=\"login-password\" class=\"next-inputs\" [(ngModel)]='loginPasswordInput' id=\"login-password\" placeholder=\"\"><br>\n    <p class=\"login-err err\"></p>\n\n    <div class=\"ls-btns-div\">\n      <div class=\"ls-btns-core-div\">\n        <button type=\"button\" class=\"ls-btns\" id=\"accept-btn\" (click)=\"LoginSubmit(loginEmailInput,loginPasswordInput)\">Login</button>\n        <button type=\"button\" class=\"ls-btns close-btn\" (click)=\"mainClose()\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n<div class=\"mob-menu visible-sm visible-xs\">\n  <ul class=\"list-unstyled\">\n    <li class=\"reward-pts-trig-btn\">\n      REWARDS\n    </li>\n    <li  *ngIf=\"!authService.loggedIn()\" (click)=\"appComponent.loginSignupTrigger()\">\n      LOGIN / SIGNUP\n    </li>\n    <li  *ngIf=\"authService.loggedIn()\" (click)=\"onLogoutClick()\">\n      LOGOUT\n    </li>\n  </ul>\n</div>\n\n<router-outlet>\n\n</router-outlet>\n<footer class=\"main-footer\">\n  <nav class=\"footer-nav\">\n    <ul class=\"list-inline\">\n      <li><a routerLink='/home'>Home</a></li>\n      <li><a href=\"#\">How it works</a></li>\n      <li><a routerLink='/contact'>Contact us</a></li>\n      <li><a routerLink='/about'>About us</a></li>\n      <li><a routerLink='/privacy'>Privacy Policy</a></li>\n      <li><a routerLink='/terms'>Terms and Conditions</a></li>\n    </ul>\n  </nav>\n  <!-- <div class=\"footer-social-div\">\n    <ul class=\"list-inline\">\n      <li>\n        <div class=\"footer-social\">\n          <ul class=\"list-inline\">\n            <li><a href=\"facebook.com\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i></a></li>\n            <li><a href=\"instagram.com\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\n            <li><a href=\"twitter.com\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n          </ul>\n        </div>\n      </li>\n      <li class=\"footer-appstores\">\n        <div class=\"footer-appstore-links\">\n          <ul class=\"list-inline\">\n            <li>Google store</li>\n            <li>App store</li>\n          </ul>\n        </div>\n      </li>\n      <li>\n        <div class=\"footer-payments\">\n          <ul class=\"list-inline\">\n            <li><i class=\"fa fa-cc-paypal\" aria-hidden=\"true\"></i></li>\n            <li><i class=\"fa fa-cc-visa\" aria-hidden=\"true\"></i></li>\n          </ul>\n        </div>\n      </li>\n    </ul>\n  </div> -->\n</footer>"

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
    }
    AppComponent.prototype.ngOnInit = function () {
        // Set title
        this.title.setTitle('Home');
    };
    // On clicking login/signup
    AppComponent.prototype.loginSignupTrigger = function () {
        $('.fixed-dark-cover').hide();
        $('#login-fixed-dark-cover').css({ 'display': 'flex' });
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
                        $('#next-login-fixed-dark-cover').css({ 'display': 'flex' });
                        _this.loginEmailInput = _this.initialLoginInput;
                    }
                    else {
                        $('#next-reg-fixed-dark-cover').css({ 'display': 'flex' });
                        _this.regEmailInput = _this.initialLoginInput;
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
                        // Mobile number exists
                        $('#next-login-fixed-dark-cover').css({ 'display': 'flex' });
                    }
                    else {
                        $('#next-reg-fixed-dark-cover').css({ 'display': 'flex' });
                    }
                });
            }
            else {
                $('.err').html('Please enter valid Email or Mobile number');
            }
        }
        else {
            $('.err').html('Please enter valid Email or Mobile number');
        }
    };
    // On clicking enter OTP button
    AppComponent.prototype.OtpBtnClick = function () {
        $('.otp-span').show('slow');
        $('#accept-btn').hide();
        $('#signup-btn').css({ 'display': 'block' });
    };
    AppComponent.prototype.otpKeyUp = function (event) {
        var otp = event.target.value;
        if (otp.length == 4) {
            $('#accept-btn').css({ 'background-color': '#f00', 'color': '#fff' });
        }
    };
    AppComponent.prototype.LoginSubmit = function (loginEmailInput, loginPasswordInput) {
        var _this = this;
        $('.err').html('');
        this.loginEmailInput = loginEmailInput;
        this.loginPasswordInput = loginPasswordInput;
        var user = {
            email: loginEmailInput,
            password: loginPasswordInput
        };
        // valiadte
        if (this.validate.validateInput(loginEmailInput) && this.validate.validateInput(loginPasswordInput)) {
            if (this.validate.validateEmail(loginEmailInput)) {
                // User have entered email
                // Check if email is registered
                // $('.fixed-dark-cover').hide();
                this.authService.authenticateEmail(loginEmailInput).subscribe(function (data) {
                    if (data.success) {
                        // Email exists
                        // Log user in
                        _this.authService.authenticateUser(user).subscribe(function (dat) {
                            console.log(dat);
                            if (dat.success) {
                                _this.uName = dat.user.name;
                                _this.authService.storeUserData(dat.token, dat.user);
                                _this.router.navigate(['/home']);
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
        else {
            $('.err').html('All fields are required');
        }
        // Log user in
        // 
        // this.showError('login-err','Password wrong !');
        // Redirect to Menu
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
            rewardPoints: 0
        };
        // Validate inputs
        if (this.validate.validateInput(regNameInput) &&
            this.validate.validateInput(regEmailInput) &&
            this.validate.validateInput(regMobileInput) &&
            this.validate.validateInput(regPwdInput)) {
            // Validate Email and Mobile
            if (this.validate.validateEmail(regEmailInput)) {
                if (this.validate.validateMobile(regMobileInput)) {
                    // Valid email and mobile numbers. register user
                    this.authService.registerUser(this.user).subscribe(function (res) {
                        if (res.success) {
                            window.location.reload();
                        }
                        else {
                            // Show Error
                        }
                    });
                }
                else {
                    $('.err').html('Please Enter Valid Mobile number');
                }
            }
            else {
                $('.err').html('Please Enter Valid Email');
            }
        }
        else {
            $('.err').html('All input fields are required');
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
    AppComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _e || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__orders_orders_component__ = __webpack_require__("../../../../../src/app/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__payments_payments_component__ = __webpack_require__("../../../../../src/app/payments/payments.component.ts");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_admin_auth_service__ = __webpack_require__("../../../../../src/app/services/admin-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_get_menu_service__ = __webpack_require__("../../../../../src/app/services/get-menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_user_service_service__ = __webpack_require__("../../../../../src/app/services/user-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_admin_services_service__ = __webpack_require__("../../../../../src/app/services/admin-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Google
// import { GoogleMapDirective } from '../app/directives/google-map.directive';
















// Admin components









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
        component: __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__["a" /* MenuComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]]
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
        canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__["a" /* SettingsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]],
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
                component: __WEBPACK_IMPORTED_MODULE_11__orders_orders_component__["a" /* OrdersComponent */],
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
                path: 'payments',
                component: __WEBPACK_IMPORTED_MODULE_12__payments_payments_component__["a" /* PaymentsComponent */],
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
                redirectTo: '/orders',
                pathMatch: 'full',
            },
            {
                path: 'orders',
                component: __WEBPACK_IMPORTED_MODULE_11__orders_orders_component__["a" /* OrdersComponent */],
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_26__admin_login_login_component__["a" /* LoginComponent */]
            },
            {
                path: 'add-admin',
                component: __WEBPACK_IMPORTED_MODULE_22__admin_add_admin_add_admin_component__["a" /* AddAdminComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'reports',
                component: __WEBPACK_IMPORTED_MODULE_28__admin_reports_reports_component__["a" /* ReportsComponent */],
                data: { title: 'Report' },
                canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'menu',
                component: __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__["a" /* MenuComponent */],
                data: { title: 'Menu' },
                canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'add-rewards',
                component: __WEBPACK_IMPORTED_MODULE_29__admin_add_rewards_add_rewards_component__["a" /* AddRewardsComponent */],
                data: { title: 'Reward Points' },
                canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'add-items',
                component: __WEBPACK_IMPORTED_MODULE_24__admin_add_items_add_items_component__["a" /* AddItemsComponent */],
                data: { title: 'Add Items' },
                canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'settings',
                component: __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__["a" /* SettingsComponent */],
                data: { title: 'Settings' },
                canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'add-category',
                component: __WEBPACK_IMPORTED_MODULE_23__admin_add_category_add_category_component__["a" /* AddCategoryComponent */],
                data: { title: 'Add Category' },
                canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]]
            },
            {
                path: 'add-sub-category',
                component: __WEBPACK_IMPORTED_MODULE_25__admin_add_subs_add_subs_component__["a" /* AddSubsComponent */],
                data: { title: 'Add Sub Category' },
                canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]]
            },
        ]
    }
    // {
    //     path: 'admin',
    //     component: AdminComponent,
    //     // canActivate: [AdminAuthGuard],
    //     children: [
    //         {
    //             path: '',
    //             redirectTo: '/orders',
    //             pathMatch: 'full',
    //         },
    //         {
    //             path: 'login',
    //             component: LoginComponent,
    //             data: { title: 'Admin Login' }
    //         },
    //         {
    //             path: 'add-admin',
    //             component: AddAdminComponent,
    //             canActivate: [AuthGuard]
    //         },
    //         {
    //             path: 'orders',
    //             component: OrdersComponent,
    //             data: { title: 'Orders' },
    //             canActivate: [AuthGuard]
    //         },
    //         {
    //             path: 'reports',
    //             component: ReportsComponent,
    //             data: { title: 'Report' },
    //             canActivate: [AuthGuard]
    //         },
    //         {
    //             path: 'menu',
    //             component: MenuComponent,
    //             data: { title: 'Menu' },
    //             canActivate: [AuthGuard]
    //         },
    //         {
    //             path: 'add-rewards',
    //             component: AddRewardsComponent,
    //             data: { title: 'Reward Points' },
    //             canActivate: [AuthGuard]
    //         },
    //         {
    //             path: 'add-items',
    //             component: AddItemsComponent,
    //             data: { title: 'Add Items' },
    //             canActivate: [AuthGuard]
    //         },
    //         {
    //             path: 'settings',
    //             component: SettingsComponent,
    //             data: { title: 'Settings' },
    //             canActivate: [AuthGuard]
    //         },
    //         {
    //             path: 'add-category',
    //             component: AddCategoryComponent,
    //             data: { title: 'Add Category' },
    //             canActivate: [AuthGuard]
    //         },
    //         {
    //             path: 'add-sub-category',
    //             component: AddSubsComponent,
    //             data: { title: 'Add Sub Category' },
    //             canActivate: [AuthGuard]
    //         },
    //     ]
    // },
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
            __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_11__orders_orders_component__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_12__payments_payments_component__["a" /* PaymentsComponent */],
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
            __WEBPACK_IMPORTED_MODULE_29__admin_add_rewards_add_rewards_component__["a" /* AddRewardsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_37_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_30__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_31__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_32__services_admin_auth_service__["a" /* AdminAuthService */], __WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_33__services_get_menu_service__["a" /* GetMenuService */], __WEBPACK_IMPORTED_MODULE_36__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_34__services_user_service_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_35__services_admin_services_service__["a" /* AdminServicesService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Det Title Div-->\n<div class=\"det-title-div\">\n  <div class=\"det-title-core\">\n    <h2 class=\"det-title\">Change Password</h2>\n  </div>\n</div>\n\n<!-- Det core div -->\n<div class=\"dets-core\">\n  <ul class=\"list-unstyled\">\n    <li class=\"\">\n      <label for=\"old-pwd\">Old Password</label>\n    </li>\n    <li class=\"\">\n      <input type=\"password\" name=\"old-pwd\" id=\"old-pwd\" [(ngModel)]='oldPassword' class=\"inputs\" value=\"\">\n    </li>\n    <li class=\"\">\n      <label for=\"new-pwd\">New Password</label>\n    </li>\n    <li class=\"\">\n      <input type=\"text\" name=\"new-pwd\" class=\"inputs\" [(ngModel)]='newPassword' id=\"new-pwd\" value=\"\">\n    </li>\n    <li class=\"\">\n      <label for=\"re-new-pwd\">Retype New Password</label>\n    </li>\n    <li class=\"\">\n      <input type=\"text\" name=\"re-new-pwd\" class=\"inputs\" [(ngModel)]='conNewPassword' id=\"re-new-pwd\" value=\"\">\n    </li>\n    <li>\n      <p class=\"err\"></p>\n    </li>\n  </ul>\n  <div class=\"bottom-div\">\n    <div class=\"save-btns-div pull-left\">\n      <button type=\"button\" class=\"save-btns\" style=\"width:150px\" (click)='changePwd()'>Update</button>\n    </div>\n    <div class=\"clearfix\">\n    </div>\n\n  </div>\n</div>"

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
        styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], ChangePasswordComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=change-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Address edit section */\r\n.address-edit-db{\r\n  position: fixed;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  top:0;\r\n  left:0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: none;\r\n}\r\n.checkout-main-container {\r\n  margin: 0;\r\n  background-color: #F2F5F6;\r\n  padding: 20px 0px 50px 0px;\r\n  color: #515151;\r\n}\r\n\r\n.head-divs {\r\n  border-bottom: 2px solid #F2F5F6;\r\n  padding: 0 20px;\r\n  margin: 0;\r\n}\r\n\r\n.section-titles {\r\n  font-size: 100%;\r\n  font-weight: bold;\r\n  margin: 15px auto 15px auto;\r\n  color: #515151;\r\n}\r\n\r\nh6 {\r\n  font-size: 110%;\r\n  margin: 0 0 10px 0;\r\n}\r\n\r\n.address-section,\r\n.payment-selection-section,\r\n.order-summary-section {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  border-radius: 2px;\r\n  margin: 0;\r\n  margin-bottom: 10px;\r\n  /*padding: 10px;*/\r\n  /*box-shadow: 0 0 1px 1px rgba(0,0, 0, 0.3);*/\r\n}\r\n\r\n\r\n/* Left dets */\r\n\r\n.left-dets-section {\r\n  width: 30%;\r\n}\r\n\r\n.warning-div {\r\n  padding: 15px 15px;\r\n  background-color: #F04F60;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  margin: 10px 20px;\r\n  font-size: 90%;\r\n}\r\n\r\n.user-address-div {\r\n  position: relative;\r\n  display: block;\r\n  min-height: 80px;\r\n  padding: 10px 20px;\r\n  height: auto;\r\n  border-bottom: 2px solid #F2F5F6;\r\n}\r\n\r\n.user-address {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  width: 80%;\r\n  margin: 0;\r\n}\r\n\r\n.user-address-item {\r\n  margin-top: 20px;\r\n}\r\n\r\n.address-lines {\r\n  margin-left: 10px;\r\n}\r\n\r\n.address-lines-title {\r\n  margin: 0 0 10px 0;\r\n  color: #000;\r\n  font-weight: bold;\r\n}\r\n\r\n.address-edit-div {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  width: 20%;\r\n  height: 100%;\r\n  min-height: 80px;\r\n  margin: 0;\r\n}\r\n\r\n#edit-address {\r\n  border: none;\r\n  background-color: transparent;\r\n  color: #fa0000;\r\n}\r\n\r\n\r\n/* Instructions section */\r\n\r\n.instructions-div {\r\n  position: relative;\r\n  display: block;\r\n  margin: 0;\r\n  padding: 20px;\r\n}\r\n\r\n#delivery-instructions-input {\r\n  width: 100%;\r\n  height: 50px;\r\n  resize: none;\r\n  outline: none;\r\n  font-size: 90%;\r\n  padding: 5px 10px;\r\n  border: 2px solid rgba(0, 0, 0, 0.1);\r\n  border-radius: 3px;\r\n}\r\n\r\n\r\n/* Payments options */\r\n\r\n.payment-selection-section {\r\n  position: relative;\r\n  display: block;\r\n  padding: 4px 0 0 0;\r\n}\r\n\r\n.payment-options-ul li {\r\n  padding: 10px 20px 10px 20px;\r\n  border-bottom: 2px solid #F2F5F6;\r\n}\r\n\r\n.payment-options-ul li label {\r\n  height: 100%;\r\n  width: 100%;\r\n  font-weight: normal;\r\n}\r\n\r\n.payment-options-ul li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n\r\n/* Right dets */\r\n\r\n.right-dets-section {\r\n  width: 68%;\r\n}\r\n\r\n\r\n/* Order Summary section */\r\n\r\n/* .order-summary-body {} */\r\n\r\n.delivery-on-statement {\r\n  font-weight: bold;\r\n  padding: 20px 20px 10px 20px;\r\n  ;\r\n}\r\n\r\n.delivery-items-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 100%;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -ms-flex-line-pack: start;\r\n      align-content: flex-start;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  margin: 10px auto 20px auto;\r\n  padding: 0 20px;\r\n}\r\n.delivery-items-div>div{\r\n  width: 100%;\r\n}\r\n\r\n.delivery-item {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 100%;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  margin: 10px auto;\r\n  height: 100px;\r\n}\r\n\r\n.delivery-item-left {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  width: 70%;\r\n  height: 100%;\r\n}\r\n\r\n.delivery-item-image {\r\n  position: relative;\r\n  margin: 0;\r\n  width: 150px;\r\n  height: 100%;\r\n  /* background-image: url('../../assets/menu-img/food.jpg'); */\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.delivery-item-dets {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  margin: 0;\r\n  width: auto;\r\n  height: 100%;\r\n  padding: 20px;\r\n}\r\n\r\n/* .delivery-item-dets h5 {\r\n  width: 100%;\r\n  text-align: left;\r\n  margin: 0;\r\n  margin-bottom: 7px;\r\n} */\r\n.delivery-item-dets span {\r\n  width: 100%;\r\n  text-align: left;\r\n  margin: 0;\r\n  margin-bottom: 7px;\r\n}\r\n\r\n.delivery-item-name {\r\n  text-align: left;\r\n  font-size: 105%;\r\n  color: #333;\r\n}\r\n\r\n.delivery-item-price {\r\n  font-size: 100%;\r\n  color: #888;\r\n}\r\n\r\n.delivery-dets {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  margin: 0;\r\n  width: 30%;\r\n  height: 100%;\r\n}\r\n\r\n.number-btns {\r\n  border: none;\r\n  background: transparent;\r\n  color: #fa0000;\r\n  margin: 0 7px;\r\n  font-size: 130%;\r\n}\r\n\r\n.price-core {\r\n  font-size: 110%;\r\n  color: #515151;\r\n}\r\n\r\n.order-summary-body h6 {\r\n  margin: 0px auto 10px auto;\r\n}\r\n\r\n/* .charges-div {\r\n  padding: 20px;\r\n} */\r\n\r\n.charges-div h6 {\r\n  font-size: 100%;\r\n}\r\n\r\n.cost-core {\r\n  font-size: 110%;\r\n  color: #515151;\r\n}\r\n\r\n.delivery-fee,\r\n.total-pay,\r\n.reward-points {\r\n  padding: 6px 20px;\r\n}\r\n\r\n.total-pay {\r\n  margin-top: 6px;\r\n}\r\n\r\n.total-fee {\r\n  padding: 10px 20px;\r\n  border-bottom: 2px solid #F2F5F6;\r\n}\r\n\r\n.place-order-btn-div {\r\n  padding: 20px;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n}\r\n\r\n.place-order-notif {\r\n  position: relative;\r\n  display: block;\r\n  font-size: 90%;\r\n  font-weight: normal;\r\n  font-style: italic;\r\n  width: 98%;\r\n  margin: 5px 20px 10px 20px;\r\n}\r\n\r\n#place-order-button {\r\n  position: relative;\r\n  display: block;\r\n  width: 98%;\r\n  margin: 5px 1% 7px 1%;\r\n  border: none;\r\n  border-radius: 3px;\r\n  background-color: #F04F60;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  padding: 10px 0;\r\n}\r\n\r\n\r\n/* Extra Small Devices, .visible-xs-* */\r\n\r\n\r\n/* @media (max-width: 480px) {} */\r\n\r\n@media (max-width: 767px) {\r\n  .checkout-main-container {\r\n    padding-top: 100px;\r\n  }\r\n  .left-dets-section,\r\n  .right-dets-section {\r\n    position: relative;\r\n    display: block;\r\n    width: 90%;\r\n    margin: 10px 5%;\r\n  }\r\n  .delivery-item {\r\n    max-height: 200px;\r\n  }\r\n}\r\n\r\n\r\n/* Small Devices, .visible-sm-* */\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {}\r\n\r\n\r\n/* Medium Devices, .visible-md-* */\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {}\r\n\r\n\r\n/* Large Devices, .visible-lg-* */\r\n\r\n@media (min-width: 1200px) {}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header for mobiles and smaller devices -->\n<header class=\"mob-main-header visible-sm visible-xs\">\n  <button type=\"button\" class=\"mob-menu-trig-btn\">\n                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n            </button>\n  <div class=\"mob-main-logo\">\n    <img src=\"../../assets/logo/logo_black.png\">\n  </div>\n</header>\n<header class=\"main-header visible-md visible-lg\">\n  <div class=\"container\">\n    <div class=\"main-logo pull-left\">\n      <img src=\"../../assets/logo/logo_black.png\">\n    </div>\n    <ul class=\"list-inline det-ul visible-xs visible-sm pull-right\">\n      <li>\n        <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp; <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i> </button>\n      </li>\n    </ul>\n    <ul class=\"list-inline det-ul pull-left visible-md visible-lg\">\n      <li>\n        <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp; <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i> </button>\n      </li>\n      <li>\n        <a href=\"\" class=\"dets-div-btns selected\" id=\"our-menu-btn\">Our Menu</a>\n      </li>\n      <!-- <li>\n                <a class=\"dets-div-btns\" id=\"schedule-menu-btn\" (click)='schMenuBtn(schTrigBtn)'>Schedule Menu</a>\n            </li> -->\n    </ul>\n    <div class=\"scroll-login-div pull-right  visible-md visible-lg\">\n      <ul class=\"list-inline sc-ul\">\n        <li class=\"login-trig-div\" *ngIf=\"!authService.loggedIn()\">\n          <button type=\"button\" class=\"login-signup-trig-btn dets-div-btns\" (click)=\"appComponent.loginSignupTrigger()\">Log in/Sign up</button>\n        </li>\n        <li class=\"account-trig-div\" *ngIf=\"authService.loggedIn()\">\n          <div class=\"dropdown\">\n            <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\">Account</button>\n            <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings'>My Profile</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/my-orders'>My Orders</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/address'>Saved Address</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/payments'>Payments</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/reward-points'>Reward Points</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/change-password'>Change Password</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"onLogoutClick()\">Logout</a></li>\n            </ul>\n          </div>\n        </li>\n      </ul>\n\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n</header>\n\n<div class=\"checkout-main-container\">\n  <!-- Header for mobiles and smaller devices -->\n  <header class=\"mob-main-header visible-sm visible-xs\">\n    <button type=\"button\" class=\"mob-menu-trig-btn\">\n                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n            </button>\n    <div class=\"mob-main-logo\">\n      <img src=\"../assets/logo/logo.png\">\n    </div>\n  </header>\n  <div class=\"container\">\n\n    <!-- Left Dets -->\n    <div class=\"left-dets-section pull-left\">\n\n      <!-- Address and instructions section -->\n      <div class=\"address-section\">\n\n        <div class=\"address-head-div head-divs\">\n          <h3 class=\"section-titles\">Delivery Address</h3>\n        </div>\n        <div class=\"body-div\">\n\n          <!-- Warning -->\n          <div class=\"warning-div\">\n            Please make sure address is accurate\n          </div>\n\n          <!-- Address statement -->\n\n          <div class=\"user-address-div\">\n\n            <div *ngFor=\"let address of addresses;let i = index\">\n              \n              <label style=\"cursor:pointer\">\n              <div class=\"user-address-item\">\n                <div class=\"user-address pull-left\">\n                  <div class=\"pull-left\">\n                    <input type=\"radio\" name=\"check_address\" value=\"i\" (change)=\"addressChecked()\">\n                  </div>\n                  <div class=\"pull-left address-lines\">\n                    <h5 class=\"address-lines-title\">Address {{i+1}}</h5>\n                    {{address}}\n                  </div>\n                  <div class=\"clearfix\"></div>\n                </div>\n                <div class=\"address-edit-div pull-right\">\n                  <button type=\"button\" id=\"edit-address\">Edit</button>\n                </div>\n                <div class=\"clearfix\"></div>\n              </div>\n              </label>\n              <div class=\"address-edit-db\">\n                <div class=\"address-edit-div\">\n                    <label for=\"adress-text\">\n                      <textarea>\n                        {{address}}\n                      </textarea>\n                    </label>\n                </div>\n              </div>\n\n            </div>\n\n\n          </div>\n\n          <div class=\"instructions-div\">\n            <h6>Delivery Instructions</h6>\n            <textarea id=\"delivery-instructions-input\" placeholder=\"Instructions for your driver (Optional)\"></textarea>\n          </div>\n\n        </div>\n\n      </div>\n\n      <!-- Payment Gateway Section -->\n      <div class=\"payment-selection-section\">\n\n        <div class=\"address-head-div head-divs\">\n          <h3 class=\"section-titles\"> Select Payment Method</h3>\n        </div>\n\n        <div class=\"payment-options-div body-div\">\n          <ul class=\"payment-options-ul list-unstyled\">\n            <li>\n              <label for=\"credit\">\n                                <input type=\"radio\" name=\"payment\" id=\"credit\" value=\"credit\"> &nbsp; Wallet\n                            </label>\n            </li>\n            <li>\n              <label for=\"paypal\">\n                                <input type=\"radio\" name=\"payment\" id=\"paypal\" value=\"paypal\"> &nbsp; Cash on Delivery\n                            </label>\n            </li>\n            <li>\n              <label for=\"invoice\">\n                                <input type=\"radio\" name=\"payment\" id=\"invoice\" value=\"invoice\"> &nbsp; Pay Online\n                            </label>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n    </div>\n\n    <!-- Right Dets -->\n    <div class=\"right-dets-section pull-right\">\n\n      <!-- Order Summary section -->\n      <div class=\"order-summary-section\">\n\n        <div class=\"address-head-div head-divs\">\n          <h3 class=\"section-titles\">Order Summary</h3>\n        </div>\n\n        <div class=\"body-div order-summary-body\">\n          \n      <div class=\"delivery-items-div\">\n\n          <!-- Day today-->\n        <div *ngIf=\"today_date !=null\">\n          <h6 class=\"delivery-on-statement\">Delivery on {{today_date}} &nbsp; {{today_slot}}</h6>\n          <!-- Today exists -->\n            <div class=\"delivery-item\">\n\n              <div class=\"delivery-item-left\">\n                <div class=\"delivery-item-dets\">\n                  <span *ngFor=\"let menu of today_menu\">\n                    <p class=\"delivery-item-name\">{{menu.item_name}}</p>\n                  </span>\n                  <h5 class=\"delivery-item-price\">&#8377;<span class=\"item-cost-number\"> {{today_per_portion_price}} </span> per portion</h5>\n                </div>\n              </div>\n\n              <div class=\"delivery-dets\">\n                <!-- Number of items -->\n                <div class=\"delivery-number-div\">\n                  <div class=\"delivery-number-core\">\n                    <button type=\"button\" class=\"number-minus-btn number-btns\"> - </button>\n                    <span class=\"input-number\"> {{today_num_items}} </span>\n                    <button type=\"button\" class=\"number-plus-btn number-btns\"> + </button>\n                  </div>\n                </div>\n                <!-- Delivery item price -->\n                <div class=\"price-div\">\n                  <div class=\"price-core\">\n                    &#8377; <span class=\"item-total-cost-number\"> {{today_total_price}} </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          <!-- <div class=\"delivery-item\">\n\n              <div class=\"delivery-item-left\">\n                <div class=\"delivery-item-image\">\n\n                </div>\n                <div class=\"delivery-item-dets\">\n                  <h5 class=\"delivery-item-name\">Item name</h5>\n                  <h5 class=\"delivery-item-price\">&#8377;<span class=\"item-cost-number\"> 600 </span> per portion</h5>\n                </div>\n              </div>\n\n              <div class=\"delivery-dets\">\n                \n                <div class=\"delivery-number-div\">\n                  <div class=\"delivery-number-core\">\n                    <button type=\"button\" class=\"number-minus-btn number-btns\"> - </button>\n                    <span class=\"input-number\"> 5 </span>\n                    <button type=\"button\" class=\"number-plus-btn number-btns\"> + </button>\n                  </div>\n                </div>\n                \n                <div class=\"price-div\">\n                  <div class=\"price-core\">\n                    &#8377; <span class=\"item-total-cost-number\"> 600 </span>\n                  </div>\n                </div>\n              </div>\n            </div> -->\n\n          \n        </div>\n        <!-- Day one -->\n        <div *ngIf=\"day_one_date !=null\">\n          <h6 class=\"delivery-on-statement\">Delivery on {{day_one_date}} &nbsp; {{day_one_slot}}</h6>\n\n\n            <div class=\"delivery-item\">\n              <div class=\"delivery-item-left\">\n                <div class=\"delivery-item-dets\">\n                  <span *ngFor=\"let menu of day_one_menu\">\n                    <p class=\"delivery-item-name\">{{menu.item_name}}</p>\n                  </span>\n                  <h5 class=\"delivery-item-price\">&#8377;<span class=\"item-cost-number\"> {{day_one_per_portion_price}} </span> per portion</h5>\n                </div>\n              </div>\n\n              <div class=\"delivery-dets\">\n                <!-- Number of items -->\n                <div class=\"delivery-number-div\">\n                  <div class=\"delivery-number-core\">\n                    <button type=\"button\" class=\"number-minus-btn number-btns\"> - </button>\n                    <span class=\"input-number\"> {{day_one_num_items}} </span>\n                    <button type=\"button\" class=\"number-plus-btn number-btns\"> + </button>\n                  </div>\n                </div>\n                <!-- Delivery item price -->\n                <div class=\"price-div\">\n                  <div class=\"price-core\">\n                    &#8377; <span class=\"item-total-cost-number\"> {{day_one_total_price}} </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n        </div>\n        <!-- Day two -->\n        <div *ngIf=\"day_two_date !=null\">\n          <h6 class=\"delivery-on-statement\">Delivery on {{day_two_date}} &nbsp; {{day_two_slot}}</h6>\n\n\n          \n            <div class=\"delivery-item\">\n              <div class=\"delivery-item-left\">\n                <div class=\"delivery-item-dets\">\n                  <span *ngFor=\"let menu of day_two_menu\">\n                    <p class=\"delivery-item-name\">{{menu.item_name}}</p>\n                  </span>\n                  <h5 class=\"delivery-item-price\">&#8377;<span class=\"item-cost-number\"> {{day_two_per_portion_price}} </span> per portion</h5>\n                </div>\n              </div>\n\n              <div class=\"delivery-dets\">\n                <!-- Number of items -->\n                <div class=\"delivery-number-div\">\n                  <div class=\"delivery-number-core\">\n                    <button type=\"button\" class=\"number-minus-btn number-btns\"> - </button>\n                    <span class=\"input-number\"> {{day_two_num_items}} </span>\n                    <button type=\"button\" class=\"number-plus-btn number-btns\"> + </button>\n                  </div>\n                </div>\n                <!-- Delivery item price -->\n                <div class=\"price-div\">\n                  <div class=\"price-core\">\n                    &#8377; <span class=\"item-total-cost-number\"> {{day_two_total_price}} </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          \n\n\n        </div>\n        <!-- Day three -->\n        <div *ngIf=\"day_three_date !=null\">\n          <h6 class=\"delivery-on-statement\">Delivery on {{day_three_date}} &nbsp; {{day_three_slot}}</h6>\n\n          \n            <div class=\"delivery-item\">\n              <div class=\"delivery-item-left\">\n                <div class=\"delivery-item-dets\">\n                  <span *ngFor=\"let menu of day_three_menu\">\n                  <p class=\"delivery-item-name\">{{menu.item_name}}</p>\n                  </span>\n                  <h5 class=\"delivery-item-price\">&#8377;<span class=\"item-cost-number\"> {{day_three_per_portion_price}} </span> per portion</h5>\n                </div>\n              </div>\n\n              <div class=\"delivery-dets\">\n                <!-- Number of items -->\n                <div class=\"delivery-number-div\">\n                  <div class=\"delivery-number-core\">\n                    <button type=\"button\" class=\"number-minus-btn number-btns\"> - </button>\n                    <span class=\"input-number\"> {{day_three_num_items}} </span>\n                    <button type=\"button\" class=\"number-plus-btn number-btns\"> + </button>\n                  </div>\n                </div>\n                <!-- Delivery item price -->\n                <div class=\"price-div\">\n                  <div class=\"price-core\">\n                    &#8377; <span class=\"item-total-cost-number\"> {{day_three_total_price}} </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          \n        </div>\n        <!-- Day Four -->\n        <div *ngIf=\"day_four_date !=null\">\n          <h6 class=\"delivery-on-statement\">Delivery on {{day_four_date}} &nbsp; {{day_four_slot}}</h6>\n\n            <div class=\"delivery-item\">\n              <div class=\"delivery-item-left\">\n                <div class=\"delivery-item-dets\">\n                  <span *ngFor=\"let menu of day_four_menu\">\n                    <p class=\"delivery-item-name\">{{menu.item_name}}</p>\n                  </span>\n                  <h5 class=\"delivery-item-price\">&#8377;<span class=\"item-cost-number\"> {{day_four_per_portion_price}} </span> per portion</h5>\n                </div>\n              </div>\n\n              <div class=\"delivery-dets\">\n                <!-- Number of items -->\n                <div class=\"delivery-number-div\">\n                  <div class=\"delivery-number-core\">\n                    <button type=\"button\" class=\"number-minus-btn number-btns\"> - </button>\n                    <span class=\"input-number\"> {{day_four_num_items}} </span>\n                    <button type=\"button\" class=\"number-plus-btn number-btns\"> + </button>\n                  </div>\n                </div>\n                <!-- Delivery item price -->\n                <div class=\"price-div\">\n                  <div class=\"price-core\">\n                    &#8377; <span class=\"item-total-cost-number\"> {{day_four_total_price}} </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n        </div>\n        <!-- Day five -->\n        <div *ngIf=\"day_five_date !=null\">\n          <h6 class=\"delivery-on-statement\">Delivery on {{day_five_date}} &nbsp; {{day_five_slot}}</h6>\n\n            <div class=\"delivery-item\">\n              <div class=\"delivery-item-left\">\n                <div class=\"delivery-item-dets\">\n                  <span *ngFor=\"let menu of day_five_menu\">\n                    <p class=\"delivery-item-name\">{{menu.item_name}}</p>\n                  </span>\n                  <h5 class=\"delivery-item-price\">&#8377;<span class=\"item-cost-number\"> {{day_five_per_portion_price}} </span> per portion</h5>\n                </div>\n              </div>\n\n              <div class=\"delivery-dets\">\n                <!-- Number of items -->\n                <div class=\"delivery-number-div\">\n                  <div class=\"delivery-number-core\">\n                    <button type=\"button\" class=\"number-minus-btn number-btns\"> - </button>\n                    <span class=\"input-number\"> {{day_five_num_items}} </span>\n                    <button type=\"button\" class=\"number-plus-btn number-btns\"> + </button>\n                  </div>\n                </div>\n                <!-- Delivery item price -->\n                <div class=\"price-div\">\n                  <div class=\"price-core\">\n                    &#8377; <span class=\"item-total-cost-number\"> {{day_five_total_price}} </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n        </div>\n        <!-- Day six -->\n        <div *ngIf=\"day_six_date !=null\">\n          <h6 class=\"delivery-on-statement\">Delivery on {{day_six_date}} &nbsp; {{day_six_slot}}</h6>\n\n          \n            <div class=\"delivery-item\">\n              <div class=\"delivery-item-left\">\n                <div class=\"delivery-item-dets\">\n                  <span *ngFor=\"let menu of day_six_menu\">\n                    <p class=\"delivery-item-name\">{{menu.item_name}}</p>\n                  </span>\n                  <h5 class=\"delivery-item-price\">&#8377;<span class=\"item-cost-number\"> {{day_six_per_portion_price}} </span> per portion</h5>\n                </div>\n              </div>\n\n              <div class=\"delivery-dets\">\n                <!-- Number of items -->\n                <div class=\"delivery-number-div\">\n                  <div class=\"delivery-number-core\">\n                    <button type=\"button\" class=\"number-minus-btn number-btns\"> - </button>\n                    <span class=\"input-number\"> {{day_six_num_items}} </span>\n                    <button type=\"button\" class=\"number-plus-btn number-btns\"> + </button>\n                  </div>\n                </div>\n                <!-- Delivery item price -->\n                <div class=\"price-div\">\n                  <div class=\"price-core\">\n                    &#8377; <span class=\"item-total-cost-number\"> {{day_six_total_price}} </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          \n\n        </div>\n            \n\n\n          </div>\n\n          <div class=\"charges-div\">\n            <div class=\"delivery-fee\">\n              <div class=\"pull-left\">\n                <h6>Delivery Fee</h6>\n              </div>\n              <div class=\"pull-right cost-core\">\n                &#8377; <span class=\"cost-number\"> {{delivery_fee}} </span>\n              </div>\n              <div class=\"clearfix\"></div>\n            </div>\n\n            <div class=\"total-fee\">\n              <div class=\"pull-left\">\n                <h6>Total</h6>\n              </div>\n              <div class=\"pull-right cost-core\">\n                &#8377;<span class=\"cost-number\"> {{total_price}} </span>\n              </div>\n              <div class=\"clearfix\"></div>\n            </div>\n\n            <div class=\"total-pay\">\n              <div class=\"pull-left\">\n                <h6>Total to pay</h6>\n              </div>\n              <div class=\"pull-right cost-core\">\n                &#8377;<span class=\"cost-number\"> {{total_price}}</span>\n              </div>\n              <div class=\"clearfix\"></div>\n            </div>\n\n            <!-- <div class=\"reward-points\">\n              <div class=\"pull-left\">\n                <h6>Reward points</h6>\n              </div>\n              <div class=\"pull-right cost-core\">\n                <span class=\"cost-number\"> 5 </span>\n              </div>\n              <div class=\"clearfix\"></div>\n            </div> -->\n          </div>\n          <!-- <span class=\"place-order-notif\">*Blah blah blah blah</span> -->\n        </div>\n        <!-- <button type=\"button\" id=\"place-order-button\">Place Order</button> -->\n      </div>\n\n    </div>\n    <div class=\"clearfix\"></div>\n    <div class=\"place-order-btn-div\">\n      <button type=\"button\" id=\"place-order-button\">Place Order</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
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




var CheckoutComponent = (function () {
    function CheckoutComponent(authService, title, router) {
        this.authService = authService;
        this.title = title;
        this.router = router;
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
        this.delivery_fee = 30;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Getting orders
        this.title.setTitle('Fysu - Checkout');
        var user = this.authService.getUserFromLocal();
        var user_parsed = JSON.parse(user);
        this.userEmail = user_parsed.email;
        this.userName = user_parsed.name;
        this.companyName = user_parsed.company_name;
        this.userMobile = user_parsed.mobile;
        this.userId = user_parsed.id;
        // Get orders from local storage
        var s_orders = localStorage.getItem('all_orders');
        this.orders = JSON.parse(s_orders);
        //Get addresses
        this.authService.getUserAddressses(this.userId).subscribe(function (res) {
            if (res.success) {
                _this.addresses = res.msg[0].address;
            }
        });
        if (this.orders['today'] != null) {
            this.today_date = this.orders['today'].date;
            this.today_per_portion_price = this.orders['today'].perPortionPrice;
            this.today_total_price = this.orders['today'].totalPrice;
            this.today_num_items = this.orders['today'].numOfTimes;
            this.today_menu = this.orders['today'].menu;
            // Time slots
            switch (this.orders['today'].timeSlot) {
                case 'slot_one':
                    this.today_slot = this.slot_one;
                    break;
                case 'slot_two':
                    this.today_slot = this.slot_two;
                    break;
                case 'slot_three':
                    this.today_slot = this.slot_three;
                    break;
                default:
                    break;
            }
        }
        else {
            this.today_menu = null;
        }
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
        // console.log(this.orders['day_five']);
        // this.today_orders = this.orders['today'];
        // console.log(this.today_orders);
        // Get location from local storage
        this.total_price = this.delivery_fee + this.today_total_price + this.day_one_total_price + this.day_two_total_price + this.day_three_total_price + this.day_four_total_price + this.day_five_total_price + this.day_six_total_price;
        // this.address = localStorage.getItem('home_address');
        // console.log(this.address);
    };
    CheckoutComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
        return false;
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__("../../../../../src/app/checkout/checkout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/checkout.component.css"), __webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], CheckoutComponent);

var _a, _b, _c;
//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title-img-div {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/contact-us.jpg") + ");\r\n  background-size: cover;\r\n  background-position: 0% 54%;\r\n}\r\n.contact-core{\r\n    position: relative;\r\n    display: block;\r\n}\r\ntable td{\r\n    padding: 20px 0px;\r\n}\r\ntable h6{\r\n    font-size: 140%;\r\n}\r\ntable img{\r\n    height: 80px;\r\n    margin-right: 30px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header for mobiles and smaller devices -->\n<header class=\"mob-main-header visible-sm visible-xs\">\n  <button type=\"button\" class=\"mob-menu-trig-btn\">\n                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n            </button>\n  <div class=\"mob-main-logo\">\n    <img src=\"../../assets/logo/logo_black.png\">\n  </div>\n</header>\n<header class=\"main-header visible-md visible-lg\">\n  <div class=\"container\">\n    <div class=\"main-logo pull-left\" routerLink='/home'>\n      <img src=\"../../assets/logo/logo_black.png\">\n    </div>\n    <ul class=\"list-inline det-ul visible-xs visible-sm pull-right\">\n      <li>\n        <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp; <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i> </button>\n      </li>\n    </ul>\n    <ul class=\"list-inline det-ul pull-left visible-md visible-lg\">\n      <li>\n        <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp; <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i> </button>\n      </li>\n      <li>\n        <a href=\"\" class=\"dets-div-btns\" id=\"our-menu-btn\">Our Menu</a>\n      </li>\n      <!-- <li>\n        <a class=\"dets-div-btns\" id=\"schedule-menu-btn\" (click)='schMenuBtn(schTrigBtn)'>Schedule Menu</a>\n      </li> -->\n    </ul>\n    <div class=\"scroll-login-div pull-right  visible-md visible-lg\">\n      <ul class=\"list-inline sc-ul\">\n        <li class=\"login-trig-div\" *ngIf=\"!authService.loggedIn()\">\n          <button type=\"button\" class=\"login-signup-trig-btn dets-div-btns\" (click)=\"appComponent.loginSignupTrigger()\">Log in/Sign up</button>\n        </li>\n        <li class=\"account-trig-div\" *ngIf=\"authService.loggedIn()\">\n          <div class=\"dropdown\">\n            <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\">Account</button>\n            <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings'>My Profile</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/my-orders'>My Orders</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/address'>Saved Address</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/payments'>Payments</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/reward-points'>Reward Points</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/change-password'>Change Password</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"onLogoutClick()\">Logout</a></li>\n            </ul>\n          </div>\n        </li>\n      </ul>\n\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n</header>\n<div class=\"con-section jumbotron\">\n  <div class=\"title-img-div\">\n    <div class=\"db\"></div>\n    <h2 class=\"web-sec-heads\">CONTACT US</h2>\n  </div>\n  <div class=\"container\">\n    \n\n    <div class=\"contact-core\">\n        <table>\n          <tr>\n            <td>\n              <!-- Mobile icon -->\n              <img src=\"../../assets/img/mobile.png\" alt=\"\">\n            </td>\n            <td>\n              <h6>Customer Support : +91 9393290390</h6>\n            </td>\n\n          </tr>\n          <tr>\n            <td>\n              <img src=\"../../assets/img/mail.png\" alt=\"\">\n            </td>\n\n            <td>\n              <h6>info@fysu.in</h6>\n            </td>\n\n          </tr>\n        </table>\n\n    </div>\n\n\n  </div>\n</div>"

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
    function ContactComponent(router, title, appComponent, authService) {
        this.router = router;
        this.title = title;
        this.appComponent = appComponent;
        this.authService = authService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Contact - Fysu');
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css"), __webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], ContactComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=contact.component.js.map

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
            // this.router.navigate(['/home']);
            // console.log('false');
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
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
exports.push([module.i, "a {\r\n  text-decoration: none !important;\r\n}\r\n\r\n\r\n/* Typed font */\r\n\r\n.typed,\r\n.typed-two {\r\n  font-weight: 300;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n\r\n/* Loading gif */\r\n\r\n\r\n/* \r\n#loading {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 100;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(192, 192, 192, 0.5);\r\n  background-image: url(\"http://i.stack.imgur.com/MnyxU.gif\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n} */\r\n\r\n\r\n/* Fixed scroll header */\r\n\r\n.scroll-header {\r\n  z-index: 8;\r\n  position: fixed;\r\n  top: -100px;\r\n  left: 0;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  -webkit-justify-content: space-around;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  width: 100vw;\r\n  height: 70px;\r\n  background-color: #fff;\r\n  transition: all 0.2s ease-in;\r\n  /* box-shadow: 0 0 2px 1px #999; */\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.13);\r\n}\r\n\r\n.scroll-header h1 {\r\n  color: #000;\r\n}\r\n\r\n.scroll-header .location-input-div {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  margin-top: 0px;\r\n  padding: 0px;\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.scroll-header .location-search-input {\r\n  border: 1px solid #eaeaea;\r\n  border-top-left-radius: 4px;\r\n  border-bottom-left-radius: 4px;\r\n}\r\n\r\n.scroll-header .login-signup-trig-btn {\r\n  border: none;\r\n  color: #333;\r\n  font-size: 110%;\r\n  background-color: transparent;\r\n  /* letter-spacing: 0.1px; */\r\n}\r\n\r\n.fvp {\r\n  background: transparent;\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/fvp.jpg") + ");\r\n  background-size: cover;\r\n  box-shadow: inset 0 20px 50px 1px rgba(0, 0, 0, 1);\r\n}\r\n\r\n.dark-cover .container {\r\n  width: 95%;\r\n  height: 100%;\r\n}\r\n\r\n\r\n/* Main header */\r\n\r\n.m-main-header {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100px;\r\n  top: 0;\r\n  margin-top: 0;\r\n}\r\n\r\n\r\n/* Main logo */\r\n\r\n.main-logo {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 100%;\r\n  color: #fff;\r\n}\r\n\r\n.main-logo img {\r\n  height: 60%;\r\n  width: auto;\r\n}\r\n\r\n\r\n/* Main navigation bar */\r\n\r\n.main-nav-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 100%;\r\n  color: #fff;\r\n  font-size: 100%;\r\n}\r\n\r\n.main-nav-div > nav > ul > li {\r\n  cursor: pointer;\r\n  font-weight: 300;\r\n  letter-spacing: 1px;\r\n  font-weight: 400;\r\n  width: 140px;\r\n  text-align: center;\r\n}\r\n.home-dropdown #menu1 {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #fff;\r\n}\r\n.main-nav-div .uline {\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.main-nav-div .uline:hover {\r\n  /* text-decoration: underline; */\r\n  color: #6DA942;\r\n}\r\n\r\n.concept-btn-li {\r\n  margin: 0 0px;\r\n}\r\n\r\n.concept-trig-btn {\r\n  /* padding: 6px 10px; */\r\n  height: 40px;\r\n  width: 200px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  margin: 15px auto 0px auto;\r\n  background-color: #6DA942;\r\n  color: #fff;\r\n  font-size: 110%;\r\n  letter-spacing: 1px;\r\n  /* font-weight: bold; */\r\n  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.7);\r\n  transition: all 0.2s ease-out;\r\n}\r\n\r\n.concept-trig-btn:hover {\r\n  background-color: #588835;\r\n}\r\n\r\n.reward-pts-trig-btn {\r\n  position: relative;\r\n  display: block;\r\n  border: 1px solid #fff;\r\n  background: transparent;\r\n  padding: 15px 10px !important;\r\n  border-radius: 4px;\r\n  overflow: hidden;\r\n  letter-spacing: 1px;\r\n  transition: all 0.4s linear;\r\n}\r\n\r\n.main-nav-div li .reward-pts-trig-btn:hover {\r\n  border-color: #6DA942;\r\n}\r\n\r\n.reward-pts-trig-btn p {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 100%;\r\n}\r\n\r\n#rwd-hover-div {\r\n  z-index: -1;\r\n  position: absolute;\r\n  display: block;\r\n  top: 100%;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  /* background-color: #F00E3F; */\r\n  background-color: #6DA942;\r\n  /* background-color: #FE7736; */\r\n  /* background: linear-gradient(to right, #F00E3F, #FE7736); */\r\n  transition: all 0.4s linear;\r\n}\r\n\r\n.reward-pts-trig-btn:hover>#rwd-hover-div {\r\n  top: 0;\r\n}\r\n\r\n.reward-pts-trig-btn:hover {\r\n  text-decoration: none !important;\r\n}\r\n\r\n\r\n/* in-container for main text */\r\n\r\n.container .in-container {\r\n  position: relative;\r\n  display: block;\r\n  margin: 0 auto;\r\n  height: 75%;\r\n  width: 90%;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n/* Main text div */\r\n\r\n.main-text {\r\n  position: absolute;\r\n  top: 45%;\r\n  /* left:35%; */\r\n  -webkit-transform: translate(0, -50%);\r\n          transform: translate(0, -50%);\r\n  bottom: 10%;\r\n  color: #fff;\r\n}\r\n\r\n.main-text h2 {\r\n  font-size: 300%;\r\n  margin-bottom: 20px;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.main-text h3 {\r\n  font-size: 120%;\r\n}\r\n\r\n.typed-container {\r\n  position: relative;\r\n  display: block;\r\n  height: 30px;\r\n  margin: 0;\r\n}\r\n\r\n.typed-cursor {\r\n  visibility: hidden;\r\n}\r\n\r\n\r\n/* Currently serving text */\r\n\r\n.cur-serving {\r\n  /* color: #fff; */\r\n  color: rgba(255, 255, 255, 0.6);\r\n  margin: 10px auto;\r\n  margin-left: 2px;\r\n  letter-spacing: 0.5px;\r\n  font-size: 80%;\r\n  font-weight: normal;\r\n}\r\n\r\n\r\n/* Warning div */\r\n\r\n.location-warning-div {\r\n  position: relative;\r\n  display: block;\r\n  /* visibility: hidden; */\r\n  display: none;\r\n  max-width: 650px;\r\n  white-space: normal;\r\n  margin-top: 15px;\r\n  padding: 10px 20px;\r\n\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.location-warning-div ul,\r\n.location-warning-div li,\r\n.location-warning-div p {\r\n  margin: 0;\r\n}\r\n\r\n.location-warning-div ul {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n}\r\n\r\n.location-warning-div i {\r\n  font-size: 250%;\r\n  color: #ffcc00;\r\n  margin-right: 20px;\r\n}\r\n\r\n.location-warning-div p {\r\n  font-size: 100%;\r\n}\r\n\r\n\r\n/* Location enter div */\r\n\r\n#main-see-menu-btn {\r\n  background-color: #000;\r\n  color: #fff;\r\n  font-size: 90%;\r\n  margin-left: 5px;\r\n  transition: all 0.2s ease-in;\r\n}\r\n\r\n#main-see-menu-btn:hover {\r\n  background-color: #191919;\r\n}\r\n\r\n.fvp-down-btn {\r\n  position: absolute;\r\n  display: block;\r\n  bottom: 2%;\r\n  left: 47.5%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  font-size: 200%;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  -webkit-animation-duration: 4s !important;\r\n          animation-duration: 4s !important;\r\n  transition-timing-function: linear !important;\r\n}\r\n\r\n/* Chevron animation */\r\n.animated{\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n} \r\n.infinite{\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n} \r\n.bounce{\r\n  -webkit-animation-name: bounce;\r\n          animation-name: bounce;\r\n  -webkit-transform-origin: center bottom;\r\n          transform-origin: center bottom;\r\n}\r\n@-webkit-keyframes bounce {\r\n  from,\r\n  20%,\r\n  53%,\r\n  80%,\r\n  to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n  40%,\r\n  43% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    -webkit-transform: translate3d(0, -30px, 0);\r\n            transform: translate3d(0, -30px, 0);\r\n  }\r\n  70% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    -webkit-transform: translate3d(0, -15px, 0);\r\n            transform: translate3d(0, -15px, 0);\r\n  }\r\n  90% {\r\n    -webkit-transform: translate3d(0, -4px, 0);\r\n            transform: translate3d(0, -4px, 0);\r\n  }\r\n}\r\n@keyframes bounce {\r\n  from,\r\n  20%,\r\n  53%,\r\n  80%,\r\n  to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n  40%,\r\n  43% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    -webkit-transform: translate3d(0, -30px, 0);\r\n            transform: translate3d(0, -30px, 0);\r\n  }\r\n  70% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\r\n    -webkit-transform: translate3d(0, -15px, 0);\r\n            transform: translate3d(0, -15px, 0);\r\n  }\r\n  90% {\r\n    -webkit-transform: translate3d(0, -4px, 0);\r\n            transform: translate3d(0, -4px, 0);\r\n  }\r\n}\r\n\r\n\r\n\r\n/* svp */\r\n\r\n.svp {\r\n  position: relative;\r\n  display: block;\r\n  min-height: 100vh;\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  background-position: center;\r\n  background-size: cover;\r\n  overflow: hidden;\r\n}\r\n\r\n.how-it-works-div,\r\n.concept-div {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  text-align: center;\r\n  margin: 0px auto;\r\n  background-color: rgba(255, 255, 255, 0.90);\r\n  color: #555;\r\n}\r\n\r\n\r\n\r\n.hv-look-head{\r\n  position: relative;\r\n  display: block;\r\n  margin: 20px auto;\r\n  text-align: center;\r\n  font-size: 120%;\r\n  /* font-weight: bold; */\r\n  color: #444;\r\n}\r\n\r\n.how-it-works-div {\r\n  background-color: #fff;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n  padding: 25px 40px 0px 40px;\r\n}\r\n\r\n.how-it-works-div .how-it-works-core .row {\r\n  padding-bottom: 0px;\r\n  margin-bottom: 0px;\r\n  height: 10% !important;\r\n}\r\n\r\n\r\n.how-it-works-div img {\r\n  position: relative;\r\n  display: block;\r\n  margin: 10px auto 20px auto;\r\n  height: 50px;\r\n  width: auto;\r\n}\r\n\r\n.concept-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  padding: 0px 0px;\r\n}\r\n.concept-div .concept-exp-div ul{\r\n  position: relative;\r\n  display: block;\r\n  margin: 0px 0px !important;\r\n  margin-right: 0 !important;\r\n  /* margin:0 !important; */\r\n  padding: 0 !important;\r\n  -webkit-margin-before: 0px;\r\n  -webkit-margin-after: 0px;\r\n  padding-right: 0 !important;\r\n}\r\n\r\n.concept-div ul li{\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  margin: 5px  0 !important;\r\n  padding:  0 0 !important;\r\n}\r\n.concept-div ul p{\r\n  width: 100%;\r\n  margin:0 !important;\r\n  margin-right: 0 !important;\r\n  padding:  0 !important;\r\n}\r\n\r\n\r\n.concept-div img {\r\n  position: relative;\r\n  width: 40%;\r\n  height: auto;\r\n  margin: 0 0 0 20px;\r\n}\r\n\r\n.concept-exp-div {\r\n  position: relative;\r\n  display: block;\r\n  height: 100%;\r\n  width: 60%;\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\n.how-it-works-div p {\r\n  position: relative;\r\n  display: block;\r\n  text-align: center;\r\n  margin: 10px auto;\r\n  font-size: 110%;\r\n  line-height: 1.5;\r\n  color: #666;\r\n  width: 80%;\r\n}\r\n\r\n.concept-div p {\r\n  position: relative;\r\n  display: block;\r\n  text-align: left;\r\n  margin: 6px auto;\r\n  font-size: 100%;\r\n  line-height: 1.5;\r\n  color: #666;\r\n  width: 80%;\r\n}\r\n.concept-div ul{\r\n  position: relative;\r\n  display: block;\r\n  width: 70%;\r\n  margin: 10px auto;\r\n}\r\n.concept-div ul li p{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n\r\n\r\n\r\n/* Headings in how it works section and concept section */\r\n\r\n.how-it-works-div h3 {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.how-it-works-div h4 {\r\n  margin-bottom: 10px;\r\n  color: #111;\r\n}\r\n\r\n.svp .parallax-window {\r\n  /* background: transparent; */\r\n  height: 150px;\r\n}\r\n\r\n.p-window-one {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/pen.jpg") + ");\r\n  background-size: cover;\r\n  background-position-y: 50%;\r\n}\r\n\r\n.p-window-two {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/contact-us.jpg") + ");\r\n  background-size: cover;\r\n  background-position-y: 53%;\r\n}\r\n\r\n.how-it-works-div i {\r\n  font-size: 300%;\r\n  margin: 20px auto;\r\n}\r\n\r\n.concept-pic-div {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.concept-div h3 {\r\n  margin-bottom: 20px;\r\n  color: #222;\r\n}\r\n\r\n#concept-rewards-trig div {\r\n  position: relative;\r\n  display: inline-block;\r\n  padding: 18px 20px;\r\n  margin: 20px auto;\r\n  color: #fff;\r\n  background-color: #6DA942;\r\n  text-decoration: none;\r\n  /* box-shadow: 2px 0px 2px 1px rgba(0,0,0,0.2); */\r\n  transition: all 0.2s ease-in;\r\n  border-radius: 4px;\r\n  line-height: 0 !important;\r\n}\r\n\r\n#concept-rewards-trig div:hover {\r\n  background-color: #62983b;\r\n  /* box-shadow: 8px 2px 10px 1px rgba(0,0,0,0.2); */\r\n}\r\n\r\n#concept-rewards-trig div:active {\r\n  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n\r\n/* Columns in how it works section*/\r\n\r\n.col-one-div::after,\r\n.col-two-div::after,\r\n.col-three-div::after {\r\n  content: '';\r\n  position: absolute;\r\n  display: block;\r\n  top: 50%;\r\n  left: 100%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  height: 50%;\r\n  width: 1px;\r\n  color: #888;\r\n  background-color: #000;\r\n}\r\n\r\n.how-it-works-div .row {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n\r\n/* Extra Small Devices, .visible-xs-* */\r\n\r\n\r\n/* @media (max-width: 480px) {} */\r\n\r\n@media (max-width: 767px) {\r\n  .container .in-container {\r\n    width: 95%;\r\n  }\r\n  .main-text {\r\n    top: 50%;\r\n    font-size: 70%;\r\n  }\r\n  .cur-serving {\r\n    font-size: 100%;\r\n  }\r\n  .location-warning-div {\r\n    width: 90%;\r\n  }\r\n  .concept-trig-btn {\r\n    height: 35px;\r\n    font-size: 120%;\r\n    margin: 10px auto 0px auto;\r\n  }\r\n  .location-enter-div {\r\n    width: 200px;\r\n  }\r\n  .locate-me-btn {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n  }\r\n  .see-menu-btn {\r\n    width: 90px;\r\n  }\r\n  /* svp */\r\n  /* How it works */\r\n  .col-one-div::after,\r\n  .col-two-div::after,\r\n  .col-three-div::after {\r\n    /* display: none; */\r\n    top: 110%;\r\n    left: 50%;\r\n    height: 1px !important;\r\n    width: 30%;\r\n  }\r\n  .how-it-works-div .row>div {\r\n    padding-top: 30px !important;\r\n  }\r\n  /* concept div */\r\n  .concept-div {\r\n    width: 100%;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n  .concept-div img {\r\n    width: 100%;\r\n  }\r\n  .concept-exp-div {\r\n    width: 90%;\r\n  }\r\n  .concept-div p {\r\n    width: 85%;\r\n  }\r\n  .concept-div h3 {\r\n    margin-top: 30px;\r\n  }\r\n  .scroll-header {\r\n    display: none;\r\n  }\r\n}\r\n\r\n\r\n/* Small Devices, .visible-sm-* */\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .scroll-header {\r\n    display: none;\r\n  }\r\n  .container .in-container {\r\n    width: 95%;\r\n  }\r\n  .main-text {\r\n    top: 50%;\r\n    font-size: 90%;\r\n  }\r\n  .cur-serving {\r\n    font-size: 110%;\r\n  }\r\n  .location-warning-div {\r\n    width: 80%;\r\n  }\r\n  .concept-trig-btn {\r\n    height: 35px;\r\n    font-size: 110%;\r\n    margin: 10px auto 0px auto;\r\n  }\r\n  /* svp */\r\n  /* How it works */\r\n  .col-one-div::after,\r\n  .col-two-div::after,\r\n  .col-three-div::after {\r\n    /* display: none; */\r\n    top: 110%;\r\n    left: 50%;\r\n    height: 1px !important;\r\n    width: 30%;\r\n  }\r\n  .how-it-works-div .row>div {\r\n    padding-top: 30px !important;\r\n  }\r\n  /* concept div */\r\n  .concept-div {\r\n    width: 100%;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n  .concept-div img {\r\n    width: 100%;\r\n  }\r\n  .concept-exp-div {\r\n    width: 90%;\r\n  }\r\n  .concept-div p {\r\n    width: 85%;\r\n  }\r\n  .concept-div h3 {\r\n    margin-top: 30px;\r\n  }\r\n  .scroll-header {\r\n    display: none;\r\n  }\r\n}\r\n\r\n\r\n/* Medium Devices, .visible-md-* */\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {}\r\n\r\n\r\n/* Large Devices, .visible-lg-* */\r\n\r\n@media (min-width: 1200px) {}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scroll-header\">\n  <div class=\"main-logo pull-left\">\n    <img src=\"../../assets/logo/logo_black.png\">\n  </div>\n  <div class=\"location-input-div\">\n    <div class=\"location-enter-div\">\n      <input type=\"search\" class=\"location-search-input\" placeholder=\"Type your location here\">\n      <button type=\"button\" class=\"locate-me-btn\" (click)=\"geoLocate()\">Locate me</button>\n    </div>\n    <button type=\"button\" class=\"see-menu-btn\" (click)=\"seeMenu()\">See The Menu</button>\n  </div>\n  <div class=\"scroll-login-div\" *ngIf=\"!authService.loggedIn()\">\n    <button type=\"button\" class=\"login-signup-trig-btn\" (click)=\"appComponent.loginSignupTrigger()\">Log in/Sign up</button>\n\n  </div>\n  <div class=\"scroll-login-div\" *ngIf=\"authService.loggedIn()\">\n    <a (click)=\"onLogoutClick()\" style=\"cursor:pointer\">Logout</a>\n  </div>\n</div>\n<div class=\"vp fvp\">\n\n\n  <!-- Header for mobiles and smaller devices -->\n  <header class=\"mob-main-header visible-sm visible-xs\">\n    <button type=\"button\" class=\"mob-menu-trig-btn\">\n        <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n    </button>\n    <div class=\"mob-main-logo\">\n      <img src=\"../../assets/logo/logo.png\">\n    </div>\n  </header>\n\n\n  <div class=\"dark-cover\">\n    <div class=\"container\">\n\n      <!-- Header for tablets and desktops -->\n      <header class=\"m-main-header visible-lg visible-md\">\n        <div class=\"main-logo pull-left\">\n          <img src=\"../../assets/logo/logo.png\">\n        </div>\n        <div class=\"pull-right main-nav-div\">\n          <nav>\n            <ul class=\"list list-inline\">\n              <li class=\"how-it-works-trig-btn uline\" (click)=\"gotoHowitWorks()\">\n                How It Works\n              </li>\n              <li class=\"concept-btn-li\">\n                <a routerLink=\"/rewards\"><button type=\"button\" class=\"reward-pts-trig-btn\" style=\"color:#fff\">\n                                         <div id=\"rwd-hover-div\"></div>\n                                         <p>Reward Points</p>\n                                </button></a>\n              </li>\n              <li class=\"login-signup-trig-btn uline\" *ngIf=\"!authService.loggedIn()\" (click)=\"appComponent.loginSignupTrigger()\">\n                Log in/Sign up\n              </li>\n              <li class=\"account-trig-div\" *ngIf=\"authService.loggedIn()\">\n                <div class=\"dropdown home-dropdown\">\n                  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\">{{userName}}</button>\n                  <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings'>My Profile</a></li>\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/my-orders'>My Orders</a></li>\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/address'>Saved Address</a></li>\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/payments'>Payments</a></li>\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/reward-points'>Reward Points</a></li>\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/change-password'>Change Password</a></li>\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"onLogoutClick()\">Logout</a></li>\n                  </ul>\n                </div>\n              </li>\n            </ul>\n          </nav>\n        </div>\n        <div class=\"clearfix\"></div>\n      </header>\n      <div class=\"container in-container\">\n        <div class=\"main-text\">\n          <h2>Office Lunch?<br>Sorted.</h2>\n          <div class=\"typed-container\">\n            <h3><span class=\"typed\">\n              <span id=\"t-one-one\" class= \"typed-spans\" style=\"display:none\">NO MINIMUMS.</span>\n              <span id=\"t-two-one\" class=\"typed-spans\" style=\"display:none\">SIMPLE MENU.</span>\n              <span id=\"t-three-one\" class=\"typed-spans\" style=\"display:none\">OPTIONS FOR SCHEDULED MEALS.</span>\n              </span>\n              <span class=\"typed-two\">\n              <span id=\"t-one-two\" class= \"typed-spans\" style=\"display:none\">NO DELIVERY CHARGES.</span>\n              <span id=\"t-two-two\" class=\"typed-spans\" style=\"display:none\">MORE REWARD POINTS.</span>\n              <span id=\"t-three-two\" class=\"typed-spans\" style=\"display:none\"></span>\n              </span>\n            </h3>\n            <span class=\"t-helper\"></span>\n          </div>\n\n          <div class=\"concept-trig-btn-div\">\n            <a><button type=\"button\" class=\"concept-trig-btn\" (click)=\"gotoConcept()\">Unique Concept</button></a>\n          </div>\n\n          <div class=\"location-input-div location-input-scrolltop-helper\">\n            <div class=\"location-enter-div\">\n              <input type=\"search\" class=\"location-search-input\" placeholder=\"Type your location here\" [(ngModel)]=\"locationEntry\">\n              <button type=\"button\" class=\"locate-me-btn\" (click)=\"geoLocate()\">Locate me</button>\n            </div>\n            <button type=\"button\" class=\"see-menu-btn\" id=\"main-see-menu-btn\" (click)=\"seeMenu()\">See The Menu</button>\n          </div>\n          <h6 class=\"cur-serving\">We are currently serving in Madhapur</h6>\n          <div class=\"location-warning-div\">\n            <ul class=\"list-inline\">\n              <li>\n                <i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n              </li>\n              <li>\n                <p>\n                  We currently do not deliver in your area. We currently deliver in or around Madhapur.\n                </p>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <span class=\"fvp-down-btn animated infinite bounce\" (click)=\"gotoHowitWorks()\"><i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i></span>\n    </div>\n  </div>\n</div>\n<div class=\"svp\">\n  <div class=\"w-cover\">\n    <section class=\"how-it-works-div container\">\n      <h3>How it works</h3>\n      <div class=\"how-it-works-core\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-one-div\">\n            <img src=\"../../assets/img/cook.png\" alt=\"\">\n            <h4>Choose your meal</h4>\n            <!--<i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i>-->\n            <!--<br>-->\n            <p>\n               Choose number of meals from daily rotating menu.\n            </p>\n          </div>\n          <div class=\"col-md-3 col-two-div\">\n            <img src=\"../../assets/img/time.png\" alt=\"\">\n            <h4>Choose your time</h4>\n            <!--<i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>-->\n            <!--<br>-->\n            <p>\n               Select Delivery Slots. You can also order in advance.\n            </p>\n          </div>\n          <div class=\"col-md-3 col-three-div\">\n            <img src=\"../../assets/img/gift.png\" alt=\"\">\n            <h4>Earn rewards</h4>\n            <!--<i class=\"fa fa-trophy\" aria-hidden=\"true\"></i>-->\n            <!--<br>-->\n            <p>\n               Get reward points with every order Redeem them for future orders.\n            </p>\n          </div>\n          <div class=\"col-md-3 col-four-div\">\n            <img src=\"../../assets/img/smile.png\" alt=\"\">\n            <h4>Enjoy fysu</h4>\n            <!--<i class=\"fa fa-smile-o\" aria-hidden=\"true\"></i>-->\n            <!--<br>-->\n            <p>\n               We’ll call you when it arrives. Ready with spoon and pen.\n            </p>\n            <br><br><br>\n          </div>\n        </div>\n      </div>\n    </section>\n    <div class=\"parallax-window p-window-one sub-main\"> </div>\n    <section class=\"concept-div container\">\n        <img src=\"../../assets/img/idea.jpg\" alt=\"\" class=\"pull-left\">\n        <div class=\"concept-exp-div\" class=\"pull-right\">\n          <h3>Concept</h3>\n  \n  \n          <p>\n             Are you bored of the monotonous work at your desk? Are you hungry as well? We make your lunch time fun time as well. Order your lunch and be ready with Pen &amp; Paper !!!\n          </p>\n          <p>\n             We are introducing a ground-breaking idea to make your lunch-time fun, useful and creative. Bringing back the lost art of letter writings, reinventing the concept of daily writing habits and sharpen your mind.\n          </p>\n          <h5 class=\"hv-look-head\"><b>Have a look !</b></h5>\n            <ul>\n              <li>\n                <p>\n                   With every order, you get a puzzle, it may be a Sudoku/finding ways/puzzles or even a mere basic math problem. Solve them and return it on the next order.\n                </p>\n              </li>\n              <li>\n                <p>\n                   Share your thoughts and let the world know them. We are providing an excellent platform to reach out to people who are tired of Electronic media and want to go back to good old days of reading and writing.\n                </p>\n              </li>\n              <li>\n                <p>\n                   You can even write a letter to your loved ones. A few things that you cannot tell on phone can seamlessly be explained through personal letters. How cool is that?!\n                </p>\n              </li>\n            </ul>\n            <p><b>\n              Get reward points for every order you place and every letter you write or every thought you share or every puzzle you solve. Redeem them in your future orders.\n            </b></p>\n            <p>\n               Making something creative can always be a boost to your brain and your personality and it makes you happier over the period of time. Doing what we love is all we crave for, so why not crave for food and happiness together?\n            </p>\n            <p>What are you even waiting for? Place lunch order and be ready with spoon and pen.</p>\n            <p style=\"text-align:center\">\n              <b>\n                <em>\n                   Not Just a Lunch. Not Just a Box.<br> It’s an Experience. Live It.\n                </em>\n              </b>\n            </p>\n  \n          <a [routerLink]=\"['/rewards']\" id=\"concept-rewards-trig\">\n            <div>\n              REWARD POINTS\n            </div>\n          </a>\n        </div>\n      <div class=\"clearfix\"></div>\n    </section>\n    <div class=\"parallax-window p-window-two sub-main\"> </div>\n  </div>\n</div>"

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
        this.give_menu_permission = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
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
                }
            });
        });
        showSentence();
        // Typed effect
        function showSentence() {
            var tOut = setTimeout(showSentence, 8000);
            // First 
            setTimeout(function () {
                $('#t-two-one').hide();
                $('#t-two-two').hide();
                $('#t-three-one').hide();
                $('#t-three-two').hide();
                $('#t-one-one').fadeIn(500);
            }, 0);
            setTimeout(function () {
                $('#t-one-two').fadeIn(500);
            }, 1000);
            // Second lines
            setTimeout(function () {
                $('#t-one-one').hide();
                $('#t-one-two').hide();
                $('#t-three-one').hide();
                $('#t-three-two').hide();
                $('#t-two-one').fadeIn(500);
            }, 3000);
            setTimeout(function () {
                $('#t-two-two').fadeIn(500);
            }, 4000);
            // Third lines
            setTimeout(function () {
                $('#t-one-one').hide();
                $('#t-one-two').hide();
                $('#t-two-one').hide();
                $('#t-two-two').hide();
                $('#t-three-one').fadeIn(500);
            }, 5500);
            setTimeout(function () {
                $('#t-three-two').fadeIn(500);
            }, 6500);
        }
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
            });
            // console.log(this.lat);
            if (this.lat == undefined) {
                // this.geoLocate();
                $('#locate-me-btn').trigger('click');
            }
            else {
                this.authService.getLocation(this.lat, this.long).subscribe(function (res) {
                    // console.log(res);
                    // console.log(res.results[0].formatted_address);
                    _this.address = res.results[0].formatted_address;
                    if (_this.address.includes('Madhapur')) {
                        _this.give_menu_permission = true;
                        localStorage.setItem('home_address', _this.address);
                        // Add to user's address if he is logged in
                        if (_this.authService.loggedIn()) {
                            console.log('user is logged in');
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
                                        console.log(res);
                                    }
                                }
                            });
                        }
                        else {
                            console.log('not logged in');
                        }
                        // Add to input box
                        $('.location-search-input').val(_this.address);
                    }
                    else {
                        // ********** VERY IMPORTANT DELETE AFTER TESTING IS DONE ************** 
                        // Delete after testing is done
                        _this.give_menu_permission = true;
                        localStorage.setItem('home_address', _this.address);
                        // Add to user's address if he is logged in
                        if (_this.authService.loggedIn()) {
                            console.log('user is logged in');
                            // User is logged in 
                            // send this address to save
                            var address = {
                                user_id: _this.userId,
                                address: _this.address
                            };
                            // console.log(address);
                            _this.authService.saveAddress(address).subscribe(function (res) {
                                console.log('entered');
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
                            console.log('not logged in');
                        }
                        $('.location-search-input').val(_this.address);
                        $('.location-warning-div').show();
                    }
                });
            }
        }
    };
    HomeComponent.prototype.seeMenu = function () {
        // alert('clicked');
        // this.locationEntry contains the location entered by user
        // Validate
        // if not empty
        // if Madhapur
        // redirect to Menu page
        if (this.give_menu_permission == true) {
            this.router.navigateByUrl('/menu');
        }
        else {
            // 
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-header .container {\r\n  width: 90%;\r\n}\r\n.det-ul{\r\n  margin-left: 50px;\r\n}\r\n\r\n/* Today select */\r\n.today-menu-back{\r\n   z-index: 100;\r\n   position: fixed;\r\n   display: -webkit-box;\r\n   display: -ms-flexbox;\r\n   display: flex;\r\n   display: none;\r\n   top: 0;\r\n   left: 0;\r\n   height: 100vh;\r\n   width: 100vw;\r\n   background-color: rgba(0, 0, 0, 0.7);\r\n   -webkit-box-pack: center;\r\n       -ms-flex-pack: center;\r\n           justify-content: center;\r\n   -webkit-box-align: center;\r\n       -ms-flex-align: center;\r\n           align-items: center;\r\n   -webkit-box-orient: horizontal;\r\n   -webkit-box-direction: normal;\r\n       -ms-flex-direction: row;\r\n           flex-direction: row;\r\n}\r\n.today-core{\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  background-color: #fff;\r\n  height: 80%;\r\n  width: 80%;\r\n}\r\n.today-core label{\r\n  position: relative;\r\n  display: block;\r\n  height: 30px;\r\n  width: 80%;\r\n}\r\n.today-btns{\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  height: 40px;\r\n  width: 100%;\r\n}\r\n\r\n.today-core select{\r\n  position: relative;\r\n  display: block;\r\n  height: 30px;\r\n  width: 100%;\r\n  font-size: 120%;\r\n  border: 1px solid #666;\r\n}\r\n\r\n\r\n\r\n.main-container {\r\n  padding-top: 30px;\r\n  background-color: #F2F5F6;\r\n}\r\n\r\n.main-container .container {\r\n  width: 90%;\r\n}\r\n\r\n.scroll-login-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: end;\r\n      -ms-flex-align: end;\r\n          align-items: flex-end;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  width: 40%;\r\n}\r\n\r\n.scroll-login-div .sc-ul {\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: end;\r\n      -ms-flex-align: end;\r\n          align-items: flex-end;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n\r\n.scroll-login-div .sc-ul>li {\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  margin-left: 20px;\r\n}\r\n\r\n.scroll-login-div .sc-ul .dropdown-menu {\r\n  position: absolute;\r\n  top: 140%;\r\n  left: -50%;\r\n}\r\n\r\n.scroll-login-div .sc-ul .dropdown-menu li {\r\n  width: 100%;\r\n}\r\n\r\n.scroll-login-div .sc-ul .dropdown-menu li a {\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.slot-select{\r\n  outline: none;\r\n  height: 30px;\r\n  width: 200px;\r\n}\r\nbutton{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n\r\n/* Menu container */\r\n\r\n\r\n/* Filters section */\r\n\r\n.filter-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  height: 50px;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  overflow: visible;\r\n}\r\n\r\n.filter-div div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 100%;\r\n  width: 33.333%;\r\n  margin: 0;\r\n  overflow: visible;\r\n}\r\n\r\n.date-filter-div,\r\n.filter-type-div,\r\n.filter-filter-div {\r\n  position: relative;\r\n  display: block;\r\n  overflow: visible;\r\n}\r\n\r\n.date-filter-div .dropdown-menu,\r\n.filter-type-div .dropdown-menu,\r\n.filter-filter-div .dropdown-menu {\r\n  position: absolute;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, 0%);\r\n          transform: translate(-50%, 0%);\r\n}\r\n\r\n.menu-title {\r\n  position: relative;\r\n  font-size: 150%;\r\n  margin: 25px auto 25px auto;\r\n  text-align: center;\r\n}\r\n\r\n/* Check boxes in sch menu */\r\n\r\n/* input[type=\"checkbox\"]+label span {\r\n  display: inline-block;\r\n  width: 19px;\r\n  height: 19px;\r\n  margin: -1px 4px 0 0;\r\n  vertical-align: middle;\r\n  background: url('ico/uncheck.png') top no-repeat;\r\n  cursor: pointer;\r\n} */\r\n\r\n/* input[type=\"checkbox\"]:checked+label span {\r\n  background: url('ico/check.png') top no-repeat;\r\n} */\r\n.checks{\r\n  display: none;\r\n}\r\n/* Rotis */\r\ninput[type=\"checkbox\"]+span+label span {\r\n  content: 'okayyy';\r\n  display: inline-block;\r\n  /* width: 19px;\r\n  height: 19px; */\r\n  margin: -1px 4px 0 0;\r\n  vertical-align: middle;\r\n  /* background: url('../../assets/menu-icons/roti_b.png') top no-repeat; */\r\n  cursor: pointer;\r\n}\r\n.roti-check:checked+label span {\r\n  background: url(" + __webpack_require__("../../../../../src/assets/menu-icons/roti_r.png") + ") top no-repeat;\r\n}\r\n\r\n\r\n\r\n\r\n/* .menu-title::after{\r\n    content: '';\r\n    position: absolute;\r\n    display: block;\r\n    top:150%;\r\n    left:50%;\r\n    transform: translate(-50%,-50%);\r\n    width: 80px;\r\n    height: 2px;\r\n    background-color: #faaa00;\r\n} */\r\n\r\n\r\n/* Menu item */\r\n\r\n.menu-item {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  /* height: 400px; */\r\n  height: 410px;\r\n  width: 380px;\r\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  border-radius: 2px;\r\n}\r\n\r\n.item-image {\r\n  position: relative;\r\n  display: block;\r\n  margin: 0;\r\n  /* height: 67%; */\r\n  height: 60%;\r\n  width: 100%;\r\n  /* background-image: url('../assets/menu-img/food.jpg'); */\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.item-announcement {\r\n  position: absolute;\r\n  /* display: block; */\r\n  display: none;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 10px 0px;\r\n  text-align: center;\r\n  background-color: rgba(240, 79, 94, 0.9);\r\n  color: #fff;\r\n}\r\n\r\n.item-dets-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  margin: 0px 0 0 0;\r\n  height: 30%;\r\n  width: 100%;\r\n  background-color: #fff;\r\n}\r\n\r\n.item-name-div {\r\n  position: relative;\r\n  display: block;\r\n  width: 90%;\r\n}\r\n\r\n.item-name {\r\n  text-align: left;\r\n  font-size: 120%;\r\n  margin-bottom: 10px;\r\n  margin-top: 25px;\r\n}\r\n\r\n.item-dets {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  width: 90%;\r\n  margin-top: 0px;\r\n}\r\n\r\n.item-price {\r\n  font-size: 110%;\r\n}\r\n\r\n.incl-tax {\r\n  font-size: 80%;\r\n}\r\n\r\n.item-add-btn {\r\n  font-size: 110%;\r\n  background-color: #6DA942;\r\n  color: #fff;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  border-radius: 3px;\r\n  transition: all 0.2s ease-in;\r\n}\r\n\r\n.item-add-btn:hover {\r\n  background-color: #588835;\r\n}\r\n\r\n.schedule-rep-btn {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  height: 10%;\r\n  margin: 0;\r\n  /* background-color: #F04F60; */\r\n  background-color: #353637;\r\n  color: #fff;\r\n  border: none;\r\n  transition: all 0.2s ease-in;\r\n}\r\n\r\n.schedule-rep-btn:hover {\r\n  /* background-color: #D84656; */\r\n  background-color: #494a4b;\r\n}\r\n\r\n\r\n/* Hover Basket */\r\n\r\n.hover-basket-div {\r\n  z-index: 7;\r\n  position: fixed;\r\n  display: block;\r\n  top: 91%;\r\n  left: 80%;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  height: 50px;\r\n  width: 200px;\r\n  border-radius: 50px;\r\n}\r\n\r\n.hover-basket-div a {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  height: 100%;\r\n  width: 100%;\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\n.hover-basket-div h6 {\r\n  position: relative;\r\n  font-size: 105%;\r\n}\r\n\r\n.hover-basket-number {\r\n  position: absolute;\r\n  top: -10px;\r\n  left: -45%;\r\n  margin-left: 10px;\r\n  background-color: #fa0000;\r\n  padding: 5px 10px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.shop-basket-icon {\r\n  position: absolute;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  top: 0;\r\n  left: -10px;\r\n  background-color: #CE3529;\r\n  color: #fff;\r\n  height: 50px;\r\n  width: 50px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.fa-arrow-right {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 90%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n\r\n/* Schedule menu styles */\r\n\r\n.schedule-menu-back {\r\n  z-index: 100;\r\n  position: fixed;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  display: none;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n\r\n.sch-close-btn {\r\n  z-index: 100;\r\n  position: absolute;\r\n  display: block;\r\n  color: #fff;\r\n  top: 0%;\r\n  left: 93%;\r\n  font-size: 260%;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* Schedule menu left */\r\n\r\n.schedule-menu-left {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 100%;\r\n  width: 30%;\r\n}\r\n\r\n.calender-core {\r\n  position: relative;\r\n  display: block;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  height: 400px;\r\n  width: 300px;\r\n  overflow: hidden;\r\n}\r\n\r\n.calender-core ul {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.calender-core ul li {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  height: 14.2857%;\r\n  width: 100%;\r\n  border-bottom: 1px solid #666;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* Schedule menu right */\r\n\r\n.schedule-menu-right {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 100%;\r\n  width: 80%;\r\n}\r\n\r\n.schedule-choose-core {\r\n  height: 95%;\r\n  width: 80%;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n}\r\n\r\n\r\n/* Top div */\r\n\r\n.sc-ch-item-name {\r\n  font-size: 120%;\r\n  font-weight: bold;\r\n}\r\n\r\n.sc-ch-top {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  /* align-content: space-between; */\r\n  top: 0;\r\n  margin: 0;\r\n  height: 10%;\r\n  width:100%;\r\n  padding: 0 40px;\r\n}\r\n\r\n.sc-ch-top .pull-left {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  width: 65%;\r\n}\r\n\r\n.sc-ch-top .pull-right {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  width: 35%;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  padding-left: 30px;\r\n}\r\n\r\n.sc-ch-price {\r\n  color: #888;\r\n  font-size: 80%;\r\n}\r\n\r\n.sc-ch-price-num {\r\n  font-size: 200%;\r\n}\r\n\r\n.sc-ch-num {\r\n  margin: 0 10px;\r\n}\r\n\r\n.sc-ch-num-btns-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n\r\n.sc-ch-num-btn {\r\n  border: 1px solid #323232;\r\n  background: transparent;\r\n  border-radius: 2px;\r\n  width: 30px;\r\n}\r\n\r\n.schedule-choose-core hr {\r\n  position: relative;\r\n  display: block;\r\n  /* width: 100%; */\r\n  margin: 0 40px;\r\n  color: #444;\r\n  background-color: #444;\r\n}\r\n\r\n.sc-ch-ul {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  height: 80%;\r\n  width: 90%;\r\n  margin: 0 5%;\r\n  overflow: hidden;\r\n}\r\n\r\n.sc-ch-ul>li {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.roti-div,\r\n.mini-meals-div,\r\n.large-div {\r\n  display: none;\r\n}\r\n\r\n\r\n/* Middle div */\r\n\r\n.sc-ch-mid-heads {\r\n  font-weight: bold;\r\n}\r\n\r\n.sc-ch-menu-divs {\r\n  position: relative;\r\n  display: block;\r\n  overflow-x: scroll;\r\n  margin: 20px auto;\r\n}\r\n\r\n.sc-ch-menu-divs li {\r\n  margin-left: 20px;\r\n}\r\n\r\n.sc-ch-menu-divs li .sc-ch-item {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  cursor: pointer;\r\n}\r\n\r\n.sc-ch-menu-divs li .sc-ch-item img {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.sch-note-div {\r\n  margin: 10px 0;\r\n  padding: 5px 10px;\r\n  height: 15%;\r\n  overflow: hidden;\r\n}\r\n\r\n.sc-ch-textarea {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  border: none;\r\n  border-bottom: 1px solid #666;\r\n  font-size: 90%;\r\n  resize: none;\r\n  /* height: 25px; */\r\n  color: #666;\r\n  padding: 10px 10px;\r\n}\r\n\r\n\r\n/* Bottom div */\r\n\r\n.sc-ch-btm {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  height: 5%;\r\n  margin: 0;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding: 0 40px;\r\n  overflow: hidden;\r\n}\r\n\r\n.sc-ch-cancel-btn,\r\n.sc-ch-add-btn {\r\n  height: 90%;\r\n  width: auto;\r\n  border-radius: 4px;\r\n  border: none;\r\n  padding: 0 30px;\r\n}\r\n\r\n.sc-ch-cancel-btn {\r\n  background-color: #fff;\r\n  color: #444;\r\n  margin-right: 20px;\r\n  border: 1px solid #444;\r\n}\r\n\r\n.sc-ch-add-btn {\r\n  color: #fff;\r\n  background-color: #DA3939;\r\n  cursor: pointer;\r\n  transition: all 0.2s ease-in;\r\n}\r\n\r\n.sc-ch-add-btn:hover {\r\n  background-color: #c43333;\r\n}\r\n\r\n\r\n/* Basket button for mobiles */\r\n\r\n.mob-basket-div {\r\n  z-index: 10;\r\n  position: fixed;\r\n  display: block;\r\n  bottom: 0;\r\n  height: 50px;\r\n  width: 100vw;\r\n  background-color: #F04F60;\r\n  color: #fff;\r\n  box-shadow: 0 -4px 20px 1px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.mob-basket-div a {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  height: 100%;\r\n  width: 100%;\r\n  color: #fff;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  text-decoration: none;\r\n}\r\n\r\n.mob-basket-div a .fa-shopping-basket {\r\n  margin-right: 10px;\r\n  font-size: 130%;\r\n}\r\n\r\n.mob-basket-div a h6 {\r\n  font-size: 120%;\r\n  font-weight: normal;\r\n}\r\n\r\n.mob-hover-basket-number {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin-left: 20px;\r\n  background-color: #fa0000;\r\n  color: #fff;\r\n  padding: 5px 10px;\r\n}\r\n.selected-date-li{\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  color: #fff;\r\n}\r\n.added-date-li{\r\n   background-color: #000;\r\n   color: #fff;\r\n\r\n}\r\n\r\n\r\n/* Extra Small Devices, .visible-xs-* */\r\n\r\n\r\n/* @media (max-width: 480px) {} */\r\n\r\n@media (max-width: 767px) {\r\n  .menu-title {\r\n    font-size: 120%;\r\n  }\r\n  .col-md-4 {\r\n    margin-bottom: 20px;\r\n  }\r\n  .menu-item {\r\n    margin: 0 auto;\r\n    max-width: 70vw;\r\n  }\r\n  .main-footer {\r\n    margin-bottom: 40px;\r\n  }\r\n  .date-filter-div .dropdown-menu {\r\n    position: absolute;\r\n    left: -10%;\r\n    min-width: 80px !important;\r\n  }\r\n  .filter-type-div .dropdown-menu {\r\n    position: absolute;\r\n    left: 0%;\r\n    min-width: 80px !important;\r\n  }\r\n  .filter-filter-div .dropdown-menu {\r\n    position: absolute;\r\n    left: 0%;\r\n    min-width: 80px !important;\r\n  }\r\n  .filter-div .btn {\r\n    font-size: 80%;\r\n  }\r\n  .main-container {\r\n    padding-top: 80px;\r\n  }\r\n}\r\n\r\n\r\n/* Small Devices, .visible-sm-* */\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .menu-title {\r\n    font-size: 120%;\r\n  }\r\n  .col-md-4 {\r\n    margin-bottom: 20px;\r\n  }\r\n  .menu-item {\r\n    margin: 0 auto;\r\n    max-width: 70vw;\r\n  }\r\n  .main-footer {\r\n    margin-bottom: 40px;\r\n  }\r\n}\r\n\r\n\r\n/* Medium Devices, .visible-md-* */\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .menu-item {\r\n    width: 300px;\r\n  }\r\n}\r\n\r\n\r\n/* Large Devices, .visible-lg-* */\r\n\r\n@media (min-width: 1200px) {}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header for mobiles and smaller devices -->\n<header class=\"mob-main-header visible-sm visible-xs\">\n    <button type=\"button\" class=\"mob-menu-trig-btn\">\n                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n            </button>\n    <div class=\"mob-main-logo\">\n        <img src=\"../../assets/logo/logo_black.png\">\n    </div>\n</header>\n<header class=\"main-header visible-md visible-lg\">\n    <div class=\"container\">\n        <div class=\"main-logo pull-left\">\n            <img src=\"../../assets/logo/logo_black.png\">\n        </div>\n        <ul class=\"list-inline det-ul visible-xs visible-sm pull-right\">\n            <li>\n                <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp; <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i> </button>\n            </li>\n        </ul>\n        <ul class=\"list-inline det-ul pull-left visible-md visible-lg\">\n            <li>\n                <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp; <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i> </button>\n            </li>\n            <li>\n                <a href=\"\" class=\"dets-div-btns selected\" id=\"our-menu-btn\">Our Menu</a>\n            </li>\n            <!-- <li>\n                <a class=\"dets-div-btns\" id=\"schedule-menu-btn\" (click)='schMenuBtn(schTrigBtn)'>Schedule Menu</a>\n            </li> -->\n        </ul>\n        <div class=\"scroll-login-div pull-right  visible-md visible-lg\">\n            <ul class=\"list-inline sc-ul\">\n                <li class=\"login-trig-div\" *ngIf=\"!authService.loggedIn()\">\n                    <button type=\"button\" class=\"login-signup-trig-btn dets-div-btns\" (click)=\"appComponent.loginSignupTrigger()\">Log in/Sign up</button>\n                </li>\n                <li class=\"account-trig-div\" *ngIf=\"authService.loggedIn()\">\n                    <div class=\"dropdown\">\n                        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\">Account</button>\n                        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings'>My Profile</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/my-orders'>My Orders</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/address'>Saved Address</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/payments'>Payments</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/reward-points'>Reward Points</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/change-password'>Change Password</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"onLogoutClick()\">Logout</a></li>\n                        </ul>\n                    </div>\n                </li>\n            </ul>\n            \n        </div>\n        <div class=\"clearfix\"></div>\n    </div>\n</header>\n<div class=\"main-container\">\n    <div class=\"container\">\n        <ul class=\"list-inline det-ul pull-left visible-sm visible-xs\" style=\"width:100%;margin:0 0 20px 0;padding:0\">\n            <li style=\"width:100%;text-align:center;padding:0;margin:0;\">\n                <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp; <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i> </button>\n            </li>\n        </ul>\n        <!-- <div class=\"filter-div\">\n            <div class=\"date-filter-div\">\n                <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu\" data-toggle=\"dropdown\">Today, 16 July</button>\n                <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu\">\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Today</a></li>\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Tomorrow</a></li>\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Saturday</a></li>\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Sunday</a></li>\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Monday</a></li>\n                </ul>\n            </div>\n            <div class=\"filter-type-div\">\n                <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu\" data-toggle=\"dropdown\">Ready To Heat Meals</button>\n                <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu\">\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Item One</a></li>\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Item Two</a></li>\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Item Three</a></li>\n                </ul>\n            </div>\n            <div class=\"filter-filter-div\">\n                <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu\" data-toggle=\"dropdown\">Filter</button>\n                <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu\">\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Item One</a></li>\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Item Two</a></li>\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Item Three</a></li>\n                </ul>\n            </div>\n        </div> -->\n        <div *ngFor=\"let cat of categories\">\n            <h2 class=\"menu-title\">COMBO</h2>\n            <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                    <div class=\"menu-item\">\n\n                        <div class=\"item-image\" style=\"background-image:url('../../assets/menu-img/tab_one.jpg')\">\n\n                        <div class=\"item-announcement\">\n                            TEXT TEXT TEXT\n                        </div>\n                        </div>\n                        <div class=\"item-dets-div\">\n                            <div class=\"item-name-div\">\n                                <h4 class=\"item-name\">{{ tab_one }}</h4>\n                            </div>\n                            <div class=\"item-dets\">\n                                <div class=\"pull-left\">\n                                    <span class=\"item-price\"> &#8377; {{tab_one_cost}} </span><span class=\"incl-tax\">(Inclusive of all taxes)</span>\n                                </div>\n                                <div class=\"pull-right\">\n                                    <button type=\"button\" class=\"item-add-btn\" (click)='todayAdd(\"tab_one\")'> + Add</button>\n                                </div>\n                            </div>\n                        </div>\n                        <button type=\"button\" class=\"schedule-rep-btn\" (click)=\"schMenuBtn('tab_one')\">\n                            SCHEDULE MENU\n                        </button>\n                    </div>\n                </div>\n                \n                <div class=\"col-md-4\">\n                    <div class=\"menu-item\">\n\n                        <div class=\"item-image\" style=\"background-image:url('../../assets/menu-img/tab_two.jpg')\">\n\n                            <div class=\"item-announcement\">\n                                TEXT TEXT TEXT\n                            </div>\n                        </div>\n                        <div class=\"item-dets-div\">\n                            <div class=\"item-name-div\">\n                                <h4 class=\"item-name\">{{ tab_two }}</h4>\n                            </div>\n                            <div class=\"item-dets\">\n                                <div class=\"pull-left\">\n                                    <span class=\"item-price\"> &#8377; {{tab_two_cost}} </span><span class=\"incl-tax\">(Inclusive of all taxes)</span>\n                                </div>\n                                <div class=\"pull-right\">\n                                    <button type=\"button\" class=\"item-add-btn\" (click)='todayAdd(\"tab_two\")'> + Add</button>\n                                </div>\n                            </div>\n                        </div>\n                        <button type=\"button\" class=\"schedule-rep-btn\" (click)=\"schMenuBtn('tab_two')\">\n                            SCHEDULE MENU\n                        </button>\n                    </div>\n                </div>\n                \n                <div class=\"col-md-4\">\n                    <div class=\"menu-item\">\n\n                        <div class=\"item-image\" style=\"background-image:url('../../assets/menu-img/tab_three.jpg')\">\n\n                            <div class=\"item-announcement\">\n                                TEXT TEXT TEXT\n                            </div>\n                        </div>\n                        <div class=\"item-dets-div\">\n                            <div class=\"item-name-div\">\n                                <h4 class=\"item-name\">{{ tab_three }}</h4>\n                            </div>\n                            <div class=\"item-dets\">\n                                <div class=\"pull-left\">\n                                    <span class=\"item-price\"> &#8377; {{tab_three_cost}} </span><span class=\"incl-tax\">(Inclusive of all taxes)</span>\n                                </div>\n                                <div class=\"pull-right\">\n                                    <button type=\"button\" class=\"item-add-btn\" (click)='todayAdd(\"tab_three\")'> + Add</button>\n                                </div>\n                            </div>\n                        </div>\n                        <button type=\"button\" class=\"schedule-rep-btn\" (click)=\"schMenuBtn('tab_three')\">\n                            SCHEDULE MENU\n                        </button>\n                    </div>\n                </div>\n                \n            </div>\n            <!-- Today's Menu -->\n            <div class=\"today-menu-back\">\n                <div class=\"today-core\">\n                    <label for=\"\">\n                        <select name=\"\" id=\"\" (change)='todayMenuSlotSelect($event)'>\n                            <option value=\"slot_one\">12:00 PM - 12:45 PM</option>\n                            <option value=\"slot_two\">12:45 PM - 1:30 PM</option>\n                            <option value=\"slot_three\">1:30 PM - 2:15 PM</option>\n                            <option value=\"slot_four\">2:15 - 3:00 PM</option>\n                        </select>\n                    </label>\n                    <br>\n                    <label for=\"\">\n                        <select name=\"\" id=\"\" (change)='todayMenuTimesSelect($event)'>\n                            <option value=\"1\">1</option>\n                            <option value=\"2\">2</option>\n                            <option value=\"3\">3</option>\n                            <option value=\"4\">4</option>\n                            <option value=\"5\">5</option>\n                            <option value=\"6\">6</option>\n                            <option value=\"7\">8</option>\n                            <option value=\"9\">9</option>\n                            <option value=\"10\">10</option>\n                        </select>\n                    </label>\n                    <div class=\"today-btns\">\n                        <button type=\"button\" class=\"sc-ch-cancel-btn\" (click)=\"tdClose()\">CANCEL</button>\n                        <button type=\"button\" class=\"sc-ch-add-btn\" (click)=\"addTodayCartClicked()\">ADD TO CART</button>\n                    </div>\n                </div>\n            </div>\n            \n            <!-- Schedule menu section -->\n            <div class=\"schedule-menu-back\">\n                <button type=\"button\" class=\"sch-close-btn\" (click)=\"scClose()\">x</button>\n                <!-- Left side where calender appears -->\n                <div class=\"schedule-menu-left pull-left\">\n                    <!-- Calender -->\n                    <div class=\"calender-core\">\n                        <!-- Next seven days -->\n                        <ul class=\"list-unstyled\">\n                            <!-- <li class=\"selected-date-li calender-li\" (click)=\"loadDay(today_one)\">\n                                <h5>{{today_one | date: 'fullDate'}}</h5>\n                            </li> -->\n                            <li class=\"selected-date-li calender-li\" (click)=\"loadDay(day_one)\">\n                                <h5>{{day_one | date: 'fullDate'}}</h5>\n                            </li>\n                            <li class=\"calender-li\" (click)=\"loadDay(day_two)\">\n                                <h5>{{day_two | date: 'fullDate'}}</h5>\n                            </li>\n                            <li class=\"calender-li\" (click)=\"loadDay(day_three)\">\n                                <h5>{{day_three | date: 'fullDate'}}</h5>\n                            </li>\n                            <li class=\"calender-li\" (click)=\"loadDay(day_four)\">\n                                <h5>{{day_four | date: 'fullDate'}}</h5>\n                            </li>\n                            <li class=\"calender-li\" (click)=\"loadDay(day_five)\">\n                                <h5>{{day_five | date: 'fullDate'}}</h5>\n                            </li>\n                            <li class=\"calender-li\" (click)=\"loadDay(day_six)\">\n                                <h5>{{day_six | date: 'fullDate'}}</h5>\n                            </li>\n                        </ul>\n                    </div>\n\n                </div>\n\n\n                <!-- Right side where Menu appears -->\n                <div class=\"schedule-menu-right pull-right\">\n\n                    <div class=\"schedule-choose-core\">\n                        <!-- Top div -->\n                        <div class=\"sc-ch-top\">\n                            <div class=\"pull-left\">\n                                <div class=\"sc-ch-num-btns-div\">\n                                    <button type=\"button\" class=\"sc-ch-num-btn\" (click)=\"decNumberOfItems()\">-</button>\n                                    <span class=\"sc-ch-num\">{{numberOfItems}}</span>\n                                    <button type=\"button\" class=\"sc-ch-num-btn\" (click)=\"incNumberOfItems()\">+</button>\n                                </div>\n                                <div>\n                                    <select (change)=slotSelected($event) class=\"slot-select\">\n                                    <option value=\"slot_one\">12:00 PM - 12:45 PM</option>\n                                    <option value=\"slot_two\">12:45 PM - 1:30 PM</option>\n                                    <option value=\"slot_three\">1:30 PM - 2:15 PM</option>\n                                    <option value=\"slot_four\">2:15 - 3:00 PM</option>\n                                </select>\n                                </div>\n                            </div>\n                            <div class=\"sc-ch-price-div pull-right\">\n                                <span class=\"sc-ch-price\">&#8377; <span class=\"sc-ch-price-num\">{{place_holder_price}}</span></span>\n                            </div>\n                            \n                            <div class=\"clearfix\"></div>\n                        </div>\n\n\n                        <hr>\n                        <ul class=\"list-inline sc-ch-ul\">\n\n                            <li class=\"sch-col-one\">\n                                <div class=\"sc-ch-mid\">\n                                    <div *ngFor=\"let cat of categories\">\n                                    <div *ngIf=\"cat.name == 'Vegetarian'\">\n                                    <div *ngFor=\"let sub of cat.subs\">\n                                        \n\n                                    <h5 class=\"sc-ch-mid-heads\">{{sub}}</h5>\n                                    <div class=\"sc-ch-menu-divs\">\n                                        <ul class=\"list-inline\">\n                                            <!-- <div *ngFor=\"let menu of menu_to_be_loaded\"></div> -->\n                                            <li *ngFor=\"let menu of menu_to_be_loaded\">\n                                                <div *ngIf=\"menu[0].sub_name == sub\">\n                                                    <div class=\"sc-ch-item\">\n                                                        \n                                                            <span *ngIf =\"sub == 'Roti'\">\n                                                                 <input type=\"checkbox\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked)\" class=\"roti-check checks\">\n                                                            </span>\n                                                            <span *ngIf =\"sub == 'Curries'\">\n                                                                 <input type=\"checkbox\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked)\" class=\"curries-check checks\">\n                                                            </span>\n                                                            <span *ngIf =\"sub == 'Dal'\">\n                                                                 <input type=\"checkbox\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked)\" class=\"dal-check checks\">\n                                                            </span>\n                                                            <span *ngIf =\"sub == 'Sweets'\">\n                                                                 <input type=\"checkbox\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked)\" class=\"sweet-check checks\">\n                                                            </span>\n                                                            <span *ngIf =\"sub == 'Curd'\">\n                                                                 <input type=\"checkbox\" name=\"{{menu[0].item_name}}\" id=\"{{menu[0].item_name}}\" [checked]=\"menu[0].checked\" (change)=\"onCheckChange(menu[0],$event.target.checked)\" class=\"curd-check checks\">\n                                                            </span>\n                                                            \n                                                            <!-- <img src=\"../assets/menu-icons/par.svg\" alt=\"\"> -->\n                                                        <label for=\"{{menu[0].item_name}}\">\n                                                            <span></span>\n                                                            <p class=\"sc-ch-item-name\">{{menu[0].item_name}}</p>\n                                                        </label>\n                                                        <!-- <button type=\"button\" class=\"sc-ch-num-btn\" (click)=\"decNumberOfItem()\">-</button>\n                                                        <span class=\"sc-ch-num\">{{numberOfItems}}</span>\n                                                        <button type=\"button\" class=\"sc-ch-num-btn\" (click)=\"incNumberOfItem()\">+</button> -->\n                                                    </div>\n                                                    \n                                                </div>\n                                            </li>\n                                        </ul>\n\n                                    </div>\n                                    </div>\n                                    </div>\n                                    </div>\n\n                                   \n                                    \n\n                                </div>\n                            </li>\n\n                        </ul>\n\n                        <!-- Schedule menu bottom -->\n                        <div class=\"sc-ch-btm\">\n                            <button type=\"button\" class=\"sc-ch-cancel-btn\" (click)=\"scClose()\">CANCEL</button>\n                            <button type=\"button\" class=\"sc-ch-add-btn\" (click)=\"addCartClicked()\">ADD TO CART</button>\n                        </div>\n\n                    </div>\n\n                </div>\n\n\n\n                <div class=\"clearfix\"></div>\n            </div>\n\n        </div>\n        <!-- Basket -->\n        <div class=\"hover-basket-div visible-md visible-lg\">\n            <a routerLink='/checkout'>\n                <div class=\"shop-basket-icon\"><span class=\"hover-basket-number\">{{basketNumber}}</span><i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i></div>\n                <h6>Basket</h6><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n            </a>\n        </div>\n\n        \n    </div>\n</div>\n<!-- Basket for mobiles -->\n<div class=\"mob-basket-div visible-xs visible-sm\">\n    <a href=\"#\">\n            <i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i><h6>BASKET</h6><span class=\"mob-hover-basket-number\">0</span><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n    </a>\n</div>\n\n"

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
        // Today 
        this.today_books = [];
        this.today_c_books = [];
        this.num_today_items = 0;
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
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set title
        this.title.setTitle('Fysu - Menu');
        console.log(this.datePipe.transform(this.day_six, 'fullDate') + 'ee roju' + this.datePipe.transform(this.last_day_six, 'fullDate'));
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
        // Today's Menu
        this.getMenuItems.getDatesMenu(this.p_today_one, this.p_last_today_one).subscribe(function (t_res) {
            if (t_res.success) {
                // console.log(t_res.msg);
                _this.today_menu = t_res.msg;
                if (_this.today_menu.length < 1) {
                    // Menu does't exist for today
                    // Get lat week's menu
                }
                else {
                    var un_1 = [];
                    _this.today_menu.forEach(function (e) {
                        // console.log(e.item_id);
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
                                    idets.msg[0].date = _this.p_today_one;
                                    _this.today_item_dets.push(idets.msg);
                                }
                            });
                        });
                        _this.today_books = _this.today_item_dets;
                        _this.menu_to_be_loaded = _this.today_books;
                        _this.numberOfItems = _this.num_today_items;
                        _this.place_holder_price = _this.today_price;
                    }
                }
            }
            else {
                console.log(t_res.msg);
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
                    var un_2 = [];
                    _this.day_one_menu.forEach(function (e) {
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
                                    idets.msg[0].date = _this.p_day_one;
                                    _this.day_one_item_dets.push(idets.msg);
                                }
                            });
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
                    var un_3 = [];
                    _this.day_two_menu.forEach(function (e) {
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
                // console.log(dt_res.msg);
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
                    var un_4 = [];
                    _this.day_three_menu.forEach(function (e) {
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
                console.log(df_res);
                _this.day_four_menu = df_res.msg;
                if (_this.day_four_menu.length < 1) {
                    // Menu does't exist for today
                }
                else {
                    var un_5 = [];
                    _this.day_four_menu.forEach(function (e) {
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
                    var un_6 = [];
                    _this.day_five_menu.forEach(function (e) {
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
                    var un_7 = [];
                    _this.day_six_menu.forEach(function (e) {
                        if (un_7.length < 1) {
                            un_7.push(e.item_id);
                        }
                        else {
                            if (un_7.includes(e.item_id)) {
                                // Do nothing
                            }
                            else {
                                un_7.push(e.item_id);
                            }
                        }
                    });
                    if (un_7.length > 0) {
                        // For each item id
                        un_7.forEach(function (el) {
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
            // alert('h');
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
            case this.p_today_one:
                // Get all today's menu
                this.menu_to_be_loaded = this.today_books;
                this.numberOfItems = this.num_today_items;
                this.place_holder_price = this.total_today_price;
                // Update active day status
                this.today_status = true;
                this.day_one_status = false;
                this.day_two_status = false;
                this.day_three_status = false;
                this.day_four_status = false;
                this.day_five_status = false;
                this.day_six_status = false;
                break;
            case this.p_day_one:
                // Day one menu
                this.menu_to_be_loaded = this.day_one_books;
                this.numberOfItems = this.num_day_one_items;
                this.place_holder_price = this.total_day_one_price;
                // Update active day status
                this.today_status = false;
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
                this.numberOfItems = this.num_day_two_items;
                this.place_holder_price = this.total_day_two_price;
                // Update active day status
                this.today_status = false;
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
                this.numberOfItems = this.num_day_three_items;
                this.place_holder_price = this.total_day_three_price;
                // Update active day status
                this.today_status = false;
                this.day_one_status = false;
                this.day_two_status = false;
                this.day_three_status = true;
                this.day_four_status = false;
                this.day_five_status = false;
                this.day_six_status = false;
                break;
            case this.p_day_four:
                console.log(this.day_four_books);
                // Day four menu
                this.menu_to_be_loaded = this.day_four_books;
                this.numberOfItems = this.num_day_four_items;
                this.place_holder_price = this.total_day_four_price;
                // Update active day status
                this.today_status = false;
                this.day_one_status = false;
                this.day_two_status = false;
                this.day_three_status = false;
                this.day_four_status = true;
                this.day_five_status = false;
                this.day_six_status = false;
                break;
            case this.p_day_five:
                // Day five menu
                this.menu_to_be_loaded = this.day_five_books;
                this.numberOfItems = this.num_day_five_items;
                this.place_holder_price = this.total_day_five_price;
                // Update active day status
                this.today_status = false;
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
                this.numberOfItems = this.num_day_six_items;
                this.place_holder_price = this.total_day_six_price;
                // Update active day status
                this.today_status = false;
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
    MenuComponent.prototype.onCheckChange = function (menu, event) {
        var _this = this;
        menu.checked = event;
        switch (true) {
            case this.today_status:
                this.today_books = this.menu_to_be_loaded;
                if (event) {
                    // checked
                    // Add to added items
                    this.today_c_books.push(menu);
                    // Update prices
                    if (this.num_today_items == 0) {
                        this.num_today_items++;
                        this.numberOfItems = this.num_today_items;
                        var to_be_added_price = this.num_today_items * menu.item_price;
                        this.today_price += +menu.item_price;
                        this.total_today_price += +menu.item_price;
                        this.place_holder_price = this.total_today_price;
                    }
                    else {
                        var to_be_added_price = this.num_today_items * menu.item_price;
                        this.today_price += +menu.item_price;
                        this.total_today_price += +to_be_added_price;
                        this.place_holder_price = this.total_today_price;
                    }
                }
                else {
                    // must remove from added items if exists
                    this.today_c_books.forEach(function (element) {
                        if (element._id == menu._id && element.date == menu.date) {
                            var ind = _this.today_c_books.indexOf(element, 0);
                            if (ind > -1) {
                                _this.today_c_books.splice(ind, 1);
                                _this.today_price -= menu.item_price;
                                var to_be_added_price = _this.num_today_items * menu.item_price;
                                _this.total_today_price -= to_be_added_price;
                                _this.place_holder_price = _this.total_today_price;
                            }
                        }
                    });
                }
                break;
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
        var allOrders;
        var index = 0;
        // Today's items are active
        if (this.num_today_items > 0) {
            var date = void 0, menu = void 0, numOfTimes = void 0, totalPrice = void 0;
            index++;
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
            index++;
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
            index++;
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
            index++;
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
            index++;
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
            index++;
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
            index++;
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
        // Updating basket number
        this.basketNumber = index;
        // Get noted to chef
        // this.notesToChef;
        allOrders = {
            // today: today,
            day_one: day_one,
            day_two: day_two,
            day_three: day_three,
            day_four: day_four,
            day_five: day_five,
            day_six: day_six,
        };
        console.log(allOrders);
        localStorage.setItem('all_orders', JSON.stringify(allOrders));
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
    MenuComponent.prototype.schMenuBtn = function (item_name) {
        this.day_one_status = true;
        this.day_two_status = false;
        this.day_three_status = false;
        this.day_four_status = false;
        this.day_five_status = false;
        this.day_six_status = false;
        this.place_holder_price = this.total_today_price;
        switch (item_name) {
            case 'Roti':
                $('.schedule-menu-back').css({ 'display': 'flex' });
                $('.schedule-choose-core').show();
                break;
            case 'Half Rice':
                console.log('Roti selected');
                $('.schedule-menu-back').css({ 'display': 'flex' });
                $('.schedule-choose-core').show();
                break;
            case 'Full Rice':
                console.log('Full rice selected');
                $('.schedule-menu-back').css({ 'display': 'flex' });
                $('.schedule-choose-core').show();
                break;
            case 'sch-trig-btn':
                console.log('Optional button selected');
                $('.schedule-menu-back').css({ 'display': 'flex' });
                $('.schedule-choose-core').show();
                break;
            case 'tab_one':
                $('.schedule-menu-back').css({ 'display': 'flex' });
                $('.schedule-choose-core').show();
                break;
            case 'tab_two':
                $('.schedule-menu-back').css({ 'display': 'flex' });
                $('.schedule-choose-core').show();
                break;
            case 'tab_three':
                $('.schedule-menu-back').css({ 'display': 'flex' });
                $('.schedule-choose-core').show();
                break;
            default:
                break;
        }
    };
    // Slot selected event
    MenuComponent.prototype.slotSelected = function (event) {
        // alert(event.target.value);
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
        var tslot = event.target.value;
        this.today_slot = tslot;
    };
    MenuComponent.prototype.todayMenuTimesSelect = function (event) {
    };
    MenuComponent.prototype.todayAdd = function (tab) {
        $('.today-menu-back').css('display', 'flex');
        switch (tab) {
            case 'tab_one':
                this.tab_one_status = true;
                break;
            case 'tab_two':
                this.tab_two_status = true;
                break;
            case 'tab_three':
                this.tab_three_status = true;
                break;
            default:
                break;
        }
    };
    MenuComponent.prototype.today_submitted = function () {
    };
    MenuComponent.prototype.tdClose = function () {
        $('.today-menu-back').hide();
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_get_menu_service__["a" /* GetMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_get_menu_service__["a" /* GetMenuService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"]) === "function" && _f || Object])
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

module.exports = "<!-- Det Title Div-->\n<div class=\"det-title-div\">\n  <div class=\"det-title-core\">\n    <h2 class=\"det-title\">Orders</h2>\n  </div>\n</div>\n\n<!-- Det core div -->\n<div class=\"dets-core\">\n\n  <div *ngIf='orders_exist == \"nope\"'>\n    <h5>You have no orders yet.</h5>\n  </div>\n  <div *ngIf='orders_exist == \"yes\"'>\n    <table class=\"table-striped\">\n      <tr>\n        <td>\n          Order ID\n        </td>\n        <td>\n          Ordered Time\n        </td>\n        <td>\n          Order Delivery time\n        </td>\n        <td>\n          Delivery Address\n        </td>\n        <td>\n          Price\n        </td>\n      </tr>\n      <tr *ngFor='let order of orders'>\n        <td>\n          {{order.order_id}}\n        </td>\n        <td>\n          {{order.ordered_time}}\n        </td>\n        <td>\n          {{order.order_delivery_date}}\n        </td>\n        <td class=\"address-td\" style=\"font-size:70%\">\n          {{order.delivery_address}}\n        </td>\n        <td>\n          &#8377; {{order.price}}\n        </td>\n      </tr>\n    </table>\n  </div>\n\n</div>\n<div class=\"clearfix\"></div>"

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function OrdersComponent(router, title) {
        this.router = router;
        this.title = title;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Settings: Orders ');
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__("../../../../../src/app/orders/orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/orders/orders.component.css"), __webpack_require__("../../../../../src/app/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object])
], OrdersComponent);

var _a, _b;
//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/payments/payments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\r\n  margin: 20px auto;\r\n}\r\n\r\ntable td {\r\n  padding: 10px 10px;\r\n  font-size: 80%;\r\n  font-weight: normal;\r\n  white-space: normal;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/payments/payments.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Det Title Div-->\n<div class=\"det-title-div\">\n  <div class=\"det-title-core\">\n    <h2 class=\"det-title\">Payments</h2>\n  </div>\n</div>\n\n<!-- Det core div -->\n<div class=\"dets-core\">\n  <div *ngIf='orders_exist == \"nope\"'>\n    <h5>You have no Payments yet.</h5>\n  </div>\n  <div *ngIf='orders_exist == \"yes\"'>\n    <table class=\"table-striped\">\n      <tr>\n        <td>\n          Order ID\n        </td>\n        <td>\n          Ordered Time\n        </td>\n        <td>\n          Order Delivery time\n        </td>\n        <td>\n          Delivery Address\n        </td>\n        <td>\n          Price\n        </td>\n      </tr>\n      <tr *ngFor='let order of orders'>\n        <td>\n          {{order.order_id}}\n        </td>\n        <td>\n          {{order.ordered_time}}\n        </td>\n        <td>\n          {{order.order_delivery_date}}\n        </td>\n        <td class=\"address-td\" style=\"font-size:70%\">\n          {{order.delivery_address}}\n        </td>\n        <td>\n          &#8377; {{order.price}}\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>\n<div class=\"clearfix\"></div>"

/***/ }),

/***/ "../../../../../src/app/payments/payments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentsComponent = (function () {
    function PaymentsComponent(router, title) {
        this.router = router;
        this.title = title;
    }
    PaymentsComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Settings: Payments');
    };
    return PaymentsComponent;
}());
PaymentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-payments',
        template: __webpack_require__("../../../../../src/app/payments/payments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/payments/payments.component.css"), __webpack_require__("../../../../../src/app/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object])
], PaymentsComponent);

var _a, _b;
//# sourceMappingURL=payments.component.js.map

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".web-sec-heads {\r\n  position: relative;\r\n  display: block;\r\n  margin: 20px auto;\r\n  text-align: center;\r\n  color: #000;\r\n  font-size: 200%;\r\n}\r\n\r\n.con-section .container {\r\n  text-align: left !important;\r\n}\r\n\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n  padding-left: 20px;\r\n}\r\n\r\nli {\r\n  margin: 0;\r\n}\r\nh3 {\r\n  position: relative;\r\n  display: block;\r\n  width: 60%;\r\n  text-align: left !important;\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header for mobiles and smaller devices -->\n<header class=\"mob-main-header visible-sm visible-xs\">\n  <button type=\"button\" class=\"mob-menu-trig-btn\">\n                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n            </button>\n  <div class=\"mob-main-logo\">\n    <img src=\"../../assets/logo/logo_black.png\">\n  </div>\n</header>\n<header class=\"main-header visible-md visible-lg\">\n  <div class=\"container\">\n    <div class=\"main-logo pull-left\">\n      <img src=\"../../assets/logo/logo_black.png\">\n    </div>\n    <ul class=\"list-inline det-ul visible-xs visible-sm pull-right\">\n      <li>\n        <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp; <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i> </button>\n      </li>\n    </ul>\n    <ul class=\"list-inline det-ul pull-left visible-md visible-lg\">\n      <li>\n        <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp; <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i> </button>\n      </li>\n      <li>\n        <a href=\"\" class=\"dets-div-btns\" id=\"our-menu-btn\">Our Menu</a>\n      </li>\n      <li>\n        <a class=\"dets-div-btns\" id=\"schedule-menu-btn\" (click)='schMenuBtn(schTrigBtn)'>Schedule Menu</a>\n      </li>\n    </ul>\n    <div class=\"scroll-login-div pull-right  visible-md visible-lg\">\n      <ul class=\"list-inline sc-ul\">\n        <li class=\"login-trig-div\" *ngIf=\"!authService.loggedIn()\">\n          <button type=\"button\" class=\"login-signup-trig-btn dets-div-btns\" (click)=\"appComponent.loginSignupTrigger()\">Log in/Sign up</button>\n        </li>\n        <li class=\"account-trig-div\" *ngIf=\"authService.loggedIn()\">\n          <div class=\"dropdown\">\n            <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\">Account</button>\n            <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings'>My Profile</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/my-orders'>My Orders</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/address'>Saved Address</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/payments'>Payments</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/reward-points'>Reward Points</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/change-password'>Change Password</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"onLogoutClick()\">Logout</a></li>\n            </ul>\n          </div>\n        </li>\n      </ul>\n\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n</header>\n<div class=\"con-section jumbotron\">\n  <h2 class=\"web-sec-heads\">PRIVACY POLICY</h2>\n  <div class=\"container\">\n\n    <p>\n       Fysu is the sole operator of www.fysu.in (website) for the convenient and hassle free order of lunch via the website.\n    </p>\n    <p>\n      The Privacy Policy states our policies regarding the personal information (Email address & Contact Number) we receive from our clients on the website.\n    </p>\n    <p>\n      All the personal information provided shall be used to provide the service and enhance the site and thus, you agree to the use of such information provided by clients in accordance to the policy.\n    </p>\n    \n    <h3>\n       Collection and Disclosure of Personal Information\n    </h3>\n    <p>\n       We collect personal data provided by the client voluntarily, which typically includes yours:\n    </p>\n    <p>Company Name</p>\n    <p>Email Address</p>\n    <p>\n       Mobile Number\n    </p>\n    <p>\n       Delivery Address\n    </p>\n    <p>\n       Any other information you give us while registering and ordering.\n    </p>\n    <p>\n      We use Personal Information to deliver the lunch to you. To the extent, we may use your Personal Information for the marketing mails and you can opt out of such uses via unsubscribe option. We use your personal information to resolve disputes/queries; for a safe transaction; delivery; measure consumer interest in our lunch service, inform you about online offers, enforce our terms and conditions and as otherwise informed to you at the time of collection.\n    </p>\n    <p>\n      We may transfer your Personal Information with other parties in order to comply with laws, protect our rights and property, in connection with or during negotiation of any merger, financing, acquisition, bankruptcy, dissolution, transaction or proceeding involving sale, transfer, divestiture, or disclosure of all or a portion of our business or assets to another company.\n    </p>\n    <h3>Log Data</h3>\n    <p>\n      Fysu collects information that your browser sends us whenever you visit our website. This Log Data may include information such as your computer's Internet Protocol (\"IP\") address, browser type, browser version, &amp; the pages of our website that you visit, the time and date of your visit, the time spent on those pages and other statistics.\n    </p>\n    <p>\n      We may use data collection devices such as cookies on certain pages of the website to analyze our web page flow, count visits, measure promotional effectiveness of emails and websites, and promote trust and safety.\n    </p>\n    <h3>\n       Cookies\n    </h3>\n    <p>\n      Cookies are small files placed on your hard drive that assist us in providing our services. We offer certain features that are available through the use of a cookie only. If you decline all cookies, you may not be able to use some pages of our website.\n    </p>\n    <h3>\n       Google Analytics\n    </h3>\n    <p>\n       We may use Google Analytics to analyze how our users use the website and help improve our website and services.\n    </p>\n    <h3>\n       Security\n    </h3>\n    <p>\n      To protect the user's Personal Information is important to us and we take utmost precautions to ensure that the information is not lost, misused, disclosed or destroyed, but no electronic method is 100 % secure. Hence, we don't guarantee hundred percent security of your Personal Information.\n    </p>\n    <h3>\n       Payment Information\n    </h3>\n    <p>\n      Fysu does not store credit card or any other customer payment information. All the information you provide is processed through a secure server.\n    </p>\n    <h3>\n       Access, Accuracy and Security\n    </h3>\n    <p>\n      Fysu will take reasonable steps to ensure the personal information collected is accurate, complete and up-to-date. The customer may access and request correction of any personal information concerning you at any time. The customer may also request the personal information be deleted at any time. Any such requests should be made directly by contacting Fysu. We will take reasonable steps to protect personal information from misuse, loss and unauthorized access, modification or disclosure.\n    </p>\n    <h3>\n       Confidentiality\n    </h3>\n    <p>\n      You further acknowledge that the Website may contain information which is designated confidential by Us and that you shall not disclose such information without our prior written consent. \n    </p>\n    <p>\n      Your information is regarded as confidential and therefore will not be divulged to any third party, unless if legally required to do so to the appropriate authorities.\n    </p>\n    <p>\n      We will not sell, share, or rent your personal information to any third party or use your e-mail address for unsolicited mail. Any emails sent by us will only be in connection with the provision of agreed services and products.\n    </p>\n    <h3>\n       Changes to Privacy Policy\n    </h3>\n    <p>\n      We reserve the rights to modify or update this Privacy Policy any time. Changes shall be effective immediately upon posting on the website. So, you are advised to review this Privacy Policy every time upon placement of order.\n    </p>\n    <h3>\n       Contact Us\n    </h3>\n    <p>\n       For any query, grievance, complaint, any other information or just to say HI, you can contact us at info@fysu.in\n    </p>\n  </div>\n</div>"

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
    function PrivacyComponent(router, title, appComponent, authService) {
        this.router = router;
        this.title = title;
        this.appComponent = appComponent;
        this.authService = authService;
    }
    PrivacyComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Privacy Policy - Fysu');
    };
    return PrivacyComponent;
}());
PrivacyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-privacy',
        template: __webpack_require__("../../../../../src/app/privacy/privacy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/privacy/privacy.component.css"), __webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], PrivacyComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=privacy.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Det Title Div-->\n<div class=\"det-title-div\">\n  <div class=\"det-title-core\">\n    <h2 class=\"det-title\">Your Profile</h2>\n  </div>\n</div>\n\n<!-- Det core div -->\n<div class=\"dets-core\">\n  <ul class=\"list-unstyled\">\n    <li class=\"\">\n      <label for=\"email\">Email</label>\n    </li>\n    <li class=\"\">\n      <input type=\"email\" name=\"email\" id=\"dets-email\" [(ngModel)]='userEmail' class=\"inputs\" value=\"\">\n    </li>\n    <li class=\"\">\n      <label for=\"name\">Full Name</label>\n    </li>\n    <li class=\"\">\n      <input type=\"text\" name=\"full-name\" class=\"inputs\" [(ngModel)]='userName' id=\"name\" value=\"\">\n    </li>\n\n    <!-- <li class=\"\">\n      <label for=\"name\">Company Name</label>\n    </li>\n    <li class=\"\">\n      <input type=\"text\" name=\"full-name\" class=\"inputs\" [(ngModel)]='companyName' id=\"name\" value=\"\">\n    </li> -->\n\n    <li class=\"\">\n      <label for=\"mobile\">Mobile Number</label>\n    </li>\n    <li class=\"\">\n      <input type=\"text\" name=\"mobile\" class=\"inputs\" [(ngModel)]='userMobile' id=\"mobile\" value=\"\">\n    </li>\n  </ul>\n  <div class=\"bottom-div\">\n    <div class=\"save-btns-div pull-left\">\n      <button type=\"button\" class=\"save-btns\">Cancel</button>\n      <button type=\"button\" class=\"save-btns\" (click)='profileUpdate(userEmail,userName,userMobile)'>Save</button>\n    </div>\n    <div class=\"pull-right\">\n      <a routerLink='/settings/change-password'><button type=\"button\" class=\"change-pwd-btn\">Change Password</button></a>\n    </div>\n    <div class=\"clearfix\">\n    </div>\n\n  </div>\n</div>"

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
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css"), __webpack_require__("../../../../../src/app/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/reward-points/reward-points.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .points {\r\n   font-size: 300%;\r\n }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reward-points/reward-points.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Det Title Div-->\n<div class=\"det-title-div\">\n  <div class=\"det-title-core\">\n    <h2 class=\"det-title\">Reward Points</h2>\n  </div>\n</div>\n\n<!-- Det core div -->\n<div class=\"dets-core\">\n  <h5>Reward Points</h5>\n  <h3 class=\"points\">{{rewardPoints}}</h3>\n</div>"

/***/ }),

/***/ "../../../../../src/app/reward-points/reward-points.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardPointsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function RewardPointsComponent(router, title) {
        this.router = router;
        this.title = title;
    }
    RewardPointsComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Settings: Profile');
    };
    return RewardPointsComponent;
}());
RewardPointsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reward-points',
        template: __webpack_require__("../../../../../src/app/reward-points/reward-points.component.html"),
        styles: [__webpack_require__("../../../../../src/app/reward-points/reward-points.component.css"), __webpack_require__("../../../../../src/app/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object])
], RewardPointsComponent);

var _a, _b;
//# sourceMappingURL=reward-points.component.js.map

/***/ }),

/***/ "../../../../../src/app/rewards/rewards.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\r\n  padding: 0 !important;\r\n}\r\n\r\n.main-container>.container {\r\n  width: 100% !important;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.rewards-title-img-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  width: 100%;\r\n  height: 200px;\r\n  color: #fff;\r\n  text-align: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/gift.jpg") + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.rewards-main {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  padding: 20px 0px;\r\n  background-color: #EEEEEE;\r\n}\r\n\r\n\r\n/* Left rewards section */\r\n\r\n.left-rew-section,\r\n.right-rew-section {\r\n  position: relative;\r\n  margin: 0;\r\n}\r\n\r\n.left-rew-section {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  -webkit-justify-content: flex-end;\r\n  -webkit-box-align: end;\r\n      -ms-flex-align: end;\r\n          align-items: flex-end;\r\n  -webkit-align-items: flex-end;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  width: 70%;\r\n}\r\n\r\n.right-rew-section {\r\n  width: 30%;\r\n}\r\n\r\n.points-reps {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  -webkit-justify-content: space-around;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  width: auto;\r\n}\r\n\r\n.points-rep {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  background-color: #1F5EA9;\r\n  height: 70px;\r\n  width: 35px;\r\n  border: none;\r\n  color: #fff;\r\n  font-size: 200%;\r\n  margin: 0 3px;\r\n  border-radius: 3px;\r\n}\r\n\r\n.points-reps h6 {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  text-align: center !important;\r\n}\r\n\r\n.bar-div-core {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  width: 90%;\r\n}\r\n\r\n.bar-div,\r\n.bar-div-top,\r\n.bar-div-bottom {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  -webkit-justify-content: flex-end;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n}\r\n\r\n.bar-div-top,\r\n.bar-div-bottom {\r\n  margin: 0;\r\n  color: #417EBF;\r\n  font-size: 80%;\r\n  font-weight: bold;\r\n}\r\n\r\n.bar-div-num {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 100%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.bar-div-bottom .bar-div-num {\r\n  top: 15px;\r\n}\r\n\r\n.bar {\r\n  position: relative;\r\n  background-color: #CCCCCC;\r\n  height: 30px;\r\n  width: 30%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.bar-one {\r\n  border-bottom-left-radius: 30px;\r\n  border-top-left-radius: 30px;\r\n}\r\n\r\n.bar-two {\r\n  margin: 0 5px;\r\n}\r\n\r\n.bar-three {\r\n  border-bottom-right-radius: 30px;\r\n  border-top-right-radius: 30px;\r\n}\r\n\r\n.bar-div-top .bar,\r\n.bar-div-bottom .bar {\r\n  background-color: transparent;\r\n  /* height: 0; */\r\n}\r\n\r\n.last-bar-num {\r\n  left: 85%;\r\n}\r\n\r\n.redeem-div {\r\n  position: relative;\r\n  display: block;\r\n  margin: 0;\r\n  padding: 10px 0;\r\n}\r\n\r\n.redeem-head {\r\n  position: relative;\r\n  display: block;\r\n  margin: 20px auto;\r\n  text-align: center;\r\n  font-size: 200%;\r\n  color: #1F5EA9;\r\n}\r\n\r\n.redeem-points-div {\r\n  position: relative;\r\n  display: block;\r\n}\r\n\r\n.redeem-core {\r\n  position: relative;\r\n  display: inline-block;\r\n  height: 530px;\r\n  /* width: 350px; */\r\n}\r\n\r\n.redeem-top {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  height: 10%;\r\n  margin: 0;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  background-color: #fff;\r\n  color: #1F5EA9;\r\n  font-weight: bold;\r\n  font-size: 150%;\r\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.redeem-main {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  height: 88%;\r\n  margin: 0;\r\n  margin-top: 2%;\r\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.redeem-amount {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  width: 100%;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 60%;\r\n  margin: 0;\r\n  background-color: #fff;\r\n}\r\n\r\n.redeem-number {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 200px;\r\n  width: 200px;\r\n  border-radius: 50%;\r\n  background-color: #49AAFF;\r\n  color: #fff;\r\n  font-size: 400%;\r\n}\r\n\r\n.red-num-in {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  -webkit-align-items: flex-start;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-justify-content: flex-start;\r\n}\r\n\r\n.redeem-dollar-sign {\r\n  font-size: 50%;\r\n}\r\n\r\n.redeem-dets {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  width: 100%;\r\n  height: 40%;\r\n  margin: 0;\r\n  padding: 10px 30px;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  -webkit-align-items: flex-start;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  background-color: #fff;\r\n}\r\n\r\n.redeem-dets h6 {\r\n  margin: 0 0 5px 0;\r\n  font-size: 105%;\r\n  color: #3e3e3e;\r\n  font-weight: bold;\r\n}\r\n\r\n.points-index-bar {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 7px;\r\n  border-radius: 7px;\r\n  background-color: #eee;\r\n  margin: 20px auto 2px auto;\r\n}\r\n\r\n.points-away {\r\n  font-size: 70%;\r\n  color: #666;\r\n  margin-top: 3px;\r\n}\r\n\r\n.redeem-btn {\r\n  height: 40px;\r\n  width: 150px;\r\n  border: none;\r\n  background-color: #CCCCCC;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  font-weight: bold;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rewards/rewards.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header for mobiles and smaller devices -->\n<header class=\"mob-main-header visible-sm visible-xs\">\n    <button type=\"button\" class=\"mob-menu-trig-btn\">\n                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n            </button>\n    <div class=\"mob-main-logo\">\n        <img src=\"../../assets/logo/logo_black.png\">\n    </div>\n</header>\n<!-- For large screens -->\n<header class=\"main-header visible-md visible-lg\">\n    <div class=\"container\">\n        <div class=\"main-logo pull-left\">\n            <img src=\"../../assets/logo/logo_black.png\">\n        </div>\n        <ul class=\"list-inline det-ul visible-xs visible-sm pull-right\">\n            <li>\n                <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp; <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i> </button>\n            </li>\n        </ul>\n        <ul class=\"list-inline det-ul pull-left visible-md visible-lg\">\n            <li>\n                <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp; <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i> </button>\n            </li>\n            <li>\n                <a routerLink='/menu' class=\"dets-div-btns selected\" id=\"our-menu-btn\">Our Menu</a>\n            </li>\n            <li>\n                <a class=\"dets-div-btns\" id=\"schedule-menu-btn\" (click)='schMenuBtn(schTrigBtn)'>Schedule Menu</a>\n            </li>\n        </ul>\n        <div class=\"scroll-login-div pull-right  visible-md visible-lg\">\n            <ul class=\"list-inline sc-ul\">\n                <li class=\"login-trig-div\" *ngIf=\"!authService.loggedIn()\">\n                    <button type=\"button\" class=\"login-signup-trig-btn dets-div-btns\" (click)=\"appComponent.loginSignupTrigger()\">Log in/Sign up</button>\n                </li>\n                <li class=\"account-trig-div\" *ngIf=\"authService.loggedIn()\">\n                    <div class=\"dropdown\">\n                        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\">Account</button>\n                        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings'>My Profile</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/my-orders'>My Orders</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/address'>Saved Address</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/payments'>Payments</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/reward-points'>Reward Points</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/change-password'>Change Password</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"onLogoutClick()\">Logout</a></li>\n                        </ul>\n                    </div>\n                </li>\n            </ul>\n\n        </div>\n        <div class=\"clearfix\"></div>\n    </div>\n</header>\n    <div class=\"main-container\">\n        <div class=\"container\">\n            <div class=\"rewards-title-img-div\">\n                <h2>Got points? Get rewards</h2>\n                <h6>Earn 1 point for every $1 spent</h6>\n            </div>\n            <div class=\"rewards-main\">\n                <div class=\"container\">\n\n                    <!-- Left rewards section -->\n                    <div class=\"right-rew-section pull-left\">\n\n                    </div>\n                    \n                    <!-- Right rewards section-->\n                    \n                    <div class=\"left-rew-section pull-right\">\n                        \n                        <div class=\"points-div\">\n                            <div class=\"points-reps\">\n                                <div class=\"points-rep\">\n                                    0\n                                </div>\n                                <div class=\"points-rep\">\n                                    0\n                                </div>\n                                <div class=\"points-rep\">\n                                    0\n                                </div>\n                                <div class=\"points-rep\">\n                                    0\n                                </div>\n                            </div>\n                            <h6>Points Earned</h6>\n                        </div>\n                        <br>\n\n                        <div class=\"bar-div-core\">\n                            <div class=\"bar-div-top\">\n                                <div class=\"bar bar-one\">\n                                    <span class=\"bar-div-num\">$5</span>\n                                </div>\n                                <div class=\"bar bar-two\">\n                                    <span class=\"bar-div-num\">$10</span>\n                                </div>\n                                <div class=\"bar bar-three\">\n                                    <span class=\"bar-div-num last-bar-num\">$20</span>\n                                </div>\n                            </div>\n                            <div class=\"bar-div\">\n                                \n                                <div class=\"bar bar-one\">\n                                    \n                                </div>\n                                <div class=\"bar bar-two\">\n                                    \n                                </div>\n                                <div class=\"bar bar-three\">\n                                    \n                                </div>\n\n                            </div>\n                            <div class=\"bar-div-bottom\">\n                                <div class=\"bar bar-one\">\n                                    <span class=\"bar-div-num\">5000</span>\n                                </div>\n                                <div class=\"bar bar-two\">\n                                    <span class=\"bar-div-num\">9,500</span>\n                                </div>\n                                <div class=\"bar bar-three\">\n                                    <span class=\"bar-div-num last-bar-num\">18000</span>\n                                </div>\n                            </div>\n                        </div>\n\n\n                    </div>\n\n                    <div class=\"clearfix\"></div>\n                    <div class=\"redeem-div container\">\n                        <h3 class=\"redeem-head\">Redeem your points</h3>\n                        <div class=\"redeem-points-div row\">\n                            <div class=\"redeem-core col-md-4\">\n                                <div class=\"redeem-top\">\n                                    <h6>5,000 Point Rewards</h6>\n                                </div>\n                                <div class=\"redeem-main\">\n                                    \n                                    <div class=\"redeem-amount\">\n                                        <div class=\"redeem-number\">\n                                            <div class=\"red-num-in\"><div class=\"redeem-dollar-sign\">$</div><span class=\"redee\">5</span></div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"redeem-dets\">\n                                        <h6>$5 delivery.com credit</h6>\n                                        <a href=\"\">Learn More</a>\n                                        <!-- Points index bar -->\n                                        <div class=\"points-index-bar\"></div>\n                                        <p class=\"points-away\">5,000 points away</p>\n                                        <button type=\"button\" class=\"redeem-btn\">Redeem</button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"redeem-core col-md-4\">\n                                <div class=\"redeem-top\">\n                                    <h6>5,000 Point Rewards</h6>\n                                </div>\n                                <div class=\"redeem-main\">\n                                    \n                                    <div class=\"redeem-amount\">\n                                        <div class=\"redeem-number\">\n                                            <div class=\"red-num-in\"><div class=\"redeem-dollar-sign\">$</div><span class=\"redee\">5</span></div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"redeem-dets\">\n                                        <h6>$5 delivery.com credit</h6>\n                                        <a href=\"\">Learn More</a>\n                                        <!-- Points index bar -->\n                                        <div class=\"points-index-bar\"></div>\n                                        <p class=\"points-away\">5,000 points away</p>\n                                        <button type=\"button\" class=\"redeem-btn\">Redeem</button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"redeem-core col-md-4\">\n                                <div class=\"redeem-top\">\n                                    <h6>5,000 Point Rewards</h6>\n                                </div>\n                                <div class=\"redeem-main\">\n                                    \n                                    <div class=\"redeem-amount\">\n                                        <div class=\"redeem-number\">\n                                            <div class=\"red-num-in\"><div class=\"redeem-dollar-sign\">$</div><span class=\"redee\">5</span></div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"redeem-dets\">\n                                        <h6>$5 delivery.com credit</h6>\n                                        <a href=\"\">Learn More</a>\n                                        <!-- Points index bar -->\n                                        <div class=\"points-index-bar\"></div>\n                                        <p class=\"points-away\">5,000 points away</p>\n                                        <button type=\"button\" class=\"redeem-btn\">Redeem</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>"

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
    function RewardsComponent(router, title, appComponent, authService) {
        this.router = router;
        this.title = title;
        this.appComponent = appComponent;
        this.authService = authService;
    }
    RewardsComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Fysu - Rewards');
    };
    return RewardsComponent;
}());
RewardsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rewards',
        template: __webpack_require__("../../../../../src/app/rewards/rewards.component.html"),
        styles: [__webpack_require__("../../../../../src/app/rewards/rewards.component.css"), __webpack_require__("../../../../../src/app/menu/menu.component.css"), __webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], RewardsComponent);

var _a, _b, _c, _d;
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
        return this.http.post('admin/register', admin, { headers: header }).map(function (res) { return res.json(); });
    };
    AdminAuthService.prototype.authenticateAdmin = function (admin) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        return this.http.post('admin/authenticate', admin, { headers: header }).map(function (res) { return res.json(); });
    };
    AdminAuthService.prototype.getProfile = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        this.loadToken();
        header.append('Authorization', this.authToken);
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



// http://localhost:3600/
var AdminServicesService = (function () {
    function AdminServicesService(http) {
        this.http = http;
    }
    // Add Category Page
    // Adding a category
    AdminServicesService.prototype.addCategory = function (newData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('admin/add-category', newData, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Delete cateogry
    AdminServicesService.prototype.deleteCategory = function (id) {
        return this.http.delete('admin/delete-category/' + id).map(function (res) { return res.json(); });
    };
    // Get Categories
    AdminServicesService.prototype.getCategories = function () {
        return this.http.get('admin/get-categories').map(function (res) { return res.json(); });
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
        return this.http.post('admin/add-item', Data, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Get all items
    AdminServicesService.prototype.getItems = function (cat_id, sub_name) {
        return this.http.get('admin/get-items/' + cat_id + '/' + sub_name).map(function (res) { return res.json(); });
    };
    // Delete Items
    AdminServicesService.prototype.deleteItem = function (item_id) {
        return this.http.delete('admin/delete-item/' + item_id).map(function (res) { return res.json(); });
    };
    // Add Sub Categories Page
    // Add subcategory
    AdminServicesService.prototype.addSub = function (subData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:3600/admin/add-sub-category', subData, { headers: headers }).map(function (res) { return res.json(); });
    };
    // Get subs in a category
    AdminServicesService.prototype.getSubs = function (catId) {
        return this.http.get('admin/get-subs/' + catId).map(function (res) { return res.json(); });
    };
    // Delet Sub from category
    AdminServicesService.prototype.deleteSubFromCategory = function (subName, cat_id) {
        return this.http.delete('admin/delete-sub-category/' + subName + '/' + cat_id).map(function (res) { return res.json(); });
    };
    // Add Menu Page
    // Getting items by sub category
    AdminServicesService.prototype.getDateItems = function (cat_id, sub_name, date) {
        return this.http.get('admin/get-date-items/' + cat_id + '/' + sub_name + '/' + date).map(function (res) { return res.json(); });
    };
    // post schedule
    AdminServicesService.prototype.postSchedule = function (schArray, remArray) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        var schJSON = JSON.stringify(schArray);
        var schData = { schArray: schArray, remArray: remArray };
        return this.http.post('admin/post-dates', schData, { headers: headers }).map(function (res) { return res.json(); });
    };
    AdminServicesService.prototype.getDates = function () {
        return this.http.get('admin/get-all-dates').map(function (res) { return res.json(); });
    };
    AdminServicesService.prototype.deleteDate = function (date_id) {
        return this.http.delete('admin/delete-date/' + date_id).map(function (res) { return res.json(); });
    };
    // View Orders Page
    // Reward Page
    // Get all users
    AdminServicesService.prototype.getUsers = function () {
        return this.http.get('admin/get-users').map(function (res) { return res.json(); });
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
        return this.http.post('users/update-user', user, { headers: header }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.updatePassword = function (pwd) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        return this.http.post('users/update-pwd', pwd, { headers: header }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerUser = function (user) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: header }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateMobile = function (mobile) {
        return this.http.get('users/find-mobile/' + mobile).map(function (res) { return res.json(); });
    };
    // Delete cateogry
    AuthService.prototype.authenticateEmail = function (email) {
        return this.http.get('users/find-email/' + email).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
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
        return this.http.post('users/save-address', address, { headers: header }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteAddress = function (address) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        header.append('Content-Type', 'application/json');
        return this.http.post('users/delete-address', address, { headers: header }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUserAddressses = function (user_id) {
        return this.http.get('users/get-address/' + user_id).map(function (res) { return res.json(); });
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
        return this.http.get('admin/get-categories').map(function (res) { return res.json(); });
    };
    // Getting roti items
    GetMenuService.prototype.getRotiItems = function () {
        return this.http.get('admin/get-roti-items').map(function (res) { return res.json(); });
    };
    GetMenuService.prototype.getDatesMenu = function (date, last_date) {
        return this.http.get('admin/get-dates-menu/' + date + '/' + last_date).map(function (res) { return res.json(); });
    };
    GetMenuService.prototype.getItemDetails = function (item_id) {
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
exports.push([module.i, ".main-container {\r\n  position: relative;\r\n  display: block;\r\n  background-color: #F2F5F6;\r\n  min-height: 75vh;\r\n  padding-bottom: 30px;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n/* Change pwd btn in profile */\r\n\r\n.change-pwd-btn {\r\n  color: #F04F5E !important;\r\n  transition: all 0.2s ease-in;\r\n}\r\n\r\n.change-pwd-btn:hover {\r\n  color: #353637 !important;\r\n}\r\n\r\n\r\n/*  Left Index  */\r\n\r\n.left-index-div {\r\n  position: relative;\r\n  display: block;\r\n  width: 20%;\r\n}\r\n\r\n.left-index {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n}\r\n\r\n.left-index li {\r\n  padding: 15px 20px;\r\n  font-size: 100%;\r\n  border-bottom: 1px solid #F2F5F6;\r\n  transition: all 0.2s ease-in;\r\n}\r\n\r\n.left-index a {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n.left-index a:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.left-index li h2 {\r\n  font-size: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.left-index li:hover {\r\n  cursor: pointer;\r\n  background-color: #F2F5F6;\r\n}\r\n\r\n.selected-index-item {\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n/* Right Details */\r\n\r\n.right-dets {\r\n  position: relative;\r\n  display: block;\r\n  width: 78%;\r\n  /* font-size: 130%; */\r\n}\r\n\r\n.det-title-div {\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  padding: 15px 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.det-title {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 100%;\r\n  font-weight: bold;\r\n}\r\n\r\n.dets-core {\r\n  position: relative;\r\n  display: block;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  padding: 5px 20px;\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n\r\n.dets-core label {\r\n  display: block;\r\n  text-align: left;\r\n  font-size: 105%;\r\n  font-weight: normal;\r\n  margin: 10px auto;\r\n}\r\n\r\n.dets-core .inputs {\r\n  width: 50%;\r\n  height: 40px;\r\n  border: 2px solid #F3F3F3;\r\n  border-radius: 5px;\r\n  padding: 0 10px;\r\n}\r\n\r\n.save-btns-div {\r\n  position: relative;\r\n  margin: 20px 0;\r\n}\r\n\r\n.save-btns {\r\n  border-radius: 5px;\r\n  height: 45px;\r\n  width: 80px;\r\n  border: none;\r\n  background-color: #6DA942;\r\n  color: #fff;\r\n  margin-right: 15px;\r\n  transition: all 0.2s ease-out;\r\n}\r\n.save-btns:hover{\r\n  background-color: #588835;\r\n}\r\n\r\n\r\n/* Address page */\r\n\r\n.addresses-core {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  width: 100%;\r\n}\r\n\r\n.address-item,\r\n.add-address {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  display: -webkit-inline-flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  border-radius: 4px;\r\n  padding: 20px;\r\n  width: 300px;\r\n  height: 200px;\r\n  margin: 20px auto;\r\n}\r\n\r\n.address-item {\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.address-top {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  height: 20%;\r\n  width: 100%;\r\n  color: #c6c6c6;\r\n  margin: 0;\r\n}\r\n\r\n.address-top i {\r\n  cursor: pointer;\r\n}\r\n\r\n.address-name {\r\n  color: #fa0000;\r\n}\r\n\r\n.address {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  -webkit-align-items: flex-start;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  height: 80%;\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n\r\n.address h6 {\r\n  font-size: 110%;\r\n}\r\n\r\n.add-address {\r\n  background-color: #DCDCDC;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);\r\n  transition: all 0.2s ease-out;\r\n}\r\n\r\n.add-address:hover {\r\n  cursor: pointer;\r\n  background-color: #e3e3e3;\r\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.add-address h5 {\r\n  font-size: 120%;\r\n}\r\n\r\n.add-address i {\r\n  font-size: 200%;\r\n}\r\n\r\n.bottom-div {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -webkit-flex;\r\n  width: 100%;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-justify-content: space-between;\r\n}\r\n\r\n.change-pwd-btn {\r\n  border: none;\r\n  /* border-bottom: 1px solid #00f; */\r\n  background: transparent;\r\n  color: #0000af;\r\n}\r\n\r\n\r\n/* Extra Small Devices, .visible-xs-* */\r\n\r\n\r\n/* @media (max-width: 480px) {} */\r\n\r\n@media (max-width: 767px) {\r\n  .main-footer {\r\n    margin-bottom: 40px;\r\n  }\r\n  .main-container {\r\n    padding-top: 80px;\r\n  }\r\n  .left-index-div {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    margin: 20px auto;\r\n  }\r\n  .left-index-div .left-index {\r\n    position: relative;\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 90%;\r\n  }\r\n  .right-dets {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    margin: 20px auto;\r\n  }\r\n  .right-dets .det-title-div,\r\n  .right-dets .dets-core {\r\n    position: relative;\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 90%;\r\n  }\r\n  .dets-core .inputs {\r\n    width: 80%;\r\n  }\r\n  .bottom-div .save-btns-div {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    margin: 20px auto;\r\n  }\r\n  .bottom-div .save-btns-div .save-btns {\r\n    width: 40%;\r\n  }\r\n}\r\n\r\n\r\n/* Small Devices, .visible-sm-* */\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .left-index-div {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    margin: 20px auto;\r\n  }\r\n  .left-index-div .left-index {\r\n    position: relative;\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 90%;\r\n  }\r\n  .right-dets {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    margin: 20px auto;\r\n  }\r\n  .right-dets .det-title-div,\r\n  .right-dets .dets-core {\r\n    position: relative;\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 90%;\r\n  }\r\n  .dets-core .inputs {\r\n    width: 80%;\r\n  }\r\n  .bottom-div .save-btns-div {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    margin: 20px auto;\r\n  }\r\n  .bottom-div .save-btns-div .save-btns {\r\n    width: 40%;\r\n  }\r\n}\r\n\r\n\r\n/* Medium Devices, .visible-md-* */\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {}\r\n\r\n\r\n/* Large Devices, .visible-lg-* */\r\n\r\n@media (min-width: 1200px) {}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mob-menu visible-sm visible-xs\">\n  <ul class=\"list-unstyled\">\n    <li class=\"reward-pts-trig-btn\">\n      REWARDS\n    </li>\n  </ul>\n</div>\n<!-- Header for mobiles and smaller devices -->\n<header class=\"mob-main-header visible-sm visible-xs\">\n  <button type=\"button\" class=\"mob-menu-trig-btn\">\n                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n            </button>\n  <div class=\"mob-main-logo\">\n    <img src=\"../assets/logo/logo_black.png\">\n  </div>\n</header>\n<header class=\"main-header visible-md visible-lg\">\n  <div class=\"container\">\n    <div class=\"main-logo pull-left\">\n      <img src=\"../../assets/logo/logo_black.png\">\n    </div>\n    <ul class=\"list-inline det-ul pull-left\">\n      <li>\n        <a routerLink='/menu' class=\"dets-div-btns\" id=\"our-menu-btn\">Our Menu</a>\n      </li>\n      <li>\n        <a routerLink='/menu' class=\"dets-div-btns\" id=\"schedule-menu-btn\">Schedule Menu</a>\n      </li>\n    </ul>\n    <div class=\"scroll-login-div pull-right\">\n      <div class=\"dropdown\">\n        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\">Account</button>\n        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\n          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings'>My Profile</a></li>\n          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/my-orders'>My Orders</a></li>\n          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/address'>Saved Address</a></li>\n          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/payments'>Payments</a></li>\n          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/reward-points'>Reward Points</a></li>\n          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/change-password'>Change Password</a></li>\n          <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"onLogoutClick()\">Logout</a></li>\n        </ul>\n      </div>\n      <button type=\"button\" class=\"login-signup-trig-btn dets-div-btns\">Basket <span>0</span></button>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n</header>\n<div class=\"main-container\">\n  <div class=\"container\">\n\n    <!-- Left index -->\n    <div class=\"left-index-div pull-left\">\n      <div class=\"left-index\">\n        <ul class=\"list-unstyled\">\n          <a routerLink='profile'>\n            <li class=\"left-index-items selected-index-item\">\n              <h2>My Profile</h2>\n            </li>\n          </a>\n          <a routerLink='my-orders'>\n            <li class=\"left-index-items\">\n              <h2>My Orders</h2>\n            </li>\n          </a>\n          <a routerLink='address'>\n            <li class=\"left-index-items\">\n              <h2>Saved Address</h2>\n            </li>\n          </a>\n          <a routerLink='payments'>\n            <li class=\"left-index-items\">\n              <h2>Payments</h2>\n            </li>\n          </a>\n          <a routerLink='reward-points'>\n            <li class=\"left-index-items\">\n              <h2>Reward Points</h2>\n            </li>\n          </a>\n          <a routerLink='change-password'>\n            <li class=\"left-index-items\">\n              <h2>Change Password</h2>\n            </li>\n          </a>\n          <li class=\"left-index-items\">\n            <h2>Logout</h2>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <!-- Right Details -->\n    <div class=\"right-dets pull-right\">\n      <router-outlet>\n\n      </router-outlet>\n    </div>\n\n  </div>\n</div>"

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
    function SettingsComponent(router, title, authService, userService) {
        this.router = router;
        this.title = title;
        this.authService = authService;
        this.userService = userService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Settings');
    };
    SettingsComponent.prototype.onLogoutClick = function () {
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
        styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_service__["a" /* UserService */]) === "function" && _d || Object])
], SettingsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/terms/terms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".web-sec-heads{\r\n    position: relative;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    color: #000;\r\n    font-size: 200%;\r\n}\r\n.con-section .container{\r\n    text-align: left !important;\r\n}\r\nul{\r\n    margin: 0;\r\n    padding: 0;\r\n    padding-left: 20px;\r\n}\r\nli{\r\n    margin: 0;\r\n}\r\nh3,h4{\r\n    position: relative;\r\n    display: block;\r\n    width: 60%;\r\n    text-align: left !important;\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header for mobiles and smaller devices -->\n<header class=\"mob-main-header visible-sm visible-xs\">\n  <button type=\"button\" class=\"mob-menu-trig-btn\">\n                <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n            </button>\n  <div class=\"mob-main-logo\">\n    <img src=\"../../assets/logo/logo_black.png\">\n  </div>\n</header>\n<header class=\"main-header visible-md visible-lg\">\n  <div class=\"container\">\n    <div class=\"main-logo pull-left\">\n      <img src=\"../../assets/logo/logo_black.png\">\n    </div>\n    <ul class=\"list-inline det-ul visible-xs visible-sm pull-right\">\n      <li>\n        <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp; <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i> </button>\n      </li>\n    </ul>\n    <ul class=\"list-inline det-ul pull-left visible-md visible-lg\">\n      <li>\n        <button type=\"button\" class=\"dets-div-btns\" id=\"loc-btn\"> MADHAPUR &nbsp; <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i> </button>\n      </li>\n      <li>\n        <a href=\"\" class=\"dets-div-btns\" id=\"our-menu-btn\">Our Menu</a>\n      </li>\n      <li>\n        <a class=\"dets-div-btns\" id=\"schedule-menu-btn\" (click)='schMenuBtn(schTrigBtn)'>Schedule Menu</a>\n      </li>\n    </ul>\n    <div class=\"scroll-login-div pull-right  visible-md visible-lg\">\n      <ul class=\"list-inline sc-ul\">\n        <li class=\"login-trig-div\" *ngIf=\"!authService.loggedIn()\">\n          <button type=\"button\" class=\"login-signup-trig-btn dets-div-btns\" (click)=\"appComponent.loginSignupTrigger()\">Log in/Sign up</button>\n        </li>\n        <li class=\"account-trig-div\" *ngIf=\"authService.loggedIn()\">\n          <div class=\"dropdown\">\n            <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\">Account</button>\n            <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings'>My Profile</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/my-orders'>My Orders</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/address'>Saved Address</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/payments'>Payments</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/reward-points'>Reward Points</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" routerLink='/settings/change-password'>Change Password</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" (click)=\"onLogoutClick()\">Logout</a></li>\n            </ul>\n          </div>\n        </li>\n      </ul>\n\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n</header>\n<div class=\"con-section jumbotron\">\n    <h2 class=\"web-sec-heads\">TERMS AND CONDITIONS</h2>\n  <div class=\"container\">\n    <p>\n     Kindly go through these terms and conditions carefully before using the www.fysu.in website. These terms shall apply to your use of the website and all the associated services we may offer, whether directly through the website or otherwise.\n    </p>\n\n    <p>\n      The user must agree to the terms and conditions to avail the services offered at our website. These Terms shall apply to all visitors, users and others who access or use our service.\n    </p>\n    <p>\n     By accessing or using our website, you are abiding by these Terms &amp; Conditions. If you disagree with any part of the Terms &amp; Conditions then you may not access the website. Kindly check the Terms of Use for any amendments or updates to the terms and conditions regularly.\n    </p>\n    \n    <h3>General Conditions</h3>\n    <ul>\n\n      <li>\n          The purpose of the website is to provide a platform to deliver lunch, and to facilitate the ordering of lunch to be provided to you.\n      </li>\n      <li>\n         You can place your order by following the instructions provided on the website.\n      </li>\n      <li>\n          Once you place an order, you will receive a message confirming that your order has been placed. \n      </li>\n      <li>\n        You cannot cancel your order at fysu for same day delivery, no refund of the full purchase price. Cancellations and refunds are accepted for scheduled meals by calling our customer support team.\n      </li>\n      <li>\n         If you are dissatisfied for any reason, we're here to help. Just call us at +91 9948330399 or contact us via e-mail at info@fysu.in.\n      </li>\n      <li>\n        Cancellation of order for scheduled meals will be entertained till 12 hours before your delivery slot starts by email or by a call to customer service.\n      </li>\n      <li>\n         All meals are subject to availability. Your order is guaranteed once you receive a confirmation message from us.\n      </li>\n      <li>\n        You agree that delivery estimated time is just estimate and we are not liable for any variations (+/- 30 minutes) in the same.\n      </li>\n\n    </ul>\n\n    <h3>Returns and Refunds</h3>\n    <h4>Returns</h4>\n    <ul>\n      <li>\n         We will facilitate the return and replacement of items if you have received an incorrect order.\n      </li>\n      <li>\n        In case you wish to not have the items replaced, and you have already made the payment for such orders we will facilitate a full refund from Fysu.\n      </li>\n      <li>\n         As a general rule you shall not be entitled to cancel your order once you have received confirmation for the same day delivery.\n      </li>\n      <li>\n         We reserve the sole right to cancel your order in the following circumstance:\n          <ol>\n            <li>in the event of the designated address following outside the delivery zone offered by us.</li>\n            <li>failure to contact you by phone or email at the time of confirming the order booking.</li>\n            <li>failure to deliver your order due to lack of information, direction or authorization from you at the time of delivery; or\n            </li>\n            <li>\n              unavailability of all the items ordered by you at the time of booking the order; or failure due to reasons beyond our control or attributable to the Food service provider\n            </li>\n          </ol>\n      </li>\n\n    </ul>\n    <h4>Refunds</h4>\n    <ul>\n      <li>\n        You shall be entitled to a refund only if you pre-pay for your order at the time of placing your order on the Services and only in the event of any of the following circumstances:\n        <ul>\n          <li>\n             your order packaging has been tampered or damaged at the time of delivery;\n              <ol>\n                <li>Cancelling the order for scheduled meals by email or by calling to customer service before 12 hours when your delivery slot start\n                </li>\n                <li>\n                   you cancelling the order at the time of confirmation due to unavailability of the items you ordered for at the time of booking.\n                </li>\n              </ol>\n          </li>\n        </ul>\n      </li>\n      <li>\n         Our decision on refunds shall be at our sole discretion and shall be final and binding.\n      </li>\n      <li>\n        All refund amounts shall be credited to your account within 5 business days in accordance with the terms that may be stipulated by the bank which has issued the credit / debit card.\n      </li>\n      <li>\n         In case of payment at the time of delivery, you will not be required to pay for:\n         <ol>\n           <li>\n             orders where the packaging has been tampered or damaged by us;\n           </li>\n           <li>\n             wrong order being delivered; or\n           </li>\n           <li>\n             items missing from your order at the time of delivery.\n           </li>\n         </ol>\n      </li>\n    </ul>\n\n    <h3>Governing Law</h3>\n    <p>\n      These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India and jurisdiction of Hyderabad, Telangana.\n    </p>\n    <h3>Acceptable Use Policy</h3>\n    <ul>\n      <li>\n        You agree not to use the website that causes damage to Fysu, whether reputational, security, financial, or otherwise hacking or other cyber threats, violating any rights, sending unauthorized spam, junk mail, compiling information about our users, interfering with our network infrastructure, introducing scripts or other programs to produce multiple accounts, generate multiple queries, or otherwise use the website for purposes other than the intended purpose.\n      </li>\n      <li>\n        Unless authorized by us, you agree not to copy, reproduce, distribute, post, or transmit in any form or by any means any of the content provided by the service.\n      </li>\n    </ul>\n    <h3>Electronic Communication</h3>\n    <p>When you visit our website (www.fysu.in) or send us mails, you consent to receive our regular promotional and order related e-mail and SMS. Once you place the order, we shall confirm you with the primary medium we will be using to communicate with you (either e-mail or SMS). You can always unsubscribe the daily email and SMS.</p>\n\n    <h3>\n       Fysu Reward Points\n    </h3>\n    <ul>\n      <li>\n        To avail of reward points a user needs to be a registered customer who has created an account through the \"Sign In\" tab on the website – fysu.in\n      </li>\n      <li>\n         You can redeem them when you reach to 100 points.\n      </li>\n      <li>\n         Reward points are valid for 6 months from the day they are assigned to you.\n      </li>\n      <li>\n        Fysu Food Networks Pvt Ltd (\"Fysu\") Reserves the right to change the terms, conditions and the reward points to be awarded at their discretion.\n      </li>\n    </ul>\n\n    <h3>\n       Changes to Terms & Conditions\n    </h3>\n    <p>\n      We reserve the rights to modify or update these Terms & Conditions any time without notice. Changes shall be effective immediately upon posting on the website. So, you are advised to review these Terms & Conditions every time upon placement of order. By accessing or using our website, you abide by the terms. If you do not agree to the new terms, kindly stop using the website.\n    </p>\n\n    <h3>\n       Indemnification, Disclaimers and Limitation on Liability\n    </h3>\n    <ul>\n      <li>\n        You agree to indemnify and hold us harmless - us, our team, affiliates, clients and suppliers from any claim or demand made by any third party arising out of breach of these Terms including attorneys’ fees and costs, your interactions with any Partner, or your violation of these Terms or applicable laws.\n      </li>\n      <li>\n        The service is provided “as-in” and “as available.” We expressly disclaim any express or implied warranties and conditions of any kind.\n      </li>\n      <li>\n        In no event shall we be liable to you or any third party for any lost profits or any indirect, consequential, exemplary, incidental, special or punitive damages arising from or relating to this agreement or your use of, or inability to use, the service, even if we have been advised of the possibility of such damages. You hereby release and forever discharge us (and our officers, employees, agents, successors, and assigns) from, and hereby waive and relinquish, each and every past, present and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature (including personal injuries, death, and property damage), that has arisen or arises directly or indirectly out of, or relates directly or indirectly to, any interactions with, or act or omission of, other website users.\n      </li>\n\n    </ul>\n\n    <h3>\n       Agreement\n    </h3>\n    <ul>\n      <li>\n         These Terms &amp; Conditions consist the entire agreement between us. You shall abide by them.\n      </li>\n      <li>\n        All notices, requests, complaints and other communications here shall be made in writing (e.g., via email).\n      </li>\n    </ul>\n    <h3>\n       Contact Us\n    </h3>\n    <p>\n      We are sure you would love our food. In case you were not happy or if you have any questions about these Terms, please contact us at info@fysu.in \n    </p>\n\n  </div>\n</div>"

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
    function TermsComponent(router, title, appComponent, authService) {
        this.router = router;
        this.title = title;
        this.appComponent = appComponent;
        this.authService = authService;
    }
    TermsComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Terms - Fysu');
    };
    return TermsComponent;
}());
TermsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-terms',
        template: __webpack_require__("../../../../../src/app/terms/terms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/terms/terms.component.css"), __webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], TermsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=terms.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/contact-us.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "contact-us.ceda239e260001389203.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/fvp.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fvp.2f925cd45c7b7457a61f.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/gift.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gift.ebd33a806de42e229c8e.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/pen.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pen.4bbb8de3b2b29b0d2325.jpg";

/***/ }),

/***/ "../../../../../src/assets/menu-icons/roti_r.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAEexJREFUeNrsXWl4VdUVTQgJMsgQmYRSEWQQi1EBYWmroMyilUlABRUVLdJGpSoiZZAAKhWlVCqCSFCoIoOIoKDM8wyCAhswKpRBCKPMwdcfWffzeDz3vfum5OV5fuwfebnjOevsYe29z03w+XwJVn67YgfBAsAOggWAFQsAKxYAViwArFgAWLEAsGIBYMUCwIoFgBULACsWAFYsAKxYAFixALBiAWDFAsCKBYAVCwArFgBWLACsWABYsQCwYgFgxQLAigWAFQsAKxYAVgoSAASIVSkkwCUClBKgsgBpAjQR4B4BegrQX4DXBHhHgBkCzBdghQAbBdgmwG4B9gpwUIDsIOSwAAd4bpYAOwTYLMAaAZYIMFeAqQKMF2CEAAMESBfgfgFaCtBIgJoClBXgUgGKCJAYq+Oc3w9QRICqAjQWoIcAwwX4SIBlHPRdnIwTAlwUwFdA5KwARwiiHQJsEmCpANP5jo8L0FSAqwQo9lsAQBJXRScBhgkwgStphwCnwhzscwTIYQH2CCACbBFgnQDLBVgkwBcCfCrAJwLMNMhsylwBFnClrxBgrQBfCrCd2mC/AEcF+FGA8xEAyhled6EA/6VGeUyAegIUL8gAKCtACwF6CTCWg3jW46D8yEFZzgmbJMCbXDkDqP47CnCbAPUFqEUTkaqo3KQIm6IUrtRSApQT4AoBrub9mwjQVoBHBHhegKECjBTgbQGmCPCZAKsF+J7v5hUcWQJME+AZAdpTW8QsAJI4IF1pHw8EeLljVO9raL+H8tyGAlwWw35JOFKCwLmJ/sIgAT6gptkmwA8etMVSAZ4W4PpImY5wL/AHAXrT8XJTiT/QBs4Q4FkBbhXgcjp4pmvWE6CvAONoLprnlTrMR0mhBruBmmS8AKsE+FaAHJdx3UkQpVFL5RkAUqjylgtwwQWpWwV4lY5OWY8PWFmAeS4v+5UA1xSQybyWDu1zAtzN9w/1WsW5yJ6kH3PUMDYXCZa7QgFCsB57ugBfGx7iJNVZW9qq5CAfJJEOmHpNHfn7BKgYwxN/NVX0BcNzD47QPSpRg77uYmY30D+KOAAeoprXbzhLgO4CVA/zxRIF+JjXXE0g1aX6n8Lf99IBi8XJr+rB73ktwvcsL8C9yvioMpOADBsAvyfRol78lAAT6f1G8oUuF6AbPXkdHF3p7cey2nfGZ74AfxGgjQCvkA/wMbyM1v1vEeB9jSs57EUb+PtnU3rqzgXPc+LT4twhCzVU7MaQTTd/YPh6RR48RzOaIXXB/j0UANyhETRfR2DFF/fj+UdLUkkdv00iaAzfrVgcgzFZgJc0EDweDADqC3BaOXlGGGFYogCdSYZ8R5ZuEmPhaA9EPeYDTPZ4vQB18mmCigpQxmDqIi09NLOd5gUAqaRTnRPHCFA4DDZwkcsEXBBgVIQZO91ByjaQT+rfy/J44mszz7FbgEN0apcLcF8U7/mi8r6LvQAgQzlhGkO/UG/+Ly1WXUfGS52E1lF68ZLkDnz0W25iCNmE2sjxlPNq8v9Mp8wtQhgT5lj7Y2hXKD7ctf4AUE3hqo9EILS7j9dZytjVIZG6k+feHWU1XJFOkf57YYaXxRQ2szVTudFy1BYqk71GgEwmn1Su44Yo3fsR5R7D/AHgUeXAZyM4CSY1X5qJlfx0lm5isilHMxNvCnBlhO/VhSDor41HM4aNY5kriJY5dELRlXptgnrgSIWBqx3nYVu7AOnc75i+jpf3dUi83Xokph70uaL+y8U5AN7VnMHejNVV3qNbHL3vei8AWMmD/hdFdRRLvP07rFdI1EzTCCaySsfJu5ZiWZwxElD/cDJx2WFmsKzElrTQaGpXALyuxOg17cDFjYzW/JvBbgBQmaPOduDiQi6jQ6s7ud1MAEhTQqLlYTCAVmJHRimTvoIFtD4WltQxMYHTlBPaxMALVGGly73k9ovE8WQ1ogM6lxXC3cN0ROuyOsvHgtTijHRUpvdXAGigMVb5VYtXjby5zt+LAH+Ns4lP5WSY+h6+CZEhLM2Se+c6vRRqeItCDTcynTxeOXFkPgxIRRe75erIFHAbvdmQtMrxksr1kw6eqZw/WasVbK/8b4rpAtcrNfznqYqCqepJF+DfArxBgqVKCDG684BLeP97mON2VNrcOAHA3cq7bhLgTi6Aazl2z4dAmWcq19zOYls9F+JoAdFPrmCo/TslwO0ebtyKKU5TWXgwajtRgKe4yosbKl5eF6BGnACgDlX1eialwq2rfEvTJNe5HDuRxxzSK3a+cFG5p5WMnpss0vL9Z7Rr9I/lJsl87o8Mty6iqADvafPVzM/xTt4nW/1xsEvfnVrv76944U/spXuJyL6K17ygNEyWsxMecfkdKV515Qeqs3AAcMT5obEy2WdY5+9jHV1/bWUH64D1oBlZH+e1ePkhrVlb4czPHhahBjpvkm4CPuIPPwnQQVHnB5kYStc0w2f0F4Kpmy9jJyxikkjOQE1pr/RY0JLCcNonwPYEqmqnEmgjD1IJg0H8rStr2Zzfd7DdO14HuTid0alUsfNYutUkn5/rZk3ln6ZjXNLj+Q8r545PYA+b80O60qd3SNECTnawIfvQVG3wVrRal2OgzcvkEOcwPEvJB1s/2NBmL6ZaPz8O504FOGkJrE1zflBLoV7TaUNKMUO30CEBHowjG79Y63vcQlZOfef6efQsl9D53uuHGDvukTEcoZzznkMFO0zULo1rT1Uqa300C3rzyJfag2yhD1EiymFTMwH+Sc78Vea8i0bwHgPZ6zebnEMSr9+djtaOPOj0KUbWbpM2xt+z3PsFpYjHJ0C/IPoE9pJuT0hgK7ePJdvJBnujOhrDDfFnf/n1zhfbmcCJtJqsyVDTtAo2R9gUuTFwJSIMNhOV28mwuM6SYU3VnMHeJHb8bazxmHatO9V08EJFjVRwKaD0aaojyTAxbxsm5Wv2y0UiAkhh+7M+KD7NMb20gJqdMhwrU/v9BAl9f4QhWm6hh14QMsxDIUg3re99sQt12ZhozDFktd4IsyUsWbHNn7GOvyZr/D9S+uMLmh9yC6t2dB/jIsfy1hCvW1FrHb8owN9MJWENlMmd5+eCnWl/1Pbjni5qHkTtEQOaZ7MH4eoQPeFOhmKVJD5fpQIy6XWZ5Zsr5v2TMsmshnr9DlqFs8PxpLvVBC5VVGr9AP1tq7ULL2AxgxsBNNKlSfMM05YdFUcrnombGgTvJxrF7lNKtkeF2ZRyjQAf+okWLoq2z4LaxuXVjqawh/CkdvGp1CZupEp7ahhTj9xZklCDiPwqcTDplakJ/8G+yLMumdJPOTbhmK46NCNetuKbrtYHqBeZrBURJHq46ecGNTNHcvfwK+THNvVkCOP2wCfp7b9CG19egt93KC8liV54E4J4meRuXum2i+hSMnLhJsfS2OSia5RvtehtoJatbWICQGXNxr/p8cXvcAnNNjJEKRsgrOtC7ZHtB7VH6B0vojP5ILVNfmQXi9N/aUdNOIchm799/o5K7j4LnSNQy1CEGnuxYQGtkNztadYqJWYfGPoDRri1h9+oxfSTPZI6Dlu1xPDye+jUdAlgWiqzjboP1WK2B3V2mFnG2VwJoxj2PMXBbkqg1CZxU4GALMO6uVT+XYnd0HUZqbQh6dOX3Mc4sqFLDKvLJCdYW9GPQPl9mJNemAtttMLbqLKaZqQhtY+aIKqgtMzvV3ofS4jLDiEt5Jf70a0IsjCxo+RuWGRSgVlk8O7xwKRVIiCGEYgrA/TY+5PzBPYxapNDXLGH+fdxOqU5IVz7JEH4IU1WxwixhOVZET3IQAo5puRjLqwEmsp9yv/XGcrB1HrPxuJnj6A/alWlpyV3s8JgKN5qtD2L6RuYwp2ZXK13eAzhyvPZniCQJlIFb2DS6pxEZ/fv40y6LKRKHcUW+lYRWN1qJe9tfLdJ4r7t3BoBXpaf91ZIVQo8HPnYhcnspBzTWwLsElZFUyeOqrklhJdryEHb6kd9ZlP1P81Jrh5EWXoi1XpNRhHtWQo9kIMzgX7GbEYiCyjzGYvP4sSO4yp+ln5GK2q/yyPck1CUIXIjOsRT/CR7cuj/jDWkortq552nX+JvHpxjXwoEAGf3DNOEzQiRyClM5L5AFXVa/G+O/C0npz/t8lX0IwoKZ1CIWrMqTWsf+hK7xP82+afpRA9kqlePgJobkkRZHljDG4MFQIKhGkjd1n16GPRuIkmPppK7W/gaD3HsGSJ+C0OpyRyk+6mZalAT5FWuvjBVd3Umzrow7p9A07eZkdUpDz7KRiWzWd0QRifx+qsMdZtDxdsu6x2U857xCoBkhWt32/FrluTuRRNuGrgma+WfosPypaG6ONCXOn5gNnIZTco0RghjmU0bQRs6hA7WAHrrL1D68fcMrpJXab7G0uf4kKZkCU3awSCf8TTfawLfsy21qRtvUp2FIOsN18rkqg6lZ+A2rwBwYt9FBuTp5mEnK4TuihBxU4gD0IphWR9mHVfS4z0vsfnJmAsMuVaxeKaP5O633JLvE8iEVaQzOJ0OqH7tcdrEe2ERKyiRmTgp7WB72GZqSF5Ff+CgYRC2ciW1kehsOFGK/kRLOlIZXOETOXDzCJRtBMtRPnOwoV4OzzvGSd1BZ3ge75PJ+2aQhGnB5wq2o6cGTdkYl/HMIjnXUDk+g8+SRROaQS7DdP3hpuKRUGzeWC25MJVh3BAXksLZdiaT6q52lAsqTLmLkgwhq9GxrUee/laqwmZ0rJrTJ2lMm16fx1fnCioVwWigPJ+jJyORMy4+z2qG4Gqn8J1+qOaT8uv9jTpp0daVoQJA3XvulBbT9+MgNSBS3eLYc/SCM/mg+f7lrDzKBpai2n7GT1LMyacIy75quWjis1pCab1GRR9XxrStFm11lBC+F+AWIn5hKPzozVWXzBg6Q2lG9PflrJV0/HoQRKkFdLILs26hKSuup5Oo2hcgCljCiCstgIZMppn7kQ6sQ/WWY0R0gkRSAn0PVbO8LEF+L8BLYuJxrTvFAcIwDoS6CfWj1A7bXdhBVQ4QFFMF+A894UfZqFqLKjE/+IAiHOw0mr502td3GB1sNaTKTdHKSoZvXSS0HVOv8OOrXSe/3OzjFwmgSAJAtWfPGdT+CTJsXQwx7fX8vS8dySwPoFDNyAGGUwvonE6ifzKSSH+Rz9SLEcR9VH/tFOlA+9iNmiedpiyDVPNoaqUPOLlL6QQeEe8fsjzH6upMhn13R7G7OY0h61HNJ+ghIXwwItQiiKFaOblaKTyQDleKS6h5HcOlVxi7f87Q8pTE/tdCj5Kdm8VQNYMAqyXR3W8phWHyGwZmdT6d2YS8AoAalz5BujfHBQxD5OddvAOlmquS6XuAAzuZvMRa8uRZ1AjHxPsHKgPJTxzQbEYxO+nLrCIwx1F7daLPUl7C+HxbCLmEuowONhmefZep/i8vAaB6v/UZ2x7yU+wxh+FQbQn+qyLJ8vNXPSuSTaxHwLSm2ndU/BMcGEd68b4P00S0o4a6meq0GjmMknyu/MxBlGYyaATBaFpYO/menvd2yssXKM/BHe/HIz5P9C6g09eck1okzsNEXS6lY/gAzclapZjDlEWdRHAEvalXfu6M1ZBNlqvF/AFK1bbuoAM2llEHCIxCBXiSCyu8yb2MmmYzZNwTgObeR2C0DrcUPlYG4xqWcA1i0cVxj07XZpqPd+n9D6AT2ZwqvBJXU15sepnCe1WgGbqRNPVDTDINZ55kCn2Ir8T8JVC3D0m/S5vfMpIcSayujipksIayFW2pCz8eyIk7QQdui+TufjqHDaVv0ZYOUbKBfamRHOnL3/szehnKc5zQ8H3W+DvO6DbeKxxH9BR5hJn06p8kkKK2X2NB21CxAR22kaRTN9BnOBzDmUGdF9lHk7aO7zBacndRu53RTp5u0RsPDlNRgqMOncyHuWrHMCZfzEzZZoaf39DG7mdkku1BDpNr38+ClO/YybOdK3YDw8Ml1DLvSe7+Cs+ThGpJWrwyI4qYcWoTfD6fld+w2EGwALCDYAFgxQLAigWAFQsAKxYAViwArFgAWLEAsGIBYMUCwIoFgBULACsWAFYsAKxYAFixALBiAWDFAsCKBYAVCwArFgBWLACsWABYsQCwYgFgxQLAigWAlQIk/x8ALkEx/h2Scw0AAAAASUVORK5CYII="

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