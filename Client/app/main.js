"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var head_component_1 = require('./templateComponent/head.component');
var addArticle_component_1 = require('./templateComponent/addArticle.component');
var http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);
platform_browser_dynamic_1.bootstrap(head_component_1.HeadComponent);
platform_browser_dynamic_1.bootstrap(addArticle_component_1.addArticle);
//# sourceMappingURL=main.js.map