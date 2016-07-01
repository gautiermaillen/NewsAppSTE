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
/*import { addArt } from './addArticle';*/
var coms_1 = require('./coms');
var news_service_1 = require('../news.service');
var addComs = (function () {
    function addComs(newsService) {
        this.newsService = newsService;
    }
    addComs.prototype.ajoutComs = function (texte, idNews) {
        var _this = this;
        if (texte != undefined) {
            var dernierID = this.lescoms[this.lescoms.length - 1].id;
            var c = new coms_1.Coms(this.lescoms);
            var ajout = c.ajoutComs(dernierID + 1, texte, idNews);
            var dernierObjet = ajout[ajout.length - 1];
            this.newsService
                .saveComs(dernierObjet)
                .then(function () { console.log("ajout réussi"); })
                .catch(function (error) { return _this.error = error; });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], addComs.prototype, "lescoms", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], addComs.prototype, "id", void 0);
    addComs = __decorate([
        core_1.Component({
            selector: 'addComs',
            template: "\n    <input type=\"text\" placeholder=\"Votre commentaire...\" [(ngModel)]=\"texte\" />\n    <button name=\"envoyerCom\" (click)=\"ajoutComs(texte, id)\">Envoyer</button>\n    "
        }), 
        __metadata('design:paramtypes', [news_service_1.NewsService])
    ], addComs);
    return addComs;
}());
exports.addComs = addComs;
//# sourceMappingURL=addComs.component.js.map