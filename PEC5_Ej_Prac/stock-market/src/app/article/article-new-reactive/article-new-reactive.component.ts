import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})
export class ArticleNewReactiveComponent {

  constructor(private fb: FormBuilder) { }

  // articleForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   urlImage: new FormControl('')
  // })


  articleForm = this.fb.group({
    name: ['', Validators.required],
    price: [0, Validators.required, Validators.min(0.1)],
    urlImage: ['', Validators.required],
  })

  onSubmit(){
    console.log("enviado! ->", this.articleForm.valid);
  }

}
