import { Coms } from './coms';

export class News{ // News class
    private lesnews;
    private showComs;
    
    id: string;
    lien: string;
    titre: string;
    votes: number;
    commentaires : Coms[];
    
  constructor(tableau:Object){
    console.log("construit");
        this.lesnews = tableau;
        this.showComs = false;
    }
    ajoutNews(id:number, lien:string, titre:string, votes:number, commentaires:Coms[]){
        this.lesnews.push({id:id, lien:lien, titre:titre, votes:votes, commentaires:commentaires, showComs: this.showComs});
        return this.lesnews;
    }
}