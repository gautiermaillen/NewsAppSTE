import { Component, Input } from '@angular/core';
/*import { addArt } from './addArticle';*/
import { News } from './news';
import {NewsService} from '../news.service';


@Component ({
    selector: 'addArticles',
    template: `
        <section id="ajout">
			<div class="container">
				<h2>Ajouter une news</h2>
				<form action="">
                <input type="text" placeholder="Titre" [(ngModel)]="titre">
					<input type="text" placeholder="Lien" [(ngModel)]="url">
                    <input type="button" name="ajouter" (click)="ajoutArticle(titre,url)" value="Ajouter">
				</form>
				<hr>
			</div>
		</section>
    `
})

export class addArticle { 
    @Input() lesnews:News[];
    constructor(
        private newsService: NewsService){}
    ajoutArticle(titre,url){
            if(titre != undefined && url != undefined){
                    var dernierID = this.lesnews[this.lesnews.length-1].id;
                    var n = new News(this.lesnews);
                    var ajout = n.ajoutNews(parseInt(dernierID)+1,url,titre, 0);
                    console.log(ajout[ajout.length-1]);

                    var dernierObjet = ajout[ajout.length-1];
                    
                    save() {
                        this.newsService
                            .save(dernierObjet)
                            .then(function() {console.log("ajout réussi");})
                            .catch(error => this.error = error);
                      }

            }
        }
}