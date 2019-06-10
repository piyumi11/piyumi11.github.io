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
/* harmony import */ var _article_content1_article_content1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article-content1/article-content1.component */ "./src/app/article-content1/article-content1.component.ts");
/* harmony import */ var _article_content2_article_content2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article-content2/article-content2.component */ "./src/app/article-content2/article-content2.component.ts");
/* harmony import */ var _send_email_send_email_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./send-email/send-email.component */ "./src/app/send-email/send-email.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _article_content3_article_content3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./article-content3/article-content3.component */ "./src/app/article-content3/article-content3.component.ts");
/* harmony import */ var _article_content4_article_content4_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./article-content4/article-content4.component */ "./src/app/article-content4/article-content4.component.ts");
/* harmony import */ var _article_content5_article_content5_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article-content5/article-content5.component */ "./src/app/article-content5/article-content5.component.ts");
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
                _article_content1_article_content1_component__WEBPACK_IMPORTED_MODULE_5__["ArticleContent1Component"],
                _article_content2_article_content2_component__WEBPACK_IMPORTED_MODULE_6__["ArticleContent2Component"],
                _send_email_send_email_component__WEBPACK_IMPORTED_MODULE_7__["SendEmailComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _article_content3_article_content3_component__WEBPACK_IMPORTED_MODULE_9__["ArticleContent3Component"],
                _article_content4_article_content4_component__WEBPACK_IMPORTED_MODULE_10__["ArticleContent4Component"],
                _article_content5_article_content5_component__WEBPACK_IMPORTED_MODULE_11__["ArticleContent5Component"]
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
                        component: _article_content1_article_content1_component__WEBPACK_IMPORTED_MODULE_5__["ArticleContent1Component"]
                    },
                    {
                        path: 'spring_mvc_boot',
                        component: _article_content2_article_content2_component__WEBPACK_IMPORTED_MODULE_6__["ArticleContent2Component"]
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
                        path: '',
                        component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
                    },
                    {
                        path: 'home',
                        component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
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

module.exports = "<app-article [data]=\"articleOne\"></app-article>\n<div class=\"article-content\">\n  <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n          \tThis example used :\n          \t<ul>          \t\n          \t\t<li>JDK 1.8</li>\n          \t\t<li>Eclipse IDE</li>\n          \t\t<li>Apache tomcat server 7</li>\n          \t\t<li>Maven</li>\n          \t</ul>\n          \t<div>\n          \t\n          \t\t<h4>Step 01 : </h4>\n          \t\t<p>Create a dynamic web project using eclipse IDE.</p>\n          \t\t<h4>Step 02 : </h4>\n          \t\t<p>Then convert the created project into maven project. It will create the POM.xml \n          \t\t    inside the project root directory. \n\t\t\t\t\tFollowing maven dependencies should be added to POM.xml to use the jersey. \n          \t\t</p>\n          \t\t<pre class=\"article-code\"><code >\n     &lt;dependencies&gt;\n        &lt;dependency&gt;\n            &lt;groupId&gt;org.glassfish.jersey.core&lt;/groupId&gt;\n            &lt;artifactId&gt;jersey-server&lt;/artifactId&gt;\n            &lt;version&gt;2.20&lt;/version&gt;\n        &lt;/dependency&gt;\n\n        &lt;dependency&gt;\n            &lt;groupId&gt;org.glassfish.jersey.containers&lt;/groupId&gt;\n            &lt;artifactId&gt;jersey-container-servlet&lt;/artifactId&gt;\n            &lt;version&gt;2.20&lt;/version&gt;\n        &lt;/dependency&gt;\n    &lt;/dependencies&gt;</code></pre>\n    \n          \t\t<h4>Step 03 : </h4>\n          \t\t<p>Create the service class with REST service methods</p>\n          \t\t<pre class=\"article-code\"><code>\n       \t\timport javax.ws.rs.GET;\n\t\timport javax.ws.rs.Path;\n\t\timport javax.ws.rs.PathParam;\n\t\timport javax.ws.rs.core.Response;\n\t\t\n\t\t@Path(\"/sayhello\")\n\t\tpublic class HelloWorldService {{ '{' }}\n\t\t\n\t\t    @GET\n\t\t    @Path(\"/{{ '{' }}name{{ '}' }}\")\n\t\t    public Response sayHello(@PathParam(\"name\") String msg) {{ '{' }}\n\t\t        String output = \"Hello, \" + msg + \"!\";\n\t\t        return Response.status(200).entity(output).build();\n\t\t    {{ '}' }}\t\t\t\t\t\t    \n\t\t{{ '}' }}\t\t\t\t\t          \t\t\t\t\n          \t\t</code></pre>\n          \t\t<h4>Step 04 : </h4>\n          \t\t<p>Specify the package which reside the service classes implementing\n          \t\t jersey ResourceConfig class </p>\n          \t\t <pre class=\"article-code\">\n          \t\t \t<code>\n    import org.glassfish.jersey.server.ResourceConfig;\n\n\tpublic class HelloWorldApplication extends ResourceConfig {{ '{' }}\n\t    public HelloWorldApplication() {{ '{' }}\n\t        packages(\"com.example.services\");\n\t    {{ '}' }}\n\t{{ '}' }}\t    \n          \t\t \t</code>\n          \t\t </pre>\n          \t\t \n          \t\t <h4>Step 05 : </h4>\n          \t\t <p>If the project does not have a web.xml file create as below.</p>\n          \t\t <pre class=\"article-code\"><code>\n\t&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;\n\t&lt;web-app xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" \n\txmlns=\"http://java.sun.com/xml/ns/javaee\" \n\txsi:schemaLocation=\"http://java.sun.com/xml/ns/javaee \n\thttp://java.sun.com/xml/ns/javaee/web-app_3_0.xsd\" \n\tversion=\"3.0\"&gt;\n\t\t  &lt;display-name&gt;Web Service Demo&lt;/display-name&gt;\n\t\t    &lt;servlet&gt;\n\t\t        &lt;servlet-name&gt;WebServiceDemo&lt;/servlet-name&gt;\n\t\t        &lt;servlet-class&gt;org.glassfish.jersey.servlet.ServletContainer\n\t\t        &lt;/servlet-class&gt;\n\t\t        &lt;init-param&gt;\n\t\t            &lt;param-name&gt;javax.ws.rs.Application&lt;/param-name&gt;\n\t\t            &lt;param-value&gt;com.example.app.HelloWorldApplication&lt;/param-value&gt;\n\t\t\t     &lt;{{ '!' }} --ResourceConfig class implementation --&gt;\n\t\t        &lt;/init-param&gt;\n\t\t        &lt;load-on-startup&gt;1&lt;/load-on-startup&gt;\n\t\t    &lt;/servlet&gt;\n\t\t    &lt;servlet-mapping&gt;\n\t\t        &lt;servlet-name&gt; WebServiceDemo &lt;/servlet-name&gt;\n\t\t        &lt;url-pattern&gt;/*&lt;/url-pattern&gt;\n\t\t    &lt;/servlet-mapping&gt;\n\t&lt;/web-app&gt;          \t\t \n          \t\t </code></pre>\n          \t\t \n          \t\t <h4>Step 06 : </h4>\n          \t\t <p>Create the war file using maven and run on tomcat web container. Use a browser and enter the \n          \t\t URL as follows to see the response.</p>\n          \t\t <img src=\"/assets/img/articles/client-browser.png\" \n          \t\talt=\"jersy rest output in browser\" width=\"100%\" >\n          \t</div>       \t\n          </div>\n        </div>\n   </div>\n   <app-send-email [articleTitle]=\"articleOne.title\"></app-send-email>\n</div>\n"

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

module.exports = "<div class=\"article-content\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-10 offset-lg-1\">\r\n        \t<div class=\"card-deck\">\r\n\t\t\t  <div class=\"card shadow p-3 mb-5 bg-white rounded\">\r\n\t\t\t    <img class=\"card-img-top\" src=\"\\assets\\img\\articles\\jersy.png\" alt=\"Jersy logo\">\r\n\t\t\t    <div class=\"card-body card-home\">\r\n\t\t\t      <p class=\"card-text card-font-home\"><a routerLink = \"/jersey_example\" > Jersey REST Hello World Example.</a></p>\r\n\t\t\t    </div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"card shadow p-3 mb-5 bg-white rounded\">\r\n\t\t\t    <img class=\"card-img-top\" src=\"\\assets\\img\\articles\\spring.png\" alt=\"Spring logo\">\r\n\t\t\t    <div class=\"card-body card-home\">\r\n\t\t\t      <p class=\"card-text card-font-home\"><a routerLink = \"/spring_mvc_boot\" > Spring MVC & Spring Boot.</a></p>\r\n\t\t\t    </div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"card shadow p-3 mb-5 bg-white rounded\">\r\n\t\t\t    <img class=\"card-img-top\" src=\"\\assets\\img\\articles\\docker.png\" alt=\"Docker logo\">\r\n\t\t\t    <div class=\"card-body card-home\">\r\n\t\t\t      <p class=\"card-text card-font-home\"><a routerLink = \"/introduction_to_docker\" > Containerization and Docker. </a></p>\r\n\t\t\t    </div>\r\n\t\t\t  </div>\t\r\n\t\t\t  <div class=\"card shadow p-3 mb-5 bg-white rounded\">\r\n\t\t\t    <img class=\"card-img-top\" src=\"\\assets\\img\\articles\\php.png\" alt=\"Docker logo\">\r\n\t\t\t    <div class=\"card-body card-home\">\r\n\t\t\t      <p class=\"card-text card-font-home\"><a routerLink = \"/lamp_and_codeigniter\"> LAMP and CodeIgniter. </a></p>\r\n\t\t\t    </div>\r\n\t\t\t  </div>\t\t\t  \t\t  \r\n\t\t\t</div>\t\t\t\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-10 offset-lg-1\">\r\n        \t<div class=\"card-deck\">\r\n\t\t\t  <div class=\"card shadow p-3 mb-5 bg-white rounded col-lg-3\">\r\n\t\t\t    <img class=\"card-img-top\" src=\"\\assets\\img\\articles\\php.png\" alt=\"Jersy logo\">\r\n\t\t\t    <div class=\"card-body card-home\">\r\n\t\t\t      <p class=\"card-text card-font-home\"><a routerLink = \"/php_login_example\" > PHP login example.</a></p>\r\n\t\t\t    </div>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"col-lg-3\"></div>\r\n\t\t\t  <div class=\"col-lg-3\"></div>\r\n\t\t\t  <div class=\"col-lg-3\"></div>\t\t\t  \t\t  \t\t  \r\n\t\t\t</div>\t\t\t\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>"

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

module.exports = __webpack_require__(/*! E:\Dev\angularTest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map