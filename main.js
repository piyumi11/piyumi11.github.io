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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\r\n\tpadding-top: 50px;\r\n\tpadding-left: 100px;\r\n\theight: auto; \r\n}\r\n.card-profile-img {\r\n\tmax-width: 100px;\r\n    margin-top: -70px;\r\n    margin-bottom: 5px;\r\n    border: 3px solid #fff;\r\n    border-radius: 100%;\r\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n}\r\n.text-xs-center {\r\n\ttext-align:center;\r\n}\r\n.card-profile {\r\n\tbackground-color:#156584;\r\n\tcolor: white;\r\n}\r\n.card-header {\r\n\tbackground-color:#104e65;\r\n\theight: 100px;\r\n}\r\n.profile-info{\r\n\tpadding-top: 150px;\r\n    padding-bottom: 100px;\r\n}\r\n.list-group a{\r\n\tcolor: white;\r\n}\r\n.list-group a:hover {\r\n    text-decoration: none;\r\n    color: #104e65;\r\n}\r\n.list-group a:active {\r\n    text-decoration: none;\r\n    color: #104e65;\r\n}\r\n.icon-bar a{\r\n\tcolor: #5d5959;\r\n\tdisplay: block;\r\n  \ttext-align: center;\r\n  \tpadding-top:10px;\r\n}\r\n.icon-bar {\r\n\tpadding-top: 50px;\r\n}\r\n.social-buttons button, .github-button  {\r\n\tborder-color: black;\r\n\tbackground-color: #156584;\r\n\ttext-decoration: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-11 main-content\">\r\n\t\t\t<router-outlet></router-outlet>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-1 icon-bar\">\r\n\t\t  <a routerLink=\"home\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Home Page\"><i class=\"fas fa-home\"></i></a> \r\n\t\t   <a href=\"https://github.com/piyumi11\" target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"github\">\r\n\t\t  \t<i class=\"fab fa-github-alt\"></i>\r\n\t\t  </a>\r\n\t\t  <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"twitter\"><i class=\"fab fa-twitter\"></i></a> \r\n\t\t  <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"facebook\"><i class=\"fab fa-facebook-f\"></i></a> \r\n\t\t  <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"linkedin\"><i class=\"fab fa-linkedin-in\"></i></a>\r\n\t\t  <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"instagram\"><i class=\"fab fa-instagram\"></i></a>\t\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

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
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _send_email_send_email_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-email/send-email.component */ "./src/app/send-email/send-email.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _article_content1_article_content1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article-content1/article-content1.component */ "./src/app/article-content1/article-content1.component.ts");
/* harmony import */ var _article_content2_article_content2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./article-content2/article-content2.component */ "./src/app/article-content2/article-content2.component.ts");
/* harmony import */ var _article_content3_article_content3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./article-content3/article-content3.component */ "./src/app/article-content3/article-content3.component.ts");
/* harmony import */ var _article_content4_article_content4_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./article-content4/article-content4.component */ "./src/app/article-content4/article-content4.component.ts");
/* harmony import */ var _article_content5_article_content5_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article-content5/article-content5.component */ "./src/app/article-content5/article-content5.component.ts");
/* harmony import */ var _article_content6_article_content6_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./article-content6/article-content6.component */ "./src/app/article-content6/article-content6.component.ts");
/* harmony import */ var _article_content7_article_content7_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./article-content7/article-content7.component */ "./src/app/article-content7/article-content7.component.ts");
/* harmony import */ var _article_content8_article_content8_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./article-content8/article-content8.component */ "./src/app/article-content8/article-content8.component.ts");
/* harmony import */ var _article_content9_article_content9_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./article-content9/article-content9.component */ "./src/app/article-content9/article-content9.component.ts");
/* harmony import */ var _article_content10_article_content10_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./article-content10/article-content10.component */ "./src/app/article-content10/article-content10.component.ts");
/* harmony import */ var _article_content11_article_content11_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./article-content11/article-content11.component */ "./src/app/article-content11/article-content11.component.ts");
/* harmony import */ var _article_content12_article_content12_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./article-content12/article-content12.component */ "./src/app/article-content12/article-content12.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _article_article_component__WEBPACK_IMPORTED_MODULE_4__["ArticleComponent"],
                _send_email_send_email_component__WEBPACK_IMPORTED_MODULE_5__["SendEmailComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _article_content1_article_content1_component__WEBPACK_IMPORTED_MODULE_7__["ArticleContent1Component"],
                _article_content2_article_content2_component__WEBPACK_IMPORTED_MODULE_8__["ArticleContent2Component"],
                _article_content3_article_content3_component__WEBPACK_IMPORTED_MODULE_9__["ArticleContent3Component"],
                _article_content4_article_content4_component__WEBPACK_IMPORTED_MODULE_10__["ArticleContent4Component"],
                _article_content5_article_content5_component__WEBPACK_IMPORTED_MODULE_11__["ArticleContent5Component"],
                _article_content6_article_content6_component__WEBPACK_IMPORTED_MODULE_12__["ArticleContent6Component"],
                _article_content7_article_content7_component__WEBPACK_IMPORTED_MODULE_13__["ArticleContent7Component"],
                _article_content8_article_content8_component__WEBPACK_IMPORTED_MODULE_14__["ArticleContent8Component"],
                _article_content9_article_content9_component__WEBPACK_IMPORTED_MODULE_15__["ArticleContent9Component"],
                _article_content10_article_content10_component__WEBPACK_IMPORTED_MODULE_16__["ArticleContent10Component"],
                _article_content11_article_content11_component__WEBPACK_IMPORTED_MODULE_17__["ArticleContent11Component"],
                _article_content12_article_content12_component__WEBPACK_IMPORTED_MODULE_18__["ArticleContent12Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    {
                        path: 'introduction_to_docker',
                        component: _article_content3_article_content3_component__WEBPACK_IMPORTED_MODULE_9__["ArticleContent3Component"]
                    },
                    {
                        path: 'jersey_example',
                        component: _article_content1_article_content1_component__WEBPACK_IMPORTED_MODULE_7__["ArticleContent1Component"]
                    },
                    {
                        path: 'spring_mvc_boot',
                        component: _article_content2_article_content2_component__WEBPACK_IMPORTED_MODULE_8__["ArticleContent2Component"]
                    },
                    {
                        path: 'lamp_and_codeigniter',
                        component: _article_content4_article_content4_component__WEBPACK_IMPORTED_MODULE_10__["ArticleContent4Component"]
                    },
                    {
                        path: 'php_login_example',
                        component: _article_content5_article_content5_component__WEBPACK_IMPORTED_MODULE_11__["ArticleContent5Component"]
                    },
                    {
                        path: 'design_patterns_java',
                        component: _article_content6_article_content6_component__WEBPACK_IMPORTED_MODULE_12__["ArticleContent6Component"]
                    },
                    {
                        path: 'uml',
                        component: _article_content7_article_content7_component__WEBPACK_IMPORTED_MODULE_13__["ArticleContent7Component"]
                    },
                    {
                        path: 'codeigniter_and_php_session',
                        component: _article_content8_article_content8_component__WEBPACK_IMPORTED_MODULE_14__["ArticleContent8Component"]
                    },
                    {
                        path: 'pdf_library_for_codeigniter',
                        component: _article_content9_article_content9_component__WEBPACK_IMPORTED_MODULE_15__["ArticleContent9Component"]
                    },
                    {
                        path: 'color_conversion_in_python',
                        component: _article_content10_article_content10_component__WEBPACK_IMPORTED_MODULE_16__["ArticleContent10Component"]
                    },
                    {
                        path: 'opengl_clock',
                        component: _article_content11_article_content11_component__WEBPACK_IMPORTED_MODULE_17__["ArticleContent11Component"]
                    }, {
                        path: 'atmega328p_fast_pwm',
                        component: _article_content12_article_content12_component__WEBPACK_IMPORTED_MODULE_18__["ArticleContent12Component"]
                    },
                    {
                        path: '',
                        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
                    },
                    {
                        path: 'home',
                        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
                    }
                ])
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article-content1/article-content1.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/article-content1/article-content1.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article-content1/article-content1.component.html":
/*!******************************************************************!*\
  !*** ./src/app/article-content1/article-content1.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article [data]=\"articleOne\"></app-article>\r\n<div class=\"article-content\">\r\n  <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n          \tThis example used :\r\n          \t<ul>          \t\r\n          \t\t<li>JDK 1.8</li>\r\n          \t\t<li>Eclipse IDE</li>\r\n          \t\t<li>Apache tomcat server 7</li>\r\n          \t\t<li>Maven</li>\r\n          \t</ul>\r\n          \t<div>\r\n          \t\r\n          \t\t<h4>Step 01 : </h4>\r\n          \t\t<p>Create a dynamic web project using eclipse IDE.</p>\r\n          \t\t<h4>Step 02 : </h4>\r\n          \t\t<p>Then convert the created project into maven project. It will create the POM.xml \r\n          \t\t    inside the project root directory. \r\n\t\t\t\t\tFollowing maven dependencies should be added to POM.xml to use the jersey. \r\n          \t\t</p>\r\n          \t\t<pre class=\"article-code\"><code >\r\n     &lt;dependencies&gt;\r\n        &lt;dependency&gt;\r\n            &lt;groupId&gt;org.glassfish.jersey.core&lt;/groupId&gt;\r\n            &lt;artifactId&gt;jersey-server&lt;/artifactId&gt;\r\n            &lt;version&gt;2.20&lt;/version&gt;\r\n        &lt;/dependency&gt;\r\n\r\n        &lt;dependency&gt;\r\n            &lt;groupId&gt;org.glassfish.jersey.containers&lt;/groupId&gt;\r\n            &lt;artifactId&gt;jersey-container-servlet&lt;/artifactId&gt;\r\n            &lt;version&gt;2.20&lt;/version&gt;\r\n        &lt;/dependency&gt;\r\n    &lt;/dependencies&gt;</code></pre>\r\n    \r\n          \t\t<h4>Step 03 : </h4>\r\n          \t\t<p>Create the service class with REST service methods</p>\r\n          \t\t<pre class=\"article-code\"><code>\r\n       \t\timport javax.ws.rs.GET;\r\n\t\timport javax.ws.rs.Path;\r\n\t\timport javax.ws.rs.PathParam;\r\n\t\timport javax.ws.rs.core.Response;\r\n\t\t\r\n\t\t@Path(\"/sayhello\")\r\n\t\tpublic class HelloWorldService {{ '{' }}\r\n\t\t\r\n\t\t    @GET\r\n\t\t    @Path(\"/{{ '{' }}name{{ '}' }}\")\r\n\t\t    public Response sayHello(@PathParam(\"name\") String msg) {{ '{' }}\r\n\t\t        String output = \"Hello, \" + msg + \"!\";\r\n\t\t        return Response.status(200).entity(output).build();\r\n\t\t    {{ '}' }}\t\t\t\t\t\t    \r\n\t\t{{ '}' }}\t\t\t\t\t          \t\t\t\t\r\n          \t\t</code></pre>\r\n          \t\t<h4>Step 04 : </h4>\r\n          \t\t<p>Specify the package which reside the service classes implementing\r\n          \t\t jersey ResourceConfig class </p>\r\n          \t\t <pre class=\"article-code\">\r\n          \t\t \t<code>\r\n    import org.glassfish.jersey.server.ResourceConfig;\r\n\r\n\tpublic class HelloWorldApplication extends ResourceConfig {{ '{' }}\r\n\t    public HelloWorldApplication() {{ '{' }}\r\n\t        packages(\"com.example.services\");\r\n\t    {{ '}' }}\r\n\t{{ '}' }}\t    \r\n          \t\t \t</code>\r\n          \t\t </pre>\r\n          \t\t \r\n          \t\t <h4>Step 05 : </h4>\r\n          \t\t <p>If the project does not have a web.xml file create as below.</p>\r\n          \t\t <pre class=\"article-code\"><code>\r\n\t&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;\r\n\t&lt;web-app xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" \r\n\txmlns=\"http://java.sun.com/xml/ns/javaee\" \r\n\txsi:schemaLocation=\"http://java.sun.com/xml/ns/javaee \r\n\thttp://java.sun.com/xml/ns/javaee/web-app_3_0.xsd\" \r\n\tversion=\"3.0\"&gt;\r\n\t\t  &lt;display-name&gt;Web Service Demo&lt;/display-name&gt;\r\n\t\t    &lt;servlet&gt;\r\n\t\t        &lt;servlet-name&gt;WebServiceDemo&lt;/servlet-name&gt;\r\n\t\t        &lt;servlet-class&gt;org.glassfish.jersey.servlet.ServletContainer\r\n\t\t        &lt;/servlet-class&gt;\r\n\t\t        &lt;init-param&gt;\r\n\t\t            &lt;param-name&gt;javax.ws.rs.Application&lt;/param-name&gt;\r\n\t\t            &lt;param-value&gt;com.example.app.HelloWorldApplication&lt;/param-value&gt;\r\n\t\t\t     &lt;{{ '!' }} --ResourceConfig class implementation --&gt;\r\n\t\t        &lt;/init-param&gt;\r\n\t\t        &lt;load-on-startup&gt;1&lt;/load-on-startup&gt;\r\n\t\t    &lt;/servlet&gt;\r\n\t\t    &lt;servlet-mapping&gt;\r\n\t\t        &lt;servlet-name&gt; WebServiceDemo &lt;/servlet-name&gt;\r\n\t\t        &lt;url-pattern&gt;/*&lt;/url-pattern&gt;\r\n\t\t    &lt;/servlet-mapping&gt;\r\n\t&lt;/web-app&gt;          \t\t \r\n          \t\t </code></pre>\r\n          \t\t \r\n          \t\t <h4>Step 06 : </h4>\r\n          \t\t <p>Create the war file using maven and run on tomcat web container. Use a browser and enter the \r\n          \t\t URL as follows to see the response.</p>\r\n          \t\t <img src=\"/assets/img/articles/client-browser.png\" \r\n          \t\talt=\"jersy rest output in browser\" width=\"100%\" >\r\n          \t</div>       \t\r\n          </div>\r\n        </div>\r\n   </div>\r\n   <app-send-email [articleTitle]=\"articleOne.title\"></app-send-email>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/article-content1/article-content1.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/article-content1/article-content1.component.ts ***!
  \****************************************************************/
