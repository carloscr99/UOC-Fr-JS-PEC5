import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})
export class ArticleNewReactiveComponent {

  constructor(private fb: FormBuilder) { }

   articleForm = this.fb.group({
    name: ['', [Validators.required, this.NameArticleValidator(/\b(Prueba|Test|Mock|Fake)\b/i)]],
    price: [0, [Validators.required, Validators.min(0.1)]],
    urlImage: ['', [Validators.required, Validators.pattern('^(http|https)://[a-zA-Z0-9]+\.([a-zA-Z]{2,3})$')]],
  })

  onSubmit(){
    if(this.articleForm.valid){
      console.log("Enhorabuena, el artículo se ha registrado!", this.articleForm.value);
    }
    else{
      console.log("El artículo no es válido");
    }
  }

  NameArticleValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }

}
