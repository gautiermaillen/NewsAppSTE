import { Component, OnInit } from '@angular/core';
import { HeadComponent } from './templateComponent/head.component';
import { addArticle } from './templateComponent/addArticle.component';
import { News } from './templateComponent/news';
import { NewsService } from './news.service';
import { addComs } from './templateComponent/addComs.component';
import { Coms } from './templateComponent/coms';

@Component({
  selector: 'my-app',
  templateUrl: 'app/pages/news.html',
  directives : [HeadComponent, addArticle, addComs],
  providers: [NewsService]
})

export class AppComponent implements OnInit {
    title: 'Adneom News';
    lesnews: News[];
    lescoms: Coms[];
    selectedNews: News;
    error: any;
    
    constructor(
        private newsService: NewsService){}

    getNews() {
        this.newsService
            .getNews()
            .then(
                    lesnews=>this.lesnews=lesnews
                )
            .catch(error => this.error = error);
    }
    
    onSelect(news: News) { this.selectedNews = news; }
    
    upVote(vote,id){
        for(var i = 0; i < this.lesnews.length; i++){
            if(this.lesnews[i]["id"] == id && localStorage.getItem(id) != "hello"){
                this.lesnews[i]["votes"] = vote += 1;
                // this.lesnews[i].dejavote = true;
                localStorage.setItem(id,"hello");
            }
        }
    }
    
    lesnewsTriees() {
        return this.lesnews.sort((a: News, b: News) => b.votes - a.votes)
    }
    
    ngOnInit() {
        this.getNews();
    }


    onShow(newsprop)
    {
        var leBoutonTexte = document.getElementsByClassName("commentaires")[newsprop.id-1].getElementsByTagName('button')[0];
        if(newsprop.showComs)
        {
            newsprop.showComs = false;
            leBoutonTexte.textContent = "Afficher les commentaires.";
        }
        else
        {
            newsprop.showComs = true;
            leBoutonTexte.textContent = "Cacher les commentaires.";
        }
    }
}