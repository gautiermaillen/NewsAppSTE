import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { News } from './templateComponent/news';
import { Coms } from './templateComponent/coms';

@Injectable()
export class NewsService {
    private serverUrl = 'http://10.10.12.196:8080';
    constructor(private http: Http) {}
    
    getNews(): Promise<News[]> {
    return this.http.get(this.serverUrl)
        .toPromise()
        .then(function(response) {
            return response.json()})
        .catch(this.handleError);
    }
    
   save(news: News): Promise<News>  {
       return this.post(news);
    }

   private post(news: News): Promise<News> {
   let headers = new Headers({
     'Content-Type': 'application/json'});

   return this.http
              .post(this.serverUrl, JSON.stringify(news), {headers: headers})
              .toPromise()
              .then(res => res.json())
              .catch(this.handleError);
    }

    // Coms 

   saveComs(coms: Coms): Promise<Coms>  {
       return this.postComs(coms);
       console.log("ajout réussi");
   }

   private postComs(coms: Coms): Promise<Coms> {
   let headers = new Headers({
     'Content-Type': 'application/json'});

   return this.http
              .post(this.serverUrl, JSON.stringify(coms), {headers: headers})
              .toPromise()
              .then(res => res.json())
              .catch(this.handleError);
    }

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
    
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
  }
}