/*! exports provided: ArticleContent1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleContent1Component", function() { return ArticleContent1Component; });
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

var ArticleContent1Component = /** @class */ (function () {
    function ArticleContent1Component() {
    }
    ArticleContent1Component.prototype.ngOnInit = function () {
        this.articleOne = { 'title': 'Jersey 2 REST web service Hello World Application.',
            'lastUpdated': 'July 26 2018' };
    };
    ArticleContent1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-content1',
            template: __webpack_require__(/*! ./article-content1.component.html */ "./src/app/article-content1/article-content1.component.html"),
            styles: [__webpack_require__(/*! ./article-content1.component.css */ "./src/app/article-content1/article-content1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleContent1Component);
    return ArticleContent1Component;
}());



/***/ }),

/***/ "./src/app/article-content10/article-content10.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/article-content10/article-content10.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-btn-color {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n}\r\n.app-btn-color:hover {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/article-content10/article-content10.component.html":
/*!********************************************************************!*\
  !*** ./src/app/article-content10/article-content10.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article [data]=\"articleTen\"></app-article>\r\n<div class=\"article-content\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<p>Color images can represent in combination of Red, Green, Blue pixels. Other than RGB color model, Images can \r\n\t\t\t\trepresent in CMY (Cyan, Magenta, Yellow) model and HSI (Hue, Staturation, Intensity) model also.\r\n\t\t\t\tThis article explains how RGB image can convert to CMY and HSI models in python.</p>\r\n\t\t\t\t\r\n\t\t\t\t<p>Following examples implemented and interpreted using python 3.7.6, opencv 4.5.1, matplotlib 3.1.3\r\n\t\t\t\tnumpy 1.18.1 module versions.</p>\r\n\t\t\t\t<p><strong>\"Digital Image Processing\", Rafael C. Gonzalez &   Richard E. Woods,  Addison-Wesley</strong> book contains \r\n\t\t\t\tthe equation between RGB model and CMY and HSI model conversions. Read the chapter <strong>6.2 Color Models</strong>\r\n\t\t\t\t to find more information about color models.</p>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<h4>RGB to CMY</h4>\r\n\t\t\t\t\t<p>Following is the code used on RGB image for converting into CMY model</p>\r\n\t\t\t\t\t<pre class=\"article-code\"><code>\r\n\t\t\t\t\r\n\t\t\t## color model conversion with python\r\n\r\n\t\t\timport cv2 as cv\r\n\t\t\tfrom matplotlib import pyplot as plt\r\n\t\t\timport math\r\n\t\t\timport numpy as np\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t## RGB into CMY\r\n\t\t\tdef rgb_to_cmy(r, g, b):\r\n\t\t\t    if (r, g, b) == (0, 0, 0):\r\n\t\t\t        # black\r\n\t\t\t        return 0, 0, 0\r\n\t\t\t\r\n\t\t\t    # rgb [0,255] -> cmy [0,1]\r\n\t\t\t    c = 1 - r / 255\r\n\t\t\t    m = 1 - g / 255\r\n\t\t\t    y = 1 - b / 255\r\n\t\t\t\r\n\t\t\t    # rescale \r\n\t\t\t    return c * 100, m * 100, y * 100 \r\n\t\t\t    \r\n\t\t\tpath = 'path_to/rgb_image.jpg'\r\n\r\n\t\t\t## color image read\r\n\t\t\timg = cv.imread(path)\r\n\t\t\tplt.imshow(img), plt.title('rgb'), plt.show()\r\n\t\t\t\r\n\t\t\t## result image init\r\n\t\t\toutimg = np.zeros_like(img)\r\n\t\t\t\r\n\t\t\t## rgb[0,255] -> cmy[0,1]\r\n\t\t\tx = 0\r\n\t\t\tfor row in img:    \r\n\t\t\t    y = 0\r\n\t\t\t    for color in row:        \r\n\t\t\t        result = rgb_to_cmy(color[0], color[1], color[2])      \r\n\t\t\t        outimg[x,y] = result\r\n\t\t\t        y = y + 1        \r\n\t\t\t    x = x + 1\r\n\t\t\t\r\n\t\t\tplt.imshow(outimg), plt.title('cmy'), plt.show()   \r\n\t\t\t\t\r\n          \t\t </code></pre>\r\n          \t\t <p>Following is the image results got after executing the above code example. You can compare your results with this.</p>\r\n          \t\t <img src=\"/assets/img/articles/rgb_image.PNG\" \r\n          \t\talt=\"rgb image\" width=\"30%\" >\r\n          \t\t<img src=\"/assets/img/articles/cmy_image.PNG\" \r\n          \t\talt=\"cmy image\" width=\"30%\" >\r\n          \t\t\r\n          \t\t <h4>RGB to HSI</h4>\r\n\t\t\t\t\t<p>Following is the code used on RGB image for converting into HSI model </p>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<pre class=\"article-code\"><code>\r\n\t\t## convert RGB in 0,255 to hsi 0,1\r\n\t\tdef rgb_to_hsi(rr, gg, bb):\r\n\t\t    \r\n\t\t    if rr == gg == bb:\r\n\t\t        return 0,0,0\r\n\t\t    \r\n\t\t    r = rr / 255\r\n\t\t    g = gg / 255\r\n\t\t    b = bb / 255\r\n\t\t    \r\n\t\t    diff_rg = r-g\r\n\t\t    diff_rb = r-b\r\n\t\t    diff_gb = g-b\r\n\t\t    \r\n\t\t    h_radians = ((diff_rg+diff_rb)*0.5)/(math.sqrt(diff_rg*diff_rg+diff_rb*diff_gb))\r\n\t\t    h_degrees = math.degrees(math.acos(h_radians))    \r\n\t\t    \r\n\t\t    if b <= g :\r\n\t\t        h = h_degrees/360\r\n\t\t    else:\r\n\t\t        h = (360-h_degrees)/360\r\n\t\t        \r\n\t\t    s = 1 - (3*min(r,g,b)/(r+g+b))\r\n\t\t    \r\n\t\t    i = (r+g+b)/3\r\n\t\t    \r\n\t\t    return h*100, s*100, i*100\r\n\t\t    \r\n\t\tpath = 'path_to/rgb_image.jpg'\r\n\t\t\r\n\t\t## color image read\r\n\t    img = cv.imread(path)\r\n\t    plt.imshow(img), plt.title('rgb'), plt.show()\r\n\t\r\n\t    ## result image init\r\n\t    outimg = np.zeros_like(img)\r\n\t\r\n\t    ## rgb to cmy\r\n\t    x = 0\r\n\t    for row in img:    \r\n\t        y = 0\r\n\t        for color in row:        \r\n\t            result = rgb_to_hsi(color[0], color[1], color[2])\r\n\t            outimg[x,y] = result\r\n\t            y = y + 1        \r\n\t        x = x + 1\r\n\t\r\n\t    plt.imshow(outimg), plt.title('hsi'), plt.show()\r\n          \t\t </code></pre>\r\n\t\t\t\t\t<img src=\"/assets/img/articles/rgb_image.PNG\" \r\n          \t\talt=\"rgb image\" width=\"30%\" >\r\n          \t\t<img src=\"/assets/img/articles/hsi_image.PNG\" \r\n          \t\talt=\"hsi image\" width=\"30%\" >\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<app-send-email [articleTitle]=\"articleTen.title\"></app-send-email>"

/***/ }),

/***/ "./src/app/article-content10/article-content10.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/article-content10/article-content10.component.ts ***!
  \******************************************************************/
/*! exports provided: ArticleContent10Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleContent10Component", function() { return ArticleContent10Component; });
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

var ArticleContent10Component = /** @class */ (function () {
    function ArticleContent10Component() {
    }
    ArticleContent10Component.prototype.ngOnInit = function () {
        this.articleTen = { 'title': 'RGB, CMY, HSI Color conversion in python',
            'lastUpdated': 'June 13 2021' };
    };
    ArticleContent10Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-content10',
            template: __webpack_require__(/*! ./article-content10.component.html */ "./src/app/article-content10/article-content10.component.html"),
            styles: [__webpack_require__(/*! ./article-content10.component.css */ "./src/app/article-content10/article-content10.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleContent10Component);
    return ArticleContent10Component;
}());



/***/ }),

