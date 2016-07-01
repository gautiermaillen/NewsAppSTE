export class Coms{ // News class
    private lescoms;
    
    id: string;
    idNews: string;
    texte: string;
    
  constructor(tableau:Object){
    console.log("construit");
        this.lescoms = tableau;
    }
    ajoutCom(id: string, idNews: string, texte: string)
    {
        this.lescoms.push({id: id, idNews:idNews, texte:texte});
        return this.lescoms;
    }
}