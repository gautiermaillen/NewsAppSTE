import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { News } from './templateComponent/news';
import { Coms } from './templateComponent/coms';

@Injectable()
export class NewsService {
    private serverUrl = 'https://adneom-server.herokuapp.com';
    error: any;
    
    constructor(private http: Http) {}
    
    getNews(): Promise<News[]> {
    return this.http.get(this.serverUrl + "/news")
        .toPromise()
        .then(function(response) {
            return response.json()})
        .catch(this.handleError);
    }
    
   save(news: News): Promise<News>  {
       return this.put(news);
    }

   private put(news: News): Promise<News> {
        console.log(news);
       let headers = new Headers({
         'Content-Type': 'application/json',
       'Access-Control-Allow-Methods': 'PUT'});

       return this.http
                  .put(this.serverUrl + "/news", JSON.stringify(news), {headers: headers})
                  .toPromise()
                  .then(res => res.json())
                  .catch(this.handleError);
    }

    // Coms 

   saveComs(coms: Coms): Promise<Coms>  {
        console.log("ajout réussi");
        return this.putComs(coms);
   }

   private putComs(coms: Coms): Promise<Coms> {
   let headers = new Headers({
     'Content-Type': 'application/json'});

   return this.http
              .put(this.serverUrl + "/comments/" + coms.id, JSON.stringify(coms), {headers: headers})
              .toPromise()
              .then(res => res.json())
              .catch(this.handleError);
    }
    
    vote(news, id): Promise<News> {
        console.log("news : ", news);
        news.votes++;
        var path = this.serverUrl + "/news/vote/" + id;
        let headers = new Headers({
            'Content-Type': '*'});
        return this.http
                .put(path, {headers: headers})
                .toPromise()
                .then(res => res.json())
                .catch(this.handleError);
    }

    
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
  }
}