/***/ "./src/app/article-content11/article-content11.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/article-content11/article-content11.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-btn-color {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n}\r\n.app-btn-color:hover {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/article-content11/article-content11.component.html":
/*!********************************************************************!*\
  !*** ./src/app/article-content11/article-content11.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article [data]=\"articleEleven\"></app-article>\r\n<div class=\"article-content\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<p><a href=\"https://www.opengl.org\" target=\"_blank\">OpenGL</a> is  a cross-language, cross-platform application \r\n\t\t\t\tprogramming interface (API) for rendering 2D and 3D vector graphics.</p>\r\n\t\t\t\t\r\n\t\t\t\t<p>Following example implemented and executed with g++ 8.1.0, freeglut 3.2.1, glew 2.1.0 libraries. \r\n\t\t\t\tCode contains the OpenGL libraries imported to implement the clock display here. </p>\r\n\t\t\t\t\r\n\t\t\t\t<img src=\"/assets/img/articles/clock.gif\"  alt=\"OpenGL clock\" width=\"40%\" >\r\n\t\t\t\t<img src=\"/assets/img/articles/gl_coordinate_system\"  alt=\"coordinate system\" width=\"40%\" >\r\n\t\t\t\t\r\n\t\t\t\t<p>Follow the steps below to understand the code written in c++. In c++ we create .cpp file formats of code\r\n\t\t\t\tand compile and build to create the executable ( .exe) file. Then we can execute it simply double click on executable \r\n\t\t\t\tor typing its name on command prompt to see the result.</p>\r\n\t\t\t\t\r\n\t\t\t\t<div>\t\t\t\t\t\r\n\t\t\t\t<h4>Step 01 : </h4>\r\n\t\t\t\t<p>First import the <strong>glut</strong> and <strong>gl</strong> libraries to create a window with specific color, width, height.\r\n\t\t\t\tAnd <strong>glut</strong> library allows to add a title to that window.</p>\r\n\t\t\t\t<pre class=\"article-code\"><code>\r\n\r\n\t#include&lt;gl\\glut.h&gt;\r\n\t#include&lt;gl\\GL.h&gt;\t\r\n\r\n\r\n\t void display()\r\n\t{{ '{' }}\r\n\t    glClear(GL_COLOR_BUFFER_BIT);\r\n\t\r\n\t\t/* Clock implementation goes here */\r\n\t\r\n\t    glutSwapBuffers();\r\n\t{{ '}' }}\r\n\t\r\n\t\r\n\t int main(int agrs, char **args) {{ '{' }}\r\n\t\r\n\t\tglutInit(&agrs, args);\r\n\t\tglutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB);\r\n\t\tglutInitWindowSize(650, 650);\r\n\t    \tglutInitWindowPosition(0, 0);\r\n\t    \tglutCreateWindow(\"OpenGL Clock \");\r\n\t\tglClearColor(0, 0, 0, 0);\r\n\t\r\n\t\tglutDisplayFunc(display);\r\n\t\r\n\t\tglutMainLoop();\r\n\t\treturn 0;\r\n\t{{ '}' }}          \t\t \r\n\t</code></pre>\r\n\t\t\t\t\t\r\n\t\t\t\t<h4>Step 02 : </h4>\r\n\t\t\t\t<p>Following code has the method draw the circle with specific radius value which less than the 1\r\n\t\t\t\twith center at origin(0,0).\r\n\t\t\t\tCall this method inside <strong>display</strong> method before <strong>glutSwapBuffers</strong>. \r\n\t\t\t\t<strong>math</strong> library has implementations for cos and sin to find the points on circle using its radius.</p>\r\n\t\t\t\t<pre class=\"article-code\"><code>\r\n\r\n\t\t#include&lt;gl\\glut.h&gt;\r\n\t\t#include&lt;gl\\GL.h&gt;\r\n\t\t#include&lt;math.h&gt;\r\n\t\t\r\n\t\tfloat r = 0.9; //radius of the circle\r\n\t\t\r\n\t\tvoid DrawCircle(float cx, float cy, float r, int num_segments) {{ '{' }}\r\n\t\r\n\t\t    glBegin(GL_LINE_LOOP);\r\n\t\t    glColor3f(1.0,1.0,1.0);\r\n\t\t\r\n\t\t    for (int ii = 0; ii &lt; num_segments; ii++)   {{ '{' }}\r\n\t\t\r\n\t\t        float angle = 2.0f * 3.1415926f * float(ii) / float(num_segments);\r\n\t\t        float x = r * cosf(angle);\r\n\t\t        float y = r * sinf(angle);\r\n\t\t        glVertex2f(x + cx, y + cy);\r\n\t\t    {{ '}' }}\r\n\t\t    glEnd();\r\n\t\t{{ '}' }}\r\n\t\r\n\t\r\n\t\t void display()\r\n\t\t{{ '{' }}\r\n\t\t    glClear(GL_COLOR_BUFFER_BIT);\r\n\t\t\r\n\t\t\t// clock\r\n\t\t\tDrawCircle(0, 0, r, 200);\r\n\t\t\r\n\t\t    glutSwapBuffers();\r\n\t\t{{ '}' }}\r\n          \t\t </code></pre>\r\n\t\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t<h4>Step 03 : </h4>\r\n\t\t\t\t<p>Next has the minute and hour marks drawing methods on the circle with specific length and color. These 2 \r\n\t\t\t\tfunctions also need to call after circle drawing method inside <strong>display</strong> method.</p>\r\n\t\t\t\t<pre class=\"article-code\"><code>\r\n\r\n\t#include&lt;gl\\glut.h&gt;\r\n\t#include&lt;gl\\GL.h&gt;\r\n\t#include&lt;math.h&gt;\r\n\t\r\n\tfloat degree_6 = 2.0f * 3.1415926f / float(60); // value for degree 6 = 360/60\r\n\tfloat r = 0.9; //radius of the circle\t\r\n\t\r\n\tvoid drawHourMarks(float cx, float cy, float r) {{ '{' }}\r\n\t\r\n\t\tglBegin(GL_LINES);\r\n\t\tglColor3f(0.0,0.0,1.0);\r\n\t\tfor (int ii = 0; ii &lt; 12; ii++)   {{ '{' }}\r\n\t\r\n\t\t\tfloat angle = degree_6 * float(ii) * 5 ;\r\n\t\t\tfloat x = 0.8 * cosf(angle);\r\n\t\t\tfloat y = 0.8 * sinf(angle);\r\n\t\t\tglVertex2d(cx + x, cy + y);\r\n\t\t\tx = r * cosf(angle);\r\n\t\t\ty = r * sinf(angle);\r\n\t\t\tglVertex2d(cx + x, cy + y);\r\n\t\t{{ '}' }}\r\n\t\r\n\t\tglEnd();\r\n\t{{ '}' }}\r\n\t\r\n\tvoid drawMinuteMarks(float cx, float cy) {{ '{' }}\r\n\t\r\n\t\tglBegin(GL_LINES);\r\n\t\tglColor3f(1.0,1.0,1.0);\r\n\t\r\n\t\tfor (int ii = 0; ii &lt; 60; ii++)   {{ '{' }}\r\n\t\r\n\t\t\tfloat angle = degree_6 * float(ii);\r\n\t\t\tfloat x = 0.85 * cosf(angle);\r\n\t\t\tfloat y = 0.85 * sinf(angle);\r\n\t\t\tglVertex2d(cx + x, cy + y);\r\n\t\t\tx = 0.9 * cosf(angle);\r\n\t\t\ty = 0.9 * sinf(angle);\r\n\t\t\tglVertex2d(cx + x, cy + y);\r\n\t\t{{ '}' }}\r\n\t\r\n\t\tglEnd();\r\n\t{{ '}' }}\r\n\t\r\n\t void display()\r\n\t{{ '{' }}\r\n\t    glClear(GL_COLOR_BUFFER_BIT);\r\n\t\r\n\t\t// clock\r\n\t\tDrawCircle(0, 0, r, 200);\r\n\t\tdrawMinuteMarks(0, 0);\r\n\t\tdrawHourMarks(0, 0, r);\t\r\n\t\r\n\t    glutSwapBuffers();\r\n\t{{ '}' }}\r\n          \t\t </code></pre>\r\n\t\t\t\t<h4>Step 04 : </h4>\r\n\t\t\t\t<p>This step has functions to draw the triangle shape minute and hour hand with 0 angle to x axis.\r\n\t\t\t\tTwo hands can draw with 2 lengths and 2 colors to distinct each other. </p>\r\n\t\t\t\t<pre class=\"article-code\"><code>\r\n\r\n\t#include&lt;gl\\glut.h&gt;\r\n\t#include&lt;gl\\GL.h&gt;\r\n\t#include&lt;math.h&gt;\r\n\t\r\n\t// add these 2 variables on top to initialize the angle\r\n\tfloat mm = 0.0; // minutes angle\r\n\tfloat hh = 0.0; // hours angle\r\n\r\n\tvoid drawHourHand(int ii) {{ '{' }}\r\n\t\r\n\t\tglBegin(GL_TRIANGLES);\r\n\t\tglColor3f(0,0,1); // Blue\r\n\t\r\n\t\tfloat angle = degree_6 * float(ii) * 5;\r\n\t\tfloat angle1 = angle;\r\n\t\tfloat x1 = 0.7 * cosf(angle1);\r\n\t\tfloat y1 = 0.7 * sinf(angle1);\r\n\t\tglVertex2f( x1, -y1 );\r\n\t\r\n\t\tfloat angle2 = angle + 90;\r\n\t\tfloat x2 = 0.03 * cosf(angle2);\r\n\t\tfloat y2 = 0.03 * sinf(angle2);\r\n\t\tglVertex2f( x2, -y2 );\r\n\t\r\n\t\tfloat angle3 = angle - 90;\r\n\t\tfloat x3 = 0.03 * cosf(angle3);\r\n\t\tfloat y3 = 0.03 * sinf(angle3);\r\n\t\tglVertex2f( x3, -y3 );\r\n\t\r\n\t\tglEnd();\r\n\t\r\n\t{{ '}' }}\r\n\t\r\n\tvoid drawMinuteHand(int ii) {{ '{' }}\r\n\t\r\n\t\tglBegin(GL_TRIANGLES);\r\n\t\tglColor3f(0,1,1); //Green\r\n\t\r\n\t\tfloat angle = degree_6 * float(ii);\r\n\t\tfloat angle1 = angle;\r\n\t\tfloat x1 = 0.8 * cosf(angle1);\r\n\t\tfloat y1 = 0.8 * sinf(angle1);\r\n\t\tglVertex2f( x1, -y1 );\r\n\t\r\n\t\tfloat angle2 = angle + 90;\r\n\t\tfloat x2 = 0.03 * cosf(angle2);\r\n\t\tfloat y2 = 0.03 * sinf(angle2);\r\n\t\tglVertex2f( x2, -y2 );\r\n\t\r\n\t\tfloat angle3 = angle - 90;\r\n\t\tfloat x3 = 0.03 * cosf(angle3);\r\n\t\tfloat y3 = 0.03 * sinf(angle3);\r\n\t\tglVertex2f( x3, -y3 );\r\n\t\r\n\t\tglEnd();\r\n\t\r\n\t{{ '}' }}\r\n\t\r\n\t void display()\r\n\t{{ '{' }}\r\n\t    glClear(GL_COLOR_BUFFER_BIT);\r\n\t\r\n\t\t// clock\r\n\t\tDrawCircle(0, 0, r, 200);\r\n\t\tdrawMinuteMarks(0, 0);\r\n\t\tdrawHourMarks(0, 0, r);\r\n\t\r\n\t\t// hand moving\r\n\t\tdrawMinuteHand(mm); // Minutes hand\r\n\t\tdrawHourHand(hh); // Hours hand\r\n\t\r\n\t    glutSwapBuffers();\r\n\t{{ '}' }}\r\n\r\n          \t\t </code></pre>\r\n\t\t\t\t<h4>Step 06 : </h4>\r\n\t\t\t\t<p>Now we going to implement the moving of each hands based on time. <strong>glutTimerFunc</strong>\r\n\t\t\t\tuse to delay the time in milliseconds for each redrawing. In this example minute hand redraw after 300ms \r\n\t\t\t\tand hour hand redraw after 300*5 milliseconds.\r\n\t\t\t\t<strong>rotateLine</strong> method use to increase the angle  of minute and hour hand\r\n\t\t\t\tafter each time interval in clockwise.</p>\r\n\t\t\t\t<p>The gif file at the top of this article is the result I got after executing this code.\r\n\t\t\t\t Enjoy the OpenGL !!...</p>\r\n\t\t\t\t\t<pre class=\"article-code\"><code>\r\n\r\n\t#include&lt;gl\\glut.h&gt;\r\n\t#include&lt;gl\\GL.h&gt;\r\n\t#include&lt;math.h&gt;\r\n\t\r\n\tfloat mm = 0.0; // minutes angle\r\n\tfloat hh = 0.0; // hours angle\r\n\tfloat m5 = 0.0; // calculate 5mins\r\n\tfloat degree_6 = 2.0f * 3.1415926f / float(60); // value for degree 6 = 360/60\r\n\tfloat r = 0.9; //radius of the circle\t\r\n\r\n\tvoid rotateLine(int value) {{ '{' }}\r\n\t\r\n\t\t// Minutes\r\n\t\tmm += 1;\r\n\t\tif(mm &gt; 60) {{ '{' }} // circle divide into 60 parts\r\n\t\t\tmm = 0.0;\r\n\t\t{{ '}' }}\r\n\t\r\n\t\t//Hours\r\n\t\tm5 += 1;\r\n\t\tif(m5 &gt; 300) {{ '{' }} // hour hand moves for every 5mins = 60 moves * 5 rounds = 300\r\n\t\t\thh += 1;\r\n\t\t\tm5 = 0.0;\r\n\t\t{{ '}' }}\r\n\t\t\r\n\t\tif(hh &gt; 12) {{ '{' }} // circle divide into 60 parts\r\n\t\t\thh = 0.0;\r\n\t\t{{ '}' }}\r\n\t\t\r\n\t\tglutPostRedisplay();\r\n\t{{ '}' }}\r\n\r\n\r\n\t void display()\r\n\t{{ '{' }}\r\n\t    glClear(GL_COLOR_BUFFER_BIT);\r\n\t\r\n\t\t// clock\r\n\t\tDrawCircle(0, 0, r, 200);\r\n\t\tdrawMinuteMarks(0, 0);\r\n\t\tdrawHourMarks(0, 0, r);\r\n\t\r\n\t\t// hand moving\r\n\t\tdrawMinuteHand(mm); // Minutes hand\r\n\t\tdrawHourHand(hh); // Hours hand\r\n\t\r\n\t//\tglutTimerFunc(60000, rotateLine, 10); // calculate for every 1 minute \r\n\t\tglutTimerFunc(300, rotateLine, 10); // calculate for every 300 ms for testing\r\n\t\r\n\t    glutSwapBuffers();\r\n\t{{ '}' }}\r\n\r\n          \t\t </code></pre>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<app-send-email [articleTitle]=\"articleEleven.title\"></app-send-email>"

/***/ }),

/***/ "./src/app/article-content11/article-content11.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/article-content11/article-content11.component.ts ***!
  \******************************************************************/
/*! exports provided: ArticleContent11Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleContent11Component", function() { return ArticleContent11Component; });
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

var ArticleContent11Component = /** @class */ (function () {
    function ArticleContent11Component() {
    }
    ArticleContent11Component.prototype.ngOnInit = function () {
        this.articleEleven = { 'title': 'OpenGL clock',
            'lastUpdated': 'June 22 2021' };
    };
    ArticleContent11Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-content11',
            template: __webpack_require__(/*! ./article-content11.component.html */ "./src/app/article-content11/article-content11.component.html"),
            styles: [__webpack_require__(/*! ./article-content11.component.css */ "./src/app/article-content11/article-content11.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleContent11Component);
    return ArticleContent11Component;
}());



/***/ }),

