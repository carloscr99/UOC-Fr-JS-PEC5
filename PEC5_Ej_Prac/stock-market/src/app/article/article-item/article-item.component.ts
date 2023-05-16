import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';
import { Article } from './Article';
import { ArticleQuantityChange } from './ArticleQuantityChange';

@Component({
  selector: 'article-item',
  template: `
  <div class="articles">

    <div class="article" [ngStyle]="{'background-color': article.isOnSale ? 'transparet' : 'rgb(255 173 154)'}">
        <div class="row">
            <img src={{article.imageUrl}} style="width: 20vw;">
        </div>
        <div class="row">
            <div class="col">
                <label>{{article.name}}</label>
            </div>
            <div class="col">
                <label [ngClass]="article.isOnSale ? '' : 'outOfStock'">{{article.price}}</label>
            </div>
        </div>
        <div *ngIf="article.isOnSale" class="row buttons">
            <div class="col">
                <button class="decrease" [disabled]="article.quantityInCart <= 0 ? true : false" (click)="onArticleChanged($event, 'decrease')">-</button>
            </div>
            <div class="col">
                {{article.quantityInCart}}
            </div>
            <div class="col">
                <button class="increase" (click)="onArticleChanged($event, 'increase')">+</button>
            </div>
        </div>
    </div>
  </div>
  
  `,
  styles: [`
  article-item{
    width: 100% !important;
        
    }

    .articles {
        width: 100%;
        display: flex;
        
    }

    .article{
        width: 30vw;
        border: 1px solid;
    }

    .row.buttons{
        width: 100%;
        display: flex;
    }

    button {

        font-weight: bolder;
        width: 3em;
        border-radius: 30px;
        margin: 0 0.5em 0 0.5em;
    }

    button.decrease{
        background-color: rgb(226, 82, 82);
    }

    button.increase{
        background-color: green;
    }

    label.outOfStock {
        color: gray;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ArticleItemComponent {

  public newArticle: ArticleQuantityChange;

  @Input() public article!: Article;

  @Output() private articleChanged!: EventEmitter<ArticleQuantityChange>;


  constructor() {

    this.newArticle = new ArticleQuantityChange();

    this.articleChanged = new EventEmitter<ArticleQuantityChange>();

  }

  onArticleChanged(event: any, action: string) {


    this.newArticle.art = this.article;

    if (action === 'increase')
      this.newArticle.quantity = this.article.quantityInCart++;
    else
      this.newArticle.quantity = this.article.quantityInCart--


    this.articleChanged.emit(this.newArticle);


  }


}
