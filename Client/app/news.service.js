"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
        this.serverUrl = 'http://10.10.12.196:8080';
    }
    NewsService.prototype.getNews = function () {
        return this.http.get(this.serverUrl)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    NewsService.prototype.save = function (news) {
        return this.post(news);
    };
    NewsService.prototype.post = function (news) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.serverUrl, JSON.stringify(news), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // Coms 
    NewsService.prototype.saveComs = function (coms) {
        return this.postComs(coms);
        console.log("ajout réussi");
    };
    NewsService.prototype.postComs = function (coms) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.serverUrl, JSON.stringify(coms), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //    
    //    private put(news: News) {
    //    let headers = new Headers();
    //    headers.append('Content-Type', 'application/json');
    //
    //    let url = `${this.serverUrl}/${news.id}`;
    //
    //    return this.http
    //               .put(url, JSON.stringify(news), {headers: headers})
    //               .toPromise()
    //               .then(() => news)
    //               .catch(this.handleError);
    //  }
    NewsService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    NewsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NewsService);
    return NewsService;
}());
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map