/***/ "./src/app/article-content12/article-content12.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/article-content12/article-content12.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article-content12/article-content12.component.html":
/*!********************************************************************!*\
  !*** ./src/app/article-content12/article-content12.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article [data]=\"articleOne\"></app-article>\r\n<div class=\"article-content\">\r\n  <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            Pulse Width Modulation (PWM) method use to control the analog signal using the digital signals. \r\n            PWM stream has a <strong>duty cycle</strong> it defines as proportion on time/high voltage to pulse width as a percentage.\r\n            Below figures shows how duty cycle control the average output voltage of analog signal. \r\n            \r\n            <div id=\"duty_cycle_chart01\" style=\"width: 600px; height: 100px\"></div>\r\n            <div id=\"duty_cycle_chart02\" style=\"width: 600px; height: 100px\"></div>\r\n            <div id=\"duty_cycle_chart03\" style=\"width: 600px; height: 100px\"></div>\r\n            <div id=\"duty_cycle_chart04\" style=\"width: 600px; height: 100px\"></div>\r\n            \r\n            <p>In this article, we discuss a example of PWM usage with ATmega328P microcontroller. All 3 timers in  ATmega328P; \r\n            TIMER0, TIMER1, TIMER2 can be used for both <strong>Fast PWM</strong> and <strong>Phase Correct PWM</strong> modes.</p> \r\n             \r\n          \t<h4>Registers : </h4>\r\n          \t<ul>          \t\r\n          \t\t<li>TCNT0 - Timer/Counter Register</li>\r\n          \t\t<li>OCR0A - Output Compare Register A</li>\r\n          \t\t<li>TCCR0A - Timer/Counter Control Register A</li>\r\n          \t\t<li>TCCR0B - Timer/Counter Control Register B</li>          \t\t\r\n          \t</ul>\r\n          \t<p>Below figures illustrates the functionality of above register values. Initially OCo value (PWM output pin) set to 1.\r\n          \t TCNT0 starts from 0X00 and counts until 0XFF and repeat as normal mode. OCR0A has a value between 0 and 256 based on the \r\n          \t duty cycle requirement. That which compares to TCNTO value while running the timer. \r\n          \tWhen both values are same, run a interrupt and OC0 value set to 0. Then next counter cycle start, OC0 set to 1 and repeat.</p>\r\n          \t\r\n          \t<div id=\"chart05\" style=\"width: 600px; height: 100px\"></div>\r\n          \t<div id=\"chart06\" style=\"width: 600px; height: 100px\"></div>\r\n          \t\r\n          \t<div>          \t\r\n          \t\t<h4>Programming in C</h4>\r\n          \t\t<ul>   \r\n          \t\t<li>We use TINKERCAD online application to program and simulate ATmega328P functionality in C language.</li>\r\n          \t\t\r\n          \t\t<li>Import the libraries and add main function.</li>\r\n          \t\t<pre class=\"article-code\"><code >\r\n          \t\t#include <avr/io.h>\r\n          \t\t#include <util/delay.h>\r\n          \t\t\r\n          \t\tint main(void){{ '{' }}\r\n          \t\t\r\n          \t\t   // implement the avr register configuration here\r\n          \t\t   \r\n          \t\t{{ '}' }}\r\n                </code></pre>\r\n                \r\n                <li>Configure PWM output pin, ATmega328P consider PD6 as a PWM output pin.</li>\r\n                <pre class=\"article-code\"><code >\r\n          \t\tDDRD |= 1 &lt;&lt; PD6;\r\n                </code></pre>\r\n                \r\n                <li>Find the OCR0A value based on duty cycle required. Here we use 100% duty cycle.</li>\r\n                <pre class=\"article-code\"><code >\r\n          \t\tOCR0A = 255;\r\n                </code></pre>\r\n                \r\n                <li>Find the pre scaler value based on required frequency of output wave. Then write it to TCCR0B register pins; CS00:2.\r\n                Here we use 1:64 prescaler.</li>\r\n                <pre class=\"article-code\"><code >\r\n          \t\tTCCR0B |= (1 &lt;&lt; CS01) | (1 &lt;&lt; CS00);\r\n                </code></pre>\r\n                \r\n                <li>Configure the PWM mode settings in relevent registers. Write 1 on COM0A1 pin for non-inverting mode, WGM00:1 pins for\r\n                Fast PWM mode in the register TCCR0A. </li>\r\n                <pre class=\"article-code\"><code >\r\n          \t\tTCCR0A |= (1 &lt;&lt; COM0A1) | (1 &lt;&lt; WGM00) | (1 &lt;&lt; WGM01);\r\n                </code></pre>\r\n                \r\n                <li>Below is the complete C code of the example. write this inside TINKERCAD code section.</li>\r\n                <pre class=\"article-code\"><code >\r\n          \t\t#include <avr/io.h>\r\n          \t\t#include <util/delay.h>\r\n          \t\t\r\n          \t\tint main(void){{ '{' }}\r\n          \t\t\r\n          \t\t   DDRD |= 1 &lt;&lt; PD6;\r\n          \t\t   OCR0A = 255;\r\n          \t\t   TCCR0B |= (1 &lt;&lt; CS01) | (1 &lt;&lt; CS00);\r\n          \t\t   TCCR0A |= (1 &lt;&lt; COM0A1) | (1 &lt;&lt; WGM00) | (1 &lt;&lt; WGM01);          \t\t   \r\n          \t\t   \r\n          \t\t   while(1); // keep running the program\r\n          \t\t   return 0;\r\n          \t\t   \r\n          \t\t{{ '}' }}\r\n                </code></pre>\r\n                \r\n                <li>Using TINKERCAD add ATmega328P, piezo buzzer to abstract the circuit. Connect the piezo buzzer to 5V pin\r\n                and PD6 PWM output pin to simlulate the frequency changes. Modify the duty cycle and prescaler to test the\r\n                sound volume based on PWM output voltage. Check the following gif to see how to use TINKERCAD and simulate the circuit. </li>\r\n                \r\n          \t\t</ul>   \r\n          \t\t <img src=\"/assets/img/articles/tinkercad_pwm.gif\" alt=\"tinkercad_pwm\" width=\"100%\" >\r\n          \t</div>       \t\r\n          </div>\r\n        </div>\r\n   </div>\r\n   <app-send-email [articleTitle]=\"articleOne.title\"></app-send-email>\r\n</div>\r\n \r\n "

/***/ }),

/***/ "./src/app/article-content12/article-content12.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/article-content12/article-content12.component.ts ***!
  \******************************************************************/
/*! exports provided: ArticleContent12Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleContent12Component", function() { return ArticleContent12Component; });
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

var ArticleContent12Component = /** @class */ (function () {
    function ArticleContent12Component() {
    }
    ArticleContent12Component.prototype.ngOnInit = function () {
        this.articleOne = { 'title': 'ATmega328P Fast PWM Example',
            'lastUpdated': 'Febuary 17 2022' };
    };
    ArticleContent12Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-content12',
            template: __webpack_require__(/*! ./article-content12.component.html */ "./src/app/article-content12/article-content12.component.html"),
            styles: [__webpack_require__(/*! ./article-content12.component.css */ "./src/app/article-content12/article-content12.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleContent12Component);
    return ArticleContent12Component;
}());



/***/ }),

/***/ "./src/app/article-content2/article-content2.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/article-content2/article-content2.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article-content2/article-content2.component.html":
/*!******************************************************************!*\
  !*** ./src/app/article-content2/article-content2.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article [data]=\"articleTwo\"></app-article>\r\n<div class=\"article-content\">\r\n  <div class=\"container\">\r\n     <div class=\"row\">\r\n       <div class=\"col-lg-12\">\r\n       \t\t<h5>What is Spring and Why we use it?</h5>\r\n       \t\t<p>Spring is a java framework which use to implement loosely coupled and easily testable,\r\n       \t\t extendable applications using the feature Dependency Injection.</p>\r\n       \t\t \r\n       \t\t <pre class=\"article-code\"><code >\r\n        /**\r\n\t * Core Java Example\r\n\t * */\r\n\tpublic class HelloWorld {{ '{' }}\r\n\t\t\r\n\t\tprivate Person person = new Person();\r\n\t\t\r\n\t\tpublic String sayHello() {{ '{' }}\t\t\t\r\n\t\t\treturn \"Hello \" + person.getName();\r\n\t\t{{ '}' }}\t\r\n\t{{ '}' }}\r\n       \t\t </code>\r\n       \t\t </pre>\r\n       \t\t <pre class=\"article-code\"><code >\r\n        import org.springframework.beans.factory.annotation.Autowired;\r\n      \t /**\r\n\t * Spring Example using DI\r\n\t * */\r\n\tpublic class HelloSpring {{ '{' }}\r\n\t\r\n\t\t@Autowired\r\n\t\tprivate Person person;\r\n\t\t\r\n\t\tpublic String sayHello() {{ '{' }}\t\t\r\n\t\t\treturn \"Hello \" + person.getName();\r\n\t\t{{ '}' }}\r\n\t{{ '}' }}\r\n\t</code></pre>\r\n\t<pre class=\"article-code\"><code >\r\n\timport org.springframework.stereotype.Component;\r\n\t/**\r\n\t * Spring Example using DI - component class\r\n\t * */\r\n\t@Component\r\n\tpublic class Person {{ '{' }}\r\n\t\r\n\t\tprivate String name;\r\n\t\tprivate Integer age;\r\n\t\t\r\n\t\t//getters and setters\t\t\r\n\t{{ '}' }}\r\n       \t\t </code></pre>\r\n       \t\t <h5>What is Spring MVC?</h5>\r\n       \t\t <p>Spring MVC framework use to develop web application with decoupling model, view and controller.</p>\r\n       \t\t <h5>What is Spring Boot?</h5>\r\n       \t\t <p>Spring application needs list of configuration files. i.e. dispatcher servlet, component scan, \r\n       \t\t view resolver, resource mappings etc. If the spring application use hibernate, \r\n       \t\t it requires to configure entity manager, transaction manager, data source in separate configuration files. </p>\r\n       \t\t <p>Spring Boot auto configure the application by looking at available framework \r\n       \t\t on class path and existing configurations without above mentioned configuration files. </p>\r\n       \t\t \r\n       \t\t <p>Spring boot starters are convenient dependencies which built with basic spring application dependencies \r\n       \t\t like spring web, hibernate validator, jpa, Jackson databind, log4j, tomcat embedded servlet container. For instance, using spring boot starter \r\n       \t\t web dependency, we can develop production ready web application with restfull web services without specifying each \r\n       \t\t dependency above and compatible versions.</p>\r\n       \t\t <pre class=\"article-code\"><code >\r\n\t&lt;dependency&gt;\r\n\t\t&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\r\n\t\t&lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;\r\n\t&lt;/dependency&gt;\r\n       \t\t </code></pre>\r\n       </div>\r\n     </div>\r\n  </div>\r\n</div>\r\n<app-send-email [articleTitle]=\"articleTwo.title\"></app-send-email>\r\n"

/***/ }),

/***/ "./src/app/article-content2/article-content2.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/article-content2/article-content2.component.ts ***!
  \****************************************************************/
/*! exports provided: ArticleContent2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleContent2Component", function() { return ArticleContent2Component; });
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

var ArticleContent2Component = /** @class */ (function () {
    function ArticleContent2Component() {
    }
    ArticleContent2Component.prototype.ngOnInit = function () {
        this.articleTwo = { 'title': 'Spring Framework : Spring MVC and Spring Boot.',
            'lastUpdated': 'August 11 2018' };
    };
    ArticleContent2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-content2',
            template: __webpack_require__(/*! ./article-content2.component.html */ "./src/app/article-content2/article-content2.component.html"),
            styles: [__webpack_require__(/*! ./article-content2.component.css */ "./src/app/article-content2/article-content2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleContent2Component);
    return ArticleContent2Component;
}());



/***/ }),

