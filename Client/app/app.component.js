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
var head_component_1 = require('./templateComponent/head.component');
var addArticle_component_1 = require('./templateComponent/addArticle.component');
var news_service_1 = require('./news.service');
var addComs_component_1 = require('./templateComponent/addComs.component');
var AppComponent = (function () {
    function AppComponent(newsService) {
        this.newsService = newsService;
        this.showComs = false;
    }
    AppComponent.prototype.getNews = function () {
        var _this = this;
        this.newsService
            .getNews()
            .then(function (lesnews) { return _this.lesnews = lesnews; })
            .catch(function (error) { return _this.error = error; });
    };
    AppComponent.prototype.onSelect = function (news) { this.selectedNews = news; };
    AppComponent.prototype.upVote = function (vote, id) {
        for (var i = 0; i < this.lesnews.length; i++) {
            if (this.lesnews[i]["id"] == id && localStorage.getItem(id) != "hello") {
                this.lesnews[i]["votes"] = vote += 1;
                // this.lesnews[i].dejavote = true;
                localStorage.setItem(id, "hello");
            }
        }
    };
    AppComponent.prototype.lesnewsTriees = function () {
        return this.lesnews.sort(function (a, b) { return b.votes - a.votes; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getNews();
    };
    AppComponent.prototype.onShow = function (newsprop) {
        var leBoutonTexte = document.getElementsByClassName("commentaires")[newsprop.id - 1].getElementsByTagName('button')[0];
        if (newsprop.showComs) {
            newsprop.showComs = false;
            leBoutonTexte.textContent = "Afficher les commentaires.";
        }
        else {
            newsprop.showComs = true;
            leBoutonTexte = "Cacher les commentaires.";
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/pages/news.html',
            directives: [head_component_1.HeadComponent, addArticle_component_1.addArticle, addComs_component_1.addComs],
            providers: [news_service_1.NewsService]
        }), 
        __metadata('design:paramtypes', [news_service_1.NewsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map