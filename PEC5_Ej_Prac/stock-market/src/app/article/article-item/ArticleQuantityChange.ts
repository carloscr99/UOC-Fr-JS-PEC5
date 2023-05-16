import { Article } from "./Article";

export class ArticleQuantityChange{

    public art: Article;
    public quantity: number;

    constructor(){
        this.art = new Article();
        this.quantity = 0;
    }

}