/***/ "./src/app/article-content3/article-content3.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/article-content3/article-content3.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article-content3/article-content3.component.html":
/*!******************************************************************!*\
  !*** ./src/app/article-content3/article-content3.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article [data]=\"articleThree\"></app-article>\r\n<div class=\"article-content\">\r\n  <div class=\"container\">\r\n     <div class=\"row\">\r\n       <div class=\"col-lg-12\">\r\n       \t\t<h5>What are the containers?</h5>\r\n       \t\t<p>An isolated virtualized operating system which contains application and its dependencies. </p>\r\n       </div>\r\n    </div>\r\n    <div class=\"row\">\r\n       <div class=\"col-lg-12\">\r\n       \t\t<h5>Why we use containers?</h5>\r\n       \t\t<p>Containers are a portable unit, we can deploy, run and test in any platform without considering \r\n       \t\tthe host machine/ server software and hardware configurations. \r\n\t\t\tContainers allow to specify the memory, CPU, and disk space need to use from the host. Multiple \r\n\t\t\tapplications can deploy on one instance using containers. \r\n\t\t\tContainers are independent of other container services, so developers can independently update \r\n\t\t\tcontainers without conflicts.  Containers also allow to track versions of the application and has \r\n\t\t\tthe facility to roll back the deployments. \r\n\t\t\t</p>\r\n       </div>\r\n    </div>   \r\n    <div class=\"row\">\r\n       <div class=\"col-lg-12\">\r\n       \t\t<h5>What is Docker?</h5>\r\n       \t\t<p>A lightweight container technology which can use with Linux, Windows, Cloud, Serverless environment. \r\n       \t\tMore focus on developer and system operator requirements to separate the application dependencies from \r\n       \t\tthe infrastructure. \r\n\t\t\t</p>\r\n\t\t\t<p>References : <a href=\"https://www.docker.com\" target=\"_blank\"> https://www.docker.com </a> </p>\r\n       </div>\r\n    </div>    \r\n  </div>\r\n</div>\r\n<app-send-email [articleTitle]=\"articleThree.title\"></app-send-email>"

/***/ }),

/***/ "./src/app/article-content3/article-content3.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/article-content3/article-content3.component.ts ***!
  \****************************************************************/
/*! exports provided: ArticleContent3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleContent3Component", function() { return ArticleContent3Component; });
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

var ArticleContent3Component = /** @class */ (function () {
    function ArticleContent3Component() {
    }
    ArticleContent3Component.prototype.ngOnInit = function () {
        this.articleThree = { 'title': 'Containerization and Docker',
            'lastUpdated': 'October 02 2018' };
    };
    ArticleContent3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-content3',
            template: __webpack_require__(/*! ./article-content3.component.html */ "./src/app/article-content3/article-content3.component.html"),
            styles: [__webpack_require__(/*! ./article-content3.component.css */ "./src/app/article-content3/article-content3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleContent3Component);
    return ArticleContent3Component;
}());



/***/ }),

/***/ "./src/app/article-content4/article-content4.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/article-content4/article-content4.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article-content4/article-content4.component.html":
/*!******************************************************************!*\
  !*** ./src/app/article-content4/article-content4.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article [data]=\"articleFour\"></app-article>\r\n<div class=\"article-content\">\r\n  <div class=\"container\">\r\n     <div class=\"row\">\r\n       <div class=\"col-lg-12\">\r\n       \t\t<p>This example use LAMP stack and CodeIngiter php framework to develop a small web-site. LAMP : Linux, Apache, MySQL, PHP\r\n       \t\tis a free open source web stack use to host web applications. CodeIgniter is a free php framework with lot of developer \r\n       \t\tconvenient features to develop web sites with high performance. Follow the steps provided below to build this website. \r\n       \t\t </p>\t\r\n       </div>\r\n       <div class=\"col-lg-12\">          \t\r\n      \t\t<h4>Step 01 : </h4>\r\n      \t\t<p>First have a Linux environment. Following commands tried on Ubuntu 18.04(LTS).</p>\r\n      \t\t\r\n      \t\t<h4>Step 02 : </h4>\r\n      \t\t<p>Install apache http server.</p>\r\n      \t\t<pre class=\"article-code\"><code >\r\n      \t\tsudo apt install apache2 \r\n      \t\t</code></pre>\r\n      \t\t\r\n      \t\t<h4>Step 03 : </h4>\r\n      \t\t<p>Install mysql server</p>\r\n      \t\t<pre class=\"article-code\"><code >\r\n      \t\tsudo apt install mysql-server\r\n      \t\t</code></pre>\r\n      \t\t\r\n      \t\t<h4>Step 04 : </h4>\r\n      \t\t<p>Install PHP 7.2, apache support and mySql support.</p>\r\n      \t\t<pre class=\"article-code\"><code >\r\n      \t\tsudo apt install php7.2 libapache2-mod-php7.2 php-mysql\r\n      \t\t</code></pre>\r\n      \t\t\r\n\t\t\t<h4>Step 05 : </h4>\r\n\t\t\t<p>Login to mysql shell and create a user, database for the application.this password should be different to root user password. </p>\r\n\t\t\t<pre class=\"article-code\"><code >\r\n\t\tsudo mysql -u root\r\n\t\t\r\n\t\tCREATE DATABASE webdata;\r\n\t\tGRANT ALL ON webdata.* TO 'webuser' IDENTIFIED BY 'password';\t\t\t\r\n\t\t\r\n\t\tCREATE TABLE stud (\r\n\t\troll_no INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,\r\n\t\tname VARCHAR(30),\r\n\t\tcreated DATETIME DEFAULT NULL,\r\n\t\tmodified DATETIME DEFAULT NULL\r\n\t\t);\r\n\t\t\t</code></pre>\r\n\t\t\t\r\n\t\t\t<h4>Step 06 : </h4>\r\n\t\t\t<p>Download the <a href=\"https://www.codeigniter.com/\" target=\"_blank\">CodeIgniter</a> framework zip, extract it and copy all the files\r\n\t\t\t into var/www/html directory.</p>\r\n\t\t\t\r\n\t\t\t<h4>Step 07 : </h4>\r\n\t\t\t<p>download the <a href=\"https://github.com/piyumi11/StudentApplication\" target=\"_blank\">phpExmple</a> and copy into\r\n\t\t\t var/www/html/codeigniter/ directory.</p>\r\n\t\t\t\r\n\t\t\t<h4>Step 08 : </h4>\r\n\t\t\t<p>See the output and check how php routes works in this application.</p>\r\n\t\t\t<img src=\"/assets/img/articles/php-example.png\" \r\n          \t\talt=\"Php example output in browser\"  >\r\n\t\t\t      \t\t\t\t\r\n    \t</div>\r\n    </div>   \r\n  </div>\r\n</div>\r\n<app-send-email [articleTitle]=\"articleFour.title\"></app-send-email>"

/***/ }),

/***/ "./src/app/article-content4/article-content4.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/article-content4/article-content4.component.ts ***!
  \****************************************************************/
/*! exports provided: ArticleContent4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleContent4Component", function() { return ArticleContent4Component; });
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

var ArticleContent4Component = /** @class */ (function () {
    function ArticleContent4Component() {
    }
    ArticleContent4Component.prototype.ngOnInit = function () {
        this.articleFour = { 'title': 'LAMP with CodeIgniter',
            'lastUpdated': 'April 19 2019' };
    };
    ArticleContent4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-content4',
            template: __webpack_require__(/*! ./article-content4.component.html */ "./src/app/article-content4/article-content4.component.html"),
            styles: [__webpack_require__(/*! ./article-content4.component.css */ "./src/app/article-content4/article-content4.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleContent4Component);
    return ArticleContent4Component;
}());



/***/ }),

/***/ "./src/app/article-content5/article-content5.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/article-content5/article-content5.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article-content5/article-content5.component.html":
/*!******************************************************************!*\
  !*** ./src/app/article-content5/article-content5.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article [data]=\"articleThree\"></app-article>\r\n<div class=\"article-content\">\r\n  <div class=\"container\">\r\n     <div class=\"row\">\r\n       <div class=\"col-lg-12\">\r\n       \t\tThis example used :\r\n          \t<ul>         \r\n          \t\t<li>PHP 7.2.15-0</li>\r\n\t\t\t\t<li>ubuntu 0.18.04.2</li>\r\n\t\t\t\t<li>MySQL server 5.7.25-0</li>\r\n\t\t\t\t<li>Apache 2.4.29</li>\r\n\t\t\t\t<li>CodeIgniter</li>\r\n          \t</ul>\r\n       \t\t<p>\r\n       \t\tFind the github code exmple in <a href=\"https://github.com/piyumi11/StudentApplication\" target=\"_blank\">here</a>.\r\n       \t\tGit commit <a href=\"https://github.com/piyumi11/StudentApplication/commit/48710fc49e800b587b2f713f545fcca763ea2939\" target=\"_blank\">\r\n       \t\tadd login implmentation</a> contains the complete code.</p>\r\n       </div>\r\n    </div>\r\n    <div class=\"row\">\r\n       <div class=\"col-lg-12\">\r\n       \t\t<h4>Step 01 : </h4>\r\n          \t<p>Create the database table to insert users. </p>\r\n          \t<pre class=\"article-code\">\r\n          \t<code>\r\n\t\t\tCREATE TABLE users (\r\n\t\t\t    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,\r\n\t\t\t    username VARCHAR(50) NOT NULL UNIQUE,\r\n\t\t\t    password VARCHAR(255) NOT NULL,\r\n\t\t\t    created_at DATETIME DEFAULT CURRENT_TIMESTAMP\r\n\t\t\t);\r\n     \t\t</code></pre>\r\n       </div>\r\n    </div>   \r\n    <div class=\"row\">\r\n       <div class=\"col-lg-12\">\r\n       \t\t<h4>Step 02 : </h4>\r\n          \t<p>Create the controller class : Account_controller.php to process the login, signin and logout functions.\r\n          \tThis example use <strong>password_hash()</strong> one way PHP hashing function to create strong password hash within\r\n          \tsignin route. This applies a salt to password, hence two users have same password this function create different password hashes.</p>\r\n          \t<p>When login, use <strong>password_verify()</strong> PHP method to compare user given password and the password in database table.</p>\r\n          \t<p>Logout method unset the all session variables and destroy the session.</p>\r\n       </div>\r\n   \t</div>\r\n   \t<div class=\"row\">\r\n       <div class=\"col-lg-12\">\r\n       \t\t<h4>Step 03 : </h4>\r\n          \t<p><strong>Login_form.php</strong> and <strong>Signin_form.php</strong> contains the HTML forms.</p>\r\n       </div>\r\n   \t</div>\r\n   \t<div class=\"row\">\r\n       <div class=\"col-lg-12\">\r\n       \t\t<h4>Step 04 : </h4>\r\n          \t<p><strong>header.php</strong> file is common for all HTML pages. This contains the links to sigin, login and logout.\r\n          \tLogout link and logged user name display only user has already logged in to the session else display the login link.</p>\r\n          \t<img src=\"/assets/img/articles/header.png\" alt=\"Header Page after loggedin\" width=\"100%\" >\r\n       </div>\r\n   \t</div>\r\n  </div>\r\n</div>\r\n<app-send-email [articleTitle]=\"articleThree.title\"></app-send-email>"

/***/ }),

/***/ "./src/app/article-content5/article-content5.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/article-content5/article-content5.component.ts ***!
  \****************************************************************/
/*! exports provided: ArticleContent5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleContent5Component", function() { return ArticleContent5Component; });
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

var ArticleContent5Component = /** @class */ (function () {
    function ArticleContent5Component() {
    }
    ArticleContent5Component.prototype.ngOnInit = function () {
        this.articleThree = { 'title': 'PHP login example',
            'lastUpdated': 'June 09 2019' };
    };
    ArticleContent5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-content5',
            template: __webpack_require__(/*! ./article-content5.component.html */ "./src/app/article-content5/article-content5.component.html"),
            styles: [__webpack_require__(/*! ./article-content5.component.css */ "./src/app/article-content5/article-content5.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleContent5Component);
    return ArticleContent5Component;
}());



/***/ }),

