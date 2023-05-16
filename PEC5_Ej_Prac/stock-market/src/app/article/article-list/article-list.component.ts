import { Component, OnInit } from '@angular/core';
import { Article } from '../article-item/Article';
import { ArticleQuantityChange } from '../article-item/ArticleQuantityChange';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {


  articles: Article[] = new Array<Article>();
  public articleQuantity: ArticleQuantityChange;

  constructor() {

    this.articleQuantity = new ArticleQuantityChange();

  }

  onArticleChanged(art: ArticleQuantityChange) {
    console.log("Hola desde el article list");
    this.articleQuantity = art;
  }

  ngOnInit() {


    let articulo: Article = new Article();

    articulo.id = 1;
    articulo.name = 'Pizza';
    articulo.imageUrl = 'https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1343&q=80';
    articulo.price = 23;
    articulo.isOnSale = true;
    articulo.quantityInCart = 0;

    this.articles.push(articulo);

    articulo = new Article();

    articulo.id = 2;
    articulo.name = 'Pan';
    articulo.imageUrl = 'https://images.unsplash.com/photo-1559811814-e2c57b5e69df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
    articulo.price = 1.5;
    articulo.isOnSale = false;
    articulo.quantityInCart = 0;

    this.articles.push(articulo);


    articulo = new Article();

    articulo.id = 3;
    articulo.name = 'Galletas';
    articulo.imageUrl = 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80';
    articulo.price = 3.20;
    articulo.isOnSale = true;
    articulo.quantityInCart = 0;

    this.articles.push(articulo);

  }

  increaseCart(id: number) {

    let art = this.articles.find(item => item.id = id);

    if (art !== undefined)
      art.quantityInCart++;

      console.log('increase from article.list');

  }

  decreaseCart(id: number) {

    let art = this.articles.find(item => item.id = id);

    if (art !== undefined)
      art.quantityInCart--;

  }



}
