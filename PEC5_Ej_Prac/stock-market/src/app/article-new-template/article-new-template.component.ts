import { Component } from '@angular/core';

@Component({
  selector: 'article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent {

  
  createArticle(article){
    console.log("article ->" + article.value);
  }


}
