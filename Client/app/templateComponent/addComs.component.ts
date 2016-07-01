import { Component, Input } from '@angular/core';
/*import { addArt } from './addArticle';*/
import { Coms } from './coms';
import {NewsService} from '../news.service';


@Component ({
    selector: 'addComs',
    template: `
    <input type="text" placeholder="Votre commentaire..." [(ngModel)]="texte" />
    <button name="envoyerCom" (click)="ajoutComs(texte, id)">Envoyer</button>
    `
})

export class addComs { 
    @Input() lescoms:Coms[];
    @Input() id : any;
    error: any;
    constructor(
        private newsService: NewsService){}

    ajoutComs(texte, idNews)
    {
        if(texte != undefined){
            var dernierID = this.lescoms[this.lescoms.length-1].id;
            var c = new Coms(this.lescoms);
            var ajout = c.ajoutComs(dernierID+1, texte, idNews);

            var dernierObjet = ajout[ajout.length-1];
            
            this.newsService
                .saveComs(dernierObjet)
                .then(function() {console.log("ajout réussi");})
                .catch(error => this.error = error);
        }
    }
}