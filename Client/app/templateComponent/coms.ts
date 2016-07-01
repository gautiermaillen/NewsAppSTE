export class Coms{ // News class
    private lescoms;
    
    id: number;
    idNews: string;
    texte: number;
    
  constructor(tableau:Object){
    console.log("construit");
        this.lescoms = tableau;
    }
    ajoutComs(id: number, idNews: number, texte: string)
    {
        this.lescoms.push({id: id, idNews:idNews, texte:texte});
        return this.lescoms;
    }
}