/***/ "./src/app/article-content6/article-content6.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/article-content6/article-content6.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article-content6/article-content6.component.html":
/*!******************************************************************!*\
  !*** ./src/app/article-content6/article-content6.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article [data]=\"articleThree\"></app-article>\r\n<div class=\"article-content\">\r\n  <div class=\"container\">\r\n  \t<div class=\"row\">\r\n       <div class=\"col-lg-12\">\r\n        <p>\"Design patterns are descriptions of communicating objects and classes that are customized to solve a\r\n\t\tgeneral design problem in a particular context.\"\r\n\t\tReference - Design Patterns: Elements of Reusable Object-Oriented\r\n\t\tSoftware [Aside: This classic 1994 book popularized design patterns. Four authors (Erich Gamma, Richard\r\n\t\tHelm, Ralph Johnson, and John Vlissides) wrote this book and for this reason it became known as the\r\n\t\t\"Gang of Four\" (GoF) book.]</p>\r\n       </div>\r\n    </div>\r\n    <div class=\"row\">\r\n    \t<div class=\"col-lg-12\">\r\n\t    \t<p>Mainly all design patterns can divide into 3 types:</p>\r\n\t    \t<ol>\r\n\t    \t\t<li><h4>Creational patterns</h4></li>\r\n\t    \t\t\t<ul>\r\n\t    \t\t\t\t<li>Singleton pattern</li>\r\n\t    \t\t\t\t<li>Factory pattern</li>\r\n\t    \t\t\t\t<li>Abstract Factory pattern</li>\r\n\t    \t\t\t\t<li>Prototype pattern</li>\r\n\t    \t\t\t</ul>\r\n\t    \t\t<li><h4>Structural patterns</h4></li>\r\n\t    \t\t\t<ul>\r\n\t    \t\t\t\t<li>Composite pattern</li>\r\n\t    \t\t\t\t<li>Decorator pattern</li>\r\n\t    \t\t\t\t<li>Proxy pattern</li>\r\n\t    \t\t\t\t<li>Facade pattern</li>\r\n\t    \t\t\t</ul>\r\n\t    \t\t<li><h4>Behavioral patterns</h4></li>\r\n\t    \t\t\t<ul>\r\n\t    \t\t\t\t<li>Observer pattern <a href=\"https://github.com/piyumi11/JavaBasics/tree/master/src/designpattern/behavioural/observer\" target=\"_blank\">example</a></li>\r\n\t    \t\t\t\t<li>State pattern <a href=\"https://github.com/piyumi11/JavaBasics/tree/master/src/designpattern/behavioural/state\" target=\"_blank\">example</a></li>\t    \t\t\t\t\r\n\t    \t\t\t\t<li>Strategy pattern <a href=\"https://github.com/piyumi11/JavaBasics/tree/master/src/designpattern/behavioural/strategy\" target=\"_blank\">example</a></li>\t    \t\t\t\t\r\n\t    \t\t\t</ul>\r\n\t    \t</ol>\r\n    \t</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-send-email [articleTitle]=\"articleThree.title\"></app-send-email>"

/***/ }),

/***/ "./src/app/article-content6/article-content6.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/article-content6/article-content6.component.ts ***!
  \****************************************************************/
/*! exports provided: ArticleContent6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleContent6Component", function() { return ArticleContent6Component; });
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

var ArticleContent6Component = /** @class */ (function () {
    function ArticleContent6Component() {
    }
    ArticleContent6Component.prototype.ngOnInit = function () {
        this.articleThree = { 'title': 'Java Design Pattern examples',
            'lastUpdated': 'June 28 2019' };
    };
    ArticleContent6Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-content6',
            template: __webpack_require__(/*! ./article-content6.component.html */ "./src/app/article-content6/article-content6.component.html"),
            styles: [__webpack_require__(/*! ./article-content6.component.css */ "./src/app/article-content6/article-content6.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleContent6Component);
    return ArticleContent6Component;
}());



/***/ }),

/***/ "./src/app/article-content7/article-content7.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/article-content7/article-content7.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-btn-color {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n}\r\n.app-btn-color:hover {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/article-content7/article-content7.component.html":
/*!******************************************************************!*\
  !*** ./src/app/article-content7/article-content7.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article [data]=\"articleSeven\"></app-article>\r\n<div class=\"article-content\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<p>UML was developed by Grady Booch, Ivar Jacobson and James\r\n\t\t\t\t\tRumbaugh (The Three Amigos) during 1994-1995. Latest version 2.5.1\r\n\t\t\t\t\treleased in December 2017 by Object Management Group (OMG). UML is\r\n\t\t\t\t\ta standard object oriented documentation models for any software\r\n\t\t\t\t\tsystem. 2.5 version written to increase the clarity and to remove\r\n\t\t\t\t\tthe redundancy.</p>\r\n\t\t\t\t\t<p>Click on each topics to expand the details of each section.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"accordion\" id=\"accordionExample\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\" id=\"headingTwo\">\r\n\t\t\t\t\t<h2 class=\"mb-0\">\r\n\t\t\t\t\t\t<button class=\"btn btn-link app-btn-color collapsed\" type=\"button\"\r\n\t\t\t\t\t\t\tdata-toggle=\"collapse\" data-target=\"#collapseTwo\"\r\n\t\t\t\t\t\t\taria-expanded=\"false\" aria-controls=\"collapseTwo\">Three\r\n\t\t\t\t\t\t\ttypes of UML building blocks</button>\r\n\t\t\t\t\t</h2>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\"\r\n\t\t\t\t\tdata-parent=\"#accordionExample\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<ol>\r\n\t\t\t\t\t\t\t<li><h4>Things</h4></li>\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<li>Structural : Class, Object, Interface, Collaboration,\r\n\t\t\t\t\t\t\t\t\tUse case, Actor, Component, Node, Deployment</li>\r\n\t\t\t\t\t\t\t\t<li>Behavioral : State machine, Activity diagram,\r\n\t\t\t\t\t\t\t\t\tInteraction diagrams</li>\r\n\t\t\t\t\t\t\t\t<li>Grouping : Package</li>\r\n\t\t\t\t\t\t\t\t<li>Annotations : Annotation</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t<li><h4>Relationships</h4></li>\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<li>Association : Connects 2 object and defines how many objects are associated with.</li>\r\n\t\t\t\t\t\t\t\t<li>Dependency : Relation depends on each objects.</li>\r\n\t\t\t\t\t\t\t\t<li>Generalization : Inheritance between objects. sub class and parent class relation.</li>\r\n\t\t\t\t\t\t\t\t<li>Realization : Relation with interface to implement it's function.</li>\r\n\t\t\t\t\t\t\t\t<li>Reflection : Subtype of association. represents the relation of instances of same class.</li>\r\n\t\t\t\t\t\t\t\t<li>Direction : Association from one to another flows for one direction only.</li>\r\n\t\t\t\t\t\t\t\t<li>Composition : Not a UML association.Binary whole part association.Sub type of aggregation.</li>\r\n\t\t\t\t\t\t\t\t<li>Aggregation : Sub type of association.Whole part, even part remain after whole deleted.</li>\r\n\t\t\t\t\t\t\t\t<img src=\"/assets/img/articles/article7/relationships.png\" alt=\"object\" width=\"50%\" >\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t<li><h4>Diagrams</h4></li>\r\n\t\t\t\t\t\t\t<p>Three types of diagrams will explain in next section.</p>\r\n\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\" id=\"headingOne\">\r\n\t\t\t\t\t<h2 class=\"mb-0\">\r\n\t\t\t\t\t\t<button class=\"btn btn-link app-btn-color collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n\t\t\t\t\t\t\tdata-target=\"#collapseOne\" aria-expanded=\"true\"\r\n\t\t\t\t\t\t\taria-controls=\"collapseOne\">Three types of diagrams</button>\r\n\t\t\t\t\t</h2>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapseOne\" class=\"collapse\"\r\n\t\t\t\t\taria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<ol>\r\n\t\t\t\t\t\t\t<li><h4>Structure Diagrams</h4>\r\n\t\t\t\t\t\t\t\t<p>Represent the static view of the system.Describes the\r\n\t\t\t\t\t\t\t\t\tobjects in the system.</p></li>\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<li>Class</li>\r\n\t\t\t\t\t\t\t\t<li>Component</li>\r\n\t\t\t\t\t\t\t\t<li>Object</li>\r\n\t\t\t\t\t\t\t\t<li>Composite</li>\r\n\t\t\t\t\t\t\t\t<li>Deployment</li>\r\n\t\t\t\t\t\t\t\t<li>Package</li>\r\n\t\t\t\t\t\t\t\t<li>Profile</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t<li><h4>Behavior Diagrams</h4></li>\r\n\t\t\t\t\t\t\t<p>Represent the dynamic functioning of the system.</p>\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<li>Activity</li>\r\n\t\t\t\t\t\t\t\t<li>Use case</li>\r\n\t\t\t\t\t\t\t\t<li>State Machine</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t<li><h4>Interaction Diagrams</h4></li>\r\n\t\t\t\t\t\t\t<p>Subset of behavioral diagrams. Represents the data\r\n\t\t\t\t\t\t\t\tflow/interaction between use cases/entities.</p>\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<li>Sequence</li>\r\n\t\t\t\t\t\t\t\t<li>Communication</li>\r\n\t\t\t\t\t\t\t\t<li>Interaction</li>\r\n\t\t\t\t\t\t\t\t<li>Timing</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\" id=\"headingThree\">\r\n\t\t\t\t\t<h2 class=\"mb-0\">\r\n\t\t\t\t\t\t<button class=\"btn btn-link app-btn-color collapsed\" type=\"button\"\r\n\t\t\t\t\t\t\tdata-toggle=\"collapse\" data-target=\"#collapseThree\"\r\n\t\t\t\t\t\t\taria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n\t\t\t\t\t\t\tStructural Diagrams</button>\r\n\t\t\t\t\t</h2>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapseThree\" class=\"collapse\"\r\n\t\t\t\t\taria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<ol>\r\n\t\t\t\t\t\t<li><h4>Class diagram</h4></li>\t\t\t\t\t\t\r\n\t\t\t\t\t\t<p>Class must have class name, attributes, and operations. Class name should be start with capital letter, bold( italic for abstract )\r\n\t\t\t\t\t\t, and centered text in first rectangle. Attributes adding after class name. Public, private, protected and package visibility\r\n\t\t\t\t\t\t has +, -, #, ~ sings. Derived attributes are which can computed from another. ex. age from date of birth.</p>\r\n\t\t\t\t\t\t <p>Class diagram use in different stages of software development life cycle for conceptual, specification and development perspectives.</p>\r\n\t\t\t\t\t\t <img src=\"/assets/img/articles/article7/class.png\" alt=\"class\" width=\"15%\" >\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t <li><h4>Object diagram</h4></li>\r\n\t\t\t\t\t\t <p>Class diagram represents abstract view, but object diagram describes the instance of a class and use to analyse the behaviour of a class.</p>\r\n\t\t\t\t\t\t <p>Use for forward/reverse engineering of systems, analyse the offline/online systems.</p>\r\n\t\t\t\t\t\t <img src=\"/assets/img/articles/article7/object.png\" alt=\"object\" width=\"50%\" >\t\t\t\t\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t <li><h4>Component diagram</h4></li>\r\n\t\t\t\t\t\t <p>Model the subsystems of a system.</p>\r\n\t\t\t\t\t\t <img src=\"/assets/img/articles/article7/component.png\" alt=\"object\" width=\"50%\" >\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t <li><h4>Deployment diagram</h4></li>\r\n\t\t\t\t\t\t <p>Model the software deployment design on hardware system.</p>\r\n\t\t\t\t\t\t <img src=\"/assets/img/articles/article7/deployment.png\" alt=\"object\" width=\"50%\" >\t\t\t \r\n\t\t\t\t\t\t \r\n\t\t\t\t\t</ol>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\" id=\"headingFour\">\r\n\t\t\t\t\t<h2 class=\"mb-0\">\r\n\t\t\t\t\t\t<button class=\"btn btn-link app-btn-color collapsed\" type=\"button\"\r\n\t\t\t\t\t\t\tdata-toggle=\"collapse\" data-target=\"#collapseFour\"\r\n\t\t\t\t\t\t\taria-expanded=\"false\" aria-controls=\"collapseFour\">\r\n\t\t\t\t\t\t\tBehaviour Diagrams</button>\r\n\t\t\t\t\t</h2>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapseFour\" class=\"collapse\"\r\n\t\t\t\t\taria-labelledby=\"headingFour\" data-parent=\"#accordionExample\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<ol>\r\n\t\t\t\t\t\t\t<li><h4>Use case diagram</h4></li>\r\n\t\t\t\t\t\t\t <p>Use to capture the functionality, dynamic live behaviour and the requirements of a system. Consist with use cases, actors who responsible for \r\n\t\t\t\t\t\t\t invoke the functions, external thing/person interact with the system and annotations. Use case represent a distinct functionality.</p>\r\n\t\t\t\t\t\t\t <img src=\"/assets/img/articles/article7/use_case.png\" alt=\"object\" width=\"25%\" >\r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t <li><h4>State machine/chart/transition diagram</h4></li>\r\n\t\t\t\t\t\t\t <p>Model the state of each object, package, and entire system and how system interact with the external world. Two types : behavioral and \r\n\t\t\t\t\t\t\t protocol state machines.</p>\r\n\t\t\t\t\t\t\t <p>When state carts model a state of live system with WAIT concept, Flow carts model the data flow of a system with controls\r\n\t\t\t\t\t\t\t without using the WAIT concept.</p>\r\n\t\t\t\t\t\t\t <img src=\"/assets/img/articles/article7/state_machine.png\" alt=\"object\" width=\"20%\" >\r\n\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t <li><h4>Activity diagram</h4></li>\r\n\t\t\t\t\t\t\t <p>Describes the execution flow of the system Or the flow cart of the activities between entities. Use activity, \r\n\t\t\t\t\t\t\t activity partitions, fork and join nodes, pins to drow the diagram. </p>\r\n\t\t\t\t\t\t\t <img src=\"/assets/img/articles/article7/activity.png\" alt=\"object\" width=\"25%\" >\r\n\t\t\t\t\t\t </ol>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\" id=\"headingFive\">\r\n\t\t\t\t\t<h2 class=\"mb-0\">\r\n\t\t\t\t\t\t<button class=\"btn btn-link app-btn-color collapsed\" type=\"button\"\r\n\t\t\t\t\t\t\tdata-toggle=\"collapse\" data-target=\"#collapseFive\"\r\n\t\t\t\t\t\t\taria-expanded=\"false\" aria-controls=\"collapseFive\">\r\n\t\t\t\t\t\t\tInteraction Diagrams</button>\r\n\t\t\t\t\t</h2>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapseFive\" class=\"collapse\"\r\n\t\t\t\t\taria-labelledby=\"headingFive\" data-parent=\"#accordionExample\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\tDescribes how the message passing and life-line between entities to form up the activities of the system.\r\n\t\t\t\t\tLife line has a name (optional), type, selector (optional). Messages are divided as synchronous, asynchronous, return,\r\n\t\t\t\t\tobject creation, object destruction, found, lost messages. State invariants and constrains use to show the change of a \r\n\t\t\t\t\tobject state after a message, event, operation within object instance's life time for this diagrams. Operators use\r\n\t\t\t\t\tshow how operands are executes. Operations types are Opt (option), Alt (alternative), Loop, Break, Par (parallel), Ref (reference).\r\n\t\t\t\t\t\t<ol>\r\n\t\t\t\t\t\t\t<li><h4>Sequence diagram</h4></li>\r\n\t\t\t\t\t\t\t<p>Shows interaction of messages between life-lines.</p>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<li><h4>Collaboration diagram</h4></li>\r\n\t\t\t\t\t\t\t<p>Shows structural aspects with life-lines.</p>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<li><h4>Timing diagram</h4></li>\r\n\t\t\t\t\t\t\t<p>Shows message interaction between instances.</p>\r\n\t\t\t\t\t\t </ol>\r\n\t\t\t\t\t\t <img src=\"/assets/img/articles/article7/interaction.png\" alt=\"object\" width=\"75%\" >\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\" id=\"headingSix\">\r\n\t\t\t\t\t<h2 class=\"mb-0\">\r\n\t\t\t\t\t\t<button class=\"btn btn-link app-btn-color collapsed\" type=\"button\"\r\n\t\t\t\t\t\t\tdata-toggle=\"collapse\" data-target=\"#collapseSix\"\r\n\t\t\t\t\t\t\taria-expanded=\"false\" aria-controls=\"collapseSix\">\r\n\t\t\t\t\t\t\tUML tools</button>\r\n\t\t\t\t\t</h2>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapseSix\" class=\"collapse\"\r\n\t\t\t\t\taria-labelledby=\"headingSix\" data-parent=\"#accordionExample\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li>Eddraw</li>\r\n\t\t\t\t\t\t\t<li>StartUML</li>\r\n\t\t\t\t\t\t\t<li>Umbrello</li>\r\n\t\t\t\t\t\t\t<li>UML designer </li>\r\n\t\t\t\t\t\t\t<li>Altova</li>\r\n\t\t\t\t\t\t\t<li>Umple</li>\r\n\t\t\t\t\t\t\t<li>Visual Paradigm</li>\r\n\t\t\t\t\t\t\t<li>WhitestarUML</li>\r\n\t\t\t\t\t\t\t<li>Draw.IO</li>\r\n\t\t\t\t\t\t\t<li>GenMyModel</li>\r\n\t\t\t\t\t\t\t<li>Lucidchart</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<app-send-email [articleTitle]=\"articleSeven.title\"></app-send-email>"

/***/ }),

