export class News{ // News class
    private lesnews;
    private showComs;
    
    id: string;
    lien: string;
    titre: string;
    votes: number;
    commentaires : string;
    
  constructor(tableau:Object){
    console.log("construit");
        this.lesnews = tableau;
        this.showComs = false;
    }
    ajoutNews(id:number, lien:string, titre:string, votes:number, commentaires:string){
        this.lesnews.push({id:id, lien:lien, titre:titre, votes:votes, commentaires:commentaires, showComs: this.showComs});
        return this.lesnews;
    }
}