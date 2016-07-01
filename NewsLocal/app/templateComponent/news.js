"use strict";
var News = (function () {
    function News(tableau) {
        console.log("construit");
        this.lesnews = tableau;
        this.showComs = false;
    }
    News.prototype.ajoutNews = function (id, lien, titre, votes, commentaires) {
        this.lesnews.push({ id: id, lien: lien, titre: titre, votes: votes, commentaires: commentaires, showComs: this.showComs });
        return this.lesnews;
    };
    return News;
}());
exports.News = News;
//# sourceMappingURL=news.js.map