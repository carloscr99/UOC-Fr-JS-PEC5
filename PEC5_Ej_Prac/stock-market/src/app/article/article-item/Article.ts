export class Article {

    public id: number;
    public name: string;
    public imageUrl: string;
    public price: number;
    public isOnSale: boolean;
    public quantityInCart: number;

    constructor() {
        this.id = 0;
        this.name = '';
        this.imageUrl = '';
        this.price = 0;
        this.isOnSale = false;
        this.quantityInCart = 0;
    }


}