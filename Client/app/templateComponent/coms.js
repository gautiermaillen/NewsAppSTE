"use strict";
var Coms = (function () {
    function Coms(tableau) {
        console.log("construit");
        this.lescoms = tableau;
    }
    Coms.prototype.ajoutComs = function (id, idNews, texte) {
        this.lescoms.push({ id: id, idNews: idNews, texte: texte });
        return this.lescoms;
    };
    return Coms;
}());
exports.Coms = Coms;
//# sourceMappingURL=coms.js.map