/***/ "./src/app/article-content7/article-content7.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/article-content7/article-content7.component.ts ***!
  \****************************************************************/
/*! exports provided: ArticleContent7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleContent7Component", function() { return ArticleContent7Component; });
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

var ArticleContent7Component = /** @class */ (function () {
    function ArticleContent7Component() {
    }
    ArticleContent7Component.prototype.ngOnInit = function () {
        this.articleSeven = { 'title': 'Unified Modeling Language 2.5.1',
            'lastUpdated': 'July 20 2019' };
    };
    ArticleContent7Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-content7',
            template: __webpack_require__(/*! ./article-content7.component.html */ "./src/app/article-content7/article-content7.component.html"),
            styles: [__webpack_require__(/*! ./article-content7.component.css */ "./src/app/article-content7/article-content7.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleContent7Component);
    return ArticleContent7Component;
}());



/***/ }),

/***/ "./src/app/article-content8/article-content8.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/article-content8/article-content8.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-btn-color {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n}\r\n.app-btn-color:hover {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/article-content8/article-content8.component.html":
/*!******************************************************************!*\
  !*** ./src/app/article-content8/article-content8.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article [data]=\"articleEight\"></app-article>\r\n<div class=\"article-content\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<p>Session variables are usefull to store global variables to\r\n\t\t\t\t\taccess throughout the application lifecycle opening and closing.\r\n\t\t\t\t\tSession variables store stored in server and can access in more\r\n\t\t\t\t\tthan one web page request. For example session can use to store\r\n\t\t\t\t\tlogged in user details for a web application.</p>\r\n\t\t\t\t<p>CodeIgniter framework has session library to manage PHP\r\n\t\t\t\t\tglobal array $_SESSION.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\tInitialize the session in controller when using CodeIgniter.\r\n\t\t\t\t<pre class=\"article-code\">\r\n\t\t          \t<code>\r\n\t\t\t\t\t$this->load->library('session');  // initialize the class\r\n\t\t\t\t\t// after that use '$this->session' to access loaded session.\r\n\t\t     \t\t</code>\r\n     \t\t\t</pre>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\tSet a value to session array.\r\n\t\t\t\t<pre class=\"article-code\">\r\n\t\t          \t<code>\r\n\t\t\t\t\t$_SESSION['item'] = 'item_value';     // using $_SESSION array\r\n\t\t\t\t\t$this->session->set_userdata('item', 'item_value');   //using session class setter\r\n\t\t     \t\t</code>\r\n     \t\t\t</pre>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\tGet a value from session array.\r\n\t\t\t\t<pre class=\"article-code\">\r\n\t\t          \t<code>\r\n\t\t\t\t\t$_SESSION['item'];        // using $_SESSION array\r\n\t\t\t\t\t$this->session->userdata('item');  //using session class getter\r\n\t\t     \t\t</code>\r\n     \t\t\t</pre>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\tCheck value is exist in session array\r\n\t\t\t\t<pre class=\"article-code\">\r\n\t\t          \t<code>\r\n\t\t\t\t\tisset($_SESSION['item']);        // using $_SESSION array\r\n\t\t\t\t\t$this->session->has_userdata('item');  //using session class method 'has_userdata'\r\n\t\t     \t\t</code>\r\n     \t\t\t</pre>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\tRemove data in session array.\r\n\t\t\t\t<pre class=\"article-code\">\r\n\t\t          \t<code>\r\n\t\t\t\t\tunset($_SESSION['item']);       \r\n\t\t\t\t\t$this->session->unset_userdata('item');\r\n\t\t     \t\t</code>\r\n     \t\t\t</pre>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\tDestroy the session. This delets all flash and temp data.\r\n\t\t\t\t<pre class=\"article-code\">\r\n\t\t          \t<code>\r\n\t\t\t\t\t$this->session->sess_destroy();\r\n\t\t     \t\t</code>\r\n     \t\t\t</pre>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h5>Flash Data</h5>\r\n\t\t\t\t<p>Specific session data type which are only available for next\r\n\t\t\t\t\trequest.</p>\r\n\t\t\t\t<pre class=\"article-code\">\r\n\t\t          \t<code>\r\n\t\t\t\t\t$this->session->mark_as_flash('item');   // set flash data\r\n\t\t\t\t\t$this->session->flashdata('item');       // read flash data\r\n\t\t     \t\t</code>\r\n     \t\t\t</pre>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h5>Temp Data</h5>\r\n\t\t\t\t<p>Specific session data type which has expiration time.</p>\r\n\t\t\t\t<pre class=\"article-code\">\r\n\t\t          \t<code>\r\n\t\t\t\t\t$this->session->set_tempdata('item', 'value', 300);  // add temp data with 300 seconds expiry time\r\n\t\t     \t\t</code>\r\n     \t\t\t</pre>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\"> 'Account_controller' inside the <a href=\"https://github.com/piyumi11/StudentApplication\">Student Application</a>\r\n\t\t\thas a example of this session data usage for login management</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<app-send-email [articleTitle]=\"articleEight.title\"></app-send-email>"

/***/ }),

/***/ "./src/app/article-content8/article-content8.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/article-content8/article-content8.component.ts ***!
  \****************************************************************/
/*! exports provided: ArticleContent8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleContent8Component", function() { return ArticleContent8Component; });
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

var ArticleContent8Component = /** @class */ (function () {
    function ArticleContent8Component() {
    }
    ArticleContent8Component.prototype.ngOnInit = function () {
        this.articleEight = { 'title': 'CodeIgniter and PHP Session',
            'lastUpdated': 'January 12 2020' };
    };
    ArticleContent8Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-content8',
            template: __webpack_require__(/*! ./article-content8.component.html */ "./src/app/article-content8/article-content8.component.html"),
            styles: [__webpack_require__(/*! ./article-content8.component.css */ "./src/app/article-content8/article-content8.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleContent8Component);
    return ArticleContent8Component;
}());



/***/ }),

/***/ "./src/app/article-content9/article-content9.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/article-content9/article-content9.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-btn-color {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n}\r\n.app-btn-color:hover {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/article-content9/article-content9.component.html":
/*!******************************************************************!*\
  !*** ./src/app/article-content9/article-content9.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article [data]=\"articleNine\"></app-article>\r\n<div class=\"article-content\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\tTCPDF is a php library that can use to create pdf documents using\r\n\t\t\t\thtml. Integration of TCPDF to CodeIgniter has few simple steps\r\n\t\t\t\tcompare to other PDF libraries. Following example relate to CodeIgniter php application <a href=\"https://github.com/piyumi11/StudentApplication\" target=\"_blank\">StudentApplication</a>\r\n\t\t\t\tin github.\r\n\t\t\t\t<div>\r\n\r\n\t\t\t\t\t<h4>Step 01 :</h4>\r\n\t\t\t\t\t<p>Download TCPDF library from http://www.tcpdf.org/.</p>\r\n\t\t\t\t\t<h4>Step 02 :</h4>\r\n\t\t\t\t\t<p>Create a folder 'tcpdf' inside the 'application/helpers'\r\n\t\t\t\t\t\tdirectory of CodeIgniter application and copy all TCPDF library\r\n\t\t\t\t\t\tfiles into that.</p>\r\n\t\t\t\t\t<img src=\"/assets/img/articles/tcpdf_folder.PNG\"\r\n\t\t\t\t\t\talt=\"directory of tcpdf library\" width=\"20%\">\r\n\t\t\t\t\t\t<h4>Step 03 :</h4>\r\n\t\t\t\t\t<p>Create 'pdf_helper.php' file inside 'application/helpers' folder and import TCPDF as below code.</p>\r\n\t\t\t\t\t<pre class=\"article-code\"><code>\r\n\t\t\t\t&lt;?php \t\t\r\n\t\t\t\t\tfunction tcpdf()\r\n\t\t\t\t\t{{ '{' }} \r\n\t\t\t\t\t    require_once('tcpdf/tcpdf.php');\r\n\t\t\t\t\t{{ '}' }}\r\n\t\t\t\t?&gt;\r\n          \t\t </code></pre>\r\n          \t\t <h4>Step 04 :</h4>\r\n\t\t\t\t\t<p>This application create PDF document to display data in a html table. Add a function as below to a php controller class. Read the comments\r\n\t\t\t\t\t inside the file to understand the TCPDF functions. </p>\t\r\n\t\t\t\t\t<pre class=\"article-code\"><code>\r\n\t\t\t\tpublic function pdf_report() {{ '{' }} \r\n\t\t\t\t\r\n\t\t\t\t          $this->load->helper('pdf_helper'); \t// import pdf helper \r\n\t\t\t\t          tcpdf();  \t\t// execute helper function\r\n\t\t\t\t          \r\n\t\t\t\t          // retrive the student details from database \r\n\t\t\t\t          $query = $this->db->get(\"stud\");\r\n\t\t\t\t          $data['records'] = $query->result();\r\n\t\t\t\t          $data['page_title'] = \"All students list\";  \r\n\t\t\t\t          \r\n\t\t\t\t          $this->load->view('pdf_report', $data);  // view file pdf_report.php\r\n\t\t\t          \r\n      \t\t\t\t{{ '}' }} \r\n          \t\t </code></pre>\r\n\t\t\t\t\t\t<h4>Step 05 :</h4>\r\n\t\t\t\t\t<p>\tCreate a 'pdf_report.php' inside the 'view' folder of the CodeIgniter app and add the code inside \r\n\t\t\t\t\t<a href=\"https://github.com/piyumi11/StudentApplication/blob/master/application/views/pdf_report.php\" target=\"_blank\">this</a> file.\r\n\t\t\t\t\tThis code convert the data return by controller into pdf file using the library TCPDF.\tRead <a href=\"https://tcpdf.org/docs/\" target=\"_blank\">\r\n\t\t\t\t\tthe documentation </a> to understand the TCPDF functions inside 'pdf_report.php' file. \r\n\t\t\t\t\t<a href=\"https://github.com/piyumi11/StudentApplication/commit/cffefb614d558df29cb3156203146d0fb49ca0c7\" target=\"_blank\">Git commit</a> \r\n\t\t\t\t\thas the complete code relate to this article.</p>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<h4>Step 06 :</h4>\r\n\t\t\t\t\t<p>'StudentApplication' has a button to create the pdf file as below. Click on the button to generate the pdf file.</p>\r\n\t\t\t\t\t<pre class=\"article-code\"><code>\r\n\t\t\t\t\t\t<a class ='app-icon' href = \"<?php echo base_url();?>index.php/stud/pdf\"  target=\"blank\"><i class=\"fas fa-file-pdf\"></i></a>\r\n\t\t\t\t\t</code></pre>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<app-send-email [articleTitle]=\"articleNine.title\"></app-send-email>"

/***/ }),

/***/ "./src/app/article-content9/article-content9.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/article-content9/article-content9.component.ts ***!
  \****************************************************************/
/*! exports provided: ArticleContent9Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleContent9Component", function() { return ArticleContent9Component; });
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

var ArticleContent9Component = /** @class */ (function () {
    function ArticleContent9Component() {
    }
    ArticleContent9Component.prototype.ngOnInit = function () {
        this.articleNine = { 'title': 'PDF library for CodeIgniter ',
            'lastUpdated': 'March 01 2020' };
    };
    ArticleContent9Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-content9',
            template: __webpack_require__(/*! ./article-content9.component.html */ "./src/app/article-content9/article-content9.component.html"),
            styles: [__webpack_require__(/*! ./article-content9.component.css */ "./src/app/article-content9/article-content9.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleContent9Component);
    return ArticleContent9Component;
}());



/***/ }),

/***/ "./src/app/article/article.component.css":
/*!***********************************************!*\
  !*** ./src/app/article/article.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".article-title {\r\n\tcolor: black;\r\n\tpadding: 8px 8px 0px 8px;\r\n\ttext-shadow: 1px 1px 3px #c0c0c0;\r\n}\r\n.article-date{\r\n\tcolor: #959595;\r\n\tpadding-left: 8px;\r\n\tpadding-bottom: 20px;\r\n}"

/***/ }),

/***/ "./src/app/article/article.component.html":
/*!************************************************!*\
  !*** ./src/app/article/article.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h2 *ngIf=\"data\" class=\"article-title\" >\r\n  \t{{data.title}}\r\n  </h2>  \r\n  <p class=\"article-date\"><small><i>Last Updated: {{data.lastUpdated}}</i></small><p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
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

var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent.prototype.ngOnChanges = function (changes) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ArticleComponent.prototype, "data", void 0);
    ArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/article/article.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-home {\r\n\tbackground-color:#f3f3f3;\t\r\n}\r\n.card-home:hover{\t\r\n\tbackground-color:#dbdbdb;\r\n}\r\n.card-border-home {\t\r\n\tborder: 0px;   \r\n}\r\n.card-font-home a{\r\n\tcolor:black;\r\n\ttext-shadow: 2px 2px 3px #c0c0c0;\r\n}\r\n.card-font-home a:hover{\r\n\tcolor:black;\r\n\ttext-decoration: none;\r\n}\r\n.card-deck .card {\r\n\tpadding-left: 0px !important;\r\n\tpadding-right: 0px !important;\r\n\tpadding-bottom: 0px !important;\r\n\tpadding-top: 0px !important;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article-content\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-10 offset-lg-1\">\r\n        \t<div class=\"card-deck\">\r\n\t\t\t  <div class=\"card shadow p-3 mb-5 bg-white rounded\">\r\n\t\t\t    <img class=\"card-img-top\" src=\"\\assets\\img\\articles\\jersy.png\" alt=\"Jersy logo\">\r\n\t\t\t    <div class=\"card-body card-home\">\r\n\t\t\t      <p class=\"card-text card-font-home\"><a routerLink = \"/jersey_example\" > Jersey REST Hello World Example.</a></p>\r\n\t\t\t    </div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"card shadow p-3 mb-5 bg-white rounded\">\r\n\t\t\t    <img class=\"card-img-top\" src=\"\\assets\\img\\articles\\spring.png\" alt=\"Spring logo\">\r\n\t\t\t    <div class=\"card-body card-home\">\r\n\t\t\t      <p class=\"card-text card-font-home\"><a routerLink = \"/spring_mvc_boot\" > Spring MVC & Spring Boot.</a></p>\r\n\t\t\t    </div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"card shadow p-3 mb-5 bg-white rounded\">\r\n\t\t\t    <img class=\"card-img-top\" src=\"\\assets\\img\\articles\\docker.png\" alt=\"Docker logo\">\r\n\t\t\t    <div class=\"card-body card-home\">\r\n\t\t\t      <p class=\"card-text card-font-home\"><a routerLink = \"/introduction_to_docker\" > Containerization and Docker. </a></p>\r\n\t\t\t    </div>\r\n\t\t\t  </div>\t\r\n\t\t\t  <div class=\"card shadow p-3 mb-5 bg-white rounded\">\r\n\t\t\t    <img class=\"card-img-top\" src=\"\\assets\\img\\articles\\lamp.png\" alt=\"PHP logo\">\r\n\t\t\t    <div class=\"card-body card-home\">\r\n\t\t\t      <p class=\"card-text card-font-home\"><a routerLink = \"/lamp_and_codeigniter\"> LAMP and CodeIgniter. </a></p>\r\n\t\t\t    </div>\r\n\t\t\t  </div>\t\t\t  \t\t  \r\n\t\t\t</div>\t\t\t\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-10 offset-lg-1\">\r\n        \t<div class=\"card-deck\">\r\n\t\t\t  <div class=\"card shadow p-3 mb-5 bg-white rounded col-lg-3\">\r\n\t\t\t    <img class=\"card-img-top\" src=\"\\assets\\img\\articles\\php.png\" alt=\"PHP logo\">\r\n\t\t\t    <div class=\"card-body card-home\">\r\n\t\t\t      <p class=\"card-text card-font-home\"><a routerLink = \"/php_login_example\" > PHP login example.</a></p>\r\n\t\t\t    </div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"card shadow p-3 mb-5 bg-white rounded col-lg-3\">\r\n\t\t\t    <img class=\"card-img-top\" src=\"\\assets\\img\\articles\\java.png\" alt=\"Java logo\">\r\n\t\t\t    <div class=\"card-body card-home\">\r\n\t\t\t      <p class=\"card-text card-font-home\"><a routerLink = \"/design_patterns_java\" > Java Design Patterns.</a></p>\r\n\t\t\t    </div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"card shadow p-3 mb-5 bg-white rounded col-lg-3\">\r\n\t\t\t    <img class=\"card-img-top\" src=\"\\assets\\img\\articles\\uml.png\" alt=\"UML logo\">\r\n\t\t\t    <div class=\"card-body card-home\">\r\n\t\t\t      <p class=\"card-text card-font-home\"><a routerLink = \"/uml\" > UML 2.5.1</a></p>\r\n\t\t\t    </div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"card shadow p-3 mb-5 bg-white rounded col-lg-3\">\r\n\t\t\t    <img class=\"card-img-top\" src=\"\\assets\\img\\articles\\codeigniter.jpg\" alt=\"PHP logo\">\r\n\t\t\t    <div class=\"card-body card-home\">\r\n\t\t\t      <p class=\"card-text card-font-home\"><a routerLink = \"/codeigniter_and_php_session\" > CodeIgniter Session Library.</a></p>\r\n\t\t\t    </div>\r\n\t\t\t  </div>\t\t  \t\t  \t\t  \r\n\t\t\t</div>\t\t\t\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-10 offset-lg-1\">\r\n        \t<div class=\"card-deck\">\r\n\t\t\t  <div class=\"card shadow p-3 mb-5 bg-white rounded col-lg-3\">\r\n\t\t\t    <img class=\"card-img-top\" src=\"\\assets\\img\\articles\\tcpdf.png\" alt=\"TCPDF logo\">\r\n\t\t\t    <div class=\"card-body card-home\">\r\n\t\t\t      <p class=\"card-text card-font-home\"><a routerLink = \"/pdf_library_for_codeigniter\" >PDF library for CodeIgniter.</a></p>\r\n\t\t\t    </div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"card shadow p-3 mb-5 bg-white rounded col-lg-3\">\r\n\t\t\t    <img class=\"card-img-top\" src=\"\\assets\\img\\articles\\python.PNG\" alt=\"Python logo\">\r\n\t\t\t    <div class=\"card-body card-home\">\r\n\t\t\t      <p class=\"card-text card-font-home\"><a routerLink = \"/color_conversion_in_python\" >RGB, CMY, HSI color conversion in python.</a></p>\r\n\t\t\t    </div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"card shadow p-3 mb-5 bg-white rounded col-lg-3\">\r\n\t\t\t    <img class=\"card-img-top\" src=\"\\assets\\img\\articles\\opengl.png\" alt=\"OpenGL logo\">\r\n\t\t\t    <div class=\"card-body card-home\">\r\n\t\t\t      <p class=\"card-text card-font-home\"><a routerLink = \"/opengl_clock\" >OpenGL clock.</a></p>\r\n\t\t\t    </div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"card shadow p-3 mb-5 bg-white rounded col-lg-3\">\r\n\t\t\t     <img class=\"card-img-top\" src=\"\\assets\\img\\articles\\atmega328p.webp\" alt=\"ATmega328P logo\">\r\n\t\t\t    <div class=\"card-body card-home\">\r\n\t\t\t      <p class=\"card-text card-font-home\"><a routerLink = \"/atmega328p_fast_pwm\" >ATmega328P Fast PWM</a></p>\r\n\t\t\t    </div>\r\n\t\t\t  </div>\t\t  \t\t  \t\t  \r\n\t\t\t</div>\t\t\t\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/send-email/send-email.component.css":
/*!*****************************************************!*\
  !*** ./src/app/send-email/send-email.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-feedback {\r\n\tbackground-color:#104e65;\r\n\tcolor: white;\r\n\tborder-color: #104e65;\r\n\tborder-radius: 4px;\r\n}"

/***/ }),

/***/ "./src/app/send-email/send-email.component.html":
/*!******************************************************!*\
  !*** ./src/app/send-email/send-email.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row card-body float-right\">\r\n\t\tWas this article helpful? &nbsp;&nbsp;\r\n\t\t<button type=\"button\" class=\"btn-feedback\" (click)=\"sendMail('Yes')\">\r\n\t\t\tYes\r\n\t\t</button>&nbsp;\r\n \t\t<button type=\"button\" class=\"btn-feedback\" (click)=\"sendMail('No')\">\r\n \t\t\tNo\r\n \t\t</button>\r\n\t</div>\t\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/send-email/send-email.component.ts":
/*!****************************************************!*\
  !*** ./src/app/send-email/send-email.component.ts ***!
  \****************************************************/
/*! exports provided: SendEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendEmailComponent", function() { return SendEmailComponent; });
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

var SendEmailComponent = /** @class */ (function () {
    function SendEmailComponent() {
    }
    SendEmailComponent.prototype.ngOnInit = function () {
    };
    SendEmailComponent.prototype.sendMail = function (response) {
        var link = 'mailto:piyumik11@gmail.com' +
            '&subject=User Feedback on piyumi11.github.io' +
            '&body=' + this.articleTitle +
            '%0D%0A' + ' Was this article helpful?' + response;
        window.location.href = link;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SendEmailComponent.prototype, "articleTitle", void 0);
    SendEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-email',
            template: __webpack_require__(/*! ./send-email.component.html */ "./src/app/send-email/send-email.component.html"),
            styles: [__webpack_require__(/*! ./send-email.component.css */ "./src/app/send-email/send-email.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SendEmailComponent);
    return SendEmailComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! F:\Dev\